let panel = document.getElementById("panel");
const direction = document.getElementById("direction");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
let txt = document.getElementById("txt");
const cpy = document.getElementById("cpy");
const generate = document.getElementById("generate");

generate.addEventListener("click", () => {
  let gradient = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
  panel.style.background = gradient;
  txt.textContent = gradient;
});

cpy.addEventListener("click", () => {
  let str = txt.textContent;
  navigator.clipboard.writeText(str).then(() => {
    alert("copied");
  }),
    () => {
      alert("failed");
    };
});
