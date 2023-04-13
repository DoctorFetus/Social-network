import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {FriendType} from "./Friends/Friend/Friend";

type NavbarType = {
    state: {
        friends: Array<FriendType>
    }
}

const Navbar: React.FC<NavbarType> = (props) => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink className={s.item} activeClassName={s.active} to="../profile">Profile</NavLink>
            </div>
            <div>
                <NavLink className={s.item} activeClassName={s.active} to="../dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink className={s.item} activeClassName={s.active} to="../news">News</NavLink>
            </div>
            <div>
                <NavLink className={s.item} activeClassName={s.active} to="../music">Music</NavLink>
            </div>
            <div>
                <NavLink className={s.item} activeClassName={s.active} to="../settings">Settings</NavLink>
            </div>
            <Friends friends={props.state.friends}/>
        </nav>
    );
}

export default Navbar;