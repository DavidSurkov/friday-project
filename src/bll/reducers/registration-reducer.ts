const initialState = {};
type RegistrationReducerType = typeof initialState;
export const registrationReducer = (state: RegistrationReducerType = initialState, action: ActionType) => {
  switch (action.type) {
    case 'registration/DEFAULT':
      return state;
    default:
      return state;
  }
};
export const defaultRegAC = () => ({ type: 'registration/DEFAULT' } as const);
type ActionType = ReturnType<typeof defaultRegAC>;
