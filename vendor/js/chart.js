google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ]);

  var options = {
    title: 'Medicaid Chart',
    is3D: true,
    slices: {
      0: { color: '#2E86C1' },
      1: { color: '#7FB3D5' },
      2: { color: '#2980B9' },
      3: { color: '#2471A3' },
      4: { color: '#1F618D' },
      5: { color: '#1A5276' },      
      6: { color: '#154360' }
    }    
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}