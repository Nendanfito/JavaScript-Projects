function changeMode(){
    var cuerpoweb = document.body;
    cuerpoweb.classList.toggle("oscuro");
}

function newSet(set){
    const juegoth = document.querySelector("#juego");
    const juegotd1 = document.querySelector("#j1j");
    const juegotd2 = document.querySelector("#j2j");
    juegoth.insertAdjacentHTML('beforebegin','<th id="tituloSet2"></th>');
    document.getElementById("tituloSet2").textContent = "Set " +set;
    juegotd1.insertAdjacentHTML('beforebegin', '<td id="j1s2">0</td>');
    juegotd2.insertAdjacentHTML('beforebegin', '<td>0</td>');
}
var set = 1;
function sumarPuntoJ1(){
    const puntoJ1 = document.getElementById("j1j");
    const puntoJ2 = document.getElementById("j2j");
    const setJ1 = document.getElementById("j1s"+set);
    if(puntoJ1.textContent == 0){
        puntoJ1.textContent = 15;
    } else if(puntoJ1.textContent == 15){ 
        puntoJ1.textContent = 30;
    } else if (puntoJ1.textContent == 30){
        puntoJ1.textContent = 40;
    } else if (puntoJ1.textContent == 40 && puntoJ2.textContent == 40){
        puntoJ1.textContent = "AD";
    } else if (puntoJ1.textContent == 40 || puntoJ1.textContent == "AD"){
        puntoJ1.textContent = 0;
        setJ1.textContent = parseInt(setJ1.innerHTML)+1;    
        if(setJ1.textContent == 6){
            set +=1;
            newSet(set);
        }
    }
}

function restarPuntoJ1(){
    const puntoJ1 = document.getElementById("j1j");
    const puntoJ2 = document.getElementById("j2j");
    if(puntoJ1.textContent == 15){
        puntoJ1.textContent = 0;
    } else if(puntoJ1.textContent == 30){ 
        puntoJ1.textContent = 15;
    } else if (puntoJ1.textContent == 40){
        puntoJ1.textContent = 30;
    } else if (puntoJ1.textContent == "AD"){
        puntoJ1.textContent = "40";
    }
}