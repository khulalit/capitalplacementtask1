import React from 'react';
import { useDataContext } from '@/context/Formcontext';
import Upload from '@/components/Upload';
import Card from '../../components/Card';
import PersonalInfoForm from '@/components/PersonalInfoForm';

export default function Form() {
    const { data, loading, error } = useDataContext();
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const { personalInformation, profile, customisedQuestions } = data;
    return (
        <>
            <Card title='Upload' >
                <Upload />
            </Card>
            <Card title='Personal Information' >
                <PersonalInfoForm formOption={personalInformation} varient='1' />
            </Card>
            <Card title='Profile' >
                <PersonalInfoForm formOption={profile} varient='2' />
            </Card>
            <Card title='Additional Questions'>
                <PersonalInfoForm formOption={customisedQuestions} varient='3' />
            </Card>
        </>
    )
}
