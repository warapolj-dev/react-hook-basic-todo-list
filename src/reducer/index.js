export const initialState = {
  data: [],
  pages: 1,
  loading: true,
  error: false
}

export const reducer = (state, { type, payload }) => {
  console.log(payload)
  switch (type) {
    case 'HANDLE_LOADING':
      return {
        ...state,
        loading: !state.loading
      }
    case 'HANDLE_ERROR':
      return {
        ...state,
        error: payload
      }
    case 'SET_DATA':
      return {
        ...state,
        data: payload
      }
    case 'SET_PAGE':
      return {
        ...state,
        pages: payload
      }
    default:
      return state
  }
}
