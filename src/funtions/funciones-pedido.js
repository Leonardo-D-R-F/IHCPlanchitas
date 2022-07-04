
pedidos = [];
precioTotal = 0;

function getLocalStorage(){
    for (let i = 0; i < localStorage.length; i++) {
        let llave = localStorage.key(i);
        let Pedido = JSON.parse(localStorage.getItem(llave));
        console.log(Pedido)
        pedidos.push(Pedido);
    }
    
}

function aniadirPedido(){
    console.log("INGRESO");
    getLocalStorage();
    for (let i = 0; i < pedidos.length; i++) {
        let Pedido = pedidos[i];
        let llave = localStorage.key(i);
        precioTotal+=getPrecio(Pedido.precio);
        console.log(precioTotal);
        document.getElementById("contedor-pedidos").innerHTML += '<div class="card mb-3" >'+
                                                                    '<div class="row g-0">'+
                                                                        '<div class="col-md-2">'+
                                                                            '<img src="'+Pedido.imagen+'" class="img-fluid rounded-start" alt="imagen">'+
                                                                        '</div>'+
                                                                        '<div class="col-md-8">'+
                                                                            '<div class="card-body">'+
                                                                                '<h5 class="card-title">'+Pedido.nombre+'</h5>'+
                                                                                '<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>'+
                                                                                '<p class="card-text"><small class="text-muted">'+Pedido.precio+'</small></p>'+
                                                                            '</div>'+
                                                                        '</div>'+
                                                                        '<div class="col-md-1">'+
                                                                            '<div class="card-body mt-5">'+
                                                                                '<p class="card-text"><small class="text-muted">'+Pedido.precio+'</small></p>'+
                                                                            '</div>'+
                                                                        '</div>'+
                                                                        '<div class="col-md-1">'+
                                                                            '<div class="card-body mt-4">'+
                                                                                '<div class="icono  text-danger fs-1">'+
                                                                                    '<i class="bi bi-x-square-fill" onclick="eliminarPedido('+llave+')"></i>'+  
                                                                                '</div>'+  
                                                                            '</div>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                '</div>'

    }
    
    document.getElementById("precioTotal").innerHTML = precioTotal+" Bs";
}

function getPrecio(cadena){
    let numero = parseInt(cadena.substring(0,cadena.length-3));
    return numero;
}

function eliminarPedido(llave){
    localStorage.removeItem(llave);
    window.location.reload();
}

function cancelarPedido(){
    localStorage.clear();
    location.href = "../screens/menu.html";
}

aniadirPedido();