import React, {Component, useEffect} from 'react';
import BookCard from './BookCard';
import {Nav, Navbar, NavDropdown, Col, Row, Container, Modal, Button, Form } from 'react-bootstrap';
import { Routes, Route, Link, useParams } from 'react-router-dom';


function CategoryPage(props){

    const {categoryName} = useParams();

    useEffect(() => {
 
        props.fetchBookCategory(categoryName);
        props.clearGBook();
    }, [])

    if( props.fetchBooks.books == null || !Array.isArray(props.fetchBooks.books.data)){
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


export default CategoryPage;