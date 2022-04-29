import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown, Container, Modal, Button, Form } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
// import {google_clientId} from '../config/default.json'



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
        this.default = require('../config/default.json');
        this.handleLoginModal = this.handleLoginModal.bind(this);
        this.handleRegisterModal = this.handleRegisterModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.testPrint = this.testPrint.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleGLogin = this.handleGLogin.bind(this);
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.user.errMess !== null && prevProps.user.errMess == null ) {
          alert(this.props.user.errMess);
        }
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
        // console.log(this.state);
    }

    handleRegister(event){
        event.preventDefault();
        this.handleRegisterModal();
        this.props.registerUser({registerEmail: this.state.registerEmail, registerPassword1: this.state.registerPassword1});
    }
    
    handleLogin(event){
        event.preventDefault();
        this.handleLoginModal();
        this.props.loginUser({loginEmail: this.state.loginEmail, loginPassword: this.state.loginPassword});
    }
    
    handleGLogin(event){
        this.handleLoginModal();
        this.props.handleGoogleLogin(event);
    }

    testPrint() {
        console.log(this.state);
    }
    

    render() {
        return(
            
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Link to="/"><Navbar.Brand >BookDeal</Navbar.Brand></Link>
                    { !this.props.user.isAuthenticated ? 
                        <>
                        <Nav className="ms-auto" onSelect = {this.handleLoginModal}>
                            <Nav.Link href="#login">Login</Nav.Link>
                        </Nav>
                        <Nav onSelect = {this.handleRegisterModal}>
                            <Nav.Link href="#register">Register</Nav.Link>
                        </Nav>
                        </>

                    :
                    <Nav className="ms-auto" >
                        <Navbar.Brand>{`Hi, ${this.props.user.user}`}</Navbar.Brand>

                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <Nav  >
                                <Link to="/post_book">
                                    <NavDropdown.Item href="#post">Post a Book</NavDropdown.Item>
                                </Link>
                            </Nav>
                            <Nav  >
                                <Link to={`/books/your_books/${this.props.user.user}`}>
                                    <NavDropdown.Item href="#post">Your Books</NavDropdown.Item>
                                </Link>
                            </Nav>
                            <Nav  onSelect = {this.props.logoutUser}>
                                <NavDropdown.Item href="#logout">Log Out</NavDropdown.Item>
                            </Nav>
                        </NavDropdown>
                    </Nav>

                    }

                    
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

                        <Button  variant="primary" type="submit" onClick={this.handleLogin}>
                            Submit
                        </Button>
                    </Form>

                    <GoogleLogin
                        clientId={this.default.google_clientId}
                        buttonText="Log in with Google"
                        onSuccess={ this.handleGLogin }
                        onFailure = {() => {return}}
                        cookiePolicy={'single_host_origin'}
                        ></GoogleLogin>
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

                        <Button  variant="primary" type="submit" onClick={this.handleRegister}>
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