<script>
  let username = '';
  let password = '';

  function handleSubmit() {
    // Handle form submission here
    console.log(`Username: ${username}, Password: ${password}`);
  }
</script>

<h1>Login</h1>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    Username:
    <input type="text" bind:value={username}>
  </label>

  <label>
    Password:
    <input type="password" bind:value={password}>
  </label>

  <button type="submit">Submit</button>
</form>
