const ExplorerService= require("./../../lib/services/ExplorerService")
const Reader= require("./../../lib/utils/Reader") // se importa la class Reader

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una mision", () => {     // prueba trampa del MC :v
        const explorers = [{mission: "node"}, {mission: "node"}];
        const explorersInNode= ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(2);
    });

    test("Requerimiento 2: Calcular todos los explorers en una mission del archivo explorers.json", () => {
        const explorers= Reader.readJsonFile("explorers.json") // se declara una constante que llama a la funcion static "readJsonFile" de la clase "Reader" y le manda el path de explorers.json para que lo lea
        const explorersInNode= ExplorerService.filterByMission(explorers,"node"); // constante que llama a la funcion "filterByMission" de la clase "ExplorerService" y le envia los parametros "explorers" y "node"
        expect(explorersInNode.length).toBe(10);
    })
});