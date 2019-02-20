
exports.AuthAction = (isAuthenticated, logintype) => {
    return {
    type: logintype,
    isAuthenticated: isAuthenticated,
  }}