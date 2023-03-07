
function calcularconsumo() {
    var km, gas, consumo, marca, modelo

    marca = document.querySelector("#marca").value
    modelo = document.querySelector("#modelo").value
    km = document.getElementById('km').value
    gas = document.getElementById('gas').value

    consumo = km / gas

    document.querySelector("h1").innerHTML = "Seu " + marca + " " + modelo + " fez " + consumo + " KM/L"
}