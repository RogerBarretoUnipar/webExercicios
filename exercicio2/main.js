let kg = document.querySelector("#kg");
let valorkg = document.querySelector("#valorkg");
let btn = document.querySelector("#btn");

function calculaValorkg()
{
    let resultado = kg.value * valorkg.value;
    alert(resultado)
}

btn.addEventListener("click", calculaValorkg);