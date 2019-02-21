
const auth = {
    isAuthenticated : false,
    start : false
}

const AuthReducer = (state = auth, action) => {
    switch(action.type){
        case 'LOGGED_IN':
             return {
                 ...state,
                 isAuthenticated : action.isAuthenticated
             }
        default:
             return {
                 ...state
             }
    }
}

const AuthStart = (state = auth, action) => {
    switch(action.type) {
        case 'AUTH_START':
            return{
                ...state,
                start : action.start
            }
        default:
        return {
            ...state
        }
    }
}


export  { AuthReducer, AuthStart };