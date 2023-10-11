const conselhos = [
    "5",
    "4",
    "3",
    "2",
    "1",
]

let displayConselho = document.getElementById("conselhoDisplay");
let botaoConselho = document.getElementById("conselhoBtn");

botaoConselho.addEventListener("click", geradorDeConselhoAleatorio);

function geradorDeConselhoAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * conselhos.length);  
    displayConselho.textContent = conselhos[numeroAleatorio];
    console.log(numeroAleatorio);
}