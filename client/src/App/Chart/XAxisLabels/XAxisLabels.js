import React from 'react';

/** styles */
import styles from './XAxisLabels.module.css';

const labels = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
]

export const XAxisLabels = () => (
    <div className={styles.labels}>
        {labels.map(label => <div>{label}</div>)}
    </div>
);

export default XAxisLabels;