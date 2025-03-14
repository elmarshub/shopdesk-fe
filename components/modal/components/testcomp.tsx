"use client";

import { useState } from "react";
import EditImage from "./../edit-image";
import { FaEdit } from "react-icons/fa";

export default function TestParentComponent() {
  // Pre-populated list of images
  const [images, setImages] = useState([
    { id: "1", src: "/blog-images/thumbnail-1.png" },
    { id: "2", src: "/blog-images/thumbnail-2.png" },
    { id: "3", src: "/blog-images/thumbnail-3.png" },
  ]);

  // State to control the edit modal visibility
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Function to handle image deletion
  const handleDeleteImage = (imageId: string) => {
    setImages((prevImages) => prevImages.filter((img) => img.id !== imageId));
    console.log("Image deleted:", imageId);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Test Image List</h1>

      {/* Display the list of images */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.src}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-center mt-2">Image {image.id}</p>
          </div>
        ))}
      </div>

      {/* Edit Button */}
      <button
        onClick={() => setIsEditModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
      >
        <FaEdit />
        Edit Images
      </button>

      {/* Edit Image Modal */}
      <EditImage
        images={images}
        onDeleteImage={handleDeleteImage}
        onClose={() => setIsEditModalOpen(false)}
        isOpen={isEditModalOpen}
      />
    </div>
  );
}