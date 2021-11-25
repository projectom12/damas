//Event listener
let array2 = document.getElementsByClassName("columnanegra");
let r;
let c;
let selected=false;
let contingut;
let rojo=0;
let verde=0;
let rojoAnteriorId;
let VerdeAnteriorId;


// while(booleanCanviTorn!=false)

for(let i = 0; i < array2.length; i++){
  

    array2[i].addEventListener("click", function(){

        // if(partida.quedanMovimientos==false){
        //     prompt("no te quedan movimientos");
        // }
        
        
    // r = parseInt(this.getAttribute("id").charAt(1));
    // c = parseInt(this.getAttribute("id").charAt(3));

    console.log(r,c);
    r = 9;
    c=9;
    
   if((r<8&&r<=0)&&(j<8&&j<=0)){
    contingut = tabla.seleciona(r,c);
       
   }else{
    alert("clica un casella valida");
    console.log("entra un valor valid");
    
    }



    if(rojo==1){
        document.getElementById(rojoAnteriorId).classList.remove("clickRojo");
    }
  
    //Si ja n'hi ha un click verd
  
    if(document.getElementsByClassName("clickVerde")[0]){

     

        // if(partida.booleanCanviTorn){

        // }
      
     if(contingut!= 0){

            if(verde==1){
                document.getElementById(VerdeAnteriorId).classList.remove("clickVerde");
                verde=0;
             
            }

           // alert("no pot ser una destinacio posible");

                }else{           
                    //console.log(this.getAttribute("id"));
                    tabla.destinacioX = r;
                    tabla.destinacioY = c;
                    //tabla.compruebaPierde();
                    tabla.actualiza();
                   
                   // console.log(tabla.matriuTauler);
                    
                   // alert("comprobem el moviment");
                }
        

    }else{
        

         
           
       // console.log(partida.booleanCanviTorn);
        //si el booleanCanviTorn es true el torn actual es black si el es false el torn actual es white
        let tornActual = (partida.booleanCanviTorn)?"black":"white";
            if(contingut!=0 && tornActual==contingut.stringColor){
               
                this.classList.add("clickVerde");
                verde=1;
                VerdeAnteriorId = this.getAttribute("id");
                tabla.origenX=r;
                tabla.origenY=c;
              
                

            }else{
                this.classList.add("clickRojo");
                rojoAnteriorId = this.getAttribute("id");
                //console.log(this.getAttribute("id"));
                rojo = 1;
                
            }



        }



 })


}