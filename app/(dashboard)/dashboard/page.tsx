"use client";
<<<<<<< HEAD
=======
import ShopDeskModal from '@/components/modal/add-item'
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
>>>>>>> upstream/main

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogClose,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import add from "../../../public/icons/add.svg";
import close from "../../../public/icons/close.svg";
import notepad from "../../../public/icons/note-pad.svg";
import stock from "../../../public/icons/stock.svg";

import Logo from "@/components/functional/logo";
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [stockItems] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <main className="px-6 py-4 w-full">
      <div className="space-y-8 w-full">
        <div className="border px-4 py-2 shadow-md rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex justify-center lg:block">
              <Logo />
            </div>
            <small className="text-black hidden lg:block">
              The simplest way to manage your shop!
            </small>
          </div>
          <div className="hidden lg:block">
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
        </div>
        <div className="space-y-1.5 w-full">
<<<<<<< HEAD
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
                src={stock}
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
=======
          <div className="flex items-center gap-2 border shadow-md p-2 rounded-tr-lg rounded-tl-lg">
            Stock
            <Image
              src="/icons/ui-box-2.svg"
              alt=""
              width={20}
              height={20}
              className="w-full lg:w-5 h-5"
            />
>>>>>>> upstream/main
          </div>
          <div className="border shadow-md rounded-b-lg rounded-bl-lg relative">
            {stockItems.length === 0 ? (
              <div className="w-full overflow-x-auto">
                <ul className="flex lg:grid lg:grid-cols-6 overflow-x-auto place-items-center place-content-center p-4 w-full">
                  <li className="font-semibold text-black text-sm flex items-center gap-3 hover:cursor-pointer">
                    ITEM NAME
                  </li>
                  <li className="font-semibold text-black text-sm flex items-center gap-3 hover:cursor-pointer">
                    SKU PRICE
                  </li>
                  <li className="font-semibold text-black text-sm flex items-center gap-3 hover:cursor-pointer">
                    PRICE
                  </li>
                  <li className="font-semibold text-black text-sm flex items-center justify-center hover:cursor-pointer">
                    QUANTITY
                  </li>
                  <li className="font-semibold text-black text-sm flex items-center justify-center hover:cursor-pointer">
                    ACTION
                  </li>
                  <li className="font-semibold text-black text-xl flex items-center justify-center hover:cursor-pointer">
                    +
                  </li>
                </ul>
                <span className="w-full h-px bg-[#DEDEDE] block"></span>
<<<<<<< HEAD
                <Dialog>
                  <div className="h-[80vh] w-full flex items-center justify-center">
                    <div className="space-y-4 flex flex-col text-center justify-center">
                      <Image
                        src={notepad}
                        alt=""
                        width={56}
                        height={56}
                        className="mx-auto"
                      />
                      <p className="text-[#888888] text-sm">
                        You have 0 items in stock
                      </p>
                      <DialogTrigger asChild>
                        <button className="btn-outline hover:cursor-pointer rounded border-neutral-300 flex gap-2">
                          <span>
                            <Image src={add} alt="" width={24} height={24} />
                          </span>{" "}
                          Add New Stock
                        </button>
                      </DialogTrigger>
                    </div>
=======
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
                    <button onClick={openModal} className="btn-outline hover:cursor-pointer">
                      + Add New Stock
                    </button>
                    <ShopDeskModal isOpen={isOpen} onClose={closeModal} />
>>>>>>> upstream/main
                  </div>

                  <DialogContent>
                    <DialogOverlay className="fixed inset-0 data-[state=open]:animate-overlayShow bg-black/30 -z-[50]" />
                    <DialogContent className="fixed left-1/2 top-1/2 max-h-[85vh] w-[720px]  -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow ">
                      <DialogTitle>
                        <div className=" bg-green-400 flex justify-between p-6 ">
                          <div className="flex items-center gap-4 ">
                            <Image src={stock} alt="" width={24} height={24} />
                            <div>
                              <p>Add New Stock</p>
                              <p>Always know the items you have available.</p>
                            </div>
                          </div>
                          <Image src={close} alt="" width={16} height={16} />
                        </div>
                      </DialogTitle>
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                      >
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium"
                          >
                            Email address{" "}
                            <span className="text-[#FF1925]">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full p-3 border rounded-[9px] focus:ring-2 focus:ring-[#CCEBDB] focus:border-[#009A49] outline-none text-[#2A2A2A] "
                            placeholder="johnwick@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium"
                          >
                            Your password{" "}
                            <span className="text-[#FF1925]">*</span>
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="w-full p-3 border rounded-[9px] focus:ring-2 focus:ring-[#CCEBDB] focus:border-[#009A49] outline-none text-[#2A2A2A]"
                            placeholder="*************"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-[#2A2A2A] text-white p-3 rounded-lg font-medium hover:bg-black transition duration-200"
                        >
                          Sign in
                        </button>
                      </form>
                      <div className="mt-[25px] flex justify-end">
                        <DialogClose asChild>
                          <button className="inline-flex h-[35px] items-center justify-center rounded bg-green4 px-[15px] font-medium leading-none text-green11 outline-none outline-offset-1 hover:bg-green5 focus-visible:outline-2 focus-visible:outline-green6 select-none">
                            Save changes
                          </button>
                        </DialogClose>
                      </div>
                      <DialogClose asChild>
                        <button
                          className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
                          aria-label="Close"
                        ></button>
                      </DialogClose>
                    </DialogContent>
                  </DialogContent>
                </Dialog>
              </div>
            ) : (
              <Table>
                <TableHeader className="w-full overflow-x-auto">
                  <TableRow className="flex lg:grid lg:grid-cols-6 overflow-x-auto place-items-center place-content-center py-4 w-full">
                    <TableHead className="font-semibold text-black px-4 flex items-center gap-3">
                      ITEM NAME
                    </TableHead>
                    <TableHead className="font-semibold text-black px-4 flex items-center gap-3">
                      SKU CODE
                    </TableHead>
                    <TableHead className="font-semibold text-black px-4 flex items-center gap-3">
                      PRICE
                    </TableHead>
                    <TableHead className="font-semibold text-black px-4 flex items-center justify-center">
                      QUANTITY
                    </TableHead>
                    <TableHead className="font-semibold text-black px-4 flex items-center justify-center">
                      ACTION
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
            <div className="bg-[#DEE5ED] p-2 absolute bottom-0 flex items-center gap-2">
              <p className="text-gray-400 text-sm">
                You have <span className="text-black">0</span> stock (Displaying{" "}
                <span className="text-black">6</span>{" "}
                <Image
                  src="/icons/CaretDown.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="w-3 h-3"
                />{" "}
                per page)
              </p>
            </div>
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
