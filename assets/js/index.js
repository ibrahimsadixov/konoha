const allCharactersList = document.querySelector(".allCharactersList");
const loadMoreButton = document.querySelector(".loadMore")
const clearInputBtn = document.querySelector(".clearInput")
const clearInputMobile = document.querySelector(".clearInputMobile")


let characters = [
    { name: 'Naruto', surname: 'Uzumaki', height: 180, birthday: "October 10", img: "./assets/images/naruto.png", clan: "Uzumaki", speciality: "Sage Mode, Bijuu, 6 Path Chakra Mode, Kurama Chakra Mode", title: "7th Hokage" },
    { name: 'Sasuke', surname: 'Uchiha', height: 182, birthday: "July 3", img: "./assets/images/26533-9-uchiha-sasuke-transparen.png", clan: "Uchiha", speciality: "Mangekyo Sharingan, Susanoo, Rinnegan,  6 Path Chakra Mode", title: "Shinobi" },
    { name: 'Guy', surname: 'Might ', height: 184, birthday: 'January 1', img: "./assets/images/might_guy_render_3__naruto_mobile__by_maxiuchiha22_dd1miqj-fullview.png", nick: "Konoha's Sublime Green/Blue Beast of Prey", title: "Shinobi" },
    { name: 'Kakashi', surname: 'Hatake', height: 181, birthday: "September 15", img: "./assets/images/kakashi__hatake_render__naruto_mobile__by_maxiuchiha22_dd1v9lo-fullview.png", speciality: "Sharingan", title: "6th Hokage" },
    { name: 'Itachi', surname: 'Uchiha ', height: 178, birthday: 'June 9', img: "./assets/images/Itachi-Uchiha-PNG-Isolated-Image.png", clan: "Uchiha", speciality: "Mangekyo Sharingan, Susasnoo", title: "Shinobi" },
    { name: 'Jiraiya', surname: "", height: 191, birthday: 'November 11', img: "./assets/images/119281-naruto-jiraiya-free-download-png-hq.png", speciality: "Sage Mode", title: "One of the Legendary Sannins" },
    { name: 'Orochimaru', height: 176, birthday: 'October 27', img: "./assets/images/orochimaru_render_artwork__clash_of_ninja_r__2__by_maxiuchiha22_dcznd7e-375w.png", title: "One of the Legendary Sannins" },
    { name: 'Tsunade', height: 163.1, birthday: ' August 2', img: "./assets/images/de8asr5-b2f203d5-287e-4156-b51d-543a1109ca56.png", title: "One of the  Legendary Sannins, 5th Hokage" },
    { name: 'Gaara', surname: '', height: 172.5, birthday: 'January 19', img: "./assets/images/tumblr_ow81x3pkKb1s3h7g4o1_r1_1280.png", speciality: "Bijuu", title: "Kazekage", nick: "Sabaku no Gaara / Gaara of the Sand " },
    { name: 'Sakura', surname: 'Haruno ', height: 165, birthday: 'March 28', img: "./assets/images/Sakura_haruno_render_by_xuzumaki-d49n9i7.webp", title: "fucked by Sasuke", nick: "Dumpster" },
    { name: 'Shino', surname: 'Aburame ', height: 181.3, birthday: 'January 23', img: "./assets/images/shino_aburame_render__slugfest__by_maxiuchiha22_deirmfh-pre.png", clan: "Aburame", speciality: "Using Insects", title: "Shinobi" },
    { name: 'Shikamaru', surname: 'Nara ', height: 176, birthday: 'September 22', img: "./assets/images/29ae564c026d4a2ef34ba21ce3e0a3dfd0b7c84c_2_310x500.png", clan: "Nara", title: "8th Hokage" },
    { name: 'Hiruzen', surname: 'Sarutobi ', height: 163.1, birthday: 'February 8', img: "./assets/images/1b57a18c84dfe46a518ee01b72773dfd.png", title: "3th Hokage" },
    { name: 'Minato', surname: 'Namikaze ', height: 179.2, birthday: 'January 25', img: "./assets/images/Minato_namikaze_render.webp", title: "3th Hokage" },
    { name: 'Iruka', surname: 'Umino ', height: 178, birthday: 'May 26', img: "./assets/images/800px-SCON4_Iruka_Portrait.png", title: "Teacher, Shinobi" },

    
];

function createCharacterCard(character) {
    const card = document.createElement("div");
    card.classList.add("characterCard");
    card.innerHTML = `
        <div class="mainCard">
            <div class="innerCard">
                <img class="image" src="${character.img}" alt="${character.name}">
            </div>
            <div class="details">
                <div class="text">
                <h2 class="name charDet">${character.surname ? `${character.name} ${character.surname}` : character.name}</h2>
                ${character.clan ? `<p class="charDet">Clan: ${character.clan}</p>` : ''}
                
                ${character.birthday ? `<p class="charDet">Birthday: ${character.birthday}</p>` : ''}
                </div>
            </div>
        </div>
        <div class="moreDetails">
            <div class="moreDetailsContainer">
                <h2 class="name charDet">${character.surname ? `${character.name} ${character.surname}` : character.name}</h2>
                ${character.nick ? `<p class="charDet">( ${character.nick} )</p>` : ''}
                ${character.clan ? `<p class="charDet">Clan: ${character.clan}</p>` : ''}
                ${character.birthday ? `<p class="charDet">Birthday: ${character.birthday}</p>` : ''}
                ${character.height ? `<p class="charDet">Height: ${character.height}cm</p>` : ''}
                ${character.title ? `<p class="charDet">Title: ${character.title}</p>` : ''}
                ${character.speciality ? `<p class="charDet">Speciality: ${character.speciality}</p>` : ''}
              
            </div>
        </div>
    `;

    return card;
}

function loadCharacters(startIndex, count) {
    for (let i = startIndex; i < startIndex + count && i < characters.length; i++) {
        const character = characters[i];
        const card = createCharacterCard(character);
        allCharactersList.appendChild(card);
    }
}

let startIndex = 8;

loadCharacters(0, 8);

loadMoreButton.addEventListener("click", () => {
    if (startIndex < characters.length) {
        loadCharacters(startIndex, 8);
        startIndex += 8;
    } else {
        const message = document.createElement("div");
        message.innerHTML = "No more characters to load.";
        message.style.height = "50px";
        message.style.width = "200px";
        message.style.display = "flex";
        message.style.justifyContent = "center";
        message.style.alignItems = "center";
        message.style.position = "fixed";
        message.style.top = "60%";
        message.style.color = "rgb(61, 27, 38)";
        message.style.fontFamily = "monospace";
        message.style.fontWeight = "bold";
        message.style.left = "60%";
        message.style.background = "rgb(247, 187, 77)";
        message.style.borderRadius = "15px";
        message.style.padding = "15px";
        message.style.transform = "translate(-50%)";
        document.querySelector("#body").appendChild(message);
        setTimeout(() => {
            message.remove();
        }, 2000);
    }
});

allCharactersList.addEventListener("click", (event) => {
    const clickedCard = event.target.closest(".characterCard");

    if (!clickedCard) return;

    const mainCard = clickedCard.querySelector(".mainCard");
    const moreDetails = clickedCard.querySelector(".moreDetails");

    mainCard.classList.toggle("close");
    moreDetails.classList.toggle("open");
});

function filterCharacters(searchTerm) {
    return characters.filter(character => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        return (
            (character.name && character.name.toLowerCase().includes(lowerCaseSearchTerm)) ||
            (character.surname && character.surname.toLowerCase().includes(lowerCaseSearchTerm)) ||
            (character.clan && character.clan.toLowerCase().includes(lowerCaseSearchTerm)) ||
            (character.birthday && character.birthday.toLowerCase().includes(lowerCaseSearchTerm)) ||
            (character.title && character.title.toLowerCase().includes(lowerCaseSearchTerm)) ||
            (character.speciality && character.speciality.toLowerCase().includes(lowerCaseSearchTerm)) ||
            (character.nick && character.nick.toLowerCase().includes(lowerCaseSearchTerm))
        );
    });
}

function handleLoadMore() {
    if (startIndex < characters.length) {
        loadCharacters(startIndex, 8);
        startIndex += 8;
    } else {
        const message = document.createElement("div");
        message.classList.add("message")
        message.innerHTML = "No more characters to load.";
    }
}

loadMoreButton.addEventListener("click", handleLoadMore);
function loadCharactersWithSearch(searchTerm) {
    allCharactersList.innerHTML = "";
    startIndex = 8;

    if (searchTerm.length === 0) {
        loadCharacters(0, 8);
        loadMoreButton.style.display = "block";
        loadMoreButton.disabled = false;
        loadMoreButton.removeEventListener("click", handleLoadMore);
        loadMoreButton.addEventListener("click", handleLoadMore);
        return;
    }

    const filteredCharacters = filterCharacters(searchTerm);

    for (let i = 0; i < filteredCharacters.length; i++) {
        const character = filteredCharacters[i];
        const card = createCharacterCard(character);
        card.classList.add('characterCard');
        allCharactersList.appendChild(card);
    }

    if (filteredCharacters.length === 0) {
        const noResultsMessage = document.createElement("div");
        noResultsMessage.innerHTML = "No matching characters found.";
        noResultsMessage.classList.add("noResultsMessage");
        noResultsMessage.style.fontFamily = 'monospace'
        noResultsMessage.style.color = secCol
        noResultsMessage.style.fontSize = "1.4rem"
        noResultsMessage.style.fontWeight = "bold"
        noResultsMessage.style.marginTop = "40vh"
        allCharactersList.appendChild(noResultsMessage);
    }

    loadMoreButton.style.display = "none";
    loadMoreButton.disabled = true;
}

allCharactersList.addEventListener("click", (event) => {
    const clickedCard = event.target.closest(".characterCard");

    if (!clickedCard) return;

    const mainCard = clickedCard.querySelector(".mainCard");
    const moreDetails = clickedCard.querySelector(".moreDetails");

    if (event.target.classList.contains("characterCard")) {
        mainCard.classList.toggle("close");
        moreDetails.classList.toggle("open");
    }
});

const searchh = document.querySelector(".search")

searchh.addEventListener("input", () => {
    startIndex = 0;
    loadCharactersWithSearch(searchh.value.toLowerCase());

});

const searchMobile = document.querySelector(".searchMobile");

searchMobile.addEventListener("input", () => {
    startIndex = 0;
    loadCharactersWithSearch(searchMobile.value.toLowerCase());
});


function createLargeCard(character) {
    const largeCard = createCharacterCard(character);
    largeCard.classList.add("largeCard")

    const largeCardDiv = document.createElement("div")
    largeCardDiv.classList.add("largeCardDiv")
    largeCardDiv.style.position = "fixed";
    largeCardDiv.style.top = "50%";
    largeCardDiv.style.left = "50%";
    largeCardDiv.style.height = "100vh"
    largeCardDiv.style.width = "100%"
    largeCardDiv.style.transform = "translate(-50%, -50%)";
    largeCardDiv.style.zIndex = "1000";
    largeCardDiv.style.background = "rgba(53, 6, 22, 0.5)"
    largeCardDiv.style.display = "flex"
    largeCardDiv.style.justifyContent = "center"
    largeCardDiv.style.alignItems = "center"
    largeCardDiv.style.paddingBottom = "5%"
  
    largeCardDiv.appendChild(largeCard)

    largeCard.addEventListener("click", (event) => {
        const clickedCard = event.target.closest(".characterCard");

        if (!clickedCard) return;

        const mainCard = clickedCard.querySelector(".mainCard");
        const moreDetails = clickedCard.querySelector(".moreDetails");

        mainCard.classList.toggle("close");
        moreDetails.classList.toggle("open");
    });

    largeCardDiv.addEventListener("click", (event) => {
        if (!event.target.closest(".largeCard")) {
            largeCardDiv.remove();
        }
    });
    document.body.appendChild(largeCardDiv);
    return largeCard;
}

allCharactersList.addEventListener("dblclick", (event) => {
    const clickedCard = event.target.closest(".characterCard");

    if (!clickedCard) return;

    const characterIndex = Array.from(allCharactersList.children).indexOf(clickedCard);
    const searchValue = window.innerWidth < 1001 ? searchMobile.value : searchh.value;
    const filteredCharacters = filterCharacters(searchValue.toLowerCase());

    if (characterIndex >= 0 && characterIndex < filteredCharacters.length) {
        const character = characters.find(
            (char) => char.name === filteredCharacters[characterIndex].name
        );
        const largeCard = createLargeCard(character);

        event.stopPropagation();
    }
});


clearInputBtn.addEventListener("click", () => {
    searchh.value = "";
    startIndex = 0;
    loadCharactersWithSearch(searchh.value.toLowerCase());
});

clearInputMobile.addEventListener("click", () => {
    searchMobile.value = "";
    startIndex = 0;
    loadCharactersWithSearch(searchMobile.value.toLowerCase());
});
