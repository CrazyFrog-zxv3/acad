window.addEventListener("scroll", () => {
    const menu = document.querySelector(".menu");

    if (window.scrollY > 0) {
        menu.classList.add("rolando");
    } else {
        menu.classList.remove("rolando");
    }
});

const hamburguer = document.querySelector(".menu-hamburguer");
const menuMobile = document.querySelector(".menu-mobile");
const ai = document.querySelector(".ai");

if (hamburguer && menuMobile && ai) {
    hamburguer.addEventListener("click", () => {
        menuMobile.classList.toggle("ativo");
        ai.classList.toggle("ativo");
    });

    document.querySelectorAll(".menu-mobile a").forEach(link => {
        link.addEventListener("click", () => {
            menuMobile.classList.remove("ativo");
            ai.classList.remove("ativo");
        });
    });
}