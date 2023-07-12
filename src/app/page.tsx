"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Transações com Redux</h1>

      <ConnectButton />
      <TransactionForm />
      <TransactionList />
    </main>
  );
}
