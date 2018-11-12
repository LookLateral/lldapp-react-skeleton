

export function signIn (user) {
    return { type: SIGN_IN , user}
}

export function signOut (user) {
    return { type: SIGN_OUT , user}
}

export function signUp (user) {
    return { type: SIGN_UP , user}
}

export function addUser (user) {
    return { type: ADD_USER , user}
}

export function editUser (user) {
    return { type: EDIT_USER , user}
}

export function blockUser (user) {
    return { type: BLOCK_USER , user}
}
