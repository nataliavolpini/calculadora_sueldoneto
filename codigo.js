
//Ingreso del sueldo bruto
/*

let sueldoBruto= parseFloat(prompt("Por favor ingrese su sueldo Bruto"));
console.log("Su sueldo ingresado es " 
+sueldoBruto);

const obraSocial = 0.03;
const inssjp = 0.03;
const jubilacion = 0.11;

let descuentos = ((sueldoBruto*obraSocial)+(sueldoBruto*inssjp)+(sueldoBruto*jubilacion));

console.log("El total de descuentos es "+ descuentos);

let sueldoNetoDescuentos = sueldoBruto - ((sueldoBruto*obraSocial)+(sueldoBruto*inssjp)+(sueldoBruto*jubilacion));

console.log("Su sueldo neto de descuentos es "+sueldoNetoDescuentos);

//Deducciones MENSUALES por Impuesto a las Ganancias

const deduccionEspecial = 101026;
const gananciaNoImponible = 21047;
const conyugue = 19621;
const hijo = 9895;
const hijoIncapacitado = 19790;
const personalDomestico = 21047;
const alquileres = 21047;
const interesesHipotecarios = 1667;
const seguroVida = 2000;
const prepaga = 14525;
const honorariosMedicos = 14525;


//Solo hice la prueba con tres deducciones
let totalDeducciones=deduccionEspecial+gananciaNoImponible;

if(sueldoBruto>=280792){
    function pregunta(tipo){
        return confirm("Confirma la deduccion: " + tipo);
    }
    
    if(pregunta("Tiene a su cargo un conyugue?")){
        totalDeducciones=totalDeducciones+conyugue;
    }
    
    if(pregunta("hijos?")){
        let cantidad = parseInt(prompt("Ingrese el numero de hijos"));
        totalDeducciones=totalDeducciones+(cantidad*hijo);
    }

    if(pregunta("tiene seguro de vida?")){
        totalDeducciones=totalDeducciones+seguroVida;
    }

    if(pregunta("¿Alquilas?")){
        totalDeducciones=totalDeducciones+alquileres;
    }
    
    if(pregunta("¿ATiene Credito Hipotecario?")){
        totalDeducciones=totalDeducciones+interesesHipotecarios;
    }
    console.log("El total de sus deducciones es de: "+ totalDeducciones );
    
    
}

let gananciaNeta= sueldoNetoDescuentos-totalDeducciones;
    console.log("Su Ganancia Neta Mensual es: " + gananciaNeta); 

//Calculo del Impuesto Fijo a las Ganancias

let impuestoFijo=0; 
let impuestoVariable=0;
let impuestoTotal=0;
let sueldoACobrar= 0;

if (gananciaNeta*13<=97202){
    impuestoFijo=0;

}else if((gananciaNeta*13>97202) && (gananciaNeta*13<=194404.01)){
    impuestoFijo=4860.10/12;
    impuestoVariable=((((gananciaNeta*13)-97202)*0.09))/12;
    impuestoTotal=  impuestoFijo + impuestoVariable;
    sueldoACobrar= sueldoNetoDescuentos- impuestoTotal;
    console.log("Su impuesto Fijo es de "+impuestoFijo);
    console.log("Su impuesto Variable es de " + impuestoVariable);
    console.log("Su impuesto Fijo es de "+impuestoFijo);
    console.log("Su impuesto Variable es de " + impuestoVariable);
    
}else if((gananciaNeta*13>194404.02) && (gananciaNeta*13<=291606.01)){
    impuestoFijo=13608.28/12;
    impuestoVariable=((((gananciaNeta*13)-194404.02)*0.12))/12;
    impuestoTotal=  impuestoFijo + impuestoVariable;
    sueldoACobrar= sueldoNetoDescuentos- impuestoTotal;
    console.log("Su impuesto Fijo es de "+impuestoFijo);
    console.log("Su impuesto Variable es de " + impuestoVariable);
    console.log("Su impuesto Fijo es de "+impuestoFijo);
    console.log("Su impuesto Variable es de " + impuestoVariable);
    
}else if((gananciaNeta*13>291606.01) && (gananciaNeta*13<=388808.02)){
    impuestoFijo=25272.52/12;
    impuestoVariable=((((gananciaNeta*13)-291606.01)*0.15))/12;
    impuestoTotal=  impuestoFijo + impuestoVariable;
    sueldoACobrar= sueldoNetoDescuentos- impuestoTotal;
    console.log("Su impuesto Fijo es de "+impuestoFijo);
    console.log("Su impuesto Variable es de " + impuestoVariable);
    console.log("Su impuesto Fijo es de "+impuestoFijo);
    console.log("Su impuesto Variable es de " + impuestoVariable);

}else if((gananciaNeta*13>388808.02) && (gananciaNeta*13<=583212.02)){
    impuestoFijo=39852.82/12;
    impuestoVariable=((((gananciaNeta*13)-388808.02)*0.19))/12;
    impuestoTotal=  impuestoFijo + impuestoVariable;
    sueldoACobrar= sueldoNetoDescuentos- impuestoTotal;
    console.log("Su impuesto Fijo es de "+impuestoFijo);
    console.log("Su impuesto Variable es de " + impuestoVariable);

}else if((gananciaNeta*13>583212.02) && (gananciaNeta*13<=777616.02)){
    impuestoFijo=76789.58/12;
    impuestoVariable=((((gananciaNeta*13)-583212.02)*0.23))/12;
    impuestoTotal=  impuestoFijo + impuestoVariable;
    sueldoACobrar= sueldoNetoDescuentos- impuestoTotal;
    console.log("Su impuesto Fijo es de "+impuestoFijo);
    console.log("Su impuesto Variable es de " + impuestoVariable);
    console.log("Su impuesto total es de $ "+impuestoTotal);
    console.log("Su sueldo Neto a cobrar es de $ "+ sueldoACobrar);

}else if((gananciaNeta*13>777616.02) && (gananciaNeta*13<=1166424.03)){
    impuestoFijo=121502.50/12;
    impuestoVariable=((((gananciaNeta*13)-777616.02)*0.27))/12;
    impuestoTotal=  impuestoFijo + impuestoVariable;
    sueldoACobrar= sueldoNetoDescuentos- impuestoTotal;
    console.log("Su impuesto Fijo es de "+impuestoFijo);
    console.log("Su impuesto Variable es de " + impuestoVariable);
    console.log("Su impuesto total es de $ "+impuestoTotal);
    console.log("Su sueldo Neto a cobrar es de $ "+ sueldoACobrar);

}else if((gananciaNeta*13>1166424.03) && (gananciaNeta*13<=1555232.07)){
    impuestoFijo=226480.66/12;
    impuestoVariable=((((gananciaNeta*13)-1166424.03)*0.31))/12;
    impuestoTotal=  impuestoFijo + impuestoVariable;
    sueldoACobrar= sueldoNetoDescuentos- impuestoTotal;
    console.log("Su impuesto Fijo es de "+impuestoFijo);
    console.log("Su impuesto Variable es de " + impuestoVariable);
    console.log("Su impuesto total es de $ "+impuestoTotal);
    console.log("Su sueldo Neto a cobrar es de $ "+ sueldoACobrar);

}else if(gananciaNeta*13>1555232.07){
    impuestoFijo=347011.16/12;
    impuestoVariable=((((gananciaNeta*13)-1555232.07)*0.35))/12;
    impuestoTotal=  impuestoFijo + impuestoVariable;
    sueldoACobrar= sueldoNetoDescuentos- impuestoTotal;
    console.log("Su impuesto Fijo es de "+impuestoFijo);
    console.log("Su impuesto Variable es de " + impuestoVariable);
    console.log("Su impuesto total es de $ "+impuestoTotal);
    console.log("Su sueldo Neto a cobrar es de $ "+ sueldoACobrar);
}else{
    console.log("No le corresponde pagar Impuesto fijo, ni Impuesto Variable");
}






//Servicios Profesionales que estan disponibles para agregar al carrito

//Busqueda de Servicios

const servicios = [
    {
        tipo: "ddjj",
        precio: 8000,

    },

    {
        tipo: "monotributo",
        precio: 5000,
    }

]


let busquedaUsuario = prompt("Ingrese el servicio que quiere buscar");


const busqueda = servicios.find((elemento) => elemento.tipo == busquedaUsuario);
const carrito= [];



if(busqueda!=undefined){
    console.log(busqueda);
}else{
    console.log("El servicio no se encuentra disponible");
    
}

carrito.push(busqueda);
console.log("El carrito tiene " + carrito)


//Precios con IVA INCLUIDO

const nuevaListaServicios = carrito.map ((elemento) => {
    return {
        tipo: elemento.tipo.toUpperCase(),
        precio: elemento.precio *1.21
    }
});
console.log(nuevaListaServicios);


//Calculo el total del carrito de compras

const totalCompra = nuevaListaServicios.reduce((sumador, elemento) =>sumador + elemento.precio,0);
console.log("Total a pagar $ "+ totalCompra);

*/

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
        //alert("Los servicios agregados al carrito son " + carritoFinal.tipo + " - Precio $ " +carritoFinal.precio );
        })

        alert(mensaje);
        
            //Calculo el total del carrito de compras
        const totalCompra = nuevaListaServicios.reduce((sumador, carritoFinal) => sumador + carritoFinal.precio, 0);
        console.log("Total a pagar $ " + totalCompra);
    }
} while (busquedaUsuario != "salir");


















