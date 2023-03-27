console.log(" hola mundo :) ");
console.log( " ancho: "  + window.innerWidth );
let par;
par = document.getElementById("parrafito");
if (window.innerWidth < 700) { 
    par.innerHTML=  "menor a 700px "
}
else {
    par.innerHTML=  "mayor o igual  a 700px "
}

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }