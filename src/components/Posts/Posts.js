import React from 'react';
import Post from "../Post/Post";

const Posts = ({posts}) => {


    return (
        <div>
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