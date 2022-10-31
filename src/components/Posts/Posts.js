import React from 'react';
import Post from "../Post/Post";
import styles from "./Posts.module.css";

const Posts = ({posts}) => {


    return (
        <div className={styles.main}>
            {
                posts.map(value => {
                    return(
                        <Post
                            key = {value.id}
                            item = {value}
                        />
                    )
                })
            }
        </div>
    );
};

export default Posts;