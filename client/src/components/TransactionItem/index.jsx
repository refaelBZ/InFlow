import React from 'react'
import styles from './style.module.scss'

export default function TransactionItem({ type='expense', amount, date, customer="חיה לוי", product="עוגת בנטו" }) {
  return (
    <div className={styles.item}>
{type} {amount} {name} {date} {product}
<button>מחק</button>
<button>ערוך</button>
    </div>
  )
}
