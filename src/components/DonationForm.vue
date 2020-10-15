<template>
  <b-card>
  <div class="row p-1">
    <donation-form-suggestion
        v-for="suggestion of suggestions"
        :key="suggestion.value"
        :suggestion="suggestion"
        :currency="currency">
    </donation-form-suggestion>
  </div>
  <div class="row p-1">
    <div class="col">
      <donation-form-input></donation-form-input>
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
import DonationFormSuggestion from "@/components/DonationFormSuggestion";
import DonationFormInput from "@/components/DonationFormInput";

export default {
  name: "DonationForm",
  components: { DonationFormSuggestion, DonationFormInput },
  comments: [
    DonationFormSuggestion
  ],
  computed: {
    suggestions: function () {
      return this.$store.getters["donationForm/convertedPresets"];
    },
    currency: function() {
      return this.$store.state.donationForm.currency;
    }
  }
}
</script>

<style scoped>

</style>
