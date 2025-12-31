import {pipeline} from "@xenova/transformers"
let embedder=null
// load only once it reduce the cpu optimization and also stop running every time a api call
const loadEmdedder=async()=>{
 if(!embedder){
    embedder=await pipeline(
        "feature-extraction",
        "Xenova/all-MiniLM-L6-v2"
    )

 }
 return embedder
}
export async function embedText(text){
    if(!text || typeof text !=="string"){
        throw new Error()
    }
    const model=await loadEmdedder()
    const ouput=await model(text,{
        pooling:"mean",
        normalize:true
    })
    // convert data into to plain js array
   
    return Array.from(ouput.data)
}

// embedding test
/* const vector=await embedText("hello i am jai i am building the long-term memory ai assistant")
console.log(vector.length)
console.log(vector.slice(0,5))  */