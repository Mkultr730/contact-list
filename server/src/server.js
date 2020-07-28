const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const contacts = require('./config/contacts');

const app = express();

const jsonParser = bodyParser.json();

app.use(express.static('public'));
app.use(cors());

// app.use((req, res, next) => {
//     const token = req.get('Authorization');

//     if (token) {
//         req.token = token;
//         next();
//     } else {
//         res.status(403).send({
//             error: 'Please provide an Authorization header'
//         });
//     }
// });

app.get('/contacts', (req, res) => {
    res.send(contacts.get(req.token))
});

app.delete('/contacts/:id', (req, res) => {
    res.send(contacts.remove(req.token, req.params.id))
});

app.post('/contacts', jsonParser, (req, res) => {
    const { name, email} = req.body;

    if (name && email) {
        res.send(contacts.create(req.token, req.body));
    } else {
        res.status(403).send({
            error: 'Provide both email and email address'
        });
    }
});

app.listen(config.port, () => {
    console.log('Server listening on port %s, Ctrl+C to stop', config.port)
});