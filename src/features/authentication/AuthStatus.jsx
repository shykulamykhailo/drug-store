import Spinner from '../../ui/Spinner';
import { useUser } from './useUser';

function AuthStatus() {
    const { isLoading, isAuthenticated } = useUser();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div>
            {isAuthenticated ? (
                <div>Welcome back, user</div>
            ) : (
                <div>PLease log in</div>
            )}
        </div>
    );
}

export default AuthStatus;
