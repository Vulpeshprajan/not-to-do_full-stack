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


// get single ticket
export const getATask = (_id) =>
{
    return new Promise((resolve, reject) => {
        ListSchema.findById(_id)
            .then((data) => {
                resolve (data)

             })
            .catch((error) => {
            reject (error)
        })
    })

}


// delete a multiple document
export const deleteTasks = (ids) => {

    return new Promise((resolve, reject) => {
        ListSchema.deleteMany({
            _id: {
               $in: ids
            }
            })
            .then((data) => {
                resolve(data)})
            .catch((error) => {
                reject(error)
            })

        })

}

// switch between task 

export const updateToDo = ({id, todo}) => {
    return new Promise((resolve, reject) => {
        ListSchema.findByIdAndUpdate(
            id,
            {
                todo,
            }, {
                new : true, 
            }

        ).then((result) => resolve(result))
        .catch((error) => reject(error))
    })

}



