let puntoJ1 = document.querySelector("#j1j");
const puntoJ2 = document.querySelector("#j2j");
let set = 1;

function changeMode(){
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "../css/contador.css") {
        theme.href = "../css/contador-dark.css";
    } else {
        theme.href = "../css/contador.css";
    }
}

function resetearPartido(){
    location.reload();
}

function newSet(){
    const juegoth = document.querySelector("#juego");
    const juegotd1 = document.querySelector("#j1j");
    const juegotd2 = document.querySelector("#j2j");
    juegoth.insertAdjacentHTML('beforebegin','<th class="newth"></th>');
    juegotd1.insertAdjacentHTML('beforebegin', '<td class="newtd1">0</td>');
    juegotd2.insertAdjacentHTML('beforebegin', '<td class = newtd2>0</td>');

    document.querySelector(".newth").classList.add("tituloSet"+set);
    document.querySelector(".newtd1").classList.add("j1s"+set);
    document.querySelector(".newtd2").classList.add("j2s"+set);

    document.querySelector(".newth").classList.remove("newth");
    document.querySelector(".newtd1").classList.remove("newtd1");
    document.querySelector(".newtd2").classList.remove("newtd2");

    document.querySelector(".tituloSet"+set).innerHTML = "Set "+set;
}

function sumarPuntoJ1(){
    let setJ1 = document.querySelector(".j1s"+set);
    let setJ2 = document.querySelector(".j2s"+set);
    if(puntoJ1.textContent == 0){
        puntoJ1.textContent = 15;
    } else if(puntoJ1.textContent == 15){ 
        puntoJ1.textContent = 30;
    } else if (puntoJ1.textContent == 30){
        puntoJ1.textContent = 40;
    } else if (puntoJ1.textContent == 40 && puntoJ2.textContent == 40){
        puntoJ1.textContent = "AD";
    } else if (puntoJ1.textContent == 40 && puntoJ2.textContent == "AD"){
        puntoJ2.textContent = 40;
    } else if (puntoJ1.textContent == 40 || puntoJ1.textContent == "AD"){
        puntoJ1.textContent = 0;
        puntoJ2.textContent = 0;
        setJ1.textContent = parseInt(setJ1.innerHTML)+1;    
        if((setJ1.textContent == 6 && setJ2.textContent != 5) || setJ1.textContent == 7){
            set +=1;
            puntoJ2.textContent = 0;
            newSet();
            
        }
    }
}

function restarPuntoJ1(){
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

function sumarPuntoJ2(){
    let setJ1 = document.querySelector(".j1s"+set);
    let setJ2 = document.querySelector(".j2s"+set);
    if(puntoJ2.textContent == 0){
        puntoJ2.textContent = 15;
    } else if(puntoJ2.textContent == 15){ 
        puntoJ2.textContent = 30;
    } else if (puntoJ2.textContent == 30){
        puntoJ2.textContent = 40;
    } else if (puntoJ2.textContent == 40 && puntoJ1.textContent == 40){
        puntoJ2.textContent = "AD";
    } else if (puntoJ2.textContent == 40 && puntoJ1.textContent == "AD"){
        puntoJ1.textContent = 40;
    } else if (puntoJ2.textContent == 40 || puntoJ2.textContent == "AD"){
        puntoJ2.textContent = 0;
        setJ2.textContent = parseInt(setJ2.innerHTML)+1;
        puntoJ1.textContent = 0;    
        if((setJ2.textContent == 6 && setJ1.textContent != 5) || setJ2.textContent == 7){
            set +=1;
            newSet();
            puntoJ1.textContent = 0;
        }
    }
}

function restarPuntoJ2(){
    if(puntoJ2.textContent == 15){
        puntoJ2.textContent = 0;
    } else if(puntoJ2.textContent == 30){ 
        puntoJ2.textContent = 15;
    } else if (puntoJ2.textContent == 40){
        puntoJ2.textContent = 30;
    } else if (puntoJ2.textContent == "AD"){
        puntoJ2.textContent = "40";
    }
}


