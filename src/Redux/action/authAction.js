import axios from '../../axios'

const AuthAction = (isAuthenticated, user) => {
    return {
    type: 'LOGGED_IN',
    isAuthenticated: isAuthenticated,
    user:user
  }}

const AuthStart = (start) => {
  return {
    type:'AUTH_START',
    start:start
  }
}

const loginApi = (isAuthenticated, data) => {
     return dispatch => {
       dispatch(AuthStart(true))
       setTimeout(function(){ 
        dispatch(AuthAction(isAuthenticated, data));
        dispatch(AuthStart(false))
        }, 3000)
      //  axios.post('/Users/login', data)
      //   .then(function (response) {
      //     dispatch(AuthAction(isAuthenticated, response.data));
      //     dispatch(AuthStart(false))
      //   })
      //   .catch(function (error) {
      //     dispatch(AuthAction(false, null));
      //     dispatch(AuthStart(false))
      //   });
  }} 
export{AuthAction, loginApi}
  