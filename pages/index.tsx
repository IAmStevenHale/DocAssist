import { useAtom } from 'jotai';
import type { NextPage } from 'next';
import styled from 'styled-components';
import AdContainer from '../components/AdContainer';
import ManualSearch from '../components/ManualSearch';
import SmartSearch from '../components/SmartSearch';
import { themeAtom } from '../jotai/jotai';

const Home: NextPage = () => {
    const [theme] = useAtom(themeAtom);
    return (
        <Container theme={theme}>
            <SmartSearch/>
            <ManualSearch/>
        </Container>
    );
};

const Container = styled.div<{theme: string}>`
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme === 'dark' ? `var(--light-primary)` : `var(--dark-primary)`};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 10px 10px 10px;
`;

export default Home;
