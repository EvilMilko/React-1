let rerenderEntireTree = () => {
    console.log("state change")
}

let state = {

    profilePage: {
        postsData: [
            { id: 2, message: "Bleat", likescount: 1 },
            { id: 1, message: "First post", likescount: 5 },

        ],

        newPostTextData: 'Текст Текст Текст Текст Текст'

    },

    dialogsPage: {
        dialogsData: [
            { id: 1, name: "Dimych1gfkdasdsadasdas1561456456456" },
            { id: 2, name: "Dimych2" },
            { id: 3, name: "Dimych3" },
            { id: 4, name: "Dimych4" },
            { id: 5, name: "Dimych5" },
        ],

        messagesData: [
            { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a nibh purus. Donec lacinia commodo tellus, ut rhoncus nunc ornare at. Suspendisse eu diam purus. Duis ac condimentum purus. Phasellus id accumsan erat. Donec id pellentesque neque. Praesent sodales massa nec magna sollicitudin vulputate. Mauris porta porttitor porta. Aliquam gravida orci neque. Vivamus in tristique mauris. Nam posuere commodo cursus. Fusce massa purus, tincidunt sagittis turpis quis, scelerisque sagittis nibh. Nulla lectus dui, accumsan vel dolor id, vulputate accumsan ante. ' },
            { id: 2, message: 'text2' },
            { id: 3, message: 'text3' },
            { id: 4, message: 'text4' },
            { id: 5, message: 'text5' },
        ]
    },

    navBar: {
        sideBarData: [
            { id: 1, name: "12313" },
            { id: 2, name: "Dimych22222" },
            { id: 3, name: "Dimych3" },
            { id: 4, name: "Dimych4" },
            { id: 5, name: "Dimych5" },
        ]
    }




}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostTextData,
        likescount: 0
    };
    
    updateNewPostText('');
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostTextData = newText;
    rerenderEntireTree(state);
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state