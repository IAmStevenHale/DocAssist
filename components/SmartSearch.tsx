import { useAtom } from "jotai";
import { showManualSearchAtom, themeAtom } from "../jotai/jotai";
import styled from 'styled-components';
import {initData, rakeFilter, determineScore} from '../lib/helpers'
import { useState } from "react";

const SmartSearch = () => {
    const [theme] = useAtom(themeAtom);
    const [showManualSearch] = useAtom(showManualSearchAtom);
    const [notes, setNotes] = useState('');
    const [selectedDoctorTypes, setSelectedDoctorTypes] = useState<any>([]);
    const [results, setResults] = useState([]);
    const [showTop, setShowTop] = useState(5);
    const doctorTypes = ["AD", "AO", "AOS", "C", "G", "HR", "NC", "OP", "S", "SP"];
   
    function handleSubmit(e:any) {
        e.preventDefault();
        setResults(determineScore(rakeFilter(notes), selectedDoctorTypes, initData(), showTop))
    }

    function handleCheckboxChange(e: any) {
        if (!selectedDoctorTypes.includes(e.target.id)){
            setSelectedDoctorTypes([...selectedDoctorTypes, e.target.id]);
        }else{
            console.log(selectedDoctorTypes)
            setSelectedDoctorTypes([...selectedDoctorTypes, e.target.id]);
        }
    };

    function handleChange(e:any) {
        setNotes(e.target.value);
    }

    function handleShowTop(e: any) {
        setShowTop(e.target.value);
    }

    return (
        <Container theme={theme} showManualSearch={showManualSearch}>
            <h2>Smart Search</h2>
            <FormContainer>
                <PatientNotes onSubmit={(e) => handleSubmit(e)}>
                    <textarea
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter Patient Notes Here - Don't worry, no data is stored."
                        className='patientNotes'
                    />
            </PatientNotes>
            <Options>
                <DoctorTypeContainer className='selectionBox'>
                    <legend>Doctor Type</legend>
                    {doctorTypes.map((type, i) => (
                        <CheckboxContainer key={i}>
                            <input
                                type='checkbox'
                                name={type}
                                id={type}
                                onClick={(e) => handleCheckboxChange(e)}
                            />
                            <label htmlFor={type}>{type}</label>
                        </CheckboxContainer>

                    ))}
                    
                </DoctorTypeContainer>
                <ShowTop>
                        <legend>Show top</legend>
                        <input onChange={(e) => handleShowTop(e)} type="number" id="showTop" name="showTop" min="1" max="100" defaultValue={"5"}/>
                </ShowTop>
                    <SubmitButton
                        type='submit'
                        onClick={(e) => handleSubmit(e)}
                    />
                </Options>
            </FormContainer>
            <ResultsContainer>
                <InnerContainer>
                {results.map((result:any) => (
                    <Result>
                        {result.item?.Description}
                    </Result>
                ))}
                </InnerContainer>
            </ResultsContainer>
        </Container>
    )
}

const Container = styled.div <{ showManualSearch: boolean; }>`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    flex: ${({ showManualSearch }) => !showManualSearch ? `1` : `0`};
    opacity: ${({ showManualSearch }) => showManualSearch && `0`};
    border:  ${({ theme }) => theme === 'dark' ? `2px solid var(--dark-secondary)` : `2px solid var(--light-secondary)`};
    color: ${({ theme }) => theme === 'dark' ? `var(--dark-secondary)` : `var(--light-secondary)`};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: ${({ showManualSearch }) => showManualSearch && `-4px`};
    flex-direction: column;
    & h2{
        padding: 10px 0;
    }
`;

const DoctorTypeContainer = styled.fieldset`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    padding: 10px;
    border:0;
    border-top: 1px solid;
    align-items: center;
`;

const CheckboxContainer = styled.div`
    flex: 0 1 33.33%;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    margin: 0 20px 0 10px;
`;

const ShowTop = styled.fieldset`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 10px;
    border: 0;
    border-top: 1px solid;
    & input {
        width: 100%;
    }
`;

const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
`;

const PatientNotes = styled.form`
    flex: 4;
    height: 100%;
    margin: 0 10px 0 20px;
    & textarea {
        width: 100%;
        height: 100%;
        resize: none;
        border-radius: 5px;
        overflow-y: scroll;
    }
`;

const ResultsContainer = styled.div`
    width: 100%;
    flex: 1;
    padding: 20px;
`;

const InnerContainer = styled.div`
    border: 1px solid;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow-y: scroll;
`;

const SubmitButton = styled.input`
    margin: 0 10px;
    border: 1px solid var(--dark-secondary);
    border-radius: 1px;
    cursor: pointer;
`;

const Result = styled.div`
    width: 100%;
    height: fit-content;
    padding: 20px;
`;
export default SmartSearch