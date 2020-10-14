<template>
  <div id="app">
    <div class="row justify-content-center">
      <div class="col-4">
        <donate-form></donate-form>
      </div>
    </div>
  </div>
</template>

<script>
import DonateForm from "@/components/DonateForm";

export default {
  name: 'App',
  components: {
    DonateForm,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
