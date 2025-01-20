import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss';

export default function Header() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/dashboard" className={({ isActive }) => isActive ? styles.active : styles.link}>
        דשבורד
      </NavLink>
      <NavLink to="/expenses" className={({ isActive }) => isActive ? styles.active : styles.link}>
        הוצאות
      </NavLink>
      <NavLink to="/incomes" className={({ isActive }) => isActive ? styles.active : styles.link}>
        הכנסות
      </NavLink>
    </nav>
  );
}


