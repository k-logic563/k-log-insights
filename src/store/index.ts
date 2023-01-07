import { atom } from 'jotai'

import * as types from '@/types'

const strategyStateAtom = atom('desktop')
const loadingStateAtom = atom(false)
const progressStateAtom = atom(0)
const resultsAtom = atom<types.api.DataResponses[]>([])

export { resultsAtom, loadingStateAtom, strategyStateAtom, progressStateAtom }
