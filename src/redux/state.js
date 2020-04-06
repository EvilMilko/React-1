const ADD_POST = "ADD-POST"

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const ADD_MESSAGE = "ADD-MESSAGE"

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

let store = {

    _state: {

        profilePage: { //Профиль пользователя
            postsData: [ //Посты в профиле
                { id: 2, message: "Bleat", likescount: 1 },
                { id: 1, message: "First post", likescount: 5 },

            ],

            newPostTextData: ''

        },

        dialogsPage: { //Диалоги
            dialogsData: [ //Контакты в диалогах
                { id: 1, name: "Dimych1gfkdasdsadasdas1561456456456" },
                { id: 2, name: "Dimych2" },
                { id: 3, name: "Dimych3" },
                { id: 4, name: "Dimych4" },
                { id: 5, name: "Dimych5" },
            ],

            messagesData: [ //Сообщения
                { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a nibh purus. Donec lacinia commodo tellus, ut rhoncus nunc ornare at. Suspendisse eu diam purus. Duis ac condimentum purus. Phasellus id accumsan erat. Donec id pellentesque neque. Praesent sodales massa nec magna sollicitudin vulputate. Mauris porta porttitor porta. Aliquam gravida orci neque. Vivamus in tristique mauris. Nam posuere commodo cursus. Fusce massa purus, tincidunt sagittis turpis quis, scelerisque sagittis nibh. Nulla lectus dui, accumsan vel dolor id, vulputate accumsan ante. ' },
                { id: 2, message: 'text2' },
                { id: 3, message: 'text3' },
                { id: 4, message: 'text4' },
                { id: 5, message: 'text5' },
            ],

            newMessageTextData: ''

        },

        navBar: {
            sideBarData: [ //Список друзей (краткий)
                { id: 1, name: "12313" },
                { id: 2, name: "Dimych22222" },
                { id: 3, name: "Dimych3" },
                { id: 4, name: "Dimych4" },
                { id: 5, name: "Dimych5" },
            ]
        }


    },

    _callSubscriber() {
        console.log("state change")
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        switch (action.type) {
            ///Добавление поста в профиль
            case ADD_POST:
                if (this._state.profilePage.newPostTextData != '') {
                    let newPost = {
                        id: 5,
                        message: this._state.profilePage.newPostTextData,
                        likescount: 0
                    };

                    this._state.profilePage.postsData.push(newPost);
                    this._state.profilePage.newPostTextData = "";
                    this._callSubscriber(this._state);

                } else
                    alert('Введите текст!')

                break;

            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostTextData = action.newText;

                this._callSubscriber(this._state);

                break;
            /////////////////////////////////////

            //Отправка сообщения в диалогах
            case ADD_MESSAGE:
                if (this._state.dialogsPage.newMessageTextData != '') {
                    let newMessage = {
                        id: 6,
                        message: this._state.dialogsPage.newMessageTextData,

                    };
                    this._state.dialogsPage.messagesData.push(newMessage);
                    this._state.dialogsPage.newMessageTextData = "";
                    this._callSubscriber(this._state);

                } else
                    alert('Введите текст!')
                break;

            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageTextData = action.newText;

                this._callSubscriber(this._state);

                break;


            /////////////////////////////////////
        }
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    })

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) =>
    ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    })

export default store

window.store = store