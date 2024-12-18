import { defineStore } from "pinia";

import type { Transaction } from "./types";

export const useTransactionsStore = defineStore("transactions", {
  state: () => ({
    // List of transactions
    transactions: [] as Transaction[],
  }),
  getters: {},
  actions: {},
});
