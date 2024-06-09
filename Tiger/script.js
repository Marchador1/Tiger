// Obtém os elementos DOM
let valorBancaElement = document.getElementById("banca");
let betMinElement = document.getElementById("aposta");
let winElement = document.getElementById("ganho");

// Define os valores iniciais
let valorBanca = 10.0;
valorBancaElement.textContent = valorBanca;

let betMin = 0.40;
betMinElement.textContent = betMin; 

let win = 0.0;
winElement.textContent = win;

function roleta(){
    let randomNumb1 = Math.floor(Math.random() * 6);
    let randomNumb2 = Math.floor(Math.random() * 6);
    let randomNumb3 = Math.floor(Math.random() * 6);

    let cell1 = document.getElementById("numb1");
    let cell2 = document.getElementById("numb2");
    let cell3 = document.getElementById("numb3");

    let imagens = ["Wild.png", "Sino.png", "Saco.png", "Laranja.png", "Dragao.png", "Chapeu.png", "Bilhete.png"];
    let alts = ["Wild", "Sino", "Saco", "Laranja", "Dragao", "Chapeu", "Bilhete"];

    function setCell(cell, index) {
        cell.innerHTML = "";
        let img = document.createElement("img");
        img.src = "imagens/" + imagens[index];
        img.alt = alts[index];
        cell.appendChild(img);
    }

    setCell(cell1, randomNumb1);
    setCell(cell2, randomNumb2);
    setCell(cell3, randomNumb3);

    if (randomNumb1 === randomNumb2 && randomNumb2 === randomNumb3) {
        win = betMin;
        valorBanca += win;
    } else {
        win = 0.0;
    }

    winElement.textContent = win;
    valorBancaElement.textContent = valorBanca.toFixed(2); // Atualiza o elemento DOM
}
