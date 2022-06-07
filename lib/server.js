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
    const mission= request.params.mission;  // se declara constante "mission" que tendra el valor query param recibido en la url (:mission)
    const explorersInMission= ExplorerController.getExplorersByMission(mission); //"explorersInMission" contendra el valor al llamar a la funcion dentro de la clase ExplorerController y que se le envia el valor "mission"
    response.json(explorersInMission);  // se responde con un archivo json de la lista de explorers, segun la mission que se solicito
})

// Crea otro endpoint que regresa la cantidad de explorers segun la mission que se envie.
app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission= req.params.mission;
    const explorersAmountInMission= ExplorerController.getAmountOfExplorersByMission(mission);
    res.json({mission: req.params.mission, quantity: explorersAmountInMission});    // se responde un objeto con el nombre de la mision y la cantidad
})

// Crea el ultimo enpoint para regresar la lista de usernames de los explorers filtrados por la mission
app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission= req.params.mission;
    const ExplorersUsernamesByMission= ExplorerController.getExplorersUsernamesByMission(mission);
    res.json(ExplorersUsernamesByMission);
})

// Enpoint que funciona con applyValidationInNumber
// Se envia un score y solo se regresa la palabra "Fizz", "Buzz", "Fizzbuzz" o el mismo score, segun sea el caso
app.get("/v1/fizzbuzz/:number", (req, res) => {
    const number= req.params.number;
    const ValidationInNumber= ExplorerController.applyValidationInNumber(number);
    res.json({score: req.params.number, trick: ValidationInNumber});
})


// Inicializa el server
app.listen(port, () => {
    console.log(`Fizzbuz API in localhost:${port}`);
});