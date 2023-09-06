const imagen = document.getElementById('cambiarImagen');
const imagenes = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'];
let index = 0;

function cambiarImagen() {
    index = (index + 1) % imagenes.length;
    imagen.src = imagenes[index];
}

setInterval(cambiarImagen, 3000); // Cambiar la imagen cada 3 segundos
