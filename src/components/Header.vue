<template>
  <header>
    <img src="../assets/bandito.png" />
    <div>
      <h1 id="header-line">facts about</h1>
      <h1>CHUCK NORRIS</h1>
    </div>
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
  margin: 3rem 16px;
}
img {
  max-width: 150px;
  object-fit: contain;
  margin-right: 24px;
}
#header-line {
  letter-spacing: 0.15em;
}
h1 {
  font-family: 'Smokum';
  letter-spacing: 0.05em;
  font-size: 5rem;
  margin: 0;
}
@media screen and (max-width: 800px) {
  img {
    max-width: 110px;
  }
}
@media screen and (max-width: 550px) {
  header {
    flex-direction: column;
    text-align: center;
  }
  h1 {
    font-size: 4rem;
  }
  img {
    max-width: 80px;
    margin: 0;
  }
}
</style>
