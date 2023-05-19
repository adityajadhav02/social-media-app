import { useReducer } from "react";
import { createContext } from "react";
import AuthReducer from "./AuthReducer";

const INTIAL_STATE = {
    user: {"_id":"642c3090b39dce64c82a43de","username":"Adi","email":"adi@mail.com","password":"$2b$10$HqAL6Z6A30evgotxWg390OIXu71HMnQZ/zIT13.8zlKD5MwDLDnNO","profilePic":"/people/4.jpg","coverPic":"","followers":[],"following":[],"isAdmin":false,"createdAt":{"$date":{"$numberLong":"1680611852575"}},"updatedAt":{"$date":{"$numberLong":"1680611852575"}},"__v":{"$numberInt":"0"}},
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