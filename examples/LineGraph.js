var graph;
graph = new Graph(0.1, 1);

function displayLineGraph() {
  for (let i = 0; i < 100; i++) {
    sleep(0).then(() => {
      addRandomPoint();
    });
  }
}

function addRandomPoint() {
  graph.addData(Math.random() * 100, Math.random() * 400);
}

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
