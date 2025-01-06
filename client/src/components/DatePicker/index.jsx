import React from 'react'
import styles from './style.module.scss'

export default function DatePicker({
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    handleGet,
    isLoading
  }) {

    return (
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
            {isLoading ? "טוען..." : "הצג"}
          </button>
        </div>
      </div>
    );
  }