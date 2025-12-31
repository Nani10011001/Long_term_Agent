import { Memory } from "../../schema/schema.chat.js";
import { embedText } from "./embText.js";

export const searchMemory = async ({
  userId,
  query,
  limit = 5
}) => {
  const queryEmbedding = await embedText(query);
 userId = userId.trim().toLowerCase();
  return Memory.aggregate([
    {
      $vectorSearch: {
        index: "ltm_vector_index",
        path: "embedding",
        queryVector: queryEmbedding,
        numCandidates: 100,
        limit,
        filter: {
       userId

        }
      }
    },
    {
      $project: {
        content: 1,
        importance: 1,
        score: { $meta: "vectorSearchScore" }
      }
    }
  ]);
};
/* console.log(searchMemory({userId:"nani",query:"agent memory"})) */