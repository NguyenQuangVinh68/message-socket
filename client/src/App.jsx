import io from "socket.io-client";
import { useState, useEffect } from 'react'

const socket = io.connect("http://localhost:3000");
function App() {

  const [message, setMessage] = useState("")
  const [messageReceived, setMessageReceived] = useState("");

  const sendMessage = () => {
    console.log(message);
    socket.emit("send_message", { message })
  }

  useEffect(() => {
    socket.on("recieve_smessage", data => {
      console.log(data);
      setMessageReceived(data.message)
    })
  }, [socket])

  return (
    <div className='w-25 mx-auto mt-5'>
      <input className='form-control' onChange={ev => setMessage(ev.target.value)} placeholder='enter your message' />
      <button className='btn btn-primary mt-2' onClick={sendMessage} >Send</button>
      <p >message: {messageReceived}</p>
    </div>

  )
}
export default App
