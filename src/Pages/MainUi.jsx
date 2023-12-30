import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import WelcomeContent from '../Components/WelcomeContent'
import ChatBox from '../Components/ChatBox'
import InputCommand from '../Components/InputCommendComp'

const MainUi = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handlefocus = () => {
    setIsVisible(true)
  }

  // Chat gpt Api key
  const API_KEY = "add your api key"

  // gpt code

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]);

  const handleSubmit = async () => {
    const prompt = {
      role: "user",
      content: input,
    };

    setMessages([...messages, prompt]);

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [...messages, prompt],
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        const res = data.choices[0].message.content;
        setMessages((messages) => [
          ...messages,
          {
            role: "assistant",
            content: res,
          },
        ]);
        setHistory((history) => [...history, { question: input, answer: res }]);
        setInput("");
      });
  };

  const clear = () => {
    setMessages([]);
    setHistory([]);
  };


  return (

    <div className="App">
      <div className="Column">
        <h3 className="Title">Chat Messages</h3>
        <div className="Content">
          {messages.map((el, i) => {
            return (
              <>
              {/* <Message key={i} role={el.role} content={el.content} /> */}
              <div key={i}>
              {el.content}
              </div>
              <div>
              {el.content}
              </div>
            </>
            );
          })}
        </div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onClick={input ? handleSubmit : undefined}
        />
      </div>
      <div className="Column">
        <h3 className="Title">History</h3>
        
      </div>
    </div>
    // <div className="flex h-screen ">
    //   <Sidebar />
    //   <div className="flex-1 p-4">
    //     {/* Your main content goes here */}
    //     {isVisible ? null : <WelcomeContent/>}

        
        
    //     {/* 
    //      */}
    //      {messages.map((el, i) => {
    //         return (
    //           <>
    //           {/* <Message key={i} role={el.role} content={el.content} /> */}
    //           <div key={i}>
    //           {el.content}
    //           </div>
    //           </>
    //         );
    //       })}
        
    //     <InputCommand Inputfocus={handlefocus} />
    //   </div>
    // </div>
  )
}

export default MainUi
