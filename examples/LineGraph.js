var graph;

function displayLineGraph() {

    graph = new Graph(0.1, 1);

    for (let i = 0; i < 100; i++) {

        graph.addData(Math.random() * 100, Math.random() * 400);

    }

    graph.update();
}