<template>
  <header>
    <img src="../assets/bandit.png" />
    <h1>Chuck Norris funny facts</h1>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
}
img {
  max-width: 100px;
  object-fit: contain;
  margin: 0 16px;
}
h1 {
  font-size: 3.5rem;
  margin: 0;
}
@media screen and (max-width: 800px) {
  h1 {
    font-size: 2.5rem;
    text-align: center;
  }
  img {
    width: 75px;
  }
}
</style>
