const express = require('express');
const cors = require('cors');
const axios = require('axios');
//const Redis = require('redis');

// const redisClient = Redis.createClient();
// const DEFAULT_EXPIRATION = 3600;

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



// redisClient.get('photos', async (error, photos) => {
		
	// 	if(error) {
	// 		console.error(error)	
	// 	}
	// 	if(photos != null) {

	// 		return res.json(JSON.parse(photos));

	// 	} else {
	// 		const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos', { params: { albumId } });
			
	// 		redisClient.setex('photos', DEFAULT_EXPIRATION, JSON.stringify(data));
	// 		res.json(data);
	// 	}
	// });