const initialState = {};
type ProfileReducerType = typeof initialState;
export const profileReducer = (state: ProfileReducerType = initialState, action: ActionType) => {
  switch (action.type) {
    case 'profile/DEFAULT':
      return state;
    default:
      return state;
  }
};
export const defaultProfileAC = () => ({ type: 'profile/DEFAULT' } as const);
type ActionType = ReturnType<typeof defaultProfileAC>;
