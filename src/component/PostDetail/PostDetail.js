import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
    const postDetail = useLoaderData();
    const { id, title, body, userId } = postDetail;

    const getAuthor = useNavigate();
    const getAuthorHandler = () => {
        getAuthor(`/user/${userId}`);
    };

    return (
        <div>
            <h1>Post Detail: {id}</h1>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={getAuthorHandler}>Get Author</button>
        </div>
    );
};

export default PostDetail;
