import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useSignup() {
    const navigate = useNavigate();
    const { mutate: signup, isLoading } = useMutation({
        mutationFn: signupApi,
        onSuccess: (data) => {
            console.log('Signup successful: ', data);
            navigate('/authorization', { replace: true });
        },
        onError: (error) => {
            console.error('Signup error', error);
        },
    });

    return { signup, isLoading };
}
