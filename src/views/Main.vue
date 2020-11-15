<template>
  <div>
    <TokenList />
  </div>
</template>

<script>
import TokenList from "../components/TokenList.vue";
import numeral from "numeral";


export default {
  name: "Main",
  components: {
    TokenList
  },
  data() {
    return {
      tokens: []
    };
  },
  computed: {
    currencies(num) {
      let result = numeral(parseFloat(num)).format("$0,00a");
      return result;
    }
  }
};
</script>

<style scoped></style>
