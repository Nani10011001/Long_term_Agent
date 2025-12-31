import axios from "axios";


const call_python_agent = async ({ userId, content }) => {
  try {
    // validate input first
    if (!userId || !content) {
      console.log("userId or content missing");
      return null;
    }

    const res = await axios.post(
      "http://localhost:8001/chatpython",
      {
        userId,
        content
      }
    );

    console.log(" AI reply:", res.data.reply);
    return res.data.reply;

  } catch (error) {
    console.error(
      "error in call_python_agent:",
      error.response?.data || error.message
    );
    return null;
  }
};

export default call_python_agent;

