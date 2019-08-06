import {
  useDispatch as useReactReduxDispatch,
  useSelector as useReactReduxSelector,
  useStore as useReactReduxStore
} from 'react-redux'
import { Stores } from './createStore'
import { DependencyList, useCallback } from 'react'

export function useSelector<T extends (a: Stores) => any>(
  selector: T,
  deps?: DependencyList
): ReturnType<T> {
  return useReactReduxSelector<Stores, ReturnType<T>>(
    useCallback(selector, deps || [])
  )
}

export const useDispatch = useReactReduxDispatch

export function useStore() {
  return useReactReduxStore<Stores>()
}
