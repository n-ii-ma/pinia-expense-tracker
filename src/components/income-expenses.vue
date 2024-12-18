<script setup lang="ts">
import { useTransactionsStore } from "@/stores/transactions";

// Transactions store
const store = useTransactionsStore();
</script>

<template>
  <section class="flex justify-between shadow-md bg-white rounded-md p-5 my-5">
    <div class="flex-1 border-r border-gray-200 text-center">
      <h4 class="font-semibold">INCOME</h4>
      <p class="my-1 tracking-wider text-xl text-green-600 font-medium">
        ${{ store.income.toFixed(2) }}
      </p>
    </div>
    <div class="flex-1 text-center">
      <h4 class="font-semibold">EXPENSE</h4>
      <p class="my-1 tracking-wider text-xl text-red-600 font-medium">
        ${{ Math.abs(store.expenses).toFixed(2) }}
      </p>
    </div>
  </section>
</template>
