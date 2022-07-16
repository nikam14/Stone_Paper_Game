console.log("hello")
var u;
var c;

function stone(){
    document.getElementById("u").innerHTML = "stone"
    u = "stone"
    c = Math.floor(Math.random() * 10);
    computerchoice();
    console.log(u)
}
function paper(){
    document.getElementById("u").innerHTML = "paper"
    u = "paper"
    c =  Math.floor(Math.random() * 10);
     computerchoice();
    console.log(u)
}
function scessior(){
    document.getElementById("u").innerHTML = "scessior"
    u = "scessior"
    c = Math.floor(Math.random() * 10);
     computerchoice();
    console.log(u)
}

function computerchoice(){
     if(c>=0 && c<=3 ){
        c = "stone";
        document.getElementById("c").innerHTML = c
        console.log(c)
    }else if(c>=4 && c<=6 ){
        c = "paper";
        document.getElementById("c").innerHTML = c
        console.log(c)
    }else{
        c = "scessior"
        document.getElementById("c").innerHTML = c
        console.log(c)
    }
}

function result(){
   
    if(c=="stone" && u=="stone"){
        document.getElementById("r").innerHTML="draw"
    }else if(c=="paper" && u=="paper"){
        document.getElementById("r").innerHTML="draw"
    }else if(c=="scessior" && u=="scessior"){
        document.getElementById("r").innerHTML="draw"
    }else if(c=="stone" && u=="paper"){
        document.getElementById("r").innerHTML="you win"
    }else if(c=="stone" && u=="scessior"){
        document.getElementById("r").innerHTML="you lose"
    }else if(c=="paper" && u=="stone"){
        document.getElementById("r").innerHTML="you lose"
    }else if(c=="paper" && u=="scessior"){
        document.getElementById("r").innerHTML="you win"
    }else if(c=="scessior" && u=="stone"){
        document.getElementById("r").innerHTML="you win"
    }else if(c=="scessior" && u=="paper"){
        document.getElementById("r").innerHTML="you lose"
    }
}


