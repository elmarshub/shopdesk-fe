"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

interface StockItem {
  id: number;
  name: string;
  buying_price?: string;
  remaining: number;
  photos?: string;
}

interface RecordSalesModalProps {
  isOpen: boolean;
  onClose: () => void;
  stockItems: StockItem[];
}

const getRandomColor = () => {
  const colors = [
    "#FCE4EC", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9", "#BBDEFB",
    "#B3E5FC", "#B2EBF2", "#B2DFDB", "#C8E6C9", "#DCEDC8", "#F0F4C3",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomTextColor = (bgColor: string) => {
  const textColors = ["#FF5733", "#009A49", "#FFCC00", "#003366", "#800080"];
  let selectedColor;
  do {
    selectedColor = textColors[Math.floor(Math.random() * textColors.length)];
  } while (selectedColor === bgColor);
  return selectedColor;
};

const SalesModal: React.FC<RecordSalesModalProps> = ({ isOpen, onClose, stockItems }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [searchText, setSearchText] = useState<string>("");

  const { cardColors, textColors } = useMemo(() => {
    const newCardColors: { [key: number]: string } = {};
    const newTextColors: { [key: number]: string } = {};

    stockItems.forEach((item) => {
      const bgColor = getRandomColor();
      newCardColors[item.id] = bgColor;
      newTextColors[item.id] = getRandomTextColor(bgColor);
    });

    return { cardColors: newCardColors, textColors: newTextColors };
  }, [stockItems]);

  const filteredItems = useMemo(() => {
    if (!searchText) return stockItems;
    return stockItems.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [stockItems, searchText]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#24242433] bg-opacity-80 flex items-center justify-center z-50">
      <div
        className="bg-white rounded-lg shadow-lg flex overflow-hidden relative"
        style={{ maxWidth: "80%", maxHeight: "80%", width: "1228px", height: "824px" }}
      >
        <div className="flex flex-col bg-white p-6 gap-7 flex-grow w-1/2">
          <div className="flex items-center gap-4 w-full">
            <div className="bg-[#CCEBDB] p-4 rounded-lg flex items-center justify-center">
              <Image src="/modal-images/ui-check.svg" alt="Check Logo" width={24} height={24} />
            </div>
            <div className="flex-grow">
              <h1 className="font-medium text-2xl">Make a Sale</h1>
              <p className="font-normal text-sm text-gray-500">
                Select from your stock to make sales easily.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-[563px]">
            <input
              type="text"
              placeholder="Search items by name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-[100%] max-w-[(557px] h-12 rounded-lg pl-10 pr-4 border border-gray-300 
              focus:ring-2 focus:ring-[#CCEBDB] focus:border-transparent
              transition-all placeholder:text-gray-400 text-gray-800"
            />
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          </div>

          <div className="flex-1 w-full overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid grid-cols-2 gap-5">
              {filteredItems.slice(0, 6).map((item, index) => {
                const isActive = activeItem === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`relative flex flex-col items-center justify-center h-[270px] rounded-md border cursor-pointer font-circular-std font-medium text-lg leading-7 tracking-normal
                      transition-all duration-200 overflow-hidden ${isActive ? 'border-2 ' : 'border-gray-300'}`}
                    style={{
                      backgroundColor: isActive ? "#FFFFFF" : cardColors[item.id],
                      boxShadow: "0px 4px 4px 0px rgba(211, 211, 211, 0.33)",
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 flex items-center justify-between p-[12px] border-b"
                      style={{
                        width: "271px",
                        height: "52px",
                        justifyContent: "space-between",
                        padding: "12px",
                        borderBottomWidth: "1px",
                        backgroundColor: isActive ? "#f6f8fa" : cardColors[item.id],
                        color: isActive ? "#a0a0a0" : textColors[item.id],
                        borderColor: isActive ? "#D0D0D0" : "#ffffff",
                      }}
                    >
                      <span className="text-sm font-medium">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-sm font-medium">{`${item.remaining} left`}</span>
                    </div>


                    <div className="flex flex-col items-center justify-center h-full text-center px-4">
                      <p className="text-3xl font-medium mb-2">{item.name}</p>
                      <p className="text-3xl font-normal">{item.buying_price ? `$${item.buying_price}` : "N/A"}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 space-y-2">
              {filteredItems.slice(6).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`flex items-center justify-between py-2 rounded-md cursor-pointer
                    ${activeItem === item.id ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded border text-center flex items-center justify-center bg-gray-50">
                      {item.photos ? (
                        <div className="max-w-full max-h-full">
                          <Image
                            src={item.photos}
                            alt={item.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                      ) : (
                        <span className="text-gray-300 text-xs">No img</span>
                      )}
                    </div>
                    <span className="font-sans text-xl font-medium leading-[30px] 
                     text-[#2A2A2A] tracking-normal">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[#2A2A2A] text-lg font-medium leading-7 tracking-normal">${item.buying_price || "N/A"}</span>
                    <span className="text-[#E9EEF3]">|</span>
                    <span className="font-sans text-[#2A2A2A] px-2 text-lg font-medium leading-7 tracking-normal">{item.remaining} left</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex flex-col bg-gray-50 p-6 gap-5 w-[578px]">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesModal;