let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let num4 = document.querySelector("#num4");
let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");

btn.addEventListener("click", function() {
    let array = [parseFloat(num1.value), parseFloat(num2.value), parseFloat(num3.value), parseFloat(num4.value)];
    let menor = array[0];
    
    // Percorre o array para encontrar o menor número
    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
    }

    resultado.textContent = "O menor número é: " + menor;
});
