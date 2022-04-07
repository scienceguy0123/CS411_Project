import { useState, useEffect } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let baseUrl = 'http://localhost:3001';

function App() {


  const[title, setTitle] = useState("");
  const[author, setAuthor] = useState("");
  const [gBooks, setGBooks] = useState(null);
  


  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(title);
    console.log(author);
    fetchGBook(title, author);
  }

  const fetchGBook= (title, author) =>{
    let titleP = title.replace(" ", "+");
    let authorP = author.replace(" ", " +");
    return fetch(`${baseUrl}/googleBook/${titleP}/${authorP}`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',

      }
    })
    .then(response => response.json())
    .then(response => {
      if(response.success){
        console.log(response.data.items.slice(0,2));
        setGBooks(response.data.items.slice(0,2));
        console.log(gBooks);
  
      }
      else{
        console.log(response);
      }
    })
  }

  return (
    <Container>

      <Form>
        <Form.Group className="mt-5" >
          <Form.Label>Book Title</Form.Label>
          <Form.Control name="title" 
                            id="title"  
                            placeholder="Enter Book Title" 
                            onChange={e => setTitle(e.target.value)}
                            />
        </Form.Group>

        <Form.Group className="mt-5" >
          <Form.Label>Author</Form.Label>
        <Form.Control  name="author"
                        id = "author"
                        placeholder="Enter Author's name"
                        onChange={e => setAuthor(e.target.value)} />
        </Form.Group>
        
        <Button className="mt-5" 
                variant="primary" 
                type="submit" 
                disabled ={title.replace(/ /g, "") === "" || author.replace(/ /g, "") ===""}
                onClick={e => {handleSubmit(e)}}>

          Submit
        </Button>
      
      </Form>
      {gBooks == null ? <div></div>
      
      :
      gBooks.map((gBook) => (
<>
          <Row className='mt-5'>
              <Col>
                <img src={gBook.volumeInfo.imageLinks.thumbnail}/>
              </Col>
          </Row>
          <Row className='mt-5'>
              <Col xs="auto">
                  <h4>Title: </h4>
              </Col>
              <Col>
                  <h4>{gBook.volumeInfo.title}</h4>
              </Col>
          </Row>

          <Row className='mt-5'>
              <Col xs="auto">
                  <h4>Author: </h4>
              </Col>
              <Col>
                  <h4>{gBook.volumeInfo.authors}</h4>
              </Col>
          </Row>

          <Row className='mt-5'>
              <Col xs="auto">
                  <h4>Average Rating: </h4>
              </Col>
              <Col>
                  <h4>{gBook.volumeInfo.averageRating}</h4>
              </Col>
          </Row>
          
          <Row className='mt-5'>
              <Col xs="auto">
                  <h4> Rating Count: </h4>
              </Col>
              <Col>
                  <h4>{gBook.volumeInfo.ratingsCount}</h4>
              </Col>
          </Row>

          <Row className='mt-5'>
              <Col xs="auto">
                  <h4>Retail Price: </h4>
              </Col>
              <Col>
                  {gBook.saleInfo.saleability === "FOR_SALE" ? 
                  <h4>{`\$${gBook.saleInfo.retailPrice.amount}`}</h4> :
                  <h4></h4>}
              </Col>
          </Row>

          <Row className='mt-5'>
              <Col xs="auto">
                  <h4>Preview Link: </h4>
              </Col>
              <Col>
                  <a >{gBook.volumeInfo.previewLink}</a>
              </Col>
          </Row>
          
          <Row className='mt-5'>
              <Col xs="auto">
                  <h4>Description: </h4>
              </Col>
              <Col>
                  <p >{gBook.volumeInfo.description}</p>
              </Col>
          </Row>
      </>


      ))
      
      }
    </Container>
  );
}

export default App;
