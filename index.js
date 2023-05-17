
const  nav = document.querySelector("#navi")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
 nav.classList.add("visible")
})

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible")
})

window.addEventListener("scroll", function(){
    var header = document.querySelector(".navbar");
    header.classList.toggle("abajo",window.scrollY>0);
  })
  
  
  
  
  
  const cartas = document.getElementsByClassName("cartas");
  
  // Recorre los elementos y agrega el evento de clic a cada uno
  for (let i = 0; i < cartas.length; i++) {
    const carta = cartas[i];
  
    // Agrega el evento de clic a la clase "contenido-oculto"
    carta.addEventListener("click", function() {
      const contenido = this.getElementsByClassName("contenido-oculto")[0];
  
  
      
      // Alterna la visibilidad del contenido al hacer clic
      if (contenido.style.display === "none") {
        contenido.style.display = "block";
      } else {
        contenido.style.display = "none";
      }
    });
  }
  
  
  const elemento = document.getElementById("elemento");
  const boton = document.getElementById("boton");
  let visible = true;
  
  boton.addEventListener("click", function() {
    if (visible) {
      elemento.style.display = "none";
      visible = false;
    } else {
      elemento.style.display = "block";
      visible = true;
    }
  });
  


  
  
  
  
      
  
  
  
  
  