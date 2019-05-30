const initial_state = {
    saved : false
}

const UserFormReducer = (state = initial_state, action) => {
    let result = state
    switch (action.type) {
        case "USER_REQUEST_SUBMIT":
            result = { saved: true }
            break
        default:
            result = state

    }
    return result
}

export default UserFormReducer