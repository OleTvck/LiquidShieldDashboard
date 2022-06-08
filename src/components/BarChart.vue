<template>
  <main >
    <!-- For all of the items in the array make a checkbox -->
    <div v-for="(ua, i) in userApps" :key="ua.label" class="form-check form-check-inline">
      <label>{{ ua.label }}</label>
      <input type="checkbox" value="" v-model="userApps[i].isOn">
    </div>
    <GChart type="ComboChart" :data="chartData" :options="chartOptions" />
  </main>
</template>

<script>
  import {
    defineComponent,
    h
  } from 'vue';

  import {
    GChart
  } from 'vue-google-charts';

  const userApps = ["whatsapp", "telegram", "viber", "skype", "hangouts", "discord", "pidgin", "thunderbird",
    "trillian"
  ].map(d => {
    return {
      label: d,
      isOn: false
    }
  })

  export const type = 'ComboChart';
  // we will add the user data array here and replace data[] with the database data
  export const data = [
    [
      'CVE Impact Score',
      "whatsapp",
      "telegram",
      "viber",
      "skype",
      "hangouts",
      'Average',
    ],
    ['1-2', 165, 938, 522, 998, 450, 614.6],
    ['3-4', 135, 1120, 599, 1268, 288, 682],
    ['5-6', 157, 1167, 587, 807, 397, 623],
    ['7-8', 139, 1110, 615, 968, 215, 609.4],
    ['9-10', 136, 691, 629, 1026, 366, 569.6],
  ];

  computed: {
    // a computed getter
    chartApps: () => {
      return this.userApps.map(ua => {
        if (ua.isOn) return ua.label
      })
    }
  }

  export const options = {
    title: 'CVEs Impact Score by Count and Criticality',
    vAxis: {
      title: '# of CVEs'
    },
    hAxis: {
      title: 'Impact Score'
    },
    seriesType: 'bars',
    series: {
      5: {
        type: 'line'
      }
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
        chartOptions: options,
      }
    },

  });
</script>

<style>
  GChart {
    border-radius: 10px;
  }
</style>