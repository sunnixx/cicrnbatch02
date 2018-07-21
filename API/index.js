const app = {}
import {AsyncStorage} from 'react-native';

app.handleData = async function(data) {
    await fetch('http://10.0.3.2:3000',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({msg: data})
    })
    .then((response) => {
        response.json().then(message => {
            if(message.msg) {
                alert(message.msg);
            }
        })
    })
    .catch(err => {throw err});
}

app.getData = async function() {
    await fetch('http://10.0.3.2:3000/showInfo')
    .then((response) => {
        response.json().then((employee) => {
            AsyncStorage.setItem("key:employee",JSON.stringify(employee));
        })
    })
    .catch(err => {throw err}) 
}

module.exports = app;