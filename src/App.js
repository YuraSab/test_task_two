import React, {useEffect, useState} from 'react';
import Posts from "./components/Posts/Posts";
import {postService} from "./service/post-service";
import Pagination from "./Elements/Pagination/Pagination";
import styles from "./App.module.css";
import {useSearchParams} from "react-router-dom";
import SearchInput from "./Elements/SearchInput/SearchInput";
import SearchedPosts from "./components/SearchedPosts/SearchedPosts";

const App = () => {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    const pService = postService;


    useEffect(() => {
        getPosts(page);
    }, [page]);

    const getPosts = async (page) => {
        let post = await pService.getPostsPerPage(page);
        setPosts(post);
    }

    let filter = searchParams.get("filter");


    return (

        <div className={styles.main}>

            <SearchInput
                setSearchParams={setSearchParams}
            />

            <div>
                {
                    filter ? (
                        <div className={styles.isInput}>
                            <SearchedPosts
                                posts={posts}
                                searchParams = {searchParams}
                            />
                        </div>
                    ) :(
                        <div className={styles.isntInput}>
                            <Posts
                                posts={posts}
                                // filteredValue={filteredValue}
                                searchParams = {searchParams}
                            />
                            <Pagination
                                setPage = {setPage}
                                page = {page}
                            />
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default App;