$(function () { 
  var chart1 = new CanvasJS.Chart("chart1",
      {
        title: {
          text: "Gráfico 1"
        },
        data: [{
          type: "doughnut",
          dataPoints: [
            {  y: 53.37, indexLabel: "Android" },
            {  y: 35.0, indexLabel: "Apple iOS" },
            {  y: 7, indexLabel: "Blackberry" },
            {  y: 2, indexLabel: "Windows Phone" },
            {  y: 5, indexLabel: "Others" }
          ]
        }]
      });

  var chart2 = new CanvasJS.Chart("chart2",
      {
        title: {
          text: "Gráfico 2"
        },
        data: [
          {
            dataPoints: [
              { x: 10, y: 297571, label: "Brasil"},
              { x: 20, y: 267017,  label: "Venezuela" },
              { x: 30, y: 175200,  label: "Canadá"},
              { x: 40, y: 154580,  label: "Irã"},
              { x: 50, y: 116000,  label: "Rússia"},
              { x: 60, y: 97800, label: "Espanha"},
              { x: 70, y: 20682,  label: "EUA"},
              { x: 80, y: 20350,  label: "China"}
            ]
          }
        ]
      });

  chart1.render();
  chart2.render();
});