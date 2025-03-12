"use client";
import LoadingAnimation from "@/components/functional/loading";
import Logo from "@/components/functional/logo";
import PaginationFeature from "@/components/functional/paginationfeature";
import { default as AddItemModal } from "@/components/modal/add-item";
import DeleteItem from "@/components/modal/delete-item";
import EditItemModal from "@/components/modal/edit-stock";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import box from "@/public/icons/box.svg";
import { deleteStock, GetStock } from "@/services/stock";
import { ChevronDown, MoreVertical, Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useTableAreaHeight from "./hooks/useTableAreaHeight";

const Page = () => {
  type StockItem = {
    id: string;
    name: string;
    buying_price: number;
    quantity: number;
    currency_code: string;
    buying_date?: string;
    product_id?: string;
    status?: string;
    user_id?: string;
    date_created?: string;
    original_quantity?: number;
    supplier?: null | any;
    timeslots?: any[];
  };

  const { tableAreaRef, tableAreaHeight } = useTableAreaHeight();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [isOpen, setIsOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  const [selectedItem, setSelectedItem] = useState<StockItem | null>(null);
  const [user, setUser] = useState<any>(null);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [stockItems, setStockItems] = useState<StockItem[]>([]);
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const searchedItems = stockItems.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Calculate pagination values
  const totalItems = stockItems.length;
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  // Ensure current page is valid when total pages changes
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  // Calculate which items to display based on current page and items per page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const displayedItems = stockItems.slice(
    startIndex,
    Math.min(startIndex + rowsPerPage, totalItems)
  );

  // Calculate how many empty rows to add to maintain consistent table height
  const emptyRowsCount = Math.max(0, rowsPerPage - displayedItems.length);

  useEffect(() => {
    setIsLoading(true);
    GetStock()
      .then((data) => {
        setStockItems(data.items);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching stock:", error);
        setIsLoading(false);
      });
  }, [router]);

  const handleEditClick = (item: StockItem) => {
    setSelectedItem(item); // Set the selected item
    setOpenEdit(true); // Open the edit modal
  };

  const handleSaveEdit = (updatedItem: StockItem) => {
    setStockItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );

    setOpenEdit(false); // Close the edit modal
  };

  const handleDeleteClick = (item: StockItem) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const closeEditModal = () => {
    setOpenEdit(false);
    setSelectedItem(null);
  };

  const closeAddModal = () => {
    setOpenAdd(false);
    setSelectedItem(null);
  };

  const handleDeleteItem = async (itemId: string) => {
    try {
      await deleteStock(itemId);
      setIsDeleteModalOpen(false);
      setStockItems((prev) => prev.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting stock:", error);
    }
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle items per page change
  const handleItemsPerPageChange = (count: number) => {
    setRowsPerPage(count);
    setCurrentPage(1);
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingAnimation />
      </div>
    );
  }

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
          selectedItem={selectedItem || undefined}
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
          <div className="">
            <DropdownMenu modal>
              <DropdownMenuTrigger
                disabled
                className="btn-primary hover:cursor-pointer hidden lg:flex items-center gap-2 text-white"
              >
                <span className="py-2 px-4 rounded-lg bg-white text-black">
                  SL
                </span>
                Sodiq LTD
                <ChevronDown strokeWidth={1.5} color="white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  className="w-full px-[5rem] hidden"
                  onClick={() => setIsLogoutModalOpen(true)}
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="space-y-0 w-full ">
          <div className="w-full flex justify-between max-[800px]:flex-col-reverse">
            <div className="flex items-center justify-center gap-2 border border-b-white py-2 rounded-tr-lg rounded-tl-lg w-44 max-[800px]:w-full font-semibold px-9 shadow-inner">
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
              <div className="mb-2 max-[800px]:mb-4 z-50 max-[640px]:self-end flex items-center gap-2 justify-center max-[1000px]:flex-row-reverse max-[800px]:w-full">
                <button
                  onClick={openModal}
                  className="btn-primary max-[400px]:text-sm text-nowrap max-[1000px]:hidden"
                >
                  + Add New
                </button>
                <button
                  onClick={openModal}
                  className="btn-primary max-[400px]:text-sm text-nowrap min-[1000px]:hidden"
                >
                  +
                </button>

                <div className="relative max-[800px]:w-full">
                  <input
                    type="text"
                    className="h-12 border w-[327px] max-[800px]:w-full rounded-md focus:outline-2 focus:outline-[#009A49] px-10"
                    onChange={(event) => {
                      setIsSearching(true);
                      setSearchText(event.target.value);
                      if (!event.target.value) {
                        setIsSearching(false);
                      }
                    }}
                  />

                  <Search className="text-[#667085] absolute top-3 left-3 " />
                </div>

                <AddItemModal
                  isOpen={isOpen}
                  onClose={closeModal}
                  onSave={(newItem) => {
                    setStockItems((prev) => [newItem, ...prev]); // Inserts new items at the top

                    closeModal();
                  }}
                />
              </div>
            )}
          </div>
          <div className="border shadow-md rounded-b-lg rounded-bl-lg relative rounded-tr-lg flex-1">
            {stockItems.length === 0 ||
            (isSearching && searchedItems.length === 0) ? (
              <div className="relative">
                <Table>
                  <TableHeader>
                    <TableRow className="h-[50px]">
                      <TableHead className="px-4 py-2 w-2/7 max-[400px]:w-1/3 max-[400px]:px-1 text-left border-b border-r">
                        ITEM NAME
                      </TableHead>
                      <TableHead className="px-4 py-2 w-1/7 max-[400px]:w-1/3 max-[400px]:px-1 text-center border-b border-r">
                        SKU CODE
                      </TableHead>
                      <TableHead className="px-4 py-2 w-1/7 max-[400px]:w-1/3 max-[400px]:px-1 text-center border-b border-r">
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
                </Table>
                <div className="w-full overflow-x-auto">
                  <span className="w-full h-px bg-[#DEDEDE] block"></span>
                  <div className="relative h-[80vh] w-full">
                    {!(isSearching && searchedItems.length === 0) ? (
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
                          type="button"
                          onClick={openModal}
                          className="btn-outline hover:cursor-pointer"
                        >
                          + Add New Stock
                        </button>
                        <AddItemModal
                          isOpen={isOpen}
                          onClose={closeModal}
                          onSave={(newItem) => {
                            setStockItems((prev) => [newItem, ...prev]);
                            closeModal();
                          }}
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-[#F8FAFB] border border-[#DEDEDE] w-[563px] h-[200px] rounded-lg flex flex-col items-center justify-center gap-3 max-[800px]:w-[343px] max-[800px]:h-[334px]">
                          <Image
                            src={box}
                            alt=""
                            width={56}
                            height={56}
                            className="size-8"
                          />

                          <p className="text-[#2A2A2A] text-sm">
                            Search Item not found.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Table className="border-collapse overflow-y-auto">
                <TableHeader>
                  <TableRow className="h-[50px]">
                    <TableHead className="px-4 py-2 w-2/7 max-[400px]:w-1/3 max-[400px]:px-2 text-left border-b border-r">
                      ITEM NAME
                    </TableHead>
                    <TableHead className="px-4 py-2 w-1/7 max-[400px]:w-1/3 max-[400px]:px-2 text-center border-b border-r">
                      SKU CODE
                    </TableHead>
                    <TableHead className="px-4 py-2 w-1/7 max-[400px]:w-1/3 max-[400px]:px-2 text-center border-b border-r">
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
                  {displayedItems.map((_, index) => {
                    const item = !isSearching
                      ? displayedItems[index] || null
                      : searchedItems[index] || null;
                    return (
                      <TableRow
                        key={item ? item.id : index}
                        className="h-[50px]"
                      >
                        <TableCell className="px-4 py-3 max-[400px]:w-1/3 max-[400px]:px-2 text-left border-r text-wrap break-words whitespace-normal">
                          {item ? item.name : ""}
                        </TableCell>
                        <TableCell className="px-4 py-3 max-[400px]:w-1/3 max-[400px]:px-2 text-center border-r">
                          {item ? item.id.slice(0, 8).toUpperCase() : ""}
                        </TableCell>
                        <TableCell className="px-4 py-3 max-[400px]:w-1/3 max-[400px]:px-2 text-center border-r text-wrap break-words whitespace-normal">
                          {item
                            ? `${
                                item.currency_code
                              } ${item.buying_price?.toLocaleString()}`
                            : ""}
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
                  {/* Add empty rows to maintain table height if needed */}
                  {emptyRowsCount > 0 &&
                    Array.from({ length: emptyRowsCount }).map((_, index) => (
                      <TableRow key={`empty-${index}`} className="h-[50px]">
                        <TableCell className="px-4 py-3 text-left border-r"></TableCell>
                        <TableCell className="px-4 py-3 text-center border-r"></TableCell>
                        <TableCell className="px-4 py-3 text-center border-r"></TableCell>
                        <TableCell className="px-4 py-3 text-center border-r hidden sm:table-cell"></TableCell>
                        <TableCell className="px-4 py-3 text-center hidden sm:table-cell"></TableCell>
                      </TableRow>
                    ))}
                  <TableCell colSpan={5}>
                    <PaginationFeature
                      totalItems={totalItems}
                      currentPage={currentPage}
                      itemsPerPage={rowsPerPage}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                      onItemsPerPageChange={handleItemsPerPageChange}
                    />
                  </TableCell>
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

      <div className="flex flex-col gap-2 mt-4">
        <p className="text-center mt-4">
          © {new Date().getFullYear()}, Powered by Timbu Business
        </p>
      </div>
    </main>
  );
};

export default Page;
