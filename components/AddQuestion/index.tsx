import React, { useEffect, useState } from 'react';
import { Checkbox, Select } from 'antd';
import { Input as InputAnt } from 'antd';
import MultipleChoice from './MultipleChoice';
import { QUESTION_TYPES, QUESTION_TYPES_REV } from '@/constants/form';


export default function AddQuestion({setNewQues}:any) {
    const [seletctedOption, setSelectedOption] = useState(1);
    const [type, setType] = useState('');
    const [maxChoice, setMaxChoice] = useState(0);
    const [choices, setChoices] = useState([]);
    const [question, setQuestion] = useState('');
    const [disqualify, setDisqualify] = useState(false)
    const [other, setOther] = useState(false);
   


    // {
    //     "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    //     "type": "Paragraph",
    //     "question": "fghh",
    //     "choices": [
    //         "string"
    //     ],
    //     "maxChoice": 0,
    //     "disqualify": false,
    //     "other": false
    // }
    useEffect(()=>{
        setNewQues({
            type: 'Paragraph',
            question: question, 
            disqualify: disqualify, 
            other: other, 
            maxChoice: maxChoice,
            choices: choices,
        });
    },[question, type, other, disqualify, type])
    return (
        <div className='flex flex-col px-4 py-4 gap-5'>
            <label className='font-bold'>
                Type
            </label>
            <Select
                defaultValue={1}
                style={{ width: '100%' }}
                onChange={setSelectedOption}
                options={QUESTION_TYPES}
            />
            <label className='font-bold'>
                Question
            </label>
            {seletctedOption === QUESTION_TYPES_REV.PARAGRAPH &&
                <InputAnt
                    placeholder="Type here"
                    className='py-4 outline-1 outline-black'
                    onChange={(e) => {setQuestion(e.target.value); setType('Paragraph')}}
                />}
            {seletctedOption === QUESTION_TYPES_REV.MULTIPLE_CHOICE &&
                <MultipleChoice
                    setChoices={setChoices}
                    choices={choices}
                    maxChoices={maxChoice}
                    setMaxChoices={setMaxChoice}
                    other={other}
                    setOther={setOther}
                    type="mc"
                />}
            {seletctedOption === QUESTION_TYPES_REV.DROPDOWN &&
                <MultipleChoice
                    type="dropdown"
                    setChoices={setChoices}
                    maxChoices={maxChoice}
                    setMaxChoices={setMaxChoice}
                    choices={choices}
                    other={other}
                    setOther={other}
                    
                />}
            {seletctedOption === QUESTION_TYPES_REV.YES_NO &&
                <>
                    <InputAnt placeholder="Type here" 
                        onChange={(e) => {setQuestion(e.target.value); setType('yesno')}} 
                        className='py-4 outline-1 outline-black' />

                    <div className='flex gap-4 items-center'>
                        <Checkbox onChange={(e)=>setDisqualify(e.target.checked)} /> <label>Disqualify candidate if answer is "No"</label>
                    </div>
                </>}
            {seletctedOption === QUESTION_TYPES_REV.SHORT && <InputAnt  onChange={(e) => {setQuestion(e.target.value); setType('short')}} placeholder="Type here" className='py-4 outline-1 outline-black' />}
            {seletctedOption === QUESTION_TYPES_REV.DATE && <InputAnt onChange={(e) => {setQuestion(e.target.value); setType('date')}} placeholder="Type here" className='py-4 outline-1 outline-black' />}
            {seletctedOption === QUESTION_TYPES_REV.NUMBER && <InputAnt  onChange={(e) => {setQuestion(e.target.value); setType('number')}} placeholder="Type here" className='py-4 outline-1 outline-black' />}
            {seletctedOption === QUESTION_TYPES_REV.FILE_UPLOAD && <InputAnt  onChange={(e) => {setQuestion(e.target.value); setType('fileUpload')}} placeholder="Type here" className='py-4 outline-1 outline-black' />}
            {seletctedOption === QUESTION_TYPES_REV.VIDEO && <InputAnt  onChange={(e) => {setQuestion(e.target.value); setType('video')}} placeholder="Type here" className='py-4 outline-1 outline-black' />}

        </div>
    )
}
