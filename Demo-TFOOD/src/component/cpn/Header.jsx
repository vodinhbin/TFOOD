import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../rtk/slices/authSlice";
import { Avatar } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AttributionIcon from "@mui/icons-material/Attribution";

function Header() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const userInfor = JSON.parse(localStorage.getItem("userInfor"));
  const { cartList } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    dispatch(logout());
    window.location.reload();
  };

  const activeClassname =
    "block py-2 pr-4 pl-3 text-white rounded bg-red-700 lg:bg-transparent lg:text-red-700 lg:p-0 dark:text-white";
  const unactiveClassname =
    "block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <div className="min-h-screen  bg-header text-white  min-w-screen">
      <header className="fixed top-[0] w-full z-[999]  w-full mt-5   body-font">
        <nav className="  px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/">
              <svg width={30} height={30} className='cursor-pointer' viewBox="0 0 215 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M86 140V264.718C86 271.301 88.6152 277.615 93.2704 282.27V282.27C102.432 291.432 117.099 292.006 126.949 283.589L127.853 282.817C133.658 277.856 137 270.603 137 262.968V180.305C137 158.045 155.045 140 177.305 140H186.751C191.393 140 195.844 138.156 199.126 134.874V134.874C205.96 128.04 205.96 116.96 199.126 110.126V110.126C195.844 106.844 191.393 105 186.751 105H92C58.3106 105 31 77.6894 31 44V44M31 44H44.5L31 21L18 44H31Z" stroke="#398596" strokeWidth={20} />
                <path d="M86 140V264.718C86 271.301 88.6152 277.615 93.2704 282.27V282.27C102.432 291.432 117.099 292.006 126.949 283.589L127.853 282.817C133.658 277.856 137 270.603 137 262.968V180.305C137 158.045 155.045 140 177.305 140H186.751C191.393 140 195.844 138.156 199.126 134.874V134.874C205.96 128.04 205.96 116.96 199.126 110.126V110.126C195.844 106.844 191.393 105 186.751 105H92C58.3106 105 31 77.6894 31 44V44M31 44H44.5L31 21L18 44H31Z" stroke="url(#paint0_linear_5_39)" strokeOpacity="0.5" strokeWidth={20} />
                <defs>
                  <linearGradient id="paint0_linear_5_39" x1={47} y1={60} x2="114.75" y2="298.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3DE04D" />
                    <stop offset={1} stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
            <div className="flex items-center lg:order-2">
              {token ? (
                <div className="flex items-center gap-5">
                  <Avatar alt="avatar default" src={userInfor.avatar} />
                  <p className="text-base font-semibold text-white">
                    Hi {userInfor.fullname}
                  </p>
                  <Link to="/cart" className="cursor-pointer relative">
                    <ShoppingCartIcon />
                    <p className="text-white bg-red-700 rounded-full text-xs w-4 h-4 text-center font-semibold absolute top-0 right-[-20%]">
                      {cartList.length}
                    </p>
                  </Link>
                  {userInfor.isAdmin && (
                    <Link to="/dashboard">
                      <AttributionIcon />
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="text-white bg-[#00A651] hover:bg-[#a5dcc0] focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <nav>
                  <Link
                    to="/login"
                    className="text-white bg-[#00A651] hover:bg-[#a5dcc0] focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    className="text-white bg-[#00A651] hover:bg-[#a5dcc0] focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                  >
                    Sign up
                  </Link>
                </nav>
              )}
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeClassname : unactiveClassname
                    }
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/pizza"
                    className={({ isActive }) =>
                      isActive ? activeClassname : unactiveClassname
                    }
                  >
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/order-tracking"
                    className={({ isActive }) =>
                      isActive ? activeClassname : unactiveClassname
                    }
                  >
                    Order Tracking
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className='w-full flex items-center justify-center text-center text-gray-50 '>
        <div className="mt-[20%]">
          <p className='text-7xl mb-[2%] font-bold'>Your Imagination Is <br />
            Your Only Limit</p>
          <p>We always try to make our customer Happy. We provide all kind of facilities. <br />
            Your Satisfaction is our main priority</p>
        </div>

      </div>
    </div>

  );
}

export default Header;
