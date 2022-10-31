import React from 'react';
import styles from "./SearchInput.module.css";

const SearchInput = ({setSearchParams, onSubmitSearch}) => {



    return (
        <div className={styles.main}>
            <form onSubmit={(e) => onSubmitSearch(e)}>
                <input
                    className={styles.inputSearch}
                    onChange={(event) => {
                        let filter = event.target.value;
                        if (filter) {
                            setSearchParams({filter});
                        } else {
                            setSearchParams({});
                        }
                    }}
                />
            </form>
        </div>
    );
};

export default SearchInput;