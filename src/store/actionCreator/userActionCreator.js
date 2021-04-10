import {USER_REGISTER} from '../actionType/userActionType';

export const userRegister = (userData) => {
  return {
    type: USER_REGISTER,
    userData: userData,
  };
};
