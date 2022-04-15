import React, {Component} from 'react';
import {Col, Row, Container, Modal, Button, Form } from 'react-bootstrap';
import BookCard from './BookCard.js';

class LatestAddition extends Component{
    constructor(props){
        super(props);

        this.state = {
        }
    }


    render(){
        if (this.props.fetchBooks.books === null) {
            return( 
            <h1>Loading</h1>
            )
        }
        return(
           
            <Container>
                <Row className='mb-5'>
                    <Col>
                        <h4>Latest Addition:</h4>
                    </Col>
                </Row>
                {this.props.fetchBooks.isLoading ? 
                <Row>

                </Row>
                :
                <Row >
                    {this.props.fetchBooks.books.data.map((book) => (
                        <Col key={book._id} >
                            <BookCard  book={book}/>
                        </Col>
                    ))}
                </Row>
                }


            </Container>  
        )
    }
}

export default LatestAddition;