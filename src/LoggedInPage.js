import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './LoggedInPage.css';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const LoggedInPage = ({ user, question, setQuestion, handleSubmitQuestion, loading, aiResponse, handleLogout }) => {
    return (
        <div className="page-container">
            {/* Black Header with the image logo */}
            <header className="top-header">
                <img src="/sp-white-logo.png" alt="Samaritan's Purse Logo" className="header-logo" />
            </header>

            {/* Navbar */}
            <Navbar bg="light" expand="lg" className="custom-navbar">
                <Navbar.Brand href="https://www.samaritanspurse.org/operation-christmas-child/" target="_blank" rel="noopener noreferrer">
                    Operation Christmas Child
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
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

                    <Nav className="ml-auto">
                        <Button onClick={handleLogout} className="btn-logout" variant="outline-danger">
                            Logout
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* Welcome message moved under the navbar */}
            <h1 className="welcome-message">Welcome, {user.email}</h1>

            {/* Main content */}
            <div className="logged-in-container content">
                {/* Stylized Question Submission Form */}
                <div className="search-container">
                    <h2>Can I Pack _______?</h2>
                    <div className="search-bar">
                        <input
                            type="text"
                            className="search-input"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Toys, Clothing, Notes, etc."
                        />
                        <button
                            onClick={handleSubmitQuestion}
                            disabled={loading}
                            className="search-btn"
                        >
                            {loading ? 'Searching...' : 'Search Gift'}
                        </button>
                    </div>
                </div>

                {/* AI response display */}
                {loading ? (
                    <p>Loading AI response...</p>
                ) : aiResponse && (
                    <div className="response-section">
                        <h2>AI Response:</h2>
                        <p>{aiResponse}</p>
                    </div>
                )}

                {/* White box with image grid */}
                <div className="image-box">
                    <div className="image-grid">
                        <img src="/images/image1.jpg" alt="Image 1" className="grid-image" />
                        <img src="/images/image2.jpg" alt="Image 2" className="grid-image" />
                        <img src="/images/image3.jpg" alt="Image 3" className="grid-image" />
                        <img src="/images/image4.jpg" alt="Image 4" className="grid-image" />
                        <img src="/images/image5.jpg" alt="Image 5" className="grid-image" />
                        <img src="/images/image6.jpg" alt="Image 6" className="grid-image" />
                    </div>

                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="mailto:contact@operationchristmaschild.com"><FaEnvelope /></a>
                    </div>
                    <div className="footer-links">
                        <a href="#faq">FAQ</a> | <a href="#contact">Contact Us</a> |
                        <a href="#app">Greatest Journey™ App</a> | <a href="#give">Ways to Give</a>
                    </div>
                    <p>&copy; 2024 Operation Christmas Child. A project of Samaritan's Purse.</p>
                </div>
            </footer>
        </div>
    );
};

export default LoggedInPage;
