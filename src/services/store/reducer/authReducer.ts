import {
  USER_FETCH_SUCCESS,
  IUserFetchSuccess,
  USER_FETCH_ERROR,
  IUserFetchError,
  LOGOUT_SUCCESS,
  ILogoutSuccess,
} from "../types/ActionTypes";

interface AuthState {
  dataUser: any;
  error: any;
  isAuth: boolean;
}

const initState: AuthState = {
  dataUser: null,
  error: null,
  isAuth: false,
};

function authReducer(
  state: AuthState = initState,
  action: IUserFetchSuccess | IUserFetchError | ILogoutSuccess
) {
  switch (action.type) {
    case USER_FETCH_SUCCESS:
      window.localStorage.setItem(
        "token",
        JSON.stringify(action.payload.token)
      );
      console.log(action.payload);
      return {
        dataUser: action.payload,
        error: null,
        isAuth: true,
      };
    case USER_FETCH_ERROR:
      return {
        dataUser: null,
        error: action.payload,
        isAuth: false,
      };
    case LOGOUT_SUCCESS:
      window.localStorage.removeItem("token");
      return initState;

    default:
      return initState;
  }
}

export default authReducer;
