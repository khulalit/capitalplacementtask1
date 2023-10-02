'use client'
import React, { useState } from 'react';
import BasicQuestion from '../Question';
import Image from 'next/image';
import AddIcon from '@/assets/Form/add.svg';
import CrossIcon from '@/assets/Form/cross.svg';
import { Modal } from 'antd';
import AddQuestion from '../AddQuestion';
import SpecialQuestion from '../Question/SpecialQuestion';
import EditQuestion from '../EditQuestion';
import { QUESTION_LABELS_TYPE, QUESTION_TYPES_REV } from '@/constants/form';
import { useDataContext } from '@/context/Formcontext';
import loadash from 'lodash';
import AdditionalQuestion from '../Question/AdditionalQuestion';

export default function PersonalInfoForm({ formOption, varient }: any) {
    const {data, setData} = useDataContext()
    const [newQues, setNewQues] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log('components rerenders')

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = (e: any) => {
        e.preventDefault();
        setIsModalOpen(false);
        //    e.propagate();
    };

    function handleAddQuestion(): void {
        showModal();
    }


    function handleSave(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        console.log('fjkdjflsdjflsdjfdslfjdslkfjdslfjdslkfjdlk')
        const temp = loadash.cloneDeep(data);
        console.log(newQues)
        console.log(temp)
        temp[varient=== '1'? 'personalInformation': 'profile'][varient==='1' ? 'personalQuestions': 'profileQuestions'].push(newQues)
        setData(temp);
        handleOk();
    }
    console.log(Object.entries(formOption))
    return (<div>
        <form className='flex flex-col gap-[25px]'>
            {Object.entries(formOption).map((entry: any) => entry[0] !== 'personalQuestions' && entry[0] !== 'profileQuestions' && varient != '3' && 
                <BasicQuestion
                    name={entry[0]}
                    label={entry[0].split(/(?=[A-Z])/g).join(' ')}
                    id={entry[0]}
                    options={true}
                    varient={varient}
                    show={entry[1].show}
                    internalUse={entry[1].internalUse}
                    mandatory={entry[1].mandatory || false}
                />
            )}
            {Object.entries(formOption).map((entry: any) => { return (entry[0] === 'personalQuestions' || entry[0] === 'profileQuestions') && 
                <SpecialQuestion
                    question={entry[1]}
                    type={entry[0]}
                    varient={varient}
                />
              }
            )}
            {Object.entries(formOption).map((entry: any) => varient === '3' && 
                <AdditionalQuestion
                    question={entry[1]}
                    type={entry[0]}
                />
              
            )}
        </form>
        <button className='flex gap-5 font-bold mt-[65px]' onClick={handleAddQuestion}>
            <Image src={AddIcon} alt='icon' />
            Add a question
        </button>
        <Modal
            closable={false}
            title={<div className='bg-[#D0F7FA] font-bold roun py-6 px-4 rounded-[8px]'>
                Questions
            </div>}
            footer={<div className='w-full flex justify-between py-4 px-4'>
                <button className='flex items-center text-red-800 font-bold' onClick={handleCancel}>
                    <Image src={CrossIcon} alt='cross' />
                    Delete Question
                </button>
                <button className='font-bold text-white bg-green-800 px-4 rounded-lg' onClick={handleSave}>
                    Save
                </button>
            </div>}
            style={{ padding: 0 }}
            open={isModalOpen}
            onOk={handleOk}
            maskClosable
            onCancel={handleCancel}
        >
            <AddQuestion setNewQues={setNewQues} />
        </Modal>
    </div>

    )
}
