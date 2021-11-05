<script lang="ts">
  import { MaterialApp } from 'svelte-materialify';
  import Header from './Header.svelte';

  export let name: string;
</script>

<MaterialApp>
  <Header />
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</MaterialApp>

<style>
</style>
