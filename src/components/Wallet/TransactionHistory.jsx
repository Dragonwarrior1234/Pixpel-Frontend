import React, { useState } from "react";
import TokenButton from "../Button/TokenButton";
import { transactionButtonList, dropdownList } from "./dataList";
import Dropdown from "./Transaction/Dropdown";
import TransactionTable from "./Transaction/TransactionTable";

const TransactionHistory = () => {
  const [buttonSelected, setButtonSelected] = useState(0);
  const handleClick = (idx) => () => {
    setButtonSelected(idx);
  };
  return (
    <div className="flex flex-col">
      <div className="text-3xl mb-6 font-semibold">Transaction History</div>
      <div className="flex gap-5 mb-10">
        {transactionButtonList.map((menu, idx) => {
          return (
            <TokenButton
              key={idx}
              idx={idx}
              title={menu.title}
              selected={buttonSelected === idx}
              handleClick={handleClick(idx)}
            />
          );
        })}
      </div>
      <div className="flex gap-5">
        {dropdownList.map((menu, idx) => {
          return (
            <div className="flex flex-col gap-2" key={idx}>
              <div className="text-gray-400 text-sm">{menu.title}</div>
              <Dropdown
                key={idx}
                initialContent={menu.header}
                contentList={menu.content}
              />
            </div>
          );
        })}
        <div className="flex flex-col gap-2">
          <div className="text-gray-400 text-sm">TxID</div>
          <input
            className="py-3 pl-4 pr-12 text-gray-400 bg-app-black rounded-lg"
            placeholder="Enter TxID"
          ></input>
        </div>
      </div>
      <TransactionTable />
    </div>
  );
};

export default TransactionHistory;
