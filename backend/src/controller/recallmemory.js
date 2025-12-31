import { searchMemory } from "../utils/semantic_search.js";

export const recallMemory=async(req,res)=>{
    try {
        const {query,userId,limit=5}=req.body
    if(!query || !userId){
      return res.status(400).json({
        error:"query and userId and query required"
      })  
    }
    //vector recall
    const memories=await searchMemory({userId,query,limit})
    
    //return only clean text
    res.json({
        success:true,
        memories:memories.map(m=>m.content)

        
    })
    console.log(res)
    } catch (error) {
        console.error("Recall memory error:->",error)
        res.status(500).json({
            error:"Failed to recall memory"
        })
    }

}