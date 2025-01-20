import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './style.module.scss';
import TransactionItem from '../TransactionItem';
import DatePicker from '../DatePicker';

export default function IncomesList() {
  const [incomes, setIncomes] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  const handleGetIncomes = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/incomes`, {
        params: {
          startDate,
          endDate
        }
      });
      setIncomes(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.incomesContainer}>
      <div className={styles.datePicker}>

      <DatePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        handleGet={handleGetIncomes}
        isLoading={isLoading}
      />
            </div>

      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          {incomes.map(income => (
            <TransactionItem
              id={income._id}
              key={income._id}
              type="income"
              amount={income.amount}
              date={income.date}
              customer={income.customer}
              product={income.product}
              setIncomes={setIncomes}
            />))}
        </ul>
      </div>
    </div>
  )
}
