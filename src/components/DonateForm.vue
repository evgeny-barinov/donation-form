<template>
  <b-card>
  <div class="row p-1">
    <div class="col-4 mb-1">
      <b-button variant="primary" class="btn-block">$40</b-button>
    </div>
    <div class="col-4 mb-1">
      <b-button variant="outline-primary" class="btn-block">$100</b-button>
    </div>
    <div class="col-4 mb-1">
      <b-button variant="outline-primary" class="btn-block">$200</b-button>
    </div>
    <div class="col-4 mb-1">
      <b-button variant="outline-primary" class="btn-block">$500</b-button>
    </div>
    <div class="col-4 mb-1">
      <b-button variant="outline-primary" class="btn-block">$1500</b-button>
    </div>
    <div class="col-4 mb-1">
      <b-button variant="outline-primary" class="btn-block">$2000</b-button>
    </div>
  </div>
  <div class="row p-1">
    <div class="col">
      <donate-form-input></donate-form-input>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-12">
      <b-button variant="primary" class="btn-block">Donate</b-button>
    </div>
  </div>
</b-card>
</template>

<script>
import DonateFormValueItem from "@/components/DonateFormValueItem";
import DonateFormInput from "@/components/DonateFormInput";

export default {
  name: "DonateForm",
  components: {DonateFormInput},
  comments: [
      DonateFormValueItem
  ]
}
</script>

<style scoped>

</style>
