const $nav = document.getElementById("nav");
const $links = document.querySelectorAll("#links a");
const $skill = document.getElementById("skills");
const $downloadBtn = document.getElementById("downloadBtn");
const $submitBtn = document.getElementById("contactForm");

//funcion que aplica el estilo al enlace selecionado en el menu  y quita el previamente selecionado
function selection(link) {
  $links[0].className = "";
  $links[1].className = "";
  $links[2].className = "";
  $links[3].className = "";
  $links[4].className = "";
  link.className = "seleccionado";

  //hacemos desaperecer el menu una vez que se ha selecionado una opcion en el modo responsive

  $nav.className = "";
}
//funcion que nos permite mostar el  menu hamburguesa
function responsiveMenu() {
  if ($nav.className === "") {
    $nav.className = "responsive";
  } else {
    $nav.className = "";
  }
}

//detecto el scrolling para aplicar la animacion de las varras de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

//funcion que aplica la animacion de la barra de habilidades

const efectoHabilidades = () => {
  const $skill = document.getElementById("skills"); // Asegúrate de definir el elemento correctamente
  let distanciasSkills =
    window.innerHeight - $skill.getBoundingClientRect().top;
  console.log(distanciasSkills);

  // Agregar clases si las habilidades están visibles
  if (distanciasSkills >= 300) {
    document.getElementById("html").classList.add("bar-progreso1");
    document.getElementById("js").classList.add("bar-progreso2");
    document.getElementById("react").classList.add("bar-progreso2");
    document.getElementById("bd").classList.add("bar-progreso4");
    document.getElementById("node").classList.add("bar-progreso2");
    document.getElementById("mongo").classList.add("bar-progreso4");
    document.getElementById("docker").classList.add("bar-progreso4");
  }

  // Remover clases si se ha alcanzado un mayor desplazamiento
  if (distanciasSkills >= 900) {
    document.getElementById("html").classList.remove("bar-progreso1");
    document.getElementById("js").classList.remove("bar-progreso2");
    document.getElementById("react").classList.remove("bar-progreso2");
    document.getElementById("bd").classList.remove("bar-progreso4");
    document.getElementById("node").classList.remove("bar-progreso2");
    document.getElementById("mongo").classList.remove("bar-progreso4");
    document.getElementById("docker").classList.remove("bar-progreso4");
  }
};

//funcion que nos permite descargar el curriculum

$downloadBtn.addEventListener("click", () => {
  const enlace = document.createElement("a");
  enlace.href = "archivos/pedroFermin-cv.pdf";
  enlace.download = "pedroFermin-cv.pdf";
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
});

//funcion que nos permite enviar el formulario

$submitBtn.addEventListener("submit", (event) => {
  event.preventDefault();

  emailjs.sendForm("service_u3octhi", this).then(
    function () {
      alert("Correo enviado correctamente!");
    },
    function (error) {
      alert("Error al enviar el correo: " + JSON.stringify(error));
    }
  );

  alert("Mensaje enviado correctamente");
  $submitBtn.reset();
});
