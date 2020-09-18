const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach((chk) => chk.addEventListener("click", handleClick));

let lastChecked;

function handleClick(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((chk) => {
      if (chk === this || chk === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        chk.checked = true;
      }
    });
  }
  lastChecked = this;
}
