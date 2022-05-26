const initialState = {};
type ResetPassReducerType = typeof initialState;
export const resetPassReducer = (state: ResetPassReducerType = initialState, action: ActionType) => {
  switch (action.type) {
    case 'resetPass/DEFAULT':
      return state;
    default:
      return state;
  }
};
export const defaultResetPassAC = () => ({ type: 'resetPass/DEFAULT' } as const);
type ActionType = ReturnType<typeof defaultResetPassAC>;
