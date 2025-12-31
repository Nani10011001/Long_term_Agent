import React from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

const MessageBubble = React.memo(
  ({ role, text }) => {
    const isUser = role === "user";
if(!text ||typeof text !=="string"){
  return null
}
    return (
      <motion.div 
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`text-sm rounded-2xl max-w-[75%] p-3
          ${isUser
            ? "mr-auto bg-[#972182] text-white rounded-bl-md"
            : "ml-auto bg-white text-black shadow-md rounded-b-md"
          }`}
      >
        <ReactMarkdown>{text}</ReactMarkdown>
      </motion.div>
    );
  },
  (prev, next) =>
    prev.text === next.text && prev.role === next.role 
);

export default MessageBubble;
