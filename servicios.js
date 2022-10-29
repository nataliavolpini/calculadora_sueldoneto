
let carrito= [];

const servicios = [{
    id: 1,
    tipo: "ddjj",
    precio: 8000,
    imagen: "./assets/imagenes/cards.jpg",

},

{
    id: 2,
    tipo: "monotributo",
    precio: 5000,
    imagen: "./assets/imagenes/cards.jpg",
}

]

//Insertar Cards



let articuloCartas = document.getElementById("cartas");
function renderizaProductos(){
    for(const producto of servicios){
        articuloCartas.innerHTML+=`
        <div class="card col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
            <img class="card-img-top" src=${producto.imagen} alt=${producto.nombre}>
            <div class="card-body">
                <h4 class="card-title">$${producto.precio}</h4>
                <p class="card-text">${producto.tipo} </p>
                <button id=boton${producto.id} class="btn btn-primary">Agrega al Carrito</button>
            </div>
        </div>
        `;
    }
}
renderizaProductos();



servicios.forEach((producto)=>{
    document.getElementById(`boton${producto.id}`).addEventListener("click",function(){
        agregarAlCarrito(producto);
    })
});



function agregarAlCarrito(productoAComprar){
    carrito.push(productoAComprar);
    console.table(carrito);
    alert("Producto " + productoAComprar.tipo + " se agrego al carrito ");
    document.getElementById("tablabody").innerHTML+= `
        <tr>
            <td>${productoAComprar.id} </td>
            <td>${productoAComprar.tipo} </td>
            <td>${productoAComprar.precio} </td>
            
        </tr>
    `;
    let totalCarrito= carrito.reduce((acumulador, prod)=> acumulador+ prod.precio,0);
    document.getElementById("total").innerText = "Total a pagar " + totalCarrito;

    //Agrego el carrito al Storage

    const compra = JSON.stringify(carrito);
    console.log(compra);
    localStorage.setItem("servicios", compra);

    const vueltaStorage = localStorage.getItem("servicios");
    const jsonAObjeto= JSON.parse(vueltaStorage);
    console.log(jsonAObjeto);

}



