import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to="/"
            ></NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        </div>
    );
};

export default Header;
