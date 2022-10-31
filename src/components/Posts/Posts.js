import React from 'react';
import Post from "../Post/Post";
import styles from "./Posts.module.css";

const Posts = ({posts, searchParams}) => {


    return (
        <div className={styles.main}>
            {
                posts
                    .filter((post) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let title = post.title.toLowerCase();
                        return title.includes(filter.toLowerCase());
                    })
                    .map(value => {
                        return (
                            <Post
                                key={value.id}
                                item={value}
                            />
                        )
                    })
            }
        </div>
    );
};

export default Posts;