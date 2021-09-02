import { IAuthData } from 'type';
import { ActionType } from '../actionType';

interface loginAction {
  type: ActionType.LOGIN;
  payload: IAuthData;
}

interface logoutAction {
  type: ActionType.LOGOUT;
  payload: number;
}

export type AuthAction = loginAction | logoutAction;
