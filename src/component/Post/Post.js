import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title, body } = post;
    const showDetail = useNavigate();
    const showDetailHandler = () => {
        showDetail(`/post/${id}`);
    };
    return (
        <div>
            <h4>{title}</h4>
            <p>{body}</p>
            <Link to={`/post/${id}`}>
                <button>Show Detail</button>
            </Link>
            <button onClick={showDetailHandler}>Show Detail 2</button>
        </div>
    );
};

export default Post;
