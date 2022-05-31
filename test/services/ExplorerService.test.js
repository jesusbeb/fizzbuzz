const ExplorerService= require("./../../lib/services/ExplorerService");
const Reader= require("./../../lib/utils/Reader"); // se importa la class Reader

describe("Tests para ExplorerService", () => {
    test("1. Requerimiento: Calcular todos los explorers en una mision, probando 'filterByMission'", () => {
        const explorers = [{mission: "node"}, {mission: "node"}];   // se instancia dos objetos para probar el funcionamiento de la funcion filterByMission de la clase ExplorerService 
        const explorersInNode= ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(2);
    });

    test("2. Requerimiento: Calcular todos los explorers en la mision 'node' del archivo 'explorers.json', probando getAmountOfExplorersByMission", () => {
        const explorers= Reader.readJsonFile("explorers.json"); // se declara una constante que llama a la funcion static "readJsonFile" de la clase "Reader" y le manda el path de explorers.json para que lo lea
        const explorersInNode= ExplorerService.getAmountOfExplorersByMission(explorers,"node"); // constante que llama a la funcion "filterByMission" de la clase "ExplorerService" y le envia los parametros "explorers" y "node"
        expect(explorersInNode).toBe(10);
    });

    test("3. Requerimiento: Probar la funcion 'getExplorersUsernamesByMission'", () => {
        const explorers= [{
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
        },
        {
            "name": "Woopa2",
            "githubUsername": "ajolonauta2",
            "score": 2,
            "mission": "node",
        }];
        const result = ExplorerService.getExplorersUsernamesByMission(explorers,"node");
        expect(result[0]).toBe("ajolonauta1");
        expect(result[1]).toBe("ajolonauta2");
    });
    
});