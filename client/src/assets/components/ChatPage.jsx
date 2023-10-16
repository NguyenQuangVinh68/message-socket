import { useEffect, useState } from "react";
import ChatBar from "./ChatBar";
import ChatMain from "./ChatMain";


function ChatPage({ socket }) {
    // const handleChangeConversation = (idUser) => {
    //     setCurrentConversation(idUser)
    // }


    return (
        <div className="container w-100">
            <div className="d-flex">
                <div className="w-25 bg-secondary">
                    <ChatBar />
                </div>
                <div className="w-75">
                    <ChatMain socket={socket} />
                </div>
            </div>
        </div>
    );
}

export default ChatPage;