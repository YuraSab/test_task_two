import React from 'react';
import styles from "./Post.module.css";

const Post = ({item}) => {


    return (
        <div className={styles.main}>
                <h1>{item.id}</h1>
                <h3>{item.title}</h3>
        </div>
    );
};

export default Post;