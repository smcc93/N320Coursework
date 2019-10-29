var app = new Vue({
  el: "#app",
  //   mounted: function() {
  //     axios.get("data/candy.json").then(response => {
  //       this.candy = response.data.candy;
  //     });
  //   },
  //   data: {
  //     candy: []
  //   },

  mounted: function() {
    axios.get("data/gundam.json").then(response => {
      this.gundams = response.data.gundams[0].MobileSuits;
    });
  },
  data: {
    gundams: []
  },
  methods: {}
});
