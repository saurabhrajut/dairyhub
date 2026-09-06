import type { jsPDF } from "jspdf";
import { Capacitor } from "@capacitor/core";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Share } from "@capacitor/share";

/**
 * Converts a Blob or string to Base64 data string.
 */
async function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read file as Base64"));
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(blob);
  });
}

export interface SaveFileResult {
  success: boolean;
  uri?: string;
  savedToStorage?: boolean;
  message?: string;
}

/**
 * Saves or shares ANY file (PDF, Certificate, DOC, CSV, Image, TXT, Excel)
 * directly into the user's Mobile Local Storage (Documents / Downloads) and web browsers.
 */
export async function saveFile(
  content: string | Blob,
  filename: string,
  mimeType: string = "application/octet-stream"
): Promise<boolean> {
  if (typeof window === "undefined") return false;

  const cleanFilename = filename.replace(/[^\w\.\-]/g, "_");
  const blob = typeof content === "string" ? new Blob([content], { type: mimeType }) : content;
  const fileType = blob.type || mimeType;

  // =========================================================================
  // 1. NATIVE MOBILE APP (Android APK / AAB / iOS Installed Capacitor App)
  // =========================================================================
  if (Capacitor.isNativePlatform()) {
    try {
      // 1A. Check and request storage permissions on Android
      try {
        const permStatus = await Filesystem.checkPermissions();
        if (permStatus.publicStorage !== "granted") {
          await Filesystem.requestPermissions();
        }
      } catch (permErr) {
        console.warn("Storage permission check warning:", permErr);
      }

      // 1B. Convert content to pure base64
      const base64DataUrl = await blobToBase64(blob);
      const base64Content = base64DataUrl.includes(",")
        ? base64DataUrl.split(",")[1]
        : base64DataUrl;

      let savedFileUri = "";
      let writtenToPublicStorage = false;

      // 1C. Attempt saving directly to user's Mobile Device Local Storage (Documents Folder)
      try {
        const docResult = await Filesystem.writeFile({
          path: cleanFilename,
          data: base64Content,
          directory: Directory.Documents,
          recursive: true,
        });
        savedFileUri = docResult.uri;
        writtenToPublicStorage = true;
      } catch (docErr) {
        console.warn("Write to Directory.Documents failed, trying Directory.ExternalStorage:", docErr);
        try {
          const extResult = await Filesystem.writeFile({
            path: cleanFilename,
            data: base64Content,
            directory: Directory.ExternalStorage,
            recursive: true,
          });
          savedFileUri = extResult.uri;
          writtenToPublicStorage = true;
        } catch (extErr) {
          console.warn("Write to Directory.ExternalStorage failed, trying Directory.Data:", extErr);
          try {
            const dataResult = await Filesystem.writeFile({
              path: cleanFilename,
              data: base64Content,
              directory: Directory.Data,
              recursive: true,
            });
            savedFileUri = dataResult.uri;
          } catch (dataErr) {
            console.warn("Write to Directory.Data failed:", dataErr);
          }
        }
      }

      // 1D. Also save a copy in Cache directory for 100% compliant FileProvider sharing across apps
      let shareUri = savedFileUri;
      try {
        const cacheResult = await Filesystem.writeFile({
          path: cleanFilename,
          data: base64Content,
          directory: Directory.Cache,
          recursive: true,
        });
        shareUri = cacheResult.uri;
      } catch (cacheErr) {
        console.warn("Write to Directory.Cache warning:", cacheErr);
      }

      // 1E. Open Native Android/iOS Share & Open Sheet
      // This allows the user to immediately view with PDF Reader, Save to Google Drive,
      // Print, or share via WhatsApp/Email. Even if cancelled, the file is ALREADY on their phone!
      try {
        await Share.share({
          title: cleanFilename,
          text: `Dairy Hub: ${cleanFilename}`,
          url: shareUri || savedFileUri,
          dialogTitle: `Open / Save ${cleanFilename}`,
        });
      } catch (shareErr: any) {
        // User cancelling or dismissing the share sheet is normal; file is already in storage
        if (shareErr?.name !== "AbortError" && !shareErr?.message?.includes("canceled")) {
          console.warn("Native Share sheet note:", shareErr);
        }
      }

      return true;
    } catch (capErr) {
      console.error("Capacitor Native Filesystem save failed, falling back to Web APIs:", capErr);
    }
  }

  // =========================================================================
  // 2. MOBILE WEB (Mobile Safari on iPhone / Mobile Chrome / Tablets)
  // =========================================================================
  // On iOS Safari, navigator.share with files allows direct "Save to Files" (iCloud / Device Downloads)
  if (typeof navigator !== "undefined" && typeof File !== "undefined" && navigator.canShare) {
    try {
      const file = new File([blob], cleanFilename, { type: fileType });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: cleanFilename,
          text: `Dairy Hub: ${cleanFilename}`,
        });
        return true;
      }
    } catch (shareErr: any) {
      if (shareErr?.name === "AbortError") {
        return true; // User cancelled
      }
      console.warn("Mobile Web Share failed, falling back to direct anchor download:", shareErr);
    }
  }

  // =========================================================================
  // 3. DIRECT BROWSER DOWNLOAD (Standard Anchor Blob Download)
  // =========================================================================
  try {
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = cleanFilename;
    link.setAttribute("download", cleanFilename);
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      if (link.parentNode) link.parentNode.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    }, 4000);
    return true;
  } catch (anchorErr) {
    console.warn("Direct anchor download failed, trying Base64 data URL fallback:", anchorErr);
  }

  // =========================================================================
  // 4. FALLBACK FOR EMBEDDED WEBVIEWS VIA DATA URL
  // =========================================================================
  try {
    const dataUrl = await blobToBase64(blob);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = cleanFilename;
    link.setAttribute("download", cleanFilename);
    link.target = "_blank";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      if (link.parentNode) link.parentNode.removeChild(link);
    }, 2000);
    return true;
  } catch (e) {
    console.error("All download and storage methods failed:", e);
    return false;
  }
}

/**
 * Saves or shares a jsPDF document instance across Mobile Local Storage (APK/AAB/Capacitor),
 * Mobile Safari / Chrome, and Desktop browsers without redundant double-downloads.
 */
export async function savePdfFile(pdf: jsPDF, filename: string): Promise<boolean> {
  const cleanFilename = filename.endsWith(".pdf") ? filename : `${filename}.pdf`;

  try {
    const blob = pdf.output("blob");
    return await saveFile(blob, cleanFilename, "application/pdf");
  } catch (err) {
    console.warn("Direct blob output failed, falling back to pdf.save:", err);
    try {
      pdf.save(cleanFilename);
      return true;
    } catch (saveErr) {
      console.error("pdf.save fallback failed:", saveErr);
      return false;
    }
  }
}
