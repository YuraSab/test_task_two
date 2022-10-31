import React, {useEffect, useState} from 'react';
import {postService} from "../service/post-service";



const Pagination = ({setPage, page}) => {

    const [pagesCount, setPagesCount] = useState(1);
    const pService = postService;
    const listOfPageLinks = [];


    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        let count = await pService.getPostsCount();
        let pCount = Math.ceil(count / 10);
        setPagesCount(pCount)
    }



    for (let i = 1; i <= pagesCount; i++) {

        let active = page === i;

        listOfPageLinks.push(
            <div
                className={active ? 'active' : 'not_active'}
                key={i}
                onClick={() => setPage(i)}
            >
                {i}
            </div>
        )
    }

    return (
        <div>
            {
                listOfPageLinks
            }
        </div>
    );
};

export default Pagination;