<template>
  <b-input-group>
    <b-input-group-prepend is-text><b>$</b></b-input-group-prepend>
    <b-form-input></b-form-input>
    <template v-slot:append>
      <b-dropdown text="USD" variant="USD">
        <b-dropdown-item>USD</b-dropdown-item>
        <b-dropdown-item>EUR</b-dropdown-item>
        <b-dropdown-item>GBP</b-dropdown-item>
        <b-dropdown-item>RUS</b-dropdown-item>
      </b-dropdown>
    </template>
  </b-input-group>
</template>

<script>
export default {
name: "DonateFormInput"
}
</script>

<style scoped>

</style>
