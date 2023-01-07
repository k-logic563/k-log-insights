import axios from 'axios'
import { useForm, useFieldArray } from 'react-hook-form'
import {
  Box,
  Radio,
  TextInput,
  Button,
  Flex,
  Center,
  Text,
  Space,
} from '@mantine/core'
import { IconTrash, IconPlus } from '@tabler/icons'
import { useAtom, useSetAtom } from 'jotai'

import { useProgress } from '@/hooks/useProgress'
import { wait } from '@/utils/wait'
import {
  resultsAtom,
  loadingStateAtom,
  strategyStateAtom,
  progressStateAtom,
} from '@/store'
import { strategies, urlRegex } from '@/constants'
import * as types from '@/types'

export const AppForm = () => {
  const { progressPromise } = useProgress<types.api.DataResponses>()
  const setResults = useSetAtom(resultsAtom)
  const setLoadingState = useSetAtom(loadingStateAtom)
  const setProgressState = useSetAtom(progressStateAtom)
  const [strategy, setStrategyState] = useAtom(strategyStateAtom)

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
    setStrategyState(value)
    setValue('strategy', value)
  }

  const onSubmit = async (data: types.form.FormValues) => {
    // 初期化処理
    setResults([])
    setProgressState(0)
    setLoadingState(true)

    // apiコール処理を配列に格納
    const promises = data.items.map((x) => {
      return axios.get('api/insights', {
        params: {
          strategy: data.strategy,
          url: x.url,
        },
      })
    })

    // api配列を並列処理させる
    const res = await progressPromise(promises)
    const formatRes = res.map((x) => {
      if (x.status === 'fulfilled') {
        return x.value
      }
      return x.reason.response
    })
    setResults(formatRes)
    // 処理後余裕を持たせて100%表示をさせる
    await wait(1000)
    setLoadingState(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Text fw="bold">メディアを選択してください</Text>
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
      <Space h="lg" />
      <Box>
        <Text mb={16} fw="bold">
          urlを入力してください
        </Text>
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
