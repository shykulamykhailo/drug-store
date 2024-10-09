import Logout from '../features/authentication/Logout';
import { useUser } from '../features/authentication/useUser';
import Spinner from '../ui/Spinner';

function Profile() {
    const { user, isLoading } = useUser();

    if (isLoading) return <Spinner />;

    console.log(user);
    return (
        <div>
            <h2>my profile</h2>

            <Logout />
        </div>
    );
}

export default Profile;
