const cors = require('cors');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const parserApp = express();
const nonParserApp = express();


parserApp.use(bodyParser.urlencoded({ extended: true }));
parserApp.use(bodyParser.json());
parserApp.use(cors());

nonParserApp.use(bodyParser.urlencoded({ extended: true }));
nonParserApp.use(cors());

const parserPort = 3000;
const nonParserPort = 4000;

// JSON Routes

parserApp.post('/parser/print', (req, res) => {
    const body = req.body;
    console.log(`Parser App\nNome: ${body.nome}\nE-mail: ${body.email}`);
    res.status(200).send({ status: "printed" });
});

// HTTP Routes

nonParserApp.post('/nonparser/print', (req, res) => {
    let buffer;
    req.on('data', data => {
        buffer += data;
    });

    req.on('end', () => {
        const body = JSON.parse(buffer);
        console.log(`Non Parser App\nNome: ${body.nome}\nE-mail: ${body.email}`);
        res.end({ status: "printed" });
    });
});


http.createServer(parserApp).listen(parserPort, err => {
    console.log('Listening Parser App in http://localhost:' + parserPort);
});

http.createServer(nonParserApp).listen(nonParserPort, err => {
    console.log('Listening Non Parser App in http://localhost:' + nonParserPort);
});