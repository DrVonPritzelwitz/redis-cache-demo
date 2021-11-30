const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/photos', async (req, res) => {
	const albumId = req.query.albumId;
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos', { params: { albumId } });
	res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
