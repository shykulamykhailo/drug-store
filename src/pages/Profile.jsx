import styled from 'styled-components';
import Logout from '../features/authentication/Logout';
import { useUser } from '../features/authentication/useUser';
import OrdersHistory from '../features/history/OrdersHistory';

import Spinner from '../ui/Spinner';

const StyledProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px 50px 0 50px;
    gap: 20px;
`;

const ProfileHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

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
        <StyledProfileContainer>
            <ProfileHeader>
                <h3>Hello, {userName}</h3>
                <Logout />
            </ProfileHeader>
            <OrdersHistory />
        </StyledProfileContainer>
    );
}

export default Profile;
