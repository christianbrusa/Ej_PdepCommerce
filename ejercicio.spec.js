const {
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
    versionBarata
} = require("./ejercicio04pdf.js");

require("should");

describe("Test", () => {
    describe("Calcula el precio total", () => {
        it("Deberia devolver el precio total del producto", () => precioTotal(1500,2,20,300).should.be.eql(2700) );
    });

    describe("Producto de elite", () => {
        it("Deberia devolver si el producto es de elite", () => productoDeElite("Computadora").should.be.false() );
    });

    describe("Aplicar descuento", () => {
        it("Deberia devolver el precio final con descuento aplicado", () => aplicarDescuento(1000,70).should.be.eql(300) );
    });

    describe("Entrega sencilla", () => {
        it("Deberia devolver si la entrega es sencilla", () => entregaSencilla("9 de enero de 2022").should.be.false() );
    });

    describe("Descodiciar producto", () => {
        it("Deberia devolver el producto descodiciado", () => descodiciarProducto("fuenteDeAlimentación").should.be.eql("fuenteDeAl") );
    });

    describe("Producto de lujo", () => {
        it("Deberia devolver si el producto es de lujo", () => productoDeLujo("IphoneX").should.be.true() );
    });

    describe("Aplicar costo de envio", () => {
        it("Deberia devolver el precio final con su costo de envio", () => aplicarCostoDeEnvio(1000,240).should.be.eql(1240) );
    });

    describe("Producto codiciado", () => {
        it("Deberia devolver si el producto es codiciado", () => productoCodiciado("IphoneX").should.be.false() );
    });

    describe("Producto corriente", () => {
        it("Deberia devolver si el producto es corriente", () => productoCorriente("IphoneX").should.be.true() );
    });

    describe("Producto XL", () => {
        it("Deberia devolver el producto en versión XL", () => productoXL("Computadora").should.be.eql("Computadora XL") );
    });

    describe("Version barata", () => {
        it("Deberia devolver el producto en versión barata", () => versionBarata("Impresora3d").should.be.eql("3aroserpmI") );
    });
});