import Swiper from 'swiper';

// Importar los estilos de Swiper y los módulos necesarios
import 'swiper/swiper-bundle.css';

// Inicializar Swiper
const swiper = new Swiper('.swiper', {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    
    // Agregar los módulos de navegación y paginación
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 5000,
    },
});


/****MENÚ HAMBURGUESA******/
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    abrir.addEventListener("click", () => {
        nav.classList.add("main-nav__link--info--visible"); 
    });
    cerrar.addEventListener("click", () => {
        nav.classList.remove("main-nav__link--info--visible"); 
    });
});