// import { TransactionType } from "viem";

import { TransactionType } from "viem/dist/types/types/rpc";

export const addTransaction = (transaction: TransactionType) => {
  return {
    type: "ADD_TRANSACTION",
    payload: transaction,
  };
};
