const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("mouseover", (e) => {
    panel.classList.add("mouseOver");
  });
  panel.addEventListener("mouseleave", (e) => {
    panel.classList.toggle("mouseOver");
  });
});
