import * as APIUtil from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const signup = user => dispatch => (
  APIUtil.fetchSignUp(user).then(
    user => (
    dispatch(receiveCurrentUser(user))),
    err => (
      dispatch(receiveErrors(err.responseJSON)))
  )
)

export const signin = user => dispatch => (
  APIUtil.fetchSignIn(user).then(
    user => (
    dispatch(receiveCurrentUser(user))),
    err => (
      dispatch(receiveErrors(err.responseJSON)))
  )
)
export const logout = () => dispatch => (
  APIUtil.fetchLogOut().then(user => (
    dispatch(logoutCurrentUser())
  ))
)

export const updateUser = (user, userId) => dispatch => (
  APIUtil.updateUser(user, userId).then( user => (
    dispatch(receiveCurrentUser(user))
  ))
)
