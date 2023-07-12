import Web3 from "web3";

const CONTRACT_ABI = [
  {
    inputs: [],
    name: "result",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    name: "sumNumbers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const CONTRACT_ADDRESS = "0xd11cb3a51e76b491298d48dfc94adecbe2b102be";

export const web3 = new Web3(
  "https://polygon-mainnet.infura.io/v3/b18b6bf02ce14e87a9a519ba89c5dced "
);

export const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

export const callContract = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    const number = 10;

    const transaction = contract.methods
      .sumNumbers()
      .send({ from: accounts[0] });

    transaction.on("transactionHash", function (hash) {
      console.log("Transaction hash:", hash);
    });
  } catch (error) {
    console.error("Erro:", error);
  }
};

export const getResult = async () => {
  try {
    const result = await contract.methods.result().call();
    console.log("Resultado:", result);
  } catch (error) {
    console.error("Erro:", error);
  }
};
