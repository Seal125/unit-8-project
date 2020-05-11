require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// create a GET route
app.get('/express_backend', (req, res) => {
	res.json({ key: process.env.API_KEY });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
