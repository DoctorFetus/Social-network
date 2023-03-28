import React from "react";
import s from "./MyPosts.module.css"
import Posts from "./Posts/Posts";

const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div>
                    New post
                </div>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
            </div>
    );
}

export default MyPosts;