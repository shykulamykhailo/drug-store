import { useForm } from 'react-hook-form';
import styled from 'styled-components';

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
            First name <input {...register('firstName')} />
            Last name <input {...register('lastName')} />
            Email <input {...register('email')} />
            Phone number
            <input {...register('phoneNumber')} />
            Address <input {...register('location')} />
            <button type="submit">Submit</button>
        </StyledForm>
    );
}

export default Form;
