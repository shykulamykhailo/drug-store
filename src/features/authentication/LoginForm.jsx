import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from './useAuth';
import styled from 'styled-components';
import Button from '../../ui/Button';
import { FaGoogle } from 'react-icons/fa';

const StyledAuthorization = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 200px 50px 0 50px;
`;

const StyledAuthorizationForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    max-width: 300px;
    min-width: 300px;
    gap: 10px;

    h3 {
        color: var(--color-green-700);
    }

    input {
        height: 30px;
        border: 2px solid var(--color-green-700);
        border-radius: 5px;
        padding: 5px;

        &:focus {
            outline: none;
            border: 3px solid var(--color-green-800);
        }

        &:invalid {
            border-color: var(--color-red-700);
        }
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
`;

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { loginGoogle, isGoogleLoading, login, isLoading } = useAuth();

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
        <StyledAuthorization>
            <StyledAuthorizationForm onSubmit={handleSubmit}>
                <h3>Enter your email</h3>
                <input
                    type="email"
                    id="email"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <h3>Enter your password</h3>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ButtonsContainer>
                    <Button disabled={isLoading}>Log in</Button>
                    <Button
                        onClick={() => navigate('/signup')}
                        disabled={isLoading}
                    >
                        Sign up
                    </Button>
                </ButtonsContainer>
            </StyledAuthorizationForm>
            <Button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading || isGoogleLoading}
            >
                <FaGoogle />
            </Button>
        </StyledAuthorization>
    );
}

export default LoginForm;
