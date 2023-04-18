import React from "react";
import s from "./MyPosts.module.css"
import Posts, {PostsType} from "./Posts/Posts";

type PostsProps = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

const MyPosts: React.FC<PostsProps> = (props) => {

    let postsElements = props.posts.map(p => <Posts message={p.message} likeCounter={p.likeCounter} id={p.id}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const AddPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    return (
            <div className={s.container}>
                <h3>My posts</h3>
                <div>
                    <textarea ref={newPostElement}></textarea>
                    <button onClick={AddPost}>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={s.newPosts}>
                    New post
                </div>
                <div className={s.posts}>
                {postsElements}
                </div>
            </div>
    );
}

export default MyPosts;