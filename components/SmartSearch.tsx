import { useAtom } from "jotai";
import { themeAtom } from "../jotai/jotai";
import styled from 'styled-components';
import {initData, rakeFilter, determineScore} from '../lib/helpers'
import { useState } from "react";

const SmartSearch = () => {
    const [theme] = useAtom(themeAtom);
    const [notes, setNotes] = useState('');
    const [selectedDoctorTypes, setSelectedDoctorTypes] = useState<any>([]);
    const [results, setResults] = useState([]);
    const [showTop, setShowTop] = useState(5);
    const doctorTypes = ["AD", "AO", "AOS", "C", "G", "HR", "NC", "OP", "S", "SP"];
   
    function handleSubmit(e:any) {
        e.preventDefault();
        setResults(determineScore(rakeFilter(notes), selectedDoctorTypes, initData(), showTop))
        console.log(setResults(determineScore(rakeFilter(notes), selectedDoctorTypes, initData(), showTop)))
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
        <Container theme={theme}>
            <h2>Smart Search</h2>
            <FormContainer>
                <PatientNotes onSubmit={(e) => handleSubmit(e)} theme={theme}>
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
                        theme={theme}
                    />
                </Options>
            </FormContainer>
            <ResultsContainer>
                <InnerContainer theme={theme}>
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

const Container = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    flex:1;
    border:  ${({ theme }) => theme === 'dark' ? `2px solid var(--dark-secondary)` : `2px solid var(--light-secondary)`};
    color: ${({ theme }) => theme === 'dark' ? `var(--dark-secondary)` : `var(--light-secondary)`};
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
    & > input {
        margin-right: 5px;
    }
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
    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const PatientNotes = styled.form<{theme: string}>`
    flex: 4;
    height: 100%;
    margin: 0 10px 0 20px;

    & textarea {
        width: 100%;
        height: 100%;
        resize: none;
        border-radius: 5px;
        overflow-y: scroll;
        border:  ${({ theme }) => theme === 'dark' ? `2px solid var(--dark-secondary)` : `2px solid var(--light-secondary)`}; 
        background-color: ${({ theme }) => theme === 'dark' ? `var(--dark-primary)`  :`var(--light-primary)`};
        color: ${({ theme }) => theme === 'dark' ? `var(--dark-secondary)` : `var(--light-secondary)`};
        padding: 20px;
        
        &:focus-visible {
            outline: unset;
        }
    }
`;

const ResultsContainer = styled.div`
    width: 100%;
    flex: 1;
    padding: 20px;
`;


const Result = styled.div`
    width: 100%;
    height: fit-content;
    padding: 20px;
`;

const InnerContainer = styled.div<{ theme: string }>`
    border: 1px solid;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow-y: scroll;
    border:  ${({ theme }) => theme === 'dark' ? `2px solid var(--dark-secondary)` : `2px solid var(--light-secondary)`}; 
    background-color: ${({ theme }) => theme === 'dark' ? `var(--dark-primary)` : `var(--light-primary)`};
    color: ${({ theme }) => theme === 'dark' ? `var(--dark-primary)` : `var(--light-primary)`};
    & > ${Result}{
        color: ${({ theme }) => theme === 'dark' ? `var(--dark-secondary)` : `var(--light-secondary)`};
    }
`;

const SubmitButton = styled.input<{ theme: string }>`
    margin: 0 10px;
    border: 1px solid ${({ theme }) => theme === 'dark' ? `var(--dark-secondary)` : `var(--light-secondary)`};
    color:${({ theme }) => theme === 'dark' ? `var(--light-secondary)` : `var(--dark-secondary)`};
    background-color: ${({ theme }) => theme === 'dark' ? `var(--dark-secondary)` : `var(--light-secondary)`};
    border-radius: 1px;
    cursor: pointer;
`;


export default SmartSearch;