CLASE 30/03/2023

*----------------------------- SPREAD OPERATOR --------------------*

const userData = {
    nombre: "Facundo"
    ,apellido: "Zapata"
    ,edad: 24
}

const userDataSpread = {...userData};

Los 3 puntitos son el spread operator, hace una copia SUPERFICIAL DEL OBJETO.
esto significa que si adentro, hay otro objeto o un dato complejo, no lo va a copiar.

*--------------------------- STRUCTURED CLONE ---------------------------*
PARECE LA FORMA MAS OPTIMA HASTA EL MOMENTO DE COPIAR UN OBJETO EN PROFUNDIDAD.

const userDataStructuredClone = structuredClone(userData);

*-------------------------------- STRINGIFY --------------------------------------*

const userDataJsonStringify = JSON.stringify(userData)
console.log("🚀 ~ file: index.js:69 ~ userDataJsonStringify:", userDataJsonStringify)



const userDataJsonStringifyParsed = JSON.parse(userDataJsonStringify);
console.log("🚀 ~ file: index.js:72 ~ userDataJsonStringifyParsed:", userDataJsonStringifyParsed)

es necesario volverlo a convertir para volver a usarlo como array.

*------------------------------------- CARPETA CON FUNCIONES EXPORTABLES --------------------------------------------*

PARA LA CLASE QUE VIENE: 

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






