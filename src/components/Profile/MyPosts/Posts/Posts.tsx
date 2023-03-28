import React from "react";
import s from "./Posts.module.css"

const Posts = () => {
    return (
        <div className={s.item}>
            <img
                src="https://gas-kvas.com/uploads/posts/2023-01/1673412247_gas-kvas-com-p-kvadratnie-risunki-anime-1.jpg"
                alt="avatar"/>
            post 1
            <div>
                <span>Like!</span>
            </div>
        </div>
    );
}

export default Posts;