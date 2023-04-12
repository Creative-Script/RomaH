import { createStoreHook } from "react-redux";
import { isAuthorized } from "../../../utils/userTypes";

const initialState = {
    isLoggedIn:isAuthorized(),
    user:null,
}
const authReducer = (state=initialState, action)=>{
    switch (action.type){
        case 'LOGIN':
            return {
                isLoggedIn: true,
                user:action.payload,
            };
        case 'LOGOUT':
            return {
                isLoggedIn:false,
                user:null,
            };
        default:
            return state;
    }
};
export default createStoreHook(authReducer)