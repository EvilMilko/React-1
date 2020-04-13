const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profilePageReducer = (state, action) => {

    switch (action.type) {
        ///Добавление поста в профиль
        case ADD_POST:
            if (state.newPostTextData != '') {
                let newPost = {
                    id: 5,
                    message: state.newPostTextData,
                    likescount: 0
                };

                state.postsData.push(newPost);
                state.newPostTextData = "";

            } else
                alert('Введите текст!')
            break;

        case UPDATE_NEW_POST_TEXT:
            state.newPostTextData = action.newText;
            break;
        default: return state
    }

    return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    })

export default profilePageReducer