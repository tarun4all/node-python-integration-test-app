const app = require('express')();
const chalk = require('chalk');
const addNumbers = require('./controller/pythonFunctionCall');

//route for add
    //if got a and b in request than added else warning will be send
app.get('/sumFromPythonViaNode', addNumbers);

app.listen(3000, () => {
    console.log(chalk.blue("server starts working.") + " You can access it on url : " + chalk.yellow.bold("http://localhost:3000/sumFromPythonViaNode"));
});