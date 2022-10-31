import React from 'react';
import SearchedPost from "../SearchedPost/SearchedPost";
import styles from "./SearchedPosts.module.css";

const SearchedPosts = ({posts, searchParams}) => {


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
                            <SearchedPost
                                key={value.id}
                                item={value}
                            />
                        )
                    })
            }
        </div>
    );
};

export default SearchedPosts;