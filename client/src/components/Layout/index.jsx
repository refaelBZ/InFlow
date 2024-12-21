import Dashboard from '../dashbaord';
import Form from '../Form';
import styles from './style.module.scss';

export default function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Form />
        </div>
        <div className={styles.mainContent}>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
