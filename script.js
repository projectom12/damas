document.querySelector("#btnImprimirDiv").addEventListener("click", function() {
  var div = document.querySelector("#imprimible");
  imprimirElemento(div);
});

document.querySelector("#btnImprimirParrafo").addEventListener("click", function() {
  var parrafo = document.querySelector("#parrafo");
  imprimirElemento(parrafo);
});