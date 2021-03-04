
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import MessagesItems from "./Message/Message";


const Dialogs = (props) => {

    let DialogElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} />);
    let MessadgeElements = props.dialogsPage.messages.map(m => <MessagesItems message={m.message} />);

    let newMessage = React.createRef();
    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    };

    debugger;
    return (

        <div>
            <div className={s.heder}>
                Message
            </div>

            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {DialogElements}
                </div>
                <div className={s.messages}>
                    {MessadgeElements}
                </div>
            </div>
            <div>
                <textarea ref={newMessage} name="" id="" cols="60" rows="5"></textarea>
                <button onClick={addMessage} >add</button>
            </div>
        </div>
    );
}

export default Dialogs;