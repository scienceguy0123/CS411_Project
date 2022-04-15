import React, {Component} from 'react';
import {Col, Row, Container, Modal, Button, Form } from 'react-bootstrap';
import BookCard from './BookCard.js';
import NYTBookCard from './NYTBookCard.js';

class NYTBooks extends Component{
    constructor(props){
        super(props);

        this.state = {
            combined_print_and_e_book_fiction: null,
            combined_print_and_e_book_nonfiction: null
 
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot){

        if(prevProps.nytBooks.book === null && this.props.nytBooks.book){
            this.setState({
                combined_print_and_e_book_fiction: this.props.nytBooks.book.data[0].books,
                combined_print_and_e_book_nonfiction: this.props.nytBooks.book.data[1].books

            })
        }
    }

    render(){
        if (this.props.nytBooks.books === null || this.state.combined_print_and_e_book_fiction===null) {
            return( 
            <h1>Loading</h1>
            )
        }
        return(
           
            <Container>
                <Row className='mt-5'>
                    <Col>
                        <h3>New York Times Best Seller:</h3>
                    </Col>
                </Row>
                {this.props.nytBooks.isLoading ? 
                <Row>

                </Row>
                :
                <>
                <Row className='mt-5'>
                    <Col>
                        <h4>Combined Print and E-Book Fiction</h4>
                    </Col>
                </Row>
                <Row >
                    {this.state.combined_print_and_e_book_fiction.map((book) => (
                        <Col key={book.title} >
                            <NYTBookCard  book={book}/>
                        </Col>
                    ))}
                </Row>

                <Row className='mt-5'>
                    <Col>
                        <h4>Combined Print and E-Book Non-Fiction</h4>
                    </Col>
                </Row>
                <Row >
                    {this.state.combined_print_and_e_book_nonfiction.map((book) => (
                        <Col key={book.title} >
                            <NYTBookCard  book={book}/>
                        </Col>
                    ))}
                </Row>
                </>
                }


            </Container>  
        )
    }
}

export default NYTBooks;