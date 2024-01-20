import {
  BatteryFull,
  Candle,
  Category2,
  Document,
  LogoutCurve,
  MouseSquare,
  Profile2User,
  Reserve,
  ShoppingCart,
  Truck,
  UserSquare,
} from "iconsax-react";
import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../assets/icons";

const Sidebar = ({ className }) => {
  const location = useLocation().pathname.split("/");

  const menus = [
    {
      name: "menu",
      path: null,
      children: [
        {
          name: "Dashboard",
          icon: (
            <Category2
              color={location?.[1] === "" ? "#5D5FEF" : "#98949E"}
              variant="TwoTone"
              size={14}
            />
          ),
          path: "/",
          countNotif: 4,
        },
        {
          name: "Stock",
          icon: (
            <BatteryFull
              color={location?.[1] === "stock" ? "#5D5FEF" : "#98949E"}
              variant="TwoTone"
              size={14}
            />
          ),
          path: "/stock",
        },
        {
          name: "Customer",
          icon: (
            <Profile2User
              color={location?.[1] === "customer" ? "#5D5FEF" : "#98949E"}
              variant="Bulk"
              size={14}
            />
          ),
          path: "/customer",
        },
        {
          name: "Restaurant",
          icon: (
            <Reserve
              color={location?.[1] === "restaurant" ? "#5D5FEF" : "#98949E"}
              variant="TwoTone"
              size={14}
            />
          ),
          path: "/restaurant",
        },
        {
          name: "Design",
          icon: (
            <MouseSquare
              color={location?.[1] === "design" ? "#5D5FEF" : "#98949E"}
              variant="TwoTone"
              size={14}
            />
          ),
          path: "/design",
        },
        {
          name: "Report",
          icon: (
            <Document
              color={location?.[1] === "report" ? "#5D5FEF" : "#98949E"}
              variant="TwoTone"
              size={14}
            />
          ),
          path: "/report",
        },
        {
          name: "Role & Admin",
          icon: (
            <UserSquare
              color={location?.[1] === "role" ? "#5D5FEF" : "#98949E"}
              variant="TwoTone"
              size={14}
            />
          ),
          path: "/role",
        },
        {
          name: "Settings",
          icon: (
            <Candle
              color={location?.[1] === "setting" ? "#5D5FEF" : "#98949E"}
              variant="TwoTone"
              size={14}
            />
          ),
          path: "/setting",
        },
      ],
    },
    {
      name: "Integration",
      path: null,
      children: [
        {
          name: "Stock",
          icon: (
            <ShoppingCart
              color={location?.[1] === "stocks" ? "#5D5FEF" : "#98949E"}
              variant="TwoTone"
              size={14}
            />
          ),
          path: "/stocks",
        },
        {
          name: "Supply",
          icon: (
            <Truck
              color={location?.[1] === "supply" ? "#5D5FEF" : "#98949E"}
              variant="TwoTone"
              size={14}
            />
          ),
          path: "/supply",
        },
      ],
    },
  ];

  return (
    <div
      className={`sidebar w-[200px] border-r border-[#D1D0D366] fixed flex flex-col top-0 bottom-0 overflow-y-auto ${className}`}
    >
      <div className="px-6 pt-6 pb-2">
        <Logo />
      </div>
      <div className="flex flex-col">
        {menus?.map((menu, idx) =>
          menu?.children?.length > 0 ? (
            <Fragment key={idx}>
              <span className="text-[10px] text-gray-2 capitalize ml-6 mb-2 mt-4">
                {menu.name}
              </span>
              {menu.children?.map((child, idy) => (
                <Link
                  to={child.path}
                  key={idy}
                  className="flex pl-6 py-2 pr-[10px] gap-3 items-center"
                >
                  {child.icon}
                  <span
                    className={`text-sm font-semibold font-quicksand ${
                      location?.[1] === child.path?.split("/")?.[1]
                        ? "text-iris-100"
                        : "text-gray-2"
                    }`}
                  >
                    {child.name}
                  </span>
                  {child?.countNotif > 0 ? (
                    <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-r from-[#EEA849] to-[#F46B45] text-[10px] font-quicksand text-white flex justify-center items-center font-semibold ml-auto">
                      {child.countNotif}
                    </div>
                  ) : null}
                </Link>
              ))}
            </Fragment>
          ) : (
            <Link
              to={menu.path}
              key={idx}
              className="flex pl-6 py-2 pr-[10px] gap-3 items-center"
            >
              {menu.icon}
              <span
                className={`text-sm font-semibold font-quicksand ${
                  location?.[1] === menu.path?.split("/")?.[1]
                    ? "text-iris-100"
                    : "text-gray-2"
                }`}
              >
                {menu.name}
              </span>
            </Link>
          )
        )}
      </div>
      <div className="flex flex-col p-6 gap-6 mt-auto border-t border-[#D1D0D366]">
        <div className="flex gap-3">
          <img
            src="https://picsum.photos/200"
            alt="profile"
            width={36}
            height={36}
            className="rounded-full bg-cover flex-none w-9 h-9"
          />
          <div className="">
            <h6 className="text-sm font-quicksand text-gray-1 font-semibold">
              Savannah N
            </h6>
            <span className="text-[10px] text-gray-2 font-satoshi">
              Food Quality Manager
            </span>
          </div>
        </div>
        <button className="flex items-center justify-center rounded p-2 gap-2 bg-error-98">
          <LogoutCurve color="#8F0A13" variant="Bulk" size={16} />
          <span className="text-xs font-semibold font-quicksand text-error-30">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
