const $nav = document.getElementById('nav');
const $links = document.querySelectorAll('#links a');
const $skill = document.getElementById('skills');

//funcion que aplica el estilo al enlace selecionado en el menu  y quita el previamente selecionado
function selection(link) {
  $links[0].className = '';
  $links[1].className = '';
  $links[2].className = '';
  $links[3].className = '';
  $links[4].className = '';
  link.className = 'seleccionado';

  //hacemos desaperecer el menu una vez que se ha selecionado una opcion en el modo responsive

  $nav.className = '';
}
//funcion que nos permite mostar el  menu hamburguesa
function responsiveMenu() {
  if ($nav.className === '') {
    $nav.className = 'responsive';
  } else {
    $nav.className = '';
  }
}

//detecto el scrolling para aplicar la animacion de las varras de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

//funcion que aplica la animacion de la barra de habilidades

const efectoHabilidades = () => {
  let distanciasSkills =
    window.innerHeight - $skill.getBoundingClientRect().top;
  console.log(distanciasSkills);

  if (distanciasSkills >= 300) {
    document.getElementById('html').classList.add('bar-progreso1');
    document.getElementById('js').classList.add('bar-progreso2');
    document.getElementById('react').classList.add('bar-progreso3');
    document.getElementById('bd').classList.add('bar-progreso4');
    document.getElementById('py').classList.add('bar-progreso5');
  }
  if (distanciasSkills >= 700) {
    document.getElementById('html').classList.remove('bar-progreso1');
    document.getElementById('js').classList.remove('bar-progreso2');
    document.getElementById('react').classList.remove('bar-progreso3');
    document.getElementById('bd').classList.remove('bar-progreso4');
    document.getElementById('py').classList.remove('bar-progreso5');
  }
};
