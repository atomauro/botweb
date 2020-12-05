import React, { useContext } from 'react';
import { 
  AccessTokenContext, 
  UserNameContext,
  RoleContext 
} from '../../App';
import AccessTokenReducer from './AccessToken';
import UserNameReducer from './UserName';
import RoleReducer from './Role';

export { AccessTokenReducer };
export { UserNameReducer };
export { RoleReducer };

export default ({ state }) => {
  const { accessTokenDispatch, accessTokenState } = useContext(
    AccessTokenContext
  );
  const { userNameDispatch, userNameState } = useContext(
    UserNameContext
  );
  const { RoleDispatch, RoleState } = useContext(
    RoleContext
  );

  const STATE= {
    AccessToken: {
      state: accessTokenState,
      dispatch: accessTokenDispatch
    },
    userName: {
      state: userNameState,
      dispatch: userNameDispatch
    },
    Role: {
      state: RoleState,
      dispatch: RoleDispatch
    }
  };

  Object.keys(state).forEach((value) => {
    console.log('value', value);
    if (!localStorage.getItem(value)) {
      console.log(`Storing no saved value ${value},${String(state[value])}...`);
      localStorage.setItem(value, String(state[value]));
    } else if (localStorage.getItem(value) !== STATE[value].state) {
      STATE[value].dispatch({
        type: 'SET',
        payload: localStorage.getItem(value)
      });
    }
  });
  return <></>;
};
