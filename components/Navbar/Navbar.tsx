import styled from 'styled-components';
import ThemeButton  from './ThemeButton';
import ManualSearchButton from './SearchButton';
import { useAtom } from 'jotai';
import { themeAtom } from '../../jotai/jotai';

const Navbar = () => {
    const [theme] = useAtom(themeAtom);
    return (
        <Container theme={theme}>
            <ThemeButton />
            <h1>Doc Assist</h1>
            <ManualSearchButton />
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
    & > h1 {
     ${({ theme }) =>
        theme === 'dark'
        ? `background-color: var(--dark-primary);
            color: var(--dark-secondary);`
            : ` background-color: var(--light-primary);
            color: var(--light-secondary);`};
    }
`;

export default Navbar;
