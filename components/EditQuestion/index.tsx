import React, { useState } from 'react';
import { Checkbox, Select } from 'antd';
import { Input as InputAnt } from 'antd';
import MultipleChoice from '@/components/AddQuestion/MultipleChoice';
import { QUESTION_TYPES_REV } from '@/constants/form';
import { useDataContext } from '@/context/Formcontext';
import loadash from 'lodash';


export default function EditQuestion({ type, question, quesId,  varient }: { type: number, question: any, varient: string, quesId : any}) {
    const { data, setData } = useDataContext(); 
    function changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        if(type === QUESTION_TYPES_REV.PARAGRAPH){
            let temp = loadash.cloneDeep(data);
            // setData([...temp['personalQuestions'], {...question, question: event.target.value}])
            if(varient === '0'){
                temp['customisedQuestions'].forEach((ques: any) => {
                    if(ques.id === quesId){
                        ques.question = event.target.value
                    }
                });
            }
            let quesType = varient === '1' ? 'personalQuestions' : 'profileQuestions';
            temp[varient === '1'? 'personalInformation': 'profile'][quesType][0].question = event.target.value;
            setData(temp);
        }
        
    }

    return (
        <div className='flex flex-col px-4 py-4 gap-5'>
            <label className='font-bold'>
                Question
            </label>
            {type === QUESTION_TYPES_REV.PARAGRAPH && <InputAnt onChange={changeHandler} placeholder="Type here" className='py-4 outline-1 outline-black' />}
            {type === QUESTION_TYPES_REV.MULTIPLE_CHOICE && <MultipleChoice type="mc" />}
            {type === QUESTION_TYPES_REV.DROPDOWN && <MultipleChoice type="dropdown" />}
            {type === QUESTION_TYPES_REV.YES_NO && <>
                <InputAnt placeholder="Type here" className='py-4 outline-1 outline-black' />
                <div className='flex gap-4 items-center'>
                    <Checkbox /> <label>Disqualify candidate if answer is "No"</label>
                </div>
            </>}
            {type === QUESTION_TYPES_REV.SHORT && <InputAnt placeholder="Type here" className='py-4 outline-1 outline-black' />}
            {type === QUESTION_TYPES_REV.DATE && <InputAnt placeholder="Type here" className='py-4 outline-1 outline-black' />}
            {type === QUESTION_TYPES_REV.NUMBER && <InputAnt placeholder="Type here" className='py-4 outline-1 outline-black' />}
            {type === QUESTION_TYPES_REV.FILE_UPLOAD && <InputAnt placeholder="Type here" className='py-4 outline-1 outline-black' />}
            {type === QUESTION_TYPES_REV.VIDEO && <InputAnt placeholder="Type here" className='py-4 outline-1 outline-black' />}

        </div>
    )
}
