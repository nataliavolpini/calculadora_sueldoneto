
//let carrito= JSON.parse(localStorage.getItem("carrito")) || [];
let carrito=[];
let totalCarrito=0;
let mail= document.getElementById("mail");
let suscribir= document.getElementById("suscribir");


//Declaracion del array de productos

const servicios = [{
    id: 1,
    tipo: "DDJJ",
    precio: 8000,
    imagen: "./assets/imagenes/cards.jpg",

},

{
    id: 2,
    tipo: "MONOTRIBUTO",
    precio: 5000,
    imagen: "./assets/imagenes/cards.jpg",
}
]

//Insertar Cartas para los dos Servicios

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
    //alert("Producto " + productoAComprar.tipo + " se agrego al carrito ");
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregaste satisfactoriamente al carrito: ' + productoAComprar.tipo,
        color: "rgb(2, 2, 34)",
        showConfirmButton: false,
        timer: 1500
    })
    document.getElementById("tablabody").innerHTML+= `
        <tr>
            <td>${productoAComprar.id} </td>
            <td>${productoAComprar.tipo} </td>
            <td>${productoAComprar.precio} </td>
            <td><button class="btn btn-light" onclick="eliminar(event)">🗑️</button></td>
        </tr>
    `;
    totalCarrito= carrito.reduce((acumulador, prod)=> acumulador+ prod.precio,0);
    document.getElementById("total").innerText = "Total a pagar: $" + totalCarrito;



    //Agrego el carrito al Storage

    const compra = JSON.stringify(carrito);
    console.log(compra);
    localStorage.setItem("servicios", compra);

    const vueltaStorage = localStorage.getItem("servicios");
    const jsonAObjeto= JSON.parse(vueltaStorage);
    console.log(jsonAObjeto);

    let botonCompra= document.getElementById("compra");

};

    //Para eliminar prods del carro
    function eliminar(ev){
        console.log(ev);
        let fila = ev.target.parentElement.parentElement;
        console.log(fila);
        let id = fila.children[0].innerText;
        console.log(id);
        let indice = carrito.findIndex(producto => producto.id == id);
        console.log(indice)
        //remueve el producto del carro
        carrito.splice(indice,1);
        console.table(carrito);
        //remueve la fila de la tabla
        fila.remove();
        //recalcular el total
        let preciosAcumulados = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0);
        total.innerText="Total a pagar $: "+preciosAcumulados;
        //storage
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }


    compra.onclick = () => {

        if (carrito==0){
            Swal.fire({
                title: 'El carro está vacío. Por favor agregue algún servicio.',
                text: 'compre algun producto',
                icon: 'error',
                showConfirmButton: false,
                timer: 1500
        })
    }else{
        carrito = [];
        document.getElementById("tablabody").innerHTML="";
        let infoTotal = document.getElementById("total");
        infoTotal.innerText="Total a pagar $: ";
        Toastify({
            text: "Muchas gracias por su Compra. En las proximas 24hs nos pondremos en contacto",
            duration: 3000,
            gravity: 'bottom',
            position: 'left',
            style: {
                background: 'linear-gradient(to right, #00b09b, #96c92d)'
            }
        }).showToast();
        
        localStorage.removeItem("carrito");
    }
    };

//Validacion para el Newsletter
suscribir.onclick = () => {

    let expReg= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let esValido=expReg.test(mail.value);
    if(esValido==true){
        Toastify({
            text: "Suscripción realizada con exito",
            duration: 3000,
            gravity: 'right',
            position: 'right',
            style: {
                background: 'linear-gradient(to right, #00b09b, #96c92d)'
            }
        }).showToast()
    }else{
        Toastify({
            text: "Por favor ingrese un correo válido",
            duration: 3000,
            gravity: 'right',
            position: 'right',
            style: {
                background: 'linear-gradient(to right, #b02300, #c9922d)'
            }
        }).showToast()
    }
    mail.value="";
}