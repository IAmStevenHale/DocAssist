import styled from 'styled-components';
import { useAtom } from 'jotai';
import { showManualSearchAtom, themeAtom } from '../jotai/jotai';

const ManualSearch = () => {
    const [theme] = useAtom(themeAtom);
    const [showManualSearch] = useAtom(showManualSearchAtom);
    return (
        <Container theme={theme} showManualSearch={showManualSearch}>
                ManualSearch
        </Container>
    )
}

const Container = styled.div <{ showManualSearch: boolean; }>`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    flex: ${({ showManualSearch }) => showManualSearch ? `1` : `0`};
    opacity: ${({ showManualSearch }) => !showManualSearch && `0`};
    border:  ${({ theme }) => theme === 'dark' ? `2px solid var(--dark-secondary)` : `2px solid var(--light-secondary)`};
    color: ${({ theme }) => theme === 'dark' ? `var(--dark-secondary)` : `var(--light-secondary)`};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${({ showManualSearch }) => !showManualSearch && `-4px`};
`;

export default ManualSearch