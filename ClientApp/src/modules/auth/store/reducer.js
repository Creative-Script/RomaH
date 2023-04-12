export function reducer(state, action) {
  switch (action.type) {
    case "UserLoadingChange":
      return { isLoading: action.payload };
    case "UserUpdate":
      return { contact: { ...state.contact, ...action.payload } };
    case "stateUpdate":
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}

export function viewReducer(state, action) {
  switch (action.type) {
    case "UserLoadingChange":
      return { isLoading: action.payload };
    case "UserView":
      return { contact: { ...state.contact, ...action.payload } };
    case "stateUpdate":
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}
