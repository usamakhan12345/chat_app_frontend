import { Box } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./style.module.scss";
import Drawer from "../../Components/Drawer/index";
import { FaLocationArrow } from "react-icons/fa6";
import { CiFaceSmile } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import Messages from "../../Components/MessageList/index";
import ChatHeader from "../../Components/ChatHeader/index";
import { FaMicrophone } from "react-icons/fa";
import { useGetAllUsersQuery } from "../../Components/redux/Services/authServices";
import { io } from "socket.io-client";

const Chat = () => {
  const [message, setMessage] = useState();
  const [allMessages, setAllMessages] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const { data, error, isLoading } = useGetAllUsersQuery();

  const socket = useMemo(() => io("http://localhost:8000/"), []);
  useEffect(() => {
    // Connect to the server socket
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });

    socket.on("all-chat-messages", (msg) => {
      console.log("messages", msg);
      setAllMessages((prevMessages) => [...prevMessages, msg]);
      return () => {
        socket.disconnect();
      };
    });
  }, [socket]);

  const getCurrentUserChat = (username) => {
    setCurrentUser(username);
  };

  useEffect(() => {
    if (data) {
      if (data.users.length > 0) {
        const userDetails = data.users.map((user) => {
          return {
            username: user.full_name,
            emailId: user.email,
          };
        });
        setAllUsers(userDetails);
      }
    }
  }, [data]);

  const userSendMessage = (userMessage) => {
    console.log("func is working");

    // setAllMessages([...allMessages, userMessage]);
    console.log("allMessages", allMessages);

    socket.emit("chat-message", userMessage);
    setMessage("");
  };
  return (
    <Box className={styles.chatWrapper}>
      <Box className={styles.userContainer}>
        <Drawer getCurrentUserChat={getCurrentUserChat} allUsers={allUsers} />
      </Box>
      <Box className={styles.chatContainer}>
        <ChatHeader currentUser={currentUser} />
        <Box className={styles.messagesContainer}>
          <Messages allMessages={allMessages} />
        </Box>
        <Box className={styles.inputContainer}>
          <CiFaceSmile className={styles.emojiIcon} />
          <FaPlus className={styles.plusIcon} />
          <input
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.messageInput}
            type="text"
          />
          {message ? (
            <FaLocationArrow
              onClick={() => message && userSendMessage(message)}
              className={styles.messageIcon}
            />
          ) : (
            <FaMicrophone className={styles.messageIcon} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
