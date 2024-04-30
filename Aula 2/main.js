let valor1 = document.querySelector("#campoUm");
let valor2 = document.querySelector("#campoDois");
let resultado = document.querySelector("#Resultado");
let button = document.querySelector("#button");

function somar() {
    let valor1num = parseInt(valor1.value);
    let valor2num = parseInt(valor2.value);
    let resultadoTotal = valor1num + valor2num;
    resultado.textContent = resultadoTotal;
}

button.addEventListener("click", somar);