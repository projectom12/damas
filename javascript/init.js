$( document ).ready(function() {
    $('#exampleModal').modal('show');
});


var partida = new Partida();
var tabla = new Tauler();
var fitxa = new Fitxa();
var rellena = new Rellena();

rellena.omplehtml();

document.getElementById("play").addEventListener("click",partida.saveNames(),false);

//  partida.saveNames();






