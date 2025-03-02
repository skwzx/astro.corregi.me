const API_URL = "https://corregi-me-d93038d6c7ae.herokuapp.com/generate";

// Check if elements exist
const form = document.getElementById("correctionForm") as HTMLFormElement;
const textInput = document.getElementById("textInput") as HTMLTextAreaElement;
const resultContainer = document.getElementById(
  "resultContainer"
) as HTMLDivElement;
const correctedText = document.getElementById(
  "correctedText"
) as HTMLParagraphElement;
const errorContainer = document.getElementById(
  "errorContainer"
) as HTMLDivElement;

if (!form) {
  console.log("Form not found");
} else {
  form.addEventListener("submit", async (e: Event) => {
    e.preventDefault();

    if (resultContainer) resultContainer.style.display = "none";
    if (errorContainer) errorContainer.style.display = "none";

    const text = textInput?.value.trim() || "";
    const typeElement = document.querySelector(
      'input[name="type"]:checked'
    ) as HTMLInputElement;
    const type = typeElement?.value || "mail";

    if (!text) {
      if (errorContainer) {
        errorContainer.textContent = "Por favor, ingresa un texto.";
        errorContainer.style.display = "block";
      }
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          type: type === "mail" ? "mail" : "message",
        }),
      });

      if (!response.ok) {
        throw new Error("Error al procesar la solicitud.");
      }

      const data = await response.json();

      if (correctedText) {
        correctedText.textContent =
          data.correctedText || "No se encontraron errores.";
      }
      if (resultContainer) {
        resultContainer.style.display = "block";
      }
    } catch (err) {
      if (errorContainer) {
        errorContainer.textContent =
          "Hubo un error al procesar la solicitud. Inténtalo de nuevo.";
        errorContainer.style.display = "block";
      }
    }
  });
}
