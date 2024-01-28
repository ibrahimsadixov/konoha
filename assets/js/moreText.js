const moreText = document.getElementById("moreText");
const aboutText = document.querySelector(".aboutText");

moreText.addEventListener("click", () => {
    aboutText.classList.toggle("openText");
    moreText.innerHTML = aboutText.classList.contains("openText") ? "Less" : "More";
});
