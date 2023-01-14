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

function mostrarCamposTarjeta(){
    document.getElementById("divTarjetas").style.background = '#EBF5FB';
    document.getElementById("divBancos").style.background = '';
    document.getElementById("camposTarjeta").style.display = "block";
    document.getElementById("divSelectBancos").style.display = "none";
    document.getElementById("pse").checked = false;
}

function mostrarSelectBancos(){
    document.getElementById("divBancos").style.background = '#EBF5FB';
    document.getElementById("divTarjetas").style.background = '';
    document.getElementById("divSelectBancos").style.display = "block";
    document.getElementById("camposTarjeta").style.display = "none";
    document.getElementById("tarjetas").checked = false;
}