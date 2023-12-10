var addPonto = document.getElementById("add-ponto").addEventListener("click", addPonto)
var addFalta = document.getElementById("add-falta").addEventListener("click", addFalta)

var vermelho = {
    ponto: 0,
    falta: 0
}

function addPonto(){
    var localPonto = document.getElementById("local-ponto")
    vermelho.ponto++
    localPonto.innerHTML = `<h2>${vermelho.ponto}</h2>`
}

function addFalta(){
    var localFalta = document.getElementById("local-falta")
    localFalta.innerHTML = localFalta.innerHTML + `<div><h1>Falta</h1></div>`
    vermelho.falta++

    if(vermelho.falta == 5){
        localFalta.innerHTML = `<h1>Desclassificado</h1>`
    }
}

var addPonto = document.getElementById("add-ponto-azul").addEventListener("click", addPontoAzul)
var addFalta = document.getElementById("add-falta-azul").addEventListener("click", addFaltaAzul)

var azul = {
    ponto: 0,
    falta: 0
}

function addPontoAzul(){
    var localPonto = document.getElementById("local-ponto-azul")
    vermelho.ponto++
    localPonto.innerHTML = `<h2>${azul.ponto}</h2>`
}

function addFaltaAzul(){
    var localFalta = document.getElementById("local-falta-azul")
    localFalta.innerHTML = localFalta.innerHTML + `<div><h1>Falta</h1></div>`
    azul.falta++

    if(azul.falta == 5){
        localFalta.innerHTML = `<h1>Desclassificado</h1>`
    }
}