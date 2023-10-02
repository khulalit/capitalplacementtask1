import React, {useEffect, useState} from 'react';
import { Input as InputAnt } from 'antd';
import AddIcon from '@/assets/Form/add.svg';
import ListIcon from '@/assets/Form/list.svg';
import Image from 'next/image';
import { Checkbox} from 'antd';


export default function MultipleChoice({type, setChoices, choices, setMaxChoice, maxChoice, other, setOther}: any) {
    const [list, setList] = useState([{
        choiceValue: '',
        id: 1,
    }]);

    function handleAdd(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
       setList([...list, {
            choiceValue: '',
            id: list[list.length-1].id + 1
       }])

    }
    return (
        <><InputAnt placeholder="Type here" className='py-4 outline-1 outline-black' />
            {
            list.map(({choiceValue, id})=>
            <div className='flex' key={id}>
                <Image src={ListIcon} alt='add' className='mr-4' />
                <InputAnt className='w-2/3 py-4' placeholder='Type here' onChange={(e)=>setChoices([...choices, e.target.value])} />
                <button className=' flex-1 ml-8' onClick={handleAdd}>
                    <Image src={AddIcon} alt='add' height={15} />
                </button>
            </div>
            )
        }
        <div className='flex gap-4'>
            <Checkbox onChange={(e)=>setOther(e.target.checked)}/> <label>Enable "Other" option</label>
        </div>
        {type === 'mc' && <>
        <label className='font-bold'>
            Maximum choice allowed
        </label>
        <InputAnt className='py-4' placeholder='Type here' onChange={(e)=>{
            setMaxChoice(e.target.value)
        }} /></>}
        </>
        
    )
}
