const servicios = [{
    tipo: "ddjj",
    precio: 8000,

},

{
    tipo: "monotributo",
    precio: 5000,
}

]

let busquedaUsuario;
const carrito = [];


do {
busquedaUsuario = prompt("Ingrese el servicio que desea agregar al carrito \n Si no quiere realizar otra compra ingrese la palabra *salir*");


const busqueda = servicios.find((elemento) => elemento.tipo == busquedaUsuario);
    carrito.push(busqueda);

    if (busquedaUsuario != "salir") {
        const nuevaListaServicios = carrito.map((elemento) => {
            return {
                tipo: elemento.tipo.toUpperCase(),
                precio: elemento.precio * 1.21
            }
        })

        let mensaje = "Los servicios agregados al carrito son \n";

        nuevaListaServicios.forEach((carritoFinal) =>{
        mensaje= mensaje + carritoFinal.tipo + " - $  " + carritoFinal.precio + " \n ";
        
        })

        alert(mensaje);
        
            //Calculo el total del carrito de compras
        const totalCompra = nuevaListaServicios.reduce((sumador, carritoFinal) => sumador + carritoFinal.precio, 0);
        console.log("Total a pagar $ " + totalCompra);
    }
} while ((busquedaUsuario != "salir") && (busquedaUsuario!=undefined));


