class Rellena{ 

// console.log(array);
constructor(){}
//omple el html amb id i dona un nova clase columnaNegre que serà les caselles on es jugarà
omplehtml(){
let array = document.getElementsByClassName("columna");
let fila2=0;
let fila3=0;
let fila4=0;
let fila5=0;
let fila6=0;
let fila7=0;
let fila8=0;

for(let i = 0; i <= array.length; i++){
  
    if(i<8){
        let j = 0;
        if(i%2!=0){
            array[i].setAttribute("id","r"+j+"c"+i);
            
            var el = document.getElementById("r"+j+"c"+i);
            //inserta imagen
            el.innerHTML="<img src=img/fichaNegra.png>";
            el.classList.add("columnaNegra");
    
        }
    }
    if(i>7 && i < 16){
        let j = 1;
        if(i%2==0){
            array[i].setAttribute("id","r"+"1"+"c"+fila2);
            //inserta imagen
            var el = document.getElementById("r"+j+"c"+fila2);
            el.innerHTML="<img src=img/fichaNegra.png>";
            el.classList.add("columnaNegra");
            fila2++;

        }else{
            fila2++;
        }
    } 
   
        if(i>15 && i < 24){
            let j = 2;
            if(i%2!=0){
                array[i].setAttribute("id","r"+j+"c"+fila3);
                 //inserta imagen
                var el = document.getElementById("r"+j+"c"+fila3);
                el.innerHTML="<img src=img/fichaNegra.png>";
                el.classList.add("columnaNegra");
                fila3++;

            }else{
                fila3++;
            }
        } 
    
        if(i>23 && i < 32){
            let j = 3;
            if(i%2==0){
                array[i].setAttribute("id","r"+j+"c"+fila7);
                 //inserta imagen
                var el = document.getElementById("r"+j+"c"+fila7);
                el.classList.add("columnaNegra");
                fila7++;

            }else{
                fila7++;
            }
        } 
    
        if(i>31 && i < 40){
            let j = 4;
            if(i%2!=0){
                array[i].setAttribute("id","r"+j+"c"+fila8);
                 //inserta imagen
                var el = document.getElementById("r"+j+"c"+fila8);
                el.classList.add("columnaNegra");
                fila8++;

            }else{
                fila8++;
            }
        } 
    
        if(i>39 && i < 48){
            let j = 5;
            if(i%2==0){
                array[i].setAttribute("id","r"+j+"c"+fila4);
                //inserta imagen
                var el = document.getElementById("r"+j+"c"+fila4);
                el.innerHTML="<img src=img/fichaRoja.png>";
                el.classList.add("columnaNegra");
                fila4++;

            }else{
                fila4++;
            }
        } 
   
        if(i>47 && i < 56){
            let j = 6;
            if(i%2!=0){
                array[i].setAttribute("id","r"+j+"c"+fila5);
                //inserta imagen
                var el = document.getElementById("r"+j+"c"+fila5);
                el.innerHTML="<img src=img/fichaRoja.png>";
                el.classList.add("columnaNegra");
                fila5++;

            }else{
                fila5++;
            }
        } 
    
        if(i>55 && i < 64){
            let j = 7;
            if(i%2==0){
                array[i].setAttribute("id","r"+j+"c"+fila6);
                //inserta imagen
                var el = document.getElementById("r"+j+"c"+fila6);
                el.innerHTML="<img src=img/fichaRoja.png>";
                el.classList.add("columnaNegra");
                fila6++;

            }else{
                fila6++;
            }
        } 
    


}
}

}

  
            
                    
  
