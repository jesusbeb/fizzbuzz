class ExplorerService{
    static filterByMission(explorers, mission){ // explorers y mission, son parametros que recibe de donde sea llamada
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission); // filtra a los explorers que esten en alguna mision, la cual sera indicada en el parametro que recibe
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers,mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission); // la constante llama a la funcion anterior que esta dentro de esta misma clase
        return explorersByMission.length;
    }

    static getExplorersUsernamesByMission(explorers,mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        const explorerUsernames = explorersByMission.map((anyThing) => anyThing.githubUsername); // la constante obtiene la propiedad "githubUsername" de la lista filtrada a una nueva lista, usando map
        return explorerUsernames;
    }

    static getExplorersByStack(explorers,mission){
        const explorerByStacks= explorers.filter((explorer) => explorer.stacks.includes(mission));
        return explorerByStacks;
    }

}

module.exports = ExplorerService;