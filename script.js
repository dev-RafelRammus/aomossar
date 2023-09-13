document.addEventListener("DOMContentLoaded", function () {
    const horaInput = document.getElementById("hora");
    const verificarButton = document.getElementById("verificar");
    const resultadoDiv = document.getElementById("resultado");
    const imagensDiv = document.getElementById("imagens");

    verificarButton.addEventListener("click", function () {
        const hora = horaInput.value;

        if (hora >= "12:00" && hora < "13:00") {
            resultadoDiv.textContent = "Já pode ao mossar!";
            imagensDiv.innerHTML = "<img src='img/ja pode.png' alt='Almoço'>";
        } else if (hora >= "11:00" && hora < "12:00") {
            resultadoDiv.textContent = "Está quase na hora de ao mossar.";
            imagensDiv.innerHTML = "<img src='img/FqSpqB3WwAAbCnv.jpg' alt='Quase almoço'>";
        } else if (hora >= "13:00") {
            resultadoDiv.textContent = "Já passou da hora de ao mossar.";
            imagensDiv.innerHTML = "<img src='img/passou.png' alt='Passou da hora'>";
        } else {
            resultadoDiv.textContent = "Ainda não é hora de ao mossar.";
            imagensDiv.innerHTML = "<img src='img/nao pode.png' alt='Ainda não almoço'>";
        }
    });
});
