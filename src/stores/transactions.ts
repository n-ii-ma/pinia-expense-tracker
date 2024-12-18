import { defineStore } from "pinia";

import type { Transaction } from "./types";

export const useTransactionsStore = defineStore("transactions", {
  state: () => ({
    // List of transactions
    transactions: [] as Transaction[],
  }),
  getters: {
    /** Calculate total balance */
    totalBalance(state) {
      return state.transactions.reduce((total, transaction) => total + transaction.amount, 0);
    },
    balanceSign(): string {
      return this.totalBalance < 0 ? "-" : "";
    },
    /** Calculate total income */
    income(state) {
      return state.transactions.reduce(
        (total, transaction) => (transaction.amount > 0 ? total + transaction.amount : total),
        0,
      );
    },
    /** Calculate total expense */
    expenses(state) {
      return state.transactions.reduce(
        (total, transaction) => (transaction.amount < 0 ? total + transaction.amount : total),
        0,
      );
    },
  },
  actions: {
    /** Add new transaction */
    addTransaction(transaction: Transaction) {
      this.transactions.push(transaction);
    },
  },
});
