import React, {Component} from 'react';
import Header from './Header.js';
import Home from './Home.js';
import Posting from './Posting.js';
import BookPage from './BookPage.js';
import CategoryPage from './CategoryPage';
import SearchPage from './SearchPage.js';
import YourBooks from './YourBooks.js';
import{useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {registerUser, loginUser, logoutUser, postBook, 
    fetchLatestBooks, fetchBookId, fetchGBook, clearGBook, cleanFetchBook,
    fetchBookCategory, fetchBookTitle, fetchYourBooks, deleteYourBook,
    fetchNYTBooks,
    handleGoogleLogin} from '../redux/actionCreators.js';

import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";

const mapStateToProps = state =>{
    return{
        register: state.register,
        user: state.user,
        postBook: state.postBook,
        fetchBooks: state.fetchBooks,
        googleBook: state.googleBook,
        nytBooks: state.nytBooks
    }
}
 
const mapDispatchToProps = (dispatch) =>{
    return {
        registerUser: (creds) => dispatch(registerUser(creds)),
        loginUser: (creds) => dispatch(loginUser(creds)),
        logoutUser: () => dispatch(logoutUser()),
        postBook: (book) => dispatch(postBook(book)),
        fetchLatestBooks: () => dispatch(fetchLatestBooks()),
        fetchBookId: (id) => dispatch(fetchBookId(id)),
        fetchGBook: (title, author) => dispatch(fetchGBook(title, author)),
        clearGBook: () => dispatch(clearGBook()),
        cleanFetchBook: () => dispatch(cleanFetchBook()),
        fetchBookCategory: (category) => dispatch(fetchBookCategory(category)),
        fetchBookTitle: (title) => dispatch(fetchBookTitle(title)),
        fetchYourBooks: (email) => dispatch(fetchYourBooks(email)),
        deleteYourBook: (id, email) => dispatch(deleteYourBook(id, email)),
        fetchNYTBooks: () => dispatch(fetchNYTBooks()),
        handleGoogleLogin: (googleData) => dispatch(handleGoogleLogin(googleData))
    }
}

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {}
    }





    render() {


        return(
            <div>
                <Header registerUser = {this.props.registerUser} 
                        loginUser = {this.props.loginUser}
                        logoutUser = {this.props.logoutUser}
                        user={this.props.user}
                        handleGoogleLogin={this.props.handleGoogleLogin}
                        />

         

                    <Routes>
                        <Route index element={<Home register={this.props.register}
                                                                user = {this.props.user}
                                                                fetchLatestBooks = {this.props.fetchLatestBooks}
                                                                fetchBooks = {this.props.fetchBooks}
                                                                clearGBook = {this.props.clearGBook}
                                                                fetchNYTBooks = {this.props.fetchNYTBooks}
                                                                nytBooks ={this.props.nytBooks}
                                                                />} />
                        <Route path="/" element = { <Home register={this.props.register}
                                                                user = {this.props.user}
                                                                fetchLatestBooks = {this.props.fetchLatestBooks}/>}
                                                                fetchBooks = {this.props.fetchBooks}
                                                                clearGBook = {this.props.clearGBook}
                                                                fetchNYTBooks = {this.props.fetchNYTBooks}
                                                                nytBooks ={this.props.nytBooks}
                                                                />
             
                        <Route path="/post_book" element = {<Posting user={this.props.user} postBook={this.props.postBook}/>}/>
                        <Route path="/books/id/:bookId" element ={<BookPage fetchBookId={this.props.fetchBookId} 
                                                                            fetchBooks = {this.props.fetchBooks}
                                                                            googleBook = {this.props.googleBook}
                                                                            fetchGBook = {this.props.fetchGBook}
                                                                            cleanFetchBook = {this.props.cleanFetchBook}/> 
                                                                            } />
                        <Route path="/books/category/:categoryName" element = {<CategoryPage 
                                                                                fetchBooks = {this.props.fetchBooks}
                                                                                clearGBook = {this.props.clearGBook}
                                                                                fetchBookCategory={this.props.fetchBookCategory}
                                                                                />} />
                        <Route path="/books/title/:bookTitle" element = {<SearchPage 
                                                                            fetchBooks = {this.props.fetchBooks}
                                                                            fetchBookTitle={this.props.fetchBookTitle}/>} />
                        
                        <Route path="/books/your_books/:email" element = {<YourBooks 
                                                                            user = {this.props.user}
                                                                            deleteYourBook = {this.props.deleteYourBook}
                                                                            cleanFetchBook = {this.props.cleanFetchBook}
                                                                            fetchYourBooks = {this.props.fetchYourBooks}
                                                                            fetchBooks = {this.props.fetchBooks}
                                                                            />} />
                        <Route path="*" element={<Navigate to="/" replace />}/>

                    </Routes>
            </div>



        )
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Main));