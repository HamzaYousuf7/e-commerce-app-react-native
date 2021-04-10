// local imp
import {USER_REGISTER} from '../actionType/userActionType';

// init state
const initState = {
  isLogin: false,
  user: null,
  isLoading: false,
};

export default reducer = (state = initState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
