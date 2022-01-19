document.getElementById('BotonCopiar').addEventListener('click', copiarAlPortapapeles);
function copiarAlPortapapeles(ev) {
    // Obtener contenido del div oculto
    let contenido = document.getElementById('TextoACopiar').textContent;
    // Crear input
    let input = document.createElement('input');
    // Asignar contenido
    input.value = contenido;
    // Agregar input a documento
    document.body.appendChild(input);
    // Seleccionar contenido
    input.select();
    // Copiar
    document.execCommand('copy');
    // Eliminar input
    input.remove();
    alert('Texto copiado, pegalo con Ctrl + V');
}