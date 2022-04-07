import React, {Component} from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import ImageUpload from './ImageUpload';

class Posting extends Component{
    constructor(props){
        super(props);

        this.state={ 
            title:'',
            price:'...',
            description:'',
            category:'',
            author:'',
            sellerEmail:this.props.user.user,
            validate: {
                ItemNameState:'',
                ItemType1State:'',
                ItemDescriptionState:'',
                ItemPriceState:'',
                ImageState:''
            },
            images:[]}

        this.handleChange = this.handleChange.bind(this);
        this.handleImages = this.handleImages.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentDidUpdate(prevProps){

        if(this.props.postBook.book && prevProps.postBook.book==null){
            alert("Item uploaded. Thank you.")

        }
    }
    handleChange = (event) =>{
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }


    handleImages = (childData) => {
        this.setState({images:childData});
        const {validate} = this.state;
        if (this.state.images.length === 0){
            validate.ImageState = 0;
        }else{
            validate.ImageState = 1;
        }
        this.setState({validate});
        // console.log(this.state);

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.images);
        this.props.postBook({title:this.state.title,
                            author:this.state.author,
                            price:this.state.price,
                            description:this.state.description,
                            category:this.state.category,
                            sellerEmail:this.state.sellerEmail,
                            images:this.state.images})
    }

    render() {
        return(
            <>
            <Container>
                <h2 className='mt-5'>Post a Book</h2>

                <Form className='mt-5'>
                    <Form.Group className="mb-3" >
                        <Form.Label>Title</Form.Label>
                        <Form.Control name="title" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Author</Form.Label>
                        <Form.Control name="author" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Select name="category" aria-label="Default select example" onChange={this.handleChange}>
                        <option value= "0">...</option>
                        <option value= "Textbook">Textbook</option>
                        <option value="Romance">Romance</option>
                        <option value="Science-Fiction">Science-Fiction</option>
                        <option value="Biographies">Biographies</option>
                        <option value="History">History</option>
                    </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control name="price" type="number" onChange={this.handleChange}  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description" onChange={this.handleChange} />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="images">
                        <Form.Label>Images</Form.Label>
                        <ImageUpload handleImages={this.handleImages}/>
                    </Form.Group>
                    
                    <br></br>
                    
                    <Button  variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>   
            </>
        )
    }
}

export default Posting