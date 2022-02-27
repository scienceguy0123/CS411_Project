import * as ActionTypes from './actionTypes';

let baseUrl = 'http://localhost:3001'


export const registerUser = (creds) => (dispatch) =>{
    dispatch(registerRequest(creds))

    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(creds)
    })
    .then(response =>response.json())
    .then(response => {
        if(response.success){
            console.log(response);
            dispatch(registerSuccess(response));

        }else{
            console.log(response);
            let error = new Error('Error: ' + response.message);
            error.reposne = response;
            throw error;
        }
    })
    .catch(error => dispatch(registerError(error.message)));

}

export const registerRequest = (creds) =>{
    return{
        type: ActionTypes.REGISTER_REQUEST,
        creds: creds
    }
}

export const registerSuccess = (response) => {
    return {
        type: ActionTypes.REGISTER_SUCCESS

    }
}

export const registerError = (message) => {
    return {
        type: ActionTypes.REGISTER_FAILURE,
        message:message
    }
}