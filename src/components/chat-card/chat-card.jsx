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


const Chatcard = () => {
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState([
    {
      message:
        `Welcome to Ahsan's professional portfolio! I'm Ahsan's Assistant, your one-stop resource for learning about his work experience and skills. Feel free to ask anything!`,
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
      const response = await fetch(process.env.REACT_APP_API, {
        method: "POST",
        body: JSON.stringify({ prompt }),
        headers: { "Content-Type": "application/json" },
      });

      const responseMsg = await response.json(); //takes json and convert it to js object
      console.log(responseMsg)

      const clientMsg = {
        message: responseMsg.answer,
        sentTime: "Just Now",
        sender: "RAG-Chain",
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
              name="Emily"
              src="https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg"
            />
            <ConversationHeader.Content
              userName="Compass-Ahsan's Portfolio Assistant"
              info="Active Now"
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
            placeholder="Type message here"
            onSend={(value) => handleSend(value)}
            fancyScroll
          ></MessageInput>
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Chatcard;
