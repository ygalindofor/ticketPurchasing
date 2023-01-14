function masCant(){
    let txtNumCant = document.getElementById('txtNumCant');
    let actual = parseInt(document.getElementById('txtNumCant').value, 10);
    let txtPrecio = document.getElementById('txtPrecio');
    let espectaculo1 = parseInt(localStorage.getItem("espectaculo1"), 10);

    txtNumCant.value = actual+1;
    txtPrecio.value = parseInt(txtPrecio.value, 10) + espectaculo1;
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
    let espectaculo1 = localStorage.getItem("espectaculo1");
    let txtPrecio = document.getElementById('txtPrecio');
    txtPrecio.value = espectaculo1;
}

function volver(){
    history.go(-1);
}