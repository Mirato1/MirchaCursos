import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopBtn from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/responsive_tester.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilter from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrousel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import speechReader from "./dom/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("../assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Nov 17, 2021, 12:00:00", "Feliz Cumpleaños Yamyy");
  scrollTopBtn(".scroll-top-btn");

  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=pifnZewZqMc" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/pifnZewZqMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );

  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/7qi2fFjpKDtvuayr6" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.066850016401!2d-58.3815704!3d-34.6037389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1624579942116!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );

  responsiveTester("responsive-tester");

  userDeviceInfo("user-device");

  webCam("webcam");

  getGeolocation("geolocation");

  searchFilter(".card-filter", ".card", ".reset");

  draw("inputSorteo", "btnAdd", "btnWinner", "playerList", "result");

  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme("#btn-dark", "#btn-moon");

networkStatus();

speechReader();
