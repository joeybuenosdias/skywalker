import React from 'react';
import { connect } from 'react-redux';

/** components */
import {
    Line,
    LineChart,
    Tooltip,
} from 'recharts';
import { XAxisLabels } from './XAxisLabels/XAxisLabels';

/** styles */
import styles from './Chart.module.css';

export const Chart = ({ sales }) => (
    <div className={styles.wrapper}>
        <div className={styles.title}>Retail Sales</div>
        <div className={styles.chart}>
            <LineChart
                data={sales}
                height={600}
                width={1000}
            >
                <Tooltip
                    formatter={value => Number(value).toLocaleString()}
                    labelFormatter={value => `Week: ${value}`}
                />
                <Line
                    dataKey="retailSales"
                    dot={false}
                    stroke="#0099ff"
                    type="monotone"
                />
                <Line
                    dataKey="wholesaleSales"
                    dot={false}
                    stroke="gray"
                    type="monotone"
                />
            </LineChart>
            <XAxisLabels />
        </div>
    </div>
);

const mapStateToProps = state => ({
    sales: state.app.sales
})

export default connect(mapStateToProps)(Chart);