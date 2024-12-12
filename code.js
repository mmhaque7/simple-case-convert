document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector('[name="input"]');
  const output = document.querySelector('[name="output"]');

  if (input && output) {
    input.addEventListener("change", () => {
      output.value = toTitleCase(input.value);
    });

    input.addEventListener("keyup", () => {
      output.value = toTitleCase(input.value);
    });

    output.addEventListener("click", () => output.select());
  } else {
    console.error("Input or output element not found");
  }
});

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}
