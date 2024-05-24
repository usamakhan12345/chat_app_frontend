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
import EmojiPicker from "emoji-picker-react";
const Chat = () => {
  const [message, setMessage] = useState();
  const [allMessages, setAllMessages] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [viewImagePicker, setViewImagePicker] = useState(false);
  const [emojis, setEmojis] = useState([]);
  const { data, error, isLoading } = useGetAllUsersQuery();
  const socket = useMemo(() => io("http://localhost:8000/"), []);

  // const allSelectedEmojis = e
  useEffect(() => {
    // Connect to the server socket
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });

    socket.on("all-chat-messages", (msg) => {
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
    socket.emit("chat-message", userMessage);
    setMessage("");
    setEmojis([]);
  };
  const myEmojiClick = (emojiobject) => {
    const { emoji } = emojiobject;
    setMessage((prev) => (prev ? prev + emoji : emoji));
    setEmojis([emoji, ...emojis]);
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
          <EmojiPicker
            className={
              viewImagePicker
                ? styles.ViewemojiIconPicker
                : styles.emojiIconPicker
            }
            onEmojiClick={myEmojiClick}
          />
          <CiFaceSmile
            className={styles.emojiIcon}
            onClick={() => setViewImagePicker((prev) => !prev)}
          />
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
