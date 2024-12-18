<script setup lang="ts">
import { reactive } from "vue";
import { nanoid } from "nanoid";

import { useTransactionsStore } from "@/stores/transactions";

import type { Transaction } from "@/stores/types";

// Transactions store
const store = useTransactionsStore();

// Reactive form state
const formState = reactive({
  title: "",
  amount: "",
});

/** Callback to add new transaction */
const handleSubmit = () => {
  // Create a new transaction
  const newTransaction: Transaction = {
    id: nanoid(),
    title: formState.title,
    amount: Number(formState.amount),
  };

  // Add transaction and reset inputs
  store.addTransaction(newTransaction);
  formState.title = "";
  formState.amount = "";
};
</script>

<template>
  <section>
    <h3 class="border-b border-gray-200 pb-2 mb-2 font-semibold">Add New Transaction</h3>
    <form @submit.prevent="handleSubmit" class="space-y-2">
      <input
        v-model.trim="formState.title"
        type="text"
        class="w-full rounded-md border border-gray-300 outline-none p-2"
        placeholder="Enter Title..."
        required
      />
      <div>
        <input
          v-model="formState.amount"
          type="number"
          class="w-full rounded-md border border-gray-300 outline-none p-2"
          step="0.01"
          placeholder="Enter amount..."
          required
        />
        <span class="px-1 text-xs text-gray-700">(Negative: Expense / Positive: Income)</span>
      </div>
      <button
        type="submit"
        class="w-full p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 shadow-md"
      >
        Add
      </button>
    </form>
  </section>
</template>
