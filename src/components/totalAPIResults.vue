<template>
  <main>
    <h5 v-for="rt in resultTotals" :key="rt">{{ rt }}</h5>
  </main>
</template>

<script>
  import axios from "axios"

  export default {
    data() {
      return {
        resultTotals: [],
        api:"https://services.nvd.nist.gov/rest/json/cves/1.0?cpeMatchString=cpe:2.3:*:",
        keywords: ['skype', 'whatsapp', 'telegram']
      };
    },
    methods: {
      async fetchTotals() {
        this.resultTotals = []
        for (const keyword of this.keywords) {
          const response = await axios.get(this.api+keyword);
          //console.log(response.data);
          console.log(keyword + ": " + response.data.totalResults)
          console.log(response.data)
          this.resultTotals.push(keyword + ": " + response.data.totalResults)
        }
      }
    },
    mounted() {
      this.fetchTotals()
    }
  }
</script>

<style>

</style>