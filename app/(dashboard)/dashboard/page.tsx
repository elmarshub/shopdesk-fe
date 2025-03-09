"use client";
<<<<<<< HEAD
import ShopDeskModal from '@/components/modal/add-item';

=======
import ShopDeskModal from "@/components/modal/add-item";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import EditItemModal from "@/components/modal/edit-stock";
import AddItemModal from "@/components/modal/add-item";
import DeleteItem from "@/components/modal/delete-item";
>>>>>>> upstream/main
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
<<<<<<< HEAD
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
  DialogOverlay
} from "@/components/ui/dialog";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import close from "../../../public/icons/close.svg";
import stock from "../../../public/icons/stock.svg";

import Logo from "@/components/functional/logo";
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
=======
import LogoutConfirmModal from "@/components/modal/logoutConfirmationModal";
import Image from "next/image";
import Logo from "@/components/functional/logo";
import LoadingAnimation from "@/components/functional/loading";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import useTableAreaHeight from "./hooks/useTableAreaHeight";
>>>>>>> upstream/main

const Page = () => {
  type StockItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };

  const { tableAreaRef, tableAreaHeight } = useTableAreaHeight();
  const rowsPerPage = Math.round(tableAreaHeight / 55) - 3;

  const [isOpen, setIsOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  const [selectedItem, setSelectedItem] = useState<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  } | null>(null);
  const [user, setUser] = useState<any>(null);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [stockItems, setStockItems] = useState<StockItem[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("refresh_token");
    if (!token) {
      router.replace("/sign-in");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const handleEditClick = (item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }) => {
    setSelectedItem(item); // Set the selected item
    setOpenEdit(true); // Open the edit modal
  };

  const handleSaveEdit = (updatedItem: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }) => {
    setStockItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );

    setOpenEdit(false); // Close the edit modal
  };

  const handleAddClick = () => {
    // setSelectedItem(item);
    setOpenAdd(true);
  };

  const handleDeleteClick = (item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }) => {
    setSelectedItem(item);

    setIsDeleteModalOpen(true);
  };

  const closeEditModal = () => {
    setOpenEdit(false);
    //setSelectedItem(null);
  };

  const closeAddModal = () => {
    setOpenAdd(false);
    //setSelectedItem(null);
  };

  const handleDeleteItem = () => {
    setIsDeleteModalOpen(false);
    setStockItems((prev) =>
      prev.filter((item) => item.id !== selectedItem?.id)
    );
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingAnimation />
      </div>
    );
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <main className="px-6 py-4 w-full max-w-7xl mx-auto flex flex-col main-h-svh ">
      <div ref={tableAreaRef} className="space-y-8 w-full h-full ">
        <LogoutConfirmModal
          open={isLogoutModalOpen}
          onOpenChange={setIsLogoutModalOpen}
          onCancel={() => setIsLogoutModalOpen(false)}
        />
        <DeleteItem
          open={isDeleteModalOpen}
          onOpenChange={setIsDeleteModalOpen}
          onCancel={() => setIsDeleteModalOpen(false)}
          onDelete={handleDeleteItem}
        />
        <div className="lg:border px-4 py-2 lg:shadow-md rounded-lg lg:flex items-center justify-between mx-auto">
          <div className="flex items-center gap-6">
            <div className="flex justify-center lg:justify-start w-full lg:w-auto">
              <Logo />
            </div>
            <small className="text-black text-left hidden lg:block">
              The simplest way to manage your shop!
            </small>
          </div>
          <div className="hidden lg:block">
            <DropdownMenu modal>
              <DropdownMenuTrigger className="btn-primary hover:cursor-pointer hidden lg:flex items-center gap-2 text-white">
                <span className="py-2 px-4 rounded-lg bg-white text-black">
                  MM
                </span>
                Mark M <ChevronDown strokeWidth={1.5} color="white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  className="w-full px-[5rem]"
                  onClick={() => setIsLogoutModalOpen(true)}
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="space-y-0 w-full ">
          <div className="w-full flex justify-between max-[640px]:flex-col-reverse">
            <div className="flex items-center justify-center gap-2 border border-b-white py-2 rounded-tr-lg rounded-tl-lg w-44 max-[640px]:w-full font-semibold px-9 shadow-inner">
              Stock
              <Image
                src="/icons/ui-box.svg"
                alt=""
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </div>

            {stockItems.length > 0 && (
              <button
                onClick={handleAddClick}
                className="btn-primary max-[400px]:text-sm mb-2 max-[640px]:mb-4 text-nowrap self-end"
              >
                + Add New Stock
              </button>
            )}
          </div>
          <div className="border shadow-md rounded-b-lg rounded-bl-lg relative rounded-tr-lg flex-1">
            {stockItems.length === 0 ? (
<<<<<<< HEAD
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
             
                <div className="relative h-[80vh] w-full">
                
              <div className="absolute space-y-4 right-0 left-0 top-28 w-56 mx-auto text-center">
                    <Image
                      src="/icons/empty-note-pad.svg"
                      alt=""
                      width={56}
                      height={56}
                      className="mx-auto"
                    />
=======
              <div className="relative">
                <div className="w-full overflow-x-auto">
                  <ul className="flex items-center justify-between w-full rounded-tr-lg">
                    <li className="w-2/3 lg:w-1/2 border-r-2 border-[#DEDEDE] text-left py-4 hover:cursor-pointer pl-4">
                      <span className="font-semibold text-black text-sm ">
                        ITEM NAME
                      </span>
                    </li>
                    <li className="w-1/3 lg:w-1/6 lg:border-r-2 border-[#DEDEDE] text-center py-4 hover:cursor-pointer">
                      <span className="font-semibold text-black text-sm">
                        PRICE
                      </span>
                    </li>
                    <li className="w-1/3 lg:w-1/6 border-r-2 border-[#DEDEDE] text-center py-4 hidden lg:flex justify-center hover:cursor-pointer">
                      <span className="font-semibold text-black text-sm">
                        QUANTITY
                      </span>
                    </li>
                    <li className="w-1/3 lg:w-1/6  border-[#DEDEDE] text-center py-4 hidden lg:flex justify-center hover:cursor-pointer rounded-tr-lg">
                      <span className="font-semibold text-black text-sm">
                        ACTION
                      </span>
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
                      <button
                        onClick={openModal}
                        className="btn-outline hover:cursor-pointer"
                      >
                        + Add New Stock
                      </button>
                      <ShopDeskModal
                        isOpen={isOpen}
                        onClose={closeModal}
                        onSave={(newItem) => {
                          setStockItems((prev) => [...prev, newItem]);

                          closeModal();
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-[#DEE5ED] p-2 absolute bottom-0 w-full lg:hidden">
                  <p className="text-gray-400 text-sm flex items-center gap-1 justify-center text-center">
                    You have <span className="text-black">0</span> stock
                    (Displaying <span className="text-black">6</span>{" "}
<<<<<<< HEAD
                      <Image
                        src="/icons/ArrowDropDown.svg"
                        alt=""
                        width={56}
                        height={56}
                        className="mx-auto"
                      />
                      per page)
                   </p>
>>>>>>> upstream/main
                    <p className="text-[#888888] text-sm">
                      You have 0 items in stock
                    </p>
                    <button onClick={openModal} className="btn-outline hover:cursor-pointer">
                      + Add New Stock
                    </button>
                    <ShopDeskModal isOpen={isOpen} onClose={closeModal} />
                  </div>
                      <Dialog>
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
=======
                    <Image
                      src="/icons/ArrowDropDown.svg"
                      alt=""
                      width={12}
                      height={12}
                      className="w-3 h-3"
                    />{" "}
                    per page)
                  </p>
                </div>
>>>>>>> upstream/main
              </div>
              
            ) : (
              <Table className="border-collapse  overflow-y-auto">
                <TableHeader>
                  <TableRow className="h-[50px]">
                    <TableHead className="px-4 py-2 w-2/7 text-left border-b border-r">
                      ITEM NAME
                    </TableHead>
                    <TableHead className="px-4 py-2 w-1/7 text-center border-b border-r">
                      PRICE
                    </TableHead>
                    <TableHead className="px-4 py-2 w-1/7 text-center border-b border-r hidden sm:table-cell">
                      QUANTITY
                    </TableHead>
                    <TableHead className="px-4 py-2 w-1/7 text-center border-b hidden sm:table-cell">
                      ACTION
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.from({
                    length: Math.max(rowsPerPage, stockItems.length),
                  }).map((_, index) => {
                    const item = stockItems[index] || null;
                    return (
                      <TableRow key={index} className="h-[50px]">
                        <TableCell className="px-4 py-3 text-left border-r">
                          {item ? item.name : ""}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-center border-r">
                          {item ? `$${item.price}` : ""}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-center border-r hidden sm:table-cell">
                          {item ? item.quantity : ""}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-center hidden sm:table-cell">
                          {item ? (
                            <DropdownMenu>
                              <DropdownMenuTrigger>
                                <MoreVertical className="cursor-pointer" />
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem
                                  onClick={() => handleEditClick(item)}
                                >
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => handleDeleteClick(item)}
                                >
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          ) : (
                            ""
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            )}
          </div>
        </div>
      </div>

      <EditItemModal
        isOpen={openEdit}
        onClose={closeEditModal}
        item={selectedItem!}
        onSave={handleSaveEdit}
      />

      <AddItemModal
        isOpen={openAdd}
        onClose={closeAddModal}
        onSave={(newItem) => {
          setStockItems((prev) => [...prev, newItem]);

          closeModal();
        }}
      />

      <p className="text-center mt-4">
        © {new Date().getFullYear()}, Powered by Timbu Business
      </p>
    </main>
  );
};

export default Page;
