import { useForm } from 'react-hook-form';
import { useSignup } from './useSignup';

const regex = /^[A-Za-zА-Яа-яІіЇїЄє'’-]{1,50}$/;

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>Full name</p>
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
            {/* <input
                type="text"
                id="lastName"
                {...register('lastName', {
                    required: true,
                    pattern: {
                        value: regex,
                        message: 'Invalid last name format',
                    },
                })}
            /> */}
            <p>email</p>
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
            <p>password</p>
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
            <button>Create new user</button>
        </form>
    );
}

export default SignupForm;
