var data = getData();

Plotly.newPlot('chart', [{ //multiple traces
       z: data,
       type: 'surface'
}]);