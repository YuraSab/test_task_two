import React, {useEffect, useState} from 'react';
import Posts from "./components/Posts/Posts";
import {postService} from "./service/post-service";
import Pagination from "./Elements/Pagination/Pagination";
import styles from "./App.module.css";
import {useSearchParams} from "react-router-dom";
import SearchInput from "./Elements/SearchInput/SearchInput";

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


    // const filteredValue = posts.filter((post) => {
    //     let filter = searchParams.get("filter");
    //     if (!filter) return true;
    //     let title = post.title.toLowerCase();
    //     return title.includes(filter.toLowerCase());
    // });

    return (

        <div className={styles.main}>

            <SearchInput
                setSearchParams={setSearchParams}
            />

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

        </div>
    );
};

export default App;