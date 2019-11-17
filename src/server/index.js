'use strict';

const app = require('../config/app');
const port = 3001;

app.get('/main', (req, res) => { 
    res
    .status(200)
    .send('OK!');
});

app.listen(port, () => {
    console.log('App listening on port', port);
});