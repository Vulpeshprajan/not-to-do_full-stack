import express from "express";

import { insertTaskLists, getTask, getATask, deleteTasks, updateToDo } from "../modules/TaskList.Modal.js";

const route = express.Router()

route.all("/" , (req, res, next)=> {
    next()
    // res.json({message: "you got hit"})
})


// return all the tickets 

route.get("/:id?" , async(req, res)=> {
   try {
       const {id} = req.params
     

       if (id) {
           const result = await getATask(id)
           res.json(result)
       } else {
           const taskLists = await getTask()
           res.json({result : taskLists})
       }
   } catch (error) {
       console.log(error)
       res.json({
        message: 'We are unable to process your request, Please try agin later',
      })
   }
   
})


// add all the new tickets 
route.post("/", async (req, res) => {


    try {
        const result = await insertTaskLists(req.body)
   
        res.json(result)
    } catch (error) {
        console.log(error)
        res.json({message: error.message})
        
    }
   
})

// update new tickets 
route.patch("/" , async(req, res)=> {
    try {
        if (!req.body.id) {
            return res.json({status : "error" , message : "invalid id"}) 
        }
        const result = await updateToDo(req.body)
        const msg = result ? "Selected data updated" : "No thing is updated"
        res.json({ msg, result })
        console.log(msg)
    
} catch (error) {
        res.json({
            status: "error",
            message: "unable to process your request, please try again later"
})    
}
   
})

// delete tickets
route.delete("/" , async(req, res)=> {

    try {
        const {ids} = req.body
        console.log(req.body)
 
        if (!ids) {
            res.json({status : "error" , message : "invalid id"})
        }
        const result = await deleteTasks(ids)
        const msg = result ? result : { message: "Id already deleted or doesnt exist " }
        res.json(msg)
    } catch (error) {
        console.log(error)
        
    }
})





export default route;