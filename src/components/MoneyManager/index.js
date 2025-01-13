import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {title, amount, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachOption => eachOption.optionId === optionId,
    )
    if (Number.isInteger(parseInt(amount)) === false) {
      // eslint-disable-next-line
      alert('Please Provide the valid amount (in Numbers).')
    } else {
      const newTransaction = {
        id: uuidv4(),
        title,
        amount,
        type: typeOption.displayText,
      }

      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        title: '',
        amount: '',
        optionId: transactionTypeOptions[0].optionId,
      }))
    }
  }

  onChangeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amount: event.target.value})
  }

  onChangeTypeInput = event => {
    this.setState({optionId: event.target.value})
  }

  onClickDelete = id => {
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        eachTransaction => eachTransaction.id !== id,
      ),
    }))
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let income = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += parseInt(eachTransaction.amount)
      }
    })
    return income
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expenses = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenses += parseInt(eachTransaction.amount)
      }
    })
    return expenses
  }

  render() {
    const {title, amount, optionId, transactionsList} = this.state
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    const balanceAmount = incomeAmount - expensesAmount
    return (
      <div className="bg-container">
        <div className="head-container">
          <h1 className="username">Hi, Richard</h1>
          <p className="welcome-text">
            Welcome back to your{' '}
            <span className="money-manager-span">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="addItem-and-history-container">
          <form className="input-form" onSubmit={this.onAddTransaction}>
            <h1 className="addTransaction-heading">Add Transaction</h1>
            <label className="label" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              placeholder="TITLE"
              id="title"
              className="input"
              value={title}
              onChange={this.onChangeTitleInput}
              required
            />
            <label className="label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              type="text"
              placeholder="AMOUNT"
              id="amount"
              className="input"
              value={amount}
              onChange={this.onChangeAmountInput}
              required
            />
            <label className="label" htmlFor="optionType">
              TYPE
            </label>
            <select
              id="optionType"
              className="input"
              value={optionId}
              onChange={this.onChangeTypeInput}
            >
              {transactionTypeOptions.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <ul className="history-table">
              <li className="table-header">
                <p className="table-header-cell title">Title</p>
                <p className="table-header-cell amount">Amount</p>
                <p className="table-header-cell">Type</p>
              </li>
              {transactionsList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  transactionDetails={eachTransaction}
                  onClickDelete={this.onClickDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
