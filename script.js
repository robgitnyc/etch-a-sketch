let rstbtn = document.querySelector("#reset");
rstbtn.addEventListener("click", function(){

    const nodelist = document.querySelectorAll(".square");

    for (i = 0 ; i < nodelist.length ; i++) {
        nodelist[i].remove();
    }

   let horizontal = prompt("how many squares horizontally");
   let vertical = prompt("how many squares vertically");
   let sqWidth = 100 / horizontal + "%"; 

   if (horizontal > 100 || vertical > 100) {
       alert("up to 100 squares per side allowed. Try again");
   };

   for (i = 0 ; i < horizontal * vertical; i++) {
    
    let container = document.querySelector(".container");
    let div = document.createElement("div");
    div.classList = "square";
    div.id = "id"+i;
    container.append(div);
    div.style.width = sqWidth;
    //Colores para el grid:
    function getRandom255() {
        min = Math.ceil(0);
        max = Math.floor(255);
        return Math.floor(Math.random() * (255 - 0 + 1)) + min;
    };
    let red= getRandom255();
    let green = getRandom255();
    let blue = getRandom255();

    function getRandomColor() {
        return `rgb(${red}, ${green}, ${blue})`
    }


    div.addEventListener("mouseover", function(){
        div.style.backgroundColor = getRandomColor();
    })
    };
/*
    for (i = 0 ; i < nodelist.length ; i++) {
        document.getElementById("id"+i).style.width = "50px";
    }
    */
  
});




