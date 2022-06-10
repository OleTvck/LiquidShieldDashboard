import axios from 'axios';

import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => {
    return { resultTotals: [], impactStruct: {}, api: 'https://services.nvd.nist.gov/rest/json/cves/1.0?cpeMatchString=cpe:2.3:*:', keywords: ['skype', 'whatsapp', 'telegram'] };
  },

  actions: {
    async fetchScores() {
      // Temporary array to hold our totals (for the H5s)
      const tmpTotals = [];
      let impactStruct = {};
      for (const keyword of this.keywords) {
        // Destructure the response.data, effectively gets us just the data variable
        // shorter to write and we are lazy.
        const { data } = await axios.get(this.api + keyword);

        // Add the total score title for this keyword to the tmp array
        tmpTotals.push(keyword + ': ' + data.totalResults);

        // Initialize impactStruct for this keyword
        impactStruct[keyword] = { 'No impact': 0, '1-2': 0, '3-4': 0, '5-6': 0, '7-8': 0, '9-10': 0 };
        console.log('täs', data.result.CVE_Items);
        for (const item of data.result.CVE_Items) {
          const score = item.impact.baseMetricV2.impactScore;
          console.log('score: ', score);
          if (score < 1) {
            impactStruct[keyword]['No impact']++;
            continue;
          }
          if (score < 3) {
            impactStruct[keyword]['1-2']++;
            continue;
          }
          if (score < 5) {
            impactStruct[keyword]['3-4']++;
            continue;
          }
          if (score < 7) {
            impactStruct[keyword]['5-6']++;
            continue;
          }
          if (score < 9) {
            impactStruct[keyword]['7-8']++;
            continue;
          }
          if (score >= 9) impactStruct[keyword]['9-10']++;
        }
        console.log(impactStruct);
      }

      // Copy the temporary array over the state.resultTotals all at once.
      this.resultTotals = tmpTotals;
    },
  },
});
