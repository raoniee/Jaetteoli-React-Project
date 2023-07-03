import Main1 from "./component/main/Main1";
import Main2 from "./component/main/Main2";
import Main3 from "./component/main/Main3";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    { path: '/', element: <Main1 /> },
    { path: '/today/menu', element: <Main1 /> },
    { path: '/today/order/wait', element: <Main2 /> },
    { path: '/today/order/process', element: <Main3 status='process' /> },
    { path: '/today/order/complete', element: <Main3 status='complete' /> },
])

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
