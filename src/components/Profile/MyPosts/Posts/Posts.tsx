import React from "react";
import s from "./Posts.module.css"


type PostsType = {
    message: string,
    likeCounter: number
}

const Posts: React.FC<PostsType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://gas-kvas.com/uploads/posts/2023-01/1673412247_gas-kvas-com-p-kvadratnie-risunki-anime-1.jpg"
                alt="avatar"/>
            {props.message}
            <div>
                <span>Like! {props.likeCounter}</span>
            </div>
        </div>
    );
}

export default Posts;