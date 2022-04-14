import React, { useState, useEffect } from 'react';
import {Nav, Navbar, NavDropdown, Container, Row,Col} from 'react-bootstrap';
import BookPageCarousel from './BookPageCarousel.js';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";

function BookPage(props){
    const { bookId } = useParams();
    const [id, setId] = useState(bookId);

    useEffect(() => {
        if(props.fetchBooks.books != null && Array.isArray(props.fetchBooks.books.data) ){
            props.cleanFetchBook();
            // props.clearGBook();
        }
        if(props.fetchBooks.books == null && props.fetchBooks.isLoading == false){
            props.fetchBookId(bookId);
        }
        if(props.fetchBooks.books != null  && 
            !Array.isArray(props.fetchBooks.books.data) &&
            props.googleBook.isLoading == false && 
            (props.googleBook.book==null )){
            props.fetchGBook(props.fetchBooks.books.data.title, props.fetchBooks.books.data.author);
        }

    })
    // if(props.fetchBooks.books == null || props.googleBook.books == null){
    //     return(
    //         <div></div>
    //     )
    // }
    // if(props.fetchBooks.isLoading || props.googleBook.isLoading){
    //     return(
    //         <div></div>
    //     )
    // }

    if(props.fetchBooks.books != null && props.fetchBooks.books.data.length === 4){
        return(
            <div></div>
        )
    }

    return(
        
        <Container>
        {props.fetchBooks.books === null || Array.isArray(props.fetchBooks.books.data) ?  <div></div>
        : 
          <div>
        <Row>
            <Col className='mt-5'>
                <BookPageCarousel images = {props.fetchBooks.books.data.images}/>
            </Col>
            <Col>
                <Container>
                    <Row className='mt-5'>
                        <Col xs="auto">
                            <h3>Title: </h3>
                        </Col>
                        <Col>
                            <h3>{props.fetchBooks.books.data.title}</h3>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col xs="auto">
                            <h3>Author: </h3>
                        </Col>
                        <Col>
                            <h3>{props.fetchBooks.books.data.author}</h3>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col xs="auto">
                            <h3>Category: </h3>
                        </Col>
                        <Col>
                            <h3>{props.fetchBooks.books.data.category}</h3>
                        </Col>
                    </Row>
                    
                    <Row className='mt-5'>
                        <Col xs="auto">
                            <h3>Price: </h3>
                        </Col>
                        <Col>
                            <h3>{`\$${props.fetchBooks.books.data.price}`}</h3>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col xs="auto">
                            <h3>Seller: </h3>
                        </Col>
                        <Col>
                            <h3>{props.fetchBooks.books.data.sellerEmail}</h3>
                        </Col>
                    </Row>
                    

                </Container>
            </Col>

        </Row>
        
        <Row className='mt-5'>
            <Col xs="auto">
                <h3>Description: </h3>
            </Col>
            <Col>
                <p>{props.fetchBooks.books.data.description}</p>
            </Col>
        </Row>

        <Row className='mt-5'>
            <Col >
                <h3>Search Result From Google Book:</h3>
            </Col>
        </Row>
        </div>  
        }
        

        {props.googleBook.book === null ? <div></div> :
        <Row>
        <Container>
            <Row>
                <Col className='mt-5'>
                    <img src={props.googleBook.book.volumeInfo.imageLinks.thumbnail}/>
                </Col>
                <Col>
                <Row className='mt-5'>
                    <Col xs="auto">
                        <h4>Title: </h4>
                    </Col>
                    <Col>
                        <h4>{props.googleBook.book.volumeInfo.title}</h4>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col xs="auto">
                        <h4>Author: </h4>
                    </Col>
                    <Col>
                        <h4>{props.googleBook.book.volumeInfo.authors}</h4>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col xs="auto">
                        <h4>Average Rating: </h4>
                    </Col>
                    <Col>
                        <h4>{props.googleBook.book.volumeInfo.averageRating}</h4>
                    </Col>
                </Row>
                
                <Row className='mt-5'>
                    <Col xs="auto">
                        <h4> Rating Count: </h4>
                    </Col>
                    <Col>
                        <h4>{props.googleBook.book.volumeInfo.ratingsCount}</h4>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col xs="auto">
                        <h4>Retail Price: </h4>
                    </Col>
                    <Col>
                        {props.googleBook.book.saleInfo.saleability === "FOR_SALE" ? 
                        <h4>{`\$${props.googleBook.book.saleInfo.retailPrice.amount}`}</h4> :
                        <h4></h4>}
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col xs="auto">
                        <h4>Preview Link: </h4>
                    </Col>
                    <Col>
                        <a >{props.googleBook.book.volumeInfo.previewLink}</a>
                    </Col>
                </Row>
                
                <Row className='mt-5'>
                    <Col xs="auto">
                        <h4>Description: </h4>
                    </Col>
                    <Col>
                        <p >{props.googleBook.book.volumeInfo.description}</p>
                    </Col>
                </Row>
                
                </Col>
            </Row>
            </Container>
            </Row>
        }
       

                

            
        
    </Container>
    )
}


export default BookPage;