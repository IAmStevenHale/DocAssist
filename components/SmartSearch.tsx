import { useAtom } from "jotai";
import { showManualSearchAtom, themeAtom } from "../jotai/jotai";
import styled from 'styled-components';
import {initData, rakeFilter, determineScore} from '../lib/helpers'
import { useState } from "react";

const SmartSearch = () => {
    const [theme] = useAtom(themeAtom);
    const [showManualSearch] = useAtom(showManualSearchAtom);
    const [notes, setNotes] = useState('');
    const [doctorTypes, setDoctorTypes] = useState<any>([]);
   


    function handleSubmit(e:any) {
        e.preventDefault();
        console.log(determineScore(rakeFilter(notes), doctorTypes, initData(),5));
    }

    function handleCheckboxChange(e: any) {
        if (!doctorTypes.includes(e.target.id)){
            setDoctorTypes([...doctorTypes, e.target.id]);
           
        }else{
            console.log(doctorTypes)
            setDoctorTypes([...doctorTypes, e.target.id]);
        }
        
    };

    function handleChange(e:any) {
        setNotes(e.target.value);
    }

    return (
        <Container theme={theme} showManualSearch={showManualSearch}>
            <div className='mainForm'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <textarea
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter Patient Notes Here - Don't worry, no data is stored."
                        className='patientNotes'
                    />

                    <input
                        className='hidden'
                        type='submit'
                        id='submit-form'
                        onClick={(e) => handleSubmit(e)}
                    />
                </form>
                <fieldset className='selectionBox'>
                    <legend>Doctor Type</legend>
                    <div className='column'>
                        <div>
                            <input
                                type='checkbox'
                                name='AD'
                                id='AD'
                                onClick={(e) => handleCheckboxChange(e)}
                            />
                            <label htmlFor='AD'>AD</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                name='AO'
                                id='AO'
                                onClick={(e) => handleCheckboxChange(e)}
                            />
                            <label htmlFor='AO'>AO</label>
                        </div>
                    </div>
                    <div className='column'>
                        <div>
                            <input
                                type='checkbox'
                                name='AOS'
                                id='AOS'
                                onClick={(e) => handleCheckboxChange(e)}
                            />
                            <label htmlFor='AOS'>AOS</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                name='C'
                                id='C'
                                onClick={(e) => handleCheckboxChange(e)}
                            />
                            <label htmlFor='C'>C</label>
                        </div>
                    </div>
                    <div className='column'>
                        <div>
                            <input
                                type='checkbox'
                                name='G'
                                id='G'
                                onClick={(e) => handleCheckboxChange(e)}
                            />
                            <label htmlFor='G'>G</label>
                        </div>

                        <div>
                            <input
                                type='checkbox'
                                name='HR'
                                id='HR'
                                onClick={(e) => handleCheckboxChange(e)}
                            />
                            <label htmlFor='HR'>HR</label>
                        </div>
                    </div>
                    <div className='column'>
                        <div>
                            <input
                                type='checkbox'
                                name='NC'
                                id='NC'
                                onClick={(e) => handleCheckboxChange(e)}
                            />
                            <label htmlFor='NC'>NC</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                name='OP'
                                id='OP'
                                onClick={(e) => handleCheckboxChange(e)}
                            />
                            <label htmlFor='OP'>OP</label>
                        </div>
                    </div>
                    <div className='column'>
                        <div>
                            <input
                                type='checkbox'
                                name='S'
                                id='S'
                                onClick={(e) => handleCheckboxChange(e)}
                            />
                            <label htmlFor='S'>S</label>
                        </div>

                        <div>
                            <input
                                type='checkbox'
                                name='SP'
                                id='SP'
                                onClick={(e) => handleCheckboxChange(e)}
                            />
                            <label htmlFor='SP'>SP</label>
                        </div>
                    </div>
                </fieldset>
            </div>
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
    justify-content: center;
    align-items: center;
    margin-left: ${({ showManualSearch }) => showManualSearch && `-4px`};
`;

export default SmartSearch