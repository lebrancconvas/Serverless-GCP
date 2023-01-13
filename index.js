import express from 'express';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();
const port = process.env.PORT; 

app.get("/", (req, res) => {
	res.send("Web API."); 
});

app.listen(port, () => {
	console.log(`[SUCCESS] Server is running on the port ${port}.`); 
});