const express = require('express') //Import library express

const app = express(); //Object of class Express

const arrJson = [
    {"name" : "John Doe"},
    {"name" : "Sumair Hamza"}
]

app.get('/',(request,response) => {
    //request -> When you're requesting something from the Client
    //Response -> When you're responding to client request

    // '/' -> http://localhost:3000 (Default URL)

    response.send("Hello World");
});

app.get('/batman',(request,response) => {
    response.send({
        "msg" : "I am batman"
    });
})

app.get('/readJson',(request,response) => {
    response.send(arrJson);
})

app.listen(5000); //Listen to the port of the server