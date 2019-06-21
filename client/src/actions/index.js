import { API } from '../middleware/api'

// export const USER_LOGIN = 'USER_LOGIN'
export const SET_USER = 'SET_USER'

export const userRegister = (email, password) => ({
  type: API,
  payload: {
    url: '/users',
    method: 'POST',
    data: { user: { email, password } },
    onSuccess: setUser
  }
})

export const setUser = user => ({
  type: SET_USER,
  payload: user
})
