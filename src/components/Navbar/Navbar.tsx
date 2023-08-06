import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink className={s.item} activeClassName={s.active} to="../profile">Profile</NavLink>
            </div>
            <div>
                <NavLink className={s.item} activeClassName={s.active} to="../dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink className={s.item} activeClassName={s.active} to="../users">Users</NavLink>
            </div>
            <div>
                <NavLink className={s.item} activeClassName={s.active} to="../settings">Settings</NavLink>
            </div>
            <FriendsContainer/>
        </nav>
    );
}

export default Navbar;