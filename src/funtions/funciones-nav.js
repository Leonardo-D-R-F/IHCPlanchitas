function desbloquearCarrito(){
    if(localStorage.length==0){
        document.getElementById("contenedor-carrito").innerHTML = '<a href="#"><img src="../assets/icon/carrito-verde.png" width="80px" height="80px"></a>'
    }else if(localStorage.length>0){
        document.getElementById("contenedor-carrito").innerHTML = '<a href="../screens/pedido.html"><img src="../assets/icon/carrito-rojo.png" width="80px" height="80px"></a>'
    }
}

desbloquearCarrito();