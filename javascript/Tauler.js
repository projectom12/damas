class Tauler{
    matriuTauler;
    origenX;
    origenY;
    destinacioX;
    destinacioY;
    
    constructor(matriuTauler){

        var quedanFitxes;
        matriuTauler = [ 
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0] 
           ]
           //console.log("const"+matriuTauler[1][1]);
                
    }

    ompleTauler(){
        var Fitxa1 = new Fitxa(0,1,false,"black");
        var Fitxa2 = new Fitxa(0,3,false,"black");
        var Fitxa3 = new Fitxa(0,5,false,"black");
        var Fitxa4 = new Fitxa(0,7,false,"black");

        var Fitxa5 = new Fitxa(1,0,false,"black");
        var Fitxa6 = new Fitxa(1,2,false,"black");
        var Fitxa7 = new Fitxa(1,4,false,"black");
        var Fitxa8 = new Fitxa(1,6,false,"black");
        
        var Fitxa9 = new Fitxa(2,1,false,"black");
        var Fitxa10 = new Fitxa(2,3,false,"black");
        var Fitxa11 = new Fitxa(2,5,false,"black");
        var Fitxa12 = new Fitxa(2,7,false,"black");

        
        var Fitxa13 = new Fitxa(5,0,false,"white");
        var Fitxa14 = new Fitxa(5,2,false,"white");
        var Fitxa15 = new Fitxa(5,4,false,"white");
        var Fitxa16 = new Fitxa(5,6,false,"white");

        var Fitxa17 = new Fitxa(6,1,false,"white");
        var Fitxa18 = new Fitxa(6,3,false,"white");
        var Fitxa19 = new Fitxa(6,5,false,"white");
        var Fitxa20 = new Fitxa(6,7,false,"white");
        
        var Fitxa21 = new Fitxa(7,0,false,"white");
        var Fitxa22 = new Fitxa(7,2,false,"white");
        var Fitxa23 = new Fitxa(7,4,false,"white");
        var Fitxa24 = new Fitxa(7,6,false,"white");

        
        this.matriuTauler = [ 
            [0,Fitxa1,0,Fitxa2,0,Fitxa3,0,Fitxa4],
            [Fitxa5,0,Fitxa6,0,Fitxa7,0,Fitxa8,0],
            [0,Fitxa9,0,Fitxa10,0,Fitxa11,0,Fitxa12],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [Fitxa13,0,Fitxa14,0,Fitxa15,0,Fitxa16,0],
            [0,Fitxa17,0,Fitxa18,0,Fitxa19,0,Fitxa20],
            [Fitxa21,0,Fitxa22,0,Fitxa23,0,Fitxa24,0] 
           ]

   

     
        
      //  console.log("imprimiendo ",this.matriuTauler);
           
        
       // this.actualiza();  
    }

    // origenX;
    // origenY;
    // destinacioX;
    // destinacioY;

    actualiza(){
        // console.log(this.matriuTauler[this.origenX][this.origenY]);
        // console.log("X",this.origenX," ","Y",this.origenY);
        // console.log("X",this.destinacioX,"  y:",this.destinacioY);
        // console.log("ho",this.matriuTauler[this.origenX][this.origenY]);
        // console.log("ho",this.matriuTauler[this.destinacioX][this.destinacioY]);
       // console.log("fitxa: Actu",this.matriuTauler[this.origenX][this.origenY].stringColor);
        
      
    if(this.matriuTauler[this.origenX][this.origenY].stringColor=="black"){    

    if(((this.destinacioX-this.origenX === 1) &&  (this.origenY-this.destinacioY === 1 || this.origenY-this.destinacioY===-1))){
       //console.log("he entrat");
          
          //remove class verd
          //esborra imatge
          let divImage = document.getElementById("r"+this.origenX+"c"+this.origenY);
          divImage.firstChild.replaceWith("");
          divImage.classList.remove("clickVerde");
     
       this.matriuTauler[this.destinacioX][this.destinacioY]= this.matriuTauler[this.origenX][this.origenY];
       this.matriuTauler[this.origenX][this.origenY]=0;
         //inserta imagen
       let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
       img.innerHTML="<img src=C:/Users/Raul/OneDrive/Documentos/DAW/M12/img/fichaNegra.png>";
     
       //juegan ahora las blancas
       partida.booleanCanviTorn = false;
       //console.log(partida.booleanCanviTorn);

        //console.log(this.matriuTauler);
        //moureImatge(this.origenX,this.origenY);
    }
    //    console.log(this.origenX," ",this.origenY);
    

    }

    //move blancas
    //to do
    if(this.matriuTauler[this.origenX][this.origenY].stringColor=="white"){ 

        if(((this.destinacioX-this.origenX === -1) &&  (this.origenY-this.destinacioY === -1 || this.origenY-this.destinacioY=== 1))){
           // console.log("he entrat");
              
              //remove class verd
              //esborra imatge
              let divImage = document.getElementById("r"+this.origenX+"c"+this.origenY);
              divImage.firstChild.replaceWith("");
              divImage.classList.remove("clickVerde");
         
           this.matriuTauler[this.destinacioX][this.destinacioY]= this.matriuTauler[this.origenX][this.origenY];
           this.matriuTauler[this.origenX][this.origenY]=0;
             //inserta imagen
           let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
           img.innerHTML="<img src=C:/Users/Raul/OneDrive/Documentos/DAW/M12/img/fichaRoja.png>";
         
           //juegan ahora las blancas
           partida.booleanCanviTorn = true;
          // console.log(partida.booleanCanviTorn);
    
            //console.log(this.matriuTauler);
            //moureImatge(this.origenX,this.origenY);
        }
        //    console.log(this.origenX," ",this.origenY);
        
    
        }



     }

        
     

    


    seleciona(r,c){

        return this.matriuTauler[r][c];

    }

    moureImatge(){

        

    }

    comprobaMoviment(){
        
    }

    comprovacioMata(ficha){

    }



    
}

    
