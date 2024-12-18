<script setup lang="ts">
import { useTransactionsStore } from "@/stores/transactions";

// Transactions store
const store = useTransactionsStore();
</script>

<template>
  <section>
    <h4 class="font-semibold text-lg">YOUR BALANCE</h4>
    <h1 class="font-bold tracking-wider text-xl">
      {{ store.balanceSign }}${{ Math.abs(store.totalBalance).toFixed(2) }}
    </h1>
  </section>
</template>
