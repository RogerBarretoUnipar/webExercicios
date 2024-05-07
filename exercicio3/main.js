let saldo = document.querySelector("#saldo");
let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");

function saldinho() {
    // Ensure saldo.value is parsed as a number
    let saldoAtual = parseFloat(saldo.value);

    // Adjust balance by 1%
    let saldoAjustado = saldoAtual * 1.01;

    // Update the result display
    resultado.textContent = `Saldo ajustado: ${saldoAjustado.toFixed(2)}`;
}
btn.addEventListener("click", saldinho);
