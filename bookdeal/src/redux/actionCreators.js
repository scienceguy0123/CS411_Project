import * as ActionTypes from './actionTypes';

let baseUrl = 'http://localhost:3001';


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





export const loginUser = (creds) => (dispatch) =>{
    dispatch(loginRequest(creds))

    return fetch(`${baseUrl}/users/login`, {
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
            dispatch(loginSuccess(response));

        }else{
            console.log(response);
            let error = new Error('Error: ' + response.message);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)));
}

export const loginRequest = (creds) =>{
    return{
        type: ActionTypes.LOGIN_REQUEST,
        creds: creds
    }
}

export const loginSuccess = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        user: response.data.registerEmail

    }
}

export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message:message
    }
}

export const logoutUser = () => (dispatch) =>{
    dispatch(logoutSuccess())

}

export const logoutSuccess = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS,
    }
}

export const postBook = (info) => (dispatch) => {
    dispatch(postBookRequest());

    return fetch(`${baseUrl}/postBook`, {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response => {
        if (response.success){
            console.log(response);
            dispatch(postBookSuccess(response));
        }
        else{
            console.log(response);
            let error = new Error('Error: ' + response.message);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(postBookFailure(error.message)));
}

export const postBookRequest = () => ({
    type: ActionTypes.POST_BOOK_REQUEST
});

export const postBookSuccess = (info) => ({
    type: ActionTypes.POST_BOOK_SUCCESS,
    payload: info
});

export const postBookFailure = (errMess) => ({
    type: ActionTypes.POST_BOOK_FAILURE,
    payload: errMess
})

export const fetchLatestBooks = () => (dispatch) => {
    dispatch(fetchBooksRequest());

    return fetch(`${baseUrl}/books/latest`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response => {
        if (response.success){
            console.log(response);
            dispatch(fetchBooksSuccess(response));
        }
        else{
            console.log(response);
            let error = new Error('Error: ' + response.message);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(fetchBooksFailure(error.message)));
}

export const deleteYourBook = (id, email) => (dispatch) => {
    dispatch(fetchBooksRequest());

    return fetch(`${baseUrl}/books/id/${id}/${email}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response => {
        if (response.success){
            console.log(response);
            dispatch(fetchBooksSuccess(response));
        }
        else{
            console.log(response);
            let error = new Error('Error: ' + response.message);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(fetchBooksFailure(error.message)));
}

export const fetchYourBooks = (email) => (dispatch) => {
    dispatch(fetchBooksRequest());

    return fetch(`${baseUrl}/books/your_books/${email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response => {
        if (response.success){
            console.log(response);
            dispatch(fetchBooksSuccess(response));
        }
        else{
            console.log(response);
            let error = new Error('Error: ' + response.message);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(fetchBooksFailure(error.message)));
}



export const clearFetchBook = () => (dispatch) =>{
    dispatch(cleanFetchBook());
}
export const cleanFetchBook = () => ({
    type:ActionTypes.CLEAN_BOOKS
});

export const clearGBook = () => (dispatch) =>{
    dispatch(cleanGBook());
}
export const cleanGBook = () => ({
    type:ActionTypes.CLEAN_GBOOK
});


export const fetchBooksRequest = () => ({
    type: ActionTypes.FETCH_BOOKS_REQUEST
});

export const fetchBooksSuccess = (info) => ({
    type: ActionTypes.FETCH_BOOKS_SUCCESS,
    payload: info
});

export const fetchBooksFailure = (errMess) => ({
    type: ActionTypes.FETCH_BOOKS_FAILURE,
    payload: errMess
})

export const fetchBookId = (bookId) => (dispatch) => {
    dispatch(fetchBooksRequest());

    return fetch(`${baseUrl}/books/id/${bookId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response => {
        if (response.success){
            console.log(response);
            dispatch(fetchBooksSuccess(response));
        }
        else{
            console.log(response);
            let error = new Error('Error: ' + response.message);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(fetchBooksFailure(error.message)));
}

export const fetchBookTitle = (title) => (dispatch) => {
    dispatch(fetchBooksRequest());

    return fetch(`${baseUrl}/books/title/${title}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response => {
        if (response.success){
            console.log(response);
            dispatch(fetchBooksSuccess(response));
        }
        else{
            console.log(response);
            let error = new Error('Error: ' + response.message);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(fetchBooksFailure(error.message)));
}

export const fetchBookCategory = (category) => (dispatch) => {
    dispatch(fetchBooksRequest());

    return fetch(`${baseUrl}/books/category/${category}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response => {
        if (response.success){
            console.log(response);
            dispatch(fetchBooksSuccess(response));
        }
        else{
            console.log(response);
            let error = new Error('Error: ' + response.message);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(fetchBooksFailure(error.message)));
}

export const fetchGBook = (title, author) => (dispatch) => {
    dispatch(fetchGBooksRequest());

    title = title.replace(" ", "+");
    author = author.replace(" ", "+");
    return fetch(`${baseUrl}/books/googleBook/${title}/${author}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response => {
        if (response.success){
            console.log(response);
            dispatch(fetchGBooksSuccess(response));
        }
        else{
            console.log(response);
            let error = new Error('Error: ' + response.message);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(fetchGBooksFailure(error.message)));
}


export const fetchGBooksRequest = () => ({
    type: ActionTypes.FETCH_GBOOKS_REQUEST
});

export const fetchGBooksSuccess = (info) => ({
    type: ActionTypes.FETCH_GBOOKS_SUCCESS,
    payload: info.data.items[0]
});

export const fetchGBooksFailure = (errMess) => ({
    type: ActionTypes.FETCH_GBOOKS_FAILURE,
    payload: errMess
})
