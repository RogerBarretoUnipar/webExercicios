let resultado = document.querySelector("#resultado");
let codigo = document.querySelector("#codigo");

function validaCodigo() {
    let codigoTraduzido = codigo.value;
    setTimeout(function() {
        if (codigoTraduzido === '001') {
            resultado.textContent = '001 - Parafuso';
        } else if (codigoTraduzido === '002') {
            resultado.textContent = '002 - Porca';
        } else if (codigoTraduzido === '003') {
            resultado.textContent = '003 - Prego';
        } else {
            resultado.textContent = 'Diversos';
        }
    }, 1000);
}

codigo.addEventListener("input", validaCodigo);
