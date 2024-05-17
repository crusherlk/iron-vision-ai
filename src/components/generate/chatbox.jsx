import { useRef, useState } from "react";
import { MdSend } from "react-icons/md";

export default function Chatbox() {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const updateTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
      console.log(scrollHeight);
    }
  };

  return (
    <div className="rounded-xl border-[0.5px] border-[rgba(255,255,255,0.5)] bg-t02-blue1 px-8 py-6">
      <div className="relative flex items-center justify-between">
        <textarea
          ref={textareaRef}
          rows={1}
          className="chat-box mr-4 max-h-[200px] min-h-[20px] resize-none"
          id="chat"
          onInput={updateTextareaHeight}
          placeholder="Type You message Here.."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <MdSend
          size={16}
          className={`cursor-pointer ${text === "" && "invisible"}`}
          onClick={() => setText("")}
        />
      </div>
    </div>
  );
}
