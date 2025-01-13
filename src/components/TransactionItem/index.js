import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onClickDelete} = props
  const {id, title, amount, type} = transactionDetails

  const deleteButtonClicked = () => {
    onClickDelete(id)
  }

  return (
    <li className="transaction-item">
      <p className="table-data title">{title}</p>
      <p className="table-data amount">{`Rs ${amount}`}</p>
      <p className="table-data type">{type}</p>
      <button
        type="button"
        className="delete-button"
        onClick={deleteButtonClicked}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
