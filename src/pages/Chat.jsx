import React, { useEffect, useState } from 'react'
import { Input, Button } from "@material-tailwind/react";
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";

  import io from 'socket.io-client';

const socket = io.connect('http://localhost:8000');
function Chat() {
    const [message, setMessage] = React.useState("");

    // const onChange = ({ target }) => setMessage(target.value);

    const [messages, setMessages] = useState([]);


    // useEffect(() => {
    //     // Listen for new messages from the server
    
    //     socket.on('newMessage', (messageData) => {
    //         console.log(messageData);
    //     //   setMessages(messageData);
    //     });
    
    //     // return () => {
    //     //   socket.disconnect();
    //     // };
    //   }, [messages]);
    
    //   const sendMessage = () => {
    //     // Emit the message to the server
    //     console.log(message);
    //     socket.emit('sendMessage', { text: message,user_id:"6609719397af3b3096429c7b" });
    //     setMessage('');
    //   };
    return(<>
        <div>
          <div className='container mx-auto px-4'>
  
            <section className='flex flex-col items-center justify-center '>
            <div className="relative flex w-full max-w-[40rem]">

                <List>
                {messages.map((msg, index) => (
                    <div key={index}>
                                <ListItem>
                                    <div className='flex flex-row items-center justify-center '>
                                            <ListItemPrefix>
                                                <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
                                            </ListItemPrefix>
                                    <div>
                                    <Typography variant="h6" color="blue-gray">
                                                    {/* {msg.user_id.email} */}
                                    </Typography>
                                    <Typography variant="small" color="gray" className="font-normal">
                                                    {/* {msg.text} */}
                                    </Typography>
                                    </div>
                                    </div>
                                                
                                </ListItem>
                    </div>
                    
        ))}
                    
                </List>
                
            </div>

        
            </section>
            <section className='flex flex-col items-center justify-center '>
              
            <div className="relative flex w-full max-w-[40rem]">
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
            
          </div>
        </div>
      </>)
}

export default Chat;