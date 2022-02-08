const _ = require ("lodash");
const moment = require('moment');

/*1) precioTotal: Dado un precio unitario, una cantidad, un descuento y un costo de
envío calcular el precio total. Para eso, hay que calcular el precio unitario con
descuento y multiplicarlo por la cantidad. ¡No te olvides de agregar el precio del
envío!*/
//function Number precioTotal(Number precio,Number cantidad,Number descuento,Number costoEnvio){
function precioTotal(precio,cantidad,descuento,costoEnvio){
  let precioConDescuento = aplicarDescuento(precio,descuento) * cantidad;
  return precioConDescuento + costoEnvio;
}

/*2) productoDeElite: Un producto es de elite si es de lujo, codiciado y no es un
producto corriente.*/
//function Boolean productoDeElite(String producto){
function productoDeElite(producto){
  return (productoDeLujo(producto) && productoCodiciado(producto) && !productoCorriente(producto));
}

/*3) aplicarDescuento: Dado un precio y un descuento, obtener el precio final con el
descuento aplicado.*/
//function Number aplicarDescuento(Number precio,Number descuento){
function aplicarDescuento(precio,descuento){
  let porcentajeDescuento = (precio * descuento)/100;
  return precio - porcentajeDescuento;
}

/*4) entregaSencilla: Una entrega es sencilla, si se hace en un día sencillo. Los días
sencillos son lo que tienen una cantidad de letras par en el nombre. Ejemplo de un
día: “20 de Abril de 2020”.*/
//function Boolean entregaSencilla(String dia){
function entregaSencilla(dia){
  //Cambiamos de momentjs "en" a "es-mx".
  moment.locale("es-mx");
  let diaDeLaSemana = moment(dia,"LL").format("dddd");
  //console.log(diaDeLaSemana);
  return diaDeLaSemana.length % 2 === 0;
}

/*5) descodiciarProducto: Dado el nombre de un producto, generar uno que no sea
codiciado. Para esto le vamos a sacar las últimas letras hasta que la cantidad de
letras en el nombre quede igual a 10 (ó menor a 10 en productos con nombres
cortos)*/
//function String descodiciarProducto(String producto){
function descodiciarProducto(producto){
  return producto.substring(0,10);
}

/*6) productoDeLujo: Dado el nombre de un producto, saber si es de lujo. Un producto
es de lujo cuando contiene una “x” o “z” en su nombre.*/
function productoDeLujo(producto){
  /*indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.*/
  return producto.includes("x") || producto.includes("z") || producto.includes("X") || producto.includes("Z");
}

/*7) aplicarCostoDeEnvio: Dado un precio y un costo de envío, obtener el precio final
una vez sumado el costo de envío.*/
function aplicarCostoDeEnvio(precio,costoEnvio){
  return precio + costoEnvio;
}

/*8) productoCodiciado: Dado el nombre de un producto, saber si es un producto
codiciado. Un producto es codiciado cuando la cantidad de letras en su nombre es
mayor a 10.*/
function productoCodiciado(producto){
  return producto.length > 10;
}

/*9) productoCorriente: Dado el nombre de un producto, saber si es un producto
corriente. Un producto es corriente si la primera letra de su nombre es una vocal.*/
function productoCorriente(producto){
  let vocales = ("aeiouAEIOU");
  return vocales.indexOf(producto[0]) !== -1;
}

/*10) productoXL: Dado un producto, conseguir su versión XL. Esta se consigue
agregando ‘XL’ al final del nombre.*/
function productoXL(producto){
  return producto+" XL";
}

/*11) versionBarata: Dado el nombre de un producto conseguir su versión barata. La
misma es el producto descodiciado y con su nombre dado vuelta.*/
function versionBarata(producto){
  let nombreDescodiciado = descodiciarProducto(producto);
  return nombreDescodiciado.split('').reverse().join('');
}

module.exports = {
    precioTotal,
    productoDeElite,
    aplicarDescuento,
    entregaSencilla,
    descodiciarProducto,
    productoDeLujo,
    aplicarCostoDeEnvio,
    productoCodiciado,
    productoCorriente,
    productoXL,
    versionBarata,
}
