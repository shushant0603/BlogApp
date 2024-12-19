import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Chatpage = () => {
    const [chats,setChats]=useState([]);
    const fetchChats=async()=>{
        try {
            const { data } = await axios.get("/api/chat");
            setChats(data); // Store the data in state
          } catch (error) {
            console.error("Error fetching chats:", error);
          }
    }
    useEffect(()=>{
       fetchChats();
    },[])
  return (
    <div>
        <h1>Chat List</h1>
            {chats.map(chat => (
                <div key={chat._id}>{chat.chatName}</div> // Step 3: Render chat names
            ))}
    </div>
  )
}

export default Chatpage
