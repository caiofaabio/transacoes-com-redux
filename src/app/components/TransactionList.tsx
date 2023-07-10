import React from "react";
import { useSelector } from "react-redux";

const TransactionList: React.FC = () => {
  const transactions = useSelector((state: any) => state.transactions);

  return (
    <ul>
      {transactions.map((transaction: any, index: number) => (
        <li key={index}>
          <div>Transaction Hash: {Math.random() * 50}</div>
          <div>Sender: {transaction.sender}</div>
          <div>Receiver: {transaction.receiver}</div>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
