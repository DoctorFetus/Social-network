import profileReducer, {addPost, deletePost, ProfilePageType} from "../../redux/redusers/profile-reducer";
import {v1} from "uuid";
import posts from "../../components/Profile/MyPosts/Posts/Posts";

let initialState: ProfilePageType

beforeEach(() => {
    initialState = {
        posts: [
            {id: v1(), message: "Hi, how are you?", likeCounter: 15},
            {id: v1(), message: "I am dead inside", likeCounter: 25}
        ],
        profile: null,
        status: null
    }
})

test("New post should be added", () => {

    const action = addPost("I love my girlfriend")
    const newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(3)
    expect(newState.posts[0].message).toBe("I love my girlfriend")
})

test("Post should be deleted", () => {
    const action = deletePost(initialState.posts[0].id)
    const newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(1)

})