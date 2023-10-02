'use client'
import React from 'react'
import { DataProvider } from '@/context/Formcontext'
import Form from '@/components/Form'


export default function ApplicationFormPage() {
  return (
    <>
      <DataProvider>
        <Form/>
      </DataProvider>
    </>
  )
}
