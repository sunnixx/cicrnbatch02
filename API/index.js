const app = {};

app.load = async function() {
    await fetch('http://10.0.3.2:5000/batman')
    .then((responseFromServer) => {
        responseFromServer.json().then(message => alert(message.msg));
    })
}

module.exports = app;