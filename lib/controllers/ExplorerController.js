const ExplorerService= require("../services/ExplorerService");
const FizzbuzzService= require("./../services/FizzbuzzService");
const Reader= require("./../utils/Reader");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getAmountOfExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers,mission);
    }
    
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers,mission);
    }

    static applyValidationInNumber(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }

    static getExplorersByStack(mission){
        const explorers= Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersByStack(explorers,mission);
    }
}

module.exports= ExplorerController;