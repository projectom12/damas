class Partida{
  
    constructor(){
        this._booleanCanviTorn = true;
    
        
    }
 
     saveNames(){


        let inputValueJug1 = document.getElementById("jug1").value; 
        let inputValueJug2 = document.getElementById("jug2").value; 
        
    
        if(inputValueJug1 !="" && inputValueJug2 != "")    {
       
       
        var con=document.getElementById("jugador1");
        var con2=document.getElementById("jugador2");
        //INSERTA NOMBRES DE LOS JUGADORES    
        con.innerHTML  = inputValueJug1; 
        con2.innerHTML = inputValueJug2;

        

        //ESCONDE MODAL
        $('#exampleModal').modal('hide')
        
        //LLENA TABLERO
        tabla.ompleTauler();
        

      
       // tabla.actualiza();

        

        
    }else{
        $('#exampleModal').modal('show')
    }


      
    
    
    
        
    }

    get booleanCanviTorn(){
        return this._booleanCanviTorn;
    }

    set booleanCanviTorn(booleanCanviTorn){
        this._booleanCanviTorn = booleanCanviTorn;
    }

}

    
