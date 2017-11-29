﻿
import SVGTable = GraphTableSVG.SVGTable;
import SVGToVBA = GraphTableSVG.SVGToVBA;
import Graph = GraphTableSVG.Graph;

/*
class VirtualCell {
    pos_x: number;
    pos_y: number;
    parent: Table;
}
*/
var table: SVGTable = null;
var svgBox: HTMLElement;

function getInputText(): string {
    var textbox: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById(`inputtext_itb`);
    return textbox.value;
}



function createSuffixArrayTable() {
    var text: string = getInputText();
    var sa: number[] = StringModule.computeSuffixArray(text);
    console.log(text);
    svgBox.innerHTML = "";
    table = new SVGTable(svgBox, 2, sa.length + 1);

    table.cells[0][0].svgText.textContent = "SA";
    table.cells[0][1].svgText.textContent = "Text";
    table.cells[0][1].svgText.style.textAnchor = "left";
    table.cells[0][0].width = 0;
    table.cells[0][0].height = 0;
    table.cells[0][1].width = 0;
    table.cells[0][1].height = 0;

    for (var i = 0; i < sa.length; i++) {
        var suffix = text.substr(sa[i]);
        table.cells[i+1][0].svgText.textContent = sa[i].toString();
        table.cells[i + 1][1].svgText.textContent = suffix;
        table.cells[i + 1][1].svgText.style.textAnchor = "left";
        table.cells[i + 1][0].width = 0;
        table.cells[i + 1][0].height = 0;
        table.cells[i + 1][1].width = 0;
        table.cells[i + 1][1].height = 0;

    }
    table.resize();
    
}
function leftPadding(str: string, length: number, _leftPadding: string) : string {
    while (str.length - length < 0) {
        str = _leftPadding + str;
    }
    return str;
}
function createLZ77WSRTable() {
    var text: string = getInputText();
    var result = StringModule.LZ77WithSelfReference(text);

    svgBox.innerHTML = "";
    table = new SVGTable(svgBox, text.length, result.length + 2);

    table.cellArray.forEach(function (x, i, arr) { x.width = 0; x.height = 0 });
    table.borders.forEach(function (x, i, arr) { x.style.visibility = "hidden"; });

    for (var i = 0; i < text.length; i++) {
        table.cells[0][i].svgText.textContent = leftPadding(i.toString(), 2, "_");
        table.cells[1][i].svgText.textContent = text[i];
    }
    for (var y = 0; y < table.height; y++) {
        for (var x = 0; x < table.width; x++) {
            if (y >= 2) {
                var cell = table.cells[y][x];
                cell.svgText.style.fontSize = "8pt";
            }
        }
    }

    var x = 0;
    var rows = table.rows;
    for (var i = 0; i < result.length; i++) {
        rows[2 + i].height = 10;
        if (typeof result[i] == "string") {
            table.cells[2 + i][x].svgBackground.style.fill = "red";
            x++;
        } else {
            var startPos = <number>result[i][0];
            var length = result[i][1];
            for (var p = 0; p < length; p++) {
                table.cells[2 + i][x].svgBackground.style.fill = "red";
                var bottomLine = table.cells[2 + i][startPos + p].bottomLine;
                bottomLine.style.visibility = "visible";
                bottomLine.style.fill = "blue";

                x++;
            }
        }
    }
    table.resize();

}
function createSuffixTrie() {
    svgBox = document.getElementById('svgbox');
    var text = getInputText();
    var graph = GraphTableSVG.OrderedOutcomingEdgesGraph.create(svgBox);
    var trie = TreeFunctions.createTrie(text);
    TreeFunctions.translate(trie, graph);
    /*
    var root = graph.getRoot();
    root.x = 50;
    root.y = 50;
    */
    graph.update();
}

function createTestGraph() {
    svgBox = document.getElementById('svgbox');
    var graph = Graph.create(svgBox);
    var node1 = GraphTableSVG.CircleVertex.create(graph);
    var node2 = GraphTableSVG.CircleVertex.create(graph);
    node1.svgGroup.setX(100)
    node1.svgGroup.setY(200)

    node2.svgGroup.setX(260);
    node2.svgGroup.setY(100);
    var edge1 = GraphTableSVG.LineEdge.create(graph, node1, node2);
    edge1.beginConnectType = GraphTableSVG.ConnecterPositionType.RightUp;
    edge1.endConnectType = GraphTableSVG.ConnecterPositionType.LeftUp;

    graph.edges.push(edge1);

    console.log(node2.svgGroup.transform.baseVal.getItem(0).matrix.f);

    graph.nodes.push(node1);
    graph.nodes.push(node2);
    graph.update();
}

window.onload = () => {
    
    //createTestGraph();
    /*
    svgBox = document.getElementById('svgbox');
    var el = document.getElementById('content');
    table = new SVGTable(svgBox, 5, 5);
    */

    //table.cells[0][0].svgText.textContent = "hogehgoehg<tbreak/>oheoghoeghoe";
    
};


function createCode() {
    var cnt = <HTMLInputElement>document.getElementById("codeBox");
    cnt.value = SVGToVBA.createTable(table);
    openModal("macro-modal");
}
function copyAndClose() {
    var cnt = <HTMLInputElement>document.getElementById("codeBox");
    cnt.select();
    window.document.execCommand('copy');
    alert('クリップボードにコピーしました。');
    closeModal("macro-modal");
}

