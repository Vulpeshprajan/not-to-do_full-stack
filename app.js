import express from "express";
const app = express()
import cors from "cors";

const PORT = 8000


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

app.use('/', function (req, res) {
  res.send('Hello ')
})

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error)
  }
  console.log(`The server is running at http://localhost:${PORT}`);

})