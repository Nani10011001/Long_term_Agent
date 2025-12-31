import call_python_agent from "./callpythonagent.js";
import { storeMemory } from "../utils/memory_store.js";

const ALLOWED_TYPES = new Set([
  "fact",
  "preference",
  "goal",
  "project",
  "habit"
]);

function normalizeMemoryType(type) {
  if (!type) return "fact";
  const cleaned = type.toLowerCase().trim();
  return ALLOWED_TYPES.has(cleaned) ? cleaned : "fact";
}

const schem_data = async (req, res) => {
  try {
    const { userId, content } = req.body;

    if (!userId || !content) {
      return res.status(400).json({
        success: false,
        message: "userId and content required"
      });
    }

    // Call Python agent (MISSING BEFORE)
    const aiReply = await call_python_agent({ userId, content });

    // Store USER message
    await storeMemory({
      userId,
      content,
      type: normalizeMemoryType("preference"),
      importance: 0.6
    });

    // Store AI reply
    await storeMemory({
      userId,
      content: aiReply,
      type: "fact",
      importance: 0.7
    });

    return res.json({
      success: true,
      reply: aiReply
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
};

export default schem_data;
