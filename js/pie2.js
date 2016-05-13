var pie = new d3pie("pie", {
  // header: {
  //   title: {
  //     text: "就業比率",
  //     fontSize: 20
  //   }
  // },
  // labels: {
  //   inner: {
  //     format: "none"
  //   }
  // },

  labels: {
    outer: {
      "format": "none",
      "pieDistance": 32
    },
    percentage: {
      "color": "#ffffff",
      "fontSize": 30,
      "decimalPlaces": 0
    }
  },

  data: {
    content: [
      { label: "男性", value: 9, color:"#92A8D1" },
      { label: "女性", value: 13, color:"#E4B8BA" }
    ]
  },
  tooltips: {
    enabled: true,
    type: "placeholder",
    // string: "{label}, {percentage}%"
    string: "{label}, {value}"
  }
});

// var pie = new d3pie("pieChart", {
//   "header": {
//     "title": {
//       "fontSize": 24,
//       "font": "open sans"
//     },
//     "subtitle": {
//       "color": "#999999",
//       "fontSize": 12,
//       "font": "open sans"
//     },
//     "location": "pie-center",
//     "titleSubtitlePadding": 9
//   },
//   "footer": {
//     "color": "#999999",
//     "fontSize": 10,
//     "font": "open sans",
//     "location": "bottom-left"
//   },
//   "size": {
//     "canvasWidth": 590,
//     "pieOuterRadius": "90%"
//   },
//   "data": {
//     "sortOrder": "value-desc",
//     "content": [
//       {
//         "label": "aaa",
//         "value": 264131,
//         "color": "#2484c1"
//       },
//       {
//         "label": "bbb",
//         "value": 218812,
//         "color": "#0c6197"
//       }
//     ]
//   },
//   "labels": {
//     "outer": {
//       "format": "none",
//       "pieDistance": 32
//     },
//     "inner": {
//       "hideWhenLessThanPercentage": 3
//     },
//     "mainLabel": {
//       "fontSize": 11
//     },
//     "percentage": {
//       "color": "#ffffff",
//       "fontSize": 40,
//       "decimalPlaces": 0
//     },
//     "value": {
//       "color": "#adadad",
//       "fontSize": 11
//     },
//     "lines": {
//       "enabled": true
//     },
//     "truncation": {
//       "enabled": true
//     }
//   },
//   "effects": {
//     "pullOutSegmentOnClick": {
//       "effect": "linear",
//       "speed": 400,
//       "size": 8
//     }
//   },
//   "misc": {
//     "gradient": {
//       "enabled": true,
//       "percentage": 100
//     }
//   }
// });