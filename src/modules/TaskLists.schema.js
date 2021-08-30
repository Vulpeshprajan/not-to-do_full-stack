import mongoose from "mongoose";



const ListSchema = mongoose.Schema(
    {
        task: {
            type: String,
            required: true,
            default : ""
        },
        hr: {
            type: Number,
            required: true,
            default : 0
        }
    
    },
    {
        timestamp: true, 
    }
)

const TaskList = mongoose.model("Task_list", ListSchema)



export default TaskList