import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import bodyParser from "body-parser"

// api
import Router from './routes.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// routes
app.use("/api", Router)

// mongodb and port listen
mongoose.set('strictQuery', false);
mongoose.connect(process.env.mongodb_env, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(console.log("\n---------------------------------------\nMongodb is attached. Successfully !!"));

const port = process.env.port_env||6000;
app.listen(port,()=>console.log(`http://localhost:${port}`));