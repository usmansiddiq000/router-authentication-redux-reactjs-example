
const auth = {
    isAuthenticated : false
}

const AuthReducer = (state = auth, action) => {
    debugger
    switch(action.type){
        case 'loggedin':
             return {
                 ...state,
                 isAuthenticated : action.isAuthenticated
             }
        case 'loggedout':
             return {
                ...state,
                isAuthenticated : action.isAuthenticated
             }
        default:
             return state
    }
   
}

export default AuthReducer;