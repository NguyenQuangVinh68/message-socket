import { useState } from "react";

function ChatFooter({ socket }) {

    const [message, setMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (message != '') {
            socket.emit("send_message", {
                id: `${socket.id}${Math.random()}`,
                text: message,
                name: "",
                time: new Date().getTime(),
                socketID: socket.id
            })
            setMessage("")
        }
    }


    return (
        <div className=" container">
            <form onSubmit={handleSendMessage} >
                <div className="d-flex">
                    <input className="form-control" onChange={(e) => setMessage(e.target.value)} value={message}  ></input>
                    <button className="btn btn-primary" >Send</button>
                </div>
            </form>
        </div>

    );
}

export default ChatFooter;