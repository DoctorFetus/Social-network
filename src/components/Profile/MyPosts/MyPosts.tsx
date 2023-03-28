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
                <Posts message="Hi, how are you?" likeCounter={15}/>
                <Posts message="I am dead inside" likeCounter={25}/>
            </div>
    );
}

export default MyPosts;