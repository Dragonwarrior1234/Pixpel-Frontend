import React from "react";

const FiatBanks = () => {
  return (
    <div className="flex justify-between w-full h-max py-8 px-5 bg-app-black rounded-lg items-baseline">
      <div className="flex flex-col">
        <div className="text-3xl mb-8">Deposit payment method</div>
        <div className="text-gray-400 text-sm">This data will be showed to the buyer of the crypto or token you are selling</div>
      </div>
      <div className="bg-app-blue rounded-md px-3 py-2 hover:cursor-pointer active:bg-green-600">Deposit</div>
    </div>
  );
};

export default FiatBanks;
