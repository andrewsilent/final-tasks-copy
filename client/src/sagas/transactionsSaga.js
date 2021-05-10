import { put } from 'redux-saga/effects'
import ACTION from '../actions/actionTypes'
import * as restController from '../api/rest/restController'

export function * getTransactionsHistory (action) {
  // yield put({ type: ACTION.GET_TRANSACTIONS_HISTORY_REQUEST })
  try {
    const { data } = yield restController.getTransactionsHistory(action.data)
    yield put({
      type: ACTION.GET_TRANSACTIONS_HISTORY_SUCCESS,
      payload: data
    })
  } catch (error) {
    yield put({ type: ACTION.GET_TRANSACTIONS_HISTORY_ERROR }, error)
  }
}
