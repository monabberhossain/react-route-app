import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetail = () => {
    const userDetail = useLoaderData();
    return (
        <div>
            <h1>User Detail</h1>
            <h3>{userDetail.name}</h3>
        </div>
    );
};

export default UserDetail;
