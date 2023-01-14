function mostrarTotal(){
    let valorServicio = parseInt(document.getElementById('txtValorServicio').value, 10);
    let valorTotal = parseInt(localStorage.getItem("totalPago"), 10) + valorServicio;
    let valorEspectaculo = obtenerValorEspectaculo();

    document.getElementById('txtTotal').value = valorTotal;
    document.getElementById("txtValorUnidad").value = valorEspectaculo;
}

function cancelar(){
    window.location.href = "index.html";
}