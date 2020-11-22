<template>
  <div>
    <InfoBar :tokens="tokenData"/>
    <TokenList :tokens="tokenData" />
  </div>
</template>

<script>
import TokenList from "../components/TokenList.vue";
import InfoBar from "../components/InfoBar.vue";
import axios from "axios";
export default {
  name: "Main",
  components: {
    TokenList,
    InfoBar
  },
  data() {
    return {
      tokenData: { data: [] }
    };
  },
  created() {
    axios
      .get("https://api.coincap.io/v2/assets")

      .then(response => {
        this.tokenData = response.data;
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

<style scoped></style>
