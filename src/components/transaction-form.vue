<script setup lang="ts"></script>

<template>
  <section>
    <h3 class="border-b border-gray-200 pb-2 mb-2 font-semibold">Add New Transaction</h3>
    <form class="space-y-2">
      <input
        type="text"
        class="w-full rounded-md border border-gray-300 outline-none p-2"
        placeholder="Enter Title..."
        required
      />
      <div>
        <input
          type="number"
          class="w-full rounded-md border border-gray-300 outline-none p-2"
          step="0.01"
          placeholder="Enter amount..."
          required
        />
        <span class="text-xs text-gray-700">(Negative - Expense / Positive - Income)</span>
      </div>
      <button
        type="submit"
        class="w-full p-2 text-white bg-purple-500 rounded-md hover:bg-purple-600 shadow-md"
      >
        Add
      </button>
    </form>
  </section>
</template>
