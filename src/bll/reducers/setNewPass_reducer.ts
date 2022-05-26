const initialState = {};
type SetNewPassReducerType = typeof initialState;
export const setNewPassReducer = (state: SetNewPassReducerType = initialState, action: ActionType) => {
  switch (action.type) {
    case 'setNewPass/DEFAULT':
      return state;
    default:
      return state;
  }
};
export const defaultSetNewPassAC = () => ({ type: 'setNewPass/DEFAULT' } as const);
type ActionType = ReturnType<typeof defaultSetNewPassAC>;
