let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");
let mediaNormal;
let mediaPonderada
function calcularMedia()
{
    let numMedia1 = num1.value;
    let numMedia2 = num2.value;
    let numMedia3 = num3.value;
    
    mediaNormal = (numMedia1 + numMedia2 + numMedia3)/3;

    resultado.innerHTML += "<p>" + mediaNormal + "</p>" + "<br>";
}
function calcularMediaponderada()
{
    let numMediaP1 = num1.value * 3;
    let numMediaP2 = num2.value * 2;
    let numMediaP3 = num3.value * 5;

    let numMediaPp1 = num1.value;
    let numMediaPp2 = num2.value;
    let numMediaPp3 = num3.value;

    let pesoMedia = numMediaP1 + numMediaP2 + numMediaP3;
    let divideMedia = numMediaPp1 + numMediaPp2 + numMediaPp3;
    mediaPonderada = pesoMedia/divideMedia; 

    resultado.innerHTML += "<p>" + mediaPonderada + "</p>" + "<br>";
}
function somaMedia()
{
    let mediaSoma = mediaNormal + mediaPonderada;

    resultado.innerHTML += "<p>" + mediaSoma + "</p>" + "<br>";
}
function mediaFinal()
{
    let finalMedia = (mediaNormal + mediaPonderada)/2;

    resultado.innerHTML += "<p>" + finalMedia + "</p>" + "<br>";
}

function chamarFunctions()
{
    calcularMedia();
    calcularMediaponderada();
    somaMedia();
    mediaFinal();
}

btn.addEventListener("click", chamarFunctions);