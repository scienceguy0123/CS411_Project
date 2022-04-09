import React, {Component} from 'react';
import Header from './Header.js';
<<<<<<< HEAD
import{useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {registerUser, loginUser, logoutUser} from '../redux/actionCreators.js';


=======
import Home from './Home.js';
import Posting from './Posting.js';
import BookPage from './BookPage.js';
import{useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {registerUser, loginUser, logoutUser, postBook, 
    fetchLatestBooks, fetchBookId, fetchGBook, clearGBook, cleanFetchBook} from '../redux/actionCreators.js';

import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
>>>>>>> chou

const mapStateToProps = state =>{
    return{
        register: state.register,
<<<<<<< HEAD
        user: state.user
    }
}

=======
        user: state.user,
        postBook: state.postBook,
        fetchBooks: state.fetchBooks,
        googleBook: state.googleBook
    }
}
 
>>>>>>> chou
const mapDispatchToProps = (dispatch) =>{
    return {
        registerUser: (creds) => dispatch(registerUser(creds)),
        loginUser: (creds) => dispatch(loginUser(creds)),
<<<<<<< HEAD
        logoutUser: () => dispatch(logoutUser())
=======
        logoutUser: () => dispatch(logoutUser()),
        postBook: (book) => dispatch(postBook(book)),
        fetchLatestBooks: () => dispatch(fetchLatestBooks()),
        fetchBookId: (id) => dispatch(fetchBookId(id)),
        fetchGBook: (title, author) => dispatch(fetchGBook(title, author)),
        clearGBook: () => dispatch(clearGBook()),
        cleanFetchBook: () => dispatch(cleanFetchBook())
>>>>>>> chou
    }
}

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {}
    }

<<<<<<< HEAD
    render() {
=======




    render() {


>>>>>>> chou
        return(
            <div>
                <Header registerUser = {this.props.registerUser} 
                        loginUser = {this.props.loginUser}
                        logoutUser = {this.props.logoutUser}
                        user={this.props.user}
                        />
<<<<<<< HEAD
                
=======

         

                    <Routes>
                        <Route index element={<Home register={this.props.register}
                                                                user = {this.props.user}
                                                                fetchLatestBooks = {this.props.fetchLatestBooks}
                                                                fetchBooks = {this.props.fetchBooks}
                                                                clearGBook = {this.props.clearGBook}
                                                                />} />
                        <Route path="/" element = { <Home register={this.props.register}
                                                                user = {this.props.user}
                                                                fetchLatestBooks = {this.props.fetchLatestBooks}/>}
                                                                fetchBooks = {this.props.fetchBooks}
                                                                clearGBook = {this.props.clearGBook}

                                                                />
             
                        <Route path="/post_book" element = {<Posting user={this.props.user} postBook={this.props.postBook}/>}/>
                        <Route path="/books/id/:bookId" element ={<BookPage fetchBookId={this.props.fetchBookId} 
                                                                            fetchBooks = {this.props.fetchBooks}
                                                                            googleBook = {this.props.googleBook}
                                                                            fetchGBook = {this.props.fetchGBook}
                                                                            cleanFetchBook = {this.props.cleanFetchBook}/> 
                                                                            } />
                        <Route path="*" element={<Navigate to="/" replace />}/>

                    </Routes>
>>>>>>> chou
            </div>



        )
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Main));