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

  //API INTESERCTION OBSERVER
  const crearObservador = (animacion, nuevaClase) => {
    const secciones = document.querySelectorAll(animacion);

    const options = {
      root: null, //es el default, todo el viewport
      threshold: 0.3, // 0 dispara en el momento que el elemento entra al observador, 1 dispara cuando todo el elemento ya esta dentro del observador
    };

    const observer = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } //si no esta en la pantalla, termina la funcion
        entry.target.classList.add(nuevaClase);

        observer.unobserve(entry.target); //para que las animaciones solo se ejecuten la primera vez que se entra en la seccion.
      });
    },
    options);
    secciones.forEach((section) => {
      observer.observe(section); //al usar querySelectorAll tengo un array con las secciones, y lo que quiero lograr es observar uno por uno
    });
  };

  crearObservador(".animacion-uno", "final-uno");
  crearObservador(".animacion-dos", "final-dos");
  crearObservador(".animacion-tres", "final-tres");
};
