import React from "react";

const DueTableSeller = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row justify-between bg-[#333333] text-[#FFFFFF] font-Montserrat pt-1 pb-1 pl-4">
        <p className="w-2/6">Products</p>
        <p className="w-1/6">Category</p>
        <p className="w-1/6">Price</p>
        <p className="w-1/6">Status</p>
      </div>

      {data.map((item) => (
        <div
          key={item.id}  // Replace 'id' with the actual property that uniquely identifies each item
          className="flex flex-row justify-between text-[#333333] text-[14px] h-[82px] shadow-md pt-4 pb-2 pl-4"
        >
          <div className="w-2/6 font-Gorditas flex flex-row">
            <img src={item.image} alt={item.productName} />
            {item.productName}
          </div>
          <div className="w-1/6 font-Gorditas">{item.category}</div>
          <div className="w-1/6 font-Gorditas">${item.price}</div>
          <div className={`w-1/6 font-Gorditas ${item.status === 'Pending' ? 'text-red-500' : 'text-green-500'}`}>
            {item.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DueTableSeller;
