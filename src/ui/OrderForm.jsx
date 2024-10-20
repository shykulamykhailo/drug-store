import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useStore } from '../context/StoreContext';
import Button from './Button';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 20rem;
    border: 3px solid var(--color-green-700);
    border-radius: 10px;
    padding: 20px;
    height: 390px;
`;

const StyledInput = styled.input`
    margin-bottom: 20px;
    padding: 5px;
    border: 1px solid var(--color-green-600);
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border: 2px solid var(--color-green-800);
    }

    &:invalid {
        border-color: var(--color-red-700);
    }
`;

const StyledErrorMessage = styled.p`
    color: var(--color-red-700);
    font-size: 0.7rem;
    margin-top: -15px;
    margin-bottom: 10px;
`;

const regex = /^[A-Za-zА-Яа-яІіЇїЄє'’\-\s]{1,50}$/;

function OrderForm({ onFormSubmit }) {
    const { storeData } = useStore();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    console.log(errors);
    const onSubmit = (data) => {
        onFormSubmit(data);
        reset();
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            Full Name{' '}
            <StyledInput
                {...register('fullName', {
                    required: true,
                    pattern: {
                        value: regex,
                        message: 'Invalid name format',
                    },
                })}
            />
            {errors.fullName && (
                <StyledErrorMessage>
                    {errors.fullName.message}
                </StyledErrorMessage>
            )}
            Email{' '}
            <StyledInput
                {...register('email', {
                    required: true,
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid last name format',
                    },
                })}
            />
            {errors.email && (
                <StyledErrorMessage>{errors.email.message}</StyledErrorMessage>
            )}
            Phone number
            <StyledInput
                {...register('phoneNumber', {
                    required: true,
                    pattern: {
                        // eslint-disable-next-line no-useless-escape
                        value: /^[0-9\-]+$/,
                        message: 'Invalid last name format',
                    },
                })}
            />
            {errors.phoneNumber && (
                <StyledErrorMessage>
                    {errors.phoneNumber.message}
                </StyledErrorMessage>
            )}
            Address{' '}
            <StyledInput {...register('location', { required: true })} />
            <Button
                type="submit"
                disabled={
                    storeData.length === 0 || Object.keys(errors).length > 0
                }
            >
                Submit order
            </Button>
        </StyledForm>
    );
}

export default OrderForm;
