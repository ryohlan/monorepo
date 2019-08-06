type State = {
  name: string
  email: string
}

const initial: State = {
  name: '',
  email: ''
}

export function Settings(state: State = initial, action: Action): State {
  switch (action.type) {
    case 'SETTINGS#SET_NAME': {
      return {
        ...state,
        name: action.payload.name
      }
    }
    case 'SETTINGS#SET_EMAIL': {
      return { ...state, email: action.payload.email }
    }
    default:
      return state
  }
}

export const ActionCreator = {
  setName: (payload: { name: string }) => ({
    type: 'SETTINGS#SET_NAME' as const,
    payload
  }),
  setEmail: (payload: { email: string }) => ({
    type: 'SETTINGS#SET_EMAIL' as const,
    payload
  })
}

type Action = ReturnType<typeof ActionCreator[keyof typeof ActionCreator]>
