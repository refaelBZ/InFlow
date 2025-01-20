import React from 'react';
import axios from 'axios';
import styles from './style.module.scss';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';


export default function TransactionItem({ 
 id, 
 type = 'expense', 
 amount = 0, 
 date = new Date(), 
 customer = '', 
 productType = '',
 setExpenses,
 setIncomes
})
 {
 const BASE_URL = import.meta.env.VITE_API_URL;

 const deleteTransaction = async (transactionId) => { 
   try {
     const endpoint = type === 'expense' ? 'expenses' : 'incomes';
     await axios.put(`${BASE_URL}/${endpoint}/${transactionId}`);
     
     if (type === 'expense') {
       setExpenses(prev => prev.filter(expense => expense._id !== transactionId));
     } else {
       setIncomes(prev => prev.filter(income => income._id !== transactionId));
     }
   } catch (err) {
     console.error(`Error deleting ${type}:`, err);
   }
 };

 const formattedDate = new Date(date).toLocaleDateString('he-IL', {
   year: 'numeric',
   month: 'long',
   day: 'numeric'
 });

 const formattedAmount = new Intl.NumberFormat('he-IL', {
   style: 'currency',
   currency: 'ILS',
   minimumFractionDigits: 0,
   maximumFractionDigits: 0
 }).format(amount);

 return (
   <div className={`${styles.item} ${styles[type]}`}>
     <div className={styles.details}>
       <div className={styles.mainInfo}>
         <span className={styles.amount}>
           {type === 'expense' ? `-${formattedAmount}` : formattedAmount}
         </span>
         <span className={styles.product}>{productType}</span>
       </div>
       
       <div className={styles.secondaryInfo}>
         <span className={styles.customer}>{customer}</span>
         <span className={styles.date}>{formattedDate}</span>
       </div>
     </div>

     <div className={styles.actions}>
       <button 
         className={styles.edit}
         aria-label="ערוך"
         title="ערוך"
       >
         <FiEdit size={18} />
       </button>
       <button 
         onClick={() => deleteTransaction(id)} 
         className={styles.delete}
         aria-label="מחק"
         title="מחק"
       >
         <RiDeleteBin6Line size={18} />
       </button>
     </div>
   </div>
 );
}