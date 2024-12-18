<script setup lang="ts">
import { useTransactionsStore } from "@/stores/transactions";

import TransactionItem from "./transaction-item.vue";

// Transactions store
const store = useTransactionsStore();
</script>

<template>
  <section>
    <h3 class="border-b border-gray-200 pb-2 mb-2 font-semibold">History</h3>
    <p class="text-gray-700 px-1" v-if="!store.transactions.length">No Transaction to Show</p>
    <ul v-else class="space-y-2">
      <TransactionItem
        v-for="transaction in store.transactions"
        :key="transaction.id"
        :transaction="transaction"
      />
    </ul>
  </section>
</template>
