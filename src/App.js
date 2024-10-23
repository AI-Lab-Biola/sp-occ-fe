import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './FrontPage';
import About from './About';
import Resources from './Resources';
import GetInvolved from './GetInvolved';
import LoggedInPage from './LoggedInPage'; // New component for logged-in content

function App() {
    const [user, setUser] = useState(null);  // Track logged-in user
    const [authError, setAuthError] = useState(null);  // Handle login errors
    const [question, setQuestion] = useState('');  // Question input
    const [aiResponse, setAiResponse] = useState('');  // AI response
    const [loading, setLoading] = useState(false);  // Loading state for submission

    // Google sign-in logic
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const idToken = await result.user.getIdToken(true);  // Force refresh the token

            // Send ID token to backend for verification
            const response = await axios.post('http://localhost:3001/api/google-signin', { idToken });
            setUser(response.data);  // Assuming backend responds with user data
        } catch (error) {
            console.error('Error during Google sign-in:', error);
            setAuthError(`Google sign-in failed: ${error.message}`);
        }
    };

    // User logout logic
    const handleLogout = async () => {
        await signOut(auth);
        setUser(null);
    };

    // Handle question submission
    const handleSubmitQuestion = async () => {
        if (!question) {
            alert('Please enter a question!');
            return;
        }

        if (!user) {
            alert('User is not logged in!');
            return;
        }

        setLoading(true);
        setAiResponse('');

        try {
            const response = await axios.post('http://localhost:3001/api/store-question', {
                question,
                userId: user.uid  // Include the user ID
            });

            setAiResponse(response.data.answer);
            setQuestion('');  // Clear the input after submission
        } catch (error) {
            console.error('Error submitting question:', error);
            alert('Error submitting question');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    {/* Show the FrontPage only when user is not logged in */}
                    {!user ? (
                        <Routes>
                            <Route path="/" element={<FrontPage handleGoogleSignIn={handleGoogleSignIn} authError={authError} />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/resources" element={<Resources />} />
                            <Route path="/get-involved" element={<GetInvolved />} />
                        </Routes>
                    ) : (
                        <LoggedInPage
                            user={user}
                            question={question}
                            setQuestion={setQuestion}
                            handleSubmitQuestion={handleSubmitQuestion}
                            loading={loading}
                            aiResponse={aiResponse}
                            handleLogout={handleLogout}
                        />
                    )}
                </header>
            </div>
        </Router>
    );
}

export default App;
