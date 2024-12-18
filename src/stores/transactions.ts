import { defineStore } from "pinia";

import type { Transaction } from "./types";

export const useTransactionsStore = defineStore("transactions", {
  // Persist store
  persist: true,
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
    /** Delete transaction by id */
    deleteTransaction(id: string) {
      const index = this.transactions.findIndex((transaction) => transaction.id === id);

      if (index !== -1) {
        this.transactions.splice(index, 1);
      }
    },
  },
});
