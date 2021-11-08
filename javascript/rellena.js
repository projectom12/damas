 
// console.log(array);

let array = document.getElementsByClassName("columna");

let segunda=0;
let tercer=0;
let quarta=0;
let quinta=0;
let sexta=0;
let septima=0;
let octava=0;


for(let i = 0; i <= array.length; i++){
  
   
    // for(let j=0;j<=0;j++){
    //     console.log("FOR" + j);

    if(i<8){
        let j = 0;
        if(i%2!=0){
            array[i].setAttribute("id","r"+j+"c"+i);
            
            var el = document.getElementById("r"+j+"c"+i);
            //inserta imagen
            el.innerHTML="<img src=C:/M12/img/fichaNegra.png>";
            el.classList.add("columnaNegra");
          

        }
    // } 

    
    }

    // for(let j=1;j<=1;j++){
    if(i>7 && i < 16){
        let j = 1;
        if(i%2==0){
            array[i].setAttribute("id","r"+"1"+"c"+segunda);
            //inserta imagen
            var el = document.getElementById("r"+j+"c"+segunda);
            el.innerHTML="<img src=C:/M12/img/fichaNegra.png>";
            el.classList.add("columnaNegra");
            segunda++;

        }else{
            segunda++;
        }
    } 
// }

    for(let j=2;j<=2;j++){
        if(i>15 && i < 24){
            if(i%2!=0){
                array[i].setAttribute("id","r"+j+"c"+tercer);
                 //inserta imagen
                var el = document.getElementById("r"+j+"c"+tercer);
                el.innerHTML="<img src=C:/M12/img/fichaNegra.png>";
                el.classList.add("columnaNegra");
                tercer++;

            }else{
                tercer++;
            }
        } 
    }

    for(let j=3;j<=3;j++){
        if(i>23 && i < 32){
            if(i%2==0){
                array[i].setAttribute("id","r"+j+"c"+septima);
                 //inserta imagen
                var el = document.getElementById("r"+j+"c"+septima);
                el.classList.add("columnaNegra");
                septima++;

            }else{
                septima++;
            }
        } 
    }

    for(let j=4;j<=4;j++){
        if(i>31 && i < 40){
            if(i%2!=0){
                array[i].setAttribute("id","r"+j+"c"+octava);
                 //inserta imagen
                var el = document.getElementById("r"+j+"c"+octava);
                el.classList.add("columnaNegra");
                octava++;

            }else{
                octava++;
            }
        } 
    }

    for(let j=5;j<=5;j++){
        if(i>39 && i < 48){
            if(i%2==0){
                array[i].setAttribute("id","r"+j+"c"+quarta);
                //inserta imagen
                var el = document.getElementById("r"+j+"c"+quarta);
                el.innerHTML="<img src=C:/M12/img/fichaRoja.png>";
                el.classList.add("columnaNegra");
                quarta++;

            }else{
                quarta++;
            }
        } 
    }

    for(let j=6;j<=6;j++){
        if(i>47 && i < 56){
            if(i%2!=0){
                array[i].setAttribute("id","r"+j+"c"+quinta);
                //inserta imagen
                var el = document.getElementById("r"+j+"c"+quinta);
                el.innerHTML="<img src=C:/M12/img/fichaRoja.png>";
                el.classList.add("columnaNegra");
                quinta++;

            }else{
                quinta++;
            }
        } 
    }

    for(let j=7;j<=7;j++){
        if(i>55 && i < 64){
            if(i%2==0){
                array[i].setAttribute("id","r"+j+"c"+sexta);
                //inserta imagen
                var el = document.getElementById("r"+j+"c"+sexta);
                el.innerHTML="<img src=C:/M12/img/fichaRoja.png>";
                el.classList.add("columnaNegra");
                sexta++;

            }else{
                sexta++;
            }
        } 
    }


    

        
    
     

    




}


  
            
                    
  
