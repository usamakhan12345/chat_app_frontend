// App.js

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000/");

const Home = () => {
  const [message, setMessage] = useState([]);
  const [receivedMessage, setReceivedMessage] = useState("");
  const [room, setRoom] = useState();
  useEffect(() => {
    // Listen for "message" event from the server
    socket.on("chat_message", (data) => {
      setReceivedMessage(data);
    });

    // Cleanup the socket connection when the component unmounts
    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  const sendMessage = () => {
    // Emit "message" event to the server
    console.log(message);
    socket.emit("chat_message", message);
  };
  const handleJoinRoom = (data) => {
    // Emit "message" event to the server
    console.log(message);
    // socket.emit("message", data);
    socket.emit("join-room", room);
  };

  return (
    <>
      <div style={{ marginBottom: "50px" }}>
        <input
          type="text"
          value={room}
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        />
        <button onClick={handleJoinRoom}>Join Room</button>
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => {
            //  handleChange(e.target.value)
            setMessage(e.target.value);
          }}
        />
        <button onClick={sendMessage}>Send Message</button>
        <p>Received Message: {receivedMessage}</p>
      </div>
    </>
  );
};

export default Home;
