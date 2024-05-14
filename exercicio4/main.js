let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");
let mediaNormal;
let mediaPonderada;

function calcularMedia()
{
    let numMedia1 = parseInt(num1.value);
    let numMedia2 = parseInt(num2.value);
    let numMedia3 = parseInt(num3.value);
    
    let mediasomada = (numMedia1 + numMedia2 + numMedia3);
    mediaNormal = mediasomada/3;

    resultado.innerHTML += "<p>" + mediaNormal + "</p>" + "<br>";
}
function calcularMediaponderada()
{
    let numMediaP1 = parseInt(num1.value) * 3;
    let numMediaP2 = parseInt(num2.value) * 2;
    let numMediaP3 = parseInt(num3.value) * 5;

    let numMediaPp1 = parseInt(num1.value);
    let numMediaPp2 = parseInt(num2.value);
    let numMediaPp3 = parseInt(num3.value);

    let pesoMedia = numMediaP1 + numMediaP2 + numMediaP3;
    let divideMedia = numMediaPp1 + numMediaPp2 + numMediaPp3;
    mediaPonderada = parseFloat(pesoMedia/divideMedia); 

    resultado.innerHTML += "<p>" + mediaPonderada + "</p>" + "<br>";
}
function somaMedia()
{
    let mediaSoma = parseFloat(mediaNormal + mediaPonderada);

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