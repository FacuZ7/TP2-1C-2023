const fs = require("fs");

function readDate(){
    try{
        //if (!nombreArchivo) throw "Es necesario un nombre de archivo." habria que hacerlo mas dinamicooo
        fs.readFileSync(`./../fecha.txt`)
    }catch(err){
        return err
    }
}

module.exports = readDate;