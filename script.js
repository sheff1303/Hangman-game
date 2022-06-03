const names = prompt("Як вас звати?", "");
console.log(`Привіт, ${names}`);

const likeCats = confirm("Тобі подобаються кішки?", "");
if (likeCats) {
  console.log("Ти кльова!");
} else {
  console.log("Без проблем!");
}
