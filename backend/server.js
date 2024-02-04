import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import connection from './database/mongo.js';
import router from './routes/route.js';
import path from 'path';
dotenv.config();

const app= express();
app.use(express.static(path.join(__dirname, './frontend/dist')));
app.use(express.json());
app.use(cors());

const port=process.env.PORT || 8060;

connection()

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/dist/index.html'))
})

app.use('/api/v1',router)
   


app.listen(port,()=>console.log(`port is running on ${port}`));