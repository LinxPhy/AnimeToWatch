const express = require('express');
const cors = require('cors');
const path = require('path');
const AnimeList = require('./AnimeList');
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
        origin: 'https://youranimetowatch.netlify.app',
        method: ['GET', 'POST'],
    }
));

app.get('/', async(req, res) => {

    res.setHeader('Content-Type', 'application/javascript');
    res.send(AnimeList);

});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});