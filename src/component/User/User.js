import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, username, email } = user;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h5>
                Username:{" "}
                <span className="username">
                    <Link to={`/user/${id}`}>{username}</Link>
                </span>
            </h5>
            <h5>Email: {email}</h5>
        </div>
    );
};

export default User;
