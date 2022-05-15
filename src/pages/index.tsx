import React from 'react'
import { NextPage } from 'next'
import { FormProvider, useForm } from 'react-hook-form'

import Main from '@/components/pages/Main'

import * as types from '@/types'

const HomePage: NextPage = () => {
  const methods = useForm<types.form.FormValues>({
    defaultValues: {
      strategy: 'desktop',
      items: [],
    },
    mode: 'onChange',
  })

  return (
    <FormProvider {...methods}>
      <Main />
    </FormProvider>
  )
}

export default HomePage
