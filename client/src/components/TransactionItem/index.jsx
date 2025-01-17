import React from 'react';
import axios from 'axios';
import styles from './style.module.scss';

export default function TransactionItem({ 
  id, 
  type, 
  amount, 
  date, 
  customer, 
  product, 
  setExpenses, 
  setIncomes 
}) {
  const BASE_URL = import.meta.env.VITE_API_URL;

  const deleteTransaction = async (transactionId) => { 
    try {
      // מחרוזת דינמית לסוג העסקה (expenses או incomes)
      const endpoint = type === 'expense' ? 'expenses' : 'incomes';
      
      await axios.put(`${BASE_URL}/${endpoint}/${transactionId}`);
      
      // עדכון ה-state המתאים בהתאם לסוג העסקה
      if (type === 'expense') {
        setExpenses(prevExpenses => 
          prevExpenses.filter(expense => expense._id !== transactionId)
        );
      } else {
        setIncomes(prevIncomes => 
          prevIncomes.filter(income => income._id !== transactionId)
        );
      }
      
    } catch (err) {
      console.error(`Error deleting ${type}:`, err);
    }
  };

  return (
    <div className={`${styles.item} ${styles[type]}`}>
      <div className={styles.details}>
        <span className={styles.customer}>{customer}</span>
        <span className={styles.product}>{product}</span>
        {/* הוספת סימן מינוס להוצאות */}
        <span className={styles.amount}>
          ₪ {(type === 'expense' ? '-' : '') + amount.toLocaleString()}
        </span>
        <span className={styles.date}>{new Date(date).toLocaleDateString()}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.edit}>ערוך</button>
        <button 
          onClick={() => deleteTransaction(id)} 
          className={styles.delete}
        >
          מחק
        </button>
      </div>
    </div>
  );
}