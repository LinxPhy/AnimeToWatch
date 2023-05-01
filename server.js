const express = require('express');
const cors = require('cors');
const path = require('path');
const admin = require('firebase-admin');
const ServiceAccount = require('./ServiceAccount.json')
const app = express();

admin.initializeApp({
    credential: admin.credential.cert(ServiceAccount),
    storageBucket: 'animetowatch-634b6.appspot.com',
});

app.use(express.json())
app.use(express.static(path.join(__dirname, 'src')))
app.use(cors(
    {
        // origin: ',
        origin: ['https://youranimetowatch.netlify.app','https://ee82-92-0-235-137.ngrok-free.app', 'http://localhost:5173'],
        method: ['GET', 'POST'],
    }
));

app.get('/action', async(req, res) => {
    
    const Action = require('./animeLists/Action.js') 
    res.setHeader('Content-Type', 'application/javascript');
    res.send(Action);

});

app.get('/mystery', async(req, res) => {

    const Mystery = require('./animeLists/Mystery.js')
    res.setHeader('Content-Type', 'application/javascript');
    res.send(Mystery);
})

app.get('/romance', async(req, res) => {

    const Romance = require('./animeLists/Romance.js')
    res.setHeader('Content-Type', 'application/javascript');
    res.send(Romance);
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});