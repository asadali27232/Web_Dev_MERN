import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';


function Header(props) {
    return (
        <>
            <Navbar className={`bg-${props.navColor}`} fixed={props.fixed} sticky={props.sticky} bg="light" expand={false}>
                <Container fluid className="sm:pt-1 sm:pb-1 md:pt-5 md:pb-2">
                    <div className='flex justify-between justify-items-center w-full md:px-12'>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                        <Navbar.Brand className="flex justify-between justify-items-center m-0">
                            <Link to='/'>
                                <img
                                    className="p-0 m-0 w-28 sm:w-full"
                                    src="images/nav-logo.png"
                                    alt="LOGO"
                                />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Brand className="icons flex justify-center justify-items-center m-0 w-min">
                            <Link to='/' className='mx-2 pt-1'>
                                <svg className="icon icon-search" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8.69183" cy="8.69183" r="7.94183" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                    <line x1="14.5865" y1="15.0811" x2="18.8274" y2="19.9418" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></line>
                                </svg>
                            </Link>
                            <Link to='/Wishlist' className='mx-2 pt-1'>
                                <svg className="icon icon-wishlist" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </Link>
                            <Link to='/login' className='mx-2 pt-1'>
                                <svg className="icon icon-account " width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5252 4.72006C14.5252 6.91192 12.7463 8.69011 10.5502 8.69011C8.35412 8.69011 6.5752 6.91192 6.5752 4.72006C6.5752 2.52819 8.35412 0.75 10.5502 0.75C12.7463 0.75 14.5252 2.52819 14.5252 4.72006Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M20.0001 20.0602C20.0001 14.8466 15.7692 10.6201 10.5501 10.6201C5.33101 10.6201 1.1001 14.8466 1.1001 20.0602" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </Link>
                            <Link to='/cart' className='mx-2 pt-1'>
                                <svg className="icon icon-cart-empty icon-cart" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.32813 6.98651C2.37027 6.60663 2.69135 6.31921 3.07355 6.31921H14.6095C14.9855 6.31921 15.3034 6.59757 15.353 6.97023L16.0964 6.87126L15.353 6.97024L17.0305 19.5702C17.0904 20.0198 16.7406 20.4192 16.2871 20.4192H1.67562C1.22866 20.4192 0.880911 20.0307 0.930198 19.5865L2.32813 6.98651Z" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M6.23096 6.19231V3.76923C6.23096 2.23983 7.47078 1 9.00019 1C10.5296 1 11.7694 2.23983 11.7694 3.76923V6.19231" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </Link>
                        </Navbar.Brand>
                    </div>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-false`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                                MENU
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <NavDropdown
                                    title="Dropdown"
                                    id={`offcanvasNavbarDropdown-expand-false`}
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Link to='/'>Home</Link>
                                <Link to='/login'>Login</Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Header