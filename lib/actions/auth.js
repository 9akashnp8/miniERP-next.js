import { 
    LOGIN_SUCCESS,
    LOGIN_FAIL, 
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    AUTHENTICATED_SUCESS,
    AUTHENTICATED_FAIL,
    EMPLOYEE_LIST_SUCESS,
    EMPLOYEE_LIST_FAIL
} from "./types";

export const login = (
    username,
    password
) => async dispatch => {
    const body = JSON.stringify({
        username,
        password 
    });

    dispatch({type: SET_AUTH_LOADING});

    try {
        const response = await fetch('/api/account/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: body,
        })

        if (response.status == 200) {
            dispatch({
                type: LOGIN_SUCCESS,
            });
        } else {
            dispatch({
                type: LOGIN_FAIL
            })
        }
    } catch(error) {
        dispatch({
            type: LOGIN_FAIL
        })
    }

    dispatch({type: REMOVE_AUTH_LOADING});
}

export const logout = () => async dispatch => {
    try {
        const response = await fetch('/api/account/logout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.status == 200) {
            dispatch({
                type: LOGOUT_SUCCESS
            })
        } else {
            dispatch({
                type: LOGOUT_FAIL
            })
        }
    } catch(error) {
        dispatch({
            type: LOGOUT_FAIL
        })
    }
}

export const checkAuthStatus = () => async dispatch => {
    try {
        const response = await fetch('/api/account/verify', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })

        if (response.status === 200) {
            dispatch({
                type: AUTHENTICATED_SUCESS
            })
        } else {
            dispatch({
                type: AUTHENTICATED_FAIL
            })
        }
    } catch(error) {
        dispatch({
            type: AUTHENTICATED_FAIL
        })
    }
}

export const listEmployees = () => async dispatch => {
    dispatch({type: SET_AUTH_LOADING});

    try {
        const response = await fetch('/api/employee/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        const data = await response.json();

        if (response.status === 200) {
            dispatch({
                type: EMPLOYEE_LIST_SUCESS,
                payload: data
            })
        } else {
            dispatch({
                type: EMPLOYEE_LIST_FAIL,
            })
        }
    } catch(error) {
        dispatch({
            type: EMPLOYEE_LIST_FAIL,
        })
    }

    dispatch({type: SET_AUTH_LOADING});
}