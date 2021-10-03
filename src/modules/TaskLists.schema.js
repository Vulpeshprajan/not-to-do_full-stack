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
        },
        todo: {
            type: Boolean,
            required: true,
            default: true,
        }
    
    },
    {
        timestamp: true, 
    }
)

const TaskList = mongoose.model("Task_list", ListSchema)



export default TaskList