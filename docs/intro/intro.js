var Graph = GraphTableSVG.Graph;
var Edge = GraphTableSVG.Edge;
var Vertex = GraphTableSVG.Vertex;
function createGraph(id, graphClass = null, vertexClass = null, edgeClass = null) {
    /* svgタグの取得 */
    var box = document.getElementById(id);
    /* graphの作成 */
    var graph = new GraphTableSVG.Graph(graphClass);
    /* graphをsvgタグの子に入れる */
    box.appendChild(graph.svgGroup);
    /* vertexの作成 */
    var node1 = GraphTableSVG.Vertex.create(graph, vertexClass);
    var node2 = GraphTableSVG.Vertex.create(graph, vertexClass);
    var node3 = GraphTableSVG.Vertex.create(graph, vertexClass);
    var edge1 = GraphTableSVG.Edge.create(graph, edgeClass);
    var edge2 = GraphTableSVG.Edge.create(graph, edgeClass);
    /* node1の座標を設定 */
    graph.connect(node1, edge1, node2);
    graph.connect(node1, edge2, node3);
    [node1.x, node1.y] = [100, 100];
    [node2.x, node2.y] = [150, 200];
    [node3.x, node3.y] = [50, 200];
    node1.svgText.textContent = "1";
    node2.svgText.textContent = "2";
    node3.svgText.textContent = "3";
    return [graph, node1, node2, node3, edge1, edge2];
}
function sample2() {
    createGraph("svgbox2");
}
function sample3() {
    var [graph, node1, node2, node3, edge1, edge2] = createGraph("svgbox3");
    GraphTableSVG.resetStyle(node1.surface.style);
    //node1.svgCircle.style.;
    node1.surface.setAttribute("class", "sample3_node");
}
function sample4() {
    var [graph, node1, node2, node3, edge1, edge2] = createGraph("svgbox4", null, "sample4_vertex");
}
function sample5() {
    var [graph, node1, node2, node3, edge1, edge2] = createGraph("svgbox5", "sample5_graph");
}
function sample1() {
    var [graph, node1, node2, node3, edge1, edge2] = createGraph("svgbox1");
    node1.svgGroup.onmousedown = sample1_mousedown;
    node1.svgGroup.onmouseup = sample1_mouseup;
    node1.svgGroup.onmousemove = sample1_mousemove;
    node2.svgGroup.onmousedown = sample1_mousedown;
    node2.svgGroup.onmouseup = sample1_mouseup;
    node2.svgGroup.onmousemove = sample1_mousemove;
    node3.svgGroup.onmousedown = sample1_mousedown;
    node3.svgGroup.onmouseup = sample1_mouseup;
    node3.svgGroup.onmousemove = sample1_mousemove;
}
let drag = { target: null, offsetx: 0, offsety: 0 };
var sample1_mouseup = (e) => {
    drag = null;
};
var sample1_mousedown = (e) => {
    drag = { target: e.currentTarget, offsetx: e.clientX, offsety: e.clientY };
};
var sample1_mousemove = (e) => {
    var box = document.getElementById('svgbox1');
    if (drag != null) {
        var item = drag.target;
        item.setX(item.getX() + (e.clientX - drag.offsetx));
        drag.offsetx = e.clientX;
        item.setY(item.getY() + (e.clientY - drag.offsety));
        drag.offsety = e.clientY;
    }
};
window.onload = () => {
    //sample1();
    sample2();
    sample3();
    //sample4();
    sample5();
};
//# sourceMappingURL=intro.js.map