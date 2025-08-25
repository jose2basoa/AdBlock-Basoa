// -------------------------------
// Efeito de digitação do título
// -------------------------------
const words = [" Melhor!", " Mais seguro!", " Mais rápido!"];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;
const speed = 50;   // velocidade de digitação
const pause = 2000; // pausa antes de apagar

function type() {
  const textElement = document.getElementById('text');

  if (isDeleting) {
    currentWord = words[i].substring(0, j--);
  } else {
    currentWord = words[i].substring(0, j++);
  }

  textElement.textContent = currentWord;

  if (!isDeleting && j === words[i].length + 1) {
    isDeleting = true;
    setTimeout(type, pause);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, speed);
  }
}
type();
