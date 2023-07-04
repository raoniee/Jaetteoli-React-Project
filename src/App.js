import Header from './component/header/Header';
import ManageReview from './component/main/ManageReview';
import TodayMenu from "./component/main/TodayMenu";
import TodayOrder from "./component/main/TodayOrder";
import ManageSale from './component/main/ManageSale'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SideBar from './component/sidebar/SideBar';

const router = createBrowserRouter([
    { path: '/', element: <TodayMenu /> },
    { path: '/today/menu', element: <TodayMenu /> },
    { path: '/today/order', element: <TodayOrder /> },
    { path: '/review', element: <ManageReview /> },
    { path: '/sales', element: <ManageSale /> },
])

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
