const Reader= require("./lib/utils/Reader"); // se importa la class Reader
const ExplorerService= require("./lib/services/ExplorerService");



const explorers = Reader.readJsonFile("explorers.json"); // Se invoca a la funcion "static readJsonFile" de la clase "Reader" y se le manda el path. Regresa la lista de explorers del archivo

// Aplicación del ExplorerService sobre la lista de explorers
ExplorerService.filterByMission(explorers, "node"); // clase 1
ExplorerService.getAmountOfExplorersByMission(explorers, "node"); // clase 2
ExplorerService.getExplorersUsernamesByMission(explorers, "node"); // clase 3

//const prueba= ExplorerService.getExplorersByStack(explorers, "javascript");
//console.log(prueba);
