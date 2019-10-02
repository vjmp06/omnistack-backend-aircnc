const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json('Hello Word');
});

app.listen(3333);