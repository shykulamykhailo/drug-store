import { useForm } from 'react-hook-form';
import { useSignup } from './useSignup';
import styled from 'styled-components';
import Button from '../../ui/Button';

const StyledSignup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 200px 50px 0 50px;
`;
const StyledSignupForm = styled.form`
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

const regex = /^[A-Za-zА-Яа-яІіЇїЄє'’\-\s]{1,50}$/;

function SignupForm() {
    const { signup, isLoading } = useSignup();

    const { register, formState, getValues, handleSubmit, reset } = useForm();

    function onSubmit({ fullName, email, password }) {
        signup(
            {
                fullName,
                email,
                password,
            },
            {
                onSettled: () => reset(),
            }
        );
    }
    return (
        <StyledSignup>
            <StyledSignupForm onSubmit={handleSubmit(onSubmit)}>
                <h3>Full name</h3>
                <input
                    type="text"
                    id="fullName"
                    {...register('fullName', {
                        required: true,
                        pattern: {
                            value: regex,
                            message: 'Invalid first name format',
                        },
                    })}
                />
                <h3>Email</h3>
                <input
                    type="email"
                    id="email"
                    {...register('email', {
                        required: true,
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid last name format',
                        },
                    })}
                />
                <h3>Password</h3>
                <input
                    type="password"
                    id="password"
                    {...register('password', {
                        required: 'This field is required',
                        minLength: {
                            value: 8,
                            message: 'Password need a minimum of 8 characters',
                        },
                    })}
                />
                <Button disabled={isLoading}>Create new user</Button>
            </StyledSignupForm>
        </StyledSignup>
    );
}

export default SignupForm;
