import React, { useEffect, useRef, useState } from 'react'
import { Input, Button } from "@material-tailwind/react";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import ChatBubbleRight from '../components/ChatBubbleRight';
import ChatBubbleLeft from '../components/ChatBubbleLeft';

import io from 'socket.io-client';
import axios from 'axios';
const user_id = localStorage.getItem('user_id');

const socket = io.connect('http://localhost:8000');
function Chat() {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = useState([]);
  const [activeMessages, setActiveMessages] = useState([]);
  const msgRef = useRef(null)

  useEffect(() => {
    socket.on('newMessage', (messageData) => {
      console.log(messageData);
      setActiveMessages([...activeMessages, messageData])
    });
    msgRef.current?.scrollIntoView()
  }, [activeMessages]);

  useEffect(() => {
    // Listen for new messages from the server
    axios.get('/api/message/allmessages')
      .then(res => {
        console.log(res.data.data.chats);
        setMessages(res.data.data.chats);
        msgRef.current?.scrollIntoView()
      })
      .catch(err => {
        console.log(err);
      })

    // return () => {
    //   socket.disconnect();
    // };

  }, []);




  const sendMessage = () => {
    // Emit the message to the server
    const user_id = localStorage.getItem('user_id');
    console.log(message);
    socket.emit('sendMessage', { text: message, user_id: user_id });
    setMessage('');
  };
  return (<>
    <div>
      <div className='container mx-auto px-4'>

        <section className='flex flex-col items-center justify-center '>
          <div id='chat-feed' className="relative flex flex-col w-full rounded-md h-96 bg-gray-100 overflow-y-auto px-4 py-4">

            {
              messages.length != 0 ? <>
                {
                  messages.map(msg => {
                    if (msg.user_id?._id === user_id) {
                      return (<ChatBubbleLeft key={msg._id} message={msg.messagedata} />)
                    }
                    else {
                      return (<ChatBubbleRight key={msg._id} message={msg.messagedata} />)
                    }
                  })
                }
              </> : <>
                <div>
                  No previous messages
                </div>
              </>
            }
            {
              activeMessages.length != 0 ? <>
                {
                  activeMessages.map((msg, i) => {
                    if (msg.user_id === user_id) {
                      return (<ChatBubbleLeft key={i} message={msg.text} />)
                    }
                    else {
                      return (<ChatBubbleRight key={i} message={msg.text} />)
                    }
                  })
                }
              </> : <>
                <div>
                  No Active messages
                </div>
              </>
            }




            <div ref={msgRef}></div>

          </div>


        </section>
        <section className='flex flex-col items-center justify-center mt-8'>

          <div className="relative flex w-full">
            <Input
              type="email"
              label="Enter Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              color={message ? "gray" : "blue-gray"}
              disabled={!message}
              className="!absolute right-1 top-1 rounded"
              onClick={sendMessage}
            >
              Send
            </Button>
          </div>

        </section>

      </div >
    </div >
  </>)
}

export default Chat;