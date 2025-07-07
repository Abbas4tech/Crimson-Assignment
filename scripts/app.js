// --- Icons managing script
const buttons = Array.from(document.querySelectorAll("[data-icon]"));
buttons.forEach((btn) => {
  const iconUrl = btn.getAttribute("data-icon");
  btn.classList.add("icon");
  btn.style.setProperty("--icon-url", `url('${iconUrl}')`);
});

const panel = document.querySelector("nav.flex-container-between");

let isPanelOpen = false;
document.getElementById("toggle-menu").addEventListener("click", (e) => {
  console.log("button clicked", panel);
});
