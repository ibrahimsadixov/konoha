

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCxNIf_0XF0Kgcd86z8-9NOdY_Gqi-lnBg",
    authDomain: "konoha-b5688.firebaseapp.com",
    projectId: "konoha-b5688",
    storageBucket: "konoha-b5688.appspot.com",
    messagingSenderId: "653364218135",
    appId: "1:653364218135:web:57ecbb520abdcb24388f52",
    measurementId: "G-RQ4ZHQHPH6"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);




let naruto = ["/assets/images/1342988.png", "naruto.m4a","#fe7a35", "#5988b3","/assets/images/konohaNaruto.svg"]
let sasuke = ["/assets/images/sasuke-uchiha-mh.jpg", "sasuke.m4a", "#83739b", "#bb3936","/assets/images/konohaSasuke.svg"]
let itachi = ["/assets/images/maxresdefault-514827900.jpg", "itachi.m4a", "#8798a6", "#d20001","/assets/images/konohaItachi.svg"]
let kakashi = ["/assets/images/kakashi-hatake-holding-the-warding-mask.jpg", "kakashi.m4a", "#c2c2ce", "#40527e","/assets/images/konohaKakashi.svg"]
let gaara = ["/assets/images/fMnkTr-2877682326.jpg", "gaara.m4a", "#c6ae91", "#9e3642","/assets/images/konohaGaara.svg"]
let jiraiya = ["/assets/images/671127.jpg", "jiraiya.m4a", "#953f45", "#9d834d","/assets/images/konohaJiraiya.svg"]
let akatsuki = ["/assets/images/HD-wallpaper-akatsuki-organization-anime.jpg", "akatsuki.m4a", "#bd8c49", "#f24e47","/assets/images/konohaAkatsuki.svg"]
let guy = ["/assets/images/1329957.jpeg", "mightGuy.m4a", "#f21a36", "#3a705d","/assets/images/konohaGuy.svg"]

const background = document.getElementById("background");
const themeSong = document.getElementById("themeSong");
const audioPlayer = document.getElementById("audioPlayer");
const playBtn = document.querySelector(".fa-pause");
var linkNav = document.querySelectorAll(".linkNav")
const loadMore = document.querySelector(".loadMore")
var chars = document.querySelectorAll(".charText")
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

async function setTheme(character) {
    const audioFileName = character[1];
    const audioFileURL = await getDownloadURL(ref(storage, audioFileName));
    console.log(audioFileURL)
    localStorage.setItem("backgroundTheme", character[0]);
    localStorage.setItem("songTheme", audioFileURL);
    localStorage.setItem("firstColor", character[2]);
    localStorage.setItem("secondColor", character[3]);
    localStorage.setItem("logo", character[4]);

    setTimeout(() => {
        themeSong.play()
        updatePlayPauseIcon();
    }, 1000);

    themeSetter();
    updatePlayPauseIcon();
}

const itachiChar = document.querySelector(".itachi");
const narutoChar = document.querySelector(".naruto");
const sasukeChar = document.querySelector(".sasuke");
const jiraiyaChar = document.querySelector(".jiraiya");
const gaaraChar = document.querySelector(".gaara");
const kakashiChar = document.querySelector(".kakashi");
const akatsukiChar = document.querySelector(".akatsuki");
const guyChar = document.querySelector(".guy");

var firCol
var secCol

window.onload = () => {
    if (localStorage.getItem("backgroundTheme") == null || localStorage.getItem("songTheme") == null) {
        background.style.backgroundImage = `url(/assets/images/1342988.png)`;
        themeSong.src = `https://firebasestorage.googleapis.com/v0/b/konoha-b5688.appspot.com/o/naruto.m4a?alt=media&token=22f33c69-8f5d-413c-ba38-3b1b5fd69d77`;
    
        firCol = "#fe7a35" 
        secCol = "#5988b3"
        audioPlayer.style.backgroundColor = firCol
        audioPlayer.style.color = secCol
        audioPlayer.style.borderColor = secCol
        toggleMenu.style.color = firCol
        right.style.color = firCol
        left.style.color = firCol
        linkNav.forEach(element => {
            element.style.color = firCol
        })
        loadMore.style.background = secCol
        loadMore.style.color = firCol
        loadMore.style.borderColor = "transparent"
        chars.forEach(element => {
            element.style.color = secCol
        });
        logos.src='/assets/images/konohaNaruto.svg';
        themeSong.play();
        updatePlayPauseIcon();
    } else {
        themeSetter();
    }
    document.body.classList.remove("loading")
    document.body.classList.add("loaded")
};

itachiChar.addEventListener("click", () => setTheme(itachi));
narutoChar.addEventListener("click", () => setTheme(naruto));
jiraiyaChar.addEventListener("click", () => setTheme(jiraiya));
sasukeChar.addEventListener("click", () => setTheme(sasuke));
gaaraChar.addEventListener("click", () => setTheme(gaara));
kakashiChar.addEventListener("click", () => setTheme(kakashi));
akatsukiChar.addEventListener("click", () => setTheme(akatsuki));
guyChar.addEventListener("click", () => setTheme(guy));






function themeSetter() {
    background.style.backgroundImage = `url(${localStorage.getItem("backgroundTheme")})`;
    themeSong.src = `${localStorage.getItem("songTheme")}`;
   
    right.style.color = localStorage.getItem("firstColor")
    left.style.color = localStorage.getItem("firstColor")
    firCol = localStorage.getItem("firstColor")
    secCol = localStorage.getItem("secondColor")
    audioPlayer.style.backgroundColor = firCol
    audioPlayer.style.color = secCol
    audioPlayer.style.borderColor = secCol
    toggleMenu.style.color = firCol
    loadMore.style.background = secCol
    loadMore.style.color = firCol
    loadMore.style.borderColor = "transparent"
    chars.forEach(element => {
        element.style.color = secCol
    });
    logos.src= `${localStorage.getItem("logo")}`;
    linkNav.forEach(element => {
        element.style.color = firCol
    })

    setTimeout(() => {
        themeSong.play()
        updatePlayPauseIcon();
    }, 1000);
}


if (window.innerWidth > 1000) {

    right.addEventListener("mouseover", () => {
        right.style.color = secCol
        right.classList.add("transition")
    })
    right.addEventListener("mouseout", () => {
        right.style.color = firCol
        right.classList.remove("transition")
    })

    left.addEventListener("mouseover", () => {
        left.style.color = secCol
        left.classList.add("transition")
    })
    left.addEventListener("mouseout", () => {
        left.style.color = firCol
        left.classList.remove("transition")
    })

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

        loadMore.addEventListener("mouseover", () => {
            loadMore.style.background = firCol
            loadMore.style.color = secCol
            loadMore.style.borderColor = secCol
            loadMore.classList.add("transition")
        })
        loadMore.addEventListener("mouseout", () => {
            loadMore.style.background = secCol
            loadMore.style.color = firCol
            loadMore.style.borderColor = "transparent"
            loadMore.classList.remove("transition")
        })
    });
}
