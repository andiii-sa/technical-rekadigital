import {
  Add,
  ArrowRight,
  Edit2,
  Filter,
  Printer,
  Refresh,
  SearchNormal,
  ShieldSearch,
  Trash,
} from "iconsax-react";
import React from "react";
import { ArrowSwap, ChartLine } from "../assets/icons";
import Badges from "../components/Badges";
import { TypeBadgeLevelCostumer } from "../utils/TypeBadgeLevelCostumer";

const Customer = () => {
  const dataTable = [
    {
      name: "Odis Rhinehart",
      level: "Warga",
      favoriteMenu: "Chicken & Ribs Combo",
      total: "IDR 194,700",
    },
    {
      name: "Odis Rhinehart",
      level: "Warga",
      favoriteMenu: "Chicken & Ribs Combo",
      total: "IDR 194,700",
    },
    {
      name: "Odis Rhinehart",
      level: "Juragan",
      favoriteMenu: "Chicken & Ribs Combo",
      total: "IDR 194,700",
    },
    {
      name: "Odis Rhinehart",
      level: "Sultan",
      favoriteMenu: "Chicken & Ribs Combo",
      total: "IDR 194,700",
    },
    {
      name: "Odis Rhinehart",
      level: "Juragan",
      favoriteMenu: "Chicken & Ribs Combo",
      total: "IDR 194,700",
    },
    {
      name: "Odis Rhinehart",
      level: "Juragan",
      favoriteMenu: "Chicken & Ribs Combo",
      total: "IDR 194,700",
    },
    {
      name: "Odis Rhinehart",
      level: "Juragan",
      favoriteMenu: "Chicken & Ribs Combo",
      total: "IDR 194,700",
    },
    {
      name: "Odis Rhinehart",
      level: "Konglomerat",
      favoriteMenu: "Chicken & Ribs Combo",
      total: "IDR 194,700",
    },
    {
      name: "Odis Rhinehart",
      level: "Konglomerat",
      favoriteMenu: "Chicken & Ribs Combo",
      total: "IDR 194,700",
    },
    {
      name: "Odis Rhinehart",
      level: "Konglomerat",
      favoriteMenu: "Chicken & Ribs Combo",
      total: "IDR 194,700",
    },
  ];

  return (
    <div className="">
      <h4 className="font-bold text-2xl text-black">Customer</h4>
      <p className="font-satoshi text-sm text-gray-2 mt-1">
        You can manage and organize your customer and other things here
      </p>
      <div className="flex justify-end gap-2 border-b border-b-[#D1D0D366] w-full">
        <button className="text-sm font-bold text-iris-100 py-3 px-3 w-[200px] border-b-2 border-b-iris-100">
          Customer
        </button>
        <button className="text-sm font-semibold text-gray-2 py-3 px-3 w-[200px]">
          Promo
        </button>
        <button className="text-sm font-semibold text-gray-2 py-3 px-3 w-[200px]">
          Voucher
        </button>
      </div>

      <div className="flex gap-4 w-full pt-4">
        <div className="w-full">
          <div className="w-full bg-iris-100 rounded-lg p-3 relative overflow-hidden">
            <img
              src={require("../assets/images/banner-costumer.png")}
              alt="banner-costumer"
              className="absolute z-[1] top-0 bottom-0 right-0 w-[530px] h-full"
            />
            <div className="flex flex-col z-[2] relative">
              <h5 className="font-bold text-xl text-white">Customer</h5>
              <p className="mt-2 text-primary-96 text-xs font-satoshi">
                On this menu you will be able to create, edit, and also delete
                <br />
                the customer. Also you can manage it easily.
              </p>
              <div className="flex mt-4 gap-4">
                <button className="flex items-center gap-3 px-4 py-2 bg-[#FFFFFF33] rounded-lg">
                  <Add
                    color="#fff"
                    variant="Linear"
                    size={16}
                    className="flex-none"
                  />
                  <span className="font-semibold text-sm text-white">
                    Add New Customer
                  </span>
                </button>
                <div className="flex gap-4 rounded-lg p-1 pl-4 bg-white items-center">
                  <SearchNormal color="#D1D0D3" variant="TwoTone" size={16} />
                  <input
                    type="text"
                    placeholder="Search Costumer"
                    className="placeholder:text-gray-3 text-gray-2 text-xs outline-none border-none"
                  />
                  <button className="font-semibold text-sm text-white py-2 px-4 rounded-lg bg-iris-100">
                    Search
                  </button>
                </div>
                <button className="font-semibold text-sm text-white py-2 px-4 rounded-lg bg-[#FFFFFF33] flex items-center gap-3 backdrop-blur-sm">
                  <Filter color="#fff" variant="TwoTone" size={16} />
                  <span>Filter</span>
                </button>
                <button className="font-semibold text-sm text-white py-2 px-4 rounded-lg bg-[#FFFFFF33] flex items-center gap-3 backdrop-blur-sm">
                  <Refresh color="#fff" variant="TwoTone" size={16} />
                  <span>Refresh</span>
                </button>
                <button className="font-semibold text-sm text-white py-2 px-4 rounded-lg bg-[#FFFFFF33] flex items-center gap-3 backdrop-blur-sm">
                  <Printer color="#fff" variant="TwoTone" size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mt-6">
            <table className="w-full">
              <thead>
                <tr className="text-left bg-neutral-abu-abu text-gray-2 text-sm">
                  <th>
                    <div className="flex justify-between items-center font-medium p-[10px]">
                      <span>Costumer Name</span>
                      <ArrowSwap className="w-4 h-4" />
                    </div>
                  </th>
                  <th>
                    <div className="flex justify-between items-center font-medium p-[10px]">
                      <span>Level</span>
                      <ArrowSwap className="w-4 h-4" />
                    </div>
                  </th>
                  <th>
                    <div className="flex justify-between items-center font-medium p-[10px]">
                      <span>Favorite Menu</span>
                      <ArrowSwap className="w-4 h-4" />
                    </div>
                  </th>
                  <th>
                    <div className="flex justify-between items-center font-medium p-[10px]">
                      <span>Total Transaction</span>
                      <ArrowSwap className="w-4 h-4" />
                    </div>
                  </th>
                  <th>
                    <div className="flex justify-between items-center font-medium p-[10px]">
                      <span>Action</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="mt-3">
                {dataTable?.map((data, idx) => (
                  <tr key={idx}>
                    <td className="p-[10px] font-semibold text-sm text-gray-1">
                      {data.name}
                    </td>
                    <td className="p-[10px]">
                      <Badges
                        text={data?.level}
                        type={TypeBadgeLevelCostumer(data?.level)}
                        className="w-fit"
                      />
                    </td>
                    <td className="p-[10px] font-semibold text-sm text-gray-1">
                      {data.favoriteMenu}
                    </td>
                    <td className="p-[10px] font-semibold text-sm text-gray-1">
                      {data.total}
                    </td>
                    <td className="p-[10px] flex gap-1">
                      <button className="rounded gap-2 px-2 py-1 bg-neutral-abu-abu font-semibold text-gray-1 text-sm flex items-center">
                        <ShieldSearch
                          color="#292D32"
                          variant="TwoTone"
                          size={12}
                        />
                        <span>Detail</span>
                      </button>
                      <button className="rounded gap-2 px-2 py-1 bg-neutral-abu-abu font-semibold text-gray-1 text-sm flex items-center">
                        <Edit2 color="#110D17" variant="TwoTone" size={12} />
                      </button>
                      <button className="rounded gap-2 px-2 py-1 bg-error-98 font-semibold text-gray-1 text-sm flex items-center">
                        <Trash color="#F02D3A" variant="TwoTone" size={12} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination w-full flex items-center justify-between mt-14 px-3 py-2 bg-neutral-abu-abu rounded-lg">
              <span className="text-gray-2 font-semibold text-base">
                Showing 10 Data Costumers
              </span>
              <div className="flex gap-0 items-center">
                <button className="px-4 py-2 rounded bg-white shadow-[2px_2px_4px_0px_#0000000D] font-bold text-gray-1">
                  1
                </button>
                <button className="px-4 py-2 rounded text-gray-4 text-sm font-semibold">
                  2
                </button>
                <button className="px-4 py-2 rounded text-gray-4 text-sm font-semibold">
                  3
                </button>
                <div className="px-4 py-2 rounded text-gray-4 text-sm font-semibold">
                  ...
                </div>
                <button className="px-4 py-2 rounded text-gray-4 text-sm font-semibold">
                  4
                </button>
                <button className="px-4 py-2 rounded text-gray-4 text-sm font-semibold flex items-center gap-3">
                  <span>Next</span>
                  <ArrowRight color="#6D6D6D" variant="Linear" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[227px] flex-none">
          <div className="rounded-lg bg-iris-100 relative h-[256px]">
            <img
              src={require("../assets/images/frame-analytics.png")}
              alt="frame-analtics"
              className="absolute top-0 bottom-0 w-full h-full z-[1]"
            />
            <div className="flex flex-col relative z-[2] p-4 h-full">
              <h5 className="text-xl font-semibold text-white">
                See analytics of the Customer Clearly
              </h5>
              <button className="font-semibold text-sm text-white py-2 px-4 rounded-lg bg-[#FFFFFF33] w-fit mt-auto">
                See Analytics
              </button>
            </div>
          </div>

          <div className="rounded-lg bg-neutral-abu-abu relative mt-4">
            <div className="flex flex-col relative z-[2] p-4 h-full">
              <h5 className="text-xl font-semibold text-gray-1">
                Top Menu <br />
                <span className="text-secondary-100 font-bold">This Week</span>
              </h5>
              <span className="font-satoshi text-xs text-gray-2 mt-3">
                10 - 12 Agustus 2023
              </span>
              <div className="mt-3 rounded-lg p-[10px] relative bg-white shadow-[4px_4px_10px_0px_#0000000D]">
                <span className="font-bold text-black text-base">
                  Nasi Goreng Jamur Special Resto Pak Min
                </span>
                <div className="bg-secondary-100 py-0 px-2 absolute shadow-[2px_2px_0px_0px_#464646] -top-[5px] right-[3px] rotate-[8deg]">
                  <span className="font-bold text-base text-white">1</span>
                </div>
              </div>
              <ol className="flex flex-col mt-3 gap-2 list-decimal ml-4">
                <li className="p-[10px] font-semibold text-gray-2 text-xs">
                  Tongseng Sapi Gurih
                </li>
                <li className="p-[10px] font-semibold text-gray-2 text-xs">
                  Nasi Gudeg Telur Ceker
                </li>
                <li className="p-[10px] font-semibold text-gray-2 text-xs">
                  Nasi Ayam serundeng
                </li>
                <li className="p-[10px] font-semibold text-gray-2 text-xs">
                  Nasi Goreng Seafood
                </li>
              </ol>
            </div>

            <ChartLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
