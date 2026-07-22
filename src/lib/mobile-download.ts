import type { jsPDF } from "jspdf";

/**
 * Saves or shares a file universally across Mobile (iOS/Android/Capacitor) & Desktop.
 */
export async function saveFile(
  content: string | Blob,
  filename: string,
  mimeType: string = "application/octet-stream"
): Promise<boolean> {
  if (typeof window === "undefined") return false;

  const blob = typeof content === "string" ? new Blob([content], { type: mimeType }) : content;
  const file = new File([blob], filename, { type: blob.type || mimeType });

  // 1. Try Mobile Web Share API first (iOS Safari, Android Chrome, Native WebViews)
  if (typeof navigator !== "undefined" && navigator.canShare) {
    try {
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: filename,
        });
        return true;
      }
    } catch (shareErr: any) {
      if (shareErr?.name === "AbortError") {
        return true; // User intentionally cancelled share sheet
      }
      console.warn("Web Share API failed, falling back to download link:", shareErr);
    }
  }

  // 2. Mobile Detection (iOS Safari / WebViews)
  const userAgent = typeof navigator !== "undefined" ? navigator.userAgent || "" : "";
  const isIOS =
    /iPad|iPhone|iPod/.test(userAgent) ||
    (typeof navigator !== "undefined" && navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  const blobUrl = URL.createObjectURL(blob);

  // iOS Safari blocks anchor download attribute for blob/data URLs
  if (isIOS) {
    const opened = window.open(blobUrl, "_blank");
    if (!opened) {
      window.location.href = blobUrl;
    }
    setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
    return true;
  }

  // 3. Desktop & Standard Android Browser
  try {
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    link.target = "_blank";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
      URL.revokeObjectURL(blobUrl);
    }, 2000);
    return true;
  } catch (err) {
    console.warn("Anchor click failed, fallback to location href:", err);
    window.location.href = blobUrl;
    return true;
  }
}

/**
 * Saves or shares a jsPDF document instance across Mobile & Desktop browsers.
 */
export async function savePdfFile(pdf: jsPDF, filename: string): Promise<boolean> {
  const cleanFilename = filename.endsWith(".pdf") ? filename : `${filename}.pdf`;
  try {
    const blob = pdf.output("blob");
    return await saveFile(blob, cleanFilename, "application/pdf");
  } catch (err) {
    console.warn("Error extracting PDF blob, falling back to pdf.save:", err);
    pdf.save(cleanFilename);
    return true;
  }
}
