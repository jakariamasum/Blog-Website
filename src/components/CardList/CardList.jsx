import React from 'react';
import Pagination from '../Pagination/Pagination';
import styles from './CardList.css'
const CardList = () => {
    return (
        <div className={styles.container}>
            <Pagination/>
        </div>
    );
};

export default CardList;