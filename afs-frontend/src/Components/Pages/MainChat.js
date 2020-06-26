/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";
import SideNavigation from '../SideNav';


import useLocalState from "../../utils/sessionstorage";
import "../../styles/MainChat.css";

let socket;

const MainChat = () => {
  const [localState, setLocalState] = useLocalState("user-id");

  const name = localState.lastName;

  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [enter, setEnter] = useState("");
  const [view, setView] = useState(false);
  const ENDPOINT = "https://frozen-peak-27970.herokuapp.com";

  // User connects
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("join", { name });
    socket.on("join", ({ joined }) => {
      setEnter(joined);
    });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [name]);

  // Retrieve chats from the database
  useEffect(() => {
    socket.on("output", (data) => {
      setMessages([...messages, data]);
      setView(true);
    });
  }, [messages]);

  const onMessage = (e) => {
    setMsg(e.target.value);
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    const data = {
      name,
      message: msg,
    };
    if (msg) {
      socket.emit("input", data);
      setMsg("");
    }
  };

  return (
    <div className="row">
<div className="col-2 col-lg-4 side">
<SideNavigation  />
</div>

<div className="col-10 col-lg-8 my-5 px-0"> 
<div className="mainchat">
      <div className="chatBox">
        <div className="chat-header">
          <div>
            <h3>AFS Community of Farmers</h3>
            <p>Drop your thoughts, engage with other farmers</p>
          </div>
          <div className="chat-icon">
            <Link to="/dashboard/00">
              <i className="bx bxs-message-square-x" />
            </Link>
          </div>
        </div>

        <ScrollToBottom className="messages">
          {view
            ? messages.map(({ username, message, _id }) => (
                <div key={_id} className="chat-message send">
                  <div className="message-box backgroundLight">
                    <p>
                      {message}
                      <br />
                      <em className="ref">{username}</em>
                    </p>
                  </div>
                </div>
              ))
            : null}
        </ScrollToBottom>

        <div className="chat-input text-center">
          <input
            type="text"
            value={msg}
            onChange={onMessage}
            className="chat-bar"
            placeholder="type something here..."
          />

          <button
            type="submit"
            onKeyPress={onSendMessage}
            onClick={onSendMessage}
            className="chat-button"
          >
            {" "}
            <i className="bx bxs-send send-icon" />
          </button>
        </div>
      </div>
    </div>

</div>
    </div>
  );
};

export default MainChat;
