import Logout from '../features/authentication/Logout';
import { useUser } from '../features/authentication/useUser';

import Spinner from '../ui/Spinner';
import TestComponent from '../ui/TestComponent';

function Profile() {
    const { user, isLoading, fetchStatus } = useUser();

    if (isLoading) return <Spinner />;

    console.log(user);
    return (
        <div>
            {/* <TestComponent /> */}
            <h2>my profile</h2>

            <Logout />
        </div>
    );
}

export default Profile;
