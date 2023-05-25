import { useReducer } from "react";
import { createContext } from "react";
import AuthReducer from "./AuthReducer";

const INTIAL_STATE = {
    user: {"_id":"642c30a950f13fcddf0ee1fd","username":"Tim","email":"tim@mail.com","password":"$2b$10$R8ZbKV6TpAKi8Gg1cBcx9uQm0rA3UiJj4zsEDpQuGoZITyvgcNdKW","followers":["642c3090b39dce64c82a43de"],"following":["642c3090b39dce64c82a43de"],"isAdmin":false,"createdAt":{"$date":{"$numberLong":"1680611852575"}},"updatedAt":{"$date":{"$numberLong":"1680611852575"}},"__v":{"$numberInt":"0"}},
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INTIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INTIAL_STATE);

    return (
        <AuthContext.Provider value={{ 
            user: state.user, 
            isFetching: state.isFetching, 
            error: state.error, 
            dispatch
            }}>
            {children}
        </AuthContext.Provider>
    );
};