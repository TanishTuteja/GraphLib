var graph;
graph = new LineGraph(10, 10);

function displayLineGraph() {
  for (let i = 0; i < 100; i++) {
    sleep(0).then(() => {
      addRandomPoint();
    });
  }
}

function addRandomPoint() {
  graph.addData(Math.random() * 100, Math.random() * 100);
}

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
