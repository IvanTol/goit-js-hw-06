const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", () => {
  inputRef.value === ""
    ? (spanRef.textContent = "Anonymous")
    : (spanRef.textContent = inputRef.value);
});
