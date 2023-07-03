import TodayMenu from "./component/main/TodayMenu";
import TodayOrder from "./component/main/TodayOrder";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    { path: '/', element: <TodayMenu /> },
    { path: '/today/menu', element: <TodayMenu /> },
    { path: '/today/order', element: <TodayOrder /> },
])

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
