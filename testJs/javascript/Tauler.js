class Tauler{
    matriuTauler;
    origenX;
    origenY;
    destinacioX;
    destinacioY;
    mataIzquierda = false;
    mataDerecha = false;
    mataIzquierda2 = false;
    mataDerecha2=false;
    fitxasWhiteContador=12;
    fitxasBlackContador=12;


    constructor(matriuTauler){
    //    let fitxasWhiteContador=12;
    //    let fitxasBlackContador=12;
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
    }

    ompleTauler(){

        var Fitxa1 = new Fitxa(false,"black");
        var Fitxa2 = new Fitxa(false,"black");
        var Fitxa3 = new Fitxa(false,"black");
        var Fitxa4 = new Fitxa(false,"black");

        var Fitxa5 = new Fitxa(false,"black");
        var Fitxa6 = new Fitxa(false,"black");
        var Fitxa7 = new Fitxa(false,"black");
        var Fitxa8 = new Fitxa(false,"black");
        
        var Fitxa9 = new Fitxa(false,"black");
        var Fitxa10 = new Fitxa(false,"black");
        var Fitxa11 = new Fitxa(false,"black");
        var Fitxa12 = new Fitxa(false,"black");
        
        var Fitxa13 = new Fitxa(false,"white");
        var Fitxa14 = new Fitxa(false,"white");
        var Fitxa15 = new Fitxa(false,"white");
        var Fitxa16 = new Fitxa(false,"white");

        var Fitxa17 = new Fitxa(false,"white");
        var Fitxa18 = new Fitxa(false,"white");
        var Fitxa19 = new Fitxa(false,"white");
        var Fitxa20 = new Fitxa(false,"white");
        
        var Fitxa21 = new Fitxa(false,"white");
        var Fitxa22 = new Fitxa(false,"white");
        var Fitxa23 = new Fitxa(false,"white");
        var Fitxa24 = new Fitxa(false,"white");

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

           
      
    }
    termina(){
        if(tabla.fitxasWhiteContador==0||tabla.fitxasBlackContador==0){
            partida.terminaJuego();
        }
    }

    actualiza(){
       // document.getElementById("reinicia").addEventListener("click",partida.reinicia(),false);
       
///MOVE NEGRAS////////      
////move negras hacia abajo de casilla en casilla
    if((this.matriuTauler[this.origenX][this.origenY].stringColor=="black")&& (this.matriuTauler[this.origenX][this.origenY].booleanReina==false)){  
    //this.compruebaPierde();
    this.moveFitxaNegra();
    console.log("white",this.fitxasWhiteContador);
    console.log("black",this.fitxasBlackContador);
    this.termina();
    
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////terminan negras
    //move blancas
    //si la fitxa pasada es blanca i no es reina entra
    if((this.matriuTauler[this.origenX][this.origenY].stringColor=="white") && (this.matriuTauler[this.origenX][this.origenY].booleanReina==false)){ 
        //this.compruebaPierde();
        this.moveBlancas();
        console.log("white",this.fitxasWhiteContador);
        console.log("black",this.fitxasBlackContador);
        this.termina();
        
        }
        /////////////////////////////////////EMPIEZAN LAS REINAS//////////////////////////////////////////////
        /////////////////////////BLANCAS/////////////////////////////
            //move blancas reinas
    if(this.matriuTauler[this.origenX][this.origenY].stringColor=="white" && this.matriuTauler[this.origenX][this.origenY].booleanReina==true){ 

       this.moveBlancasReinas();
       console.log("white",this.fitxasWhiteContador);
       console.log("black",this.fitxasBlackContador);
       this.termina();
        
     }

      /////////////////////////////////////EMPIEZAN LAS FICHAS REINAS NEGRAS//////////////////////////////////////////////
        //////////////////////////////////////////////////////
    
    if(this.matriuTauler[this.origenX][this.origenY].stringColor=="black" && this.matriuTauler[this.origenX][this.origenY].booleanReina==true){

        this.moveFitxaNegraReina();    
        console.log("white",this.fitxasWhiteContador);
        console.log("black",this.fitxasBlackContador);
        this.termina();

    }

    this.mataDerecha=false;
    this.mataIzquierda=false;
    console.log(this.mataDerecha);
    console.log(this.mataIzquierda);

     }

    seleciona(r,c){
        return this.matriuTauler[r][c];
    }
    //remove class everde
    //esborra imatge
    imprimeTabla(){

        let divImage = document.getElementById("r"+this.origenX+"c"+this.origenY);
        divImage.firstChild.replaceWith("");
        divImage.classList.remove("clickVerde");
       
        this.matriuTauler[this.destinacioX][this.destinacioY]= this.matriuTauler[this.origenX][this.origenY];
        this.matriuTauler[this.origenX][this.origenY]=0;
           //inserta imagen
        let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
        img.innerHTML="<img src=img/fichaRoja.png>";
       
        //juegan ahora las negras
        partida.booleanCanviTorn = true;

    }
    imprimeTablaReinaWhite(){

        let divImage = document.getElementById("r"+this.origenX+"c"+this.origenY);
        divImage.firstChild.replaceWith("");
        divImage.classList.remove("clickVerde");
       
        this.matriuTauler[this.destinacioX][this.destinacioY]= this.matriuTauler[this.origenX][this.origenY];
        this.matriuTauler[this.origenX][this.origenY]=0;
           //inserta imagen
        let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
        img.innerHTML="<img src=img/fichaRojaReina.png>";
       
        //juegan ahora las negras
        partida.booleanCanviTorn = true;
      
    }
    
    //remove class everde
    //esborra imatge
    imprimeTablaNegre(){
        let divImage = document.getElementById("r"+this.origenX+"c"+this.origenY);
        divImage.firstChild.replaceWith("");
        divImage.classList.remove("clickVerde");
       
         this.matriuTauler[this.destinacioX][this.destinacioY]= this.matriuTauler[this.origenX][this.origenY];
         this.matriuTauler[this.origenX][this.origenY]=0;
           //inserta imagen
         let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
         img.innerHTML="<img src=img/fichaNegra.png>";
       
         //juegan ahora las blancas
         partida.booleanCanviTorn = false;
    }
    imprimeTablaReinaBlack(){
        let divImage = document.getElementById("r"+this.origenX+"c"+this.origenY);
        divImage.firstChild.replaceWith("");
        divImage.classList.remove("clickVerde");
       
         this.matriuTauler[this.destinacioX][this.destinacioY]= this.matriuTauler[this.origenX][this.origenY];
         this.matriuTauler[this.origenX][this.origenY]=0;
           //inserta imagen
         let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
         img.innerHTML="<img src=img/fichaNegraReina.png>";
       
         //juegan ahora las blancas
         partida.booleanCanviTorn = false;
    }

    comprovaEsReinaBlanca(){
         if(this.destinacioX==0){
            this.matriuTauler[this.destinacioX][this.destinacioY].booleanReina=true;
            let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
            img.innerHTML="<img src=img/fichaRojaReina.png>";
            }
    }
    comprovaEsReinaNegra(){
        if(this.destinacioX==7){
            this.matriuTauler[this.destinacioX][this.destinacioY].booleanReina=true;
            let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
            img.innerHTML="<img src=img/fichaNegraReina.png>";
            }
    }
    ////////////////MOVE NEGRAS/////////////////////////////////////
    moveFitxaNegra(){
        if(((this.destinacioX-this.origenX === 1) &&  (this.origenY-this.destinacioY === 1 || this.origenY-this.destinacioY===-1))){
            this.imprimeTablaNegre();
            this.comprovaEsReinaNegra();
        }
        if(this.origenY==7){
                if(this.matriuTauler[this.origenX+1][this.origenY-1].stringColor=="white"){
                    this.mataIzquierda=true;                                   
                }
            }
        if(this.origenY==0){
                if(this.matriuTauler[this.origenX+1][this.origenY+1].stringColor=="white"){
                    this.mataDerecha=true;
                }
            }
        //mata hacia la derecha
        if(this.origenY>0&&this.origenY<7){
                if(this.matriuTauler[this.origenX+1][this.origenY+1].stringColor=="white"){
                    this.mataDerecha=true;            
                }
            }
        if(this.origenY>0&&this.origenY<7){
                if(this.matriuTauler[this.origenX+1][this.origenY-1].stringColor=="white"){
                    this.mataIzquierda=true;
                }
            }
            //funciona
        if((this.destinacioX-this.origenX === 2 )&&(this.origenY-this.destinacioY=== 2) && (this.mataIzquierda==true)){
            
                    this.imprimeTablaNegre();
                    this.comprovaEsReinaNegra();
    
                    this.matriuTauler[this.destinacioX-1][this.destinacioY+1]=0;
                    let rDestinacio=this.origenX+1;
                    let cDestinacio=this.origenY-1;
                    let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestinacio);
                    esborraImg.firstChild.replaceWith("");

                    this.mataDerecha=false;
                    this.mataIzquierda=false;
                    this.fitxasWhiteContador--;
                }
    
        if(((this.destinacioX-this.origenX === 2 ))&&(this.origenY-this.destinacioY === -2) && (this.mataDerecha==true)){
            
                    this.imprimeTablaNegre();
                    this.comprovaEsReinaNegra();                  
                    this.matriuTauler[this.destinacioX-1][this.destinacioY-1]=0;
                    let rDestinacio=this.origenX+1;
                    let cDestincaio=this.origenY+1;
                    let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestincaio);
                    esborraImg.firstChild.replaceWith("");               
                    this.mataDerecha = false;
                    this.mataIzquierda = false;
                    this.fitxasWhiteContador--;
                    }
    
    }
    
    /////MOVE BLANCAS////////////////
    moveBlancas(){
      
        //moviment fitxa blanca cap adalt
        if(((this.destinacioX-this.origenX === -1) &&  (this.origenY-this.destinacioY === -1 || this.origenY-this.destinacioY=== 1))){
            this.imprimeTabla();
            this.comprovaEsReinaBlanca();
      }
    
      //si esta a la dreta només pot comprobar a la esquerra, perque no existeix una casella mes a la dreta
      if(this.origenY==7){
              if(this.matriuTauler[this.origenX-1][this.origenY-1].stringColor=="black"){
                  this.mataIzquierda=true;
       }
      }
       //si esta a la esquerra només pot comprobar a la dreta, perque no existeix una casella mes a la esquerra
      if(this.origenY==0 ){
          if(this.matriuTauler[this.origenX-1][this.origenY+1].stringColor=="black"){
              this.mataDerecha=true;
          }
         }

      //mata cap a la dreta si no estas als costats
      if(this.origenY>0&&this.origenY<7){
          if(this.matriuTauler[this.origenX-1][this.origenY+1].stringColor=="black"){
              this.mataDerecha=true;
          }
      }
      //mata cap a la esquerra si no estas als costats
      if(this.origenY>0&&this.origenY<7){
          if(this.matriuTauler[this.origenX-1][this.origenY-1].stringColor=="black"){
              this.mataIzquierda=true;
          }
      }

      if((this.destinacioX-this.origenX === -2 )&&(this.origenY-this.destinacioY === -2 ) && (this.mataDerecha==true)){
        this.imprimeTabla();
        this.comprovaEsReinaBlanca();
        this.matriuTauler[this.destinacioX+1][this.destinacioY-1]=0;
        let rDestinacio=this.origenX-1;
        let cDestincaio=this.origenY+1;
        let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestincaio);
        esborraImg.firstChild.replaceWith("");          
        this.mataDerecha = false;
        this.mataIzquierda = false;
        this.fitxasBlackContador--;
      }

      if((this.destinacioX-this.origenX === -2 )&&(this.origenY-this.destinacioY === 2 ) && (this.mataIzquierda==true)){
        this.imprimeTabla();
        this.comprovaEsReinaBlanca();
        this.matriuTauler[this.destinacioX+1][this.destinacioY+1]=0;
        let rDestinacio=this.origenX-1;
        let cDestinacio=this.origenY-1;
        let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestinacio);
        esborraImg.firstChild.replaceWith("");
        this.mataDerecha = false;
        this.mataIzquierda = false;
        this.fitxasBlackContador--;
      }
    }

    //////////moveBlancasReinas/////////////////
    moveBlancasReinas(){
        if(this.origenY==7){
            if(this.matriuTauler[this.origenX+1][this.origenY-1].stringColor=="black"){
                this.mataIzquierda=true;                                       
     }
    }
    //si esta a la esquerra només pot comprobar a la dreta, perque no existeix casella esquerra
    if(this.origenY==0){
        if(this.matriuTauler[this.origenX+1][this.origenY+1].stringColor=="black"){
            this.mataDerecha=true;  
        }
       }

    //comproban si est al final del tauler
    if(this.origenX!=7){
    if(this.origenY>0&&this.origenY<7){
        if(this.matriuTauler[this.origenX+1][this.origenY+1].stringColor=="black"){
            this.mataDerecha=true;
        }

        if(this.matriuTauler[this.origenX+1][this.origenY-1].stringColor=="black"){
            this.mataIzquierda=true;
        }
        

    }
    }
    //si esta al final no puede restar entoces por eso siempre que no sea 0 puede restar para matar hacia arriba
    if(this.origenX!=0 && this.origenY!=0 && this.origenY!=7){

        if(this.matriuTauler[this.origenX-1][this.origenY+1].stringColor=="black"){
            this.mataDerecha2=true;
        }

        if(this.matriuTauler[this.origenX-1][this.origenY-1].stringColor=="black"){
                    this.mataIzquierda2=true;
                }


    }
    //Si la reina esta a la esquerra que comprovi nomes la dreta
    if(this.origenY==0){
        if(this.matriuTauler[this.origenX-1][this.origenY+1].stringColor=="black"){
            this.mataDerecha=true;
        }

    }
    //Si la reina esta a la dreta que comprovi nomes la esquerra
    if(this.origenY==7){
        if(this.matriuTauler[this.origenX+1][this.origenY-1].stringColor=="black"){
            this.mataIzquierda2=true;
        }

        }
       
     //movimiento hacia abajo
        if (((this.destinacioX-this.origenX === 1) &&  (this.origenY-this.destinacioY === 1 || this.origenY-this.destinacioY===-1))){
         
         this.imprimeTablaReinaWhite();

        }
        //movimiento hacia arriba
         //moviment fitxa blanca cap adalt
        if(((this.destinacioX-this.origenX === -1) &&  (this.origenY-this.destinacioY === -1 || this.origenY-this.destinacioY=== 1))){
           
            this.imprimeTablaReinaWhite();

        }
      //MATA IZQUIERDA 1
      //mata hacia abajo
      if(((this.destinacioX-this.origenX === 2 ))&&( this.origenY-this.destinacioY=== 2) && (this.mataIzquierda==true)){
        
            this.imprimeTablaReinaWhite();
            this.matriuTauler[this.destinacioX-1][this.destinacioY+1]=0;
            let rDestinacio=this.origenX+1;
            let cDestinacio=this.origenY-1;
            let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestinacio);
            esborraImg.firstChild.replaceWith("");
            this.fitxasBlackContador--;
        
        }
        //MATA IZQUIERDA 2 
        if(((this.destinacioX-this.origenX === -2 ))&&( this.origenY-this.destinacioY=== 2) && (this.mataIzquierda2==true)){
        
            this.imprimeTablaReinaWhite();
            this.matriuTauler[this.destinacioX+1][this.destinacioY+1]=0;
            let rDestinacio=this.origenX-1;
            let cDestinacio=this.origenY-1;
            let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestinacio);
            esborraImg.firstChild.replaceWith("");
            this.fitxasBlackContador--;
              
            }
        //Mata derecha 1
        //abajo derecha ((creo) es la 1 de la noxe) 
        if(((this.destinacioX-this.origenX === 2 ))&&( this.origenY-this.destinacioY=== -2) && (this.mataDerecha==true)){
        
            this.imprimeTablaReinaWhite();
               
            if(this.origenY-this.destinacioY ==-2){
                this.matriuTauler[this.destinacioX-1][this.destinacioY-1]=0;
                let rDestinacio=this.origenX+1;
                let cDestincaio=this.origenY+1;
                let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestincaio);
                esborraImg.firstChild.replaceWith("");
                this.fitxasBlackContador--;
                         
                 }    
            }

            //MATA DERECHA 2
            if(((this.destinacioX-this.origenX === -2 ))&&( this.origenY-this.destinacioY=== -2) && (this.mataDerecha2==true)){

            this.imprimeTablaReinaWhite();
            this.matriuTauler[this.destinacioX+1][this.destinacioY-1]=0;
            let rDestinacio=this.origenX-1;
            let cDestincaio=this.origenY+1;
            let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestincaio);
            esborraImg.firstChild.replaceWith("");
            this.fitxasBlackContador--;
        
            }

        this.mataDerecha = false;
        this.mataDerecha2= false;
        this.mataIzquierda=false;
        this.mataIzquierda2=false;
    }

    moveFitxaNegraReina(){
    //comproba si esta a la esquina dreta i p
    if(this.origenY==7){
        if(this.matriuTauler[this.origenX+1][this.origenY-1].stringColor=="white"){
            this.mataIzquierda=true;
            console.log("mata izquierda abajo: ",this.mataIzquierda);                               
            
                    }
                            }
    //comproba si esta la esquina esquerra i pot matar
    if(this.origenY==0){
        if(this.matriuTauler[this.origenX+1][this.origenY+1].stringColor=="white"){
        this.mataDerecha=true;
             console.log("mata derecha abajo", this.mataDerecha);   
                }
    }

//mata hacia la derecha
    if(this.origenX!=7){
        if(this.origenY>0&&this.origenY<7){
            if(this.matriuTauler[this.origenX+1][this.origenY+1].stringColor=="white"){
                this.mataDerecha=true;
                console.log("abajo derecha: ",this.mataDerecha);
        
                }

            if(this.matriuTauler[this.origenX+1][this.origenY-1].stringColor=="white"){
            this.mataIzquierda=true;
            console.log("abajo izquierda: ",this.mataIzquierda);
            
                }


        }
    }
    //si esta al final no puede restar entoces por eso siempre que no sea 0 puede restar para matar hacia arriba
    if(this.origenX!=0 && this.origenY!=0 && this.origenY!=7){

        if(this.matriuTauler[this.origenX-1][this.origenY+1].stringColor=="white"){
            this.mataDerecha2=true;
            console.log("arriba derecha: ",this.mataDerecha2);
    
        }

        if(this.matriuTauler[this.origenX-1][this.origenY-1].stringColor=="white"){
                    this.mataIzquierda2=true;
                    console.log("arriba izquierda: ",this.mataIzquierda2);
                }

    }

    //Si la reina esta a la esquerra que comprovi nomes la dreta
    if(this.origenY==0){
        if(this.matriuTauler[this.origenX-1][this.origenY+1].stringColor=="white"){
            this.mataDerecha2=true;
            console.log("arriba derecha: ",this.mataDerecha2);
    
        }

    }
    //Si la reina esta a la dreta que comprovi nomes la esquerra
    if(this.origenY==7){
        if(this.matriuTauler[this.origenX-1][this.origenY-1].stringColor=="white"){
            this.mataIzquierda2=true;
            console.log("arriba izquierda: ",this.mataIzquierda2);
    
        }

        }

  //moviment cap abaix abajo
    if(((this.destinacioX-this.origenX === 1) &&  (this.origenY-this.destinacioY === 1 || this.origenY-this.destinacioY===-1))){
    //esborra imatge
    this.imprimeTablaReinaBlack();

    }
   //moviment cap a adalt
    if(((this.destinacioX-this.origenX === -1) &&  (this.origenY-this.destinacioY === -1 || this.origenY-this.destinacioY=== 1))){

       this.imprimeTablaReinaBlack();

    }

    //MATA IZQUIERDA 1
  if(((this.destinacioX-this.origenX === 2 ))&&( this.origenY-this.destinacioY=== 2) && (this.mataIzquierda==true)){
    
        this.imprimeTablaReinaBlack();
        this.matriuTauler[this.destinacioX-1][this.destinacioY+1]=0;
        let rDestinacio=this.origenX+1;
        let cDestinacio=this.origenY-1;
        let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestinacio);
        esborraImg.firstChild.replaceWith(""); 
        this.fitxasWhiteContador--;
    
    }
    //MATA IZQUIERDA 2 
    if(((this.destinacioX-this.origenX === -2 ))&&( this.origenY-this.destinacioY=== 2) && (this.mataIzquierda2==true)){
    
        this.imprimeTablaReinaBlack();
        this.matriuTauler[this.destinacioX+1][this.destinacioY+1]=0;
        let rDestinacio=this.origenX-1;
        let cDestinacio=this.origenY-1;
        let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestinacio);
        esborraImg.firstChild.replaceWith("");
        this.fitxasWhiteContador--;

        }
    //Mata derecha 1
    //abajo derecha ((creo) es la 1 de la noxe) 
    if(((this.destinacioX-this.origenX === 2 ))&&( this.origenY-this.destinacioY=== -2) && (this.mataDerecha==true)){
    
        this.imprimeTablaReinaBlack();
        this.matriuTauler[this.destinacioX-1][this.destinacioY-1]=0;
        let rDestinacio=this.origenX+1;
        let cDestincaio=this.origenY+1;
        let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestincaio);
        esborraImg.firstChild.replaceWith("");
        this.fitxasWhiteContador--;
                     
        }
        //MATA DERECHA 2
        if(((this.destinacioX-this.origenX === -2 ))&&( this.origenY-this.destinacioY=== -2) && (this.mataDerecha2==true)){

        this.imprimeTablaReinaBlack();
        this.matriuTauler[this.destinacioX+1][this.destinacioY-1]=0;
        let rDestinacio=this.origenX-1;
        let cDestincaio=this.origenY+1;
        let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestincaio);
        esborraImg.firstChild.replaceWith("");
        this.fitxasWhiteContador--;
        }

        this.mataDerecha = false;
        this.mataDerecha2= false;
        this.mataIzquierda=false;
        this.mataIzquierda2=false;
        
     
         
    }

    
      
}




    
