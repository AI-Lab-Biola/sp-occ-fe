import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FrontPage.css';  // Import the custom CSS file
import AOS from 'aos';  // Import AOS library
import 'aos/dist/aos.css';  // Import AOS styles
import { Navbar, Nav, NavDropdown, Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';  // Importing react-icons for social media icons

const FrontPage = ({ handleGoogleSignIn, authError }) => {

    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({
            duration: 1200,  // Animation duration (milliseconds)
            once: true,  // Ensure the animation happens only once
        });
    }, []);

    return (
        <>
            {/* Header */}
            <Navbar bg="light" expand="lg" fixed="top" className="custom-navbar">
                <Navbar.Brand href="https://www.samaritanspurse.org/operation-christmas-child/" target="_blank" rel="noopener noreferrer">
                    Operation Christmas Child
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavDropdown title="Pack a Shoebox" id="pack-shoebox-dropdown">
                            <NavDropdown.Item href="https://www.samaritanspurse.org/operation-christmas-child/pack-a-shoe-box/" target="_blank" rel="noopener noreferrer">How to Pack</NavDropdown.Item>
                            <NavDropdown.Item href="#" target="_blank" rel="noopener noreferrer">Gift Suggestions</NavDropdown.Item>
                            <NavDropdown.Item href="#" target="_blank" rel="noopener noreferrer">What Not to Pack</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="About" id="about-dropdown">
                            <NavDropdown.Item href="https://www.samaritanspurse.org/operation-christmas-child/mission-and-history/" target="_blank" rel="noopener noreferrer">Mission and History</NavDropdown.Item>
                            <NavDropdown.Item href="#" target="_blank" rel="noopener noreferrer">Impact Stories</NavDropdown.Item>
                            <NavDropdown.Item href="#" target="_blank" rel="noopener noreferrer">FAQs</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Resources" id="resources-dropdown">
                            <NavDropdown.Item href="https://www.samaritanspurse.org/operation-christmas-child/project-leader/" target="_blank" rel="noopener noreferrer">Project Leader Resources</NavDropdown.Item>
                            <NavDropdown.Item href="#" target="_blank" rel="noopener noreferrer">Promotional Materials</NavDropdown.Item>
                            <NavDropdown.Item href="#" target="_blank" rel="noopener noreferrer">Downloadable Forms</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Get Involved" id="get-involved-dropdown">
                            <NavDropdown.Item href="https://www.samaritanspurse.org/operation-christmas-child/ways-to-volunteer/" target="_blank" rel="noopener noreferrer">Volunteer Opportunities</NavDropdown.Item>
                            <NavDropdown.Item href="#" target="_blank" rel="noopener noreferrer">Donate</NavDropdown.Item>
                            <NavDropdown.Item href="#" target="_blank" rel="noopener noreferrer">Become a Year-Round Volunteer</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <main>
                {/* Logo displayed under the navbar */}
                <div className="text-center logo-container">
                    <img src="/occ-logo-1200x1200.jpg" alt="Logo" className="logo" />

                    {/* Add the lines under the logo */}
                    <h2 className="mt-4">What Goes in My Shoebox?</h2>
                    <p className="lead">Make Your Gift Fun, Full, and Personalized.</p>

                    {/* Section with the background image and sign-in content */}
                    <div
                        className="image-section"
                        style={{
                            backgroundImage: `url('/sadkidwithbox.jpg')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '800px',  // Adjust this height as needed
                            position: 'relative'
                        }}
                        data-aos="fade-up"  // Apply AOS animation
                    >
                        <div className="overlay">
                            {/* Replaced with sign-in content */}
                            <h1>Welcome to Operation Christmas Child</h1>
                            <p>Sign in to submit your questions and interact with AI.</p>
                            <Button onClick={handleGoogleSignIn} variant="primary" className="mt-3">
                                Sign in with Google
                            </Button>
                            {authError && <p style={{ color: 'red' }}>{authError}</p>}
                        </div>
                    </div>
                </div>

                {/* New Section with Photo on the Left and Text on the Right */}
                <div className="full-width-section bg-light-gray-section">
                    <Container className="py-5">
                        <Row className="align-items-center">
                            {/* Left side: Image */}
                            <Col md={6}>
                                <img src="/2252NA-A-1010_1800x1200.jpg" alt="Shoebox Image" className="img-fluid half-width-image rounded" />
                            </Col>
                            {/* Right side: Description */}
                            <Col md={6}>
                                <h3>About the Shoebox Gift</h3>
                                <p>
                                    A shoebox gift brings joy, hope, and the Good News of Jesus Christ to children in need around the world.
                                    It's packed with fun, full, and meaningful items that make each gift personalized and impactful.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-socials">
                        {/* Social media icons */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="mailto:contact@operationchristmaschild.com"><FaEnvelope /></a>
                    </div>
                    <div className="footer-links">
                        <a href="#faq">FAQ</a> | <a href="#contact">Contact Us</a> | <a href="#app">Greatest Journey™ App</a> | <a href="#give">Ways to Give</a>
                    </div>
                    <p>&copy; 2024 Operation Christmas Child. A project of Samaritan's Purse.</p>
                </div>
            </footer>
        </>
    );
};

export default FrontPage;
