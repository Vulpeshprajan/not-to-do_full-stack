import express from "express";
import { taskList } from "../assets/tickets.js";
import { insertTaskLists, getTask } from "../modules/TaskList.Modal.js";

const route = express.Router()

route.all("/" , (req, res, next)=> {
    console.log("we got hit")

    next()
    // res.json({message: "you got hit"})
})


// return all the tickets 

route.get("/" , async(req, res)=> {
   
    const taskLists = await getTask()
    res.json({ result : taskLists })
})


// add all the new tickets 
route.post("/", async (req, res) => {
    const result = await insertTaskLists(req.body)
    console.log(result)   
    res.json(result)
})

// update new tickets 
route.patch("/" , (req, res)=> {

    res.json({message: "We will update this api endpoint"})
})

// delete tickets
route.delete("/" , (req, res)=> {

    res.json({message: "the requested ticket will be deleted from database "})
})





export default route;