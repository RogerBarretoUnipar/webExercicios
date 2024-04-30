let valor1 = document.querySelector("#campoUm");
let valor2 = document.querySelector("#campoDois");
let resultado = document.querySelector("#resultado");
let button = document.querySelector("#button");

function somar()
{
    resultadototal = valor1 + valor2;
    resultado.textContent = resultadototal;
}
button.onClick = function()
{
    somar();
}