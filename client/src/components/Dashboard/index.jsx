import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import DatePicker from '../DatePicker';

export default function Dashboard() {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [defaultDate, setDefaultDate] = useState(new Date());

  const BASE_URL = import.meta.env.VITE_API_URL;
  const handleGet = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/totalexpense`, {
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
      const response = await axios.get(`${BASE_URL}/income`, {
        params: {
          startDate,
          endDate
        }
      });
      setTotalIncome(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const profit = totalIncome - totalExpenses;

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

  return (
    <div className={styles.dashboardContainer}>
      <DatePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        handleGet={handleGet}
        isLoading={isLoading}
      />
      <div className={styles.statsGrid}>
        <NavLink to="/incomes" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          <div className={styles.statCard}>
            <h3 className={styles.statTitle}>הכנסות</h3>
            <p className={styles.statValue}>
              {isLoading ? (
                <div className={styles.loader} />
              ) : (
                `₪ ${totalIncome.toLocaleString()}`
              )}
            </p>
          </div>
        </NavLink>
        <NavLink to="/expenses" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
        <div className={styles.statCard}>
          <h3 className={styles.statTitle}>הוצאות</h3>
          <p className={styles.statValue}>
            {isLoading ? (
              <div className={styles.loader} />
            ) : (
              `₪ ${totalExpenses.toLocaleString()}`
            )}
          </p>
        </div>
        </NavLink>

        <div className={styles.statCard}>
          <h3 className={styles.statTitle}>רווח</h3>
          <p className={styles.statValue}>
            {isLoading ? (
              <div className={styles.loader} />
            ) : (
              `₪ ${profit.toLocaleString()}`
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
