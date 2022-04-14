import React, {Component, useEffect} from 'react';
import YourBooksCard from './YourBooksCard';
import BookCard from './BookCard';
import {Nav, Navbar, NavDropdown, Col, Row, Container, Modal, Button, Form } from 'react-bootstrap';
import { Routes, Route, Link, useParams } from 'react-router-dom';


function YourBooks(props){

    const {email} = useParams();

    useEffect(() => {
        props.cleanFetchBook();
        props.fetchYourBooks(email);
    }, [])

    if( props.fetchBooks.isLoading || !Array.isArray(props.fetchBooks.books.data) ){
        return(
            <div></div>
        )
    }

    return(
        <Container>
            <Row>
                {props.fetchBooks.books.data.map((book) => (
                    <Col className="mt-5" key={book._id} >
                        <YourBooksCard  
                        user = {props.user}
                        deleteYourBook={props.deleteYourBook}
                        book={book}/>
                    </Col>
                ))}
            </Row>

        </Container>

    )
}


export default YourBooks;