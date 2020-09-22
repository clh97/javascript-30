const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offseTop;
  }

  const xWalk = (x / width) * walk - walk / 2;
  const yWalk = (y / height) * walk - walk / 2;

  text.style.textShadow = `
    ${xWalk}px ${yWalk * -0.25}px 0 rgba(255, 0, 0, .33),
    ${xWalk * -0.5}px ${yWalk}px 0 rgba(0, 255, 0, .33),
    ${xWalk}px ${yWalk * -0.75}px 0 rgba(0, 0, 255, .33),
    ${xWalk * -1}px ${yWalk}px 0 rgba(255, 0, 255, .33)
  `;

  console.log(xWalk, yWalk);
}

hero.addEventListener("mousemove", shadow);
