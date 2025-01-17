import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss';


export default function Header() {
  return (
    <div>
      <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.link}>בית</NavLink>
      <NavLink to="/expenses" className={({ isActive }) => isActive ? styles.active : styles.link}>הוצאות</NavLink>
      <NavLink to="/incomes" className={({ isActive }) => isActive ? styles.active : styles.link}>הכנסות</NavLink>
    </div>
  )
}


