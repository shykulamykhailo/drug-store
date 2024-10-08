import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useStore } from '../context/StoreContext';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 20rem;
`;

const regex = /^[A-Za-zА-Яа-яІіЇїЄє'’-]{1,50}$/;

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
        // console.log(data);
        onFormSubmit(data);
        reset();
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            First name{' '}
            <input
                {...register('firstName', {
                    required: true,
                    pattern: {
                        value: regex,
                        message: 'Invalid first name format',
                    },
                })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
            Last name{' '}
            <input
                {...register('lastName', {
                    required: true,
                    pattern: {
                        value: regex,
                        message: 'Invalid last name format',
                    },
                })}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
            Email{' '}
            <input
                {...register('email', {
                    required: true,
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid last name format',
                    },
                })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            Phone number
            <input
                {...register('phoneNumber', {
                    required: true,
                    pattern: {
                        // eslint-disable-next-line no-useless-escape
                        value: /^[0-9\-]+$/,
                        message: 'Invalid last name format',
                    },
                })}
            />
            {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
            Address <input {...register('location', { required: true })} />
            <button
                type="submit"
                disabled={
                    storeData.length === 0 || Object.keys(errors).length > 0
                }
            >
                Submit
            </button>
        </StyledForm>
    );
}

export default OrderForm;
