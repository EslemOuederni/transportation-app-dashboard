import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  user: null,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("login", action.payload);
      return { user: action.payload, isLoading: false };
    case "LOGOUT":
      return { user: null, isLoading: false };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  console.log("auth state", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
