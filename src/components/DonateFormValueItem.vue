<template>
  <div class="col-4 mb-1">
    <b-button variant="primary" class="btn-block">{{ value | moneyFormat(currency) }}</b-button>
  </div>
</template>

<script>
export default {
  name: "DonateFormValueItem",
  props: ['value', 'currency']
}
</script>

<style scoped>

</style>
