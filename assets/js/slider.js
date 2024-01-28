const right = document.getElementById("right");
const left = document.getElementById("left");
const char = document.querySelectorAll(".char");
const charDetail = document.querySelectorAll(".charDetail");
let currentIndex = 0;
let clickable = true;
let intervalId;

function handleRightClick() {
    clearInterval(intervalId); 

    if (clickable) {
        clickable = false;
        char[currentIndex].classList.remove("openChar");

        currentIndex = (currentIndex + 1) % char.length;

        char[currentIndex].classList.add("openChar");
        setTimeout(() => {
            clickable = true;
        }, 300);
    }
    intervalId = setInterval(handleRightClick, 5000); 
}

right.addEventListener("click", handleRightClick);

left.addEventListener("click", () => {
    clearInterval(intervalId); 

    if (clickable) {
        clickable = false;
        char[currentIndex].classList.remove("openChar");

        currentIndex = (currentIndex - 1 + char.length) % char.length;

        char[currentIndex].classList.add("openChar");
        setTimeout(() => {
            clickable = true;
        }, 300);
    }
    intervalId = setInterval(handleRightClick, 5000); 
});

charDetail.forEach(detail => {
    detail.addEventListener("mouseenter", () => {
        clearInterval(intervalId);
    });

    detail.addEventListener("mouseleave", () => {
        intervalId = setInterval(handleRightClick, 5000);
    });
});

intervalId = setInterval(handleRightClick, 5000);
