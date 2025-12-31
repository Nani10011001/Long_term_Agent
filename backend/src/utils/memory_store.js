import { Memory } from "../../schema/schema.chat.js";
import { embedText } from "./embText.js";

export const storeMemory=async({userId,
    content,
    type="fact",
    importance=0.5
})=>{
    if(!userId||!content){
        throw new Error("userId and content is required")
    }
    
const embedding=await embedText(content)
return Memory.create({
    userId,
    content,
    embedding,
    type,
    importance
})
}
/* const mem=await storeMemory({
    userId:"nani",
    content:"user is building long term memory using MongoDb atlas vector search "
    
})
console.log(mem._id) */
