import {USER_REGISTER} from '../actionType/userActionType';
import axios from 'axios';

export const userRegister = (userData) => {
  // TODO exmaple code remove it
  console.log('[OUT SIDE RETURN ]', userData);
  return async (dispatch, getState) => {
    console.log('[INSDE RETURN] ');
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    console.log('fetchCoins -> response', response.data);
  };
};
