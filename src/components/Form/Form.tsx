import React from 'react'
import { Form as RBForm } from 'react-bootstrap'
import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
  useFieldArray,
  UseFieldArrayReturn,
  ArrayPath,
} from 'react-hook-form'

type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>
  options?: UseFormProps<TFormValues>
  children: (
    props: UseFormReturn<TFormValues> & UseFieldArrayReturn<TFormValues>
  ) => React.ReactNode
  fieldName: ArrayPath<TFormValues>
}

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>
>({
  onSubmit,
  options,
  children,
  fieldName,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({ ...options })
  const fieldsArrayProps = useFieldArray({
    name: fieldName,
    control: methods.control,
  })

  return (
    <RBForm onSubmit={methods.handleSubmit(onSubmit)}>
      {children({ ...methods, ...fieldsArrayProps })}
    </RBForm>
  )
}