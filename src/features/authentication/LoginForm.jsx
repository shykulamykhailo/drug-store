import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLogin } from './useLogin';
import { useGoogleLogin } from './useGoogleLogin';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { login, isLoading } = useLogin();
    const { loginGoogle, isGoogleLoading } = useGoogleLogin();

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) return;
        login(
            { email, password },
            {
                onSetteled: () => {
                    setEmail('');
                    setPassword('');
                },
            }
        );
    }

    function handleGoogleLogin() {
        loginGoogle();
        console.log('google authorization');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Enter your email</h3>
                <input
                    type="email"
                    id="email"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>Enter your password</p>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Log in</button>

                <button onClick={() => navigate('/signup')}>Sign up</button>
            </form>
            <button type="button" onClick={handleGoogleLogin}>
                Google login
            </button>
        </>
    );
}

export default LoginForm;
