const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', '..', 'form_db', 'public')));


const routes = require(path.join(__dirname, '..','routes', 'routes.js'));

app.use('/', routes);


app.listen(port, () => {
    console.log(`Servidor OK em http://localhost:${port}`);
})
