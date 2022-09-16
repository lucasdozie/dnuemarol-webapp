import UPDATE_DATA from "../action/actiontype";
const initialState = {
  fullname: "",
  email: "",
  password: "",
};
function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        fullname: action.fullname,
        email: action.email,
        password: action.password,
      };
    default:
      return { ...state };
  }
}
export default UsersReducer;
