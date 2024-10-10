import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';

export function useUser() {
    console.log('useUser called');
    const {
        isLoading,
        data: user,
        fetchStatus,
    } = useQuery({
        queryKey: ['user'],
        queryFn: getCurrentUser,
        refetchOnWindowFocus: true,
    });

    return {
        isLoading,
        user,
        isAuthenticated: user?.role === 'authenticated',
        fetchStatus,
    };
}
