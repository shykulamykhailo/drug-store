import Button from '../../ui/Button';
import { useLogout } from './useLogout';

function Logout() {
    const { logout, isLoading } = useLogout();
    return (
        <Button size="small" onClick={logout} disabled={isLoading}>
            Log out
        </Button>
    );
}

export default Logout;
