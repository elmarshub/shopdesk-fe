"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";

interface DeleteImageProps {
  image: { id: string; src: string }; 
  isOpen: boolean; 
  onDelete: () => void; 
  onCancel: () => void; 
}

export default function DeleteImage({
    image,
    isOpen,
    onDelete,
    onCancel,}: DeleteImageProps) {
     if (!isOpen) return null;

  return (
    <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Delete Image</h2>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={onCancel}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Image Preview */}
              <div className="mb-6">
                <Image
                  src={image.src}
                  alt="Image to be deleted"
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* Confirmation Message */}
              <p className="text-gray-600 mb-6">
                Are you sure you want to remove this image?
              </p>

              {/* Footer Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={onCancel}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={onDelete}
                  className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 w-full"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
  );
}