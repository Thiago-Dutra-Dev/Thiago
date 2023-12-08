var botaoSIm = document.getElementById("button-nao")

botaoSIm.addEventListener("mouseenter", clickSim)

function clickSim(){
    var localInput = document.getElementById("container")
    var nAleatorio = Math.floor(Math.random() * 500)
    localInput.innerHTML = `
    <div id="content">
    <h1>Você é gay?</h1>

    <div id="container-input">
            <button type="submit" id="button-sim">Sim</button>
            <button onmouseenter="clickSim()"style="position: absolute; top: ${nAleatorio}px; left: ${nAleatorio}px;" type="submit" id="button-nao">Não</button>
    </div>
</div>
    `
}

function verdade(){
    alert("Isso é verdade, todos nos sabemos")
}