import React, {Component} from 'react';
import { Container, Card, Row } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

class NYTBookCard extends Component{
    constructor(props){
        super(props);

        this.state={}
    }


    render(){
        return(
            <a href={`${this.props.book.amazon_product_url}`}>
                    <Card style={{ width: '13vw' }}>
                    <Card.Img variant="top" src={this.props.book.book_image} />

                            <Card.Body>
                                <Card.Title>{this.props.book.title}</Card.Title>
                                <Card.Text>
                                {`${this.props.book.author}`}
                                </Card.Text>
                            </Card.Body>
                    </Card>

            </a>

           
        )
    }
}

export default NYTBookCard;