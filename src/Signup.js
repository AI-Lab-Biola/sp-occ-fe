import { useState } from 'react';
import axios from 'axios';  // Import axios for making API requests

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            // Send the email and password to the backend API for user signup
            const response = await axios.post('http://localhost:3001/api/signup', { email, password });

            // Display success message from the backend
            setSuccess(response.data.message);
        } catch (error) {
            // Handle any errors
            setError(error.response?.data?.error || 'Error occurred during signup.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSignup}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Sign Up</button>
            </form>

            {/* Display error message */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Display success message */}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default Signup;
