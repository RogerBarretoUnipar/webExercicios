let numero = document.querySelector("#numero");
let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");

function eleEh()
{
    let parOuimpar = numero.value %2;
    if(parOuimpar != 0)
        {
            resultado.textContent = "ELE É IMPAR MEU DEUS QUE PECADO";
        }
    else
        {
            resultado.textContent = "ELE É PAR DEUS É BOM";   
        }
}

btn.addEventListener("click", eleEh);