let saldo = document.querySelector("#saldo");
let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");

function saldinho() {
    
    let saldoAtual = parseFloat(saldo.value);

    
    let saldoAjustado = saldoAtual * 1.01;

    
    resultado.textContent = `Saldo ajustado: ${saldoAjustado.toFixed(2)}`;
}
btn.addEventListener("click", saldinho);
