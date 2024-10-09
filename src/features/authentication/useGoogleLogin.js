import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { loginGoogle as loginGoogleApi } from '../../services/apiAuth';

export function useGoogleLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutate: loginGoogle, isLoading } = useMutation({
        mutationFn: () => loginGoogleApi(),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user);
            console.log('succes');
            navigate('/profile', { replace: true });
        },
        onError: (err) => {
            console.log('ERROR', err);
        },
    });

    return { loginGoogle, isLoading };
}
