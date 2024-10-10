import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../services/supabase';
import { useQueryClient } from '@tanstack/react-query';

function GoogleAuthCallback() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    useEffect(() => {
        const { hash } = window.location;
        const params = new URLSearchParams(hash.substring(1));

        const access_token = params.get('access_token');
        const refresh_token = params.get('refresh_token');

        if (access_token && refresh_token) {
            supabase.auth
                .setSession({
                    access_token,
                    refresh_token,
                })
                .then(({ data, error }) => {
                    if (error) {
                        console.error('Error setting session:', error);
                    } else {
                        console.log('Session set successfully:', data);
                        queryClient.setQueryData(['user'], data.user);

                        navigate('/profile');
                    }
                });
        } else {
            console.error('No tokens found in URL');
        }
    }, [navigate]);

    return <div>Loading...</div>;
}

export default GoogleAuthCallback;
