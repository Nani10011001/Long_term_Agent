import mongoose from "mongoose"
const dbconnection=async()=>{
    try {
        await mongoose.connect(process.env.MON_URL)
        console.log("db connected successfully")
    } catch (error) {
       console.error(error) 
       process.exit(1)
    }
}
export default dbconnection