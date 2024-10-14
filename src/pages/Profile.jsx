import Logout from '../features/authentication/Logout';
import { useUser } from '../features/authentication/useUser';
import OrdersHistory from '../features/history/OrdersHistory';

import Spinner from '../ui/Spinner';

function Profile() {
    const { user, isLoading } = useUser();

    if (isLoading) return <Spinner />;

    const userName = user?.user_metadata?.fullName
        ? user.user_metadata.fullName.split(' ')[0]
        : user?.user_metadata?.full_name
        ? user.user_metadata.full_name.split(' ')[0]
        : 'User';
    console.log(user);
    return (
        <div>
            <h2>my profile</h2>
            <p>Hello, {userName}</p>
            <OrdersHistory />

            <Logout />
        </div>
    );
}

export default Profile;
