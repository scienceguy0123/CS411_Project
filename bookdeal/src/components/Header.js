import React, {Component} from 'react';
import {Nav, Navbar, Container, Modal, Button, Form } from 'react-bootstrap';

class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLoginModalOpen: false,
            isRegisterModalOpen: false,
            loginEmail: "",
            loginPassword: "",
            registerEmail: "",
            registerPassword1: "",
            registerPassword2: ""

        }
        
        this.handleLoginModal = this.handleLoginModal.bind(this);
        this.handleRegisterModal = this.handleRegisterModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.testPrint = this.testPrint.bind(this);
    }
    
    handleLoginModal() {
        this.setState({
            isLoginModalOpen: ! this.state.isLoginModalOpen
        });
    }

    handleRegisterModal() {
        this.setState({
            isRegisterModalOpen: ! this.state.isRegisterModalOpen
        });
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

    testPrint() {
        console.log(this.state);
    }

    render() {
        return(
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">BookDeal</Navbar.Brand>
                    <Nav className="ms-auto" onSelect = {this.handleLoginModal}>
                        <Nav.Link href="#features">Login</Nav.Link>
                    </Nav>
                    <Nav onSelect = {this.handleRegisterModal}>
                        <Nav.Link href="#pricing">Register</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
                
                <Modal show={this.state.isLoginModalOpen} onHide={this.handleLoginModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            name="loginEmail" 
                            id="loginemail" 
                            type="email" 
                            placeholder="Enter email"
                            onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            name="loginPassword" 
                            id="loginPassword" 
                            type="password" 
                            placeholder="Password" 
                            onChange={this.handleChange}/>
                        </Form.Group>

                        <Button  variant="primary" type="submit" onClick={this.testPrint}>
                            Submit
                        </Button>
                    </Form>
                    </Modal.Body>
                </Modal>

                <Modal show={this.state.isRegisterModalOpen} onHide={this.handleRegisterModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            name="registerEmail" 
                            id="registerEmail" 
                            type="email"
                            placeholder="Enter email"
                            onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            name="registerPassword1" 
                            id="registerPassword1" 
                            type="password" 
                            placeholder="Password" 
                            onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Double Check Password</Form.Label>
                            <Form.Control 
                            name="registerPassword2" 
                            id="registerPassword2" 
                            type="password" 
                            placeholder="Password" 
                            onChange={this.handleChange}/>
                        </Form.Group>

                        <Button  variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Modal.Body>
                </Modal>
            </>



        )
    }
}

export default Header;