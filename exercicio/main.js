let media = document.querySelector("#media");
let botao = document.querySelector("#bota");
let resultado = document.querySelector("#resultado");

function passei()
{
    let mediavalue = media.value;
    if(mediavalue < 60)
    {
        alert("reprovou");
    }
    else
    {
        alert("Passo");
    }
}

botao.addEventListener("click", passei);