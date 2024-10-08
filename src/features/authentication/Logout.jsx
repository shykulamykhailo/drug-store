import { useLogout } from './useLogout';

function Logout() {
    const { logout, isLoading } = useLogout();
    return (
        <button onClick={logout} disabled={isLoading}>
            Log out
        </button>
    );
}

export default Logout;
