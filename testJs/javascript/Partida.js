class Partida{
    booleanCanviTorn=true;
    iniciaPartida=true;
    inputValueJug1="";
    inputValueJug2="";

    constructor(){
        this._booleanCanviTorn = true;
        this._quedanMovimientos=true;
        document.getElementById('play').addEventListener("click", () => {this.saveNames()});
    }
 
     saveNames(){

        let inputValueJug1 = document.getElementById("jug1").value; 
        let inputValueJug2 = document.getElementById("jug2").value; 
        //inputValueJug1 = "raul";
        //inputValueJug2 = "rulas";
    
        if(inputValueJug1 !="" && inputValueJug2 != ""){
       
       
        var con=document.getElementById("jugador1");
        var con2=document.getElementById("jugador2");
        //INSERTA NOMBRES DE LOS JUGADORES    
        con.innerHTML  = inputValueJug1; 
        con2.innerHTML = inputValueJug2;

    

        //ESCONDE MODAL
        $('#exampleModal').modal('hide');
        
        //LLENA TABLERO
        tabla.ompleTauler();
        

        //boton reinicia
        document.getElementById('reinicia').addEventListener("click", () => {this.reinicia()});

        

      
       // tabla.actualiza();

        

        
    }else{
   
        $( document ).ready(function() {
            $('#exampleModal').modal('show');
        });
     

    }

    }

    reinicia(){
        location.reload();
    }

    terminaJuego(){
      console.log("Ha guanyat :"+this.inputValueJug1);
      console.log("vols tornar a jugar?");
        
    }

    get booleanCanviTorn(){
        return this._booleanCanviTorn;
    }

    set booleanCanviTorn(booleanCanviTorn){
        this._booleanCanviTorn = booleanCanviTorn;
    }

  

}

    
