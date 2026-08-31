import type { jsPDF } from "jspdf";
import { Capacitor } from "@capacitor/core";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Share } from "@capacitor/share";

/**
 * Converts a Blob to Base64 data URL string.
 */
async function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read blob as Base64"));
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(blob);
  });
}

/**
 * Saves or shares a file universally across Mobile (Android APK / iOS Capacitor / WebViews) & Desktop.
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

  // 1. Primary Direct Automatic Download via Blob URL / Anchor Link (Android Chrome, iOS Safari, Desktop)
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
    }, 3000);
  } catch (anchorErr) {
    console.warn("Direct anchor download failed, attempting platform fallbacks:", anchorErr);
  }

  // 2. Native Capacitor App (Android APK / AAB / iOS Native App)
  if (Capacitor.isNativePlatform()) {
    try {
      const base64DataUrl = await blobToBase64(blob);
      const base64Content = base64DataUrl.includes(",") ? base64DataUrl.split(",")[1] : base64DataUrl;

      // Write file to Cache directory
      const writeResult = await Filesystem.writeFile({
        path: cleanFilename,
        data: base64Content,
        directory: Directory.Cache,
      });

      try {
        await Share.share({
          title: cleanFilename,
          text: `Dairy Hub PDF Document: ${cleanFilename}`,
          url: writeResult.uri,
          dialogTitle: `Save / Download ${cleanFilename}`,
        });
        return true;
      } catch (shareErr: any) {
        if (shareErr?.name === "AbortError" || shareErr?.message?.includes("canceled")) {
          return true;
        }
      }
    } catch (capErr) {
      console.error("Capacitor Filesystem error:", capErr);
    }
  }

  // 3. Fallback for Mobile WebViews (APK/AAB) via Base64 Data URL
  const userAgent = typeof navigator !== "undefined" ? navigator.userAgent || "" : "";
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
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
    } catch (e) {
      console.warn("Data URL fallback download failed:", e);
    }
  }

  return true;
}

/**
 * Saves or shares a jsPDF document instance across Mobile (APK/Capacitor/WebViews) & Desktop browsers.
 */
export async function savePdfFile(pdf: jsPDF, filename: string): Promise<boolean> {
  const cleanFilename = filename.endsWith(".pdf") ? filename : `${filename}.pdf`;

  // 1. Direct jsPDF Automatic Save
  try {
    pdf.save(cleanFilename);
  } catch (e) {
    console.warn("pdf.save fallback:", e);
  }

  // 2. Also trigger Blob URL / Capacitor Filesystem save
  try {
    const blob = pdf.output("blob");
    await saveFile(blob, cleanFilename, "application/pdf");
    return true;
  } catch (err) {
    console.warn("saveFile failed for jsPDF:", err);
  }

  return true;
}
