const fs = require("fs");

// Part 1 Read json file =========================== esto se refactoriza en reader (+1)
// Esta parte obtiene la lista de TODOS los explorers en el archivo explorers.json
const rawdata = fs.readFileSync("explorers.json");
const explorers = JSON.parse(rawdata); // se declara constante que es una lista de explorers del archivo json  (-1)

// Part 2: Get the quantity of explorers names in node
// 2.1 se declara constante para filtrar a los usuarios en la constante "explorers" que se encuentran en la mision "node"
const explorersInNode = explorers.filter((explorer) => explorer.mission == "node"); // (2.1)
//console.log("Explorers en node: " + explorersInNode.length)
//refactorizado

// Part4: Get the explorer's usernames in Node
// 4.1 se declara una constante para filtrar a los usuarios de la constante "explorers" que se encuentran en la mision "node"
// 4.2 se declara una constante para mapear y obtener los githubusername de la constante del paso anterior
const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node"); // (4.1)
const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername); // (4.2)
//console.log("Nombres de los usuarios en node: " +usernamesInNode)

// DEAD CODE: Part 5,6,7, please remove this and go to Part 8!

// Part 5: Get a new list of explorers in node, if the score numbers is divisible by 3, I need a new propery called trick, and the value assigned is FIZZ, if not the value should be the score itself.
// Score: 3, Trick: FIZZ.
// Score: 4, Trick: 4.
// Score: 5, Trick: 5.

const assignFizzTrick = function(explorer){ // funcion que asigna fizz o score
    if(explorer.score%3 === 0){     // si es divisible entre 3
        explorer.trick = "FIZZ";    // agrega una nueva propiedad llamada trick y le asigna el valor FIZZ
        return explorer;
    }else{                          // si no es divisible entre 3
        explorer.trick = explorer.score;    // agrega la propiedad trick y le asigna el valor de score
        return explorer;
    }
};
// se declara constante que mapea a los explorers que se encuentran en NODE y le aplica la funcion assignFizzTrick
const explorersInNodeAndFizzTrick = explorersInNode.map((explorer) => assignFizzTrick(explorer)); 
//console.log(explorersInNodeAndFizzTrick)


// Part 6: Get a new list of explorers in node if the score number is divisible by 5, we need to set a new property called trick and set the value BUZZ, if not this value should be just the score
//
const assignBuzzTrick = function(explorer){ //funcion que asigna buzz o score
    if(explorer.score%5 === 0){     // si es divisible entre 5
        explorer.trick = "BUZZ";    // agrega la propiedad trick y le asigna el valor BUZZ
        return explorer;
    }else{                          // si no es divisible entre 5
        explorer.trick = explorer.score;    // agrega la propiedad trick y le asigna el valor de score
        return explorer;
    }
};
// se declara constante que mapea a los explorers que se encuentran en NODE y le aplica la funcion assignBuzzTrick y sobreescribe lo que hizo la funcion assignFizzTrick
const explorersInNodeAndBuzzTrick = explorersInNode.map((explorer) => assignBuzzTrick(explorer)); 


//Part7: Get a new list of explorers in Node, if the score number is divisible by 3 AND by 5 we need to set a new property called FIZZBUZZ, if not this value should be the same score value
const assignFizzBuzzTrick = function(explorer){     // funcion que asigna fizzbuzz
    if(explorer.score%5 === 0 && explorer.score%3 === 0){      // si es divisible entre 5 y entre 3
        explorer.trick = "FIZZBUZZ";        // agrega la propiedad trick y le asigna el valos FIZZBUZZ
        return explorer;
    }else{                                  // si no es divisible entre 5 y 3
        explorer.trick = explorer.score;    // agrega la propiedad trick y le asigna el valor de score
        return explorer;
    }
};
// se declara constante que mapea a los explorers que se encuentran en NODE y le aplica a funcion assignFizzBuzzTrick y sobre escribe lo de las dos funciones anteriores
const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => assignFizzBuzzTrick(explorer));


// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO
