import { 
    LOGIN_SUCCESS,
    LOGIN_FAIL, 
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    EMPLOYEE_LIST_SUCESS,
    EMPLOYEE_LIST_FAIL
} from "../actions/types";

const initialState = {
    isAuthenticated: false,
    loading: false,
    login_success: false,
    employees: null
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                login_success: true,
                isAuthenticated: true,
            };
        case EMPLOYEE_LIST_SUCESS:
            return {
                ...state,
                employees: payload
            }
        case SET_AUTH_LOADING:
            return {
                ...state,
                loading: true,
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                employees: null
            }
        case EMPLOYEE_LIST_FAIL:
            return {
                ...state,
                employees: null
            }
        case LOGIN_FAIL:
            return {
                ...state,
                login_success: false,
                isAuthenticated: false
            }
        case REMOVE_AUTH_LOADING:
            return {
                ...state,
                loading: false,
            }
        case LOGOUT_FAIL:
            return {
                ...state
            }
        default:
            return state;
    };
};

export default authReducer;