// -------------------------------    IMPORTS     -------------------------------------------- // 







// console.log("CLASE 23/03/2023")
const productos = ["Manteca","Cafe","Carne"];

const productos2 = [...productos];

//console.log(productos2)

productos.forEach((Element) =>{
  //  console.log(Element);
})

const productos3 = productos.map(e => e.toUpperCase());
//console.log("🚀 ~ file: index.js:13 ~ productos3:", productos3)


//*-----------------------------------------------------------------------*
function upperCase(e){
    return e.toUpperCase();
}
const productos4 = productos.map(upperCase)
//console.log("🚀 ~ file: index.js:21 ~ productos4:", productos4)

//----------------------------------CALL BACK----------------------------------------*

function saludar(nombre,fn){
    return fn(nombre);
}

function decirHola(params){
    return `Hola ${params}`;
}

function decirChau(params){
    return `Chau ${params}`;
}

//console.log(saludar("Facundo", decirHola));

//-------------------------------------------------------------------------------------------------------
console.log("CLASE 30/03/2023\n-----------------------------------------------------------------------------------------------------------");

const marcasAutos = ["Ford","Renault", "Chevrolet","Kia",["Mercedes Benz","Volvo"]]

function copiaConForEach(array){
    const newArray = [];

    array.forEach(function(element){
        newArray.push(element)
    });

    return newArray;
}

console.log(copiaConForEach(marcasAutos))

const userData = {
    nombre: "Facundo"
    ,apellido: "Zapata"
    ,edad: 24
}

const userDataSpread = {...userData};
console.log("🚀 ~ file: index.js:63 ~ userDataSpread:", userDataSpread)

const userDataStructuredClone = structuredClone(userData);
console.log("🚀 ~ file: index.js:66 ~ userDataStructuredClone:", userDataStructuredClone)

const userDataJsonStringify = JSON.stringify(userData)
console.log("🚀 ~ file: index.js:69 ~ userDataJsonStringify:", userDataJsonStringify)

const userDataJsonStringifyParsed = JSON.parse(userDataJsonStringify);
console.log("🚀 ~ file: index.js:72 ~ userDataJsonStringifyParsed:", userDataJsonStringifyParsed)

const arrEjercicio = [8,1,58,84,65,1,5,48,651,351,894];

// arrEjercicio.forEach((Element) =>{
//     arrEjercicio.pop();
// })

// console.log("🚀 ~ file: index.js:75 ~ arrEjercicio:", arrEjercicio)

for (let i = arrEjercicio.length ; i > 0 ; i--){
    arrEjercicio.pop();
}

console.log("🚀 ~ file: index.js:86 ~ arrEjercicio:", arrEjercicio)

// otra forma! ! ! ! ! !

const arrEjercicioForma2 = [8,1,58,84,65,1,5,48,651,351,894];

arrEjercicioForma2.length=0;
console.log("🚀 ~ file: index.js:101 ~ arrEjercicioForma2:", arrEjercicioForma2)


// Reducir Ejercicio: resumir las instancias de cada uno de estos en un solo objeto
// Ejemplo:
// var mascotas = ['perro', 'gato', 'perro'];
// Resultado: { 'perro': 2, 'gato': 1 }

let cosas = [
    "pelota",
    "pelota",
    "auto",
    "silla",
    "auto",
    "kuka",
    "compu",
    "kuka",
    "kuka",
    "compu",
    "pelota",
    "moto",
    "avion",
    "avion",
    "planta",
    "planta",
    "planta",
  ];














