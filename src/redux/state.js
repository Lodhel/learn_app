 

let state = {
    dialogs: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Max" },
        { id: 3, name: "Daria" },
    ],
    messages: [
        { id: 1, message: "Hi" },
    ],
    posts: [
        {id: 1, post: 'Hey!)'}
    ]
}

export let addPost = (MessagePost) => {
    let newPost = { id: 2, post: MessagePost }
    state.posts.push(newPost)
}

export default state;