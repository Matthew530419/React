import styles from './search_header.module.css';

import React, { useRef } from 'react';

const SearchHeader = ({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        //console.log(value);
        onSearch(value);
    }
    const onKeyPress = (event) => {
        if(event.key === 'Enter'){
            handleSearch();
        }
    }

    const onClick = () => {
        handleSearch();
    }

    return(
        <header className={styles.header}>
            <div className={styles.container}>
            <img className={styles.logo} src="./logo.png" alt="logo" />
            <h1 className={styles.title}>Mattube</h1>
            </div>
            <input 
            ref={inputRef}
            className={styles.input} 
            type="search" 
            placeholder="Search.."
            onKeyPress={onKeyPress} />
            <button 
            className={styles.button}
            onClick={onClick} >
            <img className={styles.buttonImg} src="./search.png" alt="search" />
            </button>
        </header>
    )
}

export default SearchHeader;