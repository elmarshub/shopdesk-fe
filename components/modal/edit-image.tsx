"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import DeleteImage from "./delete-image";

interface EditImageProps {
  images: { id: string; src: string }[]; // List of saved images
  onDeleteImage: (imageId: string) => void; // Callback to delete an image
  onClose: () => void; // Callback to close the edit modal
  isOpen: boolean; // Controls edit modal visibility
}

export default function EditImage({
  images,
  onDeleteImage,
  onClose,
  isOpen,
}: EditImageProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState<{ id: string; src: string } | null>(null);

  const handleDeleteClick = (image: { id: string; src: string }) => {
    setImageToDelete(image); // Set the image to delete
    setIsDeleteModalOpen(true); // Open the delete modal
  };

  const handleDeleteConfirm = () => {
    if (imageToDelete) {
      onDeleteImage(imageToDelete.id); // Notify parent to delete the image
      setIsDeleteModalOpen(false); // Close the delete modal
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false); // Close the delete modal
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

      {/* Edit Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg max-w-3xl w-full p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Edit Images</h2>
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <div key={image.id} className="relative">
                <Image
                  src={image.src}
                  alt="Preview"
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
                {/* Remove Icon */}
                <button
                  onClick={() => handleDeleteClick(image)}
                  className="absolute top-2 right-2 bg-white p-1 rounded-full text-red-500 hover:text-red-600"
                >
                  <FaTimes size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Delete Image Modal */}
      {imageToDelete && (
        <DeleteImage
          image={imageToDelete}
          isOpen={isDeleteModalOpen}
          onDelete={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
        />
      )}
    </>
  );
}