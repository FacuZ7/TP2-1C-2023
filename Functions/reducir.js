function reducir(array){
    const obj = array.reduce((acumulador,element) =>{
        acumulador[element] ? acumulador[element]++ : (acumulador[element]=1);
        return acumulador
    },{});
    
    return obj;
}

module.exports = reducir;