import { Outlet } from 'react-router-dom';
import Header from '../ui/Header';
import MainNav from '../ui/MainNav';

function AppLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default AppLayout;
