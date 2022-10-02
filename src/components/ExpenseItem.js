import './ExpenseItem.css'
const ExpenseItem = ({ title, amount, date }) => {
  const month = date.toLocaleString('en-US', { month:'long'})
  const year = date.toLocaleString('en-US', { year: 'numeric'})
  const day = date.toLocaleString('en-US', { day: 'numeric'})
  return (
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">
        ${amount}
      </div>
    </div>
  )
}

export default ExpenseItem