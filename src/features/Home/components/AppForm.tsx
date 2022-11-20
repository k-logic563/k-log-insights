import React, { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import {
  Box,
  Radio,
  TextInput,
  Button,
  Flex,
  Center,
  Text,
} from '@mantine/core'
import { IconTrash, IconPlus } from '@tabler/icons'

import { strategies, urlRegex } from '@/constants'
import * as types from '@/types'

type Props = {
  onSubmit: (data: types.form.FormValues) => void
}

export const AppForm: React.FC<Props> = ({ onSubmit }) => {
  const [strategy, setStrategy] = useState('desktop')

  const { control, register, formState, setValue, handleSubmit } =
    useForm<types.form.FormValues>({
      defaultValues: {
        strategy,
        items: [
          {
            url: '',
          },
        ],
      },
      mode: 'onSubmit',
    })

  const { append, remove, fields } = useFieldArray({
    name: 'items',
    control,
  })

  const handleSetStrategy = (value: string) => {
    setStrategy(value)
    setValue('strategy', value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb={24}>
        <Text>メディアを選択してください</Text>
        <Radio.Group
          name="strategy"
          value={strategy}
          onChange={handleSetStrategy}
        >
          {strategies.map((x) => (
            <Radio label={x.label} key={x.id} value={x.id} />
          ))}
        </Radio.Group>
      </Box>
      <Box>
        <Text mb={10}>urlを入力してください</Text>
        <Box
          sx={{
            display: 'grid',
            gap: '0.6rem',
          }}
        >
          {fields.map((field, idx) => (
            <Flex key={field.id} gap="md" w="100%">
              <TextInput
                data-test-id={`cy-input-${idx}`}
                w="100%"
                {...register(`items.${idx}.url` as const, {
                  required: '※必須項目です',
                  pattern: {
                    value: urlRegex,
                    message: '※URLフォーマットを確認してください',
                  },
                })}
                placeholder="https://example.com"
                error={
                  formState.errors.items
                    ? formState.errors.items[idx]?.url?.message
                    : ''
                }
                errorProps={{
                  'data-test-id': `cy-error-${idx}`,
                }}
              />
              {fields.length !== 1 && (
                <Button color="red" onClick={() => remove(idx)}>
                  <IconTrash />
                </Button>
              )}
            </Flex>
          ))}
        </Box>
        <Center mt={20}>
          <Button
            data-test-id="cy-add-button"
            p={0}
            w={36}
            radius="xl"
            onClick={() =>
              append({
                url: '',
              })
            }
          >
            <IconPlus />
          </Button>
        </Center>
        <Center mt={32}>
          <Button
            data-test-id="cy-submit-button"
            type="submit"
            disabled={formState.isSubmitting}
          >
            分析する
          </Button>
        </Center>
      </Box>
    </form>
  )
}
