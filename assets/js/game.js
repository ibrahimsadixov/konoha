const gameBtn = document.querySelectorAll(".gameLi")
gameBtn.forEach(element => {

  element.addEventListener("click", () => {
    const area = document.createElement("div")

    area.style.width = "100%"
    area.style.background = "white"
    area.style.position = "fixed"
    area.style.top = "0"
    area.style.zIndex = "4"

    area.innerHTML = `
    <canvas class="canvas"></canvas>
    <div id="try"><i id="heart" class="fa-solid fa-heart"></i></div>
  
    <div class="timer"></div>
  
    <div class="game">
      <button id="play">PLAY</button>
    </div>
  `
    const gameCloser = document.createElement("button")
    gameCloser.innerHTML = "X"
    gameCloser.style.position = "absolute"
    gameCloser.style.left = "20px"
    gameCloser.style.top = "20px"
    gameCloser.style.color = "white"
    gameCloser.style.padding = "5px"
    gameCloser.style.zIndex = "999"
    gameCloser.style.border = "0 solid"
    gameCloser.style.background = "transparent"
    gameCloser.style.cursor = "pointer"
    gameCloser.style.fontFamily = "monospace"
    gameCloser.style.fontSize = "2rem"
    gameCloser.addEventListener("click", () => {
      area.remove()
    })
    area.appendChild(gameCloser)
    body.appendChild(area)

    const game = document.querySelector(".game");
    const heart = document.getElementById("heart")

    let images = ["images.jpg", "unnamed.png", "avatars-WnrnAZAFnIvIRPUF-yFHj9g-t500x500.jpg",
      "uchiha-itachi1.webp", "small-112-naruto-jiraya-posters-a4-the-page-original-imaggw2r4dm8hddy.webp", "desenhista-on-artstation-tsunadeart.jpg"]
    const numbers = [0, 1, 2, 3, 4, 5];
    const numbersCopy = [...numbers, ...numbers];
    play.addEventListener("click", () => {
      create()
    })
    function create() {

      function startTimer() {
        let time = 3;
        const timerElement = document.querySelector(".timer");
        timerElement.textContent = time;

        const intervalId = setInterval(() => {
          time--;
          timerElement.textContent = time;

          if (time === 0) {
            setTimeout(() => {

              clearInterval(intervalId);
              timerElement.innerHTML = "";
            }, 500);
          }
        }, 1000);
      }

      startTimer();

      game.innerHTML = ""


      for (let i = numbersCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbersCopy[i], numbersCopy[j]] = [numbersCopy[j], numbersCopy[i]];
      }

      for (let i = 0; i < numbersCopy.length; i++) {
        const cells = document.createElement("div");
        cells.classList.add("cells");
        cells.classList.add("cell" + i);
        cells.dataset.number = numbersCopy[i];
        cells.style.background = "url(./assets/images/" + images[numbersCopy[i]] + ")";
        cells.style.backgroundSize = "cover"
        cells.style.backgroundRepeat = "no-repeat"

        game.appendChild(cells);

        setTimeout(() => {
          const closer = document.createElement("div");
          closer.classList.add("closer");
          cells.appendChild(closer);
          clickEnabled = true;

        }, 3000);
      }

      const allCells = document.querySelectorAll(".cells");
      let selected = [];
      let selectedCells = [];
      var clickEnabled = false;
      let chance = 2
      let correct = 0

      allCells.forEach(element => {
        element.addEventListener("click", () => {
          if (!clickEnabled || element.querySelector('.closer-disabled') || element.classList.contains("correct")) {
            return;
          }

          const clickedClass = element.dataset.number;
          const clickedCell = element.classList[1];

          if (selectedCells.length === 2 && selectedCells[1] === selectedCells[0]) {
            return;
          }

          selectedCells.push(clickedCell);

          if (selected.length != 2) {
            selected.push(clickedClass);
          } else if (selected.length === 2) {
            selected = [];
            selectedCells = [];
            selected.push(clickedClass);
            selectedCells.push(clickedCell);
          }
          else if (selectedCells.includes(clickedCell)) {
            return;
          }
          const closers = document.querySelectorAll(selectedCells.map(cell => `.${cell} .closer`).join(", "));
          closers.forEach(element => element.classList.add("closer-disabled"));

          if (selected.length === 2 && selected[1] === selected[0]) {

            clickEnabled = false;
            correct = correct + 1

            if (correct === 6) {
              setTimeout(() => {
                game.innerHTML = ""
                game.classList.add("win")
                setTimeout(() => {
                  const restart = document.createElement("button")

                  restart.classList.add("restart");
                  restart.innerHTML = "RESTART"
                  game.style.flexDirection = "column"

                  game.appendChild(restart)
                  const restartBtn = document.querySelector(".restart")
                  restartBtn.addEventListener("click", () => {

                    create()
                    restartBtn.remove()
                    heart.classList = "fa-solid fa-heart"
                    game.classList.remove("win")
                    game.style.flexDirection = "row"
                  })
                }, 700);

              }, 500);
            }

            setTimeout(() => {
              const correctElements = document.querySelectorAll(selectedCells.map(cell => `.${cell}`).join(", "));
              correctElements.forEach(element => element.classList.add("correct"));
              const closers = document.querySelectorAll(selectedCells.map(cell => `.${cell} .closer`).join(", "));
              closers.forEach(element => element.remove());
              clickEnabled = true;

            }, 400);

          } else if (selected.length === 2 && selected[1] != selected[0]) {

            chance = chance - 1
            clickEnabled = false;

            setTimeout(() => {
              const closers = document.querySelectorAll(selectedCells.map(cell => `.${cell} .closer`).join(", "));
              closers.forEach(element => element.classList.remove("closer-disabled"));

              clickEnabled = true;
              heart.classList = "fa-regular fa-heart"

            }, 500);
            if (chance === 0) {

              setTimeout(() => {
                game.innerHTML = ""
                game.classList.add("lose")
                setTimeout(() => {
                  game.classList.remove("lose")

                  const restart = document.createElement("button")

                  restart.classList.add("restart");
                  restart.innerHTML = "RESTART"

                  game.appendChild(restart)
                  const restartBtn = document.querySelector(".restart")
                  restartBtn.addEventListener("click", () => {

                    create()
                    restartBtn.remove()
                    heart.classList = "fa-solid fa-heart"
                  })


                }, 700);
              }, 500);
            }
          }

        });
      });


    }

    const canvas = document.querySelector(".canvas");
    const ctx = canvas.getContext("2d");

    let screen, stars;
    const params = { speed: 2, number: 300, extinction: 4 };

    setupStars();
    updateStars();

    function Star() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.z = Math.random() * canvas.width;

      this.move = function () {
        this.z -= params.speed;
        if (this.z <= 0) {
          this.z = canvas.width;
        }
      };

      this.show = function () {
        let x, y, rad, opacity;
        x = (this.x - screen.c[0]) * (canvas.width / this.z);
        x = x + screen.c[0];
        y = (this.y - screen.c[1]) * (canvas.width / this.z);
        y = y + screen.c[1];
        rad = canvas.width / this.z;
        opacity = rad > params.extinction ? 1.5 * (2 - rad / params.extinction) : 1;

        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 255, 255, .5)";
        ctx.arc(x, y, rad, 0, Math.PI * 2);
        ctx.fill();
      };
    }

    function setupStars() {
      screen = {
        w: window.innerWidth,
        h: window.innerHeight,
        c: [window.innerWidth * 0.5, window.innerHeight * 0.5],
      };
      canvas.width = screen.w;
      canvas.height = screen.h;
      stars = [];
      for (let i = 0; i < params.number; i++) {
        stars[i] = new Star();
      }
    }

    function updateStars() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach(function (s) {
        s.show();
        s.move();
      });
      window.requestAnimationFrame(updateStars);
    }

  })

});