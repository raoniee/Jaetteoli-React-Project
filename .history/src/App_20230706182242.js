// import Header from './component/header/Header';
// import ManageReview from './component/main/ManageReview';
// import TodayMenu from "./component/main/TodayMenu";
// import TodayOrder from "./component/main/TodayOrder";
// import ManageSale from './component/main/ManageSale';

import Footer from "./component/footer/Footer";
import MembershipStart from "./component/memberShip/MembershipStart";

// import Regist1 from "./component/register/Regist1";
// import Regist2 from "./component/register/Regist2";
// import Regist3 from "./component/register/Regist3";

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import SideBar from './component/sidebar/SideBar';

// const router = createBrowserRouter([
//     { path: '/', element: <TodayMenu /> },
//     { path: '/today/menu', element: <TodayMenu /> },
//     { path: '/today/order', element: <TodayOrder /> },
//     { path: '/review', element: <ManageReview /> },
//     { path: '/sales', element: <ManageSale /> },
//     { path: '/register/store', element: <Regist1 /> },
//     { path: '/register/menu', element: <Regist2 /> },
//     { path: '/register/origin', element: <Regist3 /> }
// ])

// function App() {
//     return (
//         <RouterProvider router={router} />
//     );
// }

// export default App;

function App() {
  return (
    <div>
      <MembershipStart />
      <Footer />
    </div>
  );
}

export default App;
