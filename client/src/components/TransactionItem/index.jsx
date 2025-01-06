import React from 'react'
import styles from './style.module.scss'

export default function TransactionItem({ type='expense', amount, date, customer="חיה לוי", product="עוגת בנטו" }) {
  return (
    <div className={styles.item}>
      <div className={styles.details}>
        <span className={styles.customer}>{customer}</span>
        <span className={styles.product}>{product}</span>
        <span className={styles.amount}>₪ {amount.toLocaleString()}</span>
        <span className={styles.date}>{new Date(date).toLocaleDateString()}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.edit}>ערוך</button>
        <button className={styles.delete}>מחק</button>
      </div>
    </div>
  )
}
