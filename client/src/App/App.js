import React, { useEffect } from 'react';
import { connect } from 'react-redux';

/** components */
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Chart from './Chart/Chart';

/** styles */
import styles from './App.module.css'

/** actions */
import { fetchData } from './actions';

/** dummy data */
import { data } from '../data';

export const App = ({
  fetchData
}) => {
  useEffect(() => {
    fetchData(data);
  }, [fetchData]);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <Chart />
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  fetchData,
};

export default connect(null, mapDispatchToProps)(App);
