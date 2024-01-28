const logo = document.getElementById("logo");
const toggleMenu = document.getElementById("toggleMenu");
const mobileMenu = document.getElementById("mobileMenu");

logo.addEventListener("click", () => {
    window.location.href = "./index.htm";
});

toggleMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobileMenuOpen");
    toggleMenu.classList.toggle("fa-x");
});

document.addEventListener("click", (event) => {
    const isClickInsideMobileMenu = mobileMenu.contains(event.target);
    const isClickOnToggleMenu = toggleMenu.contains(event.target);


    if (!isClickInsideMobileMenu && !isClickOnToggleMenu) {

        if (mobileMenu.classList.contains("mobileMenuOpen")) {
            mobileMenu.classList.remove("mobileMenuOpen");
            toggleMenu.classList.remove("fa-x");
        }
    }
});
