import { AppDispatch } from '../..'
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
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setIsLoading: (payload: boolean): SetLoadingAction => ({
    type: AuthActionsEnum.SET_LOADING,
    payload,
  }),
  setIsAuth: (payload: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true))
        const { data } = await axios.post(
          'api/user/login /////////адрес запроса/////',
          {
            username,
            password,
          }
        )
        if (data) {
          localStorage.setItem('auth', 'true')
          localStorage.setItem('username', data.user.username)
          dispatch(AuthActionCreators.setUser(data.user))
          dispatch(AuthActionCreators.setIsAuth(true))
        } else {
          dispatch(AuthActionCreators.setError('Неправильный логин или пароль'))
        }
        dispatch(AuthActionCreators.setIsLoading(false))
      } catch (e) {
        dispatch(AuthActionCreators.setError('Error'))
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    const { data } = await axios.get(
      'нужен ли здесь запрос на сервак об окончании работы?'
    )

    //если нужен то try catch
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
    dispatch(AuthActionCreators.setUser({} as IUser))
    dispatch(AuthActionCreators.setIsAuth(false))
  },
}
