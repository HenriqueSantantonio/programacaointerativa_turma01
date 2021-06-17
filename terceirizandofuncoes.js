//callback
const andar = ()  => console.log("O carro está andando")
const parar = () => console.log("O carro parou")

const acaoCarro = (statusCarro) => statusCarro() ;

acaoCarro(andar);
acaoCarro(parar);





