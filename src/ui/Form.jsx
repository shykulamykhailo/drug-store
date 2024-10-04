import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Map from './Map';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 20rem;
`;

function Form({ onFormSubmit }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        onFormSubmit(data);
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            First name <input {...register('firstName', { required: true })} />
            Last name <input {...register('lastName', { required: true })} />
            Email <input {...register('email', { required: true })} />
            Phone number
            <input {...register('phoneNumber', { required: true })} />
            Address <input {...register('location', { required: true })} />
            <button type="submit">Submit</button>
            <Map />
        </StyledForm>
    );
}

export default Form;
