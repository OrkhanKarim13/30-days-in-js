let buttona = document.querySelector(".btnA");
let buttons = document.querySelector(".btnS");
let buttond = document.querySelector(".btnD");
let buttonf = document.querySelector(".btnF");
let buttong = document.querySelector(".btnG");
let buttonh = document.querySelector(".btnH");
let buttonj = document.querySelector(".btnJ");
let buttonk = document.querySelector(".btnK");
let buttonl = document.querySelector(".btnL");

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    playaudio("notA");
    buttona.classList.add('active')
    setTimeout(() => {
        buttona.classList.remove("active");
      }, 200);
  } else if (event.key === "s" || event.key === "S") {
    playaudio("notS");
    buttons.classList.add('active')
    setTimeout(() => {
        buttons.classList.remove("active");
      }, 200);
  } else if (event.key === "d" || event.key === "D") {
    playaudio("notD");
    buttond.classList.add('active')
    setTimeout(() => {
        buttond.classList.remove("active");
      }, 200);
  } else if (event.key === "f" || event.key === "F") {
    playaudio("notF");
    buttonf.classList.add('active')
    setTimeout(() => {
        buttonf.classList.remove("active");
      }, 200);
  } else if (event.key === "g" || event.key === "G") {
    playaudio("notG");
    buttong.classList.add('active')
    setTimeout(() => {
        buttong.classList.remove("active");
      }, 200);
  } else if (event.key === "h" || event.key === "H") {
    playaudio("notH");
    buttonh.classList.add('active')
    setTimeout(() => {
        buttonh.classList.remove("active");
      }, 200);
  } else if (event.key === "j" || event.key === "J") {
    playaudio("notJ");
    buttonj.classList.add('active')
    setTimeout(() => {
        buttonj.classList.remove("active");
      }, 200);
  } else if (event.key === "k" || event.key === "K") {
    playaudio("notK");
    buttonk.classList.add('active')
    setTimeout(() => {
        buttonk.classList.remove("active");
      }, 200);
  } else if (event.key === "l" || event.key === "L") {
    playaudio("notL");
    buttonl.classList.add('active')
  }
});

function playaudio(sesID) {
  var sesElementi = document.getElementById(sesID);
  sesElementi.currentTime = 0;
  sesElementi.play();
}
