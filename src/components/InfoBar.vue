<template>
  <b-container class="info-bar-container">
    <b-row>
      <b-col class="description-col">MARKET CAP</b-col>
      <b-col class="description-col">EXCHANGE VOL</b-col>
      <b-col class="description-col">ASSETS</b-col>
      <b-col class="description-col">EXCHANGES</b-col>
      <b-col class="description-col">BTC DOM</b-col>
    </b-row>
    <b-row>
      <b-col class="data-col">
        {{ currencies(totalMarketCap[0].market_cap) }}</b-col
      >
      <b-col class="data-col">{{ currencies(volume()) }}</b-col>
      <b-col class="data-col">1455</b-col>
      <b-col class="data-col">66</b-col>
      <b-col class="data-col">65.3%</b-col>
    </b-row>
  </b-container>
</template>

<script>
import moment from "moment";
import axios from "axios";
import numeral from "numeral";

export default {
  name: "infoBar",
  props: {
    tokens: { data: [] }
  },
  data() {
    return {
      totalMarketCap: { timestamp: "", market_cap: "" },
      totalVolume: { data: {time: "", volume: ""} }
    };
  },
  methods: {
    moment: function() {
      var time2 = moment.utc().subtract(1.5, "hours");
      var time = moment.utc(time2).format();

      return time;
    },
    moment24: function() {
      var time2 = moment.utc().subtract(24, "hours");
      var time = moment.utc(time2).format();

      return time;
    },
    currencies(num) {
      let result;
      if (num[0] == 0) {
        result = numeral(num).format("$0,00.00000a");
      } else result = numeral(num).format("$0,000.000a");

      return result;
    },
    volume() {
        var total = 0;
      for (var i = 0; i < this.totalVolume.length; i++) {
         total = parseFloat(this.totalVolume.data[i].volume) + total;
      }
      return total;
    }
  },
  created() {
    axios
      .get(
        "https://api.nomics.com/v1/market-cap/history?key=ebbfc2a51d839ef4c2c220a2505b3dff&start=" +
          this.moment()
      )

      .then(response => {
        this.totalMarketCap = response.data;
      })
      .catch(error =>
        this.$toasted.show(error, {
          icon: "error",
          theme: "outline",
          duration: 5000,
          position: "top-center"
        })
      );
    axios
      .get(
       " https://min-api.cryptocompare.com/data/exchange/histoday?tsym=USD&limit=10&api_key={96936126838cab0007ad9857056a9a4c40c16f0d50eaf42927c07e2abb2262ad}"
      )

      .then(response => {
        this.totalVolume = response.data;
        console.log(this.totalVolume);
      })
      .catch(error =>
        this.$toasted.show(error, {
          icon: "error",
          theme: "outline",
          duration: 5000,
          position: "top-center"
        })
      );
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;400;600&display=swap");
.info-bar-container {
  margin-top: 3%;
  width: 80%;
}
.description-col {
  color: rgb(165, 162, 162);
  font-size: 15px;
  font-weight: bold;
}
.data-col {
  color: rgb(139, 204, 42);
  font-weight: bold;
}
</style>