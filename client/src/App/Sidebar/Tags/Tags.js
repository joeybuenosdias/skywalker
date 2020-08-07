import React from 'react';
import { connect } from 'react-redux';

/** styles */
import styles from './Tags.module.css';

export const Tags = ({ tags }) => (
    <div className={styles.tags}>
        {tags.map((tag, index) => (
            <button
                className={styles.tag}
                key={index}
            >
                {tag}
            </button>
        ))}
    </div>
);

Tags.defaultProps = {
    tags: [],
};

const mapStateToProps = state => ({
    tags: state.app.tags
})

export default connect(mapStateToProps)(Tags)