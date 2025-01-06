import Dashboard from '../Dashboard';
import ExpensesList from '../ExpensesList';
import Form from '../Form';
import styles from './style.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Layout() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.sidebar}>
            <Form />
          </div>
          <div className={styles.mainContent}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/expenses" element={<ExpensesList />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
