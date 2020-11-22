<template>
  <b-container class="info-bar-container">
    <b-row>
      <b-col>Market Cap</b-col>
      <b-col>Exchange Vol</b-col>
      <b-col>Assets</b-col>
      <b-col>Exchanges</b-col>
      <b-col>BTC Dominance</b-col>
    </b-row>
    <b-row>
      <b-col> 500.312b </b-col>
      <b-col>{{ totalMarketCap }}</b-col>
      <b-col>Assets</b-col>
      <b-col>Exchanges</b-col>
      <b-col>BTC Dominance</b-col>
    </b-row>
  </b-container>
</template>

<script>
import moment from "moment";
import axios from "axios";

export default {
  name: "infoBar",
  props: {
    tokens: { data: [] }
  },
  data() {
    return {
      totalMarketCap: ""
    };
  },
  methods: {
    moment: function() {
      return moment().format();
    }
  },
  created() {
    axios
      .get(
        "https://api.nomics.com/v1/market-cap/history?key=ebbfc2a51d839ef4c2c220a2505b3dff&start=" +
          this.moment() +
          "&end=" +
          this.moment(),
        {
          mode: "cors",
          credentials: "include"
        }
      )

      .then(response => {
        this.totalMarketCap = response.market_cap;
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
.info-bar-container {
  margin-top: 3%;
  width: 80%;
}
</style>