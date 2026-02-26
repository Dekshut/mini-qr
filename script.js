const heartBtn = document.getElementById('heart');
const messageDiv = document.getElementById('message');

const message = `Настя, ты — мой дом, мой человек, мой мир. 
Я люблю тебя больше, чем могу объяснить словами. 
Ты самая ценная часть моей жизни 💛`;

function typeWriter(text, i = 0) {
  if (i < text.length) {
    messageDiv.innerHTML += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i), 50);
  }
}

heartBtn.addEventListener('click', () => {
  heartBtn.style.display = 'none';
  messageDiv.classList.remove('hidden');
  typeWriter(message);
});