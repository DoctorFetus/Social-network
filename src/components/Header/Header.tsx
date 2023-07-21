import React from "react";
import s from "./Header.module.css"
import logo from "../../assets/images/logo.svg"
import {HeaderPropsType} from "./HeaderContainer";
import {NavLink} from "react-router-dom";

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div><img
                className={s.logo}
                src={logo}
                alt="logo"/></div>
            <div>
                {props.isAuth
                    ? props.login
                    : <NavLink className={s.login} to={"/login"}>Login In</NavLink>}
            </div>
            <div>
                {props.isAuth
                ? <button onClick={props.logout}>logout</button>
                : false
                }
            </div>

        </header>
    );
}

export default Header;