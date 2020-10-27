<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<style scoped>
#tabbar {
  display: flex;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -2px 10px 0px rgba(188, 186, 192, 0.82);
}
</style>
