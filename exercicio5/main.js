let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let btn = document.querySelector("#btn");

function maiorEmior()
{
    if(number1.value === number2.value)
    {
        alert("Ninguém vai ganhar ou perder, todos vamos perder");
    }
    else if(number1.value > number2.value)
    {
        alert(number1.value + " é maior");
    }
    else
    {
        alert(number2.value + " é maior");
    }
}

btn.addEventListener("click", maiorEmior);