
const background = document.getElementById("background");
const themeSong = document.getElementById("themeSong");
const audioPlayer = document.getElementById("audioPlayer");
const playBtn = document.querySelector(".fa-pause");

const linkNav = document.querySelectorAll(".linkNav")
const searchSymMobile = document.querySelector(".searchSymMobile")

const logos = document.getElementById("logo")

audioPlayer.addEventListener("click", () => {
    if (themeSong.paused) {
        themeSong.play();
    } else {
        themeSong.pause();
    }
    updatePlayPauseIcon();

});

function updatePlayPauseIcon() {
    if (themeSong.paused) {
        playBtn.classList.add("fa-play");
        playBtn.classList.remove("fa-pause");
    } else if (!themeSong.paused) {
        playBtn.classList.remove("fa-play");
        playBtn.classList.add("fa-pause");
    }
}

var firCol
var secCol

window.onload = () => {
    if (localStorage.getItem("backgroundTheme") == null || localStorage.getItem("songTheme") == null) {
        background.style.backgroundImage = `url(/assets/images/1342988.png)`;
        themeSong.src = `https://firebasestorage.googleapis.com/v0/b/konoha-b5688.appspot.com/o/naruto.weba?alt=media&token=22f33c69-8f5d-413c-ba38-3b1b5fd69d77`;
        firCol = "#fe7a35" 
        secCol = "#5988b3"
        linkNav.forEach(element => {
            element.style.color = firCol
        })
        audioPlayer.style.backgroundColor = firCol
        audioPlayer.style.color = secCol
        audioPlayer.style.borderColor = secCol
        searchSymMobile.style.color = firCol
        searchSym.style.color = firCol
        toggleMenu.style.color = firCol
        clearInputBtn.style.color=firCol
        clearInputMobile.style.color=firCol
        logos.src='/assets/images/konohaNaruto.svg';
        themeSong.play();
        updatePlayPauseIcon();
    } else {
        themeSetter();
    }
    document.body.classList.remove("loading")
    document.body.classList.add("loaded")
};


function themeSetter() {
    background.style.backgroundImage = `url(${localStorage.getItem("backgroundTheme")})`;
    themeSong.src = `${localStorage.getItem("songTheme")}`;
    firCol = localStorage.getItem("firstColor")
    secCol = localStorage.getItem("secondColor")
    audioPlayer.style.backgroundColor = firCol
    audioPlayer.style.color = secCol
    audioPlayer.style.borderColor = secCol
    searchSymMobile.style.color = firCol
    searchSym.style.color = firCol
    toggleMenu.style.color = firCol
    loadMoreButton.style.background = secCol
    loadMoreButton.style.color = firCol
    logos.src= `${localStorage.getItem("logo")}`;
    linkNav.forEach(element => {
        element.style.color = firCol
    })

    clearInputBtn.style.color=firCol
    clearInputMobile.style.color=firCol
    setTimeout(() => {
        themeSong.play()
        updatePlayPauseIcon();
    }, 1000);
}

if (window.innerWidth > 1000) {

    linkNav.forEach(element => {
        element.style.color = firCol
        element.addEventListener("mouseover", () => {
            element.style.color = secCol
            element.classList.add("transition")

        })
        element.addEventListener("mouseout", () => {
            element.style.color = firCol
            element.classList.remove("transition")

        })
    });


    searchSym.addEventListener("mouseover", () => {
        searchSym.style.color = secCol
        searchSym.classList.add("transition")
    })
    searchSym.addEventListener("mouseout", () => {
        searchSym.style.color = firCol
        searchSym.classList.remove("transition")
    })

    loadMoreButton.addEventListener("mouseover", () => {
        loadMoreButton.style.background = firCol
        loadMoreButton.style.color = secCol
        loadMoreButton.style.borderColor = secCol
        loadMoreButton.classList.add("transition")
    })
    loadMoreButton.addEventListener("mouseout", () => {
        loadMoreButton.style.background = secCol
        loadMoreButton.style.color = firCol
        loadMoreButton.style.borderColor = "transparent"
        loadMoreButton.classList.remove("transition")
    })

}