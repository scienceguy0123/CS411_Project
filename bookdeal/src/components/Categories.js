import React, {Component} from 'react';
import {Nav,ListGroup, Navbar, NavDropdown, Container, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

class Categories extends Component{
    constructor(props){
        super(props);

        this.state = {
            categories:["All", "Textbook", "Romance", "Science-Fiction", "Biographies", "History"]
        }

    }

    render(){
        return(
            <>
            <Container>
                <Row style={{paddingLeft:"10vw", paddingRight:"10vw", marginTop:"5vw"}}>
                    <ListGroup horizontal style={{paddingleft:"5vw" }} >
                        {this.state.categories.slice(0,3).map((category) => (
                            <Col >
                                <Link to={`/books/category/${category}`}>
                                    <ListGroup.Item  style={{height: "15vw", width:"15vw" , paddingTop:"5vw"}} >
                                        <p style={{fontSize:"2vw"}} className="text-center">{`${category}`} </p>
                                    </ListGroup.Item>
                                </Link>
                            </Col>
                        ))}
                   </ListGroup>
                </Row>


                <Row style={{paddingLeft:"10vw", paddingRight:"10vw", marginTop:"5vw"}}>
                    <ListGroup horizontal>

                        {this.state.categories.slice(3,6).map((category) => (
                                <Col >
                                <Link to={`/books/category/${category}`}>
                                    <ListGroup.Item style={{height: "15vw", width:"15vw", paddingTop:"5vw"}} >
                                        <p style={{fontSize:"2vw"}} className="text-center">{`${category}`} </p>
                                    </ListGroup.Item>
                                </Link>
                                </Col>
                            ))}
                    </ListGroup>

                </Row>



            </Container>

            </>

        )
    }
}

export default Categories;