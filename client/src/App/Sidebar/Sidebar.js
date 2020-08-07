import React from 'react';
import { connect } from 'react-redux';

/** components */
import Tags from './Tags/Tags';

/** styles */
import styles from './Sidebar.module.css';

export const Sidebar = ({
    heroImage,
    subtitle,
    title,
}) => (
    <div className={styles.sidebar}>
        <img
            alt={`${title} hero`}
            className={styles.hero}
            src={heroImage}
        />
        <h3>{title}</h3>
        <div className={styles.subtitle}>{subtitle}</div>
        <Tags />
    </div>
);

const mapStateToProps = state => ({
    heroImage: state.app.image,
    subtitle: state.app.subtitle,
    title: state.app.title,
})

export default connect(mapStateToProps)(Sidebar);