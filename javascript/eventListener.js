//Event listener
  

let array2 = document.getElementsByClassName("columnanegra");
let r;
let c;
let selected=false;
let contingut;



for(let i = 0; i < array2.length; i++){

    array2[i].addEventListener("click", function(){
    r = parseInt(this.getAttribute("id").charAt(1));
    c = parseInt(this.getAttribute("id").charAt(3));
    
        

    contingut = tabla.seleciona(r,c);
    console.log(partida.booleanCanviTorn);
    if(partida.booleanCanviTorn){
    
    if(document.getElementsByClassName("clickVerde")[0]){
      
     
        if(contingut!= 0){
            alert("no pot ser una destinacio posible");

        }else{
            
            //console.log(this.getAttribute("id"));
            tabla.destinacioX = r;
            tabla.destinacioY = c;
            tabla.actualiza();
            console.log(tabla.matriuTauler);
            
            alert("comprobem el moviment");
        }
        

    }else{
         
    tabla.origenX=r;
    tabla.origenY=c;

    
    
    
    if(contingut!=0){
        this.classList.add("clickVerde");


    }else{
        this.classList.add("clickRojo");
    }
    
}
    selected=true;


}
 })


}