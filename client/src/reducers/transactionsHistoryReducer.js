import ACTION from '../actions/actionTypes'

const initialState = {
  isFetching: false,
  data: [],
  error: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.GET_TRANSACTIONS_HISTORY_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null
      }
    }

    case ACTION.GET_TRANSACTIONS_HISTORY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        isFetching: false,
        data: data,
        error: null
      }
    }

    case ACTION.GET_TRANSACTIONS_HISTORY_ERROR: {
      const { data } = action;
      return {
        ...state,
        isFetching: false,
        someData: data,
        error: null
      }
    }

    default:
      return state
  }
}
