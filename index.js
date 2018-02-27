const express = require('express');
const path = require('path');

const app = express();

const port = process.env.port || 4000;

const dirPath = path.join(__dirname, '/client/dist');


app.use(express.static(dirPath));



app.get('*', (req, res) => {
    res.sendfile(dirPath + '/index.html');
});



app.listen(port, () => {
    console.log(`Application running on the port ${port}`);
});