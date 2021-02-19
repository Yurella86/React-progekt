import React from "react";
import s from './Messages.module.css';

const Messages = () => {
    return (
        <div>
            <div className={s.heder}>
                Message
            </div>

            <div className={s.dialogs}>
                <div className={s.dialogitems}>
                    <div className={s.dialog}>
                        Sofa
                    </div>
                    <div className={s.dialog}>
                        Vera
                    </div>
                    <div className={s.dialog}>
                        Zina
                    </div>
                    <div className={s.dialog}>
                        Pasha
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.dialog}>
                        hello
                    </div>
                    <div className={s.dialog}>
                        fack
                    </div>
                    <div className={s.dialog}>
                        Yo
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;