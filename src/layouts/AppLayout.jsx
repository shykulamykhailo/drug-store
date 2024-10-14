import { Outlet } from 'react-router-dom';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import styled from 'styled-components';

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const MainContent = styled.main`
    flex: 1;
    padding-bottom: 4rem;
    overflow-y: auto;
`;

const FooterContent = styled.div`
    position: relative;
`;

function AppLayout() {
    return (
        <StyledLayout>
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
            <Footer />
        </StyledLayout>
    );
}

export default AppLayout;
