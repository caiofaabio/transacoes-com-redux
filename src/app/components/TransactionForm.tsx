"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";
import { useAccount, useWalletClient, useSwitchNetwork } from "wagmi";
import { walletClientToSigner } from "@/utils/ethers";
import { RootState } from "@/Store/store";
import { setTransactions } from "@/Store/transactionsSlice";

const TransactionForm: React.FC = () => {
  const transactionsTab = useSelector((state: RootState) => state.transactions);
  const dispatch = useDispatch();

  const { data: walletClient } = useWalletClient();
  const [hash, setHash] = useState("");
  const [value, setValue] = useState("");
  const [receiver, setReceiver] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (walletClient) {
      const signer = walletClientToSigner(walletClient);
      const txn = await signer.sendTransaction({
        to: receiver,
        value: ethers.parseEther(value),
      });

      dispatch(
        setTransactions({
          txnId: txn.hash,
          to: txn.to!,
          from: txn.from,
          value: Number(ethers.formatEther(txn.value)),
        })
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        // value={}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Value"
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
