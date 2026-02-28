const text = `Обнаружен самый важный человек в жизни Дениса.

Имя: Настя
Статус: бесценная

Подтвердить статус?`;

const typingEl = document.getElementById("typingText");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 30);
  }
}

typeWriter();

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

document.getElementById("confirmBtn").onclick = () => {
  screen1.classList.remove("active");
  screen2.classList.add("active");
};

document.getElementById("openMessageBtn").onclick = () => {
  screen2.classList.remove("active");
  screen3.classList.add("active");
};

document.getElementById("foreverBtn").onclick = () => {
  document.getElementById("foreverText").classList.remove("hidden");
};

document.getElementById("doubtBtn").onclick = () => {
  alert("Этот статус установлен навсегда 😌");
};

/* Генерация сердечек */
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 15 + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 500);