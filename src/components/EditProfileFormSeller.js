import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/editprofileseller.css";

const EditProfileFormSeller = ({ onClose }) => {
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
        <Link to="/sellerprofile" className="text-3xl" onClick={onClose}>
          {" "}
          {" < "}{" "}
        </Link>
        EDIT PROFILE
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-10 pl-10 pr-10"
      >
        <div className="flex flex-row justify-between gap-20">
          {/* edit data */}
          <div className="flex flex-col space-y-4 w-1/2">
            <div className="flex flex-col">
              <label htmlFor="ownerName" className="text-[#979797] text-[18px]">
                Owner Name
              </label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                // Add value and onChange for controlled input
                className="border border-gray-300 p-1 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="text-[#979797] text-[18px]"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                // Add value and onChange for controlled input
                className="border border-gray-300 p-1 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="emailAddress"
                className="text-[#979797] text-[18px]"
              >
                E-Mail Address
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                // Add value and onChange for controlled input
                className="border border-gray-300 p-1 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="emailAddress"
                className="text-[#979797] text-[18px]"
              >
                Birth Date
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                // Add value and onChange for controlled input
                className="border border-gray-300 p-1 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="emailAddress"
                className="text-[#979797] text-[18px]"
              >
                Address
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                // Add value and onChange for controlled input
                className="border border-gray-300 p-1 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="emailAddress"
                className="text-[#979797] text-[18px]"
              >
                Adhar Number
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                // Add value and onChange for controlled input
                className="border border-gray-300 p-1 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="emailAddress"
                className="text-[#979797] text-[18px]"
              >
                PAN Card
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                // Add value and onChange for controlled input
                className="border border-gray-300 p-1 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="emailAddress"
                className="text-[#979797] text-[18px]"
              >
                Store Name
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                // Add value and onChange for controlled input
                className="border border-gray-300 p-1 rounded-md"
              />
            </div>
          </div>

          {/* edit image */}
          <div className="pt- relative">
            <img src="../assests/images/sellerpic.png" className="" />
            <div className="bg-white w-[60px] h-[60px] absolute top-36 right-6 rounded-full shadow-md cursor-pointer">
              <img
                src="../assests/icons/camera.svg"
                className="absolute top-4 left-4 w-auto h-auto"
              />
            </div>
          </div>
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
  );
};

export default EditProfileFormSeller;
