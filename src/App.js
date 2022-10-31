import React, {useEffect, useState} from 'react';
import Posts from "./components/Posts/Posts";
import {postService} from "./service/post-service";
import Pagination from "./Elements/Pagination/Pagination";
import styles from "./App.module.css";
import {useSearchParams} from "react-router-dom";
import SearchInput from "./Elements/SearchInput/SearchInput";
import SearchedPosts from "./components/SearchedPosts/SearchedPosts";
import SubmitAlarm from "./components/SubmitAlarm/SubmitAlarm";

const App = () => {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [submitted, setSubmitted] = useState(false);

    const pService = postService;


    useEffect(() => {
        getPosts(page);
    }, [page]);

    const getPosts = async (page) => {
        let post = await pService.getPostsPerPage(page);
        setPosts(post);
    }

    let filter = searchParams.get("filter");

    const onSubmitSearch = (e) => {
        e.preventDefault();
        setSubmitted(prevState => !prevState);
        localStorage.clear();
        localStorage.setItem('searchKey', `${filter}`);
        setSearchParams("");
    }


    return (

        <div className={styles.main}>


            {
                submitted ? <SubmitAlarm setSubmitted={setSubmitted}/> : null
            }


            <SearchInput
                setSearchParams={setSearchParams}
                onSubmitSearch={onSubmitSearch}
            />

            <div>
                {
                    filter ? (
                        <div className={styles.isInput}>
                            <SearchedPosts
                                posts={posts}
                                searchParams={searchParams}
                            />
                        </div>
                    ) : (
                        <div className={styles.isntInput}>
                            <Posts
                                posts={posts}
                                // filteredValue={filteredValue}
                                searchParams={searchParams}
                            />
                            <Pagination
                                setPage={setPage}
                                page={page}
                            />
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default App;