import Navbar from '../components/Navbar/Navbar';
// import Footer from './footer';
import { showManualSearchAtom, themeAtom } from '../jotai/jotai';
import { useAtom } from 'jotai';
import styled from 'styled-components';
import ManualSearch from '../components/ManualSearch';
import AdContainer from '../components/AdContainer';
import Footer from '../components/Footer';

function Layout({ children }: any) {
    const [theme] = useAtom(themeAtom);
    const [showManualSearch] = useAtom(showManualSearchAtom);

    return (
        <Container theme={theme}>
            <AdContainer />
                <InnerContainer theme={theme}>
                <Navbar />
                <main>{children}</main>
                <Footer />
                </InnerContainer>
            <AdContainer />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: ${({ theme }) =>
            theme === 'dark'
                ? `var(--dark-primary)` : `var(--light-primary)`};
    & main {
        height: 100%;
        width: 100%;
    }
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export default Layout;
