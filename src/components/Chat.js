import React, { useRef, useEffect, useState } from "react";
// import chatbot from "../styles/chatbot.css";
const Chat = () => {
  const [isChatVisible, setChatVisible] = useState(false);
  const [arrowOpacity, setArrowOpacity] = useState(0);

  const toggleChat = () => {
    setChatVisible(!isChatVisible);
  };

  const containerRef = useRef(null);

  const handleScrollToBottom = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        setArrowOpacity(container.scrollTop > 0 ? 1 : 0);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initially
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center pt-[500px]">
      <img
        src="../assests/icons/chat.svg"
        className="w-[60px] h-auto cursor-pointer"
        onClick={toggleChat}
      />

      {isChatVisible && (
        <div className="rounded-md shadow-xl flex flex-col w-[380px] h-[430px] absolute top-10" ref={containerRef}>
          <div className="rounded-md shadow-xl flex flex-col w-[380px] h-[430px]">
            <div
              className="flex flex-row justify-between pt-2 pb-2 pl-3 pr-4 text-[#FFFFFF] bg-[#58B310]"
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <p className="font-Gorditas text-lg">CHAT With US</p>
              <img
                src="../assests/icons/chatmenu.svg"
                className="w-[28px] h-auto cursor-pointer"
              />
            </div>
            <div
              className="relative space-y-2 w-full h-[300px] pl-6 pr-6 pt-6 text-[#848484] overflow-auto"
            >
              <img src="../assests/icons/chatbot.svg" />
              <img src="../assests/icons/chatbot.svg" />
              <img
                src="../assests/icons/chatbot.svg"
                className="absolute right-6"
              />
              <img src="../assests/icons/chatbot.svg" />
              <img src="../assests/icons/chatbot.svg" />
              <img src="../assests/icons/chatbot.svg" />
              <img src="../assests/icons/chatbot.svg" />
              <img src="../assests/icons/chatbot.svg" />
              <img src="../assests/icons/chatbot.svg" />
              <img src="../assests/icons/chatbot.svg" />
              <img src="../assests/icons/chatbot.svg" />
              <img src="../assests/icons/chatbot.svg" />
              <img src="../assests/icons/chatbot.svg" />
              <img src="../assests/icons/chatbot.svg" />
            </div>
            <div className="grid grid-cols-1 w-full h-[140px] pl-4 pr-4 pb-4 container">
              <div className="flex flex-wrap items-center justify-center opacity-0.5 text-[#848484] w-full h-3/4 text-group">
                <p className="text-xs text-center border border-[#58B310] rounded-md cursor-pointer pl-2 pr-2 text-box">
                  Write a message here in this box.
                </p>
                <p className="text-xs text-center border border-[#58B310] rounded-md cursor-pointer pl-2 pr-2 text-box">
                  Write a message here in this box.
                </p>
              </div>
              <div className="flex flex-col w-full h-full input-container">
                <img
                  src="../assests/icons/chatarrow.svg"
                  className="absolute bottom-12 left-[50%] cursor-pointer transform -translate-x-1/2 rounded-full"
                  style={{ opacity: arrowOpacity, zIndex: 1 }}
                  onClick={handleScrollToBottom}
                />
                <input
                  placeholder="Write a message"
                  className="absolute w-[350px] h-auto shadow-xl rounded-xl p-2 font-Montserrat text-sm input-box"
                />
                <img
                  src="../assests/icons/chatsearch.svg"
                  className="absolute right-6 bottom-5 w-[26px] h-auto cursor-pointer search-icon"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
