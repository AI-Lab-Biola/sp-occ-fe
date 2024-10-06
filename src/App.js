import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from './firebase';  // Import Firebase Auth from firebase.js

function App() {
    const [user, setUser] = useState(null);  // Track logged-in user
    const [authError, setAuthError] = useState(null);  // Handle login errors
    const [message, setMessage] = useState('');  // API message
    const [data, setData] = useState(null);  // API data
    const [question, setQuestion] = useState('');  // Question input
    const [aiResponse, setAiResponse] = useState('');  // AI response

    useEffect(() => {
        // Fetch message from backend
        fetch('http://localhost:3001/api/message')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching message:', error));

        // Fetch data from backend
        fetch('http://localhost:3001/api/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Google sign-in logic with detailed error handling
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);  // Sign in with popup
            const idToken = await result.user.getIdToken();  // Get ID token

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

        try {
            // Send the question to the backend API for storing in Firebase and getting AI response
            const response = await axios.post('http://localhost:3001/api/store-question', { question });
            alert('Question submitted successfully!');
            setAiResponse(response.data.answer);  // Set the AI response from the backend
            setQuestion('');  // Clear the input after submission
        } catch (error) {
            console.error('Error submitting question:', error);
            alert('Error submitting question');
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                {!user ? (
                    <>
                        {/* Google sign-in button */}
                        <h2>Login</h2>
                        <button onClick={handleGoogleSignIn}>Sign in with Google</button>

                        {authError && <p style={{ color: 'red' }}>{authError}</p>}
                    </>
                ) : (
                    <>
                        <h1>Welcome, {user.email}</h1>
                        <button onClick={handleLogout}>Logout</button>

                        {/* Text bubble to input question */}
                        <div>
                            <h2>Submit a Question</h2>
                            <textarea
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder="Type your question here..."
                                rows="4"
                                cols="50"
                            />
                            <br />
                            <button onClick={handleSubmitQuestion}>Submit Question</button>
                        </div>

                        {/* Display AI response */}
                        {aiResponse && (
                            <div>
                                <h2>AI Response:</h2>
                                <p>{aiResponse}</p>
                            </div>
                        )}
                    </>
                )}

                <h1>Message from API:</h1>
                <p>{message || 'Loading...'}</p>

                <h1>Data from API:</h1>
                <pre>{data ? JSON.stringify(data, null, 2) : 'Loading data...'}</pre>
            </header>
        </div>
    );
}

export default App;
