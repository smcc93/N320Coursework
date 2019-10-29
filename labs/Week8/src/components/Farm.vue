<template>
  <div>
    <div class="farm">
      <div v-for="(plot, idx) in plots" class="plot" v-bind:key="idx">{{plot.plant}}</div>
    </div>
  </div>
</template>

<script>
import GameData from "../GameData.js";
export default {
  data: function() {
    return {
      plots: GameData.plots
    };
  },
  name: "Farm"
};
</script>

<style scoped>
.farm {
  display: flex;
}

.plot {
  width: 40px;
  height: 40px;
  margin: 2px;
  border: 1px solid gray;
}
</style>