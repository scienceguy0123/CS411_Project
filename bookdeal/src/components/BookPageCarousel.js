import React, {Component, useState} from 'react';
import {Nav, Navbar,Carousel, NavDropdown, Container, Modal, Button, Form } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';


class BookPageCarousel extends Component{
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        if(this.props.images === null){
            return(
                <div></div>
            )
        }
        return(
            <Carousel>
                {this.props.images.map((image) => (
                    <Carousel.Item>
                        <img className="d-block" style={{width:"25vw"}} src={image} />
                    </Carousel.Item>

                ))}   
            </Carousel>
        )
    }
}

export default BookPageCarousel;