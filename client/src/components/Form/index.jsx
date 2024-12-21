import React, { useState } from 'react';
import styles from './style.module.scss';
import { addExpenseAction } from '../../hooks/addExpenseAction';
import { addIncomeAction } from '../../hooks/addIncomeAction';
import { useFormStatus } from 'react-dom';

// Submit button component with loading state
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'מוסיף...' : 'הוסף'}
    </button>
  );
}



export default function Form() {
  const [type, setType] = useState("income");

  async function formAction(formData) {
    const data = {
      amount: parseFloat(formData.get('amount')),
      date: new Date(formData.get('date')).toISOString(),
      customer: formData.get('customer'),
      productType: formData.get('productType') 

    };

    if (type === "income") {
      return await addIncomeAction(data);
    } else {
      return await addExpenseAction(data);
    }
  }

 return (
<div className={styles.formContainer}>
  <h2 className={styles.formTitle}>הוספת נתונים</h2>
  <div className={styles.switcherContainer}>
    <label className={styles.switcher}>
      <input
        type="checkbox"
        checked={type === 'expense'}
        onChange={() => setType(type === 'income' ? 'expense' : 'income')}
      />
      <div className={`${styles.switchLabels} ${type === 'expense' ? styles.expense : ''}`}>
        <span className={type === 'income' ? styles.active : ''}>הכנסה</span>
        <span className={type === 'expense' ? styles.active : ''}>הוצאה</span>
      </div>
    </label>
  </div>
      <form action={formAction} className={styles.form}>
        <input
          type="number"
          name="amount"
          placeholder="סכום"
          required
        />
        <input
          type="date"
          name="date"
          required
        />
        <input
          type="text"
          name="customer"
          placeholder={type === 'expense' ? 'ספק' : 'לקוח'}
          required
        />

        {
          type=="income"?<select
          name="productType"
          required
          className={styles.select}
        >
          <option value="">בחר סוג מוצר</option>
          <option value="general">כללי</option>
          <option value="custom_cake">עוגה מעוצבת</option>
          <option value="bento_cake">עוגת בנטו</option>
          <option value="package">מארז</option>
          <option value="workshop">סדנה</option>
        </select>:""
        }
        
        <SubmitButton />
      </form>
    </div>
  );
}