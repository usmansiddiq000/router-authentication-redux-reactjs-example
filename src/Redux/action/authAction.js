
exports.AuthAction = (isAuthenticated) => {
    return {
    type: 'LOGGED_IN',
    isAuthenticated: isAuthenticated,
  }}

const AuthStart = (start) => {
  return {
    type:'AUTH_START',
    start:start
  }
}

exports.loginApi = (isAuthenticated) => {
     return dispatch => {
       dispatch(AuthStart(true))
       setTimeout(() => {
         dispatch(exports.AuthAction(isAuthenticated));
         dispatch(AuthStart(false))
       }, 2500);
  }} 

  