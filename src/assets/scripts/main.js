/*import Swiper from 'swiper';
/*import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper: NO SÉ SI LO ESTOY PONIENDO BIEN
const swiper = new Swiper('.swiper', {
    direction: "horizontal",
	loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    
    modules: [Navigation, Pagination],

	autoplay: {
		delay: 5000,
	}
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