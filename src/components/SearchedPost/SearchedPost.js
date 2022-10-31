import React from 'react';
import styles from "./SearchedPost.module.css";

const SearchedPost = ({item}) => {
    return (
        <div className={styles.main}>
            {item.title}
        </div>
    );
};

export default SearchedPost;