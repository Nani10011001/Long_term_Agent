import express from "express"

import schem_data from "../controller/controllerschema.js"
import { recallMemory } from "../controller/recallmemory.js"
const ChatRouter=express.Router()
ChatRouter.post("/send",schem_data)

ChatRouter.post("/mem/search",recallMemory)
export default ChatRouter