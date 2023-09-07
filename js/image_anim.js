const imagen = document.getElementById('cambiarImagen');
const imagenes = ['assets/josemaRosa.png', 'assets/josemaCalvo.png'];
let index = 0;

function cambiarImagen() {
    index = (index + 1) % imagenes.length;
    imagen.style.opacity = '0'; // Establecemos la opacidad a cero para ocultar la imagen
    setTimeout(() => {
        imagen.src = imagenes[index];
        imagen.style.opacity = '1'; // Restauramos la opacidad para mostrar la nueva imagen
    }, 500); // Establecemos un retardo de 500ms antes de mostrar la nueva imagen
}

setInterval(cambiarImagen, 6000); // Cambiar la imagen cada 6 segundos (ajustado)