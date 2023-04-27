const fs = require("fs");

//----------------------------------------------- LEER UN ARCHIVO -----------------------------------------
const uno = () => {
    console.log("uno");
}

async function readNote(fileName){
    try {
        if (!fileName) throw new Error ("El nombre del archivo es requerido.");
        const data = await fs.promises.readFile(`./${fileName}.txt`,"UTF-8");
        console.log(data); 
    } catch (error) {
        console.log(error)
    }
}

const dos = () => {
    console.log("dos!!");
}

//---------------------------------------------- AGREGAR A UN ARCHIVO -------------------------------------------------------//

const appendNotas = async(fileName,newText) => {
    if (!fileName) throw new Error ("El nombre del archivo es requerido.");
    if (!newText) throw new Error ("No hay nuevo texto para agregar");

    try {
        await fs.promises.appendFile(`./${fileName}.txt`,"\n"+newText);
    } catch (error) {
        throw error.message
    }
}


uno()
appendNotas("notas","");
readNote("notas");
dos()