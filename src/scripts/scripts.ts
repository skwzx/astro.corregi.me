const API_URL = "https://corregi-me-d93038d6c7ae.herokuapp.com/generate";
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

form.addEventListener("submit", async (e: Event) => {
  e.preventDefault();

  resultContainer.hidden = true;
  errorContainer.hidden = true;

  const text = textInput.value.trim();
  const type = (
    document.querySelector('input[name="type"]:checked') as HTMLInputElement
  ).value;

  if (!text) {
    errorContainer.textContent = "Por favor, ingresa un texto.";
    errorContainer.hidden = false;
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        mail: type === "mail" ? "mail" : "message",
      }),
    });

    if (!response.ok) {
      throw new Error("Error al procesar la solicitud.");
    }

    const data = await response.json();
    correctedText.textContent =
      data.correctedText || "No se encontraron errores.";
    resultContainer.hidden = false;
  } catch (err) {
    errorContainer.textContent =
      "Hubo un error al procesar la solicitud. Inténtalo de nuevo.";
    errorContainer.hidden = false;
  }
});
