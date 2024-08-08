import React, { useState } from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  ConversationHeader,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import { faBluesky } from "@fortawesome/free-brands-svg-icons";

const Projectbot = () => {
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState([
    {
      message:
        "Stay tuned for another exciting feature, that will help you exploring project directly, which can be easier than reviewing the entire codebase and documentation. However, both are available for in-depth insights. Coming Soon!",
      sentTime: "Just Now",
      sender: "user",
      direction: "outgoing",
    },
  ]);

  const handleSend = async (prompt) => {
    const userMsg = {
      message: prompt,
      sentTime: "Just Now",
      sender: "user",
      direction: "outgoing",
    };

    let updatedMessageList = [...msgs, userMsg];
    setMsgs(updatedMessageList);
    setTyping(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/generator", {
        method: "POST",
        body: JSON.stringify({ prompt }),
        headers: { "Content-Type": "application/json" },
      });

      const responseMsg = await response.json(); //takes json and convert it to js object

      const clientMsg = {
        message: responseMsg.text,
        sentTime: "Just Now",
        sender: "Elon Musk",
        direction: "incoming",
      };

      updatedMessageList = [...msgs, userMsg, clientMsg];
      setTyping(false);
      setMsgs(updatedMessageList);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div style={{ position: "relative", height: "400px", background: "green" }}>
      <MainContainer>
        <ChatContainer>
          <ConversationHeader>
            <Avatar
              name="Joe"
              src="https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg"
            />
            <ConversationHeader.Content
              userName="Ask Anything About Project"
              info="Coming Soon!"
            />
          </ConversationHeader>
          <MessageList
            typingIndicator={
              typing ? <TypingIndicator content="Typing..." /> : null
            }
          >
            {msgs.map((msg) => (
              <Message model={msg} />
            ))}
          </MessageList>
          <MessageInput
            attachButton={false}
            sendButton={false}
            placeholder=""
            onSend={(value) => handleSend(value)}
            fancyScroll
          ></MessageInput>
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Projectbot;
