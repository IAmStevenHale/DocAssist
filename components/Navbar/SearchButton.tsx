import styled from 'styled-components';
import { showManualSearchAtom, themeAtom } from '../../jotai/jotai';
import { useAtom } from 'jotai';

const SearchButton = () => {
    const [theme] = useAtom(themeAtom);
    const [showManualSearch, setShowManualSearch] = useAtom(showManualSearchAtom);

    return (
        <Container theme={theme}>
            <button onClick={() => setShowManualSearch(!showManualSearch)}>
                {showManualSearch ? `Smart Search` : `Manual Search`}
            </button>
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
            color: var(--dark-primary);`
            : `background-color: var(--light-secondary);
            color: var(--light-primary);`
            };
        }
}
`;

export default SearchButton;