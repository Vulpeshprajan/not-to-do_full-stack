import ListSchema from "./TaskLists.schema.js";

// CRUD 


// Create the data 

export const insertTaskLists = (newTask) => {
    
    return new Promise((resolve, reject) => {
        
        // in order to insert data in the schema we call schema and pass data variable 
    //   i.e 
    ListSchema(newTask)
    // here save is a method to save data which will bring then() and catch() as a chaining method 
   .save()
   .then((data) => {
       resolve(data)
   })
   .catch((error) => {
       reject(error)
   })
        
    })
   
        

}
    
// read the data 
export const getTask = () => {

    return new Promise((resolve, reject) => {
            ListSchema
            .find()
            .then((data) => {
                resolve(data)
        
            })
            .catch((error) => {
            reject(error)
        })
               
        
        
    })



}



