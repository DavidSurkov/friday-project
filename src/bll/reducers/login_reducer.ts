const initialState = {};
type LoginReducerType = typeof initialState;
export const loginReducer = (state: LoginReducerType = initialState, action: ActionType) => {
  switch (action.type) {
    case 'login/DEFAULT':
      return state;
    default:
      return state;
  }
};
export const defaultLoginAC = () => ({ type: 'login/DEFAULT' } as const);
type ActionType = ReturnType<typeof defaultLoginAC>;
