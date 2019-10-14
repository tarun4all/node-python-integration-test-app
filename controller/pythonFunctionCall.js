const chalk = require('chalk');

const add = (req, res) => {
    if(req.query.a && req.query.b && !isNaN(Number(req.query.a)) && !isNaN(Number(req.query.b))) {
        const spawn = require("child_process").spawn;

        //numbers will be passed as arguments to python script and will be accessed there with sys
        const pythonProcess = spawn('python',["./script.py", req.query.a, req.query.b]);
    
        console.log(chalk.red("Python function called"));

        pythonProcess.stdout.on('data', (data) => {
            console.log(chalk.green("Python function return done"));
            res.send("Sum : " + data.toString());
        });
        
        pythonProcess.stderr.on('data', (data) => {
            res.send("Error occures in python : " + data.toString());
        });
    } else {
        res.send('Please add the numbers coresponding to a & b in params to see the Manual result.');
    }
}

module.exports = add;