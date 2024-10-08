import { useQuery } from '@tanstack/react-query';
import Logout from '../features/authentication/Logout';

function Profile() {
    // const { data: user } = useQuery(['user']);

    // console.log(user);

    return (
        <div>
            <h2>my profile</h2>
            <Logout />
        </div>
    );
}

export default Profile;
