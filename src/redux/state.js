let reRenderEntireTree = () => {
    console.log('State was changed')
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi", likes: '1' },
            { id: 2, message: "Hello", likes: '7' },
            { id: 3, message: "Sorry", likes: '4' },
        ],
        newPostText: "New text"
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Sofa" },
            { id: 2, name: "Ira" },
            { id: 3, name: "Ivan" },
            { id: 4, name: "Vova" },
        ],

        messages: [
            { id: 1, message: "yo" },
            { id: 2, message: "hi" },
            { id: 3, message: "hello" },
            { id: 4, message: "si" },
        ],
    },
    sidebarFriends: {
        nameFriend: [
            { id: 1, name: "Іван", img: 'https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg' },
            { id: 2, name: "Степан", img: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg' },
            { id: 3, name: "Сергій", img: 'https://i.imgur.com/EfHKEaW.jpg' }
        ]

    }
};

export let newAddPost = (postMessage) => {
    let newPost = {
        id: 1,
        message: postMessage,
        likes: '0'
    };
    state.profilePage.posts.push(newPost);
    reRenderEntireTree(state);
};

export const subscribe = (observer) => {
    reRenderEntireTree = observer;
};

export default state;
