const Reader= require("./lib/utils/Reader") // se importa la class Reader
const ExplorerService= require("./lib/services/ExplorerService")
const FizzbuzzService= require("./lib/services/FizzbuzzService")


const explorers = Reader.readJsonFile("explorers.json") // Se invoca a la funcion "static readJsonFile" de la clase "Reader" y se le manda el path. Regresa la lista de explorers del archivo

// Aplicación del ExplorerService sobre la lista de explorers
ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node");








// video 1:20:00 https://teams.microsoft.com/_?culture=es-mx&country=MX&lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn#/broadcastPlaybackScreen
// lunes 4 abril