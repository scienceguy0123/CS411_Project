import React, {Component} from 'react';
import { Container, Card, Row, Button } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

class YourBooksCard extends Component{
    constructor(props){
        super(props);

        this.state={}
    }


    render(){
        return(
            
                    <Card style={{ width: '17vw' }}>
                    <Card.Img variant="top" src={this.props.book.images[0]} />
                            <Card.Body>
                            <Link to={`/books/id/${this.props.book._id}`}>
                                <Card.Title>{this.props.book.title}</Card.Title>
                                </Link>
                                <Card.Text>
                                    {`\$${this.props.book.price}`}
                                </Card.Text>
                                <Button  variant="danger" type='submit' onClick={() => this.props.deleteYourBook(this.props.book._id, this.props.user.user)} >
                                    Delete
                                </Button>
                            </Card.Body>
                    </Card>



            
        )
    }
}

export default YourBooksCard;