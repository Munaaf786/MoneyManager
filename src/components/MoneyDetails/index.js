import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="money-details">
      <div className="card balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-details-images"
        />
        <div className="card-amount-container">
          <p className="card-heading">Your Balance</p>
          <p
            className="amount-in-numbers"
            data-testid="balanceAmount"
          >{`Rs ${balanceAmount}`}</p>
        </div>
      </div>
      <div className="card income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-details-images"
        />
        <div className="card-amount-container">
          <p className="card-heading">Your Income</p>
          <p
            className="amount-in-numbers"
            data-testid="incomeAmount"
          >{`Rs ${incomeAmount}`}</p>
        </div>
      </div>
      <div className="card expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-details-images"
        />
        <div className="card-amount-container">
          <p className="card-heading">Your Expenses</p>
          <p
            className="amount-in-numbers"
            data-testid="expensesAmount"
          >{`Rs ${expensesAmount}`}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
