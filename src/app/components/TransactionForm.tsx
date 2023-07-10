"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "@/Store/actions";

const TransactionForm: React.FC = () => {
  const [hash, setHash] = useState("");
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const transaction: any = {
      hash,
      sender,
      receiver,
    };

    dispatch(addTransaction(transaction));

    setHash("");
    setSender("");
    setReceiver("");
    console.log(transaction);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <input
        type="text"
        value={hash}
        onChange={(e) => setHash(e.target.value)}
        placeholder="Transaction Hash"
      /> */}
      <input
        type="text"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        placeholder="Sender Address"
      />
      <input
        type="text"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
        placeholder="Receiver Address"
      />

      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
