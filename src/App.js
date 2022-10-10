import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Blog from "./component/Blog/Blog";
import Home from "./component/Home/Home";
import Main from "./layout/Main";
import Users from "./component/Users/Users";
import UserDetail from "./component/UserDetail/UserDetail";
import Posts from "./component/Posts/Posts";
import PostDetail from "./component/PostDetail/PostDetail";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>,
                },
                {
                    path: "home",
                    element: <Home></Home>,
                },
                {
                    path: "about",
                    element: <About></About>,
                },
                {
                    path: "contact",
                    element: <Contact></Contact>,
                },
                {
                    path: "users",
                    loader: async () => {
                        return fetch(
                            "https://jsonplaceholder.typicode.com/users"
                        );
                    },
                    element: <Users></Users>,
                },
                {
                    path: "user/:userId",
                    loader: async ({ params }) => {
                        return fetch(
                            `https://jsonplaceholder.typicode.com/users/${params.userId}`
                        );
                    },
                    element: <UserDetail></UserDetail>,
                },
                {
                    path: "posts",
                    loader: async () => {
                        return fetch(
                            `https://jsonplaceholder.typicode.com/posts`
                        );
                    },
                    element: <Posts></Posts>,
                },
                {
                    path: "post/:postId",
                    loader: async ({ params }) => {
                        return fetch(
                            `https://jsonplaceholder.typicode.com/posts/${params.postId}`
                        );
                    },
                    element: <PostDetail></PostDetail>,
                },
                {
                    path: "blog",
                    element: <Blog></Blog>,
                },
            ],
        },
        {
            path: "*",
            element: (
                <div>
                    <h1>404: Not Found</h1>
                </div>
            ),
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
