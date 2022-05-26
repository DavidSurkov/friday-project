import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { registrationReducer } from './reducers/registration-reducer';
import { profileReducer } from './reducers/profile_reducer';
import { loginReducer } from './reducers/login_reducer';
import { resetPassReducer } from './reducers/resetPass_reducer';
import { setNewPassReducer } from './reducers/setNewPass_reducer';

export const rootReducer = combineReducers({
  registrationData: registrationReducer,
  profileData: profileReducer,
  loginData: loginReducer,
  resetPassData: resetPassReducer,
  setNewPassData: setNewPassReducer,
});
export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
