import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './style.module.scss';
import TransactionItem from '../TransactionItem';
import DatePicker from '../DatePicker';



export default function ExpensesList() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const BASE_URL = import.meta.env.VITE_API_URL;


    const calculateCurrentMonthRange = () => {
      const now = new Date();
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
      const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  
      const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
  
      return {
        startDate: formatDate(firstDay),
        endDate: formatDate(lastDay)
      };
    };
  
    useEffect(() => {
      const { startDate, endDate } = calculateCurrentMonthRange();
      setStartDate(startDate);
      setEndDate(endDate);
    }, []);
    

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
              id={expense._id}
              key={expense._id}
              type="expense"
              amount={expense.amount}
              date={expense.date} 
              customer={expense.customer}
              product={expense.product}
              setExpenses={setExpenses}
            />
          ))}
        </ul>
      </div>
    </div>
   )
}