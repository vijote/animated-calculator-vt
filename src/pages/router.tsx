// React
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Layout from "./layout";
import Home from "./home";
import Addition from "./addition";
import Substraction from "./substraction";
import Multiplication from "./multiplication";
import Division from "./division";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'addition',
                element: <Addition />
            },
            {
                path: 'substraction',
                element: <Substraction />
            },
            {
                path: 'multiplication',
                element: <Multiplication />
            },
            {
                path: 'division',
                element: <Division />
            }
        ],
    },
]);

export default function () {
    return (
        <RouterProvider router={router} />
    )
}