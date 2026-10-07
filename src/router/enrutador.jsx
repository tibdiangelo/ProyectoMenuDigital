import { createBrowserRouter } from "react-router";
import Display from "@/components/display";
import Home from "../pages/home";
import Login from "@/pages/login";
import ErrorPage from "@/pages/errorPage";

const router = createBrowserRouter([{
    path:"/",
    element: <Display/>,
    children: [
        {index: true, element: <Home/> },
        {path: "login", element: <Login/> },
        {path: "*", element: <ErrorPage/> }
]
}])

export default router