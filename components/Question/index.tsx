import { Switch } from 'antd'
import './style.css'
import React, { useState } from 'react'
import { useDataContext } from '@/context/Formcontext';
import loadash from 'lodash'
interface InputPropsType {
    id: undefined | string,
    name: string,
    label: string,
    options: boolean,
    varient: string,
    internalUse: undefined | null | boolean,
    show: boolean,
    mandatory: undefined | null | boolean,
}
export default function BasicQuestion({ id, name, label, varient, internalUse, show, mandatory, options = false }: InputPropsType) {
    const { setData, data } = useDataContext();

    const updateData = (attribute: any, secondAttribute: any, thirdAttribute: any, value: any) => {
        const clonedObj = loadash.cloneDeep(data)

        clonedObj[attribute][secondAttribute][thirdAttribute] = value;
        setData(clonedObj)
    }

    function handleSwitch(): void {
        if(varient === '1')
            updateData('personalInformation', name, 'show', !show);
        else 
            updateData('profile', name, 'show', !show);
    }

    function handleChecked(): void {
        if(varient === '1')
            updateData('personalInformation', name, 'internalUse', !internalUse);
        else 
            updateData('profile', name, 'mandatory', !mandatory);
    }

    return (
        <div className='wrapper' key={id}>
            <div className='flex justify-between items-center border-b-[1px] pb-[25px] border-b-[#C4C4C4]'>
                <label htmlFor={id} className='label capitalize w-[200px]'>{label}</label>

                {options && <>
                    <div className='w-[150px]'>
                        <input type='checkbox'
                            onChange={handleChecked}
                            checked={varient === '1' ? internalUse || false : mandatory || false} /> <label className='text-small-black'>{varient === '1' ? 'Internal' : 'Mandatory'}</label>
                    </div>
                    <div className='w-[100px]'>
                        <Switch size='small' onChange={() => handleSwitch()} checked={show} />
                        <span className='text-small-gray ml-2'>{show ? 'Show' : 'Hide'}</span>
                    </div>
                </>}

            </div>
        </div>
    )
}
