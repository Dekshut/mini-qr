const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const doubtBtn = document.getElementById("doubtBtn");
const confirmBtn = document.getElementById("confirmBtn");
const paw = document.getElementById("paw");

confirmBtn.onclick = () => {
  screen1.classList.remove("active");
  screen2.classList.add("active");
};

// Убегающая кнопка
doubtBtn.addEventListener("touchstart", moveButton);
doubtBtn.addEventListener("mouseover", moveButton);

function moveButton() {
  doubtBtn.style.position = "absolute";
  doubtBtn.style.left = Math.random() * 200 + "px";
  doubtBtn.style.top = Math.random() * 300 + "px";
}

// Если вдруг нажала
doubtBtn.onclick = () => {
  paw.classList.remove("hidden");
  setTimeout(() => {
    doubtBtn.style.display = "none";
  }, 300);
};

// Экран 2 логика
const wrongBtn = document.querySelector(".wrong");
const correctBtns = document.querySelectorAll(".correct");
const hint = document.getElementById("hintText");

wrongBtn.onclick = () => {
  wrongBtn.classList.add("shake");
  hint.classList.remove("hidden");
  setTimeout(() => wrongBtn.classList.remove("shake"), 400);
};

correctBtns.forEach(btn => {
  btn.onclick = () => {
    screen2.classList.remove("active");
    screen3.classList.add("active");
  };
});

// Финал
document.getElementById("heartOpen").onclick = () => {
  document.getElementById("foreverText").classList.remove("hidden");
  if (navigator.vibrate) navigator.vibrate(200);
};