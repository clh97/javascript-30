const pressed = [];
const secretCode = "michel";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  const secret = pressed.reduce((acc, cur) => acc + cur) === secretCode;

  const secret2 = pressed.join("") === secretCode.split("").reverse().join("");

  if (secret) {
    alert("you found the easter egg! :D");
  }

  if (secret2) {
    cornify_add();
  }
});
