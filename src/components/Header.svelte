<script lang="ts">
  import { Select } from 'svelte-materialify';

  let items = [
    { name: 'Save 1', value: '1' },
    { name: 'Save 2', value: '2' },
    { name: 'Save 3', value: '3' },
    { name: 'Save 3', value: '3' },
    { name: 'Save 3', value: '3' },
    { name: 'Save 3', value: '3' },
    { name: 'Save 3', value: '3' },
    { name: 'Save 3', value: '3' },
    { name: 'Save 3', value: '3' },
    { name: 'Save 3', value: '3' },
    { name: 'Save 3', value: '3' },
  ];
</script>

<div class="container">
  <div class="saveSelection">
    <Select class="saveSelection" outlined {items}>Outlined</Select>
  </div>
</div>

<style>
  .container {
    padding: 0.5em;
  }

  .saveSelection {
    max-width: 400px;
  }
</style>
