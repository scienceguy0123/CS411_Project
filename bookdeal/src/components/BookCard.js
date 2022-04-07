import React, {Component} from 'react';
import { Container, Card, Row } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

class BookCard extends Component{
    constructor(props){
        super(props);

        this.state={}
    }


    render(){
        return(
            <Link to={`/books/id/${this.props.book._id}`}>
                    <Card style={{ width: '17vw' }}>
                    <Card.Img variant="top" src={this.props.book.images[0]} />

                            <Card.Body>
                                <Card.Title>{this.props.book.title}</Card.Title>
                                <Card.Text>
                                {`\$${this.props.book.price}`}
                                </Card.Text>
                            </Card.Body>
                    </Card>



            </Link>
        )
    }
}

export default BookCard;