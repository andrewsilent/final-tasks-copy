import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'
import styles from './History.module.sass'
import * as ActionCreator from '../../actions/actionCreator'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const History = props => {
  const { isFetching, transactionsHistory, getTransactionsHistory } = props

  useEffect(() => {
    getTransactionsHistory()
  }, [])

  // if (props.role !== (CONSTANTS.CUSTOMER || CONSTANTS.CREATOR)) {
  //   props.history.replace('/login')
  // }

  return (
    <>
      <Header />
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          <div className={styles.mainContainer}>
            <span>Your transactions:</span>
            <div>
              {transactionsHistory.data.map((transaction, index) => (
                <div key={index}>{JSON.stringify(transaction)}</div>
              ))}
            </div>
            <div className={styles.button}>
              <Link className={styles.button__link} to='/dashboard'>
                DASHBOARD
              </Link>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  )
}

const mapStateToProps = ({
  auth: { isFetching },
  transactionsHistory,
  getTransactionsHistory
}) => ({
  isFetching,
  transactionsHistory,
  getTransactionsHistory
})

const mapDispatchToProps = dispatch => {
  return {
    getTransactionsHistory: () =>
      dispatch(ActionCreator.getTransactionsHistoryRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
