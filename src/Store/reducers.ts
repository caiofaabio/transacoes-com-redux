// import { Transaction } from "viem";

import { Transaction } from "@rainbow-me/rainbowkit/dist/transactions/transactionStore";

interface State {
  transactions: Transaction[];
}

const initialState: State = {
  transactions: [],
};

const transactionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

export default transactionReducer;
