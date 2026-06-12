window.addEventListener("scroll", () => {
  const menu = document.querySelector(".menu");

  if (window.scrollY > 0) {
    menu.classList.add("rolando");
  } else {
    menu.classList.remove("rolando");
  }
});
