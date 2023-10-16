import { useEffect, useState } from "react";

function ChatBody({ socket }) {

    const [message, setMessage] = useState([])

    useEffect(() => {
        socket.on("send_message", data => {
            console.log(data);
            console.log(data.id);
            setMessage([...message, data])
        })
    }, [socket])

    return (
        <div>
            {message.map(item =>
                (<p key={item.id}>{item.text}</p>)
            )}
        </div>
    );
}

export default ChatBody;