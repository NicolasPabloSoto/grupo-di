
import { inView, animate } from "motion";

// Mantener la animación de datosNum sin depender del scroll
animate(".datosNum", { opacity: 1, transform: "translateY(0)" }, { duration: 1.3, delay: 1.3 });

// Animar títulos (titulosHome) y subtítulos (subtituloHome) por separado cuando entren en vista
inView(".titulosSect", ({ target }) => {
  // Animar título
  animate(
    target.querySelector(".titulosHome"),
    { opacity: 1, transform: "translateY(0)" },
    { duration: 1.4, easing: "ease-in-out" }
  );

  // Animar subtítulo con un pequeño delay
  animate(
    target.querySelector(".subtituloHome"),
    { opacity: 1, transform: "translateY(0)" },
    { duration: 1.4, delay: 0.4, easing: "ease-in-out" }
  );
});

// Animar entradas de blog (blogEntradas) con scroll
inView(".blogEntradas", ({ target }) => {
  animate(target, { opacity: 1, transform: "translateX(0)" }, { duration: 1.5, easing: "ease-in-out" });
});

// Animar métodos (metodos) con scroll
inView(".metodos", ({ target }) => {
  animate(target, { opacity: 1, transform: "scale(1)" }, { duration: 1.7, easing: [0.25, 0.46, 0.45, 0.94] });
});

// Cambiar la animación de .ubicacion para que entre desde la derecha hacia la izquierda
inView(".ubicacion", ({ target }) => {
  animate(target, { opacity: 1, transform: "translateX(0)" }, { duration: 1.5, easing: "ease-in-out" }); // Entrada desde la derecha
});

// Animar iconos de ubicación (iconosUbicacion) con scroll
inView(".iconosUbicacion", ({ target }) => {
  animate(
    target,
    { opacity: 1, transform: "translateY(0)" },
    { duration: 1.7, easing: [0.175, 0.885, 0.32, 1.5] }
  );
});
