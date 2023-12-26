//OBJETO JOGADOR 01
var p1 = {
    num: 0,
    vitorias: 0,
    derrotas: 0
}

const btnAddNumP1 = document.getElementById("btn-add-nump1").addEventListener("click", addNumP1)   

function addNumP1(){
//NUMERO ALEATORIO PARA O JOGADOR 01
    var numRandom = Math.floor(Math.random() * 13)
    if(numRandom == 0){
        numRandom++
    }
    p1.num = p1.num + numRandom

//IMPRIMIR NA TELA O NUMERO ALEATORIO OBTIDO
    const localNumP1 = document.getElementById("local-numP1")
    localNumP1.innerHTML = `<p>${p1.num}</p>`

//DETERMINANDO O MAXIMO DE NUMERO QUE PODE TER
    if(p1.num > 21){
        const localNumP1 = document.getElementById("local-numP1")
        localNumP1.innerHTML = `<p>${p1.num}</p> <p>Você perdeu</p>`
        p1.derrotas++
        p2.vitorias++
    }
}

//JOGADOR 02

//OBJETO JOGADOR 01
var p2 = {
    num: 0,
    vitorias: 0,
    derrotas: 0
}

const btnAddNumP2 = document.getElementById("btn-add-nump2").addEventListener("click", addNumP2)   

function addNumP2(){
//NUMERO ALEATORIO PARA O JOGADOR 02
    var numRandom2 = Math.floor(Math.random() * 13)
    if(numRandom2 == 0){
        numRandom2++
    }
    p2.num = p2.num + numRandom2

//IMPRIMIR NA TELA O NUMERO ALEATORIO OBTIDO
    const localNumP2 = document.getElementById("local-numP2")
    localNumP2.innerHTML = `<p>${p2.num}</p>`

//DETERMINANDO O MAXIMO DE NUMERO QUE PODE TER
    if(p2.num > 21){
        const localNumP2 = document.getElementById("local-numP2")
        localNumP2.innerHTML = `<p>${p2.num}</p> <p>Você perdeu</p>`
        p2.derrotas++
        p1.vitorias++
    }
}