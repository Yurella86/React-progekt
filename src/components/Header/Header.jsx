import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.head}>
            <div className={s.menu}>
                <div>
                    <span>My</span> first <span>project!</span>
                </div>
                <button>log in</button>
            </div>
        </div>
    );
}

export default Header;