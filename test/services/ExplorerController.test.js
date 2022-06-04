const ExplorerController= require('./../../lib/controllers/ExplorerController');

describe("Test para ExplorerController", () => {
    test("1. Test para getExplorerByMission", () => {
        const explorersInNode= ExplorerController.getExplorersByMission("node");
        expect(explorersInNode.length).toBe(10);
    })
})