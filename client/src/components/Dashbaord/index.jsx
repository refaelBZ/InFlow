import React, { useState } from 'react';
import styles from './style.module.scss';
import axios from 'axios';

export default function Dashboard() {
   const [totalExpenses, setTotalExpenses] = useState(0);
   const [totalIncome, setTotalIncome] = useState(0);
   const [startDate, setStartDate] = useState('');
   const [endDate, setEndDate] = useState('');

   const handleGet = async () => {
       try {
           const response = await axios.get('http://localhost:5000/expense', {
               params: {
                   startDate,
                   endDate
               }
           });
           setTotalExpenses(response.data);
       } catch (err) {
           console.error(err);
       }
       try {
        const response = await axios.get('http://localhost:5000/income', {
            params: {
                startDate,
                endDate
            }
        });
        setTotalIncome(response.data);
    } catch (err) {
        console.error(err);
    }
   };

   const profit = totalIncome - totalExpenses;


   return (
    <div className={styles.dashboardContainer}>
<div className={styles.headerControls}>
  <div className={styles.dateGroup}>
    <div className={styles.dateControl}>
      <label>מתאריך:</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
    </div>
    <div className={styles.dateControl}>
      <label>עד תאריך:</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
    </div>
    <button onClick={handleGet} className={styles.fetchButton}>
      הצג
    </button>
  </div>
</div>
      
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3 className={styles.statTitle}>הכנסות</h3>
          <p className={styles.statValue}>₪ {totalIncome.toLocaleString()}</p>
        </div>
        <div className={styles.statCard}>
          <h3 className={styles.statTitle}>הוצאות</h3>
          <p className={styles.statValue}>₪ {totalExpenses.toLocaleString()}</p>
        </div>
        <div className={styles.statCard}>
          <h3 className={styles.statTitle}>רווח</h3>
          <p className={styles.statValue}>₪ {profit.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
