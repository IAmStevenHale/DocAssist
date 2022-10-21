import styled from 'styled-components';
import { themeAtom } from '../../jotai/jotai';
import { useAtom } from 'jotai';

const ThemeButton = () => {
    const [theme, setTheme] = useAtom(themeAtom);
    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    };
    return (
        <Container theme={theme}>
            <button onClick={() => toggleTheme()}>{theme === 'dark' ? `Light Mode` : `Dark Mode`}</button>
        </Container>
    );
};

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: fit-content;
& button {
    min-width: 150px;
    cursor: pointer;
    padding: 5px 20px;
    border-radius: 5px;
${({ theme }) =>
        theme === 'dark'
        ? `border: 2px solid var(--dark-secondary);
            background-color: var(--dark-primary);
            color: var(--dark-secondary);`
            : `border: 2px solid var(--light-secondary);
            background-color: var(--light-primary);
            color: var(--light-secondary);`};

            

        &:hover{
        ${({ theme }) =>
        theme === 'dark' ?
            `background-color: var(--dark-secondary);
            color: var(--dark-secondary);`
            : `background-color: var(--light-secondary);
            color: var(--light-primary);`
            };
        }
}
`;

export default ThemeButton;
