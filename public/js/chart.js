const addData = (chart, label, data) => {
    if (chart.data.labels.length === 15) {
      chart.data.labels.shift();
    }
    
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset, index) => {
      if (dataset.data.length === 15) {
        dataset.data.shift();
      }
      dataset.data.push(data[index]);
    });
  
    chart.update("none");
  };
  
  const labels = [];
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Temperature",
        backgroundColor: "#ffce56",
        borderColor: "#ffce56",
        data: [],
        yAxisID: "y1",
      },
      {
        label: "Humidity",
        backgroundColor: "#cc65fe",
        borderColor: "#cc65fe",
        data: [],
        yAxisID: "y1",
      },
      {
        label: "Dust",
        backgroundColor: "#ff6384",
        borderColor: "#ff6384",
        data: [],
        yAxisID: "y2",
      },
      {
        label: "Co2",
        backgroundColor: "#36a2eb",
        borderColor: "#36a2eb",
        data: [],
        yAxisID: "y2",
      },
    ],
  };
  
  const config = {
    type: "line",
    data: data,
    options: {
      title: {
        display: true,
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        x: {
          reverse: true,
        },
        y1: {
          position: "left",
          suggestedMin: -15,
          suggestedMax: 100,
        },
        y2: {
          position: "right",
          suggestedMin: -15,
          suggestedMax: 100,
        },
      },
    },
  };
  
  