import React, {Component, useEffect} from 'react';
import BookCard from './BookCard';
import {Nav, Navbar, NavDropdown, Col, Row, Container, Modal, Button, Form } from 'react-bootstrap';
import { Routes, Route, Link, useParams } from 'react-router-dom';


function SearchPage(props){

    const {bookTitle} = useParams();

    useEffect(() => {
        props.fetchBookTitle(bookTitle);
    }, [])

    if(props.fetchBooks.books == null ){
        return(
            <div></div>
        )
    }

    return(
        <Container>
            <Row>
                {props.fetchBooks.books.data.map((book) => (
                    <Col className="mt-5" key={book._id} >
                        <BookCard  book={book}/>
                    </Col>
                ))}
            </Row>

        </Container>

    )
}


export default SearchPage;