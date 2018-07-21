const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Middleware 
app.use(bodyParser.json()); //Always take data in JSON format
app.use(bodyParser.urlencoded({extended: false})); //Never encode the URL 

//Routes
app.get('/',(request,response) => {
    response.send("Server connecteD");
})

app.post('/',(request,response) => {
    // let data = request.body.data;
    console.log(request.body);
    let data = request.body.msg;
    response.json({msg: 'Got the Data'});
})

app.get('/showInfo',(request,response) => {
    response.json({
        "employee": {
            "name" : "John Doe",
            "designation" : "Engineer"
        }
    });
})

app.listen(3000,(err) => {
    if(err) throw err //Let me know what the error is

    console.log("Server connected");
})