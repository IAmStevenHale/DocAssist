import styled from 'styled-components';
import ThemeButton  from './ThemeButton';
import { useAtom } from 'jotai';
import { themeAtom } from '../../jotai/jotai';

const Navbar = () => {
    const [theme] = useAtom(themeAtom);
    return (
        <Container theme={theme}>
            <ThemeButton />
            <h1>Doc Assist</h1>
            <div style={{minWidth: '150px'}}/>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    & > h1 {
     ${({ theme }) =>
        theme === 'dark'
        ? `color: var(--dark-secondary);`
            : `color: var(--light-secondary);`};
    }
`;

export default Navbar;
