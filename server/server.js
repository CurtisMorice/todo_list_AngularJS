const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('server/public'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
})