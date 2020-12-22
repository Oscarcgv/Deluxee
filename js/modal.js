const imagenes = document.querySelectorAll(".menu-1 img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const cerrar = document.querySelector(".cerrar");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    modalImg.src = imagen.src;
    modalTxt.innerHTML = imagen.alt;
    modal.classList.add("show");

    cerrar.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  });
});