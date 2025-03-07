"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import Logo from "@/components/functional/logo";

const Page = () => {
  const [stockItems] = useState([]);

  return (
    <main className="px-6 py-4 w-full">
      <div className="space-y-8 w-full">
        <div className="border px-4 py-2 shadow-md rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Logo />
            <small className="text-black hidden lg:block">
              The simplest way to manage your shop!
            </small>
          </div>
          <Image
            src="/icons/menu.svg"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 lg:hidden"
          />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="btn-primary hover:cursor-pointer hidden lg:flex items-center gap-2 text-white">
                <span className="py-2 px-4 rounded-lg bg-white text-black">
                  ES
                </span>
                Emeka & Sons <ChevronDown strokeWidth={1.5} color="white" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Item name</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="space-y-1.5 w-full">
          <div className="flex flex-col lg:flex-row lg:not-first:items-center gap-2 lg:gap-0 lg:justify-between">
            <div className="relative lg:hidden">
              <Search
                color="gray"
                size={18}
                className="absolute left-2 top-2"
              />
              <input
                type="text"
                placeholder="Search by item name"
                className="text-black placeholder:text-gray-400 text-sm rounded-md border outline-none focus:ring-gray-400 focus:border-2 w-80 h-9 indent-8"
              />
            </div>
            <div className="flex items-center gap-2 border shadow-md p-2 rounded-tr-lg rounded-tl-lg">
              Stock
              <Image
                src="/icons/ui-box-2.svg"
                alt=""
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </div>
            <div className="relative hidden lg:block">
              <Search
                color="gray"
                size={18}
                className="absolute left-2 top-2"
              />
              <input
                type="text"
                placeholder="Search by item name"
                className="text-black placeholder:text-gray-400 text-sm rounded-md border outline-none focus:ring-gray-400 focus:border-2 w-80 h-9 indent-8"
              />
            </div>
          </div>
          <div className="border shadow-md rounded-b-lg rounded-bl-lg">
            {stockItems.length === 0 ? (
              <div className="w-full overflow-x-auto">
                <ul className="flex lg:grid lg:grid-cols-6 overflow-x-auto place-items-center place-content-center p-4 w-full">
                  <li className="font-semibold text-black text-sm flex items-center gap-3 hover:cursor-pointer">
                    ITEM NAME
                    <Image
                      src="/icons/CaretDown.svg"
                      alt=""
                      width={12}
                      height={12}
                      className="w-3 h-3"
                    />
                  </li>
                  <li className="font-semibold text-black text-sm flex items-center gap-3 hover:cursor-pointer">
                    SELL PRICE
                    <Image
                      src="/icons/CaretDown.svg"
                      alt=""
                      width={12}
                      height={12}
                      className="w-3 h-3"
                    />
                  </li>
                  <li className="font-semibold text-black text-sm flex items-center gap-3 hover:cursor-pointer">
                    AVAILABLE
                    <Image
                      src="/icons/CaretDown.svg"
                      alt=""
                      width={12}
                      height={12}
                      className="w-3 h-3"
                    />
                  </li>
                  <li className="font-semibold text-black text-sm flex items-center justify-center hover:cursor-pointer">
                    <span className="bg-[#F6F8FA] p-4 rounded-lg">
                      SHOW PROFIT
                    </span>
                  </li>
                  <li className="font-semibold text-black text-sm flex items-center justify-center hover:cursor-pointer">
                    <span className="bg-[#F6F8FA] p-4 rounded-lg">
                      SHOW SALES
                    </span>
                  </li>
                  <li className="font-semibold text-black text-xl flex items-center justify-center hover:cursor-pointer">
                    +
                  </li>
                </ul>
                <span className="w-full h-px bg-[#DEDEDE] block"></span>
                <div className="relative h-[80vh] w-full">
                  <div className="absolute space-y-4 right-0 left-0 top-28 w-56 mx-auto text-center">
                    <Image
                      src="/icons/empty-note-pad.svg"
                      alt=""
                      width={56}
                      height={56}
                      className="mx-auto"
                    />
                    <p className="text-[#888888] text-sm">
                      You have 0 items in stock
                    </p>
                    <button className="btn-outline hover:cursor-pointer">
                      + Add New Stock
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Table>
                <TableHeader className="w-full overflow-x-auto">
                  <TableRow className="flex lg:grid lg:grid-cols-6 overflow-x-auto place-items-center place-content-center py-4 w-full">
                    <TableHead className="font-semibold text-black px-4 flex items-center gap-3">
                      ITEM NAME
                      <Image
                        src="/icons/CaretDown.svg"
                        alt=""
                        width={12}
                        height={12}
                        className="w-3 h-3"
                      />
                    </TableHead>
                    <TableHead className="font-semibold text-black px-4 flex items-center gap-3">
                      SELL PRICE
                      <Image
                        src="/icons/CaretDown.svg"
                        alt=""
                        width={12}
                        height={12}
                        className="w-3 h-3"
                      />
                    </TableHead>
                    <TableHead className="font-semibold text-black px-4 flex items-center gap-3">
                      AVAILABLE
                      <Image
                        src="/icons/CaretDown.svg"
                        alt=""
                        width={12}
                        height={12}
                        className="w-3 h-3"
                      />
                    </TableHead>
                    <TableHead className="font-semibold text-black px-4 flex items-center justify-center">
                      <span className="bg-[#F6F8FA] p-4 rounded-lg">
                        SHOW SALES
                      </span>
                    </TableHead>
                    <TableHead className="font-semibold text-black px-4 flex items-center justify-center">
                      <span className="bg-[#F6F8FA] p-4 rounded-lg">
                        SHOW PROFIT
                      </span>
                    </TableHead>
                    <TableHead className="font-semibold text-black text-xl px-4 flex items-center justify-center">
                      +
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="relative h-[80vh] w-full">
                  <TableRow></TableRow>
                </TableBody>
              </Table>
            )}
          </div>
        </div>
      </div>
      <p className="text-center mt-4">
        © {new Date().getFullYear()}, Powered by Timbu Business
      </p>
    </main>
  );
};

export default Page;
