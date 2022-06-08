<template >
  <main>
    <!-- For all of the items in the array make a checkbox -->
    <!-- {{ chartApps }} <br /> -->
    <div v-for="(ua, i) in userApps" :key="ua.label" class="form-check form-check-inline">
      <template v-if="ua.label !== 'CVE Impact Score' && ua.label !== 'Average'">
        <label>{{ ua.label }}</label>
        <input type="checkbox" v-model="userApps[i].isOn" />
      </template>
    </div>
    <GChart type="ComboChart" :data="filteredData" :options="chartOptions" />
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import { GChart } from 'vue-google-charts';

// removed 'discord', 'pidgin', 'thunderbird', 'trillian'
// add them back when we got the data.
// This list has to match the first row of data-object
const userApps = ['CVE Impact Score', 'whatsapp', 'telegram', 'viber', 'skype', 'hangouts', 'Average'].map((d) => {
  return {
    label: d,
    isOn: true,
  };
});

// The type of chart being shown (maybe add a toggle for different types later?)
export const type = 'ComboChart';

// we will add the user data array here and replace data[] with the database data
export const data = [
  ['CVE Impact Score', 'whatsapp', 'telegram', 'viber', 'skype', 'hangouts', 'Average'],
  ['1-2', 165, 938, 522, 998, 450, 614.6],
  ['3-4', 135, 1120, 599, 1268, 288, 682],
  ['5-6', 157, 1167, 587, 807, 397, 623],
  ['7-8', 139, 1110, 615, 968, 215, 609.4],
  ['9-10', 136, 691, 629, 1026, 366, 569.6]
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
      userApps,
      chartData: data,
      chartType: type,
    };
  },
  computed: {
    // a computed getter
    chartApps() {
      return this.userApps.map((ua) => {
        if (ua.isOn) return ua.label;
      }).filter(ua => ua != null);
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
      console.log(newArr)
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
          [this.chartApps.length-2]: {
            type: 'line',
          },
        },
        width: 800,
        height: 600,
      };
    },
  },
});
</script>

<style>
GChart {
  border-radius: 10px;
}
</style>
