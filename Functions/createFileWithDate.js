const fs = require("fs");

function createFileWithDate(nombreArchivo){
    const date = new Date().toLocaleString();
    try{
        if (!nombreArchivo) throw "Es necesario un nombre de archivo."
        fs.appendFileSync(`./${nombreArchivo}.txt`, `${date}\n`)
    }catch(err){
        return err
    }
}

module.exports = createFileWithDate