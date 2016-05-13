var dountpie = new d3pie("pie", {
  // header: {
  //   title: {
  //     text: "A Simple Donut Pie"
  //   },
  //   location: "pie-center"
  // },
  size: {
    canvasHeight: 500,
    canvasWidth: 550,
    pieInnerRadius: "70%",
    pieOuterRadius: "70%"
  },

  labels: {
    percentage: {
      "color": "#000000",
      "fontSize": 18,
      "decimalPlaces": 0
    },
    mainLabel: {
      "fontSize": 20,
      "color": "#666666",
      "font": "Microsoft JhengHei"
    },
  },

  data: {
    sortOrder: "label-asc",
    content: [
      { label: "工程師", value: 12, color: "#b8f1ed" },
      { label: "美術設計師", value: 1, color: "#b8f1cc" },
      { label: "行銷企劃", value: 2, color: "#f1f1b8" },
      { label: "遊戲工程師", value: 4, color: "#dcff93" },
      { label: "其它", value: 3, color: "#f1ccb8" }
    ]
  }
});