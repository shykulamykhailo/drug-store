import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import {
    getCurrentUser,
    loginGoogle as loginGoogleApi,
} from '../../services/apiAuth';
import { login as loginApi } from '../../services/apiAuth'; //

export function useAuth() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: loginGoogle, isLoading: isGoogleLoading } = useMutation({
        mutationFn: async () => {
            const user = await loginGoogleApi();
            return user;
        },
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user);
            getCurrentUser();
            console.log('Success, session and user saved:', user);

            navigate('/profile', { replace: true });
        },
        onError: (err) => {
            console.log('ERROR in useAuth', err);
        },
    });

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            console.log(user);
            queryClient.setQueryData(['user'], user.user);

            navigate('/profile', { replace: true });
        },
        onError: (err) => {
            console.log('ERROR', err);
        },
    });
    return {
        loginGoogle,
        isGoogleLoading,
        login,
        isLoading,
    };
}
