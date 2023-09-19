

var words = ["Responsive.", "Onepage", "Custom", "Professional.","Optimized.", "Ecommerce", "Landing Page"]; // Lista de palabras que se mostrarán

var i = 0; // Índice de la palabra actual
var speed = 200; // Velocidad de escritura (en milisegundos)
var typingEffect = document.getElementById("typing-effect");

function typeNextWord() {
  var currentWord = words[i]; // Obtener la palabra actual
  var currentWordLength = currentWord.length;
  var currentWordIndex = 0;

  // Función recursiva para mostrar letra por letra
  function typeLetter() {
    if (currentWordIndex < currentWordLength) {
      typingEffect.textContent += currentWord.charAt(currentWordIndex);
      currentWordIndex++;
      setTimeout(typeLetter, speed);
    } else {
      setTimeout(eraseWord, speed * 2); // Esperar antes de borrar la palabra
    }
  }

  // Función recursiva para borrar letra por letra
  function eraseWord() {
    if (currentWordIndex >= 0) {
      var currentText = typingEffect.textContent;
      typingEffect.textContent = currentText.slice(0, -1);
      currentWordIndex--;
      setTimeout(eraseWord, speed / 2);
    } else {
      i++;
      if (i >= words.length) {
        i = 0;
      }
      setTimeout(typeNextWord, speed); // Esperar antes de comenzar la siguiente palabra
    }
  }

  typeLetter(); // Comenzar a escribir la palabra actual
}

typeNextWord()


