import React from "react";
import s from "./Posts.module.css"


export type PostsType = {
    id: number,
    message: string,
    likeCounter: number
}

const Posts: React.FC<PostsType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://u.kanobu.ru/editor/images/48/a2bc4eea-3344-45d1-bf53-4e6d4629576b.webp"
                alt="avatar"/>
            {props.message}
            <div>
                <span>Like! {props.likeCounter}</span>
            </div>
        </div>
    );
}

export default Posts;