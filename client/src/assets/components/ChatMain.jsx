import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

function ChatMain({ socket }) {
    return (
        <>
            <ChatBody socket={socket} />
            <ChatFooter socket={socket} />
        </>
    );
}

export default ChatMain;