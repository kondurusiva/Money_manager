// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="list-container">
      <div className="balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="description">
          <p>Your Balance</p>
          <p testid="balanceAmount">Rs {balanceAmount}</p>
        </div>
      </div>

      <div className="income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="image"
        />
        <div className="description">
          <p>Your Income</p>
          <p testid="incomeAmount">Rs {incomeAmount}</p>
        </div>
      </div>

      <div className="expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="description">
          <p>Your Expenses</p>
          <p testid="expensesAmount">Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
