<template>
  <div class="tokens-container">
    <div>
      <b-table
        class="bordered"
        dark
        hover
        :items="itemsLessThanTen"
        :fields="fields"
      >
        <template #cell(name)="data"
          ><img
            v-bind:src="
              require('../assets/icons/' +
                data.item.name.toLowerCase() +
                '.png')
            "
            width="17"
          />
          {{ data.item.name }}
        </template>
        <template #cell(priceUsd)="data">
          {{ currencies(data.item.priceUsd) }}
        </template>
        <template #cell(marketCapUsd)="data">
          {{ currencies(data.item.marketCapUsd) }}
        </template>
        <template #cell(volumeUsd24Hr)="data">
          {{ currencies(data.item.volumeUsd24Hr) }}
        </template>
        <template #cell(changePercent24Hr)="value">
          {{ parseFloat(value.item.changePercent24Hr).toFixed(2) + "%" }}
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import numeral from "numeral";

export default {
  name: "tokenList",
  props: { tokens: { data: [] } },
  components: {},
  data() {
    return {
      top20Feed: [],
      fields: [
        {
          key: "rank",
          sortable: true,
          thClass: "table-header"
        },
        {
          key: "name",
          sortable: true,
          thClass: "table-header"
        },
        {
          key: "priceUsd",
          sortable: true,
          thClass: "table-header"
        },
        {
          key: "marketCapUsd",
          type: Number,
          sortable: true,
          thClass: "table-header"
        },
        {
          key: "volumeUsd24Hr",
          label: "Volume 24Hr",
          sortable: true,
          thClass: "table-header"
        },
        {
          key: "changePercent24Hr",
          label: "Change 24Hr",
          sortable: true,
          tdClass: "setAmountTdClass",
          thClass: "table-header"
        }
      ]
    };
  },
  computed: {
    itemsLessThanTen: function() {
      return this.tokens.data.filter(function(item) {
        return item.rank <= 30;
      });
    }
  },
  methods: {
    currencies(num) {
      let result;
      if (num[0] == 0) {
        result = numeral(num).format("$0,00.00000a");
      } else result = numeral(num).format("$0,000.000a");

      return result;
    },
    setAmountTdClass(value) {
      var firstChar = value.charAt(0);
      if (firstChar !== "-") return "text-green";
      else if (firstChar === "-") return "text-red";
    }
  }
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;400;600&display=swap");
.tokens-container {
  width: 80%;
  height: 10px;
  margin-top: 4%;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 30px 0px rgb(59, 59, 59);
  border-radius: 4px;
}
.text-red {
  color: rgb(250, 42, 42);
}

.text-green {
  color: rgb(6, 163, 6);
}

.table-header {
  background-color: rgb(22, 22, 22);

  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  font-size: 12px;
  color: rgb(175, 174, 174);
}
.b-table {
  border-collapse: separate !important;
  border-spacing: 0;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
}

.bordered th:nth-child(2) {
  border-bottom: none;
  text-align: justify;
}
.bordered td:nth-child(2) {
  text-align: justify;
}
.bordered th:nth-child(3) {
  border-bottom: none;
}
.bordered th:nth-child(4) {
  border-bottom: none;
}
.bordered th:nth-child(5) {
  border-bottom: none;
}
.bordered th:first-child {
  -moz-border-radius: 4px 0 0 0;
  -webkit-border-radius: 4px 0 0 0;
  border-radius: 4px 0 0 0;
  border-bottom: none;
}
.bordered th:last-child {
  -moz-border-radius: 0 4px 0 0;
  -webkit-border-radius: 0 4px 0 0;
  border-radius: 0 4px 0 0;
  border-bottom: none;
}
.bordered th:only-child {
  -moz-border-radius: 4px 4px 0 0;
  -webkit-border-radius: 4px 4px 0 0;
  border-radius: 4px 4px 0 0;
}
.bordered tr:last-child td:first-child {
  -moz-border-radius: 0 0 0 4px;
  -webkit-border-radius: 0 0 0 4px;
  border-radius: 0 0 0 4px;
}
.bordered tr:last-child td:last-child {
  -moz-border-radius: 0 0 4px 0;
  -webkit-border-radius: 0 0 4px 0;
  border-radius: 0 0 4px 0;
}
</style>
