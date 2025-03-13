import { StockItem } from "@/app/(dashboard)/dashboard/page";
import { X } from "lucide-react";
import React, { useState } from "react";
import EditItemModal from "@/components/modal/edit-stock";
import { Button } from "@/components/ui/button";
/* import Image from "next/image"; */


interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: StockItem | null;
  onSave: (updatedItem: StockItem) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, selectedItem, onSave }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  if (!isOpen || !selectedItem) return null;

  const openEditModal = () => setEditModalOpen(true);
  const closeEditModal = () => setEditModalOpen(false);


  return (
    <>
      <div className="fixed inset-0 md:relative  w-full max-w-[356px] bg-white transition-transform duration-300 ease-in-out transform translate-x-0 z-50 flex flex-col flex-grow  items-start rounded-xl border border-[#DEE5ED]">
        <div className="flex py-5.5 px-4 items-center justify-between border-b border-b-[#DEE5ED] w-full">
          <p className="font-circular-medium text-2xl leading-9">
            {selectedItem.name}
          </p>
          <button onClick={onClose} className="p-2 bg-neutral-200 rounded-md">
            <X />
          </button>
        </div>

        <div className="flex flex-col py-5 px-4 items-start gap-5 w-full">
          {/* Price */}
          <div className="flex p-3 items-start gap-5 rounded-md border border-[#E9EEF3] bg-[#F8FAFB] w-full">
            <div className="flex flex-col gap-1 w-2/3">
              <p className="text-[#717171] text-lg font-circular-normal leading-7">
                Price
              </p>
              <p className="text-[#2A2A2A] text-xl leading-7.5 font-circular-normal">
                {selectedItem.currency_code} {selectedItem.buying_price}
              </p>
            </div>
            <p
              className="text-black md:text-[#009A49] font-circular-normal text-base leading-6 cursor-pointer md:w-1/3 text-right border border-[#A0A0A0] rounded-xl py-3 px-6 md:py-0 md:px-0 md:border-none"
              onClick={openEditModal}
            >
              Edit
            </p>
          </div>

          {/* SKU Code */}
          <div className="flex flex-col items-start p-3 gap-5 rounded-md border border-[#E9EEF3] bg-[#F8FAFB] w-full">
            <p className="font-circular-normal text-lg text-[#717171] leading-7">
              SKU Code
            </p>
            <p className="font-circular-normal text-xl text-[#2A2A2A] leading-7.5 break-words w-full">
              {selectedItem.product_id}
            </p>
          </div>

          {/* Quantity */}
          <div className="flex p-3 items-start gap-5 rounded-md border border-[#E9EEF3] bg-[#F8FAFB] w-full">
            <div className="flex flex-col gap-1 w-2/3">
              <p className="text-[#717171] text-lg font-circular-normal leading-7">
                Quantity
              </p>
              <p className="text-[#2A2A2A] text-xl leading-7.5 font-circular-normal">
                {selectedItem.quantity}
              </p>
            </div>
            <p
              className="text-black md:text-[#009A49] font-circular-normal text-base leading-6 cursor-pointer md:w-1/3 text-right border border-[#A0A0A0] rounded-xl py-3 px-6 md:py-0 md:px-0 md:border-none"
              onClick={openEditModal}
            >
              Edit
            </p>
          </div>
        </div>

        {/* Image */}
        {/* <div className="flex p-3 items-start gap-5 rounded-md border border-[#E9EEF3] bg-[#F8FAFB] w-full">
            <div className="flex flex-col gap-1 w-2/3">
              <p className="text-[#717171] text-lg font-circular-normal leading-7">
                Image
              </p>
              <Image
                src={selectedItem.image}
                width={114}
                height={86}
                alt="Picture of the item"
              />
            </div>
            <p
              className="text-black md:text-[#009A49] font-circular-normal text-base leading-6 cursor-pointer md:w-1/3 text-right border border-[#A0A0A0] rounded-xl py-3 px-6 md:py-0 md:px-0 md:border-none"
              onClick={openEditModal}
            >
              Add
            </p>
          </div>
        </div> */}

        {/* Save & Delete Buttons */}
        {/* <div className=" w-full h-full p-4 flex flex-col md:hidden gap-4">
          <button className="py-2 pr-6 pl-4 bg-[#D0D0D0] text-white rounded-md border border-[#B8B8B8]">
            Save
          </button>
          <button className="py-2 pr-6 pl-4 bg-white text-[#FF000D] rounded-md border border-[#E50000]">
            Delete
          </button>
        </div> */}


        <div className="w-full h-full p-4 flex flex-col md:hidden gap-4">
          {/* Save Button */}
          <Button
            className="bg-[#D0D0D0] text-white border border-[#B8B8B8] py-2 pr-6 pl-4"
            variant="default"
            fullWidth
          >
            Save
          </Button>

          {/* Delete Button */}
          <Button
            className="bg-white text-[#FF000D] border border-[#E50000] py-2 pr-6 pl-4"
            variant="default"
            fullWidth
          >
            Delete
          </Button>
        </div>

      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <EditItemModal
          isOpen={isEditModalOpen}
          item={selectedItem} 
          onClose={closeEditModal}
          onSave={(updatedItem) => {
            onSave(updatedItem);
            closeEditModal();
          }}
          />
      )}
    </>
  );
};

export default Sidebar;
