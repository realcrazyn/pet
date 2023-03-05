import { AppDispatch } from '../..'
import { httpAuthLogin, httpAuthRegister } from '../../../http/http'
import { IUser } from '../../../models/IUser'
import {
  AuthActionsEnum,
  SetAuthAction,
  SetErrorAction,
  SetLoadingAction,
  SetUserAction,
} from './types'
import axios from 'axios'

export const AuthActionCreators = {
  setAuthUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setAuthIsLoading: (payload: boolean): SetLoadingAction => ({
    type: AuthActionsEnum.SET_LOADING,
    payload,
  }),
  setIsAuth: (payload: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload,
  }),
  setAuthError: (payload: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload,
  }),
  authLogin:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setAuthIsLoading(true))
        const { data } = await axios.post(httpAuthLogin, {
          username,
          password,
        })
        if (data) {
          localStorage.setItem('token', data.token)
          dispatch(AuthActionCreators.setAuthUser(data.user))
          dispatch(AuthActionCreators.setIsAuth(true))
        } else {
          dispatch(
            AuthActionCreators.setAuthError('Неправильный логин или пароль')
          )
        }
        dispatch(AuthActionCreators.setAuthIsLoading(false))
      } catch (e) {
        dispatch(AuthActionCreators.setAuthError('Error'))
      }
    },
  authRegister:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setAuthIsLoading(true))
        const { data } = await axios.post(httpAuthRegister, {
          username,
          password,
        })
        if (data) {
          localStorage.setItem('token', data.token)
          dispatch(AuthActionCreators.setAuthUser(data.user))
          dispatch(AuthActionCreators.setIsAuth(true))
        } else {
          dispatch(
            AuthActionCreators.setAuthError('Неправильный логин или пароль')
          )
        }
        dispatch(AuthActionCreators.setAuthIsLoading(false))
      } catch (e) {
        dispatch(AuthActionCreators.setAuthError('Error'))
      }
    },
  authLogout: () => async (dispatch: AppDispatch) => {
    // const { data } = await axios.get(
    //   'нужен ли здесь запрос на сервак об окончании работы?'
    // )

    //если нужен то try catch
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
    dispatch(AuthActionCreators.setAuthUser({} as IUser))
    dispatch(AuthActionCreators.setIsAuth(false))
  },
}
