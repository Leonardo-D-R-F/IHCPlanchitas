/*const inicio = document.getElementById("inicio");
const mostrarMenu = document.getElementById("mostrarMenu");
inicio.addEventListener("click",navegarInicio)
const navegarInicio = () => {
    location.href = "../screens/index.html";
}*/
var numeroTarjeta;

function cambiarModal(boton) {
    var nombre = document.getElementById("nombre"+boton)
   //var descripcion = document.getElementById("descripcion"+boton)
    var imagen = document.getElementById("imagen"+boton).src;
    var precio = document.getElementById("precio"+boton)
    document.getElementById("staticBackdropLabel").innerHTML = nombre.textContent;
   // document.getElementById("descripcionModal").innerHTML = descripcion.textContent;
    document.getElementById("imagenModal").src = imagen;
    document.getElementById("precioModal").innerHTML = precio.textContent;
    numeroTarjeta = boton;
}


function guardar_localstorage(){
    let Pedido = {
        nombre: document.getElementById("nombre"+numeroTarjeta).textContent,
        imagen: document.getElementById("imagen"+numeroTarjeta).src,
        precio: document.getElementById("precio"+numeroTarjeta).textContent
    };

    localStorage.setItem(numeroTarjeta,JSON.stringify(Pedido));
}

function aniadirPedido(){
    let nombre = document.getElementById("staticBackdropLabel").textContent;
    let imagen = document.getElementById("imagenModal").src;
    let precio = document.getElementById("precioModal").textContent;

    document.getElementById("contedor-pedidos").innerHTML += '<div class="card mb-3" >'+
                                                                    '<div class="row g-0">'+
                                                                        '<div class="col-md-2">'+
                                                                            '<img src="'+imagen+'" class="img-fluid rounded-start" alt="imagen">'+
                                                                        '</div>'+
                                                                        '<div class="col-md-8">'+
                                                                            '<div class="card-body">'+
                                                                                '<h5 class="card-title">'+nombre+'</h5>'+
                                                                                '<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>'+
                                                                                '<p class="card-text"><small class="text-muted">'+precio+'</small></p>'+
                                                                            '</div>'+
                                                                        '</div>'+
                                                                        '<div class="col-md-2">'+
                                                                            '<div class="card-body">'+
                                                                                '<p class="card-text"><small class="text-muted">'+precio+'</small></p>'+
                                                                            '</div>'+
                                                                        '</div>'
                                                                    '</div>'+
                                                                '</div>'
}