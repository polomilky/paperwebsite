var pie = new d3pie("pie", {

  size: {
    canvasHeight: 500,
    canvasWidth: 550
  },

  labels: {
    outer: {
      "pieDistance": 32
    },
    mainLabel: {
      "fontSize": 16,
      "color": "#ffffff",
      "font": "Microsoft JhengHei"
    },
    percentage: {
      "color": "#ffffff",
      "fontSize": 24,
      "decimalPlaces": 0
    },
    value: {
      "color": "#adadad",
      "fontSize": 11
    },
    lines: {
      "enabled": true
    },
    truncation: {
      "enabled": true
    }
  },

  data: {
    content: [
      { label: "1年以下", value: 19, color:"#b7d28d" },
      { label: "1~2年", value: 8, color:"#fecf45" },
      { label: "2~3年", value: 5, color:"#fe9778" },
      { label: "3年以上", value: 4, color:"#c38e9e" }
    ]
  },
  tooltips: {
    enabled: true,
    type: "placeholder",
    string: "{label}, {value}"
  }
});