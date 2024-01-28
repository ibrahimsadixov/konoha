const searchSym = document.querySelector(".searchSym")
const search = document.querySelector(".search")
const clearInput = document.querySelector(".clearInput")

searchSym.addEventListener("click",()=>{
    search.classList.toggle("openSearch")
    clearInput.classList.toggle("clearInputOpen")
})