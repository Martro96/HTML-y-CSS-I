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

//PARA EL MENU ACTIVE
document.addEventListener('DOMContentLoaded', function() {
    // Obtener la URL actual
    var currentUrl = window.location.pathname.split('/').pop();

    // Obtener todos los enlaces del menú
    var menuLinks = document.querySelectorAll('.main-nav__link, .main-nav__link--span');

    // Recorrer los enlaces y añadir la clase "active" al enlace que coincida con la URL actual
    menuLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentUrl || link.getAttribute('href') === window.location.href) {
            link.classList.add('active');
        }
    });
});
