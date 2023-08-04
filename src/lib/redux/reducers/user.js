export default function user(state = { current: null, error: null }, { type, payload }) {
    switch (type) {
        case "LOGIN":
            return payload;

        case "LOGOUT":
            return { current: null, error: null };

        case "ERROR_AUTH":
            return payload;
        case "UPDATE_USER_PROFILE":
            return {
                ...state,
                current: {
                    ...state.current,
                    ...payload.details 
                }
            }

        default:
            return state
    }
}
export function handleLogin(user) {
    return {
        type: "LOGIN",
        payload: { current: user, error: null }
    }
}
export function handleLogout() {
    return {
        type: "LOGOUT"
    }
}
export function handleErrors(err) {
    return {
        type: "ERROR_AUTH",
        payload: { current: null, error: null }
    }
}
export function updateUserProfile(details) {
    return {
        type: "UPDATE_USER_PROFILE",
        payload: { details }
    }
}