let oPrueba ={
    precio : 12,
    iva : 1.16,
};

oPrueba.calculaIvaasinc= function(){
setTimeout(function(){
    let precionFinal =  this.precio * this.iva
    console.log('Usando una función clásica: El precio final es ${precioFinal}');},1000);
}
oPrueba.calculaIvaasinc();