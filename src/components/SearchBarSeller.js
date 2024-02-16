import React from 'react'

const SearchBarSeller = () => {
  return (
    <div className="flex flex-row justify-between">
          <div className="relative font-Montserrat w-2/5 p-1 flex items-center justify-center">
            <input
              placeholder="Search"
              className="bg-[#D9D9D94D] rounded-xl pl-8 pt-[1px] pb-[1px] w-full flex items-center"
            />
            <img
              src="../assests/icons/search.svg"
              className="absolute top-[9px] left-3 w-[16px] h-auto"
            />
          </div>
          <div className="flex flex-row w-[150px] justify-around ">
            <div className="bg-[#58B310] rounded-full w-[35px] h-auto flex items-center justify-center">
              <img src="../assests/icons/notification.svg" className="w-2/3 h-auto" />
            </div>
            <div className="bg-[#58B310] rounded-full w-[35px] h-auto flex items-center justify-center">
              <img src="../assests/icons/user.svg" className="w-3/5 h-auto" />
            </div>
          </div>
        </div>
  )
}

export default SearchBarSeller