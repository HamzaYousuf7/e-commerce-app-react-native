import {USER_REGISTER} from '../actionType/userActionType';

// API imp
import axios from '../../utils/axios';
import EndPoints from '../../constant/EndPoints';

export const userRegister = (userData) => {
  return {
    type: USER_REGISTER,
  };
  // TODO exmaple code remove it
  // console.log('[OUT SIDE RETURN ]', userData);
  // return async (dispatch, getState) => {
  //   console.log('[INSDE RETURN] ');
  //   const response = await axios.get(EndPoints.TEST);
  //   console.log('fetchCoins -> response', response.data);
  // };
};
