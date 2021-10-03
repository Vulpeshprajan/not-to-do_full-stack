import mongoose from 'mongoose'


const mongoClient = async () => {
    try {
        console.log("mongo is connected")
        const uri = "mongodb://localhost/task_Lists"
        const con = await mongoose.connect(uri, {})
        if (con) {
            console.log("mongo is connected")
        }
    } catch (error) {
        console.log(error)
    }

}
export default mongoClient;