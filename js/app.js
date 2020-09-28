window.onload = () => {
  const nombreTabla = document.querySelectorAll(".texto-fantasia");
  const fuenteUno = document.querySelector(".fuente-1-desk");
  const slider = document.querySelector(".swiper-slider");
  const sliderImagen = document.querySelector(".img-principal-desk");

  nombreTabla.forEach((nombre) => {
    nombre.addEventListener("click", () => {
      fuenteUno.textContent = nombre.textContent;
      gsap.from(slider, {
        duration: 0.2,
        top: "10px",
        left: "10px",
        opacity: 0,
      });
      sliderImagen.src = nombre.dataset.imagen;
    });
  });

  var swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const hamburguesa = document.querySelector(".hamburguesa");
  const navMovil = document.querySelector(".nav-movil");
  const btnCerrar = document.querySelector(".btn-cerrar");
  const linksNav = document.querySelectorAll(".link-movil");

  hamburguesa.addEventListener("click", () => {
    gsap.to(navMovil, {
      left: 0,
      duration: 0.5,
    });
  });
  btnCerrar.addEventListener("click", () => {
    gsap.to(navMovil, {
      left: "100%",
      duration: 0.5,
    });
  });
  linksNav.forEach((link) => {
    link.addEventListener("click", () => {
      gsap.to(navMovil, {
        delay: 0.5,
        left: "100%",
        duration: 0.5,
      });
    });
  });
};
