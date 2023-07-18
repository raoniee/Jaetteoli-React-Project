import ManageReview from "./component/main/ManageReview";
import TodayMenu from "./component/main/TodayMenu";
import TodayOrder from "./component/main/TodayOrder";
import ManageSale from "./component/main/ManageSale";

// Membership
import MembershipStart from "./component/memberShip/MembershipStart";
import MembershipPhone from "./component/memberShip/MembershipPhone";
import MembershipInformation from "./component/memberShip/MembershipInformation";
import MembershipEnd from "./component/memberShip/MembershipEnd";

// login
import LoginStart from "./component/login/LoginStart";
import Search from "./component/login/Search";
import IDShow from "./component/login/IDShow";
import PasswordNew from "./component/login/PasswordNew";

import Regist1 from "./component/register/Regist1";
import Regist2 from "./component/register/Regist2";
import Regist3 from "./component/register/Regist3";
import Modify1 from "./component/main/Modify1";
// admin
import StoreInfoPage from "./component/admin/StoreInfoPage";
import StoreRegisterPage from "./component/admin/StoreRegisterPage";
import StoreReviewPage from "./component/admin/StoreReviewPage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/home/Home";
import { checkAdmin, checkRegisterMenu, checkRegisterStore, checkTodayPage } from "./store/auth";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  // Membership
  { path: "/signup/agree", element: <MembershipStart /> },
  { path: "/signup/phone", element: <MembershipPhone /> },
  { path: "/signup/begin", element: <MembershipInformation /> },
  { path: "/signup/complete", element: <MembershipEnd /> },
  // login
  { path: "/login", element: <LoginStart /> },
  { path: "/help", element: <Search /> },
  { path: "/help/complete", element: <IDShow /> },
  { path: "/help/new-pw", element: <PasswordNew /> },
  //
  { path: "/today/menu", element: <TodayMenu />, loader: checkTodayPage },
  { path: "/today/order", element: <TodayOrder />, loader: checkTodayPage },
  { path: "/review", element: <ManageReview />, loader: checkTodayPage },
  { path: "/sales", element: <ManageSale />, loader: checkTodayPage },
  { path: "/operation", element: <Modify1 />, loader: checkTodayPage },
  //
  { path: "/register/store", element: <Regist1 />, loader: checkRegisterStore },
  { path: "/register/menu", element: <Regist2 />, loader: checkRegisterMenu },
  { path: "/register/origin", element: <Regist3 />, loader: checkRegisterMenu },
  //
  { path: "/admin/register", element: <StoreRegisterPage />, loader:checkAdmin },
  { path: "/admin/review", element: <StoreReviewPage />, loader:checkAdmin  },
  { path: "/admin/store", element: <StoreInfoPage />, loader:checkAdmin  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
