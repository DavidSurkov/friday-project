import { applyMiddleware, combineReducers, createStore } from 'redux';
import { registrationReducer } from './reducers/registration-reducer';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
  registrationData: registrationReducer,
});
export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
