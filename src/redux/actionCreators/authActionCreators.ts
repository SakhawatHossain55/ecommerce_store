import { Dispatch } from 'react';
import { AuthAction } from 'redux/actions/authAction';
import { ActionType } from 'redux/actionType';
import AuthService from 'services/AuthService';

export const login = (payload: { username: string; password: string }) => {
  return (dispatch: Dispatch<AuthAction>) => {
    AuthService.login(payload)
      .then((data) => {
        dispatch({
          type: ActionType.LOGIN,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionType.LOGIN,
          payload: err,
        });
      });
  };
};

export const logout = () => {
  return {
    type: ActionType.LOGOUT,
  };
};
