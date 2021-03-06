const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Yo. This is a test applcation written in Javascript.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
