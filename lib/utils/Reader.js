const fs= require("fs"); // // El módulo fs proporciona una gran cantidad de funciones muy útiles para acceder e interactuar con el sistema de archivos. https://nodejs.dev/learn/the-nodejs-fs-module 

// refactorizando (+1)
class Reader{
    static readJsonFile(path){  // path, no se indica la direccion por ser una funcion static (reutilizable) y esa direccion debe ser indicada desde donde se invoque a esta funcion
        const rawdata = fs.readFileSync(path);  // When you need to read the content of a file using NodeJS, you can use the built-in fs module which contains readFile() and readFileSync() methods. https://sebhastian.com/fs-readfilesync/
        return JSON.parse(rawdata); // (1)
    }
// (-1)
}

module.exports= Reader;

/* (1)
Imagine we received this text from a web server:
    '{"name":"John", "age":30, "city":"New York"}'
Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
    const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
*/