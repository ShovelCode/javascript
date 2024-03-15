<script>
  export let count = 0;

  function increment() {
    count += 1;
  }
</script>

<div>
  <h1>Count: {count}</h1>
  <button on:click={increment}>Increment</button>
</div>


//Add to pages like this
<script>
  import Counter from './Counter.svelte';
</script>

<Counter />
