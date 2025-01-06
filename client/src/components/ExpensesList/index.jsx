import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './style.module.scss';
import TransactionItem from '../TransactionItem';
import DatePicker from '../DatePicker';



export default function ExpensesList() {
  const [expenses, setExpenses] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleGetExpenses = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/expenses`, {
        params: {
          startDate,
          endDate
        }
      });
      setExpenses(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className={styles.expensesContainer}>  {/* אפשר להשתמש באותו class */}
      <DatePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        handleGet={handleGetExpenses}
        isLoading={isLoading}
      />
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          {expenses.map(expense => (
            <TransactionItem
              key={expense._id}
              type="expense"
              amount={expense.amount}
              date={expense.date} 
              customer={expense.customer}
              product={expense.product}
            />
          ))}
        </ul>
      </div>
    </div>
   )
}