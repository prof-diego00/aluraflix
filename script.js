// script.js
console.log("Hello, world!");

function minhaFuncao() {
    alert("Esta função foi chamada do JavaScript!");
}
const scrollContainer = document.querySelector('.categoria-videos');
const scrollLeftButton = document.querySelector('.scroll-buttons .left-button');
const scrollRightButton = document.querySelector('.scroll-buttons .right-button');

scrollLeftButton.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 200; // Ajuste a quantidade de rolagem conforme necessário
});

scrollRightButton.addEventListener('click', () => {
    scrollContainer.scrollLeft += 200; // Ajuste a quantidade de rolagem conforme necessário
});

$(document).ready(function() {
    // Ocultar a barra de rolagem ao carregar a página
    $('body').css('overflow-y', 'hidden');

    // Mostrar a barra de rolagem ao clicar em um botão
    $('#mostrar-scrollbar').click(function() {
        $('body').css('overflow-y', 'auto');
    });
});

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }