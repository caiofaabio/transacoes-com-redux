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
      <ul>
        <li>
          <q> Crie um site que permita adicionar transações</q>
        </li>
        <li>
          <q>Exemplo você tem 3 inputs</q>
        </li>
        <li>
          <q>Hash da transação, endereço que enviou endereço que recebeu</q>
        </li>
        <li>
          <q>E exibi isso na tela, usa o redux</q>
        </li>
      </ul>
      <ConnectButton />
      <TransactionForm />
      <TransactionList />
    </main>
  );
}
