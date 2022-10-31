import React, {useEffect, useState} from 'react';
import Posts from "./components/Posts/Posts";
import {postService} from "./service/post-service";
import Pagination from "./Elements/Pagination";

const App = () => {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const pService = postService;

    useEffect(() => {
        getPosts(page);
    }, [page]);

    const getPosts = async (page) => {
        let post = await pService.getPostsPerPage(page);
        setPosts(post);
    }


    return (

        <div>
            <Posts posts={posts}/>
            <Pagination
                setPage = {setPage}
                page = {page}

            />
        </div>
    );
};

export default App;