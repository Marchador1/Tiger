let valorBanca = document.getElementById("banca");
valorBanca.textContent = 10.0;

let betMin = document.getElementById("aposta")
betMin.textContent = 0.40; 

let win = document.getElementById("ganho")
win.textContent = 0.0;

function roleta(){
    let randomNumb1 = Math.floor(Math.random() * 6) + 1;
    let randomNumb2 = Math.floor(Math.random() * 6) + 1;
    let randomNumb3 = Math.floor(Math.random() * 6) + 1;

    let cell1 = document.getElementById("numb1")
    let cell2 = document.getElementById("numb2")
    let cell3 = document.getElementById("numb3")

    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";

    if (randomNumb1 === 0){
        let img = document.createElement("img");
        img.src = "imagens/Wild.png";
        img.alt = "Wild";
        cell1.appendChild(img)
    }

    else if(randomNumb1 === 1){
        let img = document.createElement("img");
        img.src = "imagens/Sino.png";
        img.alt = "Sino";
        cell1.appendChild(img)
    }

    else if(randomNumb1 === 2){
        let img = document.createElement("img");
        img.src = "imagens/Saco.png";
        img.alt = "Saco";
        cell1.appendChild(img)
    }

    else if(randomNumb1 === 3){
        let img = document.createElement("img");
        img.src = "imagens/Laranja.png";
        img.alt = "Laranja";
        cell1.appendChild(img)
    }

    else if(randomNumb1 === 4){
        let img = document.createElement("img");
        img.src = "imagens/Dragao.png";
        img.alt = "Dragao";
        cell1.appendChild(img)
    }

    else if(randomNumb1 === 5){
        let img = document.createElement("img");
        img.src = "imagens/Chapeu.png";
        img.alt = "Chapeu";
        cell1.appendChild(img)
    }

    else{
        let img = document.createElement("img");
        img.src = "imagens/Bilhete.png";
        img.alt = "Bilhete";
        cell1.appendChild(img)
    }


    if (randomNumb2 === 0){
        let img = document.createElement("img");
        img.src = "imagens/Wild.png";
        img.alt = "Wild";
        cell2.appendChild(img)
    }

    else if(randomNumb2 === 1){
        let img = document.createElement("img");
        img.src = "imagens/Sino.png";
        img.alt = "Sino";
        cell2.appendChild(img)
    }

    else if(randomNumb2 === 2){
        let img = document.createElement("img");
        img.src = "imagens/Saco.png";
        img.alt = "Saco";
        cell2.appendChild(img)
    }

    else if(randomNumb2 === 3){
        let img = document.createElement("img");
        img.src = "imagens/Laranja.png";
        img.alt = "Laranja";
        cell2.appendChild(img)
    }

    else if(randomNumb2 === 4){
        let img = document.createElement("img");
        img.src = "imagens/Dragao.png";
        img.alt = "Dragao";
        cell2.appendChild(img)
    }

    else if(randomNumb2 === 5){
        let img = document.createElement("img");
        img.src = "imagens/Chapeu.png";
        img.alt = "Chapeu";
        cell2.appendChild(img)
    }

    else{
        let img = document.createElement("img");
        img.src = "imagens/Bilhete.png";
        img.alt = "Bilhete";
        cell2.appendChild(img)
    }

    if (randomNumb3 === 0){
        let img = document.createElement("img");
        img.src = "imagens/Wild.png";
        img.alt = "Wild";
        cell3.appendChild(img)
    }

    else if(randomNumb3 === 1){
        let img = document.createElement("img");
        img.src = "imagens/Sino.png";
        img.alt = "Sino";
        cell3.appendChild(img)
    }

    else if(randomNumb3 === 2){
        let img = document.createElement("img");
        img.src = "imagens/Saco.png";
        img.alt = "Saco";
        cell3.appendChild(img)
    }

    else if(randomNumb3 === 3){
        let img = document.createElement("img");
        img.src = "imagens/Laranja.png";
        img.alt = "Laranja";
        cell3.appendChild(img)
    }

    else if(randomNumb3 === 4){
        let img = document.createElement("img");
        img.src = "imagens/Dragao.png";
        img.alt = "Dragao";
        cell3.appendChild(img)
    }

    else if(randomNumb3 === 5){
        let img = document.createElement("img");
        img.src = "imagens/Chapeu.png";
        img.alt = "Chapeu";
        cell3.appendChild(img)
    }

    else{
        let img = document.createElement("img");
        img.src = "imagens/Bilhete.png";
        img.alt = "Bilhete";
        cell3.appendChild(img)
    }

    if (cell1.innerText === cell2.innerText && cell2.innerText === cell3.innerText){
        win.textContent = betMin;
        valorBanca += win;

    }
    else{
        win.textContent = 0.0;
    }
}




