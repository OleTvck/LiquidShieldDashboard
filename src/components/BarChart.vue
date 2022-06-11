<template>
  <main>
    <!-- For all of the items in the array make a checkbox -->
    <!-- {{ chartApps }} <br /> -->
    <div v-for="(ua, i) in userApps" :key="ua.label" class="form-check form-check-inline">
      <template v-if="ua.label !== 'CVE Impact Score' && ua.label !== 'Average'">
        <label>{{ ua.label }}</label>
        <input type="checkbox" v-model="userApps[i].isOn" />
      </template>
    </div>
    <GChart type="ComboChart" :data="chartData" :options="chartOptions" />
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import { GChart } from 'vue-google-charts';
import { useStore } from '../store/cveStore';

// The type of chart being shown (maybe add a toggle for different types later?)
export const type = 'ComboChart';

// we will add the user data array here and replace data[] with the database data
export const data = [
  ['CVE Impact Score', 'whatsapp', 'telegram', 'viber', 'skype', 'hangouts', 'Average'],
  ['1-2', 165, 938, 522, 998, 450, 614.6],
  ['3-4', 135, 1120, 599, 1268, 288, 682],
  ['5-6', 157, 1167, 587, 807, 397, 623],
  ['7-8', 139, 1110, 615, 968, 215, 609.4],
  ['9-10', 136, 691, 629, 1026, 366, 569.6],
];

let dat2 = [
  ['CVE Impact Score', ['skype', 'whatsapp', 'telegram']],
  ['No impact', 0, 0, 0],
  ['1-2', 2, 9, 15],
  ['3-4', 0, 2, 3],
  ['5-6', 1, 8, 2],
  ['7-8', 0, 0, 0],
  ['9-10', 3, 1, 0],
];
export const options = {
  title: 'CVEs Impact Score by Count and Criticality',
  vAxis: {
    title: '# of CVEs',
  },
  hAxis: {
    title: 'Impact Score',
  },
  seriesType: 'bars',
  series: {
    5: {
      type: 'line',
    },
  },
  width: 800,
  height: 600,
};

export default defineComponent({
  name: 'GoogleChart',
  components: {
    GChart,
  },
  data() {
    return {
      // chartData: data,
      store: useStore(),
      chartType: type,
    };
  },
  computed: {
    userApps() {
      return this.store.keywords.map((d) => {
        return {
          label: d,
          isOn: true,
        };
      });
    },
    chartData() {
      // De-structure the store impactStruct
      const d = { ...this.store.impactStruct };
      let retArr = [];
      // combine the hardcoded CVEetc heading and all the keywords/headings from the struct
      const firstRow = ['CVE Impact Score', ...Object.keys(d), 'Average'];
      console.log(firstRow);
      // And this is added as the first row
      retArr.push(firstRow);

      // each rows first item is the 1-2  etc
      for (const rowName of ['No impact', '1-2', '3-4', '5-6', '7-8', '9-10']) {
        let tmpRow = [];
        tmpRow.push(rowName);
        // Iterate through the keywords and pushing the score
        for (const kw of Object.keys(d)) {
          // keyword/1-2
          tmpRow.push(d[kw][rowName]);
        }
        tmpRow.push(this.getAverage(rowName));
        // Add the just created temporary row to the chart array
        retArr.push(tmpRow);
      }
      return retArr;
    },
    chartApps() {
      return this.userApps
        .map((ua) => {
          if (ua.isOn) return ua.label;
        })
        .filter((ua) => ua != null);
    },
    filteredData() {
      let newArr = [];
      for (let row = 0; row < this.chartData.length; row++) {
        console.log('row: ' + row);
        newArr.push([]);
        for (let col = 0; col < this.chartData[0].length; col++) {
          console.log('col: ' + col + ' ' + this.chartData[0][col]);
          if (this.chartApps.includes(this.chartData[0][col])) {
            newArr[row].push(this.chartData[row][col]);
          }
        }
      }
      console.log(newArr);
      return newArr;
    },
    chartOptions() {
      return {
        title: 'CVEs Impact Score by Count and Criticality',
        vAxis: {
          title: '# of CVEs',
        },
        hAxis: {
          title: 'Impact Score',
        },
        seriesType: 'bars',
        series: {
          [this.chartApps.length]: {
            type: 'line',
          },
        },
        width: 800,
        height: 600,
      };
    },
  },
  methods: {
    getAverage(col) {
      const keys = Object.keys(this.store.impactStruct);
      let count = 0;
      for (const k of keys) {
        count += this.store.impactStruct[k][col];
      }
      return count / keys.length;
    },
  },
});
</script>

<style>
GChart {
  border-radius: 10px;
}
</style>
