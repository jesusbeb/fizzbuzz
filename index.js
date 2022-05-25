const Reader= require("./lib/utils/Reader") // se importa la class Reader
const ExplorerService= require("./lib/services/ExplorerService")

const explorers = Reader.readJsonFile("explorers.json") // Se invoca a la funcion "static readJsonFile" de la clase "Reader" y se le manda el path. Regresa la lista de explorers del archivo
//console.log(explorers)

// Aplicación del ExplorerService sobre la lista de explorers
console.log(ExplorerService.filterByMission(explorers, "node"));
/*
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node");
*/