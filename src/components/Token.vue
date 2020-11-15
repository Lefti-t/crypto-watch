<template>
  <div class="token-container">
    <!-- <div>
      <h3>{{ rank }}</h3>
    </div>
    <div>
      <h3>{{ name }}</h3>
    </div>
    <div>
      <h3>{{ priceUsd }}</h3>
    </div>
    <div>
      <h3>{{ supply }}</h3>
    </div>
    <div>
      <h3>{{ maxSupply }}</h3>
    </div>
    <div>
      <h3>{{ volumeUsd24Hr }}</h3>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Token",
  props: {
    token: {
      type: Object,
      required: true
    }
  },
  data() {
    let {
      id,
      rank,
      symbol,
      name,
      supply,
      maxSupply,
      marketCapUsd,
      volumeUsd24Hr,
      priceUsd,
      changePercent24Hr,
      vwap24Hr
    } = this.token;

    return {
      id,
      rank,
      symbol,
      name,
      supply,
      maxSupply,
      marketCapUsd,
      volumeUsd24Hr,
      priceUsd,
      changePercent24Hr,
      vwap24Hr
    };
  }
};
</script>

<style scoped>
.token-container {
  display: flex;
  width: 100%;
  height: 3%;
  border-radius: 5px;
  background-image: linear-gradient(rgb(255, 255, 255), #d7dee0);
  margin-left: auto;
  margin-right: auto;
}
</style>
