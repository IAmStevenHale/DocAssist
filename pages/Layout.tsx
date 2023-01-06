import Navbar from '../components/Navbar/Navbar';
import { themeAtom } from '../jotai/jotai';
import { useAtom } from 'jotai';
import styled from 'styled-components';
import Footer from '../components/Footer';

function Layout({ children }: any) {
    const [theme] = useAtom(themeAtom);

    return (
        <Container theme={theme}>
                <InnerContainer theme={theme}>
                <Navbar />
                <main>{children}</main>
                {/* <Footer /> */}
                </InnerContainer>
        </Container>
    );
}

const Container = styled.div`
transition: 500ms;
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
