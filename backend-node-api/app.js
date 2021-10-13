import dotenv from "dotenv";
dotenv.config()

import express from "express";
const app = express()
import cors from "cors";
// import fs from "fs"
import path from "path";


const PORT = process.env.PORT || 5000


import mongoClient from "./src/config/db.js";
mongoClient()
// middleware
app.use(express.urlencoded())
app.use(express.json())

app.use(cors())

// import routers 
import routers from "./src/routers/index.js";

// pass all the api request here 

app.use("/api/v1/", routers)

// ---

// serving react application through Node server 
const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, "/react-front-app/build")))

app.get('/', function (req, res) {
  // res.send('Hello ')
  res.sendFile(path.join(__dirname, "/react-front-app/build/index.html"))

})

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error)
  }
  console.log(`The server is running at http://localhost:${PORT}`);

})