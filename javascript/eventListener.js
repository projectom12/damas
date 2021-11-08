//Event listener
  

let array2 = document.getElementsByClassName("columnanegra");
let r;
let c;
let selected=false;
let contingut;


console.log(array);


for(let i = 0; i < array2.length; i++){

    array2[i].addEventListener("click", function(){
    r = parseInt(this.getAttribute("id").charAt(1));
    c = parseInt(this.getAttribute("id").charAt(3));
   
   
    contingut = tabla.seleciona(r,c);
    
    if(document.getElementsByClassName("clickVerde")[0]){
     
        if(contingut!= 0){
            alert("no pot ser una destinacio posible");

        }else{
            tabla.destinacioX = r;
            tabla.destinacioY = c;
            if(tabla.destinacioX < tabla.origenX && tabla.destinacioY != 0  ){

            }
            alert("comprobem el moviment");
        }
        

    }else{

    
    
    
    if(contingut!=0){
        this.classList.add("clickVerde");
        tabla.origenX = r;
        tabla.origenY = c;

    }else{
        this.classList.add("clickRojo");
    }
    
}
    selected=true;



 })
}