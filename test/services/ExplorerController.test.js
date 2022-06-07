const ExplorerController= require('./../../lib/controllers/ExplorerController');

describe("Test para ExplorerController", () => {
    test("1. Test para getExplorerByMission", () => {
        const explorersInNode= ExplorerController.getExplorersByMission("java");
        expect(explorersInNode.length).toBe(5);
    })
})