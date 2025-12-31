import mongoose from "mongoose"
const UserMessage=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        index:true
    },
    content:{
        type:String,
        required:true
    },
    embedding:{
        type:[Number],
        required:true,

    },
    type:{
        type:String,
        enum:["fact","preference","goal","project","habit", "ai_message"],
        default:"fact"
    },
    //importance (agent decide)
    importance:{
        type:Number,
        min:0,
        max:1,
        default:0.5
    }
    

},{timestamps:true})

 UserMessage.index({
  embedding: {
    type: "vector",
    dims: 384,          //  must match embedText()
    similarity: "cosine"
  }
});
 export const Memory=mongoose.model("LTMMemory",UserMessage)