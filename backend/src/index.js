import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbconnection from "./db/dbconnect.js"
import ChatRouter from "./router/chat.routes.js"
dotenv.config()
const app=express()
app.use(cors({
  origin: "http://localhost:5174",
  credentials: true
}));
app.use(express.json())
// router use 
app.use("/api",ChatRouter)

const serverStart=async()=>{
    try {
        await dbconnection()
        app.listen(process.env.PORT,()=>console.log(`server running at http://localhost:${process.env.PORT}`))
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
serverStart()