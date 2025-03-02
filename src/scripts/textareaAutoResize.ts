/**
 * Handles auto-resizing of the textarea based on content
 */
export function initTextareaAutoResize(): void {
  document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById(
      "textInput"
    ) as HTMLTextAreaElement | null;

    // Only proceed if textarea exists
    if (textarea) {
      // Function to adjust height based on content
      const adjustHeight = (): void => {
        // Reset height to auto to get the correct scrollHeight
        textarea.style.height = "auto";

        // Set new height based on scrollHeight (with a minimum height)
        const newHeight = Math.max(100, Math.min(500, textarea.scrollHeight));
        textarea.style.height = `${newHeight}px`;
      };

      // Adjust on input
      textarea.addEventListener("input", adjustHeight);

      // Initial adjustment
      adjustHeight();
    }
  });
}
