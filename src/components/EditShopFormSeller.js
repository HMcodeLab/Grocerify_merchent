import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditShopFormSeller = ({ onClose }) => {
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to handle form submission (update seller profile)

    // Assuming you have an updateProfile function to handle the update
    try {
      // Call the function to update the profile
      // await updateProfile(formData); // Replace with your actual logic
      console.log("Profile updated successfully!");
      // Close the form after successful update
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div
      className={`flex flex-col gap-8 pl-10 pr-10 pt-10 pb-10 ${
        isHovered ? "overflow-auto" : "overflow-hidden"
      }`}
      style={{ maxHeight: "600px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-row gap-4 text-2xl font-Gorditas items-center text-[#333333]">
        {" "}
        <Link to="/sellersettingsshop" className="text-3xl" onClick={onClose}>
          {" "}
          {" < "}{" "}
        </Link>
        EDIT DETAILS
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-10 pl-10 pr-10"
      >
        <div className="flex flex-row justify-between gap-20">
          {/* edit data */}

        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-500 hover:bg-[#58B310] text-white p-2 rounded-md cursor-pointer w-[200px]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditShopFormSeller