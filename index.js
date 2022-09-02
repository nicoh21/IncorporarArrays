
let productos = [
    { id: 1, nombre: "barra", precio: 10000 },
    { id: 2, nombre: "mancuernas", precio: 5000 },
    { id: 3, nombre: "disco 10kg", precio: 3000 },
    { id: 4, nombre: "disco 5kg", precio: 1500 },
    { id: 5, nombre: "bandas elasticas", precio: 2000 },
    { id: 6, nombre: "colchonetas", precio: 1000 },

];


let filtro = prompt("Como quiere buscar el producto? (nombre o precio)").toLowerCase();


if (filtro === "nombre"){
    let nombre = prompt("Ingrese el nombre del producto").toLowerCase();
    let producto = productos.find((item) => item.nombre === nombre);

    console.log(producto);

    alert(JSON.stringify(producto));  //se que no lo vimos pero lo puse para que aparezca el alert


}else if (filtro === "precio"){
    let precio = parseInt(prompt("Ingrese el precio maximo"));
    let producto = productos.filter((item) => item.precio <= precio);

    console.log(producto);

    alert(JSON.stringify(producto));
}
