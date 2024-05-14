import { NavLink, Outlet } from "react-router-dom";
import Pagelayout from "../../cpn/Pagelayout";

function Menu() {
  return (
    <Pagelayout>
        {/* <img
          className="w-full h-20 sm:h-40 md:h-52 lg:h-60 xl:h-80 "
          src="https://media.istockphoto.com/id/1253496654/vector/best-italian-pizza-banner-with-ribbon-tomato-cheese-mozzarella-flour-delicious-slices.jpg?s=170667a&w=0&k=20&c=G2RB0dr-4i3dAPx3EXjCi8ZOZ7_SPPl6wvaxvLakXOs="
          alt="not-found"
          sticky top-[60px] z-50
        /> */}
        <nav className="w-full bg-slate-300 h-10 flex justify-evenly items-center font-semibold ">
          <NavLink
            to="pizza"
            className={({ isActive }) =>
              isActive ? "text-red-700 font-bold" : "text-black"
            }
          >
            MEAT & SEAFOOD
            
          </NavLink>
          <NavLink
            to="sides"
            className={({ isActive }) =>
              isActive ? "text-red-700 font-bold" : "text-black"
            }
          >
            RECIPES
          </NavLink>
          <NavLink
            to="dessert"
            className={({ isActive }) =>
              isActive ? "text-red-700 font-bold" : "text-black"
            }
          >
          HEALTHY & DIET
          </NavLink>
          {/* <NavLink
            to="drinks"
            className={({ isActive }) =>
              isActive ? "text-red-700 font-bold" : "text-black"
            }
          >
            Ground Beef
          </NavLink> */}
        </nav>
      <Outlet />
    </Pagelayout>
  );
}

export default Menu;
