function obtenerValorEspectaculo(){
    let valorEspectaculo = 0;
    let espActual = localStorage.getItem("espActual");
    let nombEspectaculo = document.getElementById("nombEsp");
    let descEspectaculo = document.getElementById("descEsp");

    switch (espActual) {
        case 'esp1':
            valorEspectaculo = parseInt(localStorage.getItem("espectaculo1"), 10);
            nombEspectaculo.innerHTML = localStorage.getItem("nombEspectaculo1");
            descEspectaculo.innerHTML = localStorage.getItem("descEspectaculo1");
          break;
        case 'esp2':
            valorEspectaculo = parseInt(localStorage.getItem("espectaculo2"), 10);
            nombEspectaculo.innerHTML = localStorage.getItem("nombEspectaculo2");
            descEspectaculo.innerHTML = localStorage.getItem("descEspectaculo2");
          break;
        case 'esp3':
            valorEspectaculo = parseInt(localStorage.getItem("espectaculo3"), 10);
          break;
        case 'esp4':
            valorEspectaculo = parseInt(localStorage.getItem("espectaculo4"), 10);
          break;
        case 'esp5':
            valorEspectaculo = parseInt(localStorage.getItem("espectaculo5"), 10);
          break;
        case 'esp6':
            valorEspectaculo = parseInt(localStorage.getItem("espectaculo6"), 10);
          break;
        default:
            valorEspectaculo = 0;
    }

    return valorEspectaculo;
}

function masCant(){
    let txtNumCant = document.getElementById('txtNumCant');
    let actual = parseInt(document.getElementById('txtNumCant').value, 10);
    let txtPrecio = document.getElementById('txtPrecio');
    let valorEspectaculo = obtenerValorEspectaculo();

    txtNumCant.value = actual+1;
    txtPrecio.value = parseInt(txtPrecio.value, 10) + valorEspectaculo;
}

function menosCant(){
    let txtNumCant = document.getElementById('txtNumCant');
    let actual = parseInt(document.getElementById('txtNumCant').value, 10);
    let txtPrecio = document.getElementById('txtPrecio');
    let espectaculo1 = parseInt(localStorage.getItem("espectaculo1"), 10);

    if(actual > 1){
        txtNumCant.value = actual-1;
        txtPrecio.value = parseInt(txtPrecio.value, 10) - espectaculo1;
    }
}

function cambiarPrecio(){
    let valorEspectaculo = obtenerValorEspectaculo();
    let txtPrecio = document.getElementById('txtPrecio');
    txtPrecio.value = valorEspectaculo;
}

function volver(){
    history.go(-1);
}

function pagar(){
    let totalPgo = document.getElementById("txtPrecio").value;
    localStorage.setItem("totalPago", totalPgo);
    window.location.href = "pagar.html";
}