<script setup lang="ts">
import TotalBalance from "@/components/total-balance.vue";
import IncomeExpenses from "@/components/income-expenses.vue";
import TransactionList from "@/components/transaction-list.vue";
import TransactionForm from "@/components/transaction-form.vue";
</script>

<template>
  <h2 class="text-2xl font-semibold mb-4">Expense Tracker</h2>
  <main class="w-[300px] space-y-6">
    <TotalBalance />
    <IncomeExpenses />
    <TransactionList />
    <TransactionForm />
  </main>
</template>
