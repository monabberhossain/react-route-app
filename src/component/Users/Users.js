import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();
    return (
        <div>
            <h1>Users Component</h1>
            {
                users.map(user => <User 
                    key={user.id}
                    user={user}
                ></User>)
            }
        </div>
    );
};

export default Users;
