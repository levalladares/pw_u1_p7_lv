function cambiarTexto(id, texto) {
    document.getElementById(id).innerText = texto;
}
function cambiarColor(id,color) {
    document.getElementById(id).style.color = color;
}
function cambiarTamanio(id,tamanio) {
    document.getElementById(id).style.fontSize = tamanio;
}
function agregarElemento(id,texto) {
    document.getElementById(id).innerHTML += texto;
}
