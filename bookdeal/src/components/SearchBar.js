import React, { useState, useEffect } from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import BookPageCarousel from './BookPageCarousel.js';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";

function SearchBar(props){
    const [title, setTitle] = useState("");
    

    

    return(
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Row className="mt-5 ">
                        <Col>
                            <Form.Control  
                            placeholder="Enter Title..." 
                            onChange={e => (setTitle(e.target.value))}/>
                        </Col>
                        <Col>
                        <Link to={`/books/title/${title}`}>
                            <Button variant="primary" type="submit">
                                Search
                            </Button>

                        </Link>

                        </Col>

                    </Row>

                </Form.Group>     
            </Form>
        </Container>

    )
}

export default SearchBar;