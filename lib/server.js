const ExplorerController= require("./controllers/ExplorerController");
const express= require("express");
const app= express();
app.use(express.json());
const port= 3000;

app.get("/", (req, res) => {
    res.json({message: "FizzBuzz Api Welcome!"});
});

// Crea el primer enpoint para recibir un pramtero por query params, y regresar la lista de explorers filtrados por el parametro
// http://localhost:3000/v1/explorers/node
app.get("/v1/explorers/:mission", (request, response) => {  // url a la que se ingresara y se enviara un parametro por query params (":mission" se cambiara por "node" o "java" al ingresar la url en el explorador)
    const mission= request.params.mission;  // se declara constante "mission" que tendra el valor recibido en la url (:mission)
    const explorersInMission= ExplorerController.getExplorersByMission(mission); //"explorersInMission" contendra el valor al llamar a la funcion dentro de la clase ExplorerController y que se le envia el valor "mission"
    response.json(explorersInMission);  // se responde con un archivo json de la lista de explorers, segun la mission que se solicito
})

app.listen(port, () => {
    console.log(`Fizzbuz API in localhost:${port}`);
});