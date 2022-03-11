import styles from './search_header.module.css';

import React from 'react';

const SearchHeader = (props) => {
    return(
        <header className={styles.header}>
            <div className={styles.container}>
            <img className={styles.logo} src="./logo.png" alt="logo" />
            <h1 className={styles.title}>Mattube</h1>
            </div>
            <input className={styles.input} type="search" placeholder="Search..." />
            <button className={styles.button} >
            <img className={styles.buttonImg} src="./search.png" alt="search" />
            </button>
        </header>
    )
}

export default SearchHeader;