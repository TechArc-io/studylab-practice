const form = document.querySelector("#reflection-form");
const status = document.querySelector("#form-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const reflection = String(data.get("reflection") ?? "").trim();
  status.textContent = reflection
    ? "Reflection recorded in this browser session."
    : "Write a reflection before saving.";
});
