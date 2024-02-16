import React, { useRef, useEffect, useState } from "react";
// import chatbot from "../styles/chatbot.css"
const Chat = () => {
  const [isChatVisible, setChatVisible] = useState(false);

  const toggleChat = () => {
    setChatVisible(!isChatVisible);
  };

  const containerRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        setShowArrow(
          container.scrollHeight > container.clientHeight &&
            container.scrollTop > 0
        );
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
        <div className="rounded-md shadow-xl flex flex-col w-[380px] h-[430px] absolute top-10">
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
              style={{ position: "relative" }}
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

              {showArrow && (
                <img
                  src="../assests/icons/chatarrow.svg"
                  className="absolute bottom-0 left-[50%]"
                />
              )}
            </div>
            <div className="relative flex flex-col w-full h-[120px] p-4 space-y-12">
              <div className="opacity-0.5">
                {" "}
                <p className="absolute left-20 bottom-16 text-xs text-center border border-[#58B310] rounded-xl cursor-pointer">
                  Write a message here in this box.
                </p>
                <p className="absolute left-20 bottom-22 text-xs text-center border border-[#58B310] rounded-xl cursor-pointer">
                  Write a message here in this box.
                </p>
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Write a message"
                  className="shadow-xl rounded-xl p-2 font-Montserrat text-sm"
                />
                <img
                  src="../assests/icons/chatsearch.svg"
                  className="absolute right-6 bottom-5 w-[26px] h-auto cursor-pointer"
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
