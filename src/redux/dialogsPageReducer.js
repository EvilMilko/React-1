const ADD_MESSAGE = "ADD-MESSAGE"

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

const dialogsPageReducer = (state, action) => {

    switch (action.type) {
        //Отправка сообщения в диалогах
        case ADD_MESSAGE:
            if (state.newMessageTextData != '') {
                let newMessage = {
                    id: 6,
                    message: state.newMessageTextData,

                };
                state.messagesData.push(newMessage);
                state.newMessageTextData = "";
            } else
                alert('Введите текст!')
            break;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageTextData = action.newText;
            break;
        default: return state

    }

    return state;
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) =>
    ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    })

export default dialogsPageReducer