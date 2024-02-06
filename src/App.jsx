import "./App.css";
import { useState } from "react";

function App() {
  let [Message,setMessage]=useState("Greeting Message")
  return (
    <div className="App">
      <div className="greeting-container">{Message}</div>
      <div className="buttons">
        <button onClick={()=>{
          setMessage( Message = "สวัสดี");
        }}
        >
          สวัสดี!
        </button>
        <button onClick={()=>{
          setMessage( Message = "Hi!");
        }}>
          Hi!
        </button>
        <button onClick={()=>{
          setMessage( Message = "你好");
        }}>
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
