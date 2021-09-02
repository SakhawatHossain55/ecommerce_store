import { AuthAction } from 'redux/actions/authAction';
import { ActionType } from 'redux/actionType';
import { IAuthData } from 'type';

const authReducer = (
  state: IAuthData | null = null,
  action: AuthAction
): IAuthData | null => {
  switch (action.type) {
    case ActionType.LOGIN:
      return action.payload;
    case ActionType.LOGOUT:
      return null;

    default:
      return state;
  }
};

export default authReducer;
