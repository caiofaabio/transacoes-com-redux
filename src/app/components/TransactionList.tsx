import { RootState } from "@/Store/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const TransactionList: React.FC = () => {
  const transactions = useSelector((state: RootState) => state.transactions);

  return (
    <ul>
      {transactions.loaded ? (
        transactions.items.map(
          (transaction: transactionInfo, index: number) => (
            <li key={index}>
              <div>Transaction Hash: {transaction.txnId}</div>
              <div>Sender: {transaction.from}</div>
              <div>Receiver: {transaction.to}</div>
              <div>Value: {transaction.value}</div>
            </li>
          )
        )
      ) : (
        <p>Oops... Nenhuma transação.</p>
      )}
    </ul>
  );
};

export default TransactionList;
