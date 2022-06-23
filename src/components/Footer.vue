<template>
  <div class="footer">
    <ui-icon> copyright </ui-icon>
    <p>2022</p>
    <p>Szymon Kwak</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: rgba(255, 255, 255, 0.4);
}
@media screen and (max-width: 550px) {
  .footer {
    position: static;
  }
}
</style>
