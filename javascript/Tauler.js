class Tauler{
    matriuTauler;
    origenX;
    origenY;
    destinacioX;
    destinacioY;
    posicioMatarY;
    posicioMatarX;
    mata=false;
    mataIzquierda = false;
    mataDerecha = false;
    mataIzquierda2 = false;
    mataDerecha2=false;
  
    
    
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
       
      

    if(this.matriuTauler[this.origenX][this.origenY].stringColor=="black"){  
     

    if(((this.destinacioX-this.origenX === 1) &&  (this.origenY-this.destinacioY === 1 || this.origenY-this.destinacioY===-1))){
          
        //remove class verd
        //esborra imatge
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

       //funciona corectamente
        if(this.origenY==7){
                if(this.matriuTauler[this.origenX+1][this.origenY-1].stringColor=="white"){
                    this.mataIzquierda=true;
                   // console.log("origenY: ",this.origenY,this.origenX);  
                     
                                         
         }
        
        }

        if(this.origenY==0){
            if(this.matriuTauler[this.origenX+1][this.origenY+1].stringColor=="white"){
                this.mataDerecha=true;
               // console.log("origenY: ",this.origenY,this.origenX);  
                
          
            }

           }
           //console.log("antes",this.mata);
        //mata hacia la derecha
        if(this.origenY>0&&this.origenY<7){
            if(this.matriuTauler[this.origenX+1][this.origenY+1].stringColor=="white"){
                this.mataDerecha=true;
              //  console.log("derecha: ",this.mataDerecha);
         
            }

        }

        if(this.origenY>0&&this.origenY<7){
            if(this.matriuTauler[this.origenX+1][this.origenY-1].stringColor=="white"){
                this.mataIzquierda=true;
              //  console.log("derecha: ",this.mataIzquierda);
         
            }

        }



        //this.mata derecha aplica el mata a este


  
    
        //funciona
        if((this.destinacioX-this.origenX === 2 )&&(this.origenY-this.destinacioY=== 2) && (this.mataIzquierda==true)){
        
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
            
    
            if(this.origenY-this.destinacioY ==2){
                //revisar
                this.matriuTauler[this.destinacioX-1][this.destinacioY+1]=0;
                let rDestinacio=this.origenX+1;
                let cDestinacio=this.origenY-1;
                let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestinacio);
                esborraImg.firstChild.replaceWith("");
        
               
    
            }
                this.mataDerecha=false;
                this.mataIzquierda=false;
            }

            if(((this.destinacioX-this.origenX === 2 ))&&(this.origenY-this.destinacioY === -2) && (this.mataDerecha==true)){
        
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
                
                if(this.origenY-this.destinacioY ==-2){
                    this.matriuTauler[this.destinacioX-1][this.destinacioY-1]=0;
                    let rDestinacio=this.origenX+1;
                    let cDestincaio=this.origenY+1;
                    let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestincaio);
                    esborraImg.firstChild.replaceWith("");
                             
        
                }         
         
                this.mataDerecha = false;
                this.mataIzquierda = false;
                }

            
 

    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////terminan negras


    //move blancas
    //si la fitxa pasada es blanca i no es reina entra
    if((this.matriuTauler[this.origenX][this.origenY].stringColor=="white") && (this.matriuTauler[this.origenX][this.origenY].booleanReina==false)){ 
 
    
        //moviment fitxa blanca cap adalt
        if(((this.destinacioX-this.origenX === -1) &&  (this.origenY-this.destinacioY === -1 || this.origenY-this.destinacioY=== 1))){

              //remove class verd
              //esborra imatge
             let divImage = document.getElementById("r"+this.origenX+"c"+this.origenY);
             divImage.firstChild.replaceWith("");
             divImage.classList.remove("clickVerde");
         
             this.matriuTauler[this.destinacioX][this.destinacioY]= this.matriuTauler[this.origenX][this.origenY];
              this.matriuTauler[this.origenX][this.origenY]=0;
             //inserta imagen
             let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
             img.innerHTML="<img src=img/fichaRoja.png>";

            //es reina
            if(this.destinacioX==0){
                this.matriuTauler[this.destinacioX][this.destinacioY].booleanReina=true;
                }
                    
                //juegan ahora las blancas
                partida.booleanCanviTorn = true;

        }
      
        //comprobamos si estan en las esquinas o no 
        
        
        if(this.origenY==7){
                if(this.matriuTauler[this.origenX-1][this.origenY-1].stringColor=="black"){
                    this.mataIzquierda=true;
         }
        
        }

        if(this.origenY==0 ){
            if(this.matriuTauler[this.origenX-1][this.origenY+1].stringColor=="black"){
                this.mataDerecha=true;
              
            }

           }

        //mata hacia la derecha
        if(this.origenY>0&&this.origenY<7){
            if(this.matriuTauler[this.origenX-1][this.origenY+1].stringColor=="black"){
                this.mataDerecha=true;
               // console.log("derecha: ",this.mataDerecha);
         
            }

        }
        //mata izquierda
        if(this.origenY>0&&this.origenY<7){
            if(this.matriuTauler[this.origenX-1][this.origenY-1].stringColor=="black"){
                this.mataIzquierda=true;
               // console.log("derecha: ",this.mataIzquierda);
         
            }

        }




        
        if((this.destinacioX-this.origenX === -2 )&&(this.origenY-this.destinacioY === -2 ) && (this.mataDerecha==true)){
        
        let divImage = document.getElementById("r"+this.origenX+"c"+this.origenY);
        divImage.firstChild.replaceWith("");
        divImage.classList.remove("clickVerde");
       
         this.matriuTauler[this.destinacioX][this.destinacioY]= this.matriuTauler[this.origenX][this.origenY];
         this.matriuTauler[this.origenX][this.origenY]=0;
           //inserta imagen
         let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
         img.innerHTML="<img src=img/fichaRoja.png>";
        
         //es reina
         if(this.destinacioX==0){
            this.matriuTauler[this.destinacioX][this.destinacioY].booleanReina=true;
            }
       
         //juegan ahora las blancas
         partida.booleanCanviTorn = true;
        //asdcsdv
        if(this.origenY-this.destinacioY ==-2){
   
            this.matriuTauler[this.destinacioX+1][this.destinacioY-1]=0;
             let rDestinacio=this.origenX-1;
             let cDestincaio=this.origenY+1;
            let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestincaio);
            esborraImg.firstChild.replaceWith("");
          
            

        }


        this.mataDerecha = false;
        this.mataIzquierda = false;
        
        
        }

        if((this.destinacioX-this.origenX === -2 )&&(this.origenY-this.destinacioY === 2 ) && (this.mataIzquierda==true)){
            let divImage = document.getElementById("r"+this.origenX+"c"+this.origenY);
            divImage.firstChild.replaceWith("");
            divImage.classList.remove("clickVerde");
           
             this.matriuTauler[this.destinacioX][this.destinacioY]= this.matriuTauler[this.origenX][this.origenY];
             this.matriuTauler[this.origenX][this.origenY]=0;
               //inserta imagen
             let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
             img.innerHTML="<img src=img/fichaRoja.png>";
            
             //es reina
             if(this.destinacioX==0){
                this.matriuTauler[this.destinacioX][this.destinacioY].booleanReina=true;
                }
           
             //juegan ahora las blancas
             partida.booleanCanviTorn = true;
            //asdcsdv
         
    
            if(this.origenY-this.destinacioY ==2){
           
                this.matriuTauler[this.destinacioX+1][this.destinacioY+1]=0;
                 let rDestinacio=this.origenX-1;
                 let cDestinacio=this.origenY-1;
                let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestinacio);
                esborraImg.firstChild.replaceWith("");
        
               
    
            }

            this.mataDerecha = false;
            this.mataIzquierda = false;


        }

     
        
      
        }
        /////////////////////////////////////EMPIEZAN LAS REINAS//////////////////////////////////////////////
        //////////////////////////////////////////////////////
            //move blancas reinas
    if(this.matriuTauler[this.origenX][this.origenY].stringColor=="white" && this.matriuTauler[this.origenX][this.origenY].booleanReina==true){ 

       

        //si esta en las esquinas superiores los dos siguientes if
        if(this.origenY==7){
            if(this.matriuTauler[this.origenX+1][this.origenY-1].stringColor=="black"){
                this.mataIzquierda=true;
               console.log("he entrado 1");                               
                   
     }
    
    }

    if(this.origenY==0){
        if(this.matriuTauler[this.origenX+1][this.origenY+1].stringColor=="black"){
            this.mataDerecha=true;
         //   console.log("origenY: ",this.origenY,this.origenX);  
         console.log("he entrado 2");   
            
      
        }
       }

       //esquinas inferiores
    //     if(this.origenY==7){
    //         if(this.matriuTauler[this.origenX+1][this.origenY-1].stringColor=="black"){
    //             this.mataIzquierda=true;
    //            console.log("he entrado 1");                               
                   
    //     }
        
    //     }

    // if(this.origenY==0){
    //     if(this.matriuTauler[this.origenX+1][this.origenY+1].stringColor=="black"){
    //         this.mataDerecha=true;
    //      //   console.log("origenY: ",this.origenY,this.origenX);  
    //      console.log("he entrado 2");   
            
      
    //     }
    //    }
       //console.log("antes",this.mata);
    //mata hacia la derecha
    //los dos del 1 funcionan comprueban hacia abajo
    if(this.origenX!=7){
    if(this.origenY>0&&this.origenY<7){
        if(this.matriuTauler[this.origenX+1][this.origenY+1].stringColor=="black"){
            this.mataDerecha=true;
            console.log("abajo derecha: ",this.mataDerecha);
     
        }

        if(this.matriuTauler[this.origenX+1][this.origenY-1].stringColor=="black"){
            this.mataIzquierda=true;
            console.log("abajo izquierda: ",this.mataIzquierda);
            
        }
        

    }
    }
    //si esta al final no puede restar entoces por eso siempre que no sea 0 puede restar para matar hacia arriba
    if(this.origenX!=0 && this.origenY!=0 && this.origenY!=7){

        if(this.matriuTauler[this.origenX-1][this.origenY+1].stringColor=="black"){
            this.mataDerecha2=true;
            console.log("arriba derecha: ",this.mataDerecha2);
     
        }

        if(this.matriuTauler[this.origenX-1][this.origenY-1].stringColor=="black"){
                    this.mataIzquierda2=true;
                    console.log("arriba izquierda: ",this.mataIzquierda2);
             
                }


    }
    //Si la reina esta a la esquerra que comprovi nomes la dreta
    if(this.origenY==0){
        if(this.matriuTauler[this.origenX-1][this.origenY+1].stringColor=="black"){
            this.mataDerecha2=true;
            console.log("arriba derecha: ",this.mataDerecha2);
     
        }

    }
    //Si la reina esta a la dreta que comprovi nomes la esquerra
    if(this.origenY==7){
        if(this.matriuTauler[this.origenX-1][this.origenY-1].stringColor=="black"){
            this.mataIzquierda2=true;
            console.log("arriba izquierda: ",this.mataIzquierda2);
     
        }

    }

   

    //comprobar hacia arriba
    //
      //  
    //
     //
       
     //movimiento hacia abajo
        if (((this.destinacioX-this.origenX === 1) &&  (this.origenY-this.destinacioY === 1 || this.origenY-this.destinacioY===-1))){
         //remove class verd
         //esborra imatge
         let divImage = document.getElementById("r"+this.origenX+"c"+this.origenY);
         divImage.firstChild.replaceWith("");
         divImage.classList.remove("clickVerde");
      
        this.matriuTauler[this.destinacioX][this.destinacioY]= this.matriuTauler[this.origenX][this.origenY];
        this.matriuTauler[this.origenX][this.origenY]=0;
          //inserta imagen
        let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
        img.innerHTML="<img src=img/fichaRoja.png>";
      
        //juegan ahora las blancas
        partida.booleanCanviTorn = true;
 
        }
        //movimiento hacia arriba
         //moviment fitxa blanca cap adalt
         if(((this.destinacioX-this.origenX === -1) &&  (this.origenY-this.destinacioY === -1 || this.origenY-this.destinacioY=== 1))){

            //remove class verd
            //esborra imatge
           let divImage = document.getElementById("r"+this.origenX+"c"+this.origenY);
           divImage.firstChild.replaceWith("");
           divImage.classList.remove("clickVerde");
       
           this.matriuTauler[this.destinacioX][this.destinacioY]= this.matriuTauler[this.origenX][this.origenY];
            this.matriuTauler[this.origenX][this.origenY]=0;
           //inserta imagen
           let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
           img.innerHTML="<img src=img/fichaRoja.png>";

          //es reina
          if(this.destinacioX==0){
              this.matriuTauler[this.destinacioX][this.destinacioY].booleanReina=true;
              }
                  
              //juegan ahora las blancas
              partida.booleanCanviTorn = true;

      }
      //MATA IZQUIERDA 1
      //mata hacia abajo
      if(((this.destinacioX-this.origenX === 2 ))&&( this.origenY-this.destinacioY=== 2) && (this.mataIzquierda==true)){
        
        let divImage = document.getElementById("r"+this.origenX+"c"+this.origenY);
        divImage.firstChild.replaceWith("");
        divImage.classList.remove("clickVerde");
       
         this.matriuTauler[this.destinacioX][this.destinacioY]= this.matriuTauler[this.origenX][this.origenY];
         this.matriuTauler[this.origenX][this.origenY]=0;
           //inserta imagen
         let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
         img.innerHTML="<img src=img/fichaRoja.png>";
       
         //juegan ahora las blancas
         partida.booleanCanviTorn = true;
        
        // if(this.origenY-this.destinacioY ==-2){
        //     //hecho

        //     this.matriuTauler[this.destinacioX-1][this.destinacioY-1]=0;
        //      let rDestinacio=this.origenX+1;
        //      let cDestincaio=this.origenY+1;
        //     let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestincaio);
        //     esborraImg.firstChild.replaceWith("");
                     

        // }

        if(this.origenY-this.destinacioY ==2){
            //revisar
            this.matriuTauler[this.destinacioX-1][this.destinacioY+1]=0;
             let rDestinacio=this.origenX+1;
             let cDestinacio=this.origenY-1;
            let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestinacio);
            esborraImg.firstChild.replaceWith("");
    
           

        }
        
        
        }
        //MATA IZQUIERDA 2 //////solo falta este arriba izquierda no borra fitxa revisar i arriba derecha no hace
        if(((this.destinacioX-this.origenX === -2 ))&&( this.origenY-this.destinacioY=== 2) && (this.mataIzquierda2==true)){
        
            let divImage = document.getElementById("r"+this.origenX+"c"+this.origenY);
            divImage.firstChild.replaceWith("");
            divImage.classList.remove("clickVerde");
           
             this.matriuTauler[this.destinacioX][this.destinacioY]= this.matriuTauler[this.origenX][this.origenY];
             this.matriuTauler[this.origenX][this.origenY]=0;
               //inserta imagen
             let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
             img.innerHTML="<img src=img/fichaRoja.png>";
           
             //juegan ahora las blancas
             partida.booleanCanviTorn = true;
            
            // if(this.origenY-this.destinacioY ==-2){
            //     //hecho
    
            //     this.matriuTauler[this.destinacioX-1][this.destinacioY-1]=0;
            //      let rDestinacio=this.origenX+1;
            //      let cDestincaio=this.origenY+1;
            //     let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestincaio);
            //     esborraImg.firstChild.replaceWith("");
                         
    
            // }
  
            if(this.origenY-this.destinacioY ==2){
   
                this.matriuTauler[this.destinacioX+1][this.destinacioY+1]=0;
                let rDestinacio=this.origenX-1;
                let cDestinacio=this.origenY-1;
               let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestinacio);
               esborraImg.firstChild.replaceWith("");
              
                
    
            }
            
            
            }
        //Mata derecha 1
        //abajo derecha ((creo) es la 1 de la noxe) 
        if(((this.destinacioX-this.origenX === 2 ))&&( this.origenY-this.destinacioY=== -2) && (this.mataDerecha==true)){
        
            let divImage = document.getElementById("r"+this.origenX+"c"+this.origenY);
            divImage.firstChild.replaceWith("");
            divImage.classList.remove("clickVerde");
           
             this.matriuTauler[this.destinacioX][this.destinacioY]= this.matriuTauler[this.origenX][this.origenY];
             this.matriuTauler[this.origenX][this.origenY]=0;
               //inserta imagen
             let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
             img.innerHTML="<img src=img/fichaRoja.png>";
           
             //juegan ahora las blancas
             partida.booleanCanviTorn = true;
            
            // if(this.origenY-this.destinacioY ==-2){
            //     //hecho
    
            //     this.matriuTauler[this.destinacioX-1][this.destinacioY-1]=0;
            //      let rDestinacio=this.origenX+1;
            //      let cDestincaio=this.origenY+1;
            //     let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestincaio);
            //     esborraImg.firstChild.replaceWith("");
                         
    
            // }
    
            if(this.origenY-this.destinacioY ==-2){
                this.matriuTauler[this.destinacioX-1][this.destinacioY-1]=0;
                let rDestinacio=this.origenX+1;
                let cDestincaio=this.origenY+1;
                let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestincaio);
                esborraImg.firstChild.replaceWith("");
                         
    
            }    
            
            
            }
            //MATA DERECHA 2
            if(((this.destinacioX-this.origenX === -2 ))&&( this.origenY-this.destinacioY=== -2) && (this.mataDerecha2==true)){

                let divImage = document.getElementById("r"+this.origenX+"c"+this.origenY);
                divImage.firstChild.replaceWith("");
                divImage.classList.remove("clickVerde");
               
                 this.matriuTauler[this.destinacioX][this.destinacioY]= this.matriuTauler[this.origenX][this.origenY];
                 this.matriuTauler[this.origenX][this.origenY]=0;
                   //inserta imagen
                 let img = document.getElementById("r"+this.destinacioX+"c"+this.destinacioY);
                 img.innerHTML="<img src=img/fichaRoja.png>";
               
                 //juegan ahora las blancas
                 partida.booleanCanviTorn = true;
                  
        //asdcsdv
        if(this.origenY-this.destinacioY ==-2){
   
            this.matriuTauler[this.destinacioX+1][this.destinacioY-1]=0;
             let rDestinacio=this.origenX-1;
             let cDestincaio=this.origenY+1;
            let esborraImg = document.getElementById("r"+rDestinacio+"c"+cDestincaio);
            esborraImg.firstChild.replaceWith("");

                 
        }
            }
     

     }

     //matar reina 
  
     this.mataDerecha=false;
     this.mataIzquierda=false;
        console.log(this.mataDerecha);
        console.log(this.mataIzquierda);
        
        //console.log("Act: ",this.matriuTauler);
        
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

    
