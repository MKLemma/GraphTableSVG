"use strict";
// tslint:disable-next-line: no-namespace
var GraphTableSVG;
(function (GraphTableSVG) {
    /**
     * 色に関する名前空間です。
     */
    let Color;
    (function (Color) {
        const colorNameArray = new Array("aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen");
        let colorDic;
        // redの16進数の配列
        const rValue = new Array("F0", "FA", "00", "7F", "F0", "F5", "FF", "00", "FF", "00", "8A", "A5", "DE", "5F", "7F", "D2", "FF", "64", "FF", "DC", "00", "00", "00", "B8", "A9", "00", "BD", "8B", "55", "FF", "99", "8B", "E9", "8F", "48", "2F", "00", "94", "FF", "00", "69", "1E", "B2", "FF", "22", "FF", "DC", "F8", "FF", "DA", "80", "00", "AD", "F0", "FF", "CD", "4B", "FF", "F0", "E6", "FF", "7C", "FF", "AD", "F0", "E0", "FA", "90", "D3", "FF", "FF", "20", "87", "77", "B0", "FF", "00", "32", "FA", "FF", "80", "66", "00", "BA", "93", "3C", "7B", "00", "48", "C7", "19", "F5", "FF", "FF", "FF", "00", "FD", "80", "6B", "FF", "FF", "DA", "EE", "98", "AF", "DB", "FF", "FF", "CD", "FF", "DD", "B0", "80", "FF", "BC", "41", "8B", "FA", "F4", "2E", "FF", "A0", "C0", "87", "6A", "70", "FF", "00", "46", "D2", "00", "D8", "FF", "40", "EE", "F5", "FF", "F5", "FF", "9A");
        // greenの16進数の配列
        const gValue = new Array("F8", "EB", "FF", "FF", "FF", "F5", "E4", "00", "EB", "00", "2B", "2A", "B8", "9E", "FF", "69", "7F", "95", "F8", "14", "FF", "00", "8B", "86", "A9", "64", "B7", "00", "6B", "8C", "32", "00", "96", "BC", "3D", "4F", "CE", "00", "14", "BF", "69", "90", "22", "FA", "8B", "00", "DC", "F8", "D7", "A5", "80", "80", "FF", "FF", "69", "5C", "00", "FF", "E6", "E6", "F0", "FC", "FA", "D8", "80", "FF", "FA", "EE", "D3", "B6", "A0", "B2", "CE", "88", "C4", "FF", "FF", "CD", "F0", "00", "00", "CD", "00", "55", "70", "B3", "68", "FA", "D1", "15", "19", "FF", "E4", "E4", "DE", "00", "F5", "80", "8E", "A5", "45", "70", "E8", "FB", "EE", "70", "EF", "DA", "85", "C0", "A0", "E0", "00", "00", "8F", "69", "45", "80", "A4", "8B", "F5", "52", "C0", "CE", "5A", "80", "FA", "FF", "82", "B4", "80", "BF", "63", "E0", "82", "DE", "FF", "F5", "FF", "CD");
        // blueの16進数の配列
        const bValue = new Array("FF", "D7", "FF", "D4", "FF", "DC", "C4", "00", "CD", "FF", "E2", "2A", "87", "A0", "00", "1E", "50", "ED", "DC", "3C", "FF", "8B", "8B", "0B", "A9", "00", "6B", "8B", "2F", "00", "CC", "00", "7A", "8F", "8B", "4F", "D1", "D3", "93", "FF", "69", "FF", "22", "F0", "22", "FF", "DC", "FF", "00", "20", "80", "00", "2F", "F0", "B4", "5C", "82", "F0", "8C", "FA", "F5", "00", "CD", "E6", "80", "FF", "D2", "90", "D3", "C1", "7A", "AA", "FA", "99", "DE", "E0", "00", "32", "E6", "FF", "00", "AA", "CD", "D3", "DB", "71", "EE", "9A", "CC", "85", "70", "FA", "E1", "B5", "AD", "80", "E6", "00", "23", "00", "00", "D6", "AA", "98", "EE", "93", "D5", "B9", "3F", "CB", "DD", "E6", "80", "00", "8F", "E1", "13", "72", "60", "57", "EE", "2D", "C0", "EB", "CD", "90", "FA", "7F", "B4", "8C", "80", "D8", "47", "D0", "EE", "B3", "FF", "F5", "00", "32");
        /**
         * 色名から16進コードを生成します。
         * @param colorName
         */
        function createHexCodeFromColorName(colorName) {
            if (!colorDic) {
                colorDic = {};
                for (let i = 0; i < colorNameArray.length; i++) {
                    colorDic[colorNameArray[i]] = i;
                }
            }
            if (colorName in colorDic) {
                const i = colorDic[colorName];
                return rValue[i] + gValue[i] + bValue[i];
            }
            else {
                return colorName;
            }
        }
        Color.createHexCodeFromColorName = createHexCodeFromColorName;
        /**
         * 色名を16進表現に変換します。
         * @param colorName
         */
        function createHexFromColorName(colorName) {
            if (!colorDic) {
                colorDic = {};
                for (let i = 0; i < colorNameArray.length; i++) {
                    colorDic[colorNameArray[i]] = i;
                }
            }
            if (colorName in colorDic) {
                const i = colorDic[colorName];
                // return r_value[i] + g_value[i] + b_value[i];
                return { r: parseInt(rValue[i], 16), g: parseInt(gValue[i], 16), b: parseInt(bValue[i], 16) };
            }
            else {
                return null;
            }
        }
        Color.createHexFromColorName = createHexFromColorName;
        /**
         * 色名をRGBコードに変換します。
         * @param colorName
         */
        function createRGBCodeFromColorName(colorName) {
            colorName = createHexCodeFromColorName(colorName);
            if (colorName.substr(0, 3) === "rgb") {
                return colorName;
            }
            else {
                if (colorNameArray.length === 6) {
                    const r = colorName.substr(0, 2);
                    const g = colorName.substr(2, 2);
                    const b = colorName.substr(4, 2);
                    return `rgb(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)})`;
                }
                else {
                    return `rgb(${80}, ${80}, ${80})`;
                }
            }
        }
        Color.createRGBCodeFromColorName = createRGBCodeFromColorName;
        /**
         * 色名をRGB表現に変換します。
         * @param str
         */
        function createRGBFromColorName(str) {
            const v = createHexFromColorName(str);
            const def = { r: 80, g: 80, b: 80 };
            if (v != null) {
                return v;
            }
            else {
                if (str.substr(0, 3) === "rgb") {
                    str = str.replace("rgb(", "");
                    str = str.replace(")", "");
                    const values = str.split(",");
                    if (values.length === 3) {
                        return { b: parseInt(values[2], undefined), g: parseInt(values[1], undefined),
                            r: parseInt(values[0], undefined) };
                    }
                    else {
                        return def;
                    }
                }
                else if (str.length === 6) {
                    const r = str.substr(0, 2);
                    const g = str.substr(2, 2);
                    const b = str.substr(4, 2);
                    return { g: parseInt(g, undefined), b: parseInt(b, undefined), r: parseInt(r, undefined) };
                }
                else {
                    return def;
                }
            }
        }
        Color.createRGBFromColorName = createRGBFromColorName;
    })(Color = GraphTableSVG.Color || (GraphTableSVG.Color = {}));
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    let Common;
    (function (Common) {
        /**
         * グラフや表を消去します。
         * @param svg
         * @param items
         */
        function clearGraphTables(svg, items) {
            for (let i = 0; i < items.length; i++) {
                var item = items[i];
                if (item instanceof GraphTableSVG.GGraph) {
                    item.removeGraph(svg);
                }
                else if (item instanceof GraphTableSVG.GTable) {
                    item.removeTable(svg);
                }
            }
        }
        Common.clearGraphTables = clearGraphTables;
        /**
         * 入力要素がdocument.bodyの孫であるときに限りTrueを返します。
         * @param node 判定する要素
         */
        function IsDescendantOfBody(node) {
            const parent = node.parentNode;
            if (parent == null) {
                return false;
            }
            else if (parent == document.body) {
                return true;
            }
            else {
                return Common.IsDescendantOfBody(parent);
            }
        }
        Common.IsDescendantOfBody = IsDescendantOfBody;
        /**
         * 領域を取得します。
         * @param items
         */
        function getRegion(items) {
            const rects = items.map((v) => {
                if (v instanceof GraphTableSVG.GObject) {
                    return v.getRegion();
                }
                else if (v instanceof SVGPathElement || v instanceof SVGTextElement) {
                    const rect = v.getBBox();
                    return new GraphTableSVG.Rectangle(rect.x, rect.y, rect.width, rect.height);
                }
                else {
                    return new GraphTableSVG.Rectangle();
                }
            });
            if (rects.length > 0) {
                return GraphTableSVG.Rectangle.merge(rects);
            }
            else {
                return new GraphTableSVG.Rectangle();
            }
        }
        Common.getRegion = getRegion;
        /**
         * 指定された文字数になるまで指定された文字を左に加えます
         * @param text 文字を追加する文字列
         * @param length 計算後のtextの文字数
         * @param leftChar 左に追加する文字
         */
        function paddingLeft(text, length, leftChar) {
            while (text.length < length) {
                text = leftChar + text;
            }
            return text;
        }
        Common.paddingLeft = paddingLeft;
        const CSSName = "___GraphTableCSS";
        let createdGraphTableCSS = false;
        function setGraphTableCSS() {
            if (createdGraphTableCSS)
                return;
            const item = document.head.getElementsByClassName(CSSName);
            if (item.length > 0) {
                document.head.removeChild(item[0]);
            }
            var blankStyle = document.createElement('style');
            blankStyle.innerHTML = Common.createCSS();
            blankStyle.type = "text/css";
            blankStyle.setAttribute("class", CSSName);
            const head = document.getElementsByTagName('head');
            const fstItem = head.item(0).firstChild;
            if (fstItem == null) {
                head.item(0).appendChild(blankStyle);
            }
            else {
                head.item(0).insertBefore(blankStyle, fstItem);
            }
            createdGraphTableCSS = true;
        }
        Common.setGraphTableCSS = setGraphTableCSS;
        //export function setCellCSS(){
        //}
        function getGraphTableCSS() {
            const item = document.getElementById(CSSName);
            return item;
        }
        Common.getGraphTableCSS = getGraphTableCSS;
        /**
         * 単位付きの値を値部分と単位部分に分割します。
         * @param text 単位付きの値
         */
        function parseUnit(text) {
            let str1 = "", str2 = "";
            for (let i = 0; i < text.length; i++) {
                if (isNaN(text[i]) && text[i] != ".") {
                    str2 += text[i];
                }
                else {
                    str1 += text[i];
                }
            }
            return [Number(str1), str2];
        }
        Common.parseUnit = parseUnit;
        /**
         * 入力値をピクセル単位の値に変換します。
         * @param value
         */
        function toPX(value) {
            const [val, unit] = parseUnit(value);
            if (unit == "px") {
                return val;
            }
            else if (unit == "em") {
                return val * 16;
            }
            else if (unit == "pt") {
                return (val / 72) * 96;
            }
            else {
                return val;
            }
        }
        Common.toPX = toPX;
        /**
         * 二次ベジエ曲線上の座標を計算します。
         * @param param0 [x,y] ベジエ曲線の開始座標
         * @param param1 [x,y] ベジエ曲線の制御点
         * @param param2 [x,y] ベジエ曲線の終了座標
         * @param t 曲線上の位置 0が曲線の開始座標で1が曲線の終了座標、0.5が曲線の中間点を表します
         * @returns 指定された座標
         */
        function bezierLocation([px1, py1], [px2, py2], [px3, py3], t) {
            const x = px1 * (1 - t) * (1 - t) + 2 * px2 * t * (1 - t) + px3 * t * t;
            const y = py1 * (1 - t) * (1 - t) + 2 * py2 * t * (1 - t) + py3 * t * t;
            return [x, y];
        }
        Common.bezierLocation = bezierLocation;
    })(Common = GraphTableSVG.Common || (GraphTableSVG.Common = {}));
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    /**
    ノードの並び順です。
    */
    let VertexOrder;
    (function (VertexOrder) {
        VertexOrder[VertexOrder["Preorder"] = 0] = "Preorder";
        VertexOrder[VertexOrder["Postorder"] = 1] = "Postorder";
    })(VertexOrder = GraphTableSVG.VertexOrder || (GraphTableSVG.VertexOrder = {}));
    let ShapeObjectType;
    (function (ShapeObjectType) {
        ShapeObjectType.Callout = "g-callout";
        ShapeObjectType.ArrowCallout = "g-arrow-callout";
        ShapeObjectType.Ellipse = "g-ellipse";
        ShapeObjectType.Rect = "g-rect";
        ShapeObjectType.Edge = "g-edge";
        ShapeObjectType.Graph = "g-graph";
        ShapeObjectType.Table = "g-table";
        ShapeObjectType.Object = "g-object";
        ShapeObjectType.PathTextBox = "g-path-textbox";
        ShapeObjectType.RectButton = "g-rect-button";
        const typeDic = {
            "g-callout": true,
            "g-arrow-callout": true,
            "g-ellipse": true,
            "g-rect": true,
            "g-edge": true,
            "g-graph": true,
            "g-table": true,
            "g-object": true,
            "g-path-textbox": true,
            "g-rect-button": true
        };
        const customTypeDic = {
            "row": true,
            "cell": true,
            "t": true
        };
        function toShapeObjectType(value) {
            if (value in typeDic) {
                return value;
            }
            else {
                return null;
            }
        }
        ShapeObjectType.toShapeObjectType = toShapeObjectType;
        function toShapeObjectTypeOrCustomTag(value) {
            const value1 = toShapeObjectType(value);
            if (value1 != null) {
                return value1;
            }
            else {
                if (value in customTypeDic) {
                    return value;
                }
                else {
                    return null;
                }
            }
        }
        ShapeObjectType.toShapeObjectTypeOrCustomTag = toShapeObjectTypeOrCustomTag;
    })(ShapeObjectType = GraphTableSVG.ShapeObjectType || (GraphTableSVG.ShapeObjectType = {}));
    let PathTextAlighnment;
    (function (PathTextAlighnment) {
        PathTextAlighnment.regularInterval = "regularInterval";
        PathTextAlighnment.begin = "begin";
        PathTextAlighnment.end = "end";
        PathTextAlighnment.center = "center";
        const typeDic = {
            "none": "none",
            "begin": "begin",
            "end": "end",
            "center": "center",
            "regularInterval": "regularInterval",
        };
        function toPathTextAlighnment(value) {
            if (value in typeDic) {
                return typeDic[value];
            }
            else {
                return "none";
            }
        }
        PathTextAlighnment.toPathTextAlighnment = toPathTextAlighnment;
    })(PathTextAlighnment = GraphTableSVG.PathTextAlighnment || (GraphTableSVG.PathTextAlighnment = {}));
    let msoDashStyle;
    (function (msoDashStyle) {
        //export const styleName : string = "--mso-dash-style"
        msoDashStyle.msoLineDash = "msoLineDash";
        msoDashStyle.msoLineDashDot = "msoLineDashDot";
        msoDashStyle.msoLineDashDotDot = "msoLineDashDotDot";
        //export const msoLineDashStyleMixed: msoDashStyle = "msoLineDashStyleMixed"
        msoDashStyle.msoLineLongDash = "msoLineLongDash";
        msoDashStyle.msoLineLongDashDot = "msoLineLongDashDot";
        msoDashStyle.msoLineRoundDot = "msoLineRoundDot";
        msoDashStyle.msoLineSolid = "msoLineSolid";
        msoDashStyle.msoLineSquareDot = "msoLineSquareDot";
        msoDashStyle.dashArrayDic = {
            "msoLineDash": [4, 3],
            "msoLineDashDot": [4, 3, 1, 3],
            "msoLineDashDotDot": [3, 1, 1, 1, 1, 1],
            //"msoLineDashStyleMixed" : "6,3",
            "msoLineLongDash": [9, 3],
            "msoLineLongDashDot": [9, 3, 1, 3],
            "msoLineRoundDot": [0.25, 2],
            "msoLineSolid": [],
            "msoLineSquareDot": [1, 1]
        };
        const lineCapDic = {
            "msoLineDash": "butt",
            "msoLineDashDot": "butt",
            "msoLineDashDotDot": "butt",
            //"msoLineDashStyleMixed" : "butt",
            "msoLineLongDash": "butt",
            "msoLineLongDashDot": "butt",
            "msoLineRoundDot": "round",
            "msoLineSolid": "butt",
            "msoLineSquareDot": "butt"
        };
        const typeDic = {
            "msoLineDash": msoDashStyle.msoLineDash,
            "msoLineDashDot": msoDashStyle.msoLineDashDot,
            "msoLineDashDotDot": msoDashStyle.msoLineDashDotDot,
            //"msoLineDashStyleMixed" : msoDashStyle.msoLineDashStyleMixed,
            "msoLineLongDash": msoDashStyle.msoLineLongDash,
            "msoLineLongDashDot": msoDashStyle.msoLineLongDashDot,
            "msoLineRoundDot": msoDashStyle.msoLineRoundDot,
            "msoLineSquareDot": msoDashStyle.msoLineSquareDot,
            "msoLineSolid": msoDashStyle.msoLineSolid
        };
        function toMSODashStyle(value) {
            if (value in typeDic) {
                return typeDic[value];
            }
            else {
                return msoDashStyle.msoLineSolid;
            }
        }
        msoDashStyle.toMSODashStyle = toMSODashStyle;
        function computeDashArray(type, width) {
            const r = [];
            for (let i = 0; i < msoDashStyle.dashArrayDic[type].length; i++) {
                r.push(msoDashStyle.dashArrayDic[type][i] * width);
            }
            return r.join(",");
        }
        /*
        function setStyle(svgLine: SVGLineElement | SVGPathElement | SVGElement, type: string): void {
            if (toMSODashStyle(type) != null) {
                const width = <number>svgLine.getPropertyStyleNumberValue("stroke-width", 2);
                svgLine.setPropertyStyleValue("stroke-dasharray", computeDashArray(toMSODashStyle(type), width));
                svgLine.setPropertyStyleValue("stroke-linecap", lineCapDic[type]);
                svgLine.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.msoDashStyleName, type);
            } else {

            }
        }
        */
        function setCpmoutedDashArray(svgLine) {
            const type = svgLine.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.msoDashStyleName);
            if (type == null) {
            }
            else if (toMSODashStyle(type) != null) {
                const width = svgLine.getPropertyStyleNumberValue("stroke-width", 2);
                svgLine.setPropertyStyleValue("stroke-dasharray", computeDashArray(toMSODashStyle(type), width));
                svgLine.setPropertyStyleValue("stroke-linecap", lineCapDic[type]);
            }
        }
        msoDashStyle.setCpmoutedDashArray = setCpmoutedDashArray;
        function getLineType(svgLine) {
            const typeName = svgLine.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.msoDashStyleName);
            if (typeName != null) {
                const type = toMSODashStyle(typeName);
                if (type != null) {
                    return type;
                }
            }
            const dashArray = svgLine.getPropertyStyleValue("stroke-dasharray");
            if (dashArray != null) {
                return msoDashStyle.msoLineDash;
            }
            else {
                return msoDashStyle.msoLineSolid;
            }
        }
        msoDashStyle.getLineType = getLineType;
    })(msoDashStyle = GraphTableSVG.msoDashStyle || (GraphTableSVG.msoDashStyle = {}));
    let Direction;
    (function (Direction) {
        function toDirection(value) {
            if (value == "up") {
                return "up";
            }
            else if (value == "left") {
                return "left";
            }
            else if (value == "right") {
                return "right";
            }
            else {
                return "down";
            }
        }
        Direction.toDirection = toDirection;
    })(Direction = GraphTableSVG.Direction || (GraphTableSVG.Direction = {}));
    let ConnectorPosition;
    (function (ConnectorPosition) {
        ConnectorPosition.Top = "top";
        ConnectorPosition.TopLeft = "topleft";
        ConnectorPosition.Left = "left";
        ConnectorPosition.BottomLeft = "bottomleft";
        ConnectorPosition.Bottom = "bottom";
        ConnectorPosition.BottomRight = "bottomright";
        ConnectorPosition.Right = "right";
        ConnectorPosition.TopRight = "topright";
        ConnectorPosition.Auto = "auto";
        function ToConnectorPosition(str) {
            if (str == null) {
                return ConnectorPosition.Auto;
            }
            else {
                return str;
                /*
                switch (str) {
                    case "top": return ConnectorPosition.Top;
                    case "topleft": return ConnectorPosition.TopLeft;
                    case "left": return ConnectorPosition.Left;
                    case "bottomleft": return ConnectorPosition.BottomLeft;
                    case "bottom": return ConnectorPosition.Bottom;
                    case "bottomright": return ConnectorPosition.BottomRight;
                    case "right": return ConnectorPosition.Right;
                    case "topright": return ConnectorPosition.TopRight;
                    case "auto": return ConnectorPosition.Auto;
                    default: return ConnectorPosition.Auto;
                }
                */
            }
        }
        ConnectorPosition.ToConnectorPosition = ToConnectorPosition;
        function ToVBAConnectorPosition(shapeType, str) {
            if (shapeType == "circle") {
                switch (str) {
                    case "top": return 1;
                    case "topleft": return 2;
                    case "left": return 3;
                    case "bottomleft": return 4;
                    case "bottom": return 5;
                    case "bottomright": return 6;
                    case "right": return 7;
                    case "topright": return 8;
                    case "auto": return 9;
                    default: return 1;
                }
            }
            else if (shapeType == "rectangle") {
                switch (str) {
                    case "top": return 1;
                    case "left": return 2;
                    case "bottom": return 3;
                    case "right": return 4;
                    case "auto": return 9;
                    default: return 1;
                }
            }
            else {
                return 1;
            }
        }
        ConnectorPosition.ToVBAConnectorPosition = ToVBAConnectorPosition;
        function ToVBAConnectorPosition2(shapeType, str) {
            if (shapeType == "msoShapeOval") {
                switch (str) {
                    case "top": return 1;
                    case "topleft": return 2;
                    case "left": return 3;
                    case "bottomleft": return 4;
                    case "bottom": return 5;
                    case "bottomright": return 6;
                    case "right": return 7;
                    case "topright": return 8;
                    case "auto": return 9;
                    default: return 1;
                }
            }
            else if (shapeType == "msoShapeRectangle") {
                switch (str) {
                    case "top": return 1;
                    case "left": return 2;
                    case "bottom": return 3;
                    case "right": return 4;
                    case "auto": return 9;
                    default: return 1;
                }
            }
            else {
                return 1;
            }
        }
        ConnectorPosition.ToVBAConnectorPosition2 = ToVBAConnectorPosition2;
    })(ConnectorPosition = GraphTableSVG.ConnectorPosition || (GraphTableSVG.ConnectorPosition = {}));
    let VerticalAnchor;
    (function (VerticalAnchor) {
        /**
         * 上を表します。
         */
        VerticalAnchor.Top = "top";
        /**
         * 真ん中を表します。
         */
        VerticalAnchor.Middle = "middle";
        /**
         * 底を表します。
         */
        VerticalAnchor.Bottom = "bottom";
        function toVerticalAnchor(value) {
            if (value == "top") {
                return "top";
            }
            else if (value == "bottom") {
                return "bottom";
            }
            else {
                return "middle";
            }
        }
        VerticalAnchor.toVerticalAnchor = toVerticalAnchor;
    })(VerticalAnchor = GraphTableSVG.VerticalAnchor || (GraphTableSVG.VerticalAnchor = {}));
    let HorizontalAnchor;
    (function (HorizontalAnchor) {
        /**
         * 左を表します。
         */
        HorizontalAnchor.Left = "left";
        /**
         * 中央を表します。
         */
        HorizontalAnchor.Center = "center";
        /**
        * 右を表します。
        */
        HorizontalAnchor.Right = "right";
        function toHorizontalAnchor(value) {
            if (value == "left") {
                return "left";
            }
            else if (value == "right") {
                return "right";
            }
            else {
                return "center";
            }
        }
        HorizontalAnchor.toHorizontalAnchor = toHorizontalAnchor;
    })(HorizontalAnchor = GraphTableSVG.HorizontalAnchor || (GraphTableSVG.HorizontalAnchor = {}));
    function parsePXString(item) {
        if (item == null) {
            return 0;
        }
        else {
            if (item.length == 0) {
                return 0;
            }
            else {
                return parseInt(item);
            }
        }
    }
    GraphTableSVG.parsePXString = parsePXString;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    let GUI;
    (function (GUI) {
        function showMacroModal(id) {
            if (id instanceof GraphTableSVG.GObject) {
                const p = GraphTableSVG.SVGToVBA.create(id);
                createMacroModal(p);
            }
            else {
            }
        }
        GUI.showMacroModal = showMacroModal;
        /**
         * マクロ用のモーダルを画面に生成します。
         * @param vbaCode モーダルに表示する貼り付けるVBAマクロ
         */
        function createMacroModal(vbaCode) {
            if (vbaCode instanceof GraphTableSVG.GObject) {
                const p = GraphTableSVG.SVGToVBA.create(vbaCode);
                createMacroModal(p);
            }
            else {
                const mainDiv = document.createElement("div");
                mainDiv.id = "macro-modal";
                mainDiv.innerHTML = `
    使い方（Powerpoint 2013）<br>
        新規ファイル<br>
        →表示→マクロ→作成<br>
        →生成したコードをユーザーフォームに貼り付ける<br>
        →F5 or ユーザーフォームを実行<br>
        →木が貼られたスライドが１ページ目に挿入される<br>
        ※サイズの大きすぎる木はマクロ実行時にエラーが出ます。
        <br>
        <textarea id="codeBox" rows="8" cols="100" style="overflow:auto;"></textarea>
        <button class="btn" onClick="GraphTableSVG.GUI.copyAndCloseMacroModal();">
            クリップボードにコピー
        </button>
    `;
                mainDiv.style.position = "fixed";
                mainDiv.style.zIndex = "16";
                mainDiv.style.width = "900px";
                mainDiv.style.height = "400px";
                mainDiv.style.left = `${((window.outerWidth - parseInt(mainDiv.style.width)) / 2)}px`;
                mainDiv.style.top = `${((window.outerHeight - parseInt(mainDiv.style.height)) / 2)}px`;
                mainDiv.style.display = "inline";
                mainDiv.style.backgroundColor = "#ffffff";
                document.body.appendChild(mainDiv);
                const cnt = document.getElementById("codeBox");
                cnt.value = vbaCode;
                const bgDiv = document.createElement("div");
                document.body.appendChild(bgDiv);
                bgDiv.style.width = "100%";
                bgDiv.style.height = "100%";
                bgDiv.style.backgroundColor = "rgba(0,0,0,0.5)";
                bgDiv.style.position = "fixed";
                bgDiv.style.top = "0";
                bgDiv.style.left = "0";
                bgDiv.id = "modal-bg";
                bgDiv.style.zIndex = "5";
                bgDiv.style.display = "inline";
                bgDiv.onclick = removeMacroModal;
                //$("body").append('<div id="modal-bg" style="z-index:5"></div>');
            }
        }
        GUI.createMacroModal = createMacroModal;
        /**
         * マクロ用モーダルを取り除きます。
         */
        function removeMacroModal() {
            const div1 = document.getElementById("macro-modal");
            const div2 = document.getElementById("modal-bg");
            if (div1 != null)
                document.body.removeChild(div1);
            if (div2 != null)
                document.body.removeChild(div2);
        }
        GUI.removeMacroModal = removeMacroModal;
        /**
         * マクロ用モーダルのテキストをクリップボードにコピーしてマクロ用モーダルを取り除きます。
         */
        function copyAndCloseMacroModal() {
            const cnt = document.getElementById("codeBox");
            cnt.select();
            window.document.execCommand('copy');
            alert('クリップボードにコピーしました。');
            removeMacroModal();
        }
        GUI.copyAndCloseMacroModal = copyAndCloseMacroModal;
        function setSVGBoxSize(box, item1, item2) {
            if (item1 instanceof GraphTableSVG.Rectangle) {
                if (item2 instanceof GraphTableSVG.Padding) {
                    const w = item1.right + item2.left + item2.right;
                    const h = item1.bottom + item2.top + item2.bottom;
                    setSVGBoxSize(box, w, h);
                }
                else {
                    throw new Error();
                }
            }
            else {
                if (item2 instanceof GraphTableSVG.Padding) {
                    throw new Error();
                }
                else {
                    const width = `${item1}px`;
                    const height = `${item2}px`;
                    if (box.style.width != width || box.style.height != height) {
                        box.style.width = width;
                        box.style.height = height;
                        box.setAttribute("width", width);
                        box.setAttribute("height", height);
                        box.setAttribute(`viewBox`, `0 0 ${item1} ${item2}`);
                    }
                }
            }
        }
        GUI.setSVGBoxSize = setSVGBoxSize;
        /**
         * URLのパラメータを表す連想配列を生成します。
         */
        function getURLParameters() {
            const arg = {};
            const pair = location.search.substring(1).split('&');
            for (let i = 0; pair[i]; i++) {
                const kv = pair[i].split('=');
                arg[kv[0]] = kv[1];
            }
            return arg;
        }
        GUI.getURLParameters = getURLParameters;
        /**
         * URLのパラメータをパースしてHTML内の適切な要素に代入します。
         */
        function setURLParametersToHTMLElements() {
            const parameters = getURLParameters();
            Object.keys(parameters).forEach((key) => {
                const val = parameters[key]; // this は obj
                const element = document.getElementById(key);
                if (element != null) {
                    if (element instanceof HTMLTextAreaElement) {
                        element.value = val;
                    }
                }
            }, parameters);
        }
        GUI.setURLParametersToHTMLElements = setURLParametersToHTMLElements;
        /**
         * HTMLTextAreaElementのテキストを取得します。
         * @param elementID HTMLTextAreaElementのID
         */
        function getInputText(elementID) {
            const textbox = document.getElementById(elementID);
            return textbox.value;
        }
        GUI.getInputText = getInputText;
        /**
         * HTMLTextAreaElementを取得します。
         * @param id HTMLTextAreaElementのID
         */
        function getNonNullElementById(id) {
            const tmp = document.getElementById(id);
            if (tmp == null) {
                throw Error("Null Error");
            }
            else {
                return tmp;
            }
        }
        GUI.getNonNullElementById = getNonNullElementById;
        function getClientRectangle() {
            const x = window.pageXOffset;
            const y = window.pageYOffset;
            const width = window.innerWidth;
            const height = window.innerHeight;
            return new GraphTableSVG.Rectangle(x, y, width, height);
        }
        GUI.getClientRectangle = getClientRectangle;
    })(GUI = GraphTableSVG.GUI || (GraphTableSVG.GUI = {}));
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    let GUI;
    (function (GUI) {
        /**
         *
         * @param svgBox
         * @param sizeFunc
         * @param padding
         */
        function observeSVGBox(svgBox, sizeFunc, padding = new GraphTableSVG.Padding(5, 5, 5, 5)) {
            let _observer;
            let observeFunction = (x) => {
                let b = false;
                for (let i = 0; i < x.length; i++) {
                    const item = x[i];
                    //console.log(item.target);
                    if (svgBox != item.target) {
                        b = true;
                    }
                }
                if (b)
                    GraphTableSVG.GUI.setSVGBoxSize(svgBox, sizeFunc(), padding);
            };
            _observer = new MutationObserver(observeFunction);
            const option = {
                subtree: true, attributes: true
            };
            _observer.observe(svgBox, option);
        }
        GUI.observeSVGBox = observeSVGBox;
        function autostrech(svgBox, objects) {
            objects.forEach((v) => {
                if (v instanceof GraphTableSVG.GObject) {
                    v.update();
                }
            });
            const rect = GraphTableSVG.Common.getRegion(objects);
            GraphTableSVG.GUI.setSVGBoxSize(svgBox, rect, new GraphTableSVG.Padding(5, 5, 5, 5));
        }
        GUI.autostrech = autostrech;
        function autostretchObserve(svgBox, objects) {
            throw "NotImplementedException";
        }
        GUI.autostretchObserve = autostretchObserve;
        let dic = [];
        let createdObserveSVGSVGTimer = false;
        function resizeSVGSVG(svgBox, padding) {
            //GraphTableSVG.GUI.setSVGBoxSize(svgBox, new Rectangle(0,0,1000,1000), padding);
            const rect = GraphTableSVG.SVG.getRegion2(svgBox);
            if (rect.width == 0)
                rect.width = 1;
            if (rect.height == 0)
                rect.height = 1;
            GraphTableSVG.GUI.setSVGBoxSize(svgBox, rect, padding);
        }
        function observeSVGSVG(svgBox, padding = new GraphTableSVG.Padding(0, 0, 0, 0)) {
            if (isObserved(svgBox)) {
                return;
            }
            let _observer;
            let observeFunction = (x) => {
                const gShrink = svgBox.gtGetAttributeBooleanWithUndefined("g-shrink");
                let b = false;
                for (let i = 0; i < x.length; i++) {
                    const item = x[i];
                    if (svgBox != item.target) {
                        b = true;
                    }
                }
                if (gShrink === true && b) {
                    resizeSVGSVG(svgBox, padding);
                }
            };
            _observer = new MutationObserver(observeFunction);
            const option = {
                subtree: true, attributes: true
            };
            _observer.observe(svgBox, option);
            dic.push({ svgsvg: svgBox, visible: false, padding: padding });
            if (!createdObserveSVGSVGTimer) {
                createdObserveSVGSVGTimer = true;
                setTimeout(observeSVGSVGTimer, timerInterval);
            }
        }
        GUI.observeSVGSVG = observeSVGSVG;
        function isObserved(svgBox) {
            for (let i = 0; i < dic.length; i++) {
                if (dic[i].svgsvg === svgBox) {
                    return true;
                }
            }
            return false;
        }
        GUI.isObserved = isObserved;
        function observeSVGSVGTimer() {
            dic.forEach((v, i) => {
                const nowVisible = !GraphTableSVG.SVG.isSVGSVGHidden(v.svgsvg);
                //const nowVisible = (!SVG.isSVGSVGHidden(v.svgsvg) ) && isInsideElement(v.svgsvg);
                if (v.visible) {
                    if (!nowVisible) {
                        v.visible = false;
                    }
                }
                else {
                    if (nowVisible) {
                        //const startTime = performance.now();
                        dispatchResizeEvent(v.svgsvg);
                        //const endTime = performance.now();
                        //const time = endTime - startTime;
                        //console.log("dispatch " + v.svgsvg.id + " : " + time + "ms");
                        const b = v.svgsvg.gtGetAttributeBooleanWithUndefined("g-shrink");
                        if (b !== undefined && b === true)
                            resizeSVGSVG(v.svgsvg, v.padding);
                        v.visible = true;
                    }
                }
            });
            setTimeout(observeSVGSVGTimer, timerInterval);
        }
        function dispatchResizeEvent(e) {
            const children = HTMLFunctions.getChildren(e);
            children.forEach((v) => {
                dispatchResizeEvent(v);
            });
            if (e instanceof SVGGElement) {
                var event = document.createEvent("HTMLEvents");
                event.initEvent(GraphTableSVG.CustomAttributeNames.resizeName, false, true);
                e.dispatchEvent(event);
            }
        }
        let changeElementDic = [];
        let timerInterval = 100;
        function observeChangeElement() {
            var result = document.evaluate("//iframe[@g-src]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
            for (var i = 0; i < result.snapshotLength; i++) {
                var node = result.snapshotItem(i);
                changeElementDic.push(node);
            }
            if (changeElementDic.length > 0)
                setTimeout(observeChangeElementTimer, timerInterval);
        }
        GUI.observeChangeElement = observeChangeElement;
        function observeChangeElementTimer() {
            for (let i = 0; i < changeElementDic.length; i++) {
                const element = changeElementDic[i];
                if (HTMLFunctions.isInsideElement(element)) {
                    const url = element.getAttribute("g-src");
                    element.setAttribute("src", url);
                    element.removeAttribute("g-src");
                    changeElementDic.splice(i, 1);
                    i = -1;
                }
            }
            if (changeElementDic.length > 0)
                setTimeout(observeChangeElementTimer, timerInterval);
        }
    })(GUI = GraphTableSVG.GUI || (GraphTableSVG.GUI = {}));
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    /**
     * SVGをPNGに変換するための名前空間です。
     * この名前空間のコードはhttps://st40.xyz/one-run/article/133/を使用しています。
     */
    let PNG;
    (function (PNG) {
        /**
         * svg要素のCSSをStyle属性に書き込みます。
         * @param svg
         */
        function copyCSStoStyle(svg) {
            const widthAttr = svg.getAttribute("width");
            const heightAttr = svg.getAttribute("height");
            if (widthAttr != null) {
                svg.style.width = widthAttr;
            }
            if (heightAttr != null) {
                svg.style.height = heightAttr;
            }
            //svgBox.removeAttribute("width");
            //svgBox.removeAttribute("height");
            GraphTableSVG.SVG.setCSSToAllElementStyles(svg);
        }
        PNG.copyCSStoStyle = copyCSStoStyle;
        /**
         * HTMLImageElementからCanvasElementを作成します。
         * @param img
         */
        function createCanvasFromImage(img) {
            const canvas = document.createElement("canvas");
            if (img.style.width != null && img.style.height != null) {
                canvas.setAttribute("width", img.style.width);
                canvas.setAttribute("height", img.style.height);
            }
            //canvas.style.height = img.style.height;    
            return canvas;
        }
        PNG.createCanvasFromImage = createCanvasFromImage;
        /**
         * HTMLImageElementの画像を保存するイベントを作成します。
         * @param img
         * @param canvas
         */
        function setSaveEvent(img, canvas) {
            img.onload = () => {
                const ctx = canvas.getContext("2d");
                if (ctx == null)
                    throw Error("Error");
                ctx.drawImage(img, 0, 0);
                saveCanvas("png", canvas);
            };
        }
        PNG.setSaveEvent = setSaveEvent;
        /**
         * SVG要素からPNG画像を生成して保存します。
         * @param id
         */
        function createPNGFromSVG(id) {
            const userAgent = window.navigator.userAgent;
            if (userAgent.indexOf("Firefox") != -1) {
                alert(`Firefox is not supported!`);
                throw Error("not supported error");
            }
            const svgBox = document.getElementById(id);
            if (svgBox == null)
                throw Error("Error");
            //console.log(svgBox.outerHTML);
            const styleMap = GraphTableSVG.SVG.getAllElementStyleMap(svgBox);
            copyCSStoStyle(svgBox);
            //console.log(svgBox.outerHTML);
            const img = getImage(svgBox);
            const canvas = createCanvasFromImage(img);
            setSaveEvent(img, canvas);
            GraphTableSVG.SVG.setAllElementStyleMap(svgBox, styleMap);
            return canvas;
            //return canvas;
        }
        PNG.createPNGFromSVG = createPNGFromSVG;
        function getPadding(svgBox) {
            const r = new Array(4);
            var style = window.getComputedStyle(svgBox);
            r[0] = style.paddingTop == null ? 0 : GraphTableSVG.Common.toPX(style.paddingTop);
            r[1] = style.paddingLeft == null ? 0 : GraphTableSVG.Common.toPX(style.paddingLeft);
            r[2] = style.paddingBottom == null ? 0 : GraphTableSVG.Common.toPX(style.paddingBottom);
            r[3] = style.paddingRight == null ? 0 : GraphTableSVG.Common.toPX(style.paddingRight);
            return r;
        }
        function getSizeWidthPadding(svgBox) {
            const padding = getPadding(svgBox);
            const width = svgBox.style.width == null ? 0 : GraphTableSVG.Common.toPX(svgBox.style.width);
            const height = svgBox.style.height == null ? 0 : GraphTableSVG.Common.toPX(svgBox.style.height);
            //return new Size(Math.round(width + padding[1] + padding[3]), Math.round(height + padding[0] + padding[2] ) );
            return new GraphTableSVG.Size(width + padding[1] + padding[3], height + padding[0] + padding[2]);
        }
        function getViewBox(svgBox) {
            const r = new Array(4);
            const viewbox = svgBox.getAttribute("viewBox");
            if (viewbox != null) {
                const strs = viewbox.split(" ");
                for (let i = 0; i < strs.length; i++) {
                    const num = GraphTableSVG.Common.toPX(strs[i]);
                    r[i] = num;
                }
            }
            return r;
        }
        /**
         * svg要素をHTMLImageElementに変換します。
         * @param svgBox
         */
        function getImage(svgBox) {
            const img = document.createElement("img");
            if (window.btoa) {
                const realSize = getSizeWidthPadding(svgBox);
                let originalWidthAttr = svgBox.getAttribute("width");
                let originalHeightAttr = svgBox.getAttribute("height");
                let originalWidthStyle = svgBox.style.width;
                let originalHeightStyle = svgBox.style.height;
                let originalViewBox = svgBox.getAttribute("viewBox");
                let viewBoxValue = getViewBox(svgBox);
                let viewBox = `${viewBoxValue[0]} ${viewBoxValue[1]} ${realSize.width} ${realSize.height}`;
                svgBox.style.width = realSize.width.toString();
                svgBox.style.height = realSize.height.toString();
                svgBox.setAttribute("width", realSize.width.toString());
                svgBox.setAttribute("height", realSize.height.toString());
                svgBox.setAttribute("viewBox", viewBox);
                img.style.width = svgBox.style.width;
                img.style.height = svgBox.style.height;
                img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgBox.outerHTML)));
                svgBox.style.width = originalWidthStyle;
                svgBox.style.height = originalHeightStyle;
                if (originalWidthAttr != null) {
                    svgBox.setAttribute("width", originalWidthAttr);
                }
                else {
                    svgBox.removeAttribute("width");
                }
                if (originalHeightAttr != null) {
                    svgBox.setAttribute("height", originalHeightAttr);
                }
                else {
                    svgBox.removeAttribute("height");
                }
                if (originalViewBox != null) {
                    svgBox.setAttribute("viewBox", originalViewBox);
                }
                else {
                    svgBox.removeAttribute("viewBox");
                }
            }
            else {
                throw Error("Error");
            }
            return img;
        }
        PNG.getImage = getImage;
        /*
        function getCanvas(svgBox: HTMLElement): HTMLCanvasElement {
            var svg = "";
            svg = svgBox.outerHTML;
            var canvas = document.createElement("canvas");
            return canvas;
        }
        */
        /**
         * canvas上のイメージを保存します。
         * @param saveType
         * @param canvas
         */
        function saveCanvas(saveType, canvas) {
            let imageType = "image/png";
            let fileName = "sample.png";
            if (saveType === "jpeg") {
                imageType = "image/jpeg";
                fileName = "sample.jpg";
            }
            //var canvas = document.getElementById("canvas");
            // base64エンコードされたデータを取得 「data:image/png;base64,iVBORw0k～」
            const base64 = canvas.toDataURL(imageType);
            // base64データをblobに変換
            const blob = base64toBlob(base64);
            // blobデータをa要素を使ってダウンロード
            saveBlob(blob, fileName);
        }
        /**
         * Base64データをBlobデータに変換します。
         * @param base64
         */
        function base64toBlob(base64) {
            // カンマで分割して以下のようにデータを分ける
            // tmp[0] : データ形式（data:image/png;base64）
            // tmp[1] : base64データ（iVBORw0k～）
            const tmp = base64.split(',');
            // base64データの文字列をデコード
            const data = atob(tmp[1]);
            // tmp[0]の文字列（data:image/png;base64）からコンテンツタイプ（image/png）部分を取得
            const mime = tmp[0].split(':')[1].split(';')[0];
            //  1文字ごとにUTF-16コードを表す 0から65535 の整数を取得
            const buf = new Uint8Array(data.length);
            for (var i = 0; i < data.length; i++) {
                buf[i] = data.charCodeAt(i);
            }
            // blobデータを作成
            const blob = new Blob([buf], { type: mime });
            return blob;
        }
        /**
         * Blobデータをダウンロードします。
         * @param blob
         * @param fileName
         */
        function saveBlob(blob, fileName) {
            const url = (window.URL || window.webkitURL);
            // ダウンロード用のURL作成
            const dataUrl = url.createObjectURL(blob);
            // イベント作成
            const event = document.createEvent("MouseEvents");
            event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            // a要素を作成
            const a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
            // ダウンロード用のURLセット
            a.href = dataUrl;
            // ファイル名セット
            a.download = fileName;
            // イベントの発火
            a.dispatchEvent(event);
        }
    })(PNG = GraphTableSVG.PNG || (GraphTableSVG.PNG = {}));
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    /**
     * 傾きや切片を計算できる線です。
     */
    class VLine {
        constructor(x1, y1, x2, y2) {
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
        }
        get smallPoint() {
            if (this.x1 < this.x2) {
                return [this.x1, this.y1];
            }
            else {
                return [this.x2, this.y2];
            }
        }
        get largePoint() {
            if (this.x1 < this.x2) {
                return [this.x2, this.y2];
            }
            else {
                return [this.x1, this.y1];
            }
        }
        contains(x, y) {
            const lineY = this.getY(x);
            if (lineY == null) {
                return x < this.x1;
            }
            else {
                return y < lineY;
            }
        }
        getY(x) {
            const intercept = this.intercept;
            if (intercept == null) {
                return null;
            }
            else {
                if (this.slope == null) {
                    return null;
                }
                else {
                    return (this.slope * x) + intercept;
                }
            }
        }
        get slope() {
            const [x1, y1] = this.smallPoint;
            const [x2, y2] = this.largePoint;
            if (x2 - x1 == 0) {
                return null;
            }
            else {
                return (y2 - y1) / (x2 - x1);
            }
        }
        get intercept() {
            const [x1, y1] = this.smallPoint;
            const [x2, y2] = this.largePoint;
            if (this.slope == null) {
                return null;
            }
            else {
                return y1 - x1 * this.slope;
            }
        }
        get inverseSlope() {
            if (this.slope == 0) {
                return null;
            }
            else {
                if (this.slope == null) {
                    return null;
                }
                else {
                    return -1 / this.slope;
                }
            }
        }
        inverseIntercept(x, y) {
            if (this.slope == 0) {
                return null;
            }
            else {
                if (this.inverseSlope == null) {
                    return null;
                }
                else {
                    return y - (this.inverseSlope * x);
                }
            }
        }
    }
    GraphTableSVG.VLine = VLine;
    class Padding {
        constructor(top = 0, left = 0, right = 0, bottom = 0) {
            this.top = top;
            this.left = left;
            this.right = right;
            this.bottom = bottom;
        }
    }
    GraphTableSVG.Padding = Padding;
    class Size {
        constructor(width = 0, height = 0) {
            this.width = width;
            this.height = height;
        }
    }
    GraphTableSVG.Size = Size;
    /**
     * 四角形を表します。
     */
    class Rectangle {
        constructor(x = 0, y = 0, width = 0, height = 0) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        /**
        右端のX座標を返します。
        */
        get right() {
            return this.x + this.width;
        }
        /**
        底のY座標を返します。
        */
        get bottom() {
            return this.y + this.height;
        }
        /**
         * X座標とY座標に値を加えます。
         * @param x
         * @param y
         */
        addOffset(x, y) {
            this.x += x;
            this.y += y;
        }
        /**
         * 引数の四角形を内包する最小の四角形を返します。
         * @param rects
         */
        static merge(rects) {
            if (rects.length > 0) {
                let x1 = rects[0].x;
                let y1 = rects[0].y;
                let x2 = rects[0].right;
                let y2 = rects[0].bottom;
                rects.forEach((v) => {
                    if (x1 > v.x)
                        x1 = v.x;
                    if (y1 > v.y)
                        y1 = v.y;
                    if (x2 < v.right)
                        x2 = v.right;
                    if (y2 < v.bottom)
                        y2 = v.bottom;
                });
                const rect = new Rectangle();
                rect.x = x1;
                rect.y = y1;
                rect.width = x2 - x1;
                rect.height = y2 - y1;
                return rect;
            }
            else {
                return new Rectangle(0, 0, 0, 0);
            }
        }
    }
    GraphTableSVG.Rectangle = Rectangle;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    class GObject {
        constructor(svgbox, option = {}) {
            this._svgSurface = null;
            /*
            public get shape() : ShapeObjectType {
                return ShapeObjectType.Object;
            }
            */
            this._isInitialized = false;
            this.groupObserverOption = { attributes: true, childList: true, subtree: true };
            this.pUpdateFunc = () => {
                this.resizeUpdate();
            };
            this.observerFunc = (x) => {
                this.observerFunction(x);
            };
            this._isUpdating = false;
            this.updateAttributes = ["style", "transform", "data-speaker-x", "data-speaker-y",
                "data-width", "data-height", "data-arrow-neck-width", "data-arrow-neck-height",
                "data-arrow-head-width", "data-arrow-head-height"];
            GraphTableSVG.Common.setGraphTableCSS();
            let parentElement = svgbox instanceof SVGElement ? svgbox : document.getElementById(svgbox);
            if (parentElement instanceof SVGSVGElement && !GraphTableSVG.GUI.isObserved(parentElement)) {
                GraphTableSVG.GUI.observeSVGSVG(parentElement);
            }
            /*
            if(!HTMLFunctions.isShow(parentElement)){
                throw Error("The parent element of the instance must be displayed when the instance is created");
            }
            */
            this._svgGroup = GraphTableSVG.SVG.createGroup(parentElement);
            if (option.class !== undefined) {
                this._svgGroup.setAttribute("class", option.class);
            }
            else if (this.defaultClassName !== undefined) {
                this._svgGroup.setAttribute("class", this.defaultClassName);
            }
            if (option.style !== undefined)
                this._svgGroup.setAttribute("style", option.style);
            //this.setClassNameOfSVGGroup();
            GObject.setObjectFromObjectID(this);
            this.svgGroup.operator = this;
            this.svgGroup.setAttribute(GraphTableSVG.CustomAttributeNames.GroupAttribute, this.type);
            const _option = this.initializeOption(option);
            this.createSurface(parentElement, _option);
            if (typeof _option.id !== "undefined")
                this.svgGroup.id = _option.id;
            //if(_option.surfaceClass !== undefined && this.svgSurface !== null) this.svgSurface.setAttribute("class", _option.surfaceClass);
            this.width = _option.width;
            this.height = _option.height;
            this._observer = new MutationObserver(this.observerFunc);
            this._observerOption = { attributes: true, childList: true, subtree: true };
            this._observer.observe(this.svgGroup, this._observerOption);
            this.dispatchObjectCreatedEvent();
            this.addResizeEvent();
            this.__x = option.x;
            this.__y = option.y;
            this.__cx = option.cx;
            this.__cy = option.cy;
            const __svg = this.svgGroup;
            __svg.operator = this;
            /*
            if (_option.x !== undefined) this.fixedX = _option.x;
            if (_option.y !== undefined) this.fixedY = _option.y;
            */
            if (this.type == GraphTableSVG.ShapeObjectType.Object)
                this.firstFunctionAfterInitialized();
        }
        get defaultClassName() {
            return undefined;
        }
        get isInitialized() {
            return this._isInitialized;
        }
        firstFunctionAfterInitialized() {
            if (this._isInitialized) {
                throw new Error("This function is already called");
            }
            this._isInitialized = true;
            this.update();
            if (this.__cx !== undefined)
                this.cx = this.__cx;
            if (this.__cy !== undefined)
                this.cy = this.__cy;
            if (this.__x !== undefined)
                this.x = this.__x;
            if (this.__y !== undefined)
                this.y = this.__y;
        }
        removeResizeEvent() {
            this.svgGroup.removeEventListener(GraphTableSVG.CustomAttributeNames.resizeName, this.pUpdateFunc);
        }
        addResizeEvent() {
            this.svgGroup.addEventListener(GraphTableSVG.CustomAttributeNames.resizeName, this.pUpdateFunc);
        }
        firstResizeUpdate() {
        }
        resizeUpdate() {
            this.update();
        }
        initializeOption(option) {
            const _option = Object.assign({}, option);
            if (this.svgSurface != null && this.svgSurface.className != null) {
                const width = this.svgSurface.getPropertyStyleNumberValue(GraphTableSVG.CustomAttributeNames.Style.defaultWidth, null);
                const height = this.svgSurface.getPropertyStyleNumberValue(GraphTableSVG.CustomAttributeNames.Style.defaultHeight, null);
                if (width != null)
                    _option.width = width;
                if (height != null)
                    _option.height = height;
            }
            if (_option.width === undefined)
                _option.width = 25;
            if (_option.height === undefined)
                _option.height = 25;
            if (_option.cx === undefined)
                _option.cx = 0;
            if (_option.cy === undefined)
                _option.cy = 0;
            if (_option.surfaceClass === undefined)
                _option.surfaceClass = GraphTableSVG.CustomAttributeNames.StyleValue.defaultSurfaceClass;
            return _option;
        }
        static constructAttributes(e, removeAttributes = false, output = {}) {
            output.class = e.gtGetAttributeStringWithUndefined("class");
            if (output.class === undefined)
                e.gtGetAttributeStringWithUndefined("group:class");
            output.surfaceClass = e.gtGetAttributeStringWithUndefined("surface:class");
            output.style = e.gtGetAttributeStringWithUndefined("group:style");
            if (e.hasAttribute("style"))
                output.style = e.gtGetAttributeStringWithUndefined("style");
            output.surfaceStyle = e.gtGetAttributeStringWithUndefined("surface:style");
            output.cx = e.gtGetAttributeNumberWithUndefined("cx");
            output.cy = e.gtGetAttributeNumberWithUndefined("cy");
            output.width = e.gtGetAttributeNumberWithUndefined("width");
            output.height = e.gtGetAttributeNumberWithUndefined("height");
            output.x = e.gtGetAttributeNumberWithUndefined("x");
            output.y = e.gtGetAttributeNumberWithUndefined("y");
            if (removeAttributes) {
                e.removeAttribute("cx");
                e.removeAttribute("cy");
                e.removeAttribute("x");
                e.removeAttribute("y");
                e.removeAttribute("class");
                e.removeAttribute("surface:class");
                e.removeAttribute("group:class");
                e.removeAttribute("surface:style");
                e.removeAttribute("group:style");
                e.removeAttribute("style");
                e.removeAttribute("width");
                e.removeAttribute("height");
            }
            return output;
        }
        get tag() {
            return this._tag;
        }
        set tag(v) {
            this._tag = v;
        }
        get isShow() {
            return HTMLFunctions.isShow(this.svgGroup);
        }
        /**
        セルを表しているSVGGElementを返します。
        */
        get svgGroup() {
            return this._svgGroup;
        }
        get isLocated() {
            return GraphTableSVG.Common.IsDescendantOfBody(this.svgGroup);
        }
        get svgSurface() {
            return this._svgSurface;
        }
        /**
    このVertexのX座標を返します。
    */
        get cx() {
            if (this.isCenterBased) {
                return this.svgGroup.getX();
            }
            else {
                return this.svgGroup.getX() + (this.width / 2);
            }
        }
        set cx(value) {
            if (this.isCenterBased) {
                if (this.svgGroup.getX() != value) {
                    this.svgGroup.setX(value);
                }
            }
            else {
                this.svgGroup.setX(value - (this.width / 2));
            }
        }
        /**
        このVertexのY座標を返します。
        */
        get cy() {
            if (this.isCenterBased) {
                return this.svgGroup.getY();
            }
            else {
                return this.svgGroup.getY() + (this.height / 2);
            }
        }
        set cy(value) {
            if (this.isCenterBased) {
                if (this.svgGroup.getY() != value) {
                    this.svgGroup.setY(value);
                }
            }
            else {
                this.svgGroup.setY(value - (this.height / 2));
            }
        }
        /**
        頂点の幅を返します。
        */
        get width() {
            if (this.hasSize) {
                return this.svgGroup.gtGetAttributeNumber("data-width", 0);
            }
            else {
                return 0;
            }
        }
        set width(value) {
            if (this.hasSize) {
                if (this.width != value && value != null)
                    this.svgGroup.setAttribute("data-width", value.toString());
            }
        }
        /**
        頂点の高さを返します。
        */
        get height() {
            if (this.hasSize) {
                return this.svgGroup.gtGetAttributeNumber("data-height", 0);
            }
            else {
                return 0;
            }
        }
        set height(value) {
            if (this.hasSize) {
                if (this.height != value && value != null)
                    this.svgGroup.setAttribute("data-height", value.toString());
            }
        }
        get fixedX() {
            return this.svgGroup.gtGetAttributeNumber("data-fixedX", null);
        }
        set fixedX(v) {
            if (v == null) {
                this.svgGroup.removeAttribute("data-fixedX");
            }
            else {
                this.svgGroup.setAttribute("data-fixedX", v.toString());
            }
        }
        get fixedY() {
            return this.svgGroup.gtGetAttributeNumber("data-fixedY", null);
        }
        set fixedY(v) {
            if (v == null) {
                this.svgGroup.removeAttribute("data-fixedY");
            }
            else {
                this.svgGroup.setAttribute("data-fixedY", v.toString());
            }
        }
        get isCenterBased() {
            return true;
        }
        get x() {
            if (this.isCenterBased) {
                return this.svgGroup.getX() - (this.width / 2);
            }
            else {
                return this.svgGroup.getX();
            }
        }
        get y() {
            if (this.isCenterBased) {
                return this.cy - (this.height / 2);
            }
            else {
                return this.svgGroup.getY();
            }
        }
        set x(v) {
            if (this.isCenterBased) {
                this.svgGroup.setX(v + (this.width / 2));
            }
            else {
                this.svgGroup.setX(v);
            }
        }
        set y(v) {
            if (this.isCenterBased) {
                this.svgGroup.setY(v + (this.height / 2));
            }
            else {
                this.svgGroup.setY(v);
            }
        }
        get isProhibitionOutOfRange() {
            const p = this.svgGroup.getPropertyStyleValueWithDefault(GraphTableSVG.CustomAttributeNames.Style.prohibitionOutOfRange, "true");
            return p == "true";
        }
        set isProhibitionOutOfRange(v) {
            this.svgGroup.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.prohibitionOutOfRange, v.toString());
        }
        moveInCanvas() {
            this.x = (this.width / 2) + 10;
            this.y = (this.height / 2) + 10;
        }
        get type() {
            return GraphTableSVG.ShapeObjectType.Object;
        }
        createSurface(svgbox, option = {}) {
        }
        setClassNameOfSVGGroup() {
        }
        observerFunction(x) {
            //throw Error("error1");
            let b = false;
            if (!this.isLocated)
                return;
            for (let i = 0; i < x.length; i++) {
                const p = x[i];
                if (this.updateAttributes.some((v) => v == p.attributeName)) {
                    b = true;
                }
                if (p.target == this.svgGroup) {
                    if (p.attributeName == "x" || p.attributeName == "y") {
                        this.dispatchConnectPositionChangedEvent();
                    }
                }
                if (p.attributeName == "transform") {
                    this.dispatchConnectPositionChangedEvent();
                }
            }
            if (b)
                this.update();
        }
        /**
         * この頂点を廃棄します。廃棄された頂点はグラフから取り除かれます。
         */
        dispose() {
        }
        /**
        この頂点が廃棄されていたらTrueを返します。
        */
        get isDisposed() {
            return false;
            //return this.graph == null;
        }
        /**
        このVertexのObjectIDを返します。
        */
        get objectID() {
            const r = this.svgGroup.getAttribute(GraphTableSVG.CustomAttributeNames.objectIDName);
            if (r == null) {
                throw new Error();
            }
            else {
                return r;
            }
        }
        createVBACode(id) {
            const lines = [];
            lines.push(`Sub create${id}(createdSlide As slide)`);
            lines.push(`End Sub`);
            return lines;
        }
        get VBAObjectNum() {
            return 1;
        }
        dispatchObjectCreatedEvent() {
            var event = document.createEvent("HTMLEvents");
            event.initEvent(GraphTableSVG.CustomAttributeNames.objectCreatedEventName, true, true);
            this.svgGroup.dispatchEvent(event);
        }
        update() {
            if (!this._isInitialized) {
                //throw new Error("This instance have not been initialized!");
            }
            else {
                this._isUpdating = true;
                this._isUpdating = false;
            }
        }
        dispatchConnectPositionChangedEvent() {
            if (this.svgSurface != null) {
                var event = document.createEvent("HTMLEvents");
                event.initEvent(GraphTableSVG.CustomAttributeNames.connectPositionChangedEventName, false, true);
                this.svgGroup.dispatchEvent(event);
            }
        }
        get hasSize() {
            return false;
        }
        static getObjectFromObjectID(id) {
            if (id instanceof SVGElement) {
                if (id.hasAttribute(GraphTableSVG.CustomAttributeNames.objectIDName)) {
                    const _id = id.getAttribute(GraphTableSVG.CustomAttributeNames.objectIDName);
                    return GObject.getObjectFromObjectID(_id);
                }
                else {
                    return null;
                }
            }
            else {
                if (id in this.objectDic) {
                    return this.objectDic[id];
                }
                else {
                    return null;
                }
            }
        }
        static setObjectFromObjectID(obj) {
            const id = obj.objectID;
            this.objectDic[id] = obj;
        }
        static getObjectFromID(id) {
            for (let key in this.objectDic) {
                if (this.objectDic[key].svgGroup.id == id) {
                    return this.objectDic[key];
                }
            }
            return null;
        }
        /**
         * グラフの領域を表すRectangleを返します。位置の基準はグラフが追加されているNodeです。
         */
        getRegion() {
            let rect = new GraphTableSVG.Rectangle();
            rect.x = this.x;
            rect.y = this.y;
            rect.width = this.width;
            rect.height = this.height;
            return rect;
        }
        movable() {
            HTMLFunctions.appendDragFunctionsToDocument();
            HTMLFunctions.draggable(this.svgSurface, this.svgGroup);
        }
    }
    GObject.objectDic = {};
    GraphTableSVG.GObject = GObject;
})(GraphTableSVG || (GraphTableSVG = {}));
/// <reference path="g_object.ts"/>
var GraphTableSVG;
(function (GraphTableSVG) {
    class GTextBox extends GraphTableSVG.GObject {
        constructor(svgbox, option = {}) {
            super(svgbox, option);
            this.isFixTextSize = false;
            this.surfaceAttributes = [];
            this._isSpecialTextBox = false;
            this._minimumWidth = 10;
            this._minimumHeight = 10;
            this.textObserverFunc = (x) => {
                if (!this.isLocated)
                    return;
                let b = false;
                for (let i = 0; i < x.length; i++) {
                    const p = x[i];
                    if (GTextBox.updateTextAttributes.some((v) => v == p.attributeName)) {
                        b = true;
                    }
                    if (p.attributeName == null) {
                        b = true;
                    }
                }
                if (b)
                    this.update();
            };
            /*
            this._svgText = GTextBox.createSVGText(this.svgGroup.getPropertyStyleValue(CustomAttributeNames.Style.defaultTextClass));
            this.svgGroup.appendChild(this.svgText);
            this._textObserver = new MutationObserver(this.textObserverFunc);
            const option2: MutationObserverInit = { childList: true, attributes: true, subtree: true };
            this._textObserver.observe(this.svgText, option2);
            */
            const _option = this.initializeOption(option);
            this._svgText = GTextBox.createSVGText(_option.textClass, _option.textStyle);
            this.svgGroup.appendChild(this.svgText);
            this._textObserver = new MutationObserver(this.textObserverFunc);
            const option2 = { childList: true, attributes: true, subtree: true };
            this._textObserver.observe(this.svgText, option2);
            if (typeof _option.text == "string") {
                this.svgText.setTextContent(_option.text);
            }
            else if (Array.isArray(_option.text)) {
                GraphTableSVG.SVGTextBox.constructSVGTextByHTMLElements(this.svgText, _option.text, false);
            }
            else {
            }
            const b = this.svgGroup.gtGetStyleBooleanWithUndefined(GraphTableSVG.CustomAttributeNames.Style.autoSizeShapeToFitText);
            if (b === undefined && _option.isAutoSizeShapeToFitText !== undefined) {
                this.isAutoSizeShapeToFitText = _option.isAutoSizeShapeToFitText;
            }
            //if(_option.x !== undefined) this.x = _option.x;
            //if(_option.y !== undefined) this.y = _option.y;
            if (this.type == GraphTableSVG.ShapeObjectType.Object)
                this.firstFunctionAfterInitialized();
        }
        initializeOption(option) {
            let b = false;
            if (option.width !== undefined || option.height !== undefined) {
                b = true;
            }
            const _option = super.initializeOption(option);
            if (b && _option.isAutoSizeShapeToFitText === undefined)
                _option.isAutoSizeShapeToFitText = false;
            if (_option.isAutoSizeShapeToFitText === undefined)
                _option.isAutoSizeShapeToFitText = true;
            if (_option.verticalAnchor === undefined)
                _option.verticalAnchor = GraphTableSVG.VerticalAnchor.Middle;
            if (_option.horizontalAnchor === undefined)
                _option.horizontalAnchor = GraphTableSVG.HorizontalAnchor.Center;
            if (_option.textClass === undefined)
                _option.textClass = GraphTableSVG.CustomAttributeNames.StyleValue.defaultTextClass;
            return _option;
        }
        /**
                 * SVGTextElementを生成します。
                 * @param className 生成するSVG要素のクラス属性名
                 * @returns 生成されたSVGTextElement
                 */
        static createSVGText(className, style) {
            const _svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            _svgText.setAttribute(GraphTableSVG.CustomAttributeNames.objectIDName, (GraphTableSVG.SVG.idCounter++).toString());
            if (style !== undefined)
                _svgText.setAttribute("style", style);
            //_svgText.style.textAnchor = "middle";
            if (className == null) {
                if (_svgText.style.fill == null || _svgText.style.fill == "")
                    _svgText.style.fill = "black";
                if (_svgText.style.fontSize == null || _svgText.style.fontSize == "")
                    _svgText.style.fontSize = "14px";
                if (_svgText.style.fontWeight == null || _svgText.style.fontWeight == "")
                    _svgText.style.fontWeight = "bold";
                if (_svgText.style.fontFamily == null || _svgText.style.fontFamily == "")
                    _svgText.style.fontFamily = 'Times New Roman';
                if (_svgText.style.getPropertyValue(GraphTableSVG.CustomAttributeNames.Style.marginLeft) == "")
                    _svgText.setMarginLeft(10);
                if (_svgText.style.getPropertyValue(GraphTableSVG.CustomAttributeNames.Style.marginRight) == "")
                    _svgText.setMarginRight(10);
                if (_svgText.style.getPropertyValue(GraphTableSVG.CustomAttributeNames.Style.marginTop) == "")
                    _svgText.setMarginTop(10);
                if (_svgText.style.getPropertyValue(GraphTableSVG.CustomAttributeNames.Style.marginBottom) == "")
                    _svgText.setMarginBottom(10);
            }
            else {
                _svgText.setAttribute("class", className);
                //_svgText.className = className;
            }
            return _svgText;
        }
        static constructAttributes(e, removeAttributes = false, output = {}) {
            GraphTableSVG.GObject.constructAttributes(e, removeAttributes, output);
            output.isAutoSizeShapeToFitText = e.gtGetStyleBooleanWithUndefined(GraphTableSVG.CustomAttributeNames.Style.autoSizeShapeToFitText);
            const textChild = HTMLFunctions.getChildByNodeName(e, "text");
            output.textClass = e.gtGetAttributeStringWithUndefined("text:class");
            output.textStyle = e.gtGetAttributeStringWithUndefined("text:style");
            if (e.hasAttribute("text")) {
                output.text = e.getAttribute("text");
            }
            else if (e.children.length > 0) {
                const tNodes = GraphTableSVG.openSVGFunctions.getTNodes(e);
                if (tNodes != null) {
                    tNodes.forEach((v) => v.remove());
                    output.text = tNodes;
                }
            }
            else if (textChild != null) {
            }
            else if (e.innerHTML.length > 0) {
                output.text = e.innerHTML;
            }
            if (removeAttributes) {
                e.removeAttribute("text");
                e.removeAttribute("text:class");
                e.removeAttribute("text:style");
                e.style.removeProperty(GraphTableSVG.CustomAttributeNames.Style.autoSizeShapeToFitText);
            }
            return output;
        }
        get svgText() {
            return this._svgText;
        }
        get horizontalAnchor() {
            const b = this.svgGroup.getPropertyStyleValueWithDefault(GraphTableSVG.CustomAttributeNames.Style.HorizontalAnchor, "center");
            return GraphTableSVG.HorizontalAnchor.toHorizontalAnchor(b);
        }
        /**
        テキストの水平方向の配置設定を設定します。
        */
        set horizontalAnchor(value) {
            if (this.horizontalAnchor != value)
                this.svgGroup.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.HorizontalAnchor, value);
        }
        /**
        テキストの垂直方向の配置設定を返します。
        */
        get verticalAnchor() {
            const b = this.svgGroup.getPropertyStyleValueWithDefault(GraphTableSVG.CustomAttributeNames.Style.VerticalAnchor, "middle");
            return GraphTableSVG.VerticalAnchor.toVerticalAnchor(b);
        }
        /**
        テキストの垂直方向の配置設定を設定します。
        */
        set verticalAnchor(value) {
            if (this.verticalAnchor != value)
                this.svgGroup.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.VerticalAnchor, value);
        }
        /**
         * このVertexがテキストに合わせてサイズを変える場合Trueを返します。
         */
        get isAutoSizeShapeToFitText() {
            const b = this.svgGroup.gtGetStyleBooleanWithUndefined(GraphTableSVG.CustomAttributeNames.Style.autoSizeShapeToFitText);
            if (b == undefined) {
                return false;
            }
            else {
                return b;
            }
        }
        set isAutoSizeShapeToFitText(value) {
            this.svgGroup.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.autoSizeShapeToFitText, value ? "true" : "false");
        }
        update() {
            super.update();
            this._isUpdating = true;
            if (!this.isShow)
                return;
            this._observer.disconnect();
            if (this.svgText == null) {
                throw new TypeError("svgText is null");
            }
            GraphTableSVG.SVGTextBox.sortText(this.svgText, this.horizontalAnchor, false);
            if (this.isAutoSizeShapeToFitText)
                this.updateToFitText();
            this.updateSurface();
            if (this.fixedX != null && Math.abs(this.x - this.fixedX) > 20) {
                this.x = this.fixedX;
            }
            if (this.fixedY != null && Math.abs(this.y - this.fixedY) > 20) {
                this.y = this.fixedY;
            }
            /*
            if(this.fixedY != null){
                this.y = this.fixedY;
            }
            */
            if (!this._isSpecialTextBox) {
                this.svgText.gtSetXY(this.innerRectangleWithoutMargin, this.verticalAnchor, this.horizontalAnchor, this.isAutoSizeShapeToFitText);
            }
            //Graph.setXY(this.svgText, this.innerRectangle, vAnchor, hAnchor);
            this._isUpdating = false;
            this._observer.observe(this.svgGroup, this.groupObserverOption);
        }
        updateSurface() {
            this._observer.disconnect();
            const dashStyle = this.msoDashStyle;
            if (dashStyle != null && this.svgSurface != null) {
                GraphTableSVG.msoDashStyle.setCpmoutedDashArray(this.svgSurface);
            }
            this._observer.observe(this.svgGroup, this._observerOption);
        }
        updateToFitText() {
            this.isFixTextSize = true;
            //const box = this.svgText.getBBox();
            const textRect = GraphTableSVG.SVGTextBox.getSize(this.svgText);
            const textWidth = textRect.width < this._minimumWidth ? this._minimumWidth : textRect.width;
            const textHeight = textRect.height < this._minimumHeight ? this._minimumHeight : textRect.height;
            this.width = textWidth + this.marginPaddingLeft + this.marginPaddingRight;
            this.height = textHeight + this.marginPaddingTop + this.marginPaddingBottom;
        }
        get marginPaddingTop() {
            return this.svgText.getMarginTop() + this.svgGroup.getPaddingTop();
        }
        get marginPaddingLeft() {
            return this.svgText.getMarginLeft() + this.svgGroup.getPaddingLeft();
        }
        get marginPaddingRight() {
            return this.svgText.getMarginRight() + this.svgGroup.getPaddingRight();
        }
        get marginPaddingBottom() {
            return this.svgText.getMarginBottom() + this.svgGroup.getPaddingBottom();
        }
        get paddingTop() {
            return this.svgGroup.getPaddingTop();
        }
        set paddingTop(value) {
            this.svgGroup.setPaddingTop(value);
        }
        get paddingLeft() {
            return this.svgGroup.getPaddingLeft();
        }
        set paddingLeft(value) {
            this.svgGroup.setPaddingLeft(value);
        }
        get paddingRight() {
            return this.svgGroup.getPaddingRight();
        }
        set paddingRight(value) {
            this.svgGroup.setPaddingRight(value);
        }
        get paddingBottom() {
            return this.svgGroup.getPaddingBottom();
        }
        set paddingBottom(value) {
            this.svgGroup.setPaddingBottom(value);
        }
        get marginTop() {
            return this.svgText.getMarginTop();
        }
        set marginTop(value) {
            this.svgText.setMarginTop(value);
        }
        get marginLeft() {
            return this.svgText.getMarginLeft();
        }
        set marginLeft(value) {
            this.svgText.setMarginLeft(value);
        }
        get marginRight() {
            return this.svgText.getMarginRight();
        }
        set marginRight(value) {
            this.svgText.setMarginRight(value);
        }
        get marginBottom() {
            return this.svgText.getMarginBottom();
        }
        set marginBottom(value) {
            this.svgText.setMarginBottom(value);
        }
        get innerRectangle() {
            const rect = new GraphTableSVG.Rectangle();
            rect.width = 0;
            rect.height = 0;
            rect.x = 0;
            rect.y = 0;
            return rect;
        }
        get innerRectangleWithoutMargin() {
            const rect = this.innerRectangle;
            rect.width = rect.width - this.marginPaddingLeft - this.marginPaddingRight;
            rect.height = rect.height - this.marginPaddingTop - this.marginPaddingBottom;
            rect.x = rect.x + this.marginPaddingLeft;
            rect.y = rect.y + this.marginPaddingTop;
            return rect;
        }
        /*
        get marginLeft(): number {
            return this.svgText.getPropertyStyleNumberValue("--margin-left", 0);
        }
        set marginLeft(value: number) {
            this.svgText.setPropertyStyleValue("--margin-left", value.toString());
        }
        get marginTop(): number {
            return this.svgText.getPropertyStyleNumberValue("--margin-top", 0);
        }
        set marginTop(value: number) {
            this.svgText.setPropertyStyleValue("--margin-top", value.toString());
        }
        */
        get svgElements() {
            const r = [];
            r.push(this.svgGroup);
            r.push(this.svgText);
            return r;
        }
        hasDescendant(obj) {
            const ids = this.svgElements.map((v) => v.getAttribute(GraphTableSVG.CustomAttributeNames.objectIDName)).filter((v) => v != null);
            const id = obj.getAttribute(GraphTableSVG.CustomAttributeNames.objectIDName);
            return ids.some((v) => v == id);
        }
        get hasSize() {
            return true;
        }
        get msoDashStyle() {
            if (this.svgSurface != null) {
                const dashStyle = this.svgSurface.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.msoDashStyleName);
                if (dashStyle != null) {
                    return GraphTableSVG.msoDashStyle.toMSODashStyle(dashStyle);
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        set msoDashStyle(value) {
            if (this.svgSurface != null) {
                if (GraphTableSVG.msoDashStyle == null) {
                    this.svgSurface.style.removeProperty(GraphTableSVG.CustomAttributeNames.Style.msoDashStyleName);
                }
                else {
                    this.svgSurface.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.msoDashStyleName, value);
                }
            }
        }
    }
    GTextBox.updateTextAttributes = ["style"];
    GraphTableSVG.GTextBox = GTextBox;
})(GraphTableSVG || (GraphTableSVG = {}));
/// <reference path="g_textbox.ts"/>
var GraphTableSVG;
(function (GraphTableSVG) {
    class GVertex extends GraphTableSVG.GTextBox {
        /*
        protected setClassNameOfSVGGroup() {
            const parent = this.svgGroup.parentElement;
            if (parent instanceof SVGElement) {
                const className = GraphTableSVG.CustomAttributeNames.StyleValue.defaultVertexClass;
                if (className != null && !this.svgGroup.hasAttribute("class") ) {
                    this.svgGroup.setAttribute("class", className);
                }
            }
        }
        */
        get defaultClassName() {
            return GraphTableSVG.CustomAttributeNames.StyleValue.defaultVertexClass;
        }
        /**
        * 接続部分のXY座標を返します。
        * @param type
        * @param x
        * @param y
        */
        getLocation(type, x, y) {
            return [this.cx, this.cy];
        }
        /**
         * 与えられた位置から伸びた辺に対応する接続位置を返します。
         * @param type
         * @param x
         * @param y
         */
        getConnectorType(type, x, y) {
            if (type == GraphTableSVG.ConnectorPosition.Auto) {
                return this.getAutoPosition(x, y);
            }
            else {
                return type;
            }
        }
        /**
         * 与えられた位置から伸びた辺に対応する接続位置がAutoだったときの実際の接続位置を返します。
         * @param x
         * @param y
         */
        getAutoPosition(x, y) {
            return GraphTableSVG.ConnectorPosition.Top;
        }
        /**
        入辺配列を返します。
        */
        get outcomingEdges() {
            const p = JSON.parse(this.svgGroup.gtGetAttribute("outcoming-edges", "[]"));
            const p2 = p.map((v) => GraphTableSVG.GObject.getObjectFromObjectID(v.toString()));
            return p2;
        }
        /*
        set outcomingEdges(edges : PPEdge[]) {
            const mes = edges.map((v)=>v.objectID).join(",");
            this.svgGroup.setAttribute("outcoming-edges", mes);
        }
        */
        /**
        出辺配列を返します。
        */
        get incomingEdges() {
            const p = JSON.parse(this.svgGroup.gtGetAttribute("incoming-edges", "[]"));
            const p2 = p.map((v) => GraphTableSVG.GObject.getObjectFromObjectID(v.toString()));
            return p2;
        }
        /*
        set incomingEdges(edges : PPEdge[]) {
            const mes = edges.map((v)=>v.objectID).join(",");
            this.svgGroup.setAttribute("incoming-edges", mes);
        }
        */
        /**
         * 出辺を挿入します。
         * @param edge
         * @param insertIndex
         */
        insertOutcomingEdge(edge, insertIndex = this.outcomingEdges.length) {
            const p = this.outcomingEdges.indexOf(edge);
            if (p != -1) {
                throw new Error();
            }
            else {
                const edges = this.outcomingEdges;
                edges.splice(insertIndex, 0, edge);
                const newEdges = JSON.stringify(edges.map((v) => Number(v.objectID)));
                this.svgGroup.setAttribute("outcoming-edges", newEdges);
                if (edge.beginVertex != this) {
                    edge.beginVertex = this;
                }
            }
        }
        /**
         * 出辺を削除します。
         * @param edge
         */
        removeOutcomingEdge(edge) {
            const p = this.outcomingEdges.indexOf(edge);
            if (p != null) {
                const edges = this.outcomingEdges;
                edges.splice(p, 1);
                const newEdges = JSON.stringify(edges.map((v) => Number(v.objectID)));
                this.svgGroup.setAttribute("outcoming-edges", newEdges);
                if (edge.beginVertex == this) {
                    edge.beginVertex = null;
                }
            }
        }
        /**
        * 入辺を挿入します。
        * @param edge
        * @param insertIndex
        */
        insertIncomingEdge(edge, insertIndex = this.incomingEdges.length) {
            const p = this.incomingEdges.indexOf(edge);
            if (p != -1) {
                throw new Error();
            }
            else {
                const edges = this.incomingEdges;
                edges.splice(insertIndex, 0, edge);
                const newEdges = JSON.stringify(edges.map((v) => Number(v.objectID)));
                this.svgGroup.setAttribute("incoming-edges", newEdges);
                if (edge.endVertex != this) {
                    edge.endVertex = this;
                }
            }
        }
        /**
         * 入辺を削除します。
         * @param edge
         */
        removeIncomingEdge(edge) {
            const p = this.incomingEdges.indexOf(edge);
            if (p != null) {
                const edges = this.incomingEdges;
                edges.splice(p, 1);
                const newEdges = JSON.stringify(edges.map((v) => Number(v.objectID)));
                this.svgGroup.setAttribute("incoming-edges", newEdges);
                if (edge.endVertex == this) {
                    edge.endVertex = null;
                }
            }
        }
        dispose() {
            while (this.incomingEdges.length > 0) {
                this.removeIncomingEdge(this.incomingEdges[0]);
            }
            while (this.outcomingEdges.length > 0) {
                this.removeOutcomingEdge(this.outcomingEdges[0]);
            }
        }
        /**
        * 親Vertex配列を返します。
        */
        getParents() {
            return this.incomingEdges.filter((v) => v.beginVertex != null).map((v) => v.beginVertex);
        }
        /**
        親との間の辺を返します。
        */
        get parentEdge() {
            if (this.incomingEdges.length == 0) {
                return null;
            }
            else {
                return this.incomingEdges[0];
            }
        }
        /**
        このVertexの親を返します。
        */
        get parent() {
            if (this.parentEdge == null) {
                return null;
            }
            else {
                return this.parentEdge.beginVertex;
            }
        }
        /**
        このVertexに親がいないときTrueを返します。
        */
        get isNoParent() {
            return this.parent == null;
        }
        /**
        出辺配列を返します。
        */
        get children() {
            return this.outcomingEdges.filter((v) => v.endVertex != null).map((v) => v.endVertex);
        }
        /**
        このVertexが葉のときTrueを返します。
        */
        get isLeaf() {
            return this.outcomingEdges.length == 0;
        }
        /**
         * このVertexを頂点とする仮想部分木を作成します。
         */
        //get tree(): VirtualTree {
        //    return new VirtualTree(this);
        //}
        createVirtualTree(excludedEdgeDic) {
            return new GraphTableSVG.VirtualTree(this, excludedEdgeDic);
        }
        /**
        このVertexの領域を返します。
        */
        get region() {
            const p = new GraphTableSVG.Rectangle();
            p.x = this.cx - (this.width / 2);
            p.y = this.cy - (this.height / 2);
            p.width = this.width;
            p.height = this.height;
            return p;
        }
        get shape() {
            return "NONE";
        }
        /**
                 *
                 * @param id
                 */
        createVBACode(id) {
            const lines = [];
            const backColor = GraphTableSVG.VBATranslateFunctions.colorToVBA(this.svgSurface.getPropertyStyleValueWithDefault("fill", "gray"));
            const visible = this.svgSurface.getPropertyStyleValueWithDefault("visibility", "visible") == "visible" ? "msoTrue" : "msoFalse";
            const vAnchor = GraphTableSVG.VBATranslateFunctions.ToVerticalAnchor(this.verticalAnchor);
            const hAnchor = GraphTableSVG.VBATranslateFunctions.ToHorizontalAnchor(this.horizontalAnchor);
            lines.push(`Sub create${id}(createdSlide As slide)`);
            lines.push(` Dim shapes_ As Shapes : Set shapes_ = createdSlide.Shapes`);
            lines.push(` Dim obj As Shape`);
            lines.push(` Set obj = shapes_.AddShape(${this.shape}, ${this.x}, ${this.y}, ${this.width}, ${this.height})`);
            lines.push(` Call EditTextFrame(obj.TextFrame, ${this.marginPaddingTop}, ${this.marginPaddingBottom}, ${this.marginPaddingLeft}, ${this.marginPaddingRight}, false, ppAutoSizeNone)`);
            lines.push(` Call EditAnchor(obj.TextFrame, ${vAnchor}, ${hAnchor})`);
            GraphTableSVG.VBATranslateFunctions.TranslateSVGTextElement2(this.svgText, `obj.TextFrame.TextRange`).forEach((v) => lines.push(v));
            //const adjustments = this.VBAAdjustments;
            lines.push(this.getVBAEditLine());
            lines.push(` Call EditCallOut(obj, "${this.objectID}", ${visible}, ${backColor})`);
            this.VBAAdjustments.forEach((v, i) => {
                lines.push(` obj.Adjustments.Item(${i + 1}) = ${v}`);
            });
            lines.push(`End Sub`);
            //sub.push([` Call EditTextEffect(nodes(${i}).TextEffect, ${fontSize}, "${fontFamily}")`]);
            return lines;
        }
        /**
         * VBAコードでのこの図形を表すShape図形のVBAAdjustmentsプロパティを表します。
         */
        get VBAAdjustments() {
            return [];
        }
        getVBAEditLine() {
            const lineColor = GraphTableSVG.VBATranslateFunctions.colorToVBA(this.svgSurface.getPropertyStyleValueWithDefault("stroke", "gray"));
            const lineType = GraphTableSVG.msoDashStyle.getLineType(this.svgSurface);
            const strokeWidth = parseInt(this.svgSurface.getPropertyStyleValueWithDefault("stroke-width", "4"));
            const visible = this.svgSurface.getPropertyStyleValueWithDefault("visibility", "visible") == "visible" ? "msoTrue" : "msoFalse";
            return ` Call EditLine(obj.Line, ${lineColor}, ${lineType}, ${0}, ${strokeWidth}, ${visible})`;
        }
        get graph() {
            const v = this.svgGroup.parentElement;
            if (v != null && v instanceof SVGGElement && v.hasAttribute(GraphTableSVG.CustomAttributeNames.objectIDName)) {
                const id = v.getAttribute(GraphTableSVG.CustomAttributeNames.objectIDName);
                const obj = GraphTableSVG.GObject.getObjectFromObjectID(id);
                if (obj instanceof GraphTableSVG.GGraph) {
                    return obj;
                }
            }
            return null;
        }
    }
    GraphTableSVG.GVertex = GVertex;
})(GraphTableSVG || (GraphTableSVG = {}));
/// <reference path="g_vertex.ts"/>
var GraphTableSVG;
(function (GraphTableSVG) {
    class GPathTextBox extends GraphTableSVG.GVertex {
        constructor(svgbox, option = {}) {
            super(svgbox, option);
            /*
            if(this.surface!.className == null && this.surface!.getPropertyStyleValue("fill") == null){
                this.surface!.setPropertyStyleValue("fill", "white");
            }
            */
            //this.update();
            if (this.type == GraphTableSVG.ShapeObjectType.PathTextBox)
                this.firstFunctionAfterInitialized();
        }
        //private _svgPath: SVGPathElement;
        get svgPath() {
            return this.svgSurface;
        }
        createSurface(svgbox, option = {}) {
            if (option.surfaceClass === undefined)
                option.surfaceClass = GraphTableSVG.CustomAttributeNames.StyleValue.defaultTextboxPathClass;
            //const _className = this.svgGroup.getPropertyStyleValue(CustomAttributeNames.Style.defaultPathClass);
            //if(_className != null) option.surfaceClass = _className;
            this._svgSurface = GPathTextBox.createSurfacePath(this.svgGroup, 0, 0, 0, 0, option.surfaceClass, option.surfaceStyle);
            this.svgGroup.insertBefore(this.svgPath, this.svgText);
        }
        static createSurfacePath(parent, x, y, x2, y2, className, style) {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            parent.appendChild(path);
            path.setAttribute("d", `M ${x} ${y} L ${x2} ${y2}`);
            if (style !== undefined)
                path.setAttribute("style", style);
            path.setAttribute("class", className);
            /*
        if (className != null) {
            const dashStyle = path.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.msoDashStyleName);
        } else {
            if(path.style.stroke == null || path.style.stroke == "")path.style.stroke = "black";
            if(path.style.fill == null || path.style.fill == "")path.style.fill = "white";
            if(path.style.strokeWidth == null || path.style.strokeWidth == "")path.style.strokeWidth = "1pt";
        }
        */
            return path;
        }
        initializeOption(option) {
            const _option = super.initializeOption(option);
            return _option;
        }
        get innerRectangle() {
            const rect = new GraphTableSVG.Rectangle();
            if (this.isAutoSizeShapeToFitText) {
                const textRect = GraphTableSVG.SVGTextBox.getSize(this.svgText);
                //const b = this.svgText.getBBox();
                rect.width = textRect.width;
                rect.height = textRect.height;
                rect.x = (-this.width / 2) + this.marginPaddingLeft;
                rect.y = (-this.height / 2) + this.marginPaddingTop;
            }
            else {
                rect.width = this.width - this.marginPaddingLeft;
                rect.height = this.height - this.marginPaddingTop;
                rect.x = (-this.width / 2) + this.marginPaddingLeft;
                rect.y = (-this.height / 2) + this.marginPaddingTop;
            }
            return rect;
        }
        /*
        private getVBAEditLine(id: number): string {
            const lineColor = VBATranslateFunctions.colorToVBA(this.svgPath.getPropertyStyleValueWithDefault("stroke", "gray"));
            const lineType = GraphTableSVG.msoDashStyle.getLineType(this.svgPath);
            const strokeWidth = parseInt(this.svgPath.getPropertyStyleValueWithDefault("stroke-width", "4"));
            const visible = this.svgPath.getPropertyStyleValueWithDefault("visibility", "visible") == "visible" ? "msoTrue" : "msoFalse";
            return ` Call EditLine(obj${id}.Line, ${lineColor}, ${lineType}, ${0}, ${strokeWidth}, ${visible})`;
        }
        */
        get type() {
            return "g-path-textbox";
        }
        /**
        * 接続部分の座標を返します。
        * @param type
        * @param x
        * @param y
        */
        getLocation(type, x, y) {
            const wr = this.width / 2;
            const hr = this.height / 2;
            switch (type) {
                case GraphTableSVG.ConnectorPosition.Top:
                    return [this.cx, this.cy - hr];
                case GraphTableSVG.ConnectorPosition.TopRight:
                case GraphTableSVG.ConnectorPosition.Right:
                case GraphTableSVG.ConnectorPosition.BottomRight:
                    return [this.cx + wr, this.cy];
                case GraphTableSVG.ConnectorPosition.Bottom:
                    return [this.cx, this.cy + hr];
                case GraphTableSVG.ConnectorPosition.BottomLeft:
                case GraphTableSVG.ConnectorPosition.Left:
                case GraphTableSVG.ConnectorPosition.TopLeft:
                    return [this.cx - wr, this.cy];
                default:
                    const autoType = this.getAutoPosition(x, y);
                    return this.getLocation(autoType, x, y);
            }
        }
        getAutoPosition(x, y) {
            const wr = this.width / 2;
            const hr = this.height / 2;
            const line1 = new GraphTableSVG.VLine(this.cx, this.cy, this.cx + wr, this.cy + hr);
            const line2 = new GraphTableSVG.VLine(this.cx, this.cy, this.cx + wr, this.cy - hr);
            const b1 = line1.contains(x, y);
            const b2 = line2.contains(x, y);
            if (b1) {
                if (b2) {
                    return GraphTableSVG.ConnectorPosition.Top;
                }
                else {
                    return GraphTableSVG.ConnectorPosition.Right;
                }
            }
            else {
                if (b2) {
                    return GraphTableSVG.ConnectorPosition.Left;
                }
                else {
                    return GraphTableSVG.ConnectorPosition.Bottom;
                }
            }
        }
    }
    GraphTableSVG.GPathTextBox = GPathTextBox;
})(GraphTableSVG || (GraphTableSVG = {}));
/// <reference path="g_path_textbox.ts"/>
var GraphTableSVG;
(function (GraphTableSVG) {
    class GArrowCallout extends GraphTableSVG.GPathTextBox {
        constructor(svgbox, option = {}) {
            super(svgbox, option);
            if (option.height == undefined)
                this.height = 100;
            if (option.width == undefined)
                this.width = 100;
            this.arrowNeckWidth = option.arrowNeckWidth == undefined ? 10 : option.arrowNeckWidth;
            this.arrowNeckHeight = option.arrowNeckHeight == undefined ? 10 : option.arrowNeckHeight;
            this.arrowHeadWidth = option.arrowHeadWidth == undefined ? 20 : option.arrowHeadWidth;
            this.arrowHeadHeight = option.arrowHeadHeight == undefined ? 20 : option.arrowHeadHeight;
            this.svgGroup.setAttribute("data-direction", option.direction == undefined ? "down" : option.direction);
            this.updateAttributes.push("data-direction");
            if (this.type == GraphTableSVG.ShapeObjectType.ArrowCallout)
                this.firstFunctionAfterInitialized();
        }
        static constructAttributes(e, removeAttributes = false, output = {}) {
            GraphTableSVG.GTextBox.constructAttributes(e, removeAttributes, output);
            output.arrowNeckWidth = e.gtGetAttributeNumberWithoutNull("arrow-neck-width", 10);
            output.arrowNeckHeight = e.gtGetAttributeNumberWithoutNull("arrow-neck-height", 10);
            output.arrowHeadWidth = e.gtGetAttributeNumberWithoutNull("arrow-head-width", 20);
            output.arrowHeadHeight = e.gtGetAttributeNumberWithoutNull("arrow-head-height", 20);
            const p = e.gtGetAttribute("direction", "");
            output.direction = GraphTableSVG.Direction.toDirection(p);
            if (removeAttributes) {
                e.removeAttribute("arrow-neck-width");
                e.removeAttribute("arrow-neck-height");
                e.removeAttribute("arrow-head-width");
                e.removeAttribute("arrow-head-height");
                e.removeAttribute("direction");
            }
            return output;
        }
        /*
        static openCustomElement(e: SVGElement): ShapeArrowCallout {
            const parent = e.parentElement;
            if (parent instanceof SVGSVGElement) {
                const option = ShapeArrowCallout.constructAttributes(e, true);
                const attrs = e.gtGetAttributes();
                const r = new ShapeArrowCallout(parent, option);
                e.remove();
                attrs.forEach((v) => r.svgGroup.setAttribute(v.name, v.value));
                return r;
            } else {
                throw Error("error!");
            }
        }
        */
        get type() {
            return GraphTableSVG.ShapeObjectType.ArrowCallout;
        }
        get arrowNeckWidth() {
            return this.svgGroup.gtGetAttributeNumberWithoutNull("data-arrow-neck-width", 0);
        }
        set arrowNeckWidth(value) {
            if (this.arrowNeckWidth != value)
                this.svgGroup.setAttribute("data-arrow-neck-width", value.toString());
        }
        get arrowNeckHeight() {
            return this.svgGroup.gtGetAttributeNumberWithoutNull("data-arrow-neck-height", 0);
        }
        set arrowNeckHeight(value) {
            if (this.arrowNeckHeight != value)
                this.svgGroup.setAttribute("data-arrow-neck-height", value.toString());
        }
        get arrowHeadWidth() {
            return this.svgGroup.gtGetAttributeNumberWithoutNull("data-arrow-head-width", 0);
        }
        set arrowHeadWidth(value) {
            if (this.arrowHeadWidth != value)
                this.svgGroup.setAttribute("data-arrow-head-width", value.toString());
        }
        get arrowHeadHeight() {
            return this.svgGroup.gtGetAttributeNumberWithoutNull("data-arrow-head-height", 0);
        }
        set arrowHeadHeight(value) {
            if (this.arrowHeadHeight != value)
                this.svgGroup.setAttribute("data-arrow-head-height", value.toString());
        }
        get direction() {
            const r = this.svgGroup.getAttribute("data-direction");
            return GraphTableSVG.Direction.toDirection(r);
        }
        set direction(value) {
            if (this.direction != value) {
                this.svgGroup.setAttribute("data-direction", value.toString());
            }
        }
        get innerRectangle() {
            const rect = new GraphTableSVG.Rectangle();
            if (this.isAutoSizeShapeToFitText) {
                const textRect = GraphTableSVG.SVGTextBox.getSize(this.svgText);
                //const b = this.svgText.getBBox();
                rect.width = textRect.width;
                rect.height = textRect.height;
                rect.x = (-this.width / 2) + this.marginPaddingLeft;
                rect.y = (-this.height / 2) + this.marginPaddingTop;
            }
            else {
                rect.width = this.boxWidth - this.marginPaddingLeft;
                rect.height = this.boxHeight - this.marginPaddingTop;
                rect.x = (-this.width / 2) + this.marginPaddingLeft;
                rect.y = (-this.height / 2) + this.marginPaddingTop;
            }
            if (this.direction == "up")
                rect.y += this.arrowNeckHeight + this.arrowHeadHeight;
            if (this.direction == "left")
                rect.x += this.arrowNeckHeight + this.arrowHeadHeight;
            return rect;
        }
        /**
         * 矢印部分を除いた図形の高さを表します。
         */
        get boxHeight() {
            if (this.direction == "up" || this.direction == "down") {
                return this.height - this.arrowNeckHeight - this.arrowHeadWidth;
            }
            else {
                return this.height;
            }
        }
        get boxWidth() {
            if (this.direction == "up" || this.direction == "down") {
                return this.width;
            }
            else {
                return this.width - this.arrowNeckHeight - this.arrowHeadWidth;
            }
        }
        updateToFitText() {
            const textRect = GraphTableSVG.SVGTextBox.getSize(this.svgText);
            //const box = this.svgText.getBBox();
            if (this.direction == "up" || this.direction == "down") {
                this.width = textRect.width + this.marginPaddingLeft + this.marginPaddingRight;
                this.height = textRect.height + this.marginPaddingTop + this.marginPaddingBottom + this.arrowNeckHeight + this.arrowHeadHeight;
            }
            else {
                this.width = textRect.width + this.marginPaddingLeft + this.marginPaddingRight + this.arrowNeckHeight + this.arrowHeadHeight;
                this.height = textRect.height + this.marginPaddingTop + this.marginPaddingBottom;
            }
        }
        update() {
            super.update();
            if (this.direction == "up") {
                const x1 = -(this.width / 2);
                const y1 = -(this.height / 2);
                const x2 = (this.width / 2);
                const y2 = (this.height / 2);
                const bx1 = x1;
                const by1 = y1 + this.arrowHeadHeight + this.arrowNeckHeight;
                const bx2 = x2;
                const by2 = y2;
                let nx1 = -(this.arrowNeckWidth / 2);
                let nx2 = (this.arrowNeckWidth / 2);
                let ny = by1 - this.arrowNeckHeight;
                let cx = 0;
                let hx1 = -(this.arrowHeadWidth / 2);
                let hx2 = (this.arrowHeadWidth / 2);
                let hy = y1;
                const mes = `H ${nx1} V ${ny} H ${hx1} L ${cx} ${hy} L ${hx2} ${ny} H ${nx2} V ${by1}`;
                const top = `M ${bx1} ${by1} ${mes} H ${bx2}`;
                const right = `V ${by2}`;
                const bottom = `H ${bx1}`;
                const left = `V ${by1}`;
                this.svgPath.setAttribute("d", `${top} ${right} ${bottom} ${left} z`);
            }
            else if (this.direction == "left") {
                const x1 = -(this.width / 2);
                const y1 = -(this.height / 2);
                const x2 = (this.width / 2);
                const y2 = (this.height / 2);
                const bx1 = x1 + this.arrowHeadHeight + this.arrowNeckHeight;
                const by1 = y1;
                const bx2 = x2;
                const by2 = y2;
                let ny1 = 0 + (this.arrowNeckWidth / 2);
                let ny2 = 0 - (this.arrowNeckWidth / 2);
                let nx = bx1 - this.arrowNeckHeight;
                let cy = 0;
                let hy1 = 0 + (this.arrowHeadWidth / 2);
                let hy2 = 0 - (this.arrowHeadWidth / 2);
                let hx = x1;
                const top = `M ${bx1} ${by1} H ${bx2}`;
                const right = `V ${by2}`;
                const bottom = `H ${bx1}`;
                const left = `V ${ny1} H ${nx} V ${hy1} L ${hx} ${cy} L ${nx} ${hy2} V ${ny2} H ${bx1} V ${by1}`;
                this.svgPath.setAttribute("d", `${top} ${right} ${bottom} ${left} z`);
            }
            else if (this.direction == "right") {
                const x1 = -(this.width / 2);
                const y1 = -(this.height / 2);
                const x2 = (this.width / 2);
                const y2 = (this.height / 2);
                const bx1 = x1;
                const by1 = y1;
                const bx2 = x2 - this.arrowHeadHeight - this.arrowNeckHeight;
                const by2 = y2;
                let ny1 = 0 - (this.arrowNeckWidth / 2);
                let ny2 = 0 + (this.arrowNeckWidth / 2);
                let nx = bx2 + this.arrowNeckHeight;
                let cy = 0;
                let hy1 = 0 - (this.arrowHeadWidth / 2);
                let hy2 = 0 + (this.arrowHeadWidth / 2);
                let hx = x2;
                const top = `M ${bx1} ${by1} H ${bx2}`;
                const right = `V ${ny1} H ${nx} V ${hy1} L ${hx} ${cy} L ${nx} ${hy2} V ${ny2} H ${bx2} V ${by2}`;
                const bottom = `H ${bx1}`;
                const left = `V ${by1}`;
                this.svgPath.setAttribute("d", `${top} ${right} ${bottom} ${left} z`);
            }
            else {
                const x1 = -(this.width / 2);
                const y1 = -(this.height / 2);
                const x2 = (this.width / 2);
                const y2 = (this.height / 2);
                const bx1 = x1;
                const by1 = y1;
                const bx2 = x2;
                const by2 = y2 - this.arrowHeadHeight - this.arrowNeckHeight;
                //const by = boxHeight + dy;
                let nx1 = -(this.arrowNeckWidth / 2);
                let nx2 = (this.arrowNeckWidth / 2);
                let ny = by2 + this.arrowNeckHeight;
                let cx = 0;
                let hx1 = -(this.arrowHeadWidth / 2);
                let hx2 = (this.arrowHeadWidth / 2);
                let hy = y2;
                const top = `M ${bx1} ${by1} H ${bx2}`;
                const right = `V ${by2}`;
                const bottom = `H ${nx2} V ${ny} H ${hx2} L ${cx} ${hy} L ${hx1} ${ny} H ${nx1} V ${by2} H ${bx1}`;
                const left = `V ${by1}`;
                this.svgPath.setAttribute("d", `${top} ${right} ${bottom} ${left} z`);
            }
        }
        get shape() {
            switch (this.direction) {
                case "up": return "msoShapeUpArrowCallout";
                case "left": return "msoShapeLeftArrowCallout";
                case "right": return "msoShapeRightArrowCallout";
                case "down": return "msoShapeDownArrowCallout";
            }
            return "msoShapeDownArrowCallout";
        }
        /**
         * VBAコードでのこの図形を表すShape図形のVBAAdjustmentsプロパティを表します。
         * 第一要素は矢印の首の幅（）
         * 第二要素は矢印の頭の幅
         * @returns VBAAdjustments値の配列。
         */
        get VBAAdjustments() {
            if (this.direction == "up") {
                const neckWidthRatio = this.arrowNeckWidth / this.height;
                const headWidthRatio = this.arrowHeadWidth / (this.height * 2);
                const headHeightRatio = this.arrowHeadHeight / this.height;
                const boxHeightRatio = this.boxHeight / this.height;
                return [neckWidthRatio, headWidthRatio, headHeightRatio, boxHeightRatio];
            }
            else if (this.direction == "right") {
                const neckWidthRatio = this.arrowNeckWidth / this.height;
                const headWidthRatio = this.arrowHeadWidth / (this.height * 2);
                const headHeightRatio = this.arrowHeadHeight / this.height;
                const boxWidthRatio = this.boxWidth / this.width;
                return [neckWidthRatio, headWidthRatio, headHeightRatio, boxWidthRatio];
            }
            else if (this.direction == "left") {
                const neckWidthRatio = this.arrowNeckWidth / this.height;
                const headWidthRatio = this.arrowHeadWidth / (this.height * 2);
                const headHeightRatio = this.arrowHeadHeight / this.height;
                const boxWidthRatio = this.boxWidth / this.width;
                return [neckWidthRatio, headWidthRatio, headHeightRatio, boxWidthRatio];
            }
            else {
                const neckWidthRatio = this.arrowNeckWidth / this.height;
                const headWidthRatio = this.arrowHeadWidth / (this.height * 2);
                const headHeightRatio = this.arrowHeadHeight / this.height;
                const boxHeightRatio = this.boxHeight / this.height;
                return [neckWidthRatio, headWidthRatio, headHeightRatio, boxHeightRatio];
            }
        }
        /**
                 * 接続部分の座標を返します。
                 * @param type
                 * @param x
                 * @param y
                 */
        getLocation(type, x, y) {
            const wr = this.width / 2;
            const hr = this.height / 2;
            switch (type) {
                case GraphTableSVG.ConnectorPosition.Top:
                    return [this.x, this.y - hr];
                case GraphTableSVG.ConnectorPosition.TopRight:
                case GraphTableSVG.ConnectorPosition.Right:
                case GraphTableSVG.ConnectorPosition.BottomRight:
                    return [this.x + wr, this.y];
                case GraphTableSVG.ConnectorPosition.Bottom:
                    return [this.x, this.y + hr];
                case GraphTableSVG.ConnectorPosition.BottomLeft:
                case GraphTableSVG.ConnectorPosition.Left:
                case GraphTableSVG.ConnectorPosition.TopLeft:
                    return [this.x - wr, this.y];
                default:
                    const autoType = this.getAutoPosition(x, y);
                    return this.getLocation(autoType, x, y);
            }
        }
        getAutoPosition(x, y) {
            const wr = this.width / 2;
            const hr = this.height / 2;
            const line1 = new GraphTableSVG.VLine(this.x, this.y, this.x + wr, this.y + hr);
            const line2 = new GraphTableSVG.VLine(this.x, this.y, this.x + wr, this.y - hr);
            const b1 = line1.contains(x, y);
            const b2 = line2.contains(x, y);
            if (b1) {
                if (b2) {
                    return GraphTableSVG.ConnectorPosition.Top;
                }
                else {
                    return GraphTableSVG.ConnectorPosition.Right;
                }
            }
            else {
                if (b2) {
                    return GraphTableSVG.ConnectorPosition.Left;
                }
                else {
                    return GraphTableSVG.ConnectorPosition.Bottom;
                }
            }
        }
    }
    GraphTableSVG.GArrowCallout = GArrowCallout;
})(GraphTableSVG || (GraphTableSVG = {}));
/// <reference path="g_path_textbox.ts"/>
var GraphTableSVG;
(function (GraphTableSVG) {
    class GCallout extends GraphTableSVG.GPathTextBox {
        constructor(svgbox, option = {}) {
            super(svgbox, option);
            const defaultSX = this.fixedX == null ? this.cx - 100 : this.fixedX - 50;
            const defaultSY = this.fixedY == null ? this.cy - 100 : this.fixedY - 50;
            this.speakerX = option.speakerX == undefined ? defaultSX : option.speakerX;
            this.speakerY = option.speakerY == undefined ? defaultSY : option.speakerY;
            if (this.type == GraphTableSVG.ShapeObjectType.Callout)
                this.firstFunctionAfterInitialized();
        }
        static constructAttributes(e, removeAttributes = false, output = {}) {
            GraphTableSVG.GTextBox.constructAttributes(e, removeAttributes, output);
            if (e.hasAttribute("speaker-x"))
                output.speakerX = e.gtGetAttributeNumber("speaker-x", 200);
            if (e.hasAttribute("speaker-y"))
                output.speakerY = e.gtGetAttributeNumber("speaker-y", 200);
            if (removeAttributes) {
                e.removeAttribute("speaker-x");
                e.removeAttribute("speaker-y");
            }
            return output;
        }
        /*
        static openCustomElement(e: SVGElement): GCallout {
            const parent = e.parentElement;
            if (parent instanceof SVGSVGElement) {
                const option = GCallout.constructAttributes(e,true);
                const attrs = e.gtGetAttributes();

                const r = new GCallout(parent, option);
                attrs.forEach((v)=>r.svgGroup.setAttribute(v.name, v.value));
                e.remove();
                return r;
            } else {
                throw Error("error!");
            }
        }
        */
        get type() {
            return "g-callout";
        }
        update() {
            super.update();
            const x1 = -(this.width / 2);
            const y1 = -(this.height / 2);
            const x2 = (this.width / 2);
            const y2 = (this.height / 2);
            const speakerDiffX = this.speakerX - this.cx;
            const speakerDiffY = this.speakerY - this.cy;
            let px1 = 0, px2 = 0, py1 = 0, py2 = 0;
            let mes = "";
            switch (this.speakerPosition) {
                case "upleft":
                    px1 = (x1 / 3) * 2;
                    px2 = (x1 / 3) * 1;
                    mes = `H ${px1} L ${speakerDiffX} ${speakerDiffY} L ${px2} ${y1}`;
                    this.svgPath.setAttribute("d", `M ${x1} ${y1} ${mes} H ${x2} V ${y2} H ${x1} V ${y1} z`);
                    break;
                case "upright":
                    px1 = (x2 / 3) * 1;
                    px2 = (x2 / 3) * 2;
                    mes = `H ${px1} L ${speakerDiffX} ${speakerDiffY} L ${px2} ${y1}`;
                    this.svgPath.setAttribute("d", `M ${x1} ${y1} ${mes} H ${x2} V ${y2} H ${x1} V ${y1} z`);
                    break;
                case "rightup":
                    py1 = (y1 / 3) * 2;
                    py2 = (y1 / 3) * 1;
                    mes = `V ${py1} L ${speakerDiffX} ${speakerDiffY} L ${x2} ${py2}`;
                    this.svgPath.setAttribute("d", `M ${x1} ${y1} H ${x2} ${mes} V ${y2} H ${x1} V ${y1} z`);
                    break;
                case "rightdown":
                    py1 = (y2 / 3) * 1;
                    py2 = (y2 / 3) * 2;
                    mes = `V ${py1} L ${speakerDiffX} ${speakerDiffY} L ${x2} ${py2}`;
                    this.svgPath.setAttribute("d", `M ${x1} ${y1} H ${x2} ${mes} V ${y2} H ${x1} V ${y1} z`);
                    break;
                case "leftup":
                    py1 = (y1 / 3) * 1;
                    py2 = (y1 / 3) * 2;
                    mes = `V ${py1} L ${speakerDiffX} ${speakerDiffY} L ${x1} ${py2}`;
                    this.svgPath.setAttribute("d", `M ${x1} ${y1} H ${x2} V ${y2} H ${x1} ${mes} V ${y1} z`);
                    break;
                case "leftdown":
                    py1 = (y2 / 3) * 2;
                    py2 = (y2 / 3) * 1;
                    mes = `V ${py1} L ${speakerDiffX} ${speakerDiffY} L ${x1} ${py2}`;
                    this.svgPath.setAttribute("d", `M ${x1} ${y1} H ${x2} V ${y2} H ${x1} ${mes} V ${y1} z`);
                    break;
                case "downleft":
                    px1 = (x1 / 3) * 1;
                    px2 = (x1 / 3) * 2;
                    mes = `H ${px1} L ${speakerDiffX} ${speakerDiffY} L ${px2} ${y2}`;
                    this.svgPath.setAttribute("d", `M ${x1} ${y1} H ${x2} V ${y2} ${mes} H ${x1} V ${y1} z`);
                    break;
                case "downright":
                    px1 = (x2 / 3) * 2;
                    px2 = (x2 / 3) * 1;
                    mes = `H ${px1} L ${speakerDiffX} ${speakerDiffY} L ${px2} ${y2}`;
                    this.svgPath.setAttribute("d", `M ${x1} ${y1} H ${x2} V ${y2} ${mes} H ${x1} V ${y1} z`);
                    break;
                default:
                    this.svgPath.setAttribute("d", `M ${x1} ${y1} H ${x2} V ${y2} H ${x1} V ${y1} z`);
                    break;
            }
            //this.svgPath.setAttribute("d", `M ${x1} ${y1} H ${x1 + this.width} V ${y1 + this.height} H ${x1} V ${y1} z`);
        }
        get speakerX() {
            return this.svgGroup.gtGetAttributeNumber("data-speaker-x", 0);
        }
        set speakerX(value) {
            if (this.speakerX != value)
                this.svgGroup.setAttribute("data-speaker-x", value.toString());
        }
        get speakerY() {
            return this.svgGroup.gtGetAttributeNumber("data-speaker-y", 0);
        }
        set speakerY(value) {
            if (this.speakerY != value)
                this.svgGroup.setAttribute("data-speaker-y", value.toString());
        }
        get speakerPosition() {
            const speakerDiffX = this.speakerX - this.cx;
            const speakerDiffY = this.speakerY - this.cy;
            const x1 = -(this.width / 2);
            const y1 = -(this.height / 2);
            const x2 = (this.width / 2);
            const y2 = (this.height / 2);
            if (x1 <= speakerDiffX && speakerDiffX <= x2 && y1 <= speakerDiffY && speakerDiffY <= y2) {
                return "inner";
            }
            if (this.speakerX > this.cx) {
                if (this.speakerY > this.cy) {
                    const line = new GraphTableSVG.VLine(0, 0, this.width, this.height);
                    if (line.contains(speakerDiffX, speakerDiffY)) {
                        return "rightdown";
                    }
                    else {
                        return "downright";
                    }
                }
                else {
                    const line = new GraphTableSVG.VLine(0, 0, this.width, -this.height);
                    if (line.contains(speakerDiffX, speakerDiffY)) {
                        return "upright";
                    }
                    else {
                        return "rightup";
                    }
                }
            }
            else {
                if (this.speakerY > this.cy) {
                    const line = new GraphTableSVG.VLine(0, 0, this.width, -this.height);
                    if (line.contains(speakerDiffX, speakerDiffY)) {
                        return "leftdown";
                    }
                    else {
                        return "downleft";
                    }
                }
                else {
                    const line = new GraphTableSVG.VLine(0, 0, this.width, this.height);
                    if (line.contains(speakerDiffX, speakerDiffY)) {
                        return "upleft";
                    }
                    else {
                        return "leftup";
                    }
                }
            }
        }
        get shape() {
            return "msoShapeRectangularCallout";
        }
        get VBAAdjustments() {
            const y1 = this.speakerY - this.cy;
            const py = y1 / this.height;
            const x1 = this.speakerX - this.cx;
            const px = x1 / this.width;
            return [px, py];
        }
    }
    GraphTableSVG.GCallout = GCallout;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    /**
     * 辺をSVGで表現するためのクラスです。
     */
    class GEdge extends GraphTableSVG.GTextBox {
        constructor(svgbox, option = {}) {
            super(svgbox, option);
            this.connectPositionChangedFunc = () => {
                this.update();
            };
            this.VBAConnectorNumber = 1;
            this._isSpecialTextBox = true;
            this.updateAttributes.push(GraphTableSVG.CustomAttributeNames.beginNodeName);
            this.updateAttributes.push(GraphTableSVG.CustomAttributeNames.endNodeName);
            const pathClass = this.svgSurface.getAttribute("class");
            if (pathClass == GraphTableSVG.CustomAttributeNames.StyleValue.defaultSurfaceClass) {
                this.svgSurface.setAttribute("class", GraphTableSVG.CustomAttributeNames.StyleValue.defaultPathSurfaceClass);
            }
            //this._svgGroup = SVG.createGroup(svgbox);
            const _option = this.initializeOption(option);
            this.svgText.textContent = "";
            //const textClass = this.svgGroup.getPropertyStyleValue(CustomAttributeNames.Style.defaultTextClass);
            if (option.textClass === undefined)
                option.textClass = GraphTableSVG.CustomAttributeNames.StyleValue.defaultTextClass;
            this._svgTextPath = GraphTableSVG.SVG.createTextPath2(option.textClass);
            this.svgPath.id = `path-${this.objectID}`;
            this.svgText.appendChild(this._svgTextPath);
            this._svgTextPath.href.baseVal = `#${this.svgPath.id}`;
            if (typeof _option.text == "string") {
                this.svgTextPath.setTextContent(_option.text);
            }
            else if (Array.isArray(_option.text)) {
            }
            else {
            }
            const edgeColor = this.svgPath.getPropertyStyleValue("stroke");
            const edgeColor2 = edgeColor == null ? undefined : edgeColor;
            const strokeWidth = this.svgPath.getPropertyStyleValue("stroke-width");
            const strokeWidth2 = strokeWidth == null ? undefined : strokeWidth;
            if (_option.startMarker !== undefined)
                this.markerStart = GraphTableSVG.GEdge.createStartMarker({ color: edgeColor2, strokeWidth: strokeWidth2 });
            if (_option.endMarker !== undefined)
                this.markerEnd = GraphTableSVG.GEdge.createEndMarker({ color: edgeColor2, strokeWidth: strokeWidth2 });
            this.pathPoints = [[_option.x1, _option.y1], [_option.x2, _option.y2]];
            if (_option.beginVertex instanceof GraphTableSVG.GVertex)
                this.beginVertex = _option.beginVertex;
            if (_option.endVertex instanceof GraphTableSVG.GVertex)
                this.endVertex = _option.endVertex;
            if (_option.x3 !== undefined && _option.y3 !== undefined) {
                this.controlPoint = [[_option.x3, _option.y3]];
            }
            if (_option.beginConnectorType !== undefined)
                this.beginConnectorType = _option.beginConnectorType;
            if (_option.endConnectorType !== undefined)
                this.endConnectorType = _option.endConnectorType;
            //this.pathTextAlignment = PathTextAlighnment.begin;
            //this.update();
            if (_option.pathTextAlignment !== undefined)
                this.pathTextAlignment = _option.pathTextAlignment;
            if (this.svgText.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.PathTextAlignment) == null) {
                this.pathTextAlignment = GraphTableSVG.PathTextAlighnment.center;
            }
            //this.update();
            if (this.type == GraphTableSVG.ShapeObjectType.Edge)
                this.firstFunctionAfterInitialized();
            //this.setAppropriateText();
        }
        /*
        protected createObjects(svgbox: SVGElement, option: GObjectAttributes = {}): void {

        }
        */
        static constructAttributes(e, removeAttributes = false, output = {}) {
            const _output = GraphTableSVG.GTextBox.constructAttributes(e, removeAttributes, output);
            _output.x1 = e.gtGetAttributeNumberWithoutNull("x1", 0);
            _output.x2 = e.gtGetAttributeNumberWithoutNull("x2", 300);
            _output.y1 = e.gtGetAttributeNumberWithoutNull("y1", 0);
            _output.y2 = e.gtGetAttributeNumberWithoutNull("y2", 300);
            if (e.hasAttribute("x3")) {
                _output.x3 = e.gtGetAttributeNumberWithoutNull("x3", 0);
            }
            if (e.hasAttribute("y3")) {
                _output.y3 = e.gtGetAttributeNumberWithoutNull("y3", 0);
            }
            _output.beginVertex = e.gtGetAttributeStringWithUndefined("begin-vertex");
            _output.endVertex = e.gtGetAttributeStringWithUndefined("end-vertex");
            const bct = e.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.beginConnectorType);
            if (bct != null)
                _output.beginConnectorType = GraphTableSVG.ConnectorPosition.ToConnectorPosition(bct);
            const ect = e.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.endConnectorType);
            if (ect != null)
                _output.endConnectorType = GraphTableSVG.ConnectorPosition.ToConnectorPosition(ect);
            _output.startMarker = e.gtGetStyleBooleanWithUndefined(GraphTableSVG.CustomAttributeNames.Style.markerStart);
            _output.endMarker = e.gtGetAttributeBooleanWithUndefined(GraphTableSVG.CustomAttributeNames.Style.markerEnd);
            if (removeAttributes) {
                e.removeAttribute("x1");
                e.removeAttribute("x2");
                e.removeAttribute("x3");
                e.removeAttribute("y1");
                e.removeAttribute("y2");
                e.removeAttribute("y3");
                //e.removeAttribute("start-marker");
                //e.removeAttribute("end-marker");
                e.removeAttribute("begin-vertex");
                e.removeAttribute("end-vertex");
                /*
                e.removeAttribute("begin-connector");
                e.removeAttribute("end-connector");
                */
            }
            return _output;
        }
        initializeOption(option) {
            const _option = super.initializeOption(option);
            const markerStartName = this.svgGroup.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.markerStart);
            const markerEndName = this.svgGroup.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.markerEnd);
            if (typeof _option.startMarker === "undefined" && markerStartName != null)
                _option.startMarker = markerStartName == "true";
            if (typeof _option.endMarker === "undefined" && markerEndName != null)
                _option.endMarker = markerEndName == "true";
            if (typeof _option.x1 === "undefined")
                _option.x1 = 0;
            if (typeof _option.y1 === "undefined")
                _option.y1 = 0;
            if (typeof _option.x2 === "undefined")
                _option.x2 = 300;
            if (typeof _option.y2 === "undefined")
                _option.y2 = 300;
            if (typeof _option.beginVertex === "string") {
                const obj = GraphTableSVG.GTextBox.getObjectFromID(_option.beginVertex);
                if (obj instanceof GraphTableSVG.GVertex) {
                    _option.beginVertex = obj;
                }
            }
            if (typeof _option.endVertex === "string") {
                const obj = GraphTableSVG.GTextBox.getObjectFromID(_option.endVertex);
                if (obj instanceof GraphTableSVG.GVertex) {
                    _option.endVertex = obj;
                }
            }
            //const styleBeginConnectorType = this.svgGroup.getPropertyStyleValue(CustomAttributeNames.Style.beginConnectorType);
            //const styleEndConnectorType = this.svgGroup.getPropertyStyleValue(CustomAttributeNames.Style.endConnectorType);
            //if (_option.beginConnectorType === undefined && styleBeginConnectorType === null) _option.beginConnectorType = ConnectorPosition.Auto;
            //if (_option.endConnectorType === undefined && styleEndConnectorType === null) _option.endConnectorType = ConnectorPosition.Auto;
            //if (_option.pathTextAlignment === undefined) _option.pathTextAlignment = PathTextAlighnment.center;
            return _option;
        }
        static getConnectedVertexFromDic(edge, isBegin) {
            const dic = isBegin ? GEdge.connectedBeginVertexDic : GEdge.connectedEndVertexDic;
            if (edge.objectID in dic) {
                const id = dic[edge.objectID];
                const obj = GraphTableSVG.GObject.getObjectFromObjectID(id);
                if (obj instanceof GraphTableSVG.GVertex) {
                    return obj;
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        static setConnectedVertexFromDic(edge, isBegin) {
            const dic = isBegin ? GEdge.connectedBeginVertexDic : GEdge.connectedEndVertexDic;
            const id = isBegin ? edge.beginVertexID : edge.endVertexID;
            if (id == null) {
                if (edge.objectID in dic) {
                    delete dic[edge.objectID];
                }
            }
            else {
                dic[edge.objectID] = id;
            }
        }
        /*
        protected setClassNameOfSVGGroup() {
            const parent = this.svgGroup.parentElement;
            if (parent instanceof SVGElement) {
                const className = GraphTableSVG.CustomAttributeNames.StyleValue.defaultEdgeClass;
                if (className != null) {
                    this.svgGroup.setAttribute("class", className);
                }
            }
        }
        */
        get degree() {
            const rad = Math.atan2(this.y2 - this.y1, this.x2 - this.x1);
            const degree = (180 * rad) / Math.PI;
            return degree;
        }
        get defaultClassName() {
            return GraphTableSVG.CustomAttributeNames.StyleValue.defaultEdgeClass;
        }
        //private _svgPath: SVGPathElement | null;
        get svgPath() {
            return this.svgSurface;
        }
        get svgTextPath() {
            return this._svgTextPath;
        }
        createSurface(svgbox, option = {}) {
            if (option.surfaceClass === undefined)
                option.surfaceClass = GraphTableSVG.CustomAttributeNames.StyleValue.defaultEdgePathClass;
            //if (_className != null) option.surfaceClass = _className;
            this._svgSurface = GEdge.createPath(this.svgGroup, 0, 0, 0, 0, option.surfaceClass, option.surfaceStyle);
            this.svgGroup.insertBefore(this.svgPath, this.svgText);
        }
        /**
             * SVGPathElementを生成します。
             * @param parent 生成したSVGPathElementを子に追加する要素
             * @param x 開始位置のX座標
             * @param y 開始位置のY座標
             * @param x2 終了位置のX座標
             * @param y2 終了位置のY座標
             * @param className SVGPathElementのクラス属性名
             * @returns 生成されたSVGPathElement
             */
        static createPath(parent, x, y, x2, y2, className, style) {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            parent.appendChild(path);
            path.setAttribute("d", `M ${x} ${y} L ${x2} ${y2}`);
            if (style !== undefined)
                path.setAttribute("style", style);
            path.setAttribute("class", className);
            /*
        if (className !== undefined) {
        } else {
            if (path.style.stroke == null || path.style.stroke == "") path.style.stroke = "black";
            if (path.style.fill == null || path.style.fill == "") path.style.fill = "none";
            if (path.style.strokeWidth == null || path.style.strokeWidth == "") path.style.strokeWidth = "1pt";
        }
        */
            return path;
        }
        get type() {
            return "g-edge";
        }
        /**
         * 辺の制御点を返します。
         */
        get controlPoint() {
            const r = this.pathPoints;
            r.shift();
            r.pop();
            return r;
        }
        set controlPoint(value) {
            const fst = [this.x1, this.y1];
            const lst = [this.x2, this.y2];
            value.unshift(fst);
            value.push(lst);
            this.pathPoints = value;
        }
        /**
        開始接点の接続位置を返します。
        */
        get beginConnectorType() {
            const p = this.svgGroup.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.beginConnectorType);
            return GraphTableSVG.ConnectorPosition.ToConnectorPosition(p);
        }
        /**
        開始接点の接続位置を設定します。
        */
        set beginConnectorType(value) {
            this.svgGroup.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.beginConnectorType, value);
            //this.svgGroup.setAttribute(Edge.beginConnectorTypeName, GraphTableSVG.ToStrFromConnectorPosition(value));
        }
        /**
        終了接点の接続位置を返します。
        */
        get endConnectorType() {
            const p = this.svgGroup.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.endConnectorType);
            return GraphTableSVG.ConnectorPosition.ToConnectorPosition(p);
        }
        /**
        終了接点の接続位置を設定します。
        */
        set endConnectorType(value) {
            this.svgGroup.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.endConnectorType, value);
        }
        get beginVertexID() {
            return this.svgGroup.getAttribute(GraphTableSVG.CustomAttributeNames.beginNodeName);
        }
        set beginVertexID(v) {
            if (v == null) {
                this.svgGroup.removeAttribute(GraphTableSVG.CustomAttributeNames.beginNodeName);
            }
            else {
                this.svgGroup.setAttribute(GraphTableSVG.CustomAttributeNames.beginNodeName, v);
            }
        }
        get endVertexID() {
            return this.svgGroup.getAttribute(GraphTableSVG.CustomAttributeNames.endNodeName);
        }
        set endVertexID(v) {
            if (v == null) {
                this.svgGroup.removeAttribute(GraphTableSVG.CustomAttributeNames.endNodeName);
            }
            else {
                this.svgGroup.setAttribute(GraphTableSVG.CustomAttributeNames.endNodeName, v);
            }
        }
        get isAppropriatelyReverseMode() {
            const p = this.svgGroup.getAttribute(GraphTableSVG.CustomAttributeNames.isAppropriatelyReverseTextMode);
            if (p == null) {
                return false;
            }
            else {
                return p == "true";
            }
            //return this.svgGroup.getAttribute(CustomAttributeNames.appropriateEdgeText);
        }
        set isAppropriatelyReverseMode(v) {
            this.svgGroup.setAttribute(GraphTableSVG.CustomAttributeNames.isAppropriatelyReverseTextMode, v.toString());
        }
        get side() {
            return this.svgTextPath.getAttribute("side");
        }
        set side(v) {
            if (v == null) {
                this.svgTextPath.removeAttribute("side");
            }
            else {
                this.svgTextPath.setAttribute("side", v);
            }
        }
        /*
        public setAppropriateText(){
            const text = this.svgTextPath.textContent;
            if(text != null){
                this.isAppropriateText = text;
            }
        }
        */
        /**
         * 開始位置の矢印オブジェクトを返します。
         */
        get markerStart() {
            if (this.svgPath != null) {
                var p = this.svgPath.getAttribute("marker-start");
                if (p != null) {
                    const str = p.substring(5, p.length - 1);
                    const ele = document.getElementById(str);
                    return ele;
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        /**
         * 開始位置の矢印オブジェクトを設定します。
         * @param value 代入するSVGMarkerElementもしくはNull
         */
        set markerStart(value) {
            if (this.svgPath != null) {
                if (value == null) {
                    this.svgPath.removeAttribute("marker-start");
                }
                else {
                    this.svgGroup.appendChild(value);
                    this.svgPath.setAttribute("marker-start", `url(#${value.id})`);
                }
            }
        }
        /**
         * 終了位置の矢印オブジェクトを返します。
         */
        get markerEnd() {
            if (this.svgPath != null) {
                var p = this.svgPath.getAttribute("marker-end");
                if (p != null) {
                    const str = p.substring(5, p.length - 1);
                    const ele = document.getElementById(str);
                    return ele;
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        set markerEnd(value) {
            if (this.svgPath != null) {
                if (value == null) {
                    this.svgPath.removeAttribute("marker-end");
                }
                else {
                    this.svgGroup.appendChild(value);
                    this.svgPath.setAttribute("marker-end", `url(#${value.id})`);
                }
            }
        }
        removeVertexEvent(vertex) {
            vertex.svgGroup.removeEventListener(GraphTableSVG.CustomAttributeNames.connectPositionChangedEventName, this.connectPositionChangedFunc);
        }
        addVertexEvent(vertex) {
            vertex.svgGroup.addEventListener(GraphTableSVG.CustomAttributeNames.connectPositionChangedEventName, this.connectPositionChangedFunc);
        }
        /**
        開始接点を返します。
        */
        get beginVertex() {
            if (this.beginVertexID == null) {
                return null;
            }
            else {
                return GraphTableSVG.GTextBox.getObjectFromObjectID(this.beginVertexID);
            }
        }
        /**
        開始接点を設定します。
        */
        set beginVertex(value) {
            if (value == null) {
                this.beginVertexID = null;
            }
            else {
                this.beginVertexID = value.objectID;
            }
            this.update();
        }
        /**
        終了接点を返します。
        */
        get endVertex() {
            if (this.endVertexID == null) {
                return null;
            }
            else {
                return GraphTableSVG.GTextBox.getObjectFromObjectID(this.endVertexID);
            }
        }
        /**
        終了接点を設定します。
        */
        set endVertex(value) {
            if (value == null) {
                this.endVertexID = null;
            }
            else {
                this.endVertexID = value.objectID;
            }
            this.update();
        }
        /**
         * この辺を廃棄します。廃棄した辺はグラフから取り除かれます。
         */
        dispose() {
            this.beginVertex = null;
            this.endVertex = null;
        }
        /**
        この辺が廃棄されているときTrueを返します。
        */
        /*
         get isDisposed(): boolean {
             return this.graph == null;
         }
         */
        /**
        開始位置のX座標を返します。
        */
        get x1() {
            return this.pathPoints[0][0];
        }
        set x1(value) {
            const p = this.pathPoints;
            p[0][0] = value;
            this.pathPoints = p;
        }
        /**
        開始位置のY座標を返します。
        */
        get y1() {
            return this.pathPoints[0][1];
        }
        set y1(value) {
            const p = this.pathPoints;
            p[0][1] = value;
            this.pathPoints = p;
        }
        /**
        終了位置のX座標を返します。
        */
        get x2() {
            const d = this.pathPoints;
            return d[d.length - 1][0];
        }
        set x2(value) {
            const p = this.pathPoints;
            p[p.length - 1][0] = value;
            this.pathPoints = p;
        }
        /**
        終了位置のY座標を返します。
        */
        get y2() {
            const d = this.pathPoints;
            return d[d.length - 1][1];
        }
        set y2(value) {
            const p = this.pathPoints;
            p[p.length - 1][1] = value;
            this.pathPoints = p;
        }
        /**
         * svgPathのstyle:stroke-dasharrayを返します。
         */
        /*
         public get strokeDasharray(): string | null{
            if (this.svgPath != null) {
                var s = this.svgPath.getPropertyStyleValue("stroke-dasharray");
                return s;
            } else {
                return null;
            }
        }
        public set strokeDasharray(value: string | null) {
            if (this.svgPath != null) {
                if (value != null) {
                    this.svgPath.setPropertyStyleValue("stroke-dasharray", value);
                } else {
                    this.svgPath.removeAttribute("stroke-dasharray");
                }
            }
        }
        */
        /**
         * svgPathのstyle:strokeを返します。
         */
        get lineColor() {
            if (this.svgPath != null) {
                return this.svgPath.getPropertyStyleValueWithDefault("stroke", "black");
            }
            else {
                return null;
            }
        }
        removeTextLengthAttribute() {
            if (this.svgText.hasAttribute("textLength"))
                this.svgText.removeAttribute("textLength");
            if (this.svgTextPath.hasAttribute("textLength"))
                this.svgTextPath.removeAttribute("textLength");
            if (this.svgText.hasAttribute("letter-spacing"))
                this.svgText.removeAttribute("letter-spacing");
        }
        setRegularInterval(value) {
            this.removeTextLengthAttribute();
            const textRect = GraphTableSVG.SVGTextBox.getSize(this.svgText);
            //const box = this.svgText.getBBox();
            const diff = value - textRect.width;
            const number = this.svgText.textContent != null ? this.svgText.textContent.length : 0;
            if (number >= 2) {
                const w = diff / (number - 1);
                this.svgText.setAttribute("letter-spacing", `${w}`);
            }
            this.svgText.setAttribute("textLength", `${value}`);
            this.svgTextPath.setAttribute("textLength", `${value}`);
        }
        get pathPoints() {
            const dAttr = this.svgPath.getAttribute("d");
            if (dAttr == null)
                throw Error("error");
            const d = dAttr.split(" ");
            let i = 0;
            const r = [];
            while (i < d.length) {
                if (d[i] == "M") {
                    r.push([Number(d[i + 1]), Number(d[i + 2])]);
                    i += 3;
                }
                else if (d[i] == "L") {
                    r.push([Number(d[i + 1]), Number(d[i + 2])]);
                    i += 3;
                }
                else if (d[i] == "Q") {
                    r.push([Number(d[i + 1]), Number(d[i + 2])]);
                    r.push([Number(d[i + 3]), Number(d[i + 4])]);
                    i += 5;
                }
                else {
                    throw Error("path points parse error");
                }
            }
            /*
            if(r.length == 0){
                r.push([0, 0]);
                r.push([0, 0]);
            }
            */
            return r;
        }
        set pathPoints(points) {
            let path = "";
            if (points.length == 2) {
                const [x1, y1] = points[0];
                const [x2, y2] = points[1];
                path = `M ${x1} ${y1} L ${x2} ${y2}`;
            }
            else if (points.length == 3) {
                const [x1, y1] = points[0];
                const [x2, y2] = points[2];
                const [cx1, cy1] = points[1];
                path = `M ${x1} ${y1} Q ${cx1} ${cy1} ${x2} ${y2}`;
            }
            else if (points.length == 1) {
                throw Error("path points ivnalid error");
            }
            else {
                path = `M ${0} ${0} L ${0} ${0}`;
            }
            const prevPath = this.svgPath.getAttribute("d");
            if (prevPath == null || path != prevPath) {
                this.svgPath.setAttribute("d", path);
            }
        }
        updateConnectorInfo() {
            const oldBeginVertex = GEdge.getConnectedVertexFromDic(this, true);
            const oldEndVertex = GEdge.getConnectedVertexFromDic(this, false);
            if (this.beginVertex != oldBeginVertex) {
                if (oldBeginVertex != null) {
                    this.removeVertexEvent(oldBeginVertex);
                    if (oldBeginVertex.outcomingEdges.indexOf(this) != -1) {
                        oldBeginVertex.removeOutcomingEdge(this);
                    }
                }
                if (this.beginVertex != null) {
                    this.addVertexEvent(this.beginVertex);
                    if (this.beginVertex.outcomingEdges.indexOf(this) == -1) {
                        this.beginVertex.insertOutcomingEdge(this);
                    }
                }
                GEdge.setConnectedVertexFromDic(this, true);
            }
            if (this.endVertex != oldEndVertex) {
                if (oldEndVertex != null) {
                    this.removeVertexEvent(oldEndVertex);
                    if (oldEndVertex.incomingEdges.indexOf(this) != -1) {
                        oldEndVertex.removeIncomingEdge(this);
                    }
                }
                if (this.endVertex != null) {
                    this.addVertexEvent(this.endVertex);
                    if (this.endVertex.incomingEdges.indexOf(this) == -1) {
                        this.endVertex.insertIncomingEdge(this);
                    }
                }
                GEdge.setConnectedVertexFromDic(this, false);
            }
            //if(this.beginVertexID != )
        }
        revTextForApp() {
            if (this.side == "left" || this.side == null) {
                this.side = "right";
            }
            else {
                this.side = "left";
            }
            const tspans = new Array(0);
            this.svgTextPath.children.item;
            for (let i = this.svgTextPath.children.length; i >= 0; i--) {
                const tspan = this.svgTextPath.children.item(i);
                if (tspan instanceof SVGTSpanElement) {
                    tspans.push(tspan);
                }
            }
            tspans.forEach((v) => v.remove());
            tspans.forEach((v) => {
                const text = v.textContent;
                if (text != null) {
                    const revText = GEdge.getRevString(text);
                    v.textContent = revText;
                }
                this.svgTextPath.appendChild(v);
            });
        }
        /**
         * 再描画します。
         */
        update() {
            super.update();
            this.updateConnectorInfo();
            this._observer.disconnect();
            const dashStyle = this.msoDashStyle;
            if (dashStyle != null) {
                GraphTableSVG.msoDashStyle.setCpmoutedDashArray(this.svgPath);
            }
            this._observer.observe(this.svgGroup, this._observerOption);
            const [cx1, cy1] = this.beginVertex != null ? [this.beginVertex.cx, this.beginVertex.cy] : [this.x1, this.y1];
            const [cx2, cy2] = this.endVertex != null ? [this.endVertex.cx, this.endVertex.cy] : [this.x2, this.y2];
            const [x1, y1] = this.beginVertex != null ? this.beginVertex.getLocation(this.beginConnectorType, cx2, cy2) : [cx1, cy1];
            const [x2, y2] = this.endVertex != null ? this.endVertex.getLocation(this.endConnectorType, cx1, cy1) : [cx2, cy2];
            /*
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
            */
            const points = this.pathPoints;
            points[0] = [x1, y1];
            points[points.length - 1] = [x2, y2];
            this.pathPoints = points;
            if (this.isAppropriatelyReverseMode) {
                const degree = this.degree;
                if (degree < -90 || degree > 90) {
                    //Rev
                    if (this.side == "left" || this.side == null) {
                        this.revTextForApp();
                    }
                }
                else {
                    if (this.side == "right") {
                        this.revTextForApp();
                    }
                }
            }
            if (this.markerStart != null) {
                var node = this.markerStart.firstChild;
                if (this.lineColor != null) {
                    node.setAttribute("fill", this.lineColor);
                }
            }
            if (this.markerEnd != null) {
                var node = this.markerEnd.firstChild;
                if (this.lineColor != null) {
                    node.setAttribute("fill", this.lineColor);
                }
            }
            const strokeWidth = this.svgPath.getPropertyStyleValue("stroke-width");
            if (strokeWidth != null) {
                const diffy = GraphTableSVG.Common.toPX(strokeWidth) + 3;
                this.svgText.setAttribute("dy", `-${diffy}`);
            }
            else {
                this.svgText.setAttribute("dy", "0");
            }
            if (this.pathTextAlignment == GraphTableSVG.PathTextAlighnment.regularInterval) {
                const pathLen = this.svgPath.getTotalLength();
                const strLen = this.svgTextPath.textContent == null ? 0 : this.svgTextPath.textContent.length;
                if (strLen > 0) {
                    const startPos = pathLen / (strLen + 1);
                    let textPathLen = pathLen - (startPos * 2);
                    if (textPathLen <= 0)
                        textPathLen = 5;
                    this.svgTextPath.setAttribute("startOffset", `${startPos}`);
                    this.setRegularInterval(textPathLen);
                }
            }
            else if (this.pathTextAlignment == GraphTableSVG.PathTextAlighnment.end) {
                this.svgTextPath.setAttribute("startOffset", `${0}`);
                this.removeTextLengthAttribute();
                const textRect = GraphTableSVG.SVGTextBox.getSize(this.svgText);
                //const box = this.svgText.getBBox();
                const pathLen = this.svgPath.getTotalLength();
                //this.svgTextPath.setAttribute("startOffset", `${0}`);
                this.svgTextPath.setAttribute("startOffset", `${pathLen - textRect.width}`);
            }
            else if (this.pathTextAlignment == GraphTableSVG.PathTextAlighnment.center) {
                this.removeTextLengthAttribute();
                const textRect = GraphTableSVG.SVGTextBox.getSize(this.svgText);
                //const box = this.svgText.getBBox();
                const pathLen = this.svgPath.getTotalLength();
                const offset = (pathLen - textRect.width) / 2;
                if (this.side == "right") {
                    this.svgTextPath.setAttribute("startOffset", `${offset}`);
                }
                else {
                    this.svgTextPath.setAttribute("startOffset", `${offset}`);
                }
                //こっちだとEdgeではおかしくなる
                //this.svgTextPath.startOffset.baseVal.value = (pathLen - box.width)/2;                    
            }
            else {
                this.svgTextPath.setAttribute("startOffset", `${0}`);
                this.removeTextLengthAttribute();
                //this.svgText.textLength.baseVal.value = 0;
            }
            return false;
        }
        static getRevString(text) {
            let s = "";
            for (let i = text.length - 1; i >= 0; i--) {
                s += text[i];
            }
            return s;
        }
        /**
         * この辺のテキストがパスに沿って均等に描画される状態ならばTrueを返します。
         */
        get pathTextAlignment() {
            const value = this.svgText.getPropertyStyleValueWithDefault(GraphTableSVG.CustomAttributeNames.Style.PathTextAlignment, "none");
            return GraphTableSVG.PathTextAlighnment.toPathTextAlighnment(value);
        }
        set pathTextAlignment(value) {
            this.svgText.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.PathTextAlignment, value);
        }
        save() {
        }
        setIndexDictionaryForVBA(vertexDic, edgeDic) {
            if (this.controlPoint.length == 0) {
                edgeDic[this.objectID] = Object.keys(edgeDic).length;
            }
            else if (this.controlPoint.length > 0) {
                //edgeDic[this.objectID] = Object.keys(edgeDic).length;
                for (let i = 0; i < this.VBAConnectorNumber; i++) {
                    vertexDic[`${this.objectID}_${i}`] = Object.keys(vertexDic).length;
                }
                for (let i = 0; i <= this.VBAConnectorNumber; i++) {
                    edgeDic[`${this.objectID}_${i}`] = Object.keys(edgeDic).length;
                }
            }
        }
        /**
         * 矢印オブジェクトを作成します。
         */
        static createMark(option = {}) {
            var [marker, path] = GraphTableSVG.SVG.createMarker(option);
            if (option.isEnd != undefined && option.isEnd) {
                path.setAttribute("transform", "rotate(180,5,5)");
                marker.setAttribute("refX", "0");
            }
            marker.id = `marker-${GEdge.markerCounter++}`;
            return marker;
        }
        static createStartMarker(option = {}) {
            const option2 = { className: option.className, strokeWidth: option.strokeWidth, color: option.color, isEnd: true };
            return this.createMark(option2);
        }
        static createEndMarker(option = {}) {
            return this.createMark(option);
        }
        /*
        public setStyleForPNG() {
            SVG.setStyleForPNG(this.svgPath);
            SVG.setStyleForPNG(this.svgText);
            SVG.setStyleForPNG(this.svgTextPath);

        }
        */
        get shape() {
            return "msoConnectorStraight";
        }
        createVBACode(id) {
            const lineArr = [];
            const r = [];
            r.push(`Sub create${id}(createdSlide As slide)`);
            r.push(` Dim shapes_ As Shapes : Set shapes_ = createdSlide.Shapes`);
            r.push(` Dim obj As Shape`);
            if (this.controlPoint.length == 0) {
                r.push(` Set obj = shapes_.AddConnector(msoConnectorStraight, 0, 0, 0, 0)`);
                if (this.beginVertex != null && this.endVertex != null) {
                    if (this.markerStart != null) {
                        r.push(` obj.Line.BeginArrowheadLength = msoArrowheadLong`);
                        r.push(` obj.Line.BeginArrowheadStyle = msoArrowheadTriangle`);
                        r.push(` obj.Line.BeginArrowheadWidth = msoArrowheadWide`);
                    }
                    if (this.markerEnd != null) {
                        r.push(` obj.Line.EndArrowheadLength = msoArrowheadLong`);
                        r.push(` obj.Line.EndArrowheadStyle = msoArrowheadTriangle`);
                        r.push(` obj.Line.EndArrowheadWidth = msoArrowheadWide`);
                    }
                    const begType = GraphTableSVG.ConnectorPosition.ToVBAConnectorPosition2(this.beginVertex.shape, this.beginVertex.getConnectorType(this.beginConnectorType, this.endVertex.x, this.endVertex.y));
                    const endType = GraphTableSVG.ConnectorPosition.ToVBAConnectorPosition2(this.endVertex.shape, this.endVertex.getConnectorType(this.endConnectorType, this.beginVertex.x, this.beginVertex.y));
                    r.push(` Call EditConnector(obj.ConnectorFormat, shapes_("${this.beginVertex.objectID}"), shapes_("${this.endVertex.objectID}"), ${begType}, ${endType})`);
                    const lineType = GraphTableSVG.msoDashStyle.getLineType(this.svgPath);
                    const lineColor = GraphTableSVG.VBATranslateFunctions.colorToVBA(this.svgPath.getPropertyStyleValueWithDefault("stroke", "gray"));
                    const strokeWidth = parseInt(this.svgPath.getPropertyStyleValueWithDefault("stroke-width", "4"));
                    const visible = this.svgPath.getPropertyStyleValueWithDefault("visibility", "visible") == "visible" ? "msoTrue" : "msoFalse";
                    r.push(` Call EditLine(obj.Line, ${lineColor}, ${lineType}, ${0}, ${strokeWidth}, ${visible})`);
                }
            }
            else if (this.controlPoint.length > 0 && this.beginVertex != null && this.endVertex != null) {
                //subline.push(` Set obj = shapes_.AddConnector(msoConnectorStraight, 0, 0, 0, 0)`);
                //lineArr.push(i);
                r.push(` Dim nodes(${this.VBAConnectorNumber}) As Shape`);
                for (let j = 0; j < this.VBAConnectorNumber; j++) {
                    const t = (j + 1) / (this.VBAConnectorNumber + 1);
                    const centerPoint = GraphTableSVG.Common.bezierLocation([this.x1, this.y1], this.controlPoint[0], [this.x2, this.y2], t);
                    r.push(`shapes_.AddShape(msoShapeOval, ${centerPoint[0]}, ${centerPoint[1]}, 0, 0).name = "${this.objectID}_node_${j}"`);
                }
                for (let j = 0; j <= this.VBAConnectorNumber; j++) {
                    //const centerPoint = Common.bezierLocation([this.x1, this.y1], this.controlPoint[0], [this.x2, this.y2], 0.5);
                    const edgeID = `${this.objectID}_edge_${j}`;
                    const beg = j == 0 ? this.beginVertex.objectID : `${this.objectID}_node_${j - 1}`;
                    const end = j == this.VBAConnectorNumber ? this.endVertex.objectID : `${this.objectID}_node_${j}`;
                    r.push(` shapes_.AddConnector(msoConnectorStraight, 0, 0, 0, 0).name = "${this.objectID}_edge_${j}"`);
                    const lineType = GraphTableSVG.msoDashStyle.getLineType(this.svgPath);
                    const lineColor = GraphTableSVG.VBATranslateFunctions.colorToVBA(this.svgPath.getPropertyStyleValueWithDefault("stroke", "gray"));
                    const strokeWidth = parseInt(this.svgPath.getPropertyStyleValueWithDefault("stroke-width", "4"));
                    const visible = this.svgPath.getPropertyStyleValueWithDefault("visibility", "visible") == "visible" ? "msoTrue" : "msoFalse";
                    r.push(` Call EditLine(shapes_("${edgeID}").Line, ${lineColor}, ${lineType}, ${0}, ${strokeWidth}, ${visible})`);
                    const begType = j == 0 ? GraphTableSVG.ConnectorPosition.ToVBAConnectorPosition2(this.beginVertex.shape, this.beginVertex.getConnectorType(this.beginConnectorType, this.endVertex.x, this.endVertex.y)) : 1;
                    const endType = j == this.VBAConnectorNumber ? GraphTableSVG.ConnectorPosition.ToVBAConnectorPosition2(this.endVertex.shape, this.endVertex.getConnectorType(this.endConnectorType, this.beginVertex.x, this.beginVertex.y)) : 1;
                    r.push(` Call EditConnector(shapes_("${edgeID}").ConnectorFormat, shapes_("${beg}"), shapes_("${end}"), ${begType}, ${endType})`);
                }
                /*
                const edgeBeginID = edgeDic[`${this.objectID}_${0}`];
                const edgeEndID = edgeDic[`${this.objectID}_${this.VBAConnectorNumber}`];

                if (this.beginVertex != null && this.endVertex != null) {
                    if (this.markerStart != null) {
                        r.push(` edges(${edgeBeginID}).Line.BeginArrowheadLength = msoArrowheadLong`);
                        r.push(` edges(${edgeBeginID}).Line.BeginArrowheadStyle = msoArrowheadTriangle`);
                        r.push(` edges(${edgeBeginID}).Line.BeginArrowheadWidth = msoArrowheadWide`);
                    }
                    if (this.markerEnd != null) {
                        r.push(` edges(${edgeEndID}).Line.EndArrowheadLength = msoArrowheadLong`);
                        r.push(` edges(${edgeEndID}).Line.EndArrowheadStyle = msoArrowheadTriangle`);
                        r.push(` edges(${edgeEndID}).Line.EndArrowheadWidth = msoArrowheadWide`);
                    }

                }
                */
            }
            lineArr.forEach((v) => {
                const lineType = GraphTableSVG.msoDashStyle.getLineType(this.svgPath);
                const lineColor = GraphTableSVG.VBATranslateFunctions.colorToVBA(this.svgPath.getPropertyStyleValueWithDefault("stroke", "gray"));
                const strokeWidth = parseInt(this.svgPath.getPropertyStyleValueWithDefault("stroke-width", "4"));
                const visible = this.svgPath.getPropertyStyleValueWithDefault("visibility", "visible") == "visible" ? "msoTrue" : "msoFalse";
                r.push(` Call EditLine(edges(${v}).Line, ${lineColor}, ${lineType}, ${0}, ${strokeWidth}, ${visible})`);
            });
            //subline.forEach((v) => sub.push([v]));
            const textCodes = this.createVBACodeOfText(id);
            textCodes.forEach((v, i) => r.push(`Call create${id}_label_${i}(shapes_)`));
            r.push(`End Sub`);
            textCodes.forEach((v) => v.forEach((w) => r.push(w)));
            return r;
        }
        get hasSize() {
            return false;
        }
        /**
         * VBAコードを作成します。
         * @param shapes
         * @param result
         */
        createVBACodeOfText(id) {
            const r = [];
            const fontSize = parseInt(this.svgTextPath.getPropertyStyleValueWithDefault("font-size", "12"));
            const fontFamily = GraphTableSVG.VBATranslateFunctions.ToVBAFont(this.svgTextPath.getPropertyStyleValueWithDefault("font-family", "MS PGothic"));
            const fontBold = GraphTableSVG.VBATranslateFunctions.ToFontBold(this.svgTextPath.getPropertyStyleValueWithDefault("font-weight", "none"));
            if (this.svgTextPath.textContent != null) {
                for (let i = 0; i < this.svgTextPath.textContent.length; i++) {
                    const s = new Array(0);
                    const p1 = this.svgTextPath.getStartPositionOfChar(i);
                    const p2 = this.svgTextPath.getEndPositionOfChar(i);
                    const width = Math.abs(p2.x - p1.x);
                    const height = Math.abs(p2.y - p1.y);
                    const rad = this.svgTextPath.getRotationOfChar(i);
                    const diffx = (fontSize * 1 / 2) * Math.sin((rad / 180) * Math.PI);
                    const diffy = (fontSize * 3 / 8) + ((fontSize * 3 / 8) * Math.cos((rad / 180) * Math.PI));
                    const left = p1.x + diffx;
                    //const top = this.graph.svgGroup.getY() + p1.y - (fontSize / 2);
                    const top = p1.y - (fontSize * 1 / 4) - diffy;
                    //const top = this.graph.svgGroup.getY() + p1.y - diffy;
                    s.push(`Sub create${id}_label_${i}(shapes_ As Shapes)`);
                    s.push(`With shapes_.AddTextBox(msoTextOrientationHorizontal, ${left}, ${top},${width},${fontSize})`);
                    s.push(`.TextFrame.TextRange.Text = "${this.svgTextPath.textContent[i]}"`);
                    s.push(`.TextFrame.marginLeft = 0`);
                    s.push(`.TextFrame.marginRight = 0`);
                    s.push(`.TextFrame.marginTop = 0`);
                    s.push(`.TextFrame.marginBottom = 0`);
                    s.push(`.TextFrame.TextRange.Font.Size = ${fontSize}`);
                    s.push(`.TextFrame.TextRange.Font.name = "${fontFamily}"`);
                    s.push(`.TextFrame.TextRange.Font.Bold = ${fontBold}`);
                    s.push(`.IncrementRotation(${this.svgTextPath.getRotationOfChar(i)})`);
                    //s.push(`.IncrementRotation(${this.svgText.transform.baseVal.getItem(0).angle})`);
                    s.push(`End With`);
                    s.push(`End Sub`);
                    r.push(s);
                }
            }
            return r;
        }
    }
    GEdge.connectedBeginVertexDic = {};
    GEdge.connectedEndVertexDic = {};
    GEdge.markerCounter = 0;
    GraphTableSVG.GEdge = GEdge;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    class GEllipse extends GraphTableSVG.GVertex {
        constructor(svgbox, option = {}) {
            super(svgbox, option);
            if (this.type == GraphTableSVG.ShapeObjectType.Ellipse)
                this.firstFunctionAfterInitialized();
            //this.update();
        }
        get svgEllipse() {
            return this._svgSurface;
        }
        createSurface(svgbox, option = {}) {
            if (option.surfaceClass === undefined)
                option.surfaceClass = GraphTableSVG.CustomAttributeNames.StyleValue.defaultSurfaceClass;
            this._svgSurface = GEllipse.createEllipse(this.svgGroup, option.surfaceClass, option.surfaceStyle);
            this.svgGroup.insertBefore(this.svgEllipse, this.svgText);
        }
        static createEllipse(parent, className, style) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
            parent.appendChild(circle);
            if (style !== undefined)
                circle.setAttribute("style", style);
            circle.rx.baseVal.value = GraphTableSVG.CustomAttributeNames.defaultCircleRadius;
            circle.ry.baseVal.value = GraphTableSVG.CustomAttributeNames.defaultCircleRadius;
            circle.setAttribute("class", className);
            const radius = circle.getPropertyStyleNumberValue(GraphTableSVG.CustomAttributeNames.Style.defaultRadius, null);
            if (radius != null) {
                circle.rx.baseVal.value = radius;
                circle.ry.baseVal.value = radius;
            }
            /*
            if (className == null) {
                if(circle.style.stroke == null || circle.style.stroke == "")circle.style.stroke = "black";
                if(circle.style.strokeWidth == null || circle.style.strokeWidth == "")circle.style.strokeWidth = "1pt";
                if(circle.style.fill == null || circle.style.fill == "")circle.style.fill = "white";
            } else {

            }
            */
            circle.cx.baseVal.value = 0;
            circle.cy.baseVal.value = 0;
            return circle;
        }
        static constructAttributes(e, removeAttributes = false, output = {}) {
            GraphTableSVG.GTextBox.constructAttributes(e, removeAttributes, output);
            return output;
        }
        /**
        テキストの領域を返します。
        */
        get innerRectangle() {
            const rect = new GraphTableSVG.Rectangle();
            rect.width = this.svgEllipse.rx.baseVal.value * 2;
            rect.height = this.svgEllipse.ry.baseVal.value * 2;
            rect.x = -this.svgEllipse.rx.baseVal.value;
            rect.y = -this.svgEllipse.ry.baseVal.value;
            return rect;
        }
        /**
        頂点の幅を返します。
        */
        get width() {
            return this.svgEllipse.rx.baseVal.value * 2;
        }
        set width(value) {
            const _rx = value / 2;
            if (this.width != value)
                this.svgEllipse.setAttribute("rx", _rx.toString());
        }
        /**
        頂点の高さを返します。
        */
        get height() {
            return this.svgEllipse.ry.baseVal.value * 2;
        }
        set height(value) {
            const _ry = value / 2;
            if (this.height != value)
                this.svgEllipse.setAttribute("ry", _ry.toString());
        }
        get rx() {
            return this.svgEllipse.rx.baseVal.value;
        }
        get ry() {
            return this.svgEllipse.ry.baseVal.value;
        }
        get type() {
            return GraphTableSVG.ShapeObjectType.Ellipse;
        }
        getLocation(type, x, y) {
            const centerX = (Math.sqrt(2) / 2) * this.svgEllipse.rx.baseVal.value;
            const centerY = (Math.sqrt(2) / 2) * this.svgEllipse.ry.baseVal.value;
            switch (type) {
                case GraphTableSVG.ConnectorPosition.Top:
                    return [this.cx, this.cy - this.ry];
                case GraphTableSVG.ConnectorPosition.TopRight:
                    return [this.cx + centerX, this.cy - centerY];
                case GraphTableSVG.ConnectorPosition.Right:
                    return [this.cx + this.rx, this.cy];
                case GraphTableSVG.ConnectorPosition.BottomRight:
                    return [this.cx + centerX, this.cy + centerY];
                case GraphTableSVG.ConnectorPosition.Bottom:
                    return [this.cx, this.cy + this.ry];
                case GraphTableSVG.ConnectorPosition.BottomLeft:
                    return [this.cx - centerX, this.cy + centerY];
                case GraphTableSVG.ConnectorPosition.Left:
                    return [this.cx - this.rx, this.cy];
                case GraphTableSVG.ConnectorPosition.TopLeft:
                    return [this.cx - centerX, this.cy - centerY];
                default:
                    const autoType = this.getAutoPosition(x, y);
                    return this.getLocation(autoType, x, y);
            }
        }
        getAutoPosition(x, y) {
            const radius = this.rx;
            const r = (Math.sqrt(2) / 2) * radius;
            const line1 = new GraphTableSVG.VLine(this.x, this.y, this.x + r, this.y + r);
            const line2 = new GraphTableSVG.VLine(this.x, this.y, this.x + r, this.y - r);
            const b1 = line1.contains(x, y);
            const b2 = line2.contains(x, y);
            if (b1) {
                if (b2) {
                    return GraphTableSVG.ConnectorPosition.Top;
                }
                else {
                    return GraphTableSVG.ConnectorPosition.Right;
                }
            }
            else {
                if (b2) {
                    return GraphTableSVG.ConnectorPosition.Left;
                }
                else {
                    return GraphTableSVG.ConnectorPosition.Bottom;
                }
            }
        }
        get shape() {
            return "msoShapeOval";
        }
    }
    GraphTableSVG.GEllipse = GEllipse;
    /*
    export type EllipseAttributes = TextBoxShapeAttributes & {
        speakerX? : number,
        speakerY? : number,
    }
    */
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    /**
    グラフを表します。
    */
    class GGraph extends GraphTableSVG.GObject {
        constructor(box, option = {}) {
            super(box, option);
            this._roots = [];
            this.objectCreatedFunction = (e) => {
                const obj = GraphTableSVG.GObject.getObjectFromObjectID(e.target);
                if (obj instanceof GraphTableSVG.GVertex) {
                    this.dispatchVertexCreatedEvent(obj);
                }
                else if (obj instanceof GraphTableSVG.GEdge) {
                }
                else {
                }
            };
            if (this.type == GraphTableSVG.ShapeObjectType.Graph)
                this.firstFunctionAfterInitialized();
            //this.svgGroup.addEventListener(CustomAttributeNames.objectCreatedEventName, this.objectCreatedFunction);
        }
        get vertices() {
            const r = [];
            HTMLFunctions.getChildren(this.svgGroup).filter((v) => v.hasAttribute(GraphTableSVG.CustomAttributeNames.objectIDName)).forEach((v) => {
                const item = GraphTableSVG.GObject.getObjectFromObjectID(v.getAttribute(GraphTableSVG.CustomAttributeNames.objectIDName));
                if (item instanceof GraphTableSVG.GVertex) {
                    r.push(item);
                }
            });
            return r;
        }
        get edges() {
            const r = [];
            HTMLFunctions.getChildren(this.svgGroup).filter((v) => v.hasAttribute(GraphTableSVG.CustomAttributeNames.objectIDName)).forEach((v) => {
                const item = GraphTableSVG.GObject.getObjectFromObjectID(v.getAttribute(GraphTableSVG.CustomAttributeNames.objectIDName));
                if (item instanceof GraphTableSVG.GEdge) {
                    r.push(item);
                }
            });
            return r;
        }
        get roots() {
            return this.vertices.filter((v) => v.incomingEdges.length == 0);
        }
        get vertexXInterval() {
            const v = this.svgGroup.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.vertexXInterval);
            if (v == null) {
                return null;
            }
            else {
                return parseInt(v);
            }
        }
        set vertexXInterval(value) {
            this.svgGroup.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.vertexXInterval, value == null ? null : value.toString());
        }
        get vertexYInterval() {
            const v = this.svgGroup.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.vertexYInterval);
            if (v == null) {
                return null;
            }
            else {
                return parseInt(v);
            }
        }
        set vertexYInterval(value) {
            this.svgGroup.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.vertexYInterval, value == null ? null : value.toString());
        }
        /*
        get defaultVertexClass(): string | null {
            return this.svgGroup.getPropertyStyleValue(CustomAttributeNames.Style.defaultVertexClass);
        }
        set defaultVertexClass(value: string | null) {
            this.svgGroup.setPropertyStyleValue(CustomAttributeNames.Style.defaultVertexClass, value);
        }
        */
        /*
         get defaultEdgeClass(): string | null {
             return this.svgGroup.getPropertyStyleValue(CustomAttributeNames.Style.defaultEdgeClass);
         }
         */
        /*
         set defaultEdgeClass(value: string | null) {
             this.svgGroup.setPropertyStyleValue(CustomAttributeNames.Style.defaultEdgeClass, value);
         }
         */
        /**
        根を返します。
        */
        get rootVertex() {
            if (this.roots.length == 0) {
                return null;
            }
            else {
                return this.roots[0];
            }
        }
        /**
         * 頂点もしくは辺をグラフに追加します。
         * @param item
         */
        add(item) {
            if (item instanceof GraphTableSVG.GVertex) {
                this.svgGroup.insertBefore(item.svgGroup, this.svgGroup.firstChild);
            }
            else {
                this.svgGroup.appendChild(item.svgGroup);
            }
        }
        /**
         * 頂点もしくは辺を削除します。
         * @param item
         */
        remove(item) {
            this.svgGroup.removeChild(item.svgGroup);
            item.dispose();
        }
        clear() {
            while (this.edges.length > 0) {
                this.remove(this.edges[0]);
            }
            while (this.vertices.length > 0) {
                this.remove(this.vertices[0]);
            }
        }
        /**
                * 与えられた二つの頂点と辺を接続します。
                * @param beginVertex 開始節
                * @param edge 接続する辺
                * @param endVertex 終了節
                * @param option 接続オプション
                * @param option.incomingInsertIndex endVertexのincomingEdgeの配列に今回の辺をどの位置に挿入するか
                * @param option.outcomingInsertIndex beginVertexのoutcomingEdgeの配列に今回の辺をどの位置に挿入するか
                * @param option.beginConnectorType beginVertexの接続位置
                * @param option.endConnectorType endVertexの接続位置
                */
        connect(beginVertex, edge, endVertex, option = {}) {
            const oIndex = option.outcomingInsertIndex == undefined ? beginVertex.outcomingEdges.length : option.outcomingInsertIndex;
            const iIndex = option.incomingInsertIndex == undefined ? endVertex.incomingEdges.length : option.incomingInsertIndex;
            //this._connect(node1, edge, node2);
            beginVertex.insertOutcomingEdge(edge, oIndex);
            endVertex.insertIncomingEdge(edge, iIndex);
            const i = this.roots.indexOf(beginVertex);
            const j = this.roots.indexOf(endVertex);
            if (j != -1) {
                if (i == -1) {
                    this.roots[j] = beginVertex;
                }
                else {
                    this.roots.splice(j, 1);
                }
            }
            if (option.beginConnectorType != undefined)
                edge.beginConnectorType = option.beginConnectorType;
            if (option.endConnectorType != undefined)
                edge.endConnectorType = option.endConnectorType;
        }
        getOrderedVertices(order, node = null) {
            const r = [];
            if (node == null) {
                this.roots.forEach((v) => {
                    this.getOrderedVertices(order, v).forEach((w) => {
                        r.push(w);
                    });
                });
            }
            else {
                const edges = node.outcomingEdges;
                if (order == GraphTableSVG.VertexOrder.Preorder) {
                    r.push(node);
                    edges.forEach((v) => {
                        this.getOrderedVertices(order, v.endVertex).forEach((w) => {
                            r.push(w);
                        });
                    });
                }
                else if (order == GraphTableSVG.VertexOrder.Postorder) {
                    edges.forEach((v) => {
                        this.getOrderedVertices(order, v.endVertex).forEach((w) => {
                            r.push(w);
                        });
                    });
                    r.push(node);
                }
            }
            return r;
        }
        /**
         * 親ノードに子ノードを追加します。
         * @param parent
         * @param child
         * @param option
         */
        appendChild(parent, child, option = {}) {
            const _child = child == null ? GraphTableSVG.createVertex(this) : child;
            const edge = GraphTableSVG.createShape(this, 'g-edge');
            this.connect(parent, edge, _child, { beginConnectorType: "bottom", endConnectorType: "top" });
            //this.createdNodeCallback(child);
            this.relocate();
        }
        get relocateStyle() {
            return this.svgGroup.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.relocateName);
        }
        set relocateStyle(value) {
            this.svgGroup.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.relocateName, value);
        }
        relocate() {
            const value = this.relocateStyle;
            if (value != null) {
                const p = Function("v", `return ${value}(v)`);
                const f = Function("graph", `${value}(graph)`);
                f(this);
            }
            //this.relocate();
            //this.moveInCanvas();
        }
        get width() {
            return this.Noderegion().width;
        }
        get height() {
            return this.Noderegion().height;
        }
        set width(value) {
        }
        set height(value) {
        }
        Noderegion() {
            const _x = this.svgGroup.getX();
            const _y = this.svgGroup.getY();
            let left = _x;
            let right = _y;
            let top = _x;
            let bottom = _y;
            this.vertices.forEach((v) => {
                const x = v.x + _x;
                const y = v.y + _y;
                if (x < left)
                    left = x;
                if (right < (x + v.width))
                    right = x + v.width;
                if (y < top)
                    top = y;
                if (bottom < (y + v.height))
                    bottom = y + v.height;
            });
            return new GraphTableSVG.Rectangle(left, top, right - left, bottom - top);
        }
        moveInCanvas() {
            const rect = this.Noderegion();
            if (rect.x < 0) {
                this.x = this.x - (rect.x);
            }
            if (rect.y < 0) {
                this.y = this.y - (rect.y);
            }
        }
        build(graph, option = {}) {
            if (option.isLatexMode == undefined)
                option.isLatexMode = false;
            this.clear();
            const svgsvg = GraphTableSVG.SVG.getSVGSVG(this.svgGroup);
            if (graph instanceof GraphTableSVG.LogicGraph) {
                const dic = new Map();
                graph.nodes.forEach((v, i) => {
                    const node = GraphTableSVG.createShape(svgsvg, "g-ellipse");
                    node.svgText.textContent = v.text;
                    this.add(node);
                    dic.set(i, node);
                });
                graph.nodes.forEach((v, i) => {
                    v.outputEdges.forEach((e, j) => {
                        const edge = GraphTableSVG.createShape(svgsvg, "g-edge");
                        if (e.text != undefined) {
                            const b = option.isLatexMode == undefined ? false : option.isLatexMode;
                            edge.svgTextPath.setTextContent(e.text, b);
                        }
                        this.add(edge);
                        const beginNode = dic.get(i);
                        const endNode = dic.get(e.endNodeIndex);
                        if (beginNode == undefined || endNode == undefined)
                            throw Error("error");
                        this.connect(beginNode, edge, endNode);
                    });
                });
            }
            else {
                const dic = new Map();
                graph.getOrderedNodes(GraphTableSVG.VertexOrder.Preorder).forEach((v, i) => {
                    const node = GraphTableSVG.createShape(svgsvg, "g-ellipse");
                    node.svgText.textContent = v.vertexText;
                    this.add(node);
                    dic.set(v, node);
                });
                graph.getOrderedNodes(GraphTableSVG.VertexOrder.Preorder).forEach((v, i) => {
                    v.children.forEach((e, j) => {
                        if (e != null) {
                            const edge = GraphTableSVG.createShape(svgsvg, "g-edge");
                            if (e.parentEdgeText != null) {
                                const b = option.isLatexMode == undefined ? false : option.isLatexMode;
                                edge.svgTextPath.setTextContent(e.parentEdgeText, b);
                                edge.isAppropriatelyReverseMode = true;
                                //edge.setAppropriateText();
                            }
                            this.add(edge);
                            const beginNode = dic.get(v);
                            const endNode = dic.get(e);
                            if (beginNode == undefined || endNode == undefined)
                                throw Error("error");
                            this.connect(beginNode, edge, endNode);
                        }
                    });
                });
            }
            this.relocateStyle = "GraphTableSVG.GraphArrangement.standardTreeWidthArrangement";
            //this.x = 200;
            //this.y = 200;
            if (option.x != undefined)
                this.svgGroup.setX(option.x);
            if (option.y != undefined)
                this.svgGroup.setY(option.y);
        }
        /**
        * LogicTreeから木を構築します。
        * @param roots
        * @param isLatexMode
        */
        constructFromLogicTree(roots, option = {}) {
            if (option.isLatexMode == undefined)
                option.isLatexMode = false;
            if (roots instanceof Array) {
                this.clear();
                roots.forEach((v) => {
                    if (v != null) {
                        this.createChildFromLogicTree(null, v, option);
                    }
                });
                this.relocate();
            }
            else {
                this.constructFromLogicTree([roots], option);
            }
            if (option.x != undefined)
                this.svgGroup.setX(option.x);
            if (option.y != undefined)
                this.svgGroup.setY(option.y);
            //this.roots = roots;
        }
        removeGraph(svg) {
            if (svg.contains(this.svgGroup)) {
                svg.removeChild(this.svgGroup);
            }
        }
        /**
         * グラフの領域を表すRectangleを返します。位置の基準はグラフが追加されているNodeです。
         */
        getRegion() {
            const rects = this.vertices.map((v) => v.region);
            const rect = GraphTableSVG.Rectangle.merge(rects);
            rect.addOffset(this.svgGroup.getX(), this.svgGroup.getY());
            return rect;
        }
        /**
         * 入力のVertexを親として、入力のLogicTreeを子とした部分木を作成します。
         * @param parent 親にするVertex
         * @param logicVertex 子にするLogicTree
         * @param option 作成オプション
         * @returns logicVertexを表すVertex
         */
        createChildFromLogicTree(parent = null, logicVertex, option = {}) {
            if (option.isLatexMode == undefined)
                option.isLatexMode = false;
            const node = GraphTableSVG.createVertex(this, { class: logicVertex.vertexClass == null ? undefined : logicVertex.vertexClass });
            if (logicVertex.vertexText != null)
                GraphTableSVG.SVGTextBox.setTextToSVGText(node.svgText, logicVertex.vertexText, option.isLatexMode);
            if (parent != null) {
                const edge = GraphTableSVG.createShape(this, 'g-edge', { class: logicVertex.parentEdgeClass });
                if (logicVertex.parentEdgeText != null) {
                    edge.svgTextPath.setTextContent(logicVertex.parentEdgeText, option.isLatexMode);
                    edge.pathTextAlignment = GraphTableSVG.PathTextAlighnment.regularInterval;
                    //edge.svgText.setTextContent(tree.edgeLabel, isLatexMode);
                }
                this.connect(parent, edge, node, { beginConnectorType: "bottom", endConnectorType: "top" });
            }
            else {
                this.roots.push(node);
            }
            logicVertex.children.forEach((v) => {
                if (v != null)
                    this.createChildFromLogicTree(node, v, option);
            });
            //this.createdNodeCallback(node);
            return node;
        }
        createVBACode(id) {
            const r = [];
            this.vertices.forEach((v) => v.createVBACode(id++).forEach((w) => r.push(w)));
            this.edges.forEach((v) => v.createVBACode(id++).forEach((w) => r.push(w)));
            return r;
        }
        get VBAObjectNum() {
            return this.vertices.length + this.edges.length;
        }
        getStyleValue(className, valueName) {
            if (this.svgGroup.hasAttribute("class")) {
                const oldClass = this.svgGroup.getAttribute("class");
                this.svgGroup.setAttribute("class", className);
                const r = this.svgGroup.getPropertyStyleValue(valueName);
                this.svgGroup.setAttribute("class", oldClass);
                return r;
            }
            else {
                this.svgGroup.setAttribute("class", className);
                const r = this.svgGroup.getPropertyStyleValue(valueName);
                this.svgGroup.removeAttribute("class");
                return r;
            }
        }
        dispatchVertexCreatedEvent(vertex) {
            var event = document.createEvent("HTMLEvents");
            event.initEvent(GraphTableSVG.CustomAttributeNames.vertexCreatedEventName, true, true);
            vertex.svgGroup.dispatchEvent(event);
        }
        setRootIndex(vertex, rootIndex) {
            if (vertex.graph == this) {
                if (rootIndex < this.roots.length) {
                    this.svgGroup.insertBefore(vertex.svgGroup, this.roots[rootIndex].svgGroup);
                }
                else {
                    if (this.roots.length == 0) {
                        if (this.svgGroup.firstChild == null) {
                            this.svgGroup.appendChild(vertex.svgGroup);
                        }
                        else {
                            this.svgGroup.insertBefore(vertex.svgGroup, this.svgGroup.firstChild);
                        }
                    }
                    else {
                        if (this.roots[this.roots.length - 1].svgGroup.nextSibling == null) {
                            this.svgGroup.appendChild(vertex.svgGroup);
                        }
                        else {
                            this.svgGroup.insertBefore(vertex.svgGroup, this.roots[this.roots.length - 1].svgGroup.nextSibling);
                        }
                    }
                }
            }
            else {
                throw Error("error!");
            }
        }
        observerFunction(x) {
            super.observerFunction(x);
            for (let i = 0; i < x.length; i++) {
                const p = x[i];
                if (p.attributeName == "style") {
                    this.relocate();
                }
            }
        }
        get type() {
            return GraphTableSVG.ShapeObjectType.Graph;
        }
        resizeUpdate() {
            this.relocate();
        }
    }
    GraphTableSVG.GGraph = GGraph;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    class GRect extends GraphTableSVG.GVertex {
        constructor(svgbox, option = {}) {
            super(svgbox, option);
            this.updateAttributes.push("width");
            this.updateAttributes.push("height");
            //throw Error("error2");
            //this.update();
            if (this.type == GraphTableSVG.ShapeObjectType.Rect)
                this.firstFunctionAfterInitialized();
        }
        get svgRectangle() {
            return this._svgSurface;
        }
        createSurface(svgbox, option = {}) {
            this._svgSurface = GRect.createRectangle(this.svgGroup, option.surfaceClass, option.surfaceStyle);
            this.svgGroup.insertBefore(this.svgRectangle, this.svgText);
        }
        /**
         * SVGRectElementを生成します。
         * @param parent 生成したSVG要素を子に追加する要素
         * @param className 生成するSVG要素のクラス属性名
         * @returns 生成されたSVGRectElement
         */
        static createRectangle(parent, className, style) {
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            parent.appendChild(rect);
            rect.width.baseVal.value = 30;
            rect.height.baseVal.value = 30;
            if (style !== undefined)
                rect.setAttribute("style", style);
            if (className == null) {
                if (rect.style.stroke == null || rect.style.stroke == "")
                    rect.style.stroke = "black";
                if (rect.style.fill == null || rect.style.fill == "")
                    rect.style.fill = "white";
                if (rect.style.strokeWidth == null || rect.style.strokeWidth == "")
                    rect.style.strokeWidth = "1pt";
            }
            else {
                rect.setAttribute("class", className);
                //const dashStyle = rect.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.msoDashStyleName);
                //if (dashStyle != null) msoDashStyle.setStyle(rect, dashStyle);
                const width = rect.getPropertyStyleNumberValue(GraphTableSVG.CustomAttributeNames.Style.defaultWidth, null);
                if (width != null) {
                    rect.width.baseVal.value = width;
                }
                const height = rect.getPropertyStyleNumberValue(GraphTableSVG.CustomAttributeNames.Style.defaultHeight, null);
                if (height != null) {
                    rect.height.baseVal.value = height;
                }
            }
            return rect;
        }
        static constructAttributes(e, removeAttributes = false, output = {}) {
            GraphTableSVG.GTextBox.constructAttributes(e, removeAttributes, output);
            return output;
        }
        get type() {
            return GraphTableSVG.ShapeObjectType.Rect;
        }
        /**
        テキストの領域を返します。
        */
        get innerRectangle() {
            const rect = new GraphTableSVG.Rectangle();
            rect.width = this.width;
            rect.height = this.height;
            rect.x = (-this.width / 2);
            rect.y = (-this.height / 2);
            return rect;
        }
        /**
        頂点の幅を返します。
        */
        get width() {
            return this.svgRectangle.width.baseVal.value;
        }
        set width(value) {
            if (this.width != value)
                this.svgRectangle.setAttribute("width", value.toString());
        }
        /**
        頂点の高さを返します。
        */
        get height() {
            return this.svgRectangle.height.baseVal.value;
        }
        set height(value) {
            if (this.height != value)
                this.svgRectangle.setAttribute("height", value.toString());
        }
        updateSurface() {
            this.svgRectangle.x.baseVal.value = -this.width / 2;
            this.svgRectangle.y.baseVal.value = -this.height / 2;
            this._observer.disconnect();
            const dashStyle = this.msoDashStyle;
            if (dashStyle != null) {
                GraphTableSVG.msoDashStyle.setCpmoutedDashArray(this.svgRectangle);
            }
            this._observer.observe(this.svgGroup, this._observerOption);
        }
        /**
                * 接続部分の座標を返します。
                * @param type
                * @param x
                * @param y
                */
        getLocation(type, x, y) {
            const wr = this.width / 2;
            const hr = this.height / 2;
            switch (type) {
                case GraphTableSVG.ConnectorPosition.Top:
                    return [this.cx, this.cy - hr];
                case GraphTableSVG.ConnectorPosition.TopRight:
                case GraphTableSVG.ConnectorPosition.Right:
                case GraphTableSVG.ConnectorPosition.BottomRight:
                    return [this.cx + wr, this.cy];
                case GraphTableSVG.ConnectorPosition.Bottom:
                    return [this.cx, this.cy + hr];
                case GraphTableSVG.ConnectorPosition.BottomLeft:
                case GraphTableSVG.ConnectorPosition.Left:
                case GraphTableSVG.ConnectorPosition.TopLeft:
                    return [this.cx - wr, this.cy];
                default:
                    const autoType = this.getAutoPosition(x, y);
                    return this.getLocation(autoType, x, y);
            }
        }
        getAutoPosition(x, y) {
            const wr = this.width / 2;
            const hr = this.height / 2;
            const line1 = new GraphTableSVG.VLine(this.cx, this.cy, this.cx + wr, this.cy + hr);
            const line2 = new GraphTableSVG.VLine(this.cx, this.cy, this.cx + wr, this.cy - hr);
            const b1 = line1.contains(x, y);
            const b2 = line2.contains(x, y);
            if (b1) {
                if (b2) {
                    return GraphTableSVG.ConnectorPosition.Top;
                }
                else {
                    return GraphTableSVG.ConnectorPosition.Right;
                }
            }
            else {
                if (b2) {
                    return GraphTableSVG.ConnectorPosition.Left;
                }
                else {
                    return GraphTableSVG.ConnectorPosition.Bottom;
                }
            }
        }
        get shape() {
            return "msoShapeRectangle";
        }
    }
    GraphTableSVG.GRect = GRect;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    class GRectButton extends GraphTableSVG.GRect {
        constructor(svgbox, option = {}) {
            super(svgbox, option);
            //this.update();
            if (this.type == GraphTableSVG.ShapeObjectType.RectButton)
                this.firstFunctionAfterInitialized();
        }
        initializeOption(option) {
            let b = false;
            if (option.width !== undefined || option.height !== undefined) {
                b = true;
            }
            if (option.surfaceClass === undefined) {
                option.surfaceClass = GraphTableSVG.CustomAttributeNames.StyleValue.defaultRectButtonSurfaceClass;
            }
            const _option = super.initializeOption(option);
            return _option;
        }
        get defaultClassName() {
            return undefined;
            //return GraphTableSVG.CustomAttributeNames.StyleValue.defaultRectButtonClass;
        }
        get type() {
            return GraphTableSVG.ShapeObjectType.RectButton;
        }
    }
    GraphTableSVG.GRectButton = GRectButton;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    /**
    テーブルを表します。
    */
    class GTable extends GraphTableSVG.GObject {
        /**
         * コンストラクタです。
         */
        constructor(svgbox, option = {}) {
            super(svgbox, option);
            this._isNoneMode = false;
            /**
            各行を表す配列を返します。読み取り専用です。
            */
            this._rows = new Array(0);
            /**
            各列を表す配列を返します。読み取り専用です。
            */
            this._columns = new Array(0);
            this._borderRows = new Array(0);
            this._borderColumns = new Array(0);
            //private _cells: Cell[][] = [];
            this.isConstructing = false;
            this._isDrawing = false;
            this._isAutoResized = false;
            this._cellTextObserverFunc = (x) => {
                let b = false;
                let b2 = false;
                for (let i = 0; i < x.length; i++) {
                    const p = x[i];
                    if (p.type == "childList") {
                        b = true;
                        b2 = true;
                    }
                    for (let j = 0; j < p.addedNodes.length; j++) {
                        const item = p.addedNodes.item(j);
                        if (item != null && item.nodeName == "#text") {
                            b = true;
                            b2 = true;
                        }
                    }
                }
                if (b2 && !this.isConstructing) {
                    //if(this.cellArray.some((v)=>v.isErrorCell)) throw new Error("err!");
                    this.fitSizeToOriginalCells(false);
                }
                if (b)
                    this.update();
            };
            // #endregion
            this._isTextObserved = false;
            this.isSetSize = false;
            // #endregion
            // #region update
            this.prevShow = false;
            GraphTableSVG.Common.setGraphTableCSS();
            this._svgHiddenGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            this._svgRowBorderGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            this._svgRowBorderGroup.setAttribute("name", "rowBorderGroup");
            this._svgColumnBorderGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            this._svgColumnBorderGroup.setAttribute("name", "columnBorderGroup");
            this._svgHiddenGroup.style.visibility = "hidden";
            this.svgGroup.appendChild(this.svgHiddenGroup);
            this.svgGroup.appendChild(this.svgRowBorderGroup);
            this.svgGroup.appendChild(this.svgColumnBorderGroup);
            this._cellTextObserver = new MutationObserver(this._cellTextObserverFunc);
            this.updateAttributes = [];
            this.isConstructing = true;
            this.firstSetSize();
            if (option.table === undefined) {
                if (option.rowCount == undefined)
                    option.rowCount = 5;
                if (option.columnCount == undefined)
                    option.columnCount = 5;
                this.setSize(option.columnCount, option.rowCount);
                if (option.rowHeight != undefined) {
                    this.rows.forEach((v) => v.height = option.rowHeight);
                }
                if (option.columnWidth != undefined) {
                    this.columns.forEach((v) => v.width = option.columnWidth);
                }
                for (let y = 0; y < this.rowCount; y++) {
                    for (let x = 0; x < this.columnCount; x++) {
                        this.updateCellByLogicCell(null, x, y);
                    }
                }
                //this.update();
            }
            else {
                this.svgGroup.style.display = "none";
                this._isNoneMode = true;
                this.constructFromLogicTable(option.table);
                this._isNoneMode = false;
                this.svgGroup.style.removeProperty("display");
                this.isTextObserved = true;
            }
            //if (option.cx !== undefined) this.cx = option.cx;
            //if (option.cy !== undefined) this.cy = option.cy;
            this.isConstructing = false;
            //this.update();
            if (this.type == GraphTableSVG.ShapeObjectType.Table)
                this.firstFunctionAfterInitialized();
        }
        get isNoneMode() {
            return this._isNoneMode;
        }
        get isCenterBased() {
            return false;
        }
        static constructAttributes(e, removeAttributes = false, output = {}) {
            //const widthsStr = e.getPropertyStyleValue("--widths");
            const table = GraphTableSVG.LogicTable.constructLogicTable(e);
            GraphTableSVG.GObject.constructAttributes(e, removeAttributes, output);
            if (table != null) {
                output.table = table;
            }
            if (output.x !== undefined)
                output.table.x = output.x;
            if (output.y !== undefined)
                output.table.y = output.y;
            if (output.class !== undefined)
                output.table.tableClassName = output.class;
            while (e.childNodes.length > 0)
                e.removeChild(e.childNodes.item(0));
            return output;
        }
        get svgRowBorderGroup() {
            return this._svgRowBorderGroup;
        }
        get svgColumnBorderGroup() {
            return this._svgColumnBorderGroup;
        }
        get borderRows() {
            return this._borderRows;
        }
        get borderColumns() {
            return this._borderColumns;
        }
        get width() {
            let width = 0;
            this.columns.forEach((v) => width += v.width);
            return width;
        }
        set width(value) {
        }
        get height() {
            let height = 0;
            this.rows.forEach((v) => height += v.height);
            return height;
        }
        set height(value) {
        }
        /**
         * mergeによって見えなくなったBorderなどを格納している特別なSVGGElementです。
         */
        get svgHiddenGroup() {
            return this._svgHiddenGroup;
        }
        get type() {
            return GraphTableSVG.ShapeObjectType.Table;
        }
        /**
        各行を表す配列を返します。読み取り専用です。
        */
        get rows() {
            return this._rows;
        }
        /**
        各列を表す配列を返します。読み取り専用です。
        */
        get columns() {
            return this._columns;
        }
        /**
        各セルを格納している二次元ジャグ配列を返します。
        */
        get cells() {
            return this.rows.map((v) => v.cells);
        }
        get isDrawing() {
            return this._isDrawing;
        }
        get isAutoResized() {
            return this._isAutoResized;
        }
        set isAutoResized(value) {
            this._isAutoResized = value;
            if (value) {
                this.update();
            }
        }
        get cellTextObserver() {
            return this._cellTextObserver;
        }
        /**
        * テーブルの行方向の単位セルの数を返します。
        * @returns 表の列数
        */
        get columnCount() {
            if (this.cells.length == 0) {
                return 0;
            }
            else {
                if (this.rows.length > 2 && (this.rows[0].length != this.rows[1].length))
                    throw new Error("Invalid length error");
                return this.rows[0].length;
            }
        }
        /**
        * テーブルの列方向の単位セルの数を返します。
        * @returns 表の行数
        */
        get rowCount() {
            return this.cells.length;
        }
        // #endregion
        // #region property
        /*
         get defaultCellClass(): string | null {
             return this.svgGroup.getPropertyStyleValue(CustomAttributeNames.Style.defaultCellClass);
         }
         */
        /*
         get defaultBorderClass(): string | null {
             return this.svgGroup.getPropertyStyleValue(CustomAttributeNames.Style.defaultBorderClass);
         }
         */
        /**
        各セルを表す配列を返します。テーブルの左上のセルから右に向かってインデックスが割り当てられ、
        テーブル右下のセルが配列の最後の値となります。読み取り専用です。
        */
        get cellArray() {
            const arr = new Array(0);
            for (let y = 0; y < this.rowCount; y++) {
                for (let x = 0; x < this.columnCount; x++) {
                    arr.push(this.cells[y][x]);
                }
            }
            return arr;
        }
        /**
        各ボーダーを表す配列を返します。
        ボーダーの順番は未定義です。
        読み取り専用です。
        */
        get borders() {
            const arr = new Array(0);
            for (let y = 0; y < this.rowCount; y++) {
                for (let x = 0; x < this.columnCount; x++) {
                    if (arr.indexOf(this.cells[y][x].svgTopBorder) == -1) {
                        arr.push(this.cells[y][x].svgTopBorder);
                    }
                    if (arr.indexOf(this.cells[y][x].svgLeftBorder) == -1) {
                        arr.push(this.cells[y][x].svgLeftBorder);
                    }
                    if (arr.indexOf(this.cells[y][x].svgRightBorder) == -1) {
                        arr.push(this.cells[y][x].svgRightBorder);
                    }
                    if (arr.indexOf(this.cells[y][x].svgBottomBorder) == -1) {
                        arr.push(this.cells[y][x].svgBottomBorder);
                    }
                }
            }
            return arr;
        }
        // #endregion
        // #region method
        /**
         * セルの元々のサイズに合わせて表のサイズを調整します。
         * @param allowShrink 各行と各列が現在の幅より短くなることを許す
         */
        fitSizeToOriginalCells(allowShrink) {
            this.rows.forEach((v) => v.fitHeightToOriginalCell(allowShrink));
            this.columns.forEach((v) => v.fitWidthToOriginalCell(allowShrink));
        }
        /**
         * 指定したセル座標のセルを返します。そのようなセルが存在しない場合nullを返します。
         * @param x セルの列番号
         * @param y セルの行番号
         */
        getTryCell(x, y) {
            if (x < 0 || x >= this.columnCount || y < 0 || y >= this.rowCount) {
                return null;
            }
            else {
                return this.cells[y][x];
            }
        }
        /**
         * 指定したセル座標範囲の二次元セル配列を返します。
         * @param x 範囲の左上を示す列番号
         * @param y 範囲の左上を示す行番号
         * @param width 範囲に含まれる列数
         * @param height 範囲に含まれる行数
         */
        getRangeCells(x, y, width, height) {
            let cells = new Array(height);
            for (let i = 0; i < cells.length; i++) {
                cells[i] = new Array(0);
                for (let j = 0; j < width; j++) {
                    cells[i].push(this.cells[y + i][x + j]);
                }
            }
            return cells;
        }
        /**
         * 指定したセル座標範囲のセルを配列でかえします。
         * @param x 範囲の左上を示す列番号
         * @param y 範囲の左上を示す行番号
         * @param width 範囲に含まれる列数
         * @param height 範囲に含まれる行数
         */
        getRangeCellArray(x, y, width, height) {
            let cells = new Array();
            this.getRangeCells(x, y, width, height).forEach((v) => { v.forEach((w) => { cells.push(w); }); });
            return cells;
        }
        /**
        所属しているSVGタグ上でのテーブルの領域を表すRectangleクラスを返します。
        */
        getRegion() {
            let rect = new GraphTableSVG.Rectangle();
            rect.x = this.svgGroup.getX();
            rect.y = this.svgGroup.getY();
            rect.width = this.width;
            rect.height = this.height;
            return rect;
            /*
            const regions = this.cellArray.map((v) => v.region);
            const rect = Rectangle.merge(regions);
            rect.addOffset(this.svgGroup.getX(), this.svgGroup.getY());
            return rect;
            */
        }
        /**
        * 強調セルを全て返します。
        */
        getEmphasizedCells() {
            return this.cellArray.filter((v) => v.isEmphasized);
        }
        /**
        * 表を文字列に変換した結果を返します。
        */
        toPlainText() {
            const plainTable = this.cells.map((v) => v.map((w) => w.toPlainText()));
            const widtharr = new Array(this.columnCount);
            for (let x = 0; x < this.columnCount; x++) {
                widtharr[x] = 0;
            }
            for (let y = 0; y < this.rowCount; y++) {
                for (let x = 0; x < this.columnCount; x++) {
                    const width = plainTable[y][x].length;
                    if (widtharr[x] < width)
                        widtharr[x] = width;
                }
            }
            for (let y = 0; y < this.rowCount; y++) {
                for (let x = 0; x < this.columnCount; x++) {
                    plainTable[y][x] = GraphTableSVG.Common.paddingLeft(plainTable[y][x], widtharr[x], " ");
                }
            }
            return plainTable.map((v) => v.join(",")).join("\n");
        }
        get isTextObserved() {
            return this._isTextObserved;
        }
        set isTextObserved(b) {
            if (this._isTextObserved != b) {
                if (this._isTextObserved) {
                    this.cellTextObserver.disconnect();
                }
                else {
                    const option1 = { childList: true, subtree: true };
                    this.cellArray.forEach((v) => {
                        this.cellTextObserver.observe(v.svgText, option1);
                    });
                }
            }
        }
        // #region construct2
        updateCellByLogicCell(table, x, y) {
            const cell = this.cells[y][x];
            //const isShow = HTMLFunctions.(this.svgGroup);
            if (table != null) {
                const cellInfo = table.cells[y][x];
                if (cellInfo != null) {
                    if (cellInfo.cellClass != null) {
                        GraphTableSVG.SVG.resetStyle(cell.svgGroup.style);
                        cell.svgGroup.setAttribute("class", cellInfo.cellClass);
                    }
                    if (cellInfo.backgroundClass != null) {
                        GraphTableSVG.SVG.resetStyle(cell.svgBackground.style);
                        cell.svgBackground.setAttribute("class", cellInfo.backgroundClass);
                    }
                    if (cellInfo.textClass != null) {
                        GraphTableSVG.SVG.resetStyle(cell.svgText.style);
                        cell.svgText.setAttribute("class", cellInfo.textClass);
                    }
                    cellInfo.createTextElement(cell.svgText);
                    if (cellInfo.topBorderClass != null) {
                        let borderClass = cellInfo.topBorderClass;
                        GraphTableSVG.SVG.resetStyle(cell.svgTopBorder.style);
                        cell.svgTopBorder.setAttribute("class", borderClass);
                    }
                    if (cellInfo.leftBorderClass != null) {
                        let borderClass = cellInfo.leftBorderClass;
                        GraphTableSVG.SVG.resetStyle(cell.svgLeftBorder.style);
                        cell.svgLeftBorder.setAttribute("class", borderClass);
                    }
                    if (cellInfo.rightBorderClass != null) {
                        let borderClass = cellInfo.rightBorderClass;
                        GraphTableSVG.SVG.resetStyle(cell.svgRightBorder.style);
                        cell.svgRightBorder.setAttribute("class", borderClass);
                    }
                    if (cellInfo.bottomBorderClass != null) {
                        let borderClass = cellInfo.bottomBorderClass;
                        GraphTableSVG.SVG.resetStyle(cell.svgBottomBorder.style);
                        cell.svgBottomBorder.setAttribute("class", borderClass);
                    }
                }
            }
            /*
            if (!cell.svgGroup.hasStyleAttribute(CustomAttributeNames.Style.paddingLeft)) cell.svgGroup.setPaddingLeft(10);
            if (!cell.svgGroup.hasStyleAttribute(CustomAttributeNames.Style.paddingRight)) cell.svgGroup.setPaddingRight(10);
            if (!cell.svgGroup.hasStyleAttribute(CustomAttributeNames.Style.paddingTop)) cell.svgGroup.setPaddingTop(10);
            if (!cell.svgGroup.hasStyleAttribute(CustomAttributeNames.Style.paddingBottom)) cell.svgGroup.setPaddingBottom(10);
            */
            //if (!cell.svgGroup.hasStyleAttribute(CustomAttributeNames.Style.VerticalAnchor)) cell.verticalAnchor = VerticalAnchor.Middle;
            //if (!cell.svgGroup.hasStyleAttribute(CustomAttributeNames.Style.HorizontalAnchor)) cell.horizontalAnchor = HorizontalAnchor.Center;
            //if(this.cells[y][x].)
        }
        /**
         * LogicTableからTableを構築します。
         * @param table 入力LogicTable
         */
        constructFromLogicTable(table) {
            if (table.tableClassName != null)
                this.svgGroup.setAttribute("class", table.tableClassName);
            this.setSize(table.columnWidths.length, table.rowHeights.length);
            if (table.x != null)
                this.cx = table.x;
            if (table.y != null)
                this.cy = table.y;
            for (let y = 0; y < this.rowCount; y++) {
                for (let x = 0; x < this.columnCount; x++) {
                    this.updateCellByLogicCell(table, x, y);
                }
            }
            //this.fitSizeToOriginalCells();
            for (let y = 0; y < this.rowCount; y++) {
                const h = table.rowHeights[y];
                if (h != null)
                    this.rows[y].height = h;
            }
            for (let x = 0; x < this.columnCount; x++) {
                const w = table.columnWidths[x];
                //this.columns[x].defaultWidth = w;
                if (w != null)
                    this.columns[x].width = w;
            }
            for (let y = 0; y < this.rowCount; y++) {
                for (let x = 0; x < this.columnCount; x++) {
                    const cell = this.cells[y][x];
                    const logicCell = table.cells[y][x];
                    if (logicCell.connectedColumnCount > 1 || logicCell.connectedRowCount > 1) {
                        if (cell.canMerge(logicCell.connectedColumnCount, logicCell.connectedRowCount)) {
                            cell.merge(logicCell.connectedColumnCount, logicCell.connectedRowCount);
                        }
                    }
                }
            }
            //this.updateNodeRelations();
            if (this.isInitialized) {
                this.update();
            }
        }
        /**
         * 二次元文字列配列から表を作成します。
         * @param table 各セルの文字列
         * @param option 表情報
         * @param option.x 表のx座標
         * @param option.y 表のy座標
         * @param option.rowHeight 各行の縦幅(px)
         * @param option.columnWidth 各列の横幅(px)
         * @param option.tableClassName 表(svgGroup)のクラス属性
         * @param option.isLatexMode Trueのときセルの文字列をLatex表記とみなして描画します。
         *
         */
        construct(table, option = {}) {
            if (option.isLatexMode == undefined)
                option.isLatexMode = false;
            if (option.x == undefined)
                option.x = 0;
            if (option.y == undefined)
                option.y = 0;
            [this.cx, this.cy] = [option.x, option.y];
            this.clear();
            let width = 0;
            table.forEach((v) => { if (v.length > width)
                width = v.length; });
            let height = table.length;
            this.setSize(width, height);
            table.forEach((v, y) => {
                v.forEach((str, x) => {
                    this.cells[y][x].svgText.setTextContent(str, option.isLatexMode);
                });
            });
            if (option.rowHeight != undefined) {
                this.rows.forEach((v) => v.height = option.rowHeight);
            }
            if (option.columnWidth != undefined) {
                this.columns.forEach((v) => v.width = option.columnWidth);
            }
        }
        // #endregion
        // #region vba
        /**
         * 表からVBAコードを作成します。
         * @param id
         * @param slide
         */
        createVBACode2(id, slide) {
            const lines = new Array(0);
            lines.push(`Sub create${id}(createdSlide As slide)`);
            const [main, sub] = this.createVBAMainCode("createdSlide", id);
            lines.push(main);
            lines.push(`End Sub`);
            lines.push(sub);
            return lines;
        }
        /**
         * 現在のテーブルを表すVBAコードを返します。
         */
        createVBAMainCode(slideName, id) {
            const fstLines = [];
            const lines = new Array(0);
            fstLines.push(` Dim tableS As shape`);
            fstLines.push(` Dim table_ As table`);
            //lines.push(` Set tableS = CreateTable(createdSlide, ${table.height}, ${table.width})`);
            fstLines.push(` Set tableS = ${slideName}.Shapes.AddTable(${this.rowCount}, ${this.columnCount})`);
            fstLines.push(` tableS.Left = ${this.svgGroup.getX()}`);
            fstLines.push(` tableS.Top = ${this.svgGroup.getY()}`);
            //page.Shapes.AddTable(row_, column_)
            fstLines.push(` Set table_ = tableS.table`);
            const tableName = "table_";
            for (let y = 0; y < this.rowCount; y++) {
                lines.push([` Call EditRow(${tableName}.Rows(${y + 1}), ${this.rows[y].height})`]);
            }
            for (let x = 0; x < this.columnCount; x++) {
                lines.push([` Call EditColumn(${tableName}.Columns(${x + 1}), ${this.columns[x].width})`]);
            }
            for (let y = 0; y < this.rowCount; y++) {
                for (let x = 0; x < this.columnCount; x++) {
                    const cell = this.cells[y][x];
                    let color = GraphTableSVG.Color.createRGBFromColorName(cell.svgBackground.getPropertyStyleValueWithDefault("fill", "gray"));
                    //const style = cell.svgBackground.style.fill != null ? VBATranslateFunctions.colorToVBA(cell.svgBackground.style.fill) : "";
                    GraphTableSVG.VBATranslateFunctions.TranslateSVGTextElement(lines, this.cells[y][x].svgText, `${tableName}.cell(${y + 1},${x + 1}).Shape.TextFrame.TextRange`);
                    lines.push([`${tableName}.cell(${y + 1},${x + 1}).Shape.Fill.ForeColor.RGB = RGB(CInt(${color.r}), CInt(${color.g}), CInt(${color.b}))`]);
                    //lines.push(` Call EditCell(${tableName}.cell(${y + 1},${x + 1}), "${cell.svgText.textContent}", ${color})`);
                }
            }
            for (let y = 0; y < this.rowCount; y++) {
                for (let x = 0; x < this.columnCount; x++) {
                    const cell = this.cells[y][x];
                    const vAnchor = GraphTableSVG.VBATranslateFunctions.ToVerticalAnchor(cell.verticalAnchor == null ? "" : cell.verticalAnchor);
                    const hAnchor = GraphTableSVG.VBATranslateFunctions.ToHorizontalAnchor(cell.horizontalAnchor == null ? "" : cell.horizontalAnchor);
                    lines.push([` Call EditCellTextFrame(${tableName}.cell(${y + 1},${x + 1}).Shape.TextFrame, ${cell.paddingTop}, ${cell.paddingBottom}, ${cell.paddingLeft}, ${cell.paddingRight}, ${vAnchor}, ${hAnchor})`]);
                }
            }
            for (let y = 0; y < this.rowCount; y++) {
                for (let x = 0; x < this.columnCount; x++) {
                    const cell = this.cells[y][x];
                    const upLineStyle = GraphTableSVG.VBATranslateFunctions.colorToVBA(cell.svgTopBorder.getPropertyStyleValueWithDefault("stroke", "gray"));
                    const upLineStrokeWidth = cell.svgTopBorder.style.strokeWidth != null ? GraphTableSVG.parseInteger(cell.svgTopBorder.style.strokeWidth) : "";
                    const upLineVisibility = cell.svgTopBorder.style.visibility != null ? GraphTableSVG.visible(cell.svgTopBorder.style.visibility) : "";
                    lines.push([` Call EditCellBorder(${tableName}.cell(${y + 1},${x + 1}).Borders(ppBorderTop), ${upLineStyle}, ${upLineStrokeWidth}, ${upLineVisibility})`]);
                    const leftLineStyle = GraphTableSVG.VBATranslateFunctions.colorToVBA(cell.svgLeftBorder.getPropertyStyleValueWithDefault("stroke", "gray"));
                    const leftLineStrokeWidth = cell.svgLeftBorder.style.strokeWidth != null ? GraphTableSVG.parseInteger(cell.svgLeftBorder.style.strokeWidth) : "";
                    const leftLineVisibility = cell.svgLeftBorder.style.visibility != null ? GraphTableSVG.visible(cell.svgLeftBorder.style.visibility) : "";
                    lines.push([` Call EditCellBorder(${tableName}.cell(${y + 1},${x + 1}).Borders(ppBorderLeft), ${leftLineStyle}, ${leftLineStrokeWidth}, ${leftLineVisibility})`]);
                    if (x + 1 == this.columnCount) {
                        const rightLineStyle = GraphTableSVG.VBATranslateFunctions.colorToVBA(cell.svgRightBorder.getPropertyStyleValueWithDefault("stroke", "gray"));
                        const rightLineStrokeWidth = cell.svgRightBorder.style.strokeWidth != null ? GraphTableSVG.parseInteger(cell.svgRightBorder.style.strokeWidth) : "";
                        const rightLineVisibility = cell.svgRightBorder.style.visibility != null ? GraphTableSVG.visible(cell.svgRightBorder.style.visibility) : "";
                        lines.push([` Call EditCellBorder(${tableName}.cell(${y + 1},${x + 1}).Borders(ppBorderRight), ${rightLineStyle}, ${rightLineStrokeWidth}, ${rightLineVisibility})`]);
                    }
                    if (y + 1 == this.rowCount) {
                        const bottomLineStyle = GraphTableSVG.VBATranslateFunctions.colorToVBA(cell.svgBottomBorder.getPropertyStyleValueWithDefault("stroke", "gray"));
                        const bottomLineStrokeWidth = cell.svgBottomBorder.style.strokeWidth != null ? GraphTableSVG.parseInteger(cell.svgBottomBorder.style.strokeWidth) : "";
                        const bottomLineVisibility = cell.svgBottomBorder.style.visibility != null ? GraphTableSVG.visible(cell.svgBottomBorder.style.visibility) : "";
                        lines.push([` Call EditCellBorder(${tableName}.cell(${y + 1},${x + 1}).Borders(ppBorderBottom), ${bottomLineStyle}, ${bottomLineStrokeWidth}, ${bottomLineVisibility})`]);
                    }
                }
            }
            this.cellArray.forEach((v) => {
                if (v.isMaster) {
                    const cells = v.cellsInGroup;
                    for (let y = 0; y < cells.length; y++) {
                        for (let x = 1; x < cells[y].length; x++) {
                            lines.push([` ${tableName}.Cell(${cells[y][0].cellY + 1}, ${cells[y][0].cellX + 1}).Merge MergeTo := ${tableName}.Cell(${cells[y][x].cellY + 1}, ${cells[y][x].cellX + 1})`]);
                        }
                    }
                    for (let y = 1; y < cells.length; y++) {
                        lines.push([` ${tableName}.Cell(${cells[0][0].cellY + 1}, ${cells[0][0].cellX + 1}).Merge MergeTo := ${tableName}.Cell(${cells[y][0].cellY + 1}, ${cells[y][0].cellX + 1})`]);
                    }
                }
            });
            const x0 = GraphTableSVG.VBATranslateFunctions.joinLines(fstLines);
            const [x1, y1] = GraphTableSVG.VBATranslateFunctions.splitCode(lines, `${tableName} as Table`, `${tableName}`, id);
            return [GraphTableSVG.VBATranslateFunctions.joinLines([x0, x1]), y1];
        }
        // #endregion
        //private _updateCounter = 0;
        // #region dynamic
        /**
         * 新しいセルを作成します。
         */
        /*
        private createCell(cellX: number, cellY: number): Cell {
            const cellClass = this.defaultCellClass == null ? undefined : this.defaultCellClass;
            const borderClass = this.defaultBorderClass == null ? undefined : this.defaultBorderClass;

            const option: CellOption = { cellClass: cellClass, borderClass: borderClass };
            return new Cell(this, cellX, cellY, option);
        }
        */
        /*
        Dynamic Method
        */
        /**
         * テーブルを削除します。
         * @param svg 表が格納されているSVG要素
         */
        removeTable(svg) {
            if (svg.contains(this.svgGroup)) {
                svg.removeChild(this.svgGroup);
            }
        }
        firstSetSize() {
            this.createRowBorder(0, 1);
            this.createRowBorder(0, 1);
            this.createColumnBorder(0, 1);
            this.createColumnBorder(0, 1);
            this._rows.splice(0, 0, new GraphTableSVG.CellRow(this, 0, undefined));
            this._rows[0]._appendCell();
            this._columns.splice(0, 0, new GraphTableSVG.CellColumn(this, 0));
        }
        borderSizeCheck(_w, _h) {
            const w = this.borderRows[0].borders.length;
            const h = this.borderColumns[0].borders.length;
            if (w != _w)
                throw Error(`error ${_w} ${_h} ${w} ${h}`);
            if (h != _h)
                throw Error(`error ${_w} ${_h} ${w} ${h}`);
            this.borderRows.forEach((v, i) => {
                if (w != v.borders.length)
                    throw Error("border rows error");
            });
            this.borderColumns.forEach((v, i) => {
                if (h != v.borders.length)
                    throw Error(`border column error ${h} ${v.borders.length} ${i}`);
            });
            //return [w, h];
        }
        /**
         * 表の列数と行数を変更します。
         * @param columnCount 列数
         * @param rowCount 行数
         */
        setSize(columnCount, rowCount) {
            this.clear();
            this.isSetSize = true;
            const borderRowCount = rowCount + 1;
            const borderColumnCount = columnCount + 1;
            if (this.rowCount == 0 || this.columnCount == 0)
                throw Error("Table Empty Error");
            /*
            while (this._borderRows.length < rowCount + 1) {
                const i = this._borderRows.length;
                this.createRowBorder(i);
                this.insertLineIntoColumns(i)
                //this.createRow(i-1);
            }
            */
            while (this.rowCount < rowCount) {
                this.primitiveInsertRow(this.rowCount, false);
            }
            while (this.columnCount < columnCount) {
                this.primitiveInsertColumn(this.columnCount, false);
            }
            /*
            this.borderSizeCheck(1, rowCount);
            while (this._borderColumns.length < columnCount + 1) {
                const i = this._borderColumns.length + 1;
                this.createColumnBorder(i);
                this.insertLineIntoRows(i);
            }
            this.borderSizeCheck(columnCount, rowCount);

            while (this.columnCount < columnCount) {
                this.createColumn(this.columnCount);
            }
            */
            /*
            while (this.rowCount < rowCount) {
                this.createRow(this.rowCount);
            }
            */
            this.updateNodeRelations();
            this.isSetSize = false;
            /*
            this.renumbering();
            this.update();
            */
        }
        primitiveInsertRow(ithRow, insertTopBorders) {
            let ithRowBorder = insertTopBorders ? ithRow : ithRow + 1;
            if (ithRow < 0 || ithRow > this.rowCount)
                throw new Error("primitive insert row error");
            if (ithRow == 0)
                ithRowBorder = 0;
            if (ithRow == this.rowCount)
                ithRowBorder = this.borderRows.length;
            this.createRowBorder(ithRowBorder);
            this.insertYVerticalBorders(ithRow);
            this.createRow(ithRow);
        }
        primitiveInsertColumn(ithColumn, insertLeftBorders) {
            let ithColumnBorder = insertLeftBorders ? ithColumn : ithColumn + 1;
            if (ithColumn < 0 || ithColumn > this.columnCount)
                throw new Error("primitive insert column error");
            if (ithColumn == 0)
                ithColumnBorder = 0;
            if (ithColumn == this.columnCount)
                ithColumnBorder = this.borderColumns.length;
            this.createColumnBorder(ithColumnBorder);
            this.insertXHorizontalBorders(ithColumn);
            this.createColumn(ithColumn);
        }
        get borderColumnCount() {
            return this.columnCount + 1;
        }
        get borderRowCount() {
            return this.rowCount + 1;
        }
        /**
         * rowCount = 0, columnCount = 0のテーブルを作成します。
         */
        clear() {
            if (this.rowCount == 0 || this.columnCount == 0)
                throw Error("Table Empty Error");
            if (this.columnCount != this.columns.length)
                throw Error("clear error");
            while (this.rowCount > 1) {
                this.primitiveRemoveRow(1, false);
            }
            while (this.columnCount > 1) {
                this.primitiveRemoveColumn(1, false);
            }
            this.updateNodeRelations();
        }
        /*
        public removeCell(i: number) {
            this.cells[i].removeFromTable(false);
            //this.cells.forEach((v) => v.removeFromTable(false));
            this.cells.splice(i, 1);
        }
        */
        removeCellRow(i) {
            this.rows[i]._dispose();
            this.rows.splice(i, 1);
        }
        removeCellColumn(i) {
            this.columns[i]._dispose();
            this.columns.splice(i, 1);
        }
        primitiveRemoveRow(ithRow, removeTopBorders) {
            const ithBorderRow = removeTopBorders ? ithRow : ithRow + 1;
            if (ithRow < 0 || ithRow >= this.rowCount)
                throw new Error("error");
            //this.removeRow(rowi);
            this.removeCellRow(ithRow);
            ;
            this.removeRowBorder(ithBorderRow);
            this.deleteYVerticalBorders(ithRow);
        }
        primitiveRemoveColumn(ithColumn, removeLeftBorders) {
            const ithborderColumn = removeLeftBorders ? ithColumn : ithColumn + 1;
            if (ithColumn < 0 || ithColumn >= this.columnCount)
                throw new Error("primitive insert column error");
            this.removeCellColumn(ithColumn);
            //this.columns[ithColumn].remove(true);
            //this.table.columns.splice(x, 1);
            this.removeColumnBorder(ithborderColumn);
            this.deleteXHorizontalBorders(ithColumn);
        }
        removeColumnBorder(i) {
            //this._borderRows.forEach((v) => v.removeBorder(i));
            this._borderColumns[i].remove();
            this._borderColumns.splice(i, 1);
        }
        removeRowBorder(i) {
            //this._borderColumns.forEach((v) => v.removeBorder(i));
            this._borderRows[i].remove();
            this._borderRows.splice(i, 1);
        }
        removeRow(ithRow) {
            this.primitiveRemoveRow(ithRow, false);
            this.updateNodeRelations();
            this.update();
        }
        removeColumn(ithColumn) {
            this.primitiveRemoveColumn(ithColumn, false);
            this.updateNodeRelations();
            this.update();
        }
        deleteXHorizontalBorders(i) {
            this._borderRows.forEach((v) => {
                v.removeBorder(i);
            });
        }
        deleteYVerticalBorders(i) {
            this._borderColumns.forEach((v) => {
                v.removeBorder(i);
            });
        }
        createColumnBorder(i, borderRowCount = this.borderRows.length - 1) {
            const column = new GraphTableSVG.BorderColumn(this, i, borderRowCount, undefined);
            this._borderColumns.splice(i, 0, column);
        }
        createRowBorder(i, borderColumnCount = this.borderColumns.length - 1) {
            const row = new GraphTableSVG.BorderRow(this, i, borderColumnCount, undefined);
            this._borderRows.splice(i, 0, row);
        }
        createRow(i) {
            //const cell: Cell[] = [];
            //this.cells.splice(i, 0, cell);
            const columnCount = this.columnCount;
            const row = new GraphTableSVG.CellRow(this, i, undefined);
            this._rows.splice(i, 0, row);
            row._appendCell(columnCount);
            /*
            for (let x = 0; x < this.columnCount; x++) {
                cell[x] = this.createCell(x, i);
                if (this._columns.length <= x) this._columns.push(new Column(this, 0));
            }
            */
        }
        createColumn(i) {
            for (let y = 0; y < this.rowCount; y++) {
                this.rows[y]._insertCell(i);
                //const cell = this.createCell(i, y);
                //this.cells[y].splice(i, 0, cell);
            }
            this._columns.splice(i, 0, new GraphTableSVG.CellColumn(this, i));
        }
        insertXHorizontalBorders(i) {
            this._borderRows.forEach((v) => {
                v.insertBorder(i, undefined);
            });
        }
        insertYVerticalBorders(i) {
            this._borderColumns.forEach((v) => {
                v.insertBorder(i, undefined);
            });
        }
        /**
        * 新しい行をi番目の行に挿入します
        * @param 挿入行の行番号
        */
        insertRow(ithRow) {
            this.primitiveInsertRow(ithRow, false);
            this.updateNodeRelations();
            this.update();
        }
        /**
        * 新しい列をi番目の列に挿入します。
        * @param ithColumn 挿入列の列番号
        */
        insertColumn(ithColumn) {
            this.primitiveInsertColumn(ithColumn, false);
            this.updateNodeRelations();
            this.update();
        }
        /**
         * 新しい行を作って挿入します。
         * @param i 挿入行の行番号
         * @param columnCount 挿入行の列数
         */
        /*
        private insertRowFunction(i: number, columnCount: number = this.columnCount) {
            const cell: Cell[] = [];

            this.cells.splice(i, 0, cell);
            this._rows.splice(i, 0, new Row(this, i));
            for (let x = 0; x < columnCount; x++) {
                cell[x] = this.createCell(x, i);
                if (this._columns.length <= x) this._columns.push(new Column(this, 0));
            }

        }
        */
        /**
        新しい列を最後の列に追加します。
        */
        appendColumn() {
            //this.insertColumn(this.columnCount);
            this.primitiveInsertColumn(this.columnCount, false);
            this.updateNodeRelations();
            this.update();
        }
        /**
        新しい行を行の最後に追加します。
        */
        appendRow() {
            //this.insertRow(this.rowCount);
            this.primitiveInsertRow(this.rowCount, false);
            this.updateNodeRelations();
            this.update();
            //this.update();
        }
        /**
        各セルのサイズを再計算します。
        */
        update() {
            super.update();
            this._observer.disconnect();
            const display = this.svgGroup.getPropertyStyleValue("display");
            const b = HTMLFunctions.isShow(this.svgGroup);
            if (!b) {
                return;
            }
            this._isDrawing = true;
            if (true) {
                this.cellArray.forEach((v) => v.update());
                this.fitSizeToOriginalCells(false);
                this.prevShow = false;
            }
            this.resize();
            this.relocation();
            this._isDrawing = false;
            this._observer.observe(this.svgGroup, this.groupObserverOption);
        }
        /**
         * セル番号を振り直します。
         */
        /*
        private renumbering() {

            this.rows.forEach((v, i) => v.cellY = i);
            this.columns.forEach((v, i) => v.cellX = i);
            //this.cellArray.forEach((v) => v.updateBorderAttributes());

        }
        */
        updateNodeRelations() {
            this.rows.forEach((v, i) => v.cellY = i);
            this.columns.forEach((v, i) => v.cellX = i);
            this.borderRows.forEach((v, i) => {
                if (v.borders.length != this.columnCount) {
                    throw new Error(`error row ${i} ${v.borders.length} ${this.columnCount}`);
                }
            });
            this.borderColumns.forEach((v, i) => {
                if (v.borders.length != this.rowCount) {
                    throw new Error(`error column ${i} ${v.borders.length} ${this.rowCount}`);
                }
            });
            this.cellArray.forEach((v) => v.updateNodeRelations());
        }
        /**
         * サイズを再計算します。
         */
        resize() {
            this.rows.forEach((v) => v.resize());
            this.columns.forEach((v) => v.resize());
        }
        /**
         * 各セルの位置を再計算します。
         */
        relocation() {
            let height = 0;
            this.rows.forEach(function (x, i, arr) {
                x.setY(height);
                height += x.height;
            });
            let width = 0;
            this.columns.forEach(function (x, i, arr) {
                x.setX(width);
                width += x.width;
            });
            this.cellArray.forEach((v) => v.relocation());
            //this.rows.forEach((v) => v.relocation());
        }
    }
    GraphTableSVG.GTable = GTable;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    let GraphArrangement;
    (function (GraphArrangement) {
        function standardTreeWidthArrangement(graph) {
            const [xi, yi] = GraphTableSVG.TreeArrangement.getXYIntervals(graph);
            const roots = graph.roots.length == 0 ? [graph.vertices[0]] : graph.roots;
            const externalEdges = createExternalEdgeDicInlevelorder(graph);
            let [x, y] = [0, 0];
            roots.forEach((v => {
                const tree = v.createVirtualTree(externalEdges);
                standardTreeWidthArrangementSub(tree, xi, yi);
                tree.setRegionXYLocation(x, y);
                x += tree.region().width;
            }));
        }
        GraphArrangement.standardTreeWidthArrangement = standardTreeWidthArrangement;
        function standardTreeWidthArrangementSub(tree, xInterval, yInterval) {
            tree.subTreeRoot.cx = 0;
            tree.subTreeRoot.cy = 0;
            let centerX = 0;
            const children = tree.virtualTreeChildren;
            let x = 0;
            //tree.root.svgText.textContent = tree.getHeight().toString();
            if (children.length == 1) {
                tree.subTreeRoot.cx = children[0].root.cx;
                standardTreeWidthArrangementSub(children[0], xInterval, yInterval);
                children[0].setRootLocation(tree.root.cx, yInterval);
            }
            else if (children.length == 0) {
            }
            else {
                for (let i = 0; i < children.length; i++) {
                    standardTreeWidthArrangementSub(children[i], xInterval, yInterval);
                    const rect = children[i].region();
                    const diffX = children[i].root.cx - rect.x;
                    children[i].setRootLocation(x + diffX, yInterval);
                    x += rect.width + xInterval;
                    if (i < children.length - 1) {
                        centerX += x - (xInterval / 2);
                    }
                }
                centerX = centerX / (children.length - 1);
                tree.subTreeRoot.cx = centerX;
            }
        }
        function createExternalEdgeDicInPreorder(node, incomingEdge, externalEdges, touchedVertexes) {
            if (incomingEdge == null) {
                node.outcomingEdges.forEach((v) => {
                    const child = v.endVertex;
                    if (child != null) {
                        createExternalEdgeDicInPreorder(child, v, externalEdges, touchedVertexes);
                    }
                });
            }
            else {
                if (!touchedVertexes.has(node)) {
                    touchedVertexes.add(node);
                    node.outcomingEdges.forEach((v) => {
                        const child = v.endVertex;
                        if (child != null) {
                            createExternalEdgeDicInPreorder(child, v, externalEdges, touchedVertexes);
                        }
                    });
                }
                else {
                    if (incomingEdge != null) {
                        externalEdges.add(incomingEdge);
                    }
                }
            }
        }
        function createExternalEdgeDicInlevelorder(graph) {
            const externalEdges = new Set();
            const touchedVertexes = new Set();
            const inputEdges = new Array(0);
            const roots = graph.roots.length == 0 ? [graph.vertices[0]] : graph.roots;
            roots.forEach((v => {
                touchedVertexes.add(v);
                v.outcomingEdges.forEach((w) => inputEdges.push(w));
            }));
            createExternalEdgeDicInlevelorderSub(inputEdges, externalEdges, touchedVertexes, 0);
            return externalEdges;
        }
        function createExternalEdgeDicInlevelorderSub(inputEdges, externalEdges, touchedVertexes, level) {
            //const edges = inputEdges.filter((v) => v.endVertex != null);
            const nextEdges = new Array(0);
            inputEdges.forEach((v) => {
                if (v.endVertex != null) {
                    const node = v.endVertex;
                    if (!touchedVertexes.has(node)) {
                        touchedVertexes.add(node);
                        node.outcomingEdges.forEach((w) => nextEdges.push(w));
                    }
                    else {
                        externalEdges.add(v);
                    }
                }
            });
            if (nextEdges.length > 0) {
                createExternalEdgeDicInlevelorderSub(nextEdges, externalEdges, touchedVertexes, level + 1);
            }
        }
    })(GraphArrangement = GraphTableSVG.GraphArrangement || (GraphTableSVG.GraphArrangement = {}));
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    let Parse;
    (function (Parse) {
        /**
         * 入力文字列をパースしてLogicTreeを構築します。
         * @param parseText
         */
        function parseTree(parseText) {
            const [tree, pos] = parseTreeSub(parseText, 0);
            return tree;
        }
        Parse.parseTree = parseTree;
        function parseTreeSub(str, pos) {
            const node = new GraphTableSVG.LogicTree({ item: "" });
            const c = str[pos];
            if (c != '(') {
                throw Error("Parse Error");
            }
            else {
                pos++;
                while (true) {
                    const c2 = str[pos];
                    if (c2 == ')') {
                        break;
                    }
                    else if (c2 == '(') {
                        const [child, newPos] = parseTreeSub(str, pos++);
                        node.children.push(child);
                        pos = newPos + 1;
                    }
                    else {
                        pos++;
                    }
                }
                return [node, pos];
            }
        }
        /**
         * 入力木構造を表現する文字列を出力します。
         * @param tree 文字列に変換する木構造
         */
        function getParseString(tree) {
            let str = "";
            str += "(";
            tree.outcomingEdges.forEach((v) => {
                if (v.endVertex != null) {
                    str += getParseString(v.endVertex);
                }
            });
            str += ")";
            return str;
        }
        Parse.getParseString = getParseString;
    })(Parse = GraphTableSVG.Parse || (GraphTableSVG.Parse = {}));
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    let TreeArrangement;
    (function (TreeArrangement) {
        function reverse(graph, isX, isY) {
            if (graph.vertices.length > 0) {
                if (isY) {
                    const midY = middle(graph.vertices.map((v) => v.cy));
                    graph.vertices.forEach((v) => {
                        if (v.cy < midY) {
                            v.cy += 2 * (midY - v.cy);
                        }
                        else {
                            v.cy -= 2 * (v.cy - midY);
                        }
                    });
                }
                if (isX) {
                    const midX = middle(graph.vertices.map((v) => v.cx));
                    graph.vertices.forEach((v) => {
                        if (v.cx < midX) {
                            v.cx += 2 * (midX - v.cx);
                        }
                        else {
                            v.cx -= 2 * (v.cx - midX);
                        }
                    });
                }
            }
        }
        TreeArrangement.reverse = reverse;
        function average(items) {
            if (items.length > 0) {
                let y = 0;
                items.forEach((v) => {
                    y += v;
                });
                return y / items.length;
            }
            else {
                throw new Error();
            }
        }
        function middle(items) {
            if (items.length > 0) {
                let min = items[0];
                let max = items[0];
                items.forEach((w) => {
                    if (min > w)
                        min = w;
                    if (max < w)
                        max = w;
                });
                return (min + max) / 2;
            }
            else {
                throw new Error();
            }
        }
        /**
         * 子Vertexが一列に並ぶようにグラフ内のVertexを整列します。
         * @param graph
         */
        function alignVerticeByChildren(graph) {
            if (!graph.isShow)
                return;
            const [xi, yi] = getXYIntervals(graph);
            if (graph.rootVertex != null) {
                const rootTree = graph.rootVertex.createVirtualTree();
                const [x, y] = [rootTree.subTreeRoot.x, rootTree.subTreeRoot.y];
                alignVerticeByChildrenSub(rootTree, xi, yi);
                rootTree.setRootLocation(x, y);
                //graph.update();
            }
            alignTrees(graph);
        }
        TreeArrangement.alignVerticeByChildren = alignVerticeByChildren;
        /**
         * 子Vertexが一列に並ぶようにグラフ内のVertexを整列します。
         * @param tree
         * @param xInterval
         * @param yInterval
         */
        function alignVerticeByChildrenSub(tree, xInterval, yInterval) {
            tree.subTreeRoot.cx = 0;
            tree.subTreeRoot.cy = 0;
            let leaves = 0;
            const children = tree.virtualTreeChildren;
            const leaveSizeWidthHalf = (tree.leaves.length * xInterval) / 2;
            let x = -leaveSizeWidthHalf;
            for (let i = 0; i < children.length; i++) {
                alignVerticeByChildrenSub(children[i], xInterval, yInterval);
                const w = (children[i].leaves.length * xInterval) / 2;
                children[i].setRootLocation(x + w, yInterval);
                x += children[i].leaves.length * xInterval;
            }
        }
        /**
         * グラフ内のVertexからVertex間の水平間隔と垂直間隔を自動で算出します。
         * @param graph
         */
        function computeAutoXYIntervals(graph) {
            let yMaximalInterval = 100;
            let xMaximalInterval = 100;
            graph.vertices.forEach((v) => {
                if (v.width > xMaximalInterval)
                    xMaximalInterval = v.width;
                if (v.height > yMaximalInterval)
                    yMaximalInterval = v.height;
            });
            return [xMaximalInterval * 2, yMaximalInterval * 2];
        }
        /**
         * グラフに設定されているVertex間の水平間隔と垂直間隔を算出します。
         * @param graph
         */
        function getXYIntervals(graph) {
            const [xMaximalInterval, yMaximalInterval] = computeAutoXYIntervals(graph);
            const xi = graph.vertexXInterval != null ? graph.vertexXInterval : xMaximalInterval;
            const yi = graph.vertexYInterval != null ? graph.vertexYInterval : yMaximalInterval;
            return [xi, yi];
        }
        TreeArrangement.getXYIntervals = getXYIntervals;
        /**
         * グラフ内の森を並べます。最初の木が内接する四角形の左上の座標は[0,0]です。
         * @param graph
         */
        function alignTrees(graph) {
            let x = 0;
            graph.roots.forEach((v) => {
                const region = v.createVirtualTree().region();
                v.createVirtualTree().setRectangleLocation(x, 0);
                //x += graph.vertexXInterval != null ? graph.vertexXInterval : 0;
                x += region.width;
            });
        }
        function addOffset(graph, x, y) {
            graph.vertices.forEach((v) => {
                v.cx += x;
                v.cy += y;
            });
        }
        TreeArrangement.addOffset = addOffset;
        /**
         * 葉が一列に並ぶようにVertexを整列します。
         * @param forest
         * @param xInterval
         * @param yInterval
         */
        function alignVerticeByLeaveSub(forest, xInterval, yInterval) {
            let leafCounter = 0;
            forest.getOrderedVertices(GraphTableSVG.VertexOrder.Postorder).forEach((v) => {
                let x = 0;
                let y = 0;
                if (v.isLeaf) {
                    x = leafCounter * xInterval;
                    leafCounter++;
                }
                else {
                    v.children.forEach((w) => {
                        x += w.cx;
                        if (y < w.cy)
                            y = w.cy;
                    });
                    x = x / v.children.length;
                    y += yInterval;
                }
                v.cx = x;
                v.cy = y;
            });
        }
        TreeArrangement.alignVerticeByLeaveSub = alignVerticeByLeaveSub;
        /**
         * 葉が一列に並ぶようにVertexを整列します。
         * @param graph
         */
        function alignVerticeByLeave(graph) {
            if (!graph.isShow)
                return;
            graph.vertices.forEach((v) => { v.cx = 0; v.cy = 0; });
            const [xi, yi] = getXYIntervals(graph);
            alignVerticeByLeaveSub(graph, xi, yi);
            reverse(graph, false, true);
            //alignTrees(graph);
            const reg = graph.getRegion();
            const dx = reg.x < 0 ? -reg.x : 0;
            const dy = reg.y < 0 ? -reg.y : 0;
            addOffset(graph, dx, dy);
        }
        TreeArrangement.alignVerticeByLeave = alignVerticeByLeave;
        function standardTreeWidthArrangement(graph) {
            //const xInterval = graph.vertexXInterval;
            //const yInterval = graph.vertexYInterval;
            const [xi, yi] = getXYIntervals(graph);
            if (graph.rootVertex != null) {
                const rootTree = graph.rootVertex.createVirtualTree();
                const [x, y] = [rootTree.subTreeRoot.cx, rootTree.subTreeRoot.cy];
                standardTreeWidthArrangementSub(rootTree, xi, yi);
                rootTree.setRootLocation(x, y);
                //graph.update();
            }
        }
        TreeArrangement.standardTreeWidthArrangement = standardTreeWidthArrangement;
        function standardTreeWidthArrangementSub(tree, xInterval, yInterval) {
            tree.subTreeRoot.cx = 0;
            tree.subTreeRoot.cy = 0;
            let centerX = 0;
            const children = tree.virtualTreeChildren;
            let x = 0;
            if (children.length == 1) {
                tree.subTreeRoot.cx = children[0].root.cx;
                standardTreeWidthArrangementSub(children[0], xInterval, yInterval);
                children[0].setRootLocation(children[0].root.x, yInterval);
            }
            else if (children.length == 0) {
            }
            else {
                for (let i = 0; i < children.length; i++) {
                    standardTreeWidthArrangementSub(children[i], xInterval, yInterval);
                    const rect = children[i].region();
                    const diffX = children[i].root.cx - rect.x;
                    children[i].setRootLocation(x + diffX, yInterval);
                    x += rect.width + xInterval;
                    if (i < children.length - 1) {
                        centerX += x - (xInterval / 2);
                    }
                }
                centerX = centerX / (children.length - 1);
                tree.subTreeRoot.cx = centerX;
            }
        }
    })(TreeArrangement = GraphTableSVG.TreeArrangement || (GraphTableSVG.TreeArrangement = {}));
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    class VirtualTree {
        constructor(_root, _externalEdgeDic) {
            this.subTreeRoot = _root;
            if (_externalEdgeDic !== undefined) {
                this.externalEdges = _externalEdgeDic;
            }
            else {
                this.externalEdges = new Set();
            }
        }
        get root() {
            return this.subTreeRoot;
        }
        /**
         * 根の子ノードの配列を返します。
         */
        get children() {
            //const p = this;
            return this.subTreeRoot.outcomingEdges.filter((v) => !this.externalEdges.has(v) && v.endVertex != null).map((v) => v.endVertex);
            /*
            return this.subTreeRoot.children.map(function (x, i, arr) {
                return x;
            });
            */
        }
        get virtualTreeChildren() {
            return this.children.map((v) => v.createVirtualTree(this.externalEdges));
            //const child = this.children[nth];
            //return child.createVirtualTree(this.externalEdges);
        }
        /**
         * 根の親との間の辺を返します。
         */
        get parentEdge() {
            const p = this.subTreeRoot.incomingEdges.filter((v) => !this.externalEdges.has(v) && v.beginVertex != null);
            if (p.length != 0) {
                return p[0];
            }
            else {
                return null;
            }
            //return this.subTreeRoot.parentEdge;
        }
        /**
         * この木の中の全てのVertexを返します。
         * @param result
         */
        getSubtree(result = []) {
            result.push(this.subTreeRoot);
            const children = this.virtualTreeChildren;
            if (children.length == 0) {
                return result;
            }
            else {
                children.forEach(function (x, i, arr) {
                    x.getSubtree(result);
                });
                return result;
            }
        }
        /*
        public getLeaves(): Vertex[] {
            const p = this;
            return this.getSubtree().filter(function (x, i, arr) {
                return x.outcomingEdges.length == 0;
            });
        }
        */
        getHeight() {
            const children = this.virtualTreeChildren;
            if (children.length == 0) {
                return 1;
            }
            else {
                let max = 0;
                children.forEach(function (x, i, arr) {
                    if (max < x.getHeight())
                        max = x.getHeight();
                });
                return max + 1;
            }
        }
        /**
         * この木を内包する最小の四角形を返します。
         */
        region() {
            const p = this.getSubtree();
            let minX = this.subTreeRoot.x;
            let maxX = this.subTreeRoot.x;
            let minY = this.subTreeRoot.y;
            let maxY = this.subTreeRoot.y;
            p.forEach(function (x, i, arr) {
                const rect = x.region;
                if (minX > rect.x)
                    minX = rect.x;
                if (maxX < rect.right)
                    maxX = rect.right;
                if (minY > rect.y)
                    minY = rect.y;
                if (maxY < rect.bottom)
                    maxY = rect.bottom;
            });
            const result = new GraphTableSVG.Rectangle();
            result.x = minX;
            result.y = minY;
            result.width = maxX - minX;
            result.height = maxY - minY;
            return result;
        }
        /**
         * 一番左の葉を返します。
         */
        get mostLeftLeave() {
            return this.leaves[0];
        }
        addOffset(_x, _y) {
            this.getSubtree().forEach(function (x, i, arr) {
                x.cx += _x;
                x.cy += _y;
            });
        }
        setRectangleLocation(_x, _y) {
            const x = this.mostLeftLeave.region.x;
            const y = this.subTreeRoot.region.y;
            const diffX = _x - x;
            const diffY = _y - y;
            this.addOffset(diffX, diffY);
            //this.graph.updateEdges();
        }
        /**
         * 根を入力位置に移動させます。木も同様に移動します。
         * @param _x
         * @param _y
         */
        setRootLocation(_x, _y) {
            const x = this.subTreeRoot.cx;
            const y = this.subTreeRoot.cy;
            const diffX = _x - x;
            const diffY = _y - y;
            this.addOffset(diffX, diffY);
            //this.graph.updateEdges();
        }
        setRegionXYLocation(_x, _y) {
            const region = this.region();
            const newX = _x - region.x;
            const newY = _y - region.y;
            this.addOffset(newX, newY);
            //this.graph.updateEdges();
        }
        /**
         * 葉の配列を返します。
         */
        get leaves() {
            //const p = this;
            return this.getSubtree().filter((x) => {
                const r = x.outcomingEdges.filter((v) => !this.externalEdges.has(v) && v.endVertex != null).length;
                return r == 0;
            });
            //return this.getSubtree().filter(function (x, i, arr) {
            //
            //    return x.outcomingEdges.length == 0;
            //});
        }
    }
    GraphTableSVG.VirtualTree = VirtualTree;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    /**
     * 表の行を表現するクラスです。
     */
    class BorderRow {
        constructor(_table, _y, columnSize, borderClass) {
            this._borders = new Array(0);
            this.table = _table;
            this._svgGroup = GraphTableSVG.SVG.createGroup(this.table.svgRowBorderGroup);
            this._svgGroup.setAttribute("name", "border_row");
            this.borderY = _y;
            for (let x = 0; x < columnSize; x++) {
                this.insertBorder(x, borderClass !== undefined ? borderClass : GraphTableSVG.CustomAttributeNames.StyleValue.defaultCellBorderClass);
            }
        }
        get svgGroup() {
            return this._svgGroup;
        }
        /**
        列の単位セルのY座標を返します。
        */
        get borderY() {
            return Number(this._svgGroup.getAttribute(GraphTableSVG.Cell.cellYName));
        }
        set borderY(v) {
            this._svgGroup.setAttribute(GraphTableSVG.Cell.cellYName, `${v}`);
        }
        get borders() {
            return this._borders;
        }
        insertBorder(coromni, borderClass) {
            const line = GraphTableSVG.SVG.createLine(0, 0, 0, 0, borderClass !== undefined ? borderClass : GraphTableSVG.CustomAttributeNames.StyleValue.defaultCellBorderClass);
            this._svgGroup.appendChild(line);
            this._borders.splice(coromni, 0, line);
        }
        removeBorder(i) {
            this._borders[i].remove();
            this._borders.splice(i, 1);
        }
        remove() {
            this.svgGroup.remove();
        }
    }
    GraphTableSVG.BorderRow = BorderRow;
    class BorderColumn {
        constructor(_table, _x, rowSize, borderClass) {
            this._borders = new Array(0);
            this.table = _table;
            this._svgGroup = GraphTableSVG.SVG.createGroup(this.table.svgColumnBorderGroup);
            this._svgGroup.setAttribute("name", "border_column");
            this.borderX = _x;
            for (let y = 0; y < rowSize; y++) {
                this.insertBorder(y, borderClass !== undefined ? borderClass : GraphTableSVG.CustomAttributeNames.StyleValue.defaultCellBorderClass);
            }
        }
        /**
        列の単位セルのY座標を返します。
        */
        get borderX() {
            return Number(this._svgGroup.getAttribute(GraphTableSVG.Cell.cellYName));
        }
        set borderX(v) {
            this._svgGroup.setAttribute(GraphTableSVG.Cell.cellYName, `${v}`);
        }
        get svgGroup() {
            return this._svgGroup;
        }
        get borders() {
            return this._borders;
        }
        insertBorder(rowi, borderClass) {
            const line = GraphTableSVG.SVG.createLine(0, 0, 0, 0, borderClass !== undefined ? borderClass : GraphTableSVG.CustomAttributeNames.StyleValue.defaultCellBorderClass);
            this._svgGroup.appendChild(line);
            this._borders.splice(rowi, 0, line);
        }
        removeBorder(i) {
            this._borders[i].remove();
            this._borders.splice(i, 1);
        }
        remove() {
            this.svgGroup.remove();
        }
    }
    GraphTableSVG.BorderColumn = BorderColumn;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    let DirectionType;
    (function (DirectionType) {
        DirectionType[DirectionType["top"] = 0] = "top";
        DirectionType[DirectionType["left"] = 1] = "left";
        DirectionType[DirectionType["right"] = 2] = "right";
        DirectionType[DirectionType["bottom"] = 3] = "bottom";
    })(DirectionType = GraphTableSVG.DirectionType || (GraphTableSVG.DirectionType = {}));
    let DirectionType2;
    (function (DirectionType2) {
        DirectionType2[DirectionType2["topLeft"] = 0] = "topLeft";
        DirectionType2[DirectionType2["bottomLeft"] = 1] = "bottomLeft";
        DirectionType2[DirectionType2["bottomRight"] = 2] = "bottomRight";
        DirectionType2[DirectionType2["topRight"] = 3] = "topRight";
    })(DirectionType2 = GraphTableSVG.DirectionType2 || (GraphTableSVG.DirectionType2 = {}));
    /**
     * セルをSVGで表現するためのクラスです。
     */
    class Cell {
        constructor(parent, _px, _py, option = {}) {
            this.__currentClass = null;
            this.tmpStyle = null;
            this._observerFunc = (x) => {
                for (let i = 0; i < x.length; i++) {
                    const p = x[i];
                    if (p.attributeName == "style" || p.attributeName == "class") {
                        if (p.attributeName == "class") {
                            const className = this.svgGroup.getAttribute("class");
                            if (className != this.__currentClass) {
                                this.recomputeDefaultProperties();
                                this.__currentClass = className;
                            }
                        }
                        this.locateSVGText();
                    }
                }
            };
            this._assurancevisibility = false;
            this._svgGroup = GraphTableSVG.SVG.createGroup(null);
            this._table = parent;
            this.table.rows[_py].svgGroup.appendChild(this.svgGroup);
            //this.table.svgGroup.insertBefore(this.svgGroup, this.table.svgGroup.firstChild);
            this.svgGroup.setAttribute("class", option.cellClass !== undefined ? option.cellClass : GraphTableSVG.CustomAttributeNames.StyleValue.defaultCellClass);
            this.svgGroup.setAttribute(GraphTableSVG.CustomAttributeNames.GroupAttribute, "cell");
            this.svgGroup.setAttribute(Cell.cellXName, `${_px}`);
            this.svgGroup.setAttribute(Cell.cellYName, `${_py}`);
            this.setMasterDiffX(0);
            this.setMasterDiffY(0);
            const backGroundClass = GraphTableSVG.CustomAttributeNames.StyleValue.defaultCellBackgroungClass;
            this._svgBackground = GraphTableSVG.SVG.createCellRectangle(this.svgGroup, backGroundClass);
            const textClass = GraphTableSVG.CustomAttributeNames.StyleValue.defaultTextClass;
            this._svgText = GraphTableSVG.SVG.createText(textClass);
            this.svgGroup.appendChild(this.svgText);
            //const borderClass = option.borderClass === undefined ? null : option.borderClass;
            //const option1: MutationObserverInit = { childList: true, subtree: true };
            //this.table.cellTextObserver.observe(this.svgText, option1);
            this._observer = new MutationObserver(this._observerFunc);
            const option2 = { attributes: true };
            this._observer.observe(this.svgGroup, option2);
        }
        // #region style
        recomputeDefaultProperties() {
            /*
            if(this.defaultBackgroundClass != null){
                this._svgBackground.setAttribute("class", this.defaultBackgroundClass);
            }
            if(this.defaultTextClass != null){
                this._svgText.setAttribute("class", this.defaultTextClass);
            }
            */
        }
        /*
        public get class() : string | null{
            return this.svgGroup.getAttribute("class");
        }
        public set class(value : string | null){
            if(value == null){
                this.svgGroup.removeAttribute("class");
            }else{
                this.svgGroup.setAttribute("class", value);
            }
        }
        */
        /**
         * このセルが強調してるかどうかを返します。
         */
        get isEmphasized() {
            const cellClass = this.svgBackground.getAttribute("class");
            return cellClass == Cell.emphasisCellClass;
        }
        set isEmphasized(v) {
            if (v) {
                if (!this.isEmphasized) {
                    this.tmpStyle = this.svgBackground.getAttribute("class");
                    this.svgBackground.setAttribute("class", Cell.emphasisCellClass);
                }
            }
            else {
                if (this.isEmphasized) {
                    if (this.tmpStyle == null) {
                        this.svgBackground.removeAttribute("class");
                    }
                    else {
                        this.svgBackground.setAttribute("class", this.tmpStyle);
                        this.tmpStyle = null;
                    }
                }
            }
        }
        /**
         * テキストのフォントサイズを返します。
         */
        get fontSize() {
            const p = this.svgText.getPropertyStyleValueWithDefault("font-size", "24");
            const p2 = parseInt(p);
            return p2;
        }
        /**
        テキストとセル間の左のパディング値を返します。
        */
        get paddingLeft() {
            return this.svgGroup.getPaddingLeft();
        }
        /**
        テキストとセル間の右のパディング値を返します。
        */
        get paddingRight() {
            return this.svgGroup.getPaddingRight();
        }
        /**
        テキストとセル間の上のパディング値を返します。
        */
        get paddingTop() {
            return this.svgGroup.getPaddingTop();
        }
        /**
        テキストとセル間の下のパディング値を返します。
        */
        get paddingBottom() {
            return this.svgGroup.getPaddingBottom();
        }
        get horizontalAnchor() {
            const b = this.svgGroup.getPropertyStyleValueWithDefault(GraphTableSVG.CustomAttributeNames.Style.HorizontalAnchor, "center");
            return GraphTableSVG.HorizontalAnchor.toHorizontalAnchor(b);
        }
        /**
        テキストの水平方向の配置設定を設定します。
        */
        set horizontalAnchor(value) {
            if (this.horizontalAnchor != value)
                this.svgGroup.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.HorizontalAnchor, value);
        }
        /**
        テキストの垂直方向の配置設定を返します。
        */
        get verticalAnchor() {
            const b = this.svgGroup.getPropertyStyleValueWithDefault(GraphTableSVG.CustomAttributeNames.Style.VerticalAnchor, "middle");
            return GraphTableSVG.VerticalAnchor.toVerticalAnchor(b);
        }
        /**
        テキストの垂直方向の配置設定を設定します。
        */
        set verticalAnchor(value) {
            if (this.verticalAnchor != value)
                this.svgGroup.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.VerticalAnchor, value);
        }
        /**
        所属しているTableを返します。
        */
        get table() {
            return this._table;
        }
        /**
        セルの背景を表現しているSVGRectElementを返します。
        */
        get svgBackground() {
            return this._svgBackground;
        }
        /**
        セルのテキストを表現しているSVGTextElementを返します。
        */
        get svgText() {
            return this._svgText;
        }
        /**
        セルを表しているSVGGElementを返します。
        */
        get svgGroup() {
            return this._svgGroup;
        }
        // #endregion
        // #region property
        get innerExtraPaddingLeft() {
            const p = this.fontSize;
            return p / 16;
        }
        get innerExtraPaddingRight() {
            const p = this.fontSize;
            return p / 16;
        }
        //private _masterID: number;
        /**
         * このセルのx座標とマスターセルとのX座標の差分を返します。
         */
        get masterDiffX() {
            return Number(this.svgGroup.getAttribute(Cell.masterDiffXName));
        }
        /**
         * このセルのx座標とマスターセルとのX座標の差分を設定します。
         */
        setMasterDiffX(id) {
            this.svgGroup.setAttribute(Cell.masterDiffXName, `${id}`);
        }
        /**
         * このセルのy座標とマスターセルとのy座標の差分を返します。
         */
        get masterDiffY() {
            return Number(this.svgGroup.getAttribute(Cell.masterDiffYName));
        }
        /**
         * このセルのy座標とマスターセルとのy座標の差分を設定します。
         */
        setMasterDiffY(id) {
            this.svgGroup.setAttribute(Cell.masterDiffYName, `${id}`);
        }
        /**
         * マスターセルのx座標を返します。
         */
        get masterCellX() {
            return this.cellX + this.masterDiffX;
        }
        /**
         * マスターセルのx座標を設定します。
         */
        setMasterCellX(id) {
            this.setMasterDiffX(id - this.cellX);
        }
        /**
         * マスターセルのy座標を返します。
         */
        get masterCellY() {
            return this.cellY + this.masterDiffY;
        }
        /**
         * マスターセルのy座標を設定します。
         */
        setMasterCellY(id) {
            this.setMasterDiffY(id - this.cellY);
        }
        /**
         * マスターセルのIDを返します。
         */
        get masterID() {
            return this.table.cells[this.masterCellY][this.masterCellX].ID;
        }
        /*
        public set masterID(id: number) {
            this.svgGroup.setAttribute(Cell.masterIDName, `${id}`);
        }
        */
        /**
         * マスターセルを返します。
         */
        get master() {
            return this.table.cellArray[this.masterID];
        }
        /**
        単位セルを基準にした自身のX座標を返します。
        */
        get cellX() {
            return Number(this.svgGroup.getAttribute(Cell.cellXName));
        }
        /**
        単位セルを基準にした自身のX座標を設定します。
        */
        set cellX(value) {
            if (this.cellX != value)
                this.svgGroup.setAttribute(Cell.cellXName, value.toString());
        }
        /**
        単位セルを基準にした自身のY座標を返します。
        */
        get cellY() {
            return Number(this.svgGroup.getAttribute(Cell.cellYName));
        }
        /**
        単位セルを基準にした自身のY座標を設定します。
        */
        set cellY(value) {
            if (this.cellY != value)
                this.svgGroup.setAttribute(Cell.cellYName, value.toString());
        }
        /*
        get defaultTextClass(): string | null {
            const r = this.svgGroup.getPropertyStyleValue(CustomAttributeNames.Style.defaultTextClass);
            return r;
        }
        get defaultBackgroundClass(): string | null {
            const v = this.svgGroup.getPropertyStyleValue(CustomAttributeNames.Style.defaultCellBackgroundClass);
            return v;
        }
        */
        /**
        CellがDocumentのDOMに所属しているかどうかを返します。
        */
        get isLocated() {
            return GraphTableSVG.Common.IsDescendantOfBody(this.svgGroup);
        }
        /**
         * このセルがマスターセルのときに限りTrueを返します。
         */
        get isMaster() {
            return this.ID == this.masterID;
        }
        /**
         * このセルが奴隷セルのときに限りTrueを返します。
         */
        get isSlave() {
            return !this.isMaster;
        }
        /**
        セルのIDを返します。
        */
        get ID() {
            return this.cellX + (this.cellY * this.table.columnCount);
        }
        get isErrorCell() {
            return this.table.cells[this.cellY][this.cellX] != this;
        }
        /**
         * グループセルの行数を返します。
         */
        get GroupRowCount() {
            if (!this.isMaster)
                throw Error("Slave Error");
            return this.leftSideGroupCells.length;
        }
        /**
         * グループセルの列数を返します。
         */
        get GroupColumnCount() {
            if (!this.isMaster)
                throw Error("Slave Error");
            return this.upperSideGroupCells.length;
        }
        /**
         * グループセルを構成しているセルを2次元配列で返します。
         */
        get cellsInGroup() {
            if (this.isMaster) {
                return this.table.getRangeCells(this.cellX, this.cellY, this.GroupColumnCount, this.GroupRowCount);
            }
            else {
                throw Error("Slave Error");
            }
        }
        /**
         * グループセルを構成しているセルを配列で返します。
         */
        get cellArrayInGroup() {
            if (this.isMaster) {
                return this.table.getRangeCellArray(this.cellX, this.cellY, this.GroupColumnCount, this.GroupRowCount);
            }
            else {
                throw Error("Slave Error");
            }
        }
        /**
         * このセルがグループセルであるときに限りTrueを返します。
         */
        get isSingleCell() {
            return this.isMaster && this.leftSideGroupCells.length == 1 && this.upperSideGroupCells.length == 1;
        }
        /**
         * マスターセルかつ行数が１のときに限りTrueを返します。
         */
        get isMasterCellOfRowCountOne() {
            return this.isMaster && this.leftSideGroupCells.length == 1;
        }
        /**
         * マスターセルかつ列数が１のときに限りTrueを返します。
         */
        get isMasterCellOfColumnCountOne() {
            return this.isMaster && this.upperSideGroupCells.length == 1;
        }
        /**
        セルのX座標を返します。
        */
        get x() {
            return this.svgGroup.getX();
        }
        /**
        セルのX座標を設定します。
        */
        set x(value) {
            this.svgGroup.setX(value);
        }
        /**
        セルのY座標を返します。
        */
        get y() {
            return this.svgGroup.getY();
        }
        /**
        セルのY座標を設定します。
        */
        set y(value) {
            this.svgGroup.setY(value);
        }
        /**
        セルの幅を返します。
        */
        get width() {
            return this.svgBackground.width.baseVal.value;
        }
        /**
        セルの幅を設定します。
        */
        set width(value) {
            this.svgBackground.width.baseVal.value = value;
        }
        /**
        セルの高さを返します。
        */
        get height() {
            return this.svgBackground.height.baseVal.value;
        }
        /**
        セルの高さを設定します。
        */
        set height(value) {
            this.svgBackground.height.baseVal.value = value;
        }
        /**
        セルの領域を表すRectangleを返します。領域の基準は属しているテーブルのSVGGElementです。
        */
        get region() {
            const p = new GraphTableSVG.Rectangle(this.x, this.y, this.width, this.height);
            return p;
        }
        /**
         * グループセルの横幅を返します。
         */
        get computeGroupWidth() {
            const p = this.master.upperSideGroupCells;
            const x2 = p[p.length - 1].cellX;
            let w = 0;
            for (let i = this.cellX; i <= x2; i++) {
                w += this.table.columns[i].width;
            }
            return w;
        }
        /**
         * グループセルの縦幅を返します。
         */
        get computeGroupHeight() {
            const p = this.master.leftSideGroupCells;
            const y2 = p[p.length - 1].cellY;
            let w = 0;
            for (let i = this.cellY; i <= y2; i++) {
                w += this.table.rows[i].height;
            }
            return w;
        }
        /**
         * ２つの線分がオーバーラップしている部分の線分を返します。
         * @param v
         * @param w
         */
        static computeOverlapRange(v, w) {
            if (w[0] < v[0]) {
                return Cell.computeOverlapRange(w, v);
            }
            else {
                if (v[1] < w[0]) {
                    return null;
                }
                else {
                    if (w[1] < v[1]) {
                        return [w[0], w[1]];
                    }
                    else {
                        return [w[0], v[1]];
                    }
                }
            }
        }
        /**
         * ２つの線分がオーバーラップしているときに限り、その結合した線分を返します。
         * @param v
         * @param w
         */
        static computeDisjunction(v, w) {
            if (w[0] < v[0]) {
                return Cell.computeDisjunction(w, v);
            }
            else {
                if (v[1] < w[0]) {
                    return null;
                }
                else {
                    return [v[0], Math.max(v[1], w[1])];
                }
            }
        }
        /**
         * このグループセルの左上のX座標と右上のX座標を返します。
         */
        get groupColumnRange() {
            return [this.master.cellX, this.master.mostRightCellX];
        }
        /**
         * このグループセルの左上のY座標と左下のY座標を返します。
         */
        get groupRowRange() {
            return [this.master.cellY, this.master.mostBottomCellY];
        }
        computeBorderLength2(dir) {
            //const andFunc = ((v, w) => v);
            const d1 = dir == DirectionType.top || dir == DirectionType.bottom ? this.master.x : this.master.y;
            const d2 = dir == DirectionType.top || dir == DirectionType.bottom ? this.master.x + this.computeGroupWidth : this.master.y + this.computeGroupHeight;
            const nextCell = this.getNextMasterCell(dir);
            if (nextCell != null) {
                const e1 = dir == DirectionType.top || dir == DirectionType.bottom ? nextCell.x : nextCell.y;
                const e2 = dir == DirectionType.top || dir == DirectionType.bottom ? nextCell.x + nextCell.computeGroupWidth : nextCell.y + nextCell.computeGroupHeight;
                const range = Cell.computeOverlapRange([d1, d2], [e1, e2]);
                if (range == null) {
                    return 0;
                    //throw Error(`error ${d1} ${d2} ${e1} ${e2}`);
                }
                else {
                    return range[1] - range[0];
                }
            }
            else {
                return d2 - d1;
            }
        }
        // #endregion
        // #region border
        //private _borders: SVGLineElement[] = new Array(4);
        //private _topBorder: SVGLineElement;
        /**
        セルの上にある枠を返します
        */
        get svgTopBorder() {
            return this._table.borderRows[this.cellY].borders[this.cellX];
            //return this._borders[DirectionType.top];
        }
        /*
        set svgTopBorder(line: SVGLineElement) {

            this._borders[DirectionType.top] = line;
        }
        */
        /**
        セルの左にある枠を返します
        */
        get svgLeftBorder() {
            return this._table.borderColumns[this.cellX].borders[this.cellY];
            //return this._borders[DirectionType.left];
        }
        /*
        set svgLeftBorder(line: SVGLineElement) {
            this._borders[DirectionType.left] = line;
        }
        */
        /**
        セルの右にある枠を返します
        */
        get svgRightBorder() {
            return this._table.borderColumns[this.cellX + 1].borders[this.cellY];
            //return this._borders[DirectionType.right];
        }
        /*
        set svgRightBorder(line: SVGLineElement) {
            this._borders[DirectionType.right] = line;

        }
        */
        /**
        セルの下にある枠を返します
        */
        get svgBottomBorder() {
            return this._table.borderRows[this.cellY + 1].borders[this.cellX];
            //return this._borders[DirectionType.bottom];
        }
        /*
        set svgBottomBorder(line: SVGLineElement) {
            this._borders[DirectionType.bottom] = line;

        }
        */
        // #endregion
        // #region other
        /**
        未定義
        */
        get logicalWidth() {
            if (this.isMaster) {
                let w = 0;
                let now = this;
                while (now != null && this.ID == now.masterID) {
                    now = this.rightCell;
                    w++;
                }
                return w;
            }
            else {
                return 0;
            }
        }
        /**
        未定義
        */
        get logicalHeight() {
            if (this.isMaster) {
                let h = 0;
                let now = this;
                while (now != null && this.ID == now.masterID) {
                    now = this.bottomCell;
                    h++;
                }
                return h;
            }
            else {
                return 0;
            }
        }
        /**
        セルが取るべき幅を返します。
        */
        get calculatedWidthUsingText() {
            if (this.isLocated) {
                const textRect = GraphTableSVG.SVGTextBox.getSize(this.svgText, this._assurancevisibility);
                return textRect.width + this.innerExtraPaddingLeft + this.innerExtraPaddingRight
                    + this.paddingLeft + this.paddingRight;
            }
            else {
                return 0;
            }
        }
        /**
        セルが取るべき高さを返します。
        */
        get calculatedHeightUsingText() {
            if (this.isLocated) {
                const textRect = GraphTableSVG.SVGTextBox.getSize(this.svgText, this._assurancevisibility);
                return textRect.height + this.paddingTop + this.paddingBottom;
            }
            else {
                return 0;
            }
        }
        calculatedSizeUsingGroup() {
            if (this.isLocated) {
                let w = 0;
                let h = 0;
                this.leftSideGroupCells.forEach((v) => h += this.table.rows[v.cellY].height);
                this.upperSideGroupCells.forEach((v) => w += this.table.columns[v.cellX].width);
                return [w, h];
            }
            else {
                return [0, 0];
            }
        }
        computeSidePosition(dir) {
            switch (dir) {
                case DirectionType2.topLeft: return [this.x, this.y];
                case DirectionType2.topRight: return [this.x + this.width, this.y];
                case DirectionType2.bottomLeft: return [this.x, this.y + this.height];
                case DirectionType2.bottomRight: return [this.x + this.width, this.y + this.height];
            }
            throw Error("error");
        }
        // #endregion
        // #region NextCell
        /**
         * 与えられた方向にあるセルを返します。
         * @param direction
         */
        getNextCell(direction) {
            switch (direction) {
                case DirectionType.top: return this.cellY != 0 ? this.table.cells[this.cellY - 1][this.cellX] : null;
                case DirectionType.left: return this.cellX != 0 ? this.table.cells[this.cellY][this.cellX - 1] : null;
                case DirectionType.right: return this.cellX + 1 != this.table.columnCount ? this.table.cells[this.cellY][this.cellX + 1] : null;
                case DirectionType.bottom: return this.cellY + 1 != this.table.rowCount ? this.table.cells[this.cellY + 1][this.cellX] : null;
            }
            throw Error("error");
        }
        /**
         * 与えられた方向にある、このセルが属しているグループセルとは異なる最初のグループセルのマスターセルを返します。
         * @param direction
         */
        getNextMasterCell(direction) {
            const nextCell = this.getNextCell(direction);
            return nextCell == null ? null :
                nextCell.masterID != this.masterID ? nextCell.master : nextCell.getNextMasterCell(direction);
        }
        /**
        上にあるセルを返します。
        */
        get topCell() {
            return this.getNextCell(DirectionType.top);
        }
        /**
        左にあるセルを返します。
        */
        get leftCell() {
            return this.getNextCell(DirectionType.left);
        }
        /**
        右にあるセルを返します。
        */
        get rightCell() {
            return this.getNextCell(DirectionType.right);
        }
        /**
        下にあるセルを返します。
        */
        get bottomCell() {
            return this.getNextCell(DirectionType.bottom);
        }
        /**
         * 右下のセルを返します。
         */
        get bottomRightCell() {
            return this.bottomCell == null ? null : this.bottomCell.rightCell == null ? null : this.bottomCell.rightCell;
        }
        /**
         * 右上のセルを返します。
         */
        get topRightCell() {
            return this.topCell == null ? null : this.topCell.rightCell == null ? null : this.topCell.rightCell;
        }
        /**
         * 左下のセルを返します。
         */
        get bottomLeftCell() {
            return this.bottomCell == null ? null : this.bottomCell.leftCell == null ? null : this.bottomCell.leftCell;
        }
        /**
         * 左上のセルを返します。
         */
        get topLeftCell() {
            return this.topCell == null ? null : this.topCell.leftCell == null ? null : this.topCell.leftCell;
        }
        /**
         * このグループセルの上にあるグループセルのマスターセルを返します。
         */
        get topMasterCell() {
            return this.getNextMasterCell(DirectionType.top);
        }
        /**
         * このグループセルの左にあるグループセルのマスターセルを返します。
         */
        get leftMasterCell() {
            return this.getNextMasterCell(DirectionType.left);
        }
        /**
         * このグループセルの右にあるグループセルのマスターセルを返します。
         */
        get rightMasterCell() {
            return this.getNextMasterCell(DirectionType.right);
        }
        /**
         * このグループセルの下にあるグループセルのマスターセルを返します。
         */
        get bottomMasterCell() {
            return this.getNextMasterCell(DirectionType.bottom);
        }
        /**
         * グループセル内の右端にあるせるセルのX座標を返します。
         */
        get mostRightCellX() {
            return this.cellX + this.GroupColumnCount - 1;
        }
        /**
         * グループセル内の下端にあるせるセルのY座標を返します。
         */
        get mostBottomCellY() {
            return this.cellY + this.GroupRowCount - 1;
        }
        /**
         * 指定した方向にあるグループセルの配列を返します。
         * @param direction
         */
        getNextGroupCells(direction) {
            if (this.isMaster) {
                //if(this.isErrorCell) throw new Error("error!");
                let w = [this];
                let now = this.getNextCell(direction);
                while (now != null && this.ID == now.masterID) {
                    w.push(now);
                    now = now.getNextCell(direction);
                    if (this.table.columnCount < w.length && (direction == DirectionType.left || direction == DirectionType.right)) {
                        throw new Error("Invalid getNextGroupCells-Loop!");
                    }
                }
                return w;
            }
            else {
                return [];
            }
        }
        /**
        未定義
        */
        get leftSideGroupCells() {
            return this.getNextGroupCells(DirectionType.bottom);
        }
        /**
        未定義
        */
        get upperSideGroupCells() {
            return this.getNextGroupCells(DirectionType.right);
        }
        // #endregion
        /**
         * セルの背景を表すSVGRectElementを作成します。
         * @param className
         */
        /*
        private static createCellRectangle(parent : SVGElement, className: string | null = null): SVGRectElement {
            const rect = <SVGRectElement>document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            parent.appendChild(rect);
            rect.width.baseVal.value = 30;
            rect.height.baseVal.value = 30;
            if (className == null) {
                rect.style.fill = "#ffffff";
            } else {
                GraphTableSVG.SVG.createRectangle(className);
            }
            return rect;
        }
        */
        toPlainText() {
            if (this.isMaster) {
                const textContext = this.svgText.textContent != null ? this.svgText.textContent : "";
                if (this.isSingleCell) {
                    return textContext;
                }
                else {
                    return `${textContext}%%%${this.GroupColumnCount}%%%${this.GroupRowCount}`;
                }
            }
            else {
                return "";
            }
        }
        // #region update
        updateNodeRelations() {
            this.updateSVGGroupParent();
            this.updateBorderParent();
            //this.updateBorderAttributes();
        }
        /**
         * このセルを更新します。
         */
        update() {
            if (this.table.isNoneMode)
                return;
            const className = this.svgGroup.getAttribute("class");
            if (className != this.__currentClass) {
                this.recomputeDefaultProperties();
                this.__currentClass = className;
            }
            this.resize();
            this.relocation();
        }
        /**
         * svgGroupの親関係を更新します。
         */
        updateSVGGroupParent() {
            if (this.isMaster) {
                if (this.table.rows[this.cellY].svgGroup != this.table.svgGroup) {
                    this.table.rows[this.cellY].svgGroup.appendChild(this.svgGroup);
                }
            }
            else {
                this.table.svgHiddenGroup.appendChild(this.svgGroup);
                this.svgText.textContent = "";
            }
        }
        get topBorderRow() {
            return this.table.borderRows[this.cellY];
        }
        get bottomBorderRow() {
            return this.table.borderRows[this.cellY + 1];
        }
        get leftBorderColumn() {
            return this.table.borderColumns[this.cellX];
        }
        get rightBorderColumn() {
            return this.table.borderColumns[this.cellX + 1];
        }
        /**
         * 枠の親関係を更新します。
         */
        updateBorderParent() {
            if (this.isMaster || (this.topCell != null && this.topCell.isMaster)) {
                if (this.topBorderRow.svgGroup != this.svgTopBorder.parentNode)
                    this.topBorderRow.svgGroup.appendChild(this.svgTopBorder);
            }
            else {
                if (this.table.svgHiddenGroup != this.svgTopBorder.parentNode)
                    this.table.svgHiddenGroup.appendChild(this.svgTopBorder);
            }
            if (this.isMaster || (this.leftCell != null && this.leftCell.isMaster)) {
                if (this.leftBorderColumn.svgGroup != this.svgLeftBorder.parentNode)
                    this.leftBorderColumn.svgGroup.appendChild(this.svgLeftBorder);
            }
            else {
                if (this.table.svgHiddenGroup != this.svgLeftBorder.parentNode)
                    this.table.svgHiddenGroup.appendChild(this.svgLeftBorder);
            }
            if (this.isMaster || (this.rightCell != null && this.rightCell.isMaster)) {
                if (this.rightBorderColumn.svgGroup != this.svgRightBorder.parentNode)
                    this.rightBorderColumn.svgGroup.appendChild(this.svgRightBorder);
            }
            else {
                if (this.table.svgHiddenGroup != this.svgRightBorder.parentNode)
                    this.table.svgHiddenGroup.appendChild(this.svgRightBorder);
            }
            if (this.isMaster || (this.bottomCell != null && this.bottomCell.isMaster)) {
                if (this.bottomBorderRow.svgGroup != this.svgBottomBorder.parentNode)
                    this.bottomBorderRow.svgGroup.appendChild(this.svgBottomBorder);
            }
            else {
                if (this.table.svgHiddenGroup != this.svgBottomBorder.parentNode)
                    this.table.svgHiddenGroup.appendChild(this.svgBottomBorder);
            }
        }
        /**
         *セルのサイズを再計算します。
         */
        resize() {
            GraphTableSVG.SVGTextBox.sortText(this.svgText, this.horizontalAnchor, this._assurancevisibility);
            const [w, h] = this.calculatedSizeUsingGroup();
            if (this.width != w) {
                this.width = w;
            }
            if (this.height != h) {
                this.height = h;
            }
            if (this.width < this.calculatedWidthUsingText) {
                this.width = this.calculatedWidthUsingText;
            }
            if (this.height < this.calculatedHeightUsingText) {
                this.height = this.calculatedHeightUsingText;
            }
        }
        /**
         * テキストを再描画します。
         */
        locateSVGText() {
            const innerRect = new GraphTableSVG.Rectangle();
            innerRect.x = this.innerExtraPaddingLeft + this.paddingLeft;
            innerRect.y = this.paddingTop;
            innerRect.height = this.height - this.paddingTop - this.paddingBottom;
            innerRect.width = this.width - this.innerExtraPaddingLeft - this.innerExtraPaddingRight - this.paddingLeft - this.paddingRight;
            if (this.isLocated) {
                this.svgText.gtSetXY(innerRect, this.verticalAnchor, this.horizontalAnchor, false);
                //ObsoleteGraph.setXY(this.svgText, innerRect, this.verticalAnchor, this.horizontalAnchor);
            }
        }
        /**
         * 指定した方向の枠を取り除きます。
         * @param dir
         */
        removeBorder(dir) {
            /*
            const border = this._borders[dir];
            if (this.table.svgHiddenGroup.contains(border)) {
                this.table.svgHiddenGroup.removeChild(border);
            } else if (this.table.svgGroup.contains(border)) {
                this.table.svgGroup.removeChild(border);
            } else {
                throw Error("error");
            }
            */
        }
        /**
         * このセルを取り除きます。
         * @param isColumn
         */
        removeFromTable(isColumn) {
            this.svgGroup.remove();
            /*
            if (this.table.svgGroup.contains(this.svgGroup)) {
                this.table.svgGroup.removeChild(this.svgGroup);
            } else if (this.table.svgHiddenGroup.contains(this.svgGroup)) {
                this.table.svgHiddenGroup.removeChild(this.svgGroup);
            } else {
                throw Error("error");
            }
            */
            /*
             if (isColumn) {
                 this.removeBorder(DirectionType.top);
                 if (this.table.svgGroup.contains(this.svgTopBorder)) {
                     throw Error("err");
                 }
                 if (this.bottomCell == null) this.removeBorder(DirectionType.bottom);
                 if (this.leftCell == null) this.removeBorder(DirectionType.left);
                 if (this.rightCell == null) this.removeBorder(DirectionType.right);
             } else {
 
                 this.removeBorder(DirectionType.left);
                 if (this.rightCell == null) this.removeBorder(DirectionType.right);
                 if (this.topCell == null) this.removeBorder(DirectionType.top);
                 if (this.bottomCell == null) this.removeBorder(DirectionType.bottom);
             }
             */
        }
        /**
         * このセルが持つ枠の情報を更新します。
         */
        updateBorderAttributes() {
            /*
            if (this.leftCell != null && this.leftCell.svgRightBorder != this.svgLeftBorder) {
                this.removeBorder(DirectionType.left);
                this.svgLeftBorder = this.leftCell.svgRightBorder;
            }

            if (this.topCell != null && this.topCell.svgBottomBorder != this.svgTopBorder) {
                this.removeBorder(DirectionType.top);
                this.svgTopBorder = this.topCell.svgBottomBorder;
            }

            if (this.rightCell != null && this.rightCell.svgLeftBorder != this.svgRightBorder) {
                this.rightCell.removeBorder(DirectionType.left);
                this.rightCell.svgLeftBorder = this.svgRightBorder;
            }

            if (this.bottomCell != null && this.bottomCell.svgTopBorder != this.svgBottomBorder) {
                this.bottomCell.removeBorder(DirectionType.top);
                this.bottomCell.svgTopBorder = this.svgBottomBorder;
            }
            */
            const topCellX = this.svgTopBorder.getAttribute(Cell.borderXName);
            const topCellY = this.svgTopBorder.getAttribute(Cell.borderYName);
            const topCellAttr = this.svgTopBorder.getAttribute(Cell.borderTypeName);
            if (topCellX != `${this.cellX}`)
                this.svgTopBorder.setAttribute(Cell.borderXName, `${this.cellX}`);
            if (topCellY != `${this.cellY}`)
                this.svgTopBorder.setAttribute(Cell.borderYName, `${this.cellY}`);
            if (topCellAttr != `horizontal`)
                this.svgTopBorder.setAttribute(Cell.borderTypeName, "horizontal");
            //this.topBorder.setAttribute("data-border", "top");
            const leftCellX = this.svgLeftBorder.getAttribute(Cell.borderXName);
            const leftCellY = this.svgLeftBorder.getAttribute(Cell.borderYName);
            const leftCellAttr = this.svgLeftBorder.getAttribute(Cell.borderTypeName);
            if (leftCellX != `${this.cellX}`)
                this.svgLeftBorder.setAttribute(Cell.borderXName, `${this.cellX}`);
            if (leftCellY != `${this.cellY}`)
                this.svgLeftBorder.setAttribute(Cell.borderYName, `${this.cellY}`);
            if (leftCellAttr != `vertical`)
                this.svgLeftBorder.setAttribute(Cell.borderTypeName, "vertical");
            const rightCellX = this.svgRightBorder.getAttribute(Cell.borderXName);
            const rightCellY = this.svgRightBorder.getAttribute(Cell.borderYName);
            const rightCellAttr = this.svgRightBorder.getAttribute(Cell.borderTypeName);
            if (rightCellX != `${this.cellX + 1}`)
                this.svgRightBorder.setAttribute(Cell.borderXName, `${this.cellX + 1}`);
            if (rightCellY != `${this.cellY}`)
                this.svgRightBorder.setAttribute(Cell.borderYName, `${this.cellY}`);
            if (rightCellAttr != `vertical`)
                this.svgRightBorder.setAttribute(Cell.borderTypeName, "vertical");
            const bottomCellX = this.svgBottomBorder.getAttribute(Cell.borderXName);
            const bottomCellY = this.svgBottomBorder.getAttribute(Cell.borderYName);
            const bottomCellAttr = this.svgBottomBorder.getAttribute(Cell.borderTypeName);
            if (bottomCellX != `${this.cellX}`)
                this.svgBottomBorder.setAttribute(Cell.borderXName, `${this.cellX}`);
            if (bottomCellY != `${this.cellY + 1}`)
                this.svgBottomBorder.setAttribute(Cell.borderYName, `${this.cellY + 1}`);
            if (bottomCellAttr != `horizontal`)
                this.svgBottomBorder.setAttribute(Cell.borderTypeName, "horizontal");
        }
        // #endregion
        // #region relocate
        /**
         * 上枠の位置を再計算します。
         */
        relocateTopBorder() {
            if (!this.isMaster)
                return;
            if (this.table.svgGroup.contains(this.svgTopBorder)) {
                if (this.isMaster) {
                    this.svgTopBorder.x1.baseVal.value = this.x;
                    this.svgTopBorder.x2.baseVal.value = this.x + this.computeBorderLength2(DirectionType.top);
                    this.svgTopBorder.y1.baseVal.value = this.y;
                    this.svgTopBorder.y2.baseVal.value = this.svgTopBorder.y1.baseVal.value;
                }
                else if (this.topCell != null && this.topCell.isMaster) {
                    this.topCell.relocateBottomBorder();
                }
                else {
                    throw Error("error");
                }
            }
        }
        /**
         * 左枠の位置を再計算します。
         */
        relocateLeftBorder() {
            if (!this.isMaster)
                return;
            if (this.table.svgGroup.contains(this.svgLeftBorder)) {
                if (this.isMaster) {
                    this.svgLeftBorder.x1.baseVal.value = this.x;
                    this.svgLeftBorder.x2.baseVal.value = this.svgLeftBorder.x1.baseVal.value;
                    this.svgLeftBorder.y1.baseVal.value = this.y;
                    this.svgLeftBorder.y2.baseVal.value = this.y + this.computeBorderLength2(DirectionType.left);
                }
                else if (this.leftCell != null && this.leftCell.isMaster) {
                    this.leftCell.relocateRightBorder();
                }
                else {
                    throw Error("error");
                }
            }
        }
        /**
         * 右枠の位置を再計算します。
         */
        relocateRightBorder() {
            if (!this.isMaster)
                return;
            if (this.table.svgGroup.contains(this.svgRightBorder)) {
                if (this.isMaster) {
                    this.svgRightBorder.x1.baseVal.value = this.x + this.width;
                    this.svgRightBorder.x2.baseVal.value = this.svgRightBorder.x1.baseVal.value;
                    this.svgRightBorder.y1.baseVal.value = this.y;
                    this.svgRightBorder.y2.baseVal.value = this.y + this.computeBorderLength2(DirectionType.right);
                }
                else if (this.rightCell != null && this.rightCell.isMaster) {
                    this.rightCell.relocateLeftBorder();
                }
                else {
                    throw Error("error");
                }
            }
        }
        /**
         * 下枠の位置を再計算します。
         */
        relocateBottomBorder() {
            if (!this.isMaster)
                return;
            if (this.table.svgGroup.contains(this.svgBottomBorder)) {
                if (this.isMaster) {
                    this.svgBottomBorder.x1.baseVal.value = this.x;
                    this.svgBottomBorder.x2.baseVal.value = this.x + this.computeBorderLength2(DirectionType.bottom);
                    this.svgBottomBorder.y1.baseVal.value = this.y + this.height;
                    this.svgBottomBorder.y2.baseVal.value = this.svgBottomBorder.y1.baseVal.value;
                }
                else if (this.bottomCell != null && this.bottomCell.isMaster) {
                    this.bottomCell.relocateTopBorder();
                }
                else {
                    throw Error("error");
                }
            }
        }
        /**
         *セルの位置を再計算します。
         */
        relocation() {
            if (!GraphTableSVG.Common.IsDescendantOfBody(this.svgGroup))
                return;
            this.relocateTopBorder();
            this.relocateLeftBorder();
            this.relocateRightBorder();
            this.relocateBottomBorder();
            this.locateSVGText();
        }
        // #endregion
        // #region merge
        /**
         * 右のグループセルと結合します。
         */
        mergeRight() {
            const range = this.getMergedRangeRight();
            if (range != null) {
                this.merge(range[0], range[1]);
            }
            else {
                throw Error("Error");
            }
        }
        /**
         * 下のグループセルと結合します。
         */
        mergeBottom() {
            const range = this.getMergedRangeBottom();
            if (range != null) {
                this.merge(range[0], range[1]);
            }
            else {
                throw Error("Error");
            }
        }
        /**
         * このセルをマスターセルとした横セル数wかつ縦セル数hのグループセルを作成できるとき、Trueを返します。
         * @param w
         * @param h
         */
        canMerge(w, h) {
            const range = this.table.getRangeCells(this.cellX, this.cellY, w, h);
            for (let x = 0; x < w; x++) {
                const topCell = range[0][x].topCell;
                if (topCell != null) {
                    if (range[0][x].masterID == topCell.masterID)
                        return false;
                }
                const bottomCell = range[h - 1][x].bottomCell;
                if (bottomCell != null) {
                    if (range[h - 1][x].masterID == bottomCell.masterID)
                        return false;
                }
            }
            for (let y = 0; y < h; y++) {
                const leftCell = range[y][0].leftCell;
                if (leftCell != null) {
                    if (range[y][0].masterID == leftCell.masterID)
                        return false;
                }
                const rightCell = range[y][w - 1].rightCell;
                if (rightCell != null) {
                    if (range[y][w - 1].masterID == rightCell.masterID)
                        return false;
                }
            }
            return true;
        }
        /**
         * このセルをマスターセルとした横セル数wかつ縦セル数hのグループセルを作成します。
         * @param w
         * @param h
         */
        merge(w, h) {
            if (!this.isMaster)
                throw Error("Error");
            const range = this.table.getRangeCellArray(this.cellX, this.cellY, w, h);
            range.forEach((v) => { v.setMasterCellX(this.masterCellX); v.setMasterCellY(this.masterCellY); });
            range.forEach((v) => { v.updateNodeRelations(); v.update(); });
        }
        /**
         * このセルから見て右にあるグループセルとこのセルが属しているグループセルが結合できるとき、そのグループセルの左上のY座標と左下のY座標を返します。
         * さもなければnullを返します。
         */
        getMergedRangeRight() {
            if (!this.isMaster)
                return null;
            if (this.rightMasterCell != null) {
                const b1 = this.cellY == this.rightMasterCell.cellY;
                const b2 = this.GroupRowCount == this.rightMasterCell.GroupRowCount;
                if (b1 && b2) {
                    return [this.GroupColumnCount + this.rightMasterCell.GroupColumnCount, this.GroupRowCount];
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        /**
         * このセルから見て下にあるグループセルとこのセルが属しているグループセルが結合できるとき、そのグループセルの左上のX座標と右上のX座標を返します。
         * さもなければnullを返します。
         */
        getMergedRangeBottom() {
            if (!this.isMaster)
                return null;
            if (this.bottomMasterCell != null) {
                const b1 = this.cellX == this.bottomMasterCell.cellX;
                const b2 = this.GroupColumnCount == this.bottomMasterCell.GroupColumnCount;
                if (b1 && b2) {
                    return [this.GroupColumnCount, this.GroupRowCount + this.bottomMasterCell.GroupRowCount];
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        /**
         * 右のセルと結合できるときTrueを返します。
         */
        get canMergeRight() {
            return this.getMergedRangeRight() != null;
        }
        /**
         * 下のセルと結合できるときTrueを返します。
         */
        get canMergeBottom() {
            return this.getMergedRangeBottom() != null;
        }
        // #endregion
        // #region decompose
        decomposeRow(upperRowCount) {
            if (this.isMaster) {
                const upperSide = this.table.getRangeCellArray(this.cellX, this.cellY, this.GroupColumnCount, upperRowCount);
                const lowerSide = this.table.getRangeCellArray(this.cellX, this.cellY + upperRowCount, this.GroupColumnCount, this.GroupRowCount - upperRowCount);
                const lowerMaster = lowerSide[0];
                lowerSide.forEach((v) => {
                    v.setMasterCellX(lowerMaster.cellX);
                    v.setMasterCellY(lowerMaster.cellY);
                });
                upperSide.forEach((v) => v.update());
                lowerSide.forEach((v) => v.update());
            }
            else {
                throw Error("Slave Error");
            }
        }
        decomposeColomn(leftColumnCount) {
            if (this.isMaster) {
                const leftSide = this.table.getRangeCellArray(this.cellX, this.cellY, leftColumnCount, this.GroupRowCount);
                const rightSide = this.table.getRangeCellArray(this.cellX + leftColumnCount, this.cellY, this.GroupColumnCount - leftColumnCount, this.GroupRowCount);
                const rightMaster = rightSide[0];
                rightSide.forEach((v) => {
                    v.setMasterCellX(rightMaster.cellX);
                    v.setMasterCellY(rightMaster.cellY);
                });
                leftSide.forEach((v) => v.update());
                rightSide.forEach((v) => v.update());
            }
            else {
                throw Error("Slave Error");
            }
        }
    }
    // #endregion
    // #region field
    //private static readonly defaultBackgroundClassName: string = "--default-background-class";
    Cell.emphasisCellClass = "___cell-emphasis";
    Cell.emphasisBorderClass = "___border-emphasis";
    Cell.temporaryBorderClass = "___temporary-class";
    Cell.defaultCellClass = "___cell-default";
    Cell.cellXName = "data-cellX";
    Cell.cellYName = "data-cellY";
    Cell.borderXName = "data-borderX";
    Cell.borderYName = "data-borderY";
    Cell.borderTypeName = "data-borderType";
    Cell.masterIDName = "data-masterID";
    Cell.masterDiffXName = "data-masterDiffX";
    Cell.masterDiffYName = "data-masterDiffY";
    GraphTableSVG.Cell = Cell;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    /**
     * 表の列を表現するクラスです。
     */
    class CellColumn {
        constructor(_table, _x, _width = 30) {
            this.table = _table;
            this._svgGroup = GraphTableSVG.SVG.createGroup(this.table.svgGroup);
            this._svgGroup.setAttribute("name", "cell_column");
            //this.table.svgGroup.appendChild(this._svgGroup);
            this.cellX = _x;
            this._svgGroup.setAttribute(CellColumn.rowWidthName, `${_width}`);
            //this.width = this.getMaxWidth();
        }
        /**
        列の単位セルのX座標を返します。
        */
        get cellX() {
            return Number(this._svgGroup.getAttribute(GraphTableSVG.Cell.cellXName));
        }
        set cellX(v) {
            this._svgGroup.setAttribute(GraphTableSVG.Cell.cellXName, `${v}`);
            this.cells.forEach((w) => w.cellX = v);
        }
        //public defaultWidth : number | null = null;
        /**
        列の幅を返します。
        */
        get width() {
            return Number(this._svgGroup.getAttribute(CellColumn.rowWidthName));
        }
        /**
        列の幅を設定します。
        */
        set width(value) {
            this._svgGroup.setAttribute(CellColumn.rowWidthName, `${value}`);
            this.setWidthToCells();
            /*
            let b = false;
            for (let y = 0; y < this.table.rowCount; y++) {
                const cell = this.table.cells[y][this.cellX];
                if (cell.isColumnSingleCell && cell.width != value) {
                    cell.width = value;
                    b = true;
                }
            }
            for (let y = 0; y < this.table.rowCount; y++) {
                const cell = this.table.cells[y][this.cellX];
                if (!cell.isColumnSingleCell) {
                    cell.update();
                    //cell.resize();
                    b = true;
                }
            }
            if (b && !this.table.isDrawing && this.table.isAutoResized) this.table.update();
            */
        }
        setWidthToCells() {
            //const width = this.defaultWidth == null ? this.width : this.defaultWidth;
            const width = this.width;
            let b = false;
            for (let y = 0; y < this.table.rowCount; y++) {
                const cell = this.table.cells[y][this.cellX];
                if (cell.isMasterCellOfColumnCountOne && cell.width != width) {
                    cell.width = width;
                    b = true;
                }
            }
            for (let y = 0; y < this.table.rowCount; y++) {
                const cell = this.table.cells[y][this.cellX];
                if (!cell.isMasterCellOfColumnCountOne) {
                    cell.update();
                    //cell.resize();
                    b = true;
                }
            }
            // TODO : implement the event of the below code.
            //if (b && !this.table.isDrawing && this.table.isAutoResized) this.table.update();
        }
        /**
         * この列のセルの配列を返します。
         */
        get cells() {
            const items = [];
            for (let i = 0; i < this.table.rowCount; i++) {
                //if(this.table.rows[i].cells.length <= this.cellX) throw new Error("error");
                items.push(this.table.rows[i].cells[this.cellX]);
            }
            return items;
        }
        get length() {
            return this.cells.length;
        }
        /**
         * この列に属しているセルの中で最大の横幅を返します。
         */
        getMaxWidth() {
            let width = 0;
            for (let y = 0; y < this.table.rowCount; y++) {
                const cell = this.table.cells[y][this.cellX];
                if (cell.isMasterCellOfColumnCountOne) {
                    if (width < cell.calculatedWidthUsingText)
                        width = cell.calculatedWidthUsingText;
                    if (width < cell.width)
                        width = cell.width;
                }
            }
            return width;
        }
        /**
         * この列を更新します。
         */
        /*
         public update() {
            this.setWidthToCells();
            //this.width = this.getMaxWidth();
        }
        */
        /**
         * 列内のセルのサイズを再計算します。
         */
        resize() {
            this.cells.forEach((v) => v.update());
            this.setWidthToCells();
            //this.width = (this.getMaxWidth());
        }
        /**
         * セルの元々のサイズに合わせて列のサイズを調整します。
         * @param allowShrink 現在の列の幅より短くなることを許す
         */
        fitWidthToOriginalCell(allowShrink) {
            if (allowShrink) {
                this.width = this.getMaxWidth();
            }
            else {
                this.width = Math.max(this.width, this.getMaxWidth());
            }
        }
        /**
         * 列のX座標を設定します。
         * @param posX
         */
        setX(posX) {
            for (let y = 0; y < this.table.rowCount; y++) {
                const cell = this.table.cells[y][this.cellX];
                cell.x = posX;
            }
        }
        /**
         * この列の左の枠を配列で返します。
         */
        get leftBorders() {
            const r = [];
            this.cells.forEach((v) => {
                if (r.length == 0) {
                    r.push(v.svgLeftBorder);
                }
                else {
                    const last = r[r.length - 1];
                    if (last != v.svgLeftBorder)
                        r.push(v.svgLeftBorder);
                }
            });
            return r;
        }
        /**
         * この列の右の枠を配列で返します。
         */
        get rightBorders() {
            const r = [];
            this.cells.forEach((v) => {
                if (r.length == 0) {
                    r.push(v.svgRightBorder);
                }
                else {
                    const last = r[r.length - 1];
                    if (last != v.svgRightBorder)
                        r.push(v.svgRightBorder);
                }
            });
            return r;
        }
        /**
         * この列の上の枠を返します。
         */
        get topBorder() {
            return this.cells[0].svgTopBorder;
        }
        /**
         * この列の下の枠を返します。
         */
        get bottomBorder() {
            const cells = this.cells;
            return cells[cells.length - 1].svgBottomBorder;
        }
        get selfx() {
            for (let i = 0; i < this.table.columnCount; i++) {
                if (this.table.columns[i] == this) {
                    return i;
                }
            }
            throw new Error("error");
        }
        /**
         * この列を取り除きます。
         * @param isUnit
         */
        _dispose() {
            /*
            while (this.length > 0){
                const x = this.length - 1;
                this.cells[x].removeFromTable(false);
                this.cells.splice(x, 1);
            }
            */
            const x = this.selfx;
            this.table.rows.forEach((v, i) => v._removeCell(x));
            this._svgGroup.remove();
            /*
            if (isUnit) {
                if (this.table.columns.length > 1) {
                    this.table.columns[this.cellX].cells.forEach((v) => {
                        v.removeFromTable(true);
                        this.table.cells[v.cellY].splice(this.cellX, 1);
                    });


                    this.table.columns.splice(this.cellX, 1);
                    this.table.columns.forEach((v, i) => v.cellX = i);
                    this.table.svgGroup.removeChild(this._svgGroup);
                    this.table.update();
                } else if (this.table.columns.length == 1) {
                    while (this.table.rows.length > 0) {
                        this.table.rows[this.table.rows.length - 1].remove(true);
                    }
                    if (this.table.columns.length == 1) this.table.columns.splice(0, 1);
                } else {
                    throw Error("error");
                }
            } else {
                const [b, e] = this.groupColumnRange;
                for (let x = e; x >= b; x--) {
                    this.table.columns[x].remove(true);
                }
            }
            */
        }
        /**
         * この列のセルの位置を再計算します。
         */
        relocation() {
            this.cells.forEach((v) => v.relocation());
        }
        /**
         * この列に属しているグループセルによって関係している列の範囲を返します。
         */
        get groupColumnRange() {
            let range = this.cells[0].groupColumnRange;
            this.cells.forEach((v) => {
                if (range != null) {
                    range = GraphTableSVG.Cell.computeDisjunction(range, v.groupColumnRange);
                }
            });
            if (range == null) {
                throw Error("error");
            }
            else {
                return range;
            }
        }
    }
    //private readonly _cellX: number;
    CellColumn.rowWidthName = "data-width";
    GraphTableSVG.CellColumn = CellColumn;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    /**
     * 表の行を表現するクラスです。
     */
    class CellRow {
        constructor(_table, _y, _height = 30) {
            /*
            public removeCell(i: number) {
                this.cells[i].removeFromTable(false);
                //this.cells.forEach((v) => v.removeFromTable(false));
                this.cells.splice(i, 1);
            }
    
            */
            this._cells = [];
            this.table = _table;
            this._svgGroup = GraphTableSVG.SVG.createGroup(this.table.svgGroup);
            this.svgGroup.setAttribute("name", "cell_row");
            this.table.svgGroup.insertBefore(this.svgGroup, this.table.svgRowBorderGroup);
            this.cellY = _y;
            this._svgGroup.setAttribute(CellRow.columnHeightName, `${_height}`);
            /*
            for(let i=0;i<cellCount;i++){
                this._cells.push(this.createCell(i, _y));
            }
            */
            //this.height = this.getMaxHeight();
        }
        createCell(cellX, cellY) {
            const cellClass = undefined; //this.table.defaultCellClass == null ? undefined : this.table.defaultCellClass;
            const borderClass = undefined;
            //this.table.defaultBorderClass == null ? undefined : this.table.defaultBorderClass;
            const option = { cellClass: cellClass, borderClass: borderClass };
            return new GraphTableSVG.Cell(this.table, cellX, cellY, option);
        }
        _insertCell(i) {
            const cell = this.createCell(i, this.cellY);
            this.cells.splice(i, 0, cell);
        }
        _appendCell(num = 1) {
            for (let i = 0; i < num; i++) {
                const cell = this.createCell(this.cells.length, this.cellY);
                this.cells.push(cell);
            }
        }
        get cells() {
            return this._cells;
        }
        get length() {
            return this.cells.length;
        }
        get svgGroup() {
            return this._svgGroup;
        }
        /**
        列の単位セルのY座標を返します。
        */
        get cellY() {
            return Number(this._svgGroup.getAttribute(GraphTableSVG.Cell.cellYName));
        }
        set cellY(v) {
            this._svgGroup.setAttribute(GraphTableSVG.Cell.cellYName, `${v}`);
            this.cells.forEach((w) => w.cellY = v);
        }
        /**
        行の高さを返します。
        */
        get height() {
            return Number(this._svgGroup.getAttribute(CellRow.columnHeightName));
        }
        /**
        行の高さを設定します。
        */
        set height(value) {
            this._svgGroup.setAttribute(CellRow.columnHeightName, `${value}`);
            this.setHeightToCells();
            /*
            let b = false;
            for (let x = 0; x < this.table.columnCount; x++) {
                const cell = this.table.cells[this.cellY][x];
                if (cell.isRowSingleCell && cell.height != value) {
                    cell.height = value;
                    b = true;
                }
            }
            for (let x = 0; x < this.table.columnCount; x++) {
                const cell = this.table.cells[this.cellY][x];
                if (!cell.isRowSingleCell) {
                    cell.update();
                    //cell.resize();
                    b = true;
                }
            }
            if (b && !this.table.isDrawing && this.table.isAutoResized) this.table.update();
            */
        }
        /**
         * この行のセル配列を返します。
         */
        /*
         public get cells(): Cell[] {
            return this.table.cells[this.cellY];
        }
        */
        /**
         * この行のセルの上にある枠の配列を返します。
         */
        get topBorders() {
            const r = [];
            this.cells.forEach((v) => {
                if (r.length == 0) {
                    r.push(v.svgTopBorder);
                }
                else {
                    const last = r[r.length - 1];
                    if (last != v.svgTopBorder)
                        r.push(v.svgTopBorder);
                }
            });
            return r;
        }
        /**
         * この行のセルの下にある枠の配列を返します。
         */
        get bottomBorders() {
            const r = [];
            this.cells.forEach((v) => {
                if (r.length == 0) {
                    r.push(v.svgBottomBorder);
                }
                else {
                    const last = r[r.length - 1];
                    if (last != v.svgBottomBorder)
                        r.push(v.svgBottomBorder);
                }
            });
            return r;
        }
        /**
         * この行のセルの左にある枠を返します。
         */
        get leftBorder() {
            return this.cells[0].svgLeftBorder;
        }
        /**
         * この行のセルの右にある枠を返します。
         */
        get rightBorder() {
            const cells = this.cells;
            return cells[cells.length - 1].svgRightBorder;
        }
        setHeightToCells() {
            const height = this.height;
            let b = false;
            for (let x = 0; x < this.table.columnCount; x++) {
                const cell = this.table.cells[this.cellY][x];
                if (cell.isMasterCellOfRowCountOne && cell.height != height) {
                    cell.height = height;
                    b = true;
                }
            }
            for (let x = 0; x < this.table.columnCount; x++) {
                const cell = this.table.cells[this.cellY][x];
                if (!cell.isMasterCellOfRowCountOne) {
                    cell.update();
                    //cell.resize();
                    b = true;
                }
            }
            // TODO : implement the event of the below code.
            //if (b && !this.table.isDrawing && this.table.isAutoResized) this.table.update();
        }
        /**
         * この行を更新します。
         */
        /*
         public update() {
            this.setHeightToCells();
            //this.height = this.getMaxHeight();
        }
        */
        /**
         * 行内のセルのサイズを再計算します。
         */
        resize() {
            this.cells.forEach((v) => v.update());
            this.setHeightToCells();
            //this.height = this.getMaxHeight();
        }
        /**
         * セルの元々のサイズに合わせて行のサイズを調整します。
         * @param allowShrink 現在の行の幅より短くなることを許す
         */
        fitHeightToOriginalCell(allowShrink) {
            if (allowShrink) {
                this.height = this.getMaxHeight();
            }
            else {
                this.height = Math.max(this.height, this.getMaxHeight());
            }
        }
        /**
         * 行内のセルのY座標を設定します。
         *
         */
        setY(posY) {
            for (let x = 0; x < this.table.columnCount; x++) {
                const cell = this.table.cells[this.cellY][x];
                cell.y = posY;
            }
        }
        /**
         * この行の最大の縦幅を持つセルの縦幅を返します。
         */
        getMaxHeight() {
            let height = 0;
            for (let x = 0; x < this.table.columnCount; x++) {
                const cell = this.table.cells[this.cellY][x];
                if (cell.isMasterCellOfRowCountOne) {
                    if (height < cell.calculatedHeightUsingText)
                        height = cell.calculatedHeightUsingText;
                    if (height < cell.height)
                        height = cell.height;
                }
            }
            return height;
        }
        get selfy() {
            for (let i = 0; i < this.table.rowCount; i++) {
                if (this.table.rows[i] == this) {
                    return i;
                }
            }
            throw new Error("error");
        }
        _dispose() {
            while (this.length > 0) {
                const x = this.length - 1;
                this._removeCell(x);
            }
            this.svgGroup.remove();
            //this.rows.splice(this.rows[i].selfy, 1);
        }
        _removeCell(i) {
            this.cells[i].removeFromTable(false);
            this.cells.splice(i, 1);
        }
        /**
         * この行を取り除きます。
         * @param isUnit
         */
        /*
        public remove(isUnit: boolean = false) {
            while (this.cells.length > 0) this.removeCell(this.cells.length - 1);
            this.svgGroup.remove();
            this.table.rows.splice(this.selfy, 1);
        }
        */
        /*
        public updateBorders() {
            this.cells.forEach((v) => v.updateBorder());
        }
        */
        /**
         * この行の各セルを再配置します。
         */
        //public relocation() {
        //    this.cells.forEach((v) => v.relocation());
        //}
        /**
         * この行に属しているグループセルによって関係している行の範囲を返します。
         */
        get groupRowRange() {
            let range = this.cells[0].groupRowRange;
            this.cells.forEach((v) => {
                if (range != null) {
                    range = GraphTableSVG.Cell.computeDisjunction(range, v.groupRowRange);
                }
            });
            if (range == null) {
                throw Error("error");
            }
            else {
                return range;
            }
        }
    }
    CellRow.columnHeightName = "data-height";
    GraphTableSVG.CellRow = CellRow;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    class SVGToVBA {
        /**
         * 入力要素をPowerpoint上で作成するVBAコードを作成します。
         * @param items
         */
        static create(items) {
            //const id = 0;
            if (items instanceof Array) {
                const count = GraphTableSVG.SVGToVBA.count(items);
                const s = new Array(0);
                s.push(`Sub create()`);
                s.push(` Dim createdSlide As slide`);
                s.push(` Set createdSlide = ActivePresentation.Slides.Add(1, ppLayoutBlank)`);
                for (let i = 0; i < count; i++) {
                    s.push(`Call create${i}(createdSlide)`);
                }
                s.push(`MsgBox "created"`);
                s.push(`End Sub`);
                let id = 0;
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    if (item instanceof GraphTableSVG.GTable) {
                        //const lines = item.createVBACode2(id++, "createdSlide");
                        const lines = item.createVBACode2(id, "createdSlide");
                        lines.forEach((v) => s.push(v));
                        id++;
                    }
                    else if (item instanceof SVGPathElement) {
                        //const lines = SVGToVBA.createVBACodeOfSVGPath(item, id++);
                        const lines = SVGToVBA.createVBACodeOfSVGPath(item, id);
                        lines.forEach((v) => s.push(v));
                        id++;
                    }
                    else if (item instanceof SVGTextElement) {
                        //const lines = SVGToVBA.createVBACodeOfTextElement(item, id++);
                        const lines = SVGToVBA.createVBACodeOfTextElement(item, id);
                        lines.forEach((v) => s.push(v));
                        id++;
                    }
                    else if (item instanceof GraphTableSVG.GGraph) {
                        const lines = item.createVBACode(id);
                        lines.forEach((v) => s.push(v));
                        id += item.VBAObjectNum;
                    }
                    else if (item instanceof GraphTableSVG.GObject) {
                        const lines = item.createVBACode(id);
                        lines.forEach((v) => s.push(v));
                        id += item.VBAObjectNum;
                    }
                }
                s.push(SVGToVBA.cellFunctionCode);
                const r = VBATranslateFunctions.joinLines(s);
                return r;
            }
            else {
                return SVGToVBA.create([items]);
            }
        }
        static count(items) {
            //const id = 0;
            if (items instanceof Array) {
                let c = 0;
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    if (item instanceof GraphTableSVG.GTable) {
                        c++;
                    }
                    else if (item instanceof SVGPathElement) {
                        c++;
                    }
                    else if (item instanceof SVGTextElement) {
                        c++;
                    }
                    else if (item instanceof GraphTableSVG.GGraph) {
                        c += item.VBAObjectNum;
                    }
                    else if (item instanceof GraphTableSVG.GObject) {
                        c += item.VBAObjectNum;
                    }
                }
                return c;
            }
            else {
                return SVGToVBA.count([items]);
            }
        }
        static createVBACodeOfSVGPath(path, id) {
            const lines = new Array(0);
            const pos = path.getPathLocations();
            lines.push(`Sub create${id}(createdSlide As slide)`);
            lines.push(` Dim shapes_ As Shapes : Set shapes_ = createdSlide.Shapes`);
            lines.push(` Dim edges${id}(${pos.length - 1}) As Shape`);
            for (let i = 0; i < pos.length - 1; i++) {
                lines.push(` Set edges${id}(${i}) = shapes_.AddConnector(msoConnectorStraight, ${pos[i][0]}, ${pos[i][1]}, ${pos[i + 1][0]}, ${pos[i + 1][1]})`);
                const lineColor = VBATranslateFunctions.colorToVBA(path.getPropertyStyleValueWithDefault("stroke", "gray"));
                const strokeWidth = parseInt(path.getPropertyStyleValueWithDefault("stroke-width", "4"));
                const visible = path.getPropertyStyleValueWithDefault("visibility", "visible") == "visible" ? "msoTrue" : "msoFalse";
                lines.push(` Call EditLine(edges${id}(${i}).Line, ${lineColor}, msoLineSolid, ${0}, ${strokeWidth}, ${visible})`);
            }
            lines.push(`End Sub`);
            return lines;
        }
        static createVBACodeOfTextElement(element, id) {
            const lines = new Array(0);
            const sub = [];
            lines.push(`Sub create${id}(createdSlide As slide)`);
            lines.push(` Dim shapes_ As Shapes : Set shapes_ = createdSlide.Shapes`);
            lines.push(` Dim txt As Shape`);
            lines.push(` Set txt = shapes_.AddTextbox(msoTextOrientationHorizontal, ${element.getX()}, ${element.getY()}, 0, 0)`);
            const fontSize = parseInt(element.getPropertyStyleValueWithDefault("font-size", "24"));
            const fontFamily = VBATranslateFunctions.ToVBAFont(element.getPropertyStyleValueWithDefault("font-family", "MS PGothic"));
            const fontBold = VBATranslateFunctions.ToFontBold(element.getPropertyStyleValueWithDefault("font-weight", "none"));
            lines.push([` Call EditTextFrame(txt.TextFrame, ${0}, ${0}, ${0}, ${0}, false, ppAutoSizeShapeToFitText)`]);
            VBATranslateFunctions.TranslateSVGTextElement(sub, element, `txt.TextFrame.TextRange`);
            sub.forEach((v) => lines.push(v[0]));
            lines.push([` Call EditTextEffect(txt.TextEffect, ${fontSize}, "${fontFamily}")`]);
            lines.push(`End Sub`);
            return lines;
        }
    }
    SVGToVBA.cellFunctionCode = `
Sub EditTable(table_ As table, cellInfo_() As Variant)
    Dim x As Integer
    Dim y As Integer
    
    For x = 1 To UBound(cellInfo_, 1)
        For y = 1 To UBound(cellInfo_, 2)
         Call EditCell(table_.cell(x, y), CStr(cellInfo_(x, y)(0)))
        Next
    Next
End Sub

Sub EditCell(cell_ As cell, text_ As String, backColor As Variant)
    cell_.Shape.TextFrame.TextRange.text = text_
    cell_.Shape.Fill.ForeColor.RGB = RGB(CInt(backColor(0)), CInt(backColor(1)), CInt(backColor(2)))
End Sub
Sub EditCellFont(frame_ As TextFrame, fontSize As Double, fontName As String, color As Variant, fontBold As Integer)
    frame_.TextRange.Font.Size = fontSize
    frame_.TextRange.Font.name = fontName
    frame_.TextRange.Font.color.RGB = RGB(CInt(color(0)), CInt(color(1)), CInt(color(2)))
    frame_.TextRange.Font.Bold = fontBold
End Sub




Sub EditRow(row_ As Row, height As Integer)
    row_.height = height
End Sub
Sub EditColumn(column_ As Column, width As Integer)
    column_.width = width
End Sub

Sub EditCellTextFrame(frame_ As TextFrame, marginTop As Double, marginBottom As Double, marginLeft As Double, marginRight As Double, vAnchor As Integer, hAnchor As Integer)
    frame_.marginLeft = marginLeft
    frame_.marginRight = marginRight
    frame_.marginTop = marginTop
    frame_.marginBottom = marginBottom
    frame_.VerticalAnchor = vAnchor
    frame_.TextRange.ParagraphFormat.Alignment = hAnchor
End Sub

Sub EditTextRange(range_ As TextRange, text As String)
    range_.text = text
End Sub
Sub EditTextRangeSub(range_ As TextRange, subBeg As Integer, subLen As Integer, script As String, color As Variant, fontName As String, fontSize As Double, fontBold As Integer)
    range_.Characters(subBeg, subLen).Font.color.RGB = RGB(CInt(color(0)), CInt(color(1)), CInt(color(2)))
    range_.Characters(subBeg, subLen).Font.Size = fontSize
    range_.Characters(subBeg, subLen).Font.name = fontName
    range_.Characters(subBeg, subLen).Font.Bold = fontBold
    If script = "subscript" Then
    range_.Characters(subBeg, subLen).Font.Subscript = True
    End If
    If script = "superscript" Then
    range_.Characters(subBeg, subLen).Font.Superscript = True
    End If
End Sub



Sub EditShape(shape_ As Shape, name As String, visible As Integer, backColor As Variant)
    shape_.name = name
    shape_.Fill.visible = visible
    shape_.Fill.ForeColor.RGB = RGB(CInt(backColor(0)), CInt(backColor(1)), CInt(backColor(2)))
End Sub
Sub EditCellBorder(line_ As LineFormat, foreColor As Variant, weight As Integer, transparent As Double)
    line_.foreColor.RGB = RGB(CInt(foreColor(0)), CInt(foreColor(1)), CInt(foreColor(2)))
    line_.weight = weight
    line_.Transparency = transparent
End Sub

Sub EditConnector(connector_ As ConnectorFormat, begShape As Shape, endShape As Shape, begPos As Integer, endPos As Integer)
    Call connector_.BeginConnect(begShape, begPos)
    Call connector_.EndConnect(endShape, endPos)
End Sub

Sub EditTextFrame(frame_ As TextFrame, marginTop As Double, marginBottom As Double, marginLeft As Double, marginRight As Double, wordWrap As Boolean, autoSize As Integer)
    frame_.autoSize = autoSize
    frame_.wordWrap = wordWrap
    frame_.marginLeft = marginLeft
    frame_.marginRight = marginRight
    frame_.marginTop = marginTop
    frame_.marginBottom = marginBottom
End Sub
Sub EditAnchor(frame_ As TextFrame, vAnchor As Integer, hAnchor As Integer)
    frame_.VerticalAnchor = vAnchor
    frame_.TextRange.ParagraphFormat.Alignment = hAnchor
End Sub

Sub EditTextEffect(effect_ As TextEffectFormat, fontSize As Double, fontName As String)
 effect_.fontSize = fontSize
 effect_.fontName = fontName
End Sub

Sub EditVertexShape(shape_ As Shape, name As String, visible As Integer, backColor As Variant)
    shape_.name = name
    shape_.Fill.visible = visible
    shape_.Fill.ForeColor.RGB = RGB(CInt(backColor(0)), CInt(backColor(1)), CInt(backColor(2)))
End Sub

Sub EditLine(line_ As LineFormat, foreColor As Variant, dashStyle As Integer, transparent As Double, weight As Integer, visible As Integer)
    line_.foreColor.RGB = RGB(CInt(foreColor(0)), CInt(foreColor(1)), CInt(foreColor(2)))
    line_.dashStyle = dashStyle
    line_.Transparency = transparent
    line_.weight = weight
    line_.visible = visible
End Sub

Sub EditCallOut(shape_ As Shape, name As String, visible As Integer, backColor As Variant)
    shape_.name = name
    shape_.Fill.visible = visible
    shape_.Fill.ForeColor.RGB = RGB(CInt(backColor(0)), CInt(backColor(1)), CInt(backColor(2)))
End Sub

`;
    GraphTableSVG.SVGToVBA = SVGToVBA;
    function parseInteger(value) {
        if (value == "") {
            return 1;
        }
        else {
            return parseInt(value);
        }
    }
    GraphTableSVG.parseInteger = parseInteger;
    function visible(value) {
        if (value == "hidden") {
            return 1.0;
        }
        else {
            return 0;
        }
    }
    GraphTableSVG.visible = visible;
    class VBATranslateFunctions {
        static grouping80(codes) {
            let r = [];
            const result = [];
            codes.forEach(function (x, i, arr) {
                if (r.length + x.length >= 80) {
                    result.push(VBATranslateFunctions.joinLines(r));
                    r = [];
                }
                x.forEach((v) => r.push(v));
            });
            if (r.length > 0) {
                result.push(VBATranslateFunctions.joinLines(r));
                r = [];
            }
            return result;
        }
        static splitCode(codes, subArg, callArg, id) {
            const functions = [];
            const p = VBATranslateFunctions.grouping80(codes);
            p.forEach(function (x, i, arr) {
                functions.push(`Call SubFunction${id}_${i}(${callArg})`);
                const begin = `Sub SubFunction${id}_${i}(${subArg})`;
                const end = `End Sub`;
                p[i] = VBATranslateFunctions.joinLines([begin, x, end]);
            });
            return [VBATranslateFunctions.joinLines(functions), VBATranslateFunctions.joinLines(p)];
        }
        static ToFontBold(bold) {
            if (bold == "bold") {
                return "msotrue";
            }
            else {
                return "msofalse";
            }
        }
        static ToVerticalAnchor(value) {
            switch (value) {
                case "top": return "msoAnchorTop";
                case "middle": return "msoAnchorMiddle";
                case "bottom": return "msoAnchorBottom";
                default: return "msoAnchorTop";
            }
        }
        static ToHorizontalAnchor(value) {
            switch (value) {
                case "left": return "ppAlignLeft";
                case "center": return "ppAlignCenter";
                case "right": return "ppAlignRight";
                default: return "ppAlignLeft";
            }
        }
        static createStringFunction(item) {
            return item.length == 0 ? `""` : `"` + item + `"`;
        }
        static createArrayFunction(items) {
            let s = ``;
            for (let i = 0; i < items.length; i++) {
                s += items[i];
                if (i + 1 != items.length) {
                    s += `, `;
                }
            }
            return `Array(${s})`;
        }
        static createStringArrayFunction(items) {
            let s = ``;
            for (let i = 0; i < items.length; i++) {
                s += `"${items[i]}"`;
                if (i + 1 != items.length) {
                    s += `, `;
                }
            }
            return `Array(${s})`;
        }
        static createJagArrayFunction(items) {
            let s = ``;
            for (let i = 0; i < items.length; i++) {
                s += VBATranslateFunctions.createArrayFunction(items[i]);
                if (i + 1 != items.length)
                    s += `, `;
            }
            return `Array(${s})`;
        }
        static joinLines(lines) {
            let s = ``;
            for (let i = 0; i < lines.length; i++) {
                s += lines[i];
                if (i + 1 != lines.length)
                    s += `\n`;
            }
            return s;
        }
        static colorToVBA(color) {
            color = GraphTableSVG.Color.createRGBCodeFromColorName(color);
            if (color.indexOf("rgb") != -1) {
                return color.replace("rgb", "Array");
            }
            else {
                return "Array(0, 0, 0)";
            }
        }
        static ToVBAFont(font) {
            font = font.replace(/"/g, "");
            font = font.replace(/'/g, "");
            return font;
        }
        static TranslateSVGTextElement(sub, item, range) {
            const text = item.textContent == null ? "" : item.textContent;
            sub.push([`${range}.text = "${item.textContent}"`]);
            if (item.children.length > 0) {
                let pos = 1;
                for (let i = 0; i < item.children.length; i++) {
                    const child = item.children.item(i);
                    if (child != null && child.textContent != null && child.textContent.length > 0) {
                        const css = getComputedStyle(child);
                        const childColor = GraphTableSVG.Color.createRGBFromColorName(css.fill == null ? "black" : css.fill);
                        const fontName = this.getFont(css);
                        const fontSize = GraphTableSVG.Common.toPX(css.fontSize == null ? "14pt" : css.fontSize);
                        const fontBold = Number(css.fontWeight) == 400 ? 0 : 1;
                        const len = child.textContent.length;
                        let f = child.getAttribute("data-script");
                        if (f == null) {
                            f = "";
                        }
                        sub.push([`Call EditTextRangeSub(${range},${pos}, ${len}, "${f}", Array(${childColor.r}, ${childColor.g}, ${childColor.b}), "${fontName}", ${fontSize}, ${fontBold} )`]);
                        pos += len;
                    }
                }
            }
            else if (item.textContent != null && item.textContent.length > 0) {
                const css = getComputedStyle(item);
                if (css.fontSize == null)
                    throw Error("error");
                if (css.fill == null)
                    throw Error("error");
                const color = GraphTableSVG.Color.createRGBFromColorName(css.fill);
                const fontName = this.getFont(css);
                const fontSize = GraphTableSVG.Common.toPX(css.fontSize);
                const fontBold = Number(css.fontWeight) == 400 ? 0 : 1;
                sub.push([`Call EditTextRangeSub(${range},${1}, ${item.textContent.length}, "", Array(${color.r}, ${color.g}, ${color.b}), "${fontName}", ${fontSize}, ${fontBold} )`]);
            }
        }
        static getFont(css) {
            if (css.fontFamily == null)
                throw Error("error");
            const arr = css.fontFamily.split(",");
            if (arr.length > 0) {
                let name = arr[0];
                name = name.replace(/\"/g, "");
                name = name.replace(/\'/g, "");
                return name;
            }
            else {
                return "";
            }
        }
        static TranslateSVGTextElement2(item, range) {
            const lines = [];
            const text = item.textContent == null ? "" : item.textContent;
            lines.push(`${range}.text = "${item.textContent}"`);
            if (item.children.length > 0) {
                let pos = 1;
                for (let i = 0; i < item.children.length; i++) {
                    const child = item.children.item(i);
                    if (child != null && child.textContent != null && child.textContent.length > 0) {
                        const css = getComputedStyle(child);
                        if (css.fontSize == null)
                            throw Error("error");
                        if (css.fill == null)
                            throw Error("error");
                        const childColor = GraphTableSVG.Color.createRGBFromColorName(css.fill);
                        const fontName = this.getFont(css);
                        const fontSize = GraphTableSVG.Common.toPX(css.fontSize);
                        const fontBold = Number(css.fontWeight) == 400 ? 0 : 1;
                        const len = child.textContent.length;
                        let f = child.getAttribute("data-script");
                        if (f == null) {
                            f = "";
                        }
                        lines.push(`Call EditTextRangeSub(${range},${pos}, ${len}, "${f}", Array(${childColor.r}, ${childColor.g}, ${childColor.b}), "${fontName}", ${fontSize}, ${fontBold} )`);
                        pos += len;
                    }
                }
            }
            else if (item.textContent != null && item.textContent.length > 0) {
                const css = getComputedStyle(item);
                if (css.fontSize == null)
                    throw Error("error");
                if (css.fill == null)
                    throw Error("error");
                const color = GraphTableSVG.Color.createRGBFromColorName(css.fill);
                const fontName = this.getFont(css);
                const fontSize = GraphTableSVG.Common.toPX(css.fontSize);
                const fontBold = Number(css.fontWeight) == 400 ? 0 : 1;
                lines.push(`Call EditTextRangeSub(${range},${1}, ${item.textContent.length}, "", Array(${color.r}, ${color.g}, ${color.b}), "${fontName}", ${fontSize}, ${fontBold} )`);
            }
            return lines;
        }
    }
    GraphTableSVG.VBATranslateFunctions = VBATranslateFunctions;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    let Console;
    (function (Console) {
        function getCodeTag() {
            const collection = document.getElementsByTagName("code");
            for (let i = 0; i < collection.length; i++) {
                const item = collection.item(i);
                if (item != null) {
                    const name = item.getAttribute("name");
                    if (name == "GraphTableSVG") {
                        return item;
                    }
                }
            }
            return null;
        }
        function createCodeTag() {
            const element = document.createElement("code");
            document.body.appendChild(element);
            element.setAttribute("name", "GraphTableSVG");
            return element;
        }
        function getOrCreateCodeElement() {
            const code = getCodeTag();
            if (code != null) {
                return code;
            }
            else {
                return createCodeTag();
            }
        }
        function addSVGSVGElement(code) {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const p = document.createElement("p");
            code.appendChild(p);
            p.appendChild(svg);
            svg.setAttribute("style", "background:#e9e9e9;border:solid 1pt;padding:10px");
            //svg.setAttribute("width", "600px");
            //svg.setAttribute("height", "600px");
            svg.setAttribute("g-shrink", "true");
            if (svg instanceof SVGSVGElement) {
                return svg;
            }
            else {
                throw "error";
            }
        }
        function initialize() {
            const code = getCodeTag();
            if (code == null) {
                createCodeTag();
            }
        }
        function table(item) {
            if (item instanceof GraphTableSVG.LogicTable) {
                GraphTableSVG.Common.setGraphTableCSS();
                const code = getOrCreateCodeElement();
                const svg = addSVGSVGElement(code);
                const gtable = GraphTableSVG.createShape(svg, "g-table");
                gtable.constructFromLogicTable(item);
                gtable.x = 0;
                gtable.y = 0;
            }
            else {
                const tableDic = new GraphTableSVG.TableDictionary();
                tableDic.construct(item);
                const logicTable = tableDic.toLogicTable();
                table(logicTable);
            }
        }
        Console.table = table;
        function clear() {
            const code = getOrCreateCodeElement();
            code.innerHTML = "";
        }
        Console.clear = clear;
        function graph(item) {
            if (item instanceof GraphTableSVG.LogicTree || item instanceof GraphTableSVG.LogicGraph) {
                GraphTableSVG.Common.setGraphTableCSS();
                const code = getOrCreateCodeElement();
                const svg = addSVGSVGElement(code);
                const ggraph = GraphTableSVG.createShape(svg, "g-graph");
                ggraph.build(item);
                /*
                if(item instanceof LogicGraph){
                }else{
                    ggraph.constructFromLogicTree(item);
                }
                */
            }
            else {
                const tableDic = new GraphTableSVG.TableDictionary();
                tableDic.construct(item);
                const logicGraph = tableDic.toLogicGraph();
                graph(logicGraph);
                //console.log(logicGraph);    
            }
        }
        Console.graph = graph;
    })(Console = GraphTableSVG.Console || (GraphTableSVG.Console = {}));
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    let Common;
    (function (Common) {
        function createCSS() {
            const r = `
            .${GraphTableSVG.Cell.emphasisCellClass}{
            fill : yellow !important;
            }
            .${GraphTableSVG.Cell.emphasisBorderClass}{
            stroke : red !important;
            }
            .${GraphTableSVG.CustomAttributeNames.StyleValue.defaultCellClass}{
                ${GraphTableSVG.CustomAttributeNames.Style.paddingTop} : 5px;
                ${GraphTableSVG.CustomAttributeNames.Style.paddingLeft} : 5px;
                ${GraphTableSVG.CustomAttributeNames.Style.paddingRight} : 5px;
                ${GraphTableSVG.CustomAttributeNames.Style.paddingBottom} : 5px;
                ${GraphTableSVG.CustomAttributeNames.Style.VerticalAnchor} : ${GraphTableSVG.VerticalAnchor.Middle};
                ${GraphTableSVG.CustomAttributeNames.Style.HorizontalAnchor} : ${GraphTableSVG.HorizontalAnchor.Center};
            }
            .${GraphTableSVG.CustomAttributeNames.StyleValue.defaultTextClass}{
                fill : black;
                font-size: 18px;
            }
            .${GraphTableSVG.CustomAttributeNames.StyleValue.defaultCellBackgroungClass}{
                fill : white;
            }
            .${GraphTableSVG.CustomAttributeNames.StyleValue.defaultCellBorderClass}{
                stroke : black;
            }

            .${GraphTableSVG.CustomAttributeNames.StyleValue.defaultSurfaceClass}{
                stroke: black;
                stroke-width: 1px;
                fill : white;
            }
            .${GraphTableSVG.CustomAttributeNames.StyleValue.defaultPathSurfaceClass}{
                stroke: black;
                stroke-width: 1px;
                fill : transparent;
            }

            .${GraphTableSVG.CustomAttributeNames.StyleValue.defaultEdgePathClass}{
                stroke: black;
                fill: none;
                stroke-width: 1px;
            }
            .${GraphTableSVG.CustomAttributeNames.StyleValue.defaultTextboxPathClass}{
                stroke: black;
                fill: white;
                stroke-width: 1px;
            }

            .${GraphTableSVG.CustomAttributeNames.StyleValue.defaultRectButtonSurfaceClass}{
                fill: #8EB8FF; 
                stroke: black;
            }
            .${GraphTableSVG.CustomAttributeNames.StyleValue.defaultRectButtonSurfaceClass}[disabled]{
                fill: #aaaaaa; 
            }
            .${GraphTableSVG.CustomAttributeNames.StyleValue.defaultRectButtonSurfaceClass}:not([disabled]):hover{
                fill:#A4C6FF; 
            }
            .${GraphTableSVG.CustomAttributeNames.StyleValue.defaultRectButtonSurfaceClass}:not([disabled]):active{
                fill:#8EB8FF; 
            }

            .___column_title_cellaa{
                --default-text-class : table-text;
                --default-background-class : background;    
                --horizontal-anchor: center;
                --vertical-anchor: middle;
                --padding-top: 0px;
                --padding-left: 0px;
                --padding-right: 0px;
                --padding-bottom: 0px;
            }

            .${GraphTableSVG.CustomAttributeNames.StyleValue.defaultConsoleColumnTitleCellTextClass} {
                fill : black;
                font-size: 18px;
                font-weight: bold;
            }
            .${GraphTableSVG.CustomAttributeNames.StyleValue.defaultConsoleColumnTitleCellUndefinedTextClass} {
                fill : pink;
                font-size: 18px;
                font-style: italic;
            }

            .${GraphTableSVG.CustomAttributeNames.StyleValue.defaultConsoleColumnTitleCellBackgroundClass}{
                fill: #8EB8FF; 
                stroke: black;
            }


            g[data-type="g-rect-button"] > rect {
                stroke-width: 1px;
                transition-duration: 0.2s;
            }

            g[data-type="g-rect-button"] > rect[disabled]{
                stroke-width: 1px;
            }
            g[data-type="g-rect-button"] > rect:not([disabled]):hover {
                stroke-width: 3px;
            }
            g[data-type="g-rect-button"] > rect:not([disabled]):active {
                stroke-width: 1px;
            }
            g[data-type="g-rect-button"] > text {
                pointer-events: none;
            }
    
            `;
            return r;
        }
        Common.createCSS = createCSS;
    })(Common = GraphTableSVG.Common || (GraphTableSVG.Common = {}));
})(GraphTableSVG || (GraphTableSVG = {}));
var HTMLFunctions;
(function (HTMLFunctions) {
    let drag = null;
    function draggable(element, g) {
        element.addEventListener('mousedown', function (e) {
            e.preventDefault();
            //const rect = getContainerRect(g);
            const parent = GraphTableSVG.SVG.getLeastContainer(g);
            if (parent != null) {
                const rect = GraphTableSVG.SVG.getAbsolutePosition(g);
                drag = {
                    offsetX: e.clientX - rect.x,
                    offsetY: e.clientY - rect.y,
                    target: element,
                    g: g,
                    gParentG: parent
                };
            }
            return false;
        });
    }
    HTMLFunctions.draggable = draggable;
    /*
    function getContainerRect(e: SVGElement) {
        const container = GraphTableSVG.SVG.getLeastContainer(e)!;
        const containerRect = container.getBoundingClientRect();
        return containerRect;
    }
    */
    function appendDragFunctionsToDocument() {
        document.onmouseup = function () {
            drag = null;
        };
        document.onmousemove = function (e) {
            if (drag != null) {
                if (drag.target != null && drag.target instanceof SVGElement) {
                    const g = drag.g;
                    const containerRect = GraphTableSVG.SVG.getAbsolutePosition(drag.gParentG);
                    const refx = (e.clientX - containerRect.x) - drag.offsetX;
                    const refy = (e.clientY - containerRect.y) - drag.offsetY;
                    g.setX(refx);
                    g.setY(refy);
                    //drag.target.x.baseVal.value = e.clientX - drag.offsetx;
                    //drag.target.y.baseVal.value = e.clientY - drag.offsety;
                }
            }
        };
    }
    HTMLFunctions.appendDragFunctionsToDocument = appendDragFunctionsToDocument;
})(HTMLFunctions || (HTMLFunctions = {}));
var HTMLFunctions;
(function (HTMLFunctions) {
    let NodeOrder;
    (function (NodeOrder) {
        NodeOrder[NodeOrder["Preorder"] = 0] = "Preorder";
        NodeOrder[NodeOrder["Postorder"] = 1] = "Postorder";
    })(NodeOrder = HTMLFunctions.NodeOrder || (HTMLFunctions.NodeOrder = {}));
    function getAncestorAttribute(e, attr) {
        if (e.hasAttribute(attr)) {
            return e.getAttribute(attr);
        }
        else {
            if (e.parentElement == null) {
                return null;
            }
            else {
                return getAncestorAttribute(e.parentElement, attr);
            }
        }
    }
    HTMLFunctions.getAncestorAttribute = getAncestorAttribute;
    /*
    function isShow2(e: HTMLElement | SVGElement, isParentWindow : boolean = false): boolean {
        
        const p = isParentWindow ? window.parent.getComputedStyle(e) : window.getComputedStyle(e);
        const disp = p.display;
        const vis = p.visibility;
        if (disp == "none" || vis == "hidden") {
            return false;
        } else {
            const parent = e.parentElement;
            if (parent == null) {
                if(isParentWindow){
                    return true;
                }else{
                    if(window == window.parent){
                        return true;
                    }else{
                        return isShow2(<HTMLElement>window.frameElement, true);
                    }
                }
            } else {
                return isShow2(parent, isParentWindow);
            }
        }

    }
    */
    function isShow(e) {
        const p = e.getBoundingClientRect();
        return !(p.top == 0 && p.left == 0 && p.width == 0 && p.height == 0);
        //return isShow2(e);
    }
    HTMLFunctions.isShow = isShow;
    function getDescendantsByPreorder(e) {
        const r = [];
        r.push(e);
        for (let i = 0; i < e.children.length; i++) {
            const p = e.children.item(i);
            if (p instanceof Element) {
                getDescendantsByPreorder(p).forEach((v) => r.push(v));
            }
        }
        return r;
    }
    HTMLFunctions.getDescendantsByPreorder = getDescendantsByPreorder;
    function getDescendantsByPostorder(e) {
        const r = [];
        for (let i = 0; i < e.children.length; i++) {
            const p = e.children.item(i);
            if (p instanceof Element) {
                getDescendantsByPostorder(p).forEach((v) => r.push(v));
            }
        }
        r.push(e);
        return r;
    }
    HTMLFunctions.getDescendantsByPostorder = getDescendantsByPostorder;
    function getDescendants(e, order = NodeOrder.Preorder) {
        if (order == NodeOrder.Preorder) {
            return getDescendantsByPreorder(e);
        }
        else {
            return getDescendantsByPostorder(e);
        }
    }
    HTMLFunctions.getDescendants = getDescendants;
    function getChildren(e) {
        const r = [];
        for (let i = 0; i < e.children.length; i++) {
            const p = e.children.item(i);
            if (p instanceof Element) {
                r.push(p);
            }
        }
        return r;
    }
    HTMLFunctions.getChildren = getChildren;
    function getChildByNodeName(e, name) {
        const p = getChildren(e).filter((v) => v.nodeName == name);
        if (p.length > 0) {
            return p[0];
        }
        else {
            return null;
        }
    }
    HTMLFunctions.getChildByNodeName = getChildByNodeName;
    function isInsideElement(element) {
        const win = GraphTableSVG.GUI.getClientRectangle();
        const ele = element.getBoundingClientRect();
        const b1 = ele.left <= win.width && ele.top <= win.height;
        const b2 = ele.right <= win.width && ele.top <= win.height;
        const b3 = ele.left <= win.width && ele.bottom <= win.height;
        const b4 = ele.right <= win.width && ele.bottom <= win.height;
        return b1 || b2 || b3 || b4;
    }
    HTMLFunctions.isInsideElement = isInsideElement;
})(HTMLFunctions || (HTMLFunctions = {}));
var HTMLFunctions;
(function (HTMLFunctions) {
    function createHTMLTable(e) {
        const table = GraphTableSVG.LogicTable.constructHTMLLogicTable(e);
        const tableTag = document.createElement("table");
        tableTag.setAttribute("border", "1");
        tableTag.setAttribute("cellspacing", "0");
        tableTag.setAttribute("bordercolor", "black");
        if (table != null) {
            const cellConnectChecker = new Array();
            for (let y = 0; y < table.rowCount; y++) {
                cellConnectChecker.push(new Array(table.columnCount));
                for (let x = 0; x < table.columnCount; x++) {
                    cellConnectChecker[y][x] = true;
                }
            }
            for (let y = 0; y < table.rowCount; y++) {
                const tr = document.createElement("tr");
                tableTag.appendChild(tr);
                for (let x = 0; x < table.columnCount; x++) {
                    if (cellConnectChecker[y][x]) {
                        const td = document.createElement("td");
                        const cell = table.cells[y][x];
                        if (cell.connectedRowCount > 1) {
                            td.setAttribute("rowspan", cell.connectedRowCount.toString());
                        }
                        if (cell.connectedColumnCount > 1) {
                            td.setAttribute("columnspan", cell.connectedColumnCount.toString());
                        }
                        for (let ty = 0; ty < cell.connectedRowCount; ty++) {
                            for (let tx = 0; tx < cell.connectedColumnCount; tx++) {
                                if (tx != 0 || ty != 0) {
                                    cellConnectChecker[ty + y][tx + x] = false;
                                }
                            }
                        }
                        const tTexts = cell.tTexts;
                        //td.style.borderTopStyle = "3px solid red";
                        if (tTexts != null) {
                            tTexts.forEach((v) => {
                                td.appendChild(v);
                            });
                        }
                        else {
                            const text = cell.text;
                            if (text != null)
                                td.innerHTML = text;
                        }
                        tr.appendChild(td);
                    }
                }
            }
        }
        return tableTag;
    }
    HTMLFunctions.createHTMLTable = createHTMLTable;
})(HTMLFunctions || (HTMLFunctions = {}));
/*
interface PPTextboxShape {
    width : number;
    height : number;
    readonly svgText : SVGTextElement;
    readonly svgGroup : SVGGElement;
    cx : number;
    cy : number;
    x : number;
    y : number;
}
*/
CSSStyleDeclaration.prototype.tryGetPropertyValue = function (name) {
    const p = this;
    const r = p.getPropertyValue(name).trim();
    if (r.length == 0) {
        return null;
    }
    else {
        return r;
    }
};
SVGTextPathElement.prototype.setTextContent = function (text, isLatexMode = false) {
    GraphTableSVG.SVGTextBox.setTextToTextPath(this, text, isLatexMode);
};
SVGLineElement.prototype.getEmphasis = function () {
    const p = this;
    const emp = p.getAttribute("class");
    if (emp != null) {
        return emp == GraphTableSVG.Cell.emphasisBorderClass;
    }
    else {
        return false;
    }
};
SVGLineElement.prototype.setEmphasis = function (value) {
    GraphTableSVG.Common.setGraphTableCSS();
    const p = this;
    if (p.getEmphasis() && !value) {
        const tmp = p.getAttribute(GraphTableSVG.Cell.temporaryBorderClass);
        if (tmp != null) {
            p.setAttribute("class", tmp);
            p.removeAttribute(GraphTableSVG.Cell.temporaryBorderClass);
        }
        else {
            p.removeAttribute("class");
            p.removeAttribute(GraphTableSVG.Cell.temporaryBorderClass);
        }
    }
    else if (!p.getEmphasis() && value) {
        const lineClass = p.getAttribute("class");
        p.setAttribute("class", GraphTableSVG.Cell.emphasisBorderClass);
        if (lineClass != null) {
            p.setAttribute(GraphTableSVG.Cell.temporaryBorderClass, lineClass);
        }
    }
};
SVGPathElement.prototype.setPathLocations = function (points) {
    const p = this;
    let s = "";
    for (let i = 0; i < points.length; i++) {
        s += `${i == 0 ? "M" : "L"} ${points[i][0]} ${points[i][1]} `;
    }
    //points.forEach((x, y) => s += `M ${x} ${y} `);
    p.setAttribute("d", s);
};
SVGPathElement.prototype.getPathLocations = function () {
    const p = this;
    const info = p.getAttribute("d");
    if (info == null)
        return [];
    const r = [];
    let pos = [0, 0];
    let pathType = "";
    info.split(" ").forEach((v, i) => {
        if (i % 3 == 0) {
            pathType = v;
        }
        else if (i % 3 == 1) {
            pos[0] = parseInt(v);
        }
        else {
            pos[1] = parseInt(v);
            r.push(pos);
            pos = [0, 0];
        }
    });
    return r;
};
var GraphTableSVG;
(function (GraphTableSVG) {
    let SVG;
    (function (SVG) {
        SVG.idCounter = 0;
        /**
         * SVGLineElementを生成します。
         * @param x 開始位置のX座標
         * @param y 開始位置のY座標
         * @param x2 終了位置のX座標
         * @param y2 終了位置のY座標
         * @param className SVGLineElementのクラス属性名
         * @returns 生成されたSVGLineElement
         */
        function createLine(x, y, x2, y2, className) {
            const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line1.x1.baseVal.value = x;
            line1.x2.baseVal.value = x2;
            line1.y1.baseVal.value = y;
            line1.y2.baseVal.value = y2;
            //line1.style.color = "black";
            line1.setAttribute("class", className);
            /*
            if (className != null) {
            } else {
                line1.style.stroke = "black";
            }
            */
            //line1.style.visibility = "hidden";
            //line1.style.strokeWidth = `${5}`
            //line1.setAttribute('stroke', 'black');
            return line1;
        }
        SVG.createLine = createLine;
        /**
         * SVGTextElementを生成します。
         * @param className 生成するSVG要素のクラス属性名
         * @returns 生成されたSVGTextElement
         */
        function createText(className) {
            const _svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            _svgText.setAttribute(GraphTableSVG.CustomAttributeNames.objectIDName, (GraphTableSVG.SVG.idCounter++).toString());
            //_svgText.style.textAnchor = "middle";
            _svgText.setAttribute("class", className);
            /*
            if (className == null) {
                
            } else {
            }
            */
            return _svgText;
        }
        SVG.createText = createText;
        /**
         * SVGRectElementを生成します。
         * @param parent 生成したSVG要素を子に追加する要素
         * @param className 生成するSVG要素のクラス属性名
         * @returns 生成されたSVGRectElement
         */
        function createRectangle(parent, className = null) {
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            parent.appendChild(rect);
            rect.width.baseVal.value = 30;
            rect.height.baseVal.value = 30;
            if (className == null) {
                rect.style.fill = "white";
                rect.style.stroke = "black";
                rect.style.strokeWidth = "1pt";
            }
            else {
                rect.setAttribute("class", className);
                //const dashStyle = rect.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.msoDashStyleName);
                //if (dashStyle != null) msoDashStyle.setStyle(rect, dashStyle);
                const width = rect.getPropertyStyleNumberValue(GraphTableSVG.CustomAttributeNames.Style.defaultWidth, null);
                if (width != null) {
                    rect.width.baseVal.value = width;
                }
                const height = rect.getPropertyStyleNumberValue(GraphTableSVG.CustomAttributeNames.Style.defaultHeight, null);
                if (height != null) {
                    rect.height.baseVal.value = height;
                }
            }
            return rect;
        }
        SVG.createRectangle = createRectangle;
        /**
         * SVGRectElementを生成します。
         * @param parent 生成したSVG要素を子に追加する要素
         * @param className 生成するSVG要素のクラス属性名
         * @returns 生成されたSVGRectElement
         */
        function createCellRectangle(parent, className = null) {
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            parent.appendChild(rect);
            if (className != null) {
                rect.setAttribute("class", className);
            }
            return rect;
        }
        SVG.createCellRectangle = createCellRectangle;
        /**
         * SVGGElementを生成します。
         * @param className 生成するSVG要素のクラス属性名
         * @returns 生成されたSVGGElement
         */
        function createGroup(parent) {
            const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            g.setAttribute(GraphTableSVG.CustomAttributeNames.objectIDName, (GraphTableSVG.SVG.idCounter++).toString());
            /*
            if (className != null) {
                g.setAttribute("class", className);
            }
            */
            if (parent != null)
                parent.appendChild(g);
            return g;
        }
        SVG.createGroup = createGroup;
        /**
         * Styleの設定を消去します。
         * @param style 消去するStyle
         */
        function resetStyle(style) {
            style.stroke = null;
            style.strokeWidth = null;
            style.fill = null;
            style.fontSize = null;
            style.fontWeight = null;
            style.fontFamily = null;
            /*
            style.removeProperty(CustomAttributeNames.Style.paddingTop);
            style.removeProperty(CustomAttributeNames.Style.paddingLeft);
            style.removeProperty(CustomAttributeNames.Style.paddingRight);
            style.removeProperty(CustomAttributeNames.Style.paddingBottom);
            */
        }
        SVG.resetStyle = resetStyle;
        /**
         * SVGCircleElementを生成します。
         * @param parent 生成したSVG要素を子に追加する要素
         * @param className 生成するSVG要素のクラス属性名
         * @returns 生成されたSVGCircleElement
         */
        function createCircle(parent, className = null) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            parent.appendChild(circle);
            circle.r.baseVal.value = GraphTableSVG.CustomAttributeNames.defaultCircleRadius;
            if (className == null) {
                circle.style.stroke = "black";
                circle.style.strokeWidth = "1pt";
                circle.style.fill = "white";
            }
            else {
                circle.setAttribute("class", className);
                const radius = circle.getPropertyStyleNumberValue(GraphTableSVG.CustomAttributeNames.Style.defaultRadius, null);
                if (radius != null) {
                    circle.r.baseVal.value = radius;
                }
                //const dashStyle = circle.getPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.msoDashStyleName);
                //if (dashStyle != null) msoDashStyle.setStyle(circle, dashStyle);
            }
            //circle.style.fill = "#ffffff";
            circle.cx.baseVal.value = 0;
            circle.cy.baseVal.value = 0;
            //circle.r.baseVal.value = r;
            return circle;
        }
        SVG.createCircle = createCircle;
        /**
         * Edgeの矢じりとして使うSVGMarkerElementを作成します。
         * @param className 生成するSVG要素のクラス属性名
         * @returns 生成されたSVGMarkerElement
         */
        function createMarker(option = {}) {
            const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
            //const poly = <SVGPolygonElement>document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            const poly = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            poly.setAttribute("d", "M 0 0 L 10 5 L 0 10 z");
            //poly.setAttribute("points", "0,0 0,10 10,5");
            if (option.color != undefined) {
                poly.setPropertyStyleValue("stroke", option.color);
                marker.setPropertyStyleValue("fill", option.color);
            }
            else {
                poly.setPropertyStyleValue("stroke", "black");
                marker.setPropertyStyleValue("fill", "black");
            }
            poly.setPropertyStyleValue("stroke-width", "1px");
            //poly.setAttribute("data-skip", "1");
            marker.setAttribute("markerUnits", "userSpaceOnUse");
            marker.setAttribute("markerHeight", "15");
            marker.setAttribute("markerWidth", "15");
            marker.setAttribute("refX", "10");
            marker.setAttribute("refY", "5");
            //marker.setAttribute("data-skip", "1");
            //marker.refX.baseVal.value = 10;
            //marker.refY.baseVal.value = 5;
            marker.setAttribute("preserveAspectRatio", "none");
            marker.setAttribute("orient", "auto");
            marker.setAttribute("viewBox", "0 0 10 10");
            //marker.setAttribute("stroke-width", "1px");
            marker.appendChild(poly);
            if (option.className != null) {
                //marker.setAttribute("class", option.className);
                //poly.setAttribute("class", className);
            }
            else {
            }
            return [marker, poly];
        }
        SVG.createMarker = createMarker;
        /**
         * SVGTextElementを子に持つSVGTextPathElementを作成します。
         * @param className 生成するSVGTextPathElementのクラス属性名
         * @returns 生成されたSVGTextElementとSVGTextPathElement
         */
        function createTextPath(className = null) {
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            ;
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'textPath');
            text.appendChild(path);
            if (className == null) {
                path.style.fill = "black";
                path.style.fontSize = "14px";
                path.style.fontWeight = "bold";
                path.style.fontFamily = 'Times New Roman';
            }
            else {
                path.setAttribute("class", className);
            }
            return [text, path];
        }
        SVG.createTextPath = createTextPath;
        /**
 * SVGTextElementを子に持つSVGTextPathElementを作成します。
 * @param className 生成するSVGTextPathElementのクラス属性名
 * @returns 生成されたSVGTextElementとSVGTextPathElement
 */
        function createTextPath2(className) {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'textPath');
            path.setAttribute("class", className);
            /*
            if (className == null) {
                path.style.fill = "black";
                path.style.fontSize = "14px";
                path.style.fontWeight = "bold";
                path.style.fontFamily = 'Times New Roman';
            } else {
            }
            */
            return path;
        }
        SVG.createTextPath2 = createTextPath2;
        /*
        export function setDefaultValue(item: SVGCircleElement | SVGRectElement, style: CSSStyleDeclaration | null = null) {
            const className = item.getAttribute("class");
            if (style != null) {
                if (item instanceof SVGCircleElement) {
                    const s = style.getPropertyValue(defaultRadiusName).trim();
                    if (s.length > 0) {
                        item.r.baseVal.value = Number(s);
                    }
                } else {
                    const s1 = style.getPropertyValue(defaultWidthName).trim();
                    if (s1.length > 0) {
                        item.width.baseVal.value = Number(s1);
                    }

                    const s2 = style.getPropertyValue(defaultHeightName).trim();
                    if (s2.length > 0) {
                        item.height.baseVal.value = Number(s2);
                    }
                }
            } else {
                
                if (className != null) {
                    const cssStyle = getStyleSheet(className);

                    if (cssStyle != null) {
                        setDefaultValue(item, cssStyle)
                    } else {
                        const computedStyle = getComputedStyle(item);
                        setDefaultValue(item, computedStyle);
                    }
                }
                
            }

            
        }
        */
        /**
         * SVG要素にクラス属性をセットします。
         * @param svg 適用されるSVG要素
         * @param className クラス属性名
         */
        function setClass(svg, className = null) {
            if (className == null) {
                svg.removeAttribute("class");
            }
            else {
                resetStyle(svg.style);
                svg.setAttribute("class", className);
            }
        }
        SVG.setClass = setClass;
        /**
         * SVG要素のクラス属性名からCSSStyleDeclarationを取得します。
         * @param svg 取得されるSVG要素
         */
        function getCSSStyle(svg) {
            const css = getComputedStyle(svg);
            return css;
            if (svg.getAttribute("class") == null) {
                return null;
            }
            else {
                const css = getComputedStyle(svg);
                return css;
            }
        }
        const exceptionStyleNames = ["marker-start", "marker-mid", "marker-end"];
        /**
         * SVG要素のクラス属性名から取得できるCSSStyleDeclarationを要素のスタイル属性にセットします。
         * @param svg 適用されるSVG要素
         */
        function setCSSToStyle(svg, isComplete = true) {
            if (isComplete) {
                const css = getComputedStyle(svg);
                if (css != null) {
                    for (let i = 0; i < css.length; i++) {
                        const name = css.item(i);
                        const value = css.getPropertyValue(name);
                        if (value.length > 0) {
                            if (!exceptionStyleNames.some((v) => v == name)) {
                                svg.style.setProperty(name, value);
                            }
                        }
                    }
                }
            }
            else {
                cssPropertyNames.forEach((v) => {
                    const value = getPropertyStyleValue(svg, v);
                    if (value != null) {
                        svg.style.setProperty(v, value);
                    }
                });
            }
            /*
            const css = getCSSStyle(svg);
            if (css != null) {
                let css2: CSSStyleDeclaration = css;
                cssPropertyNames.forEach((v) => {
                    const value = css2.getPropertyValue(v).trim();
                    if (value.length > 0) {
                        svg.style.setProperty(v, value);
                    }
                });
            }
            */
        }
        SVG.setCSSToStyle = setCSSToStyle;
        function getPropertyStyleValue(item, name) {
            const p = item.style.getPropertyValue(name).trim();
            if (p.length == 0) {
                const r = item.getAttribute("class");
                if (r == null) {
                    return null;
                }
                else {
                    const css = getCSSStyle(item);
                    if (css == null)
                        throw Error("error");
                    //const css = getComputedStyle(item);
                    const p2 = css.getPropertyValue(name).trim();
                    if (p2.length == 0) {
                        return null;
                    }
                    else {
                        return p2;
                    }
                }
            }
            else {
                return p;
            }
        }
        function getAllElementStyleMapSub(item, output, id) {
            if (typeof item == 'string') {
                const svgBox = document.getElementById(item);
                if (svgBox != null) {
                    getAllElementStyleMapSub(svgBox, output, id);
                }
            }
            else {
                const style = item.getAttribute("style");
                output[id++] = style;
                for (let i = 0; i < item.children.length; i++) {
                    const child = item.children.item(i);
                    if (child != null) {
                        id = getAllElementStyleMapSub(child, output, id);
                    }
                }
            }
            return id;
        }
        function getAllElementStyleMap(item) {
            const dic = {};
            getAllElementStyleMapSub(item, dic, 0);
            return dic;
        }
        SVG.getAllElementStyleMap = getAllElementStyleMap;
        function setAllElementStyleMapSub(item, output, id) {
            if (typeof item == 'string') {
                const svgBox = document.getElementById(item);
                if (svgBox != null) {
                    setAllElementStyleMapSub(svgBox, output, id);
                }
            }
            else {
                const style = output[id++];
                if (style == null) {
                    item.removeAttribute("style");
                }
                else {
                    item.setAttribute("style", style);
                }
                for (let i = 0; i < item.children.length; i++) {
                    const child = item.children.item(i);
                    if (child != null) {
                        id = setAllElementStyleMapSub(child, output, id);
                    }
                }
            }
            return id;
        }
        function setAllElementStyleMap(item, dic) {
            setAllElementStyleMapSub(item, dic, 0);
        }
        SVG.setAllElementStyleMap = setAllElementStyleMap;
        /**
         * 入力のSVG要素とその配下の要素全てにsetCSSToStyleを適用します。
         * @param item SVG要素もしくはそのid
         */
        function setCSSToAllElementStyles(item, isComplete = true) {
            if (typeof item == 'string') {
                const svgBox = document.getElementById(item);
                if (svgBox != null) {
                    setCSSToAllElementStyles(svgBox, isComplete);
                }
            }
            else {
                if (!item.hasAttribute("data-skip"))
                    setCSSToStyle(item, isComplete);
                for (let i = 0; i < item.children.length; i++) {
                    const child = item.children.item(i);
                    if (child != null) {
                        setCSSToAllElementStyles(child, isComplete);
                    }
                }
            }
        }
        SVG.setCSSToAllElementStyles = setCSSToAllElementStyles;
        const cssPropertyNames = ["font-size", "fill", "stroke",
            "font-family", "font-weight", "stroke-width", "background", "border", "background-color", "border-bottom-color", "border-bottom-style", "border-bottom-width",
            "border-left-color", "border-left-style", "border-left-width", "border-right-color", "border-right-style", "border-right-width", "border-top-color", "border-top-style", "border-top-width"];
        /**
         * 未使用。
         * @param name
         */
        function getStyleSheet(name) {
            const name2 = "." + name;
            for (let i = 0; i < document.styleSheets.length; i++) {
                const sheet = document.styleSheets.item(i);
                const rules = sheet.cssRules || sheet.rules;
                if (rules != null) {
                    for (let j = 0; j < rules.length; j++) {
                        const rule = rules.item(j);
                        if (rule.selectorText == name2) {
                            return rule.style;
                        }
                    }
                }
            }
            return null;
        }
        SVG.getStyleSheet = getStyleSheet;
        /*
        export function setStyleForPNG(svg: SVGElement) {
            const style = getComputedStyle(svg);
            svg.style.fill = style.fill;
            svg.style.stroke = style.stroke;
            svg.style.strokeWidth = style.stroke;
        }
        */
        /*
        export function getRegion(e: SVGElement): Rectangle {
            if (e instanceof SVGSVGElement) {
                const elements = <SVGElement[]>HTMLFunctions.getChildren(e).filter((v) => v instanceof SVGElement);
                const rectangles = elements.map((v) => getRegion(v));

                const eRegion = getRelativeBoundingClientRect(e);
                const region = Rectangle.merge(rectangles);

                return region;

            }
            else if (e instanceof SVGGElement) {
                const elements = <SVGElement[]>HTMLFunctions.getChildren(e).filter((v) => v instanceof SVGElement);
                const rectangles = elements.map((v) => getRegion(v));

                //const eRegion = getRelativeBoundingClientRect(e);
                const px = e.getX();
                const py = e.getY();

                const region = Rectangle.merge(rectangles);

                //const region2 = new Rectangle(region.x + eRegion.x, region.y + eRegion.y, region.width, region.height);
                const region2 = new Rectangle(region.x + px, region.y + py, region.width, region.height);
                                
                return region2;
            } else {
                const rect = getRelativeBoundingClientRect2(e);
                const region = rect
                return region;
            }
        }
        */
        function getRegion2(e) {
            if (e instanceof SVGSVGElement) {
                const elements = HTMLFunctions.getChildren(e).filter((v) => v instanceof SVGElement);
                const rectangles = elements.map((v) => getRegion2(v));
                const parentRect = e.getBoundingClientRect();
                const rect = GraphTableSVG.Rectangle.merge(rectangles);
                let r = new GraphTableSVG.Rectangle();
                r.x = 0;
                r.y = 0;
                r.width = rect.width + (rect.x - parentRect.left);
                r.height = rect.height + (rect.y - parentRect.top);
                return r;
            }
            else if (e instanceof SVGGElement) {
                /*
                const elements = <SVGElement[]>HTMLFunctions.getChildren(e).filter((v) => v instanceof SVGElement);
                const rectangles = elements.map((v) => getRegion2(v));
                const region = Rectangle.merge(rectangles);
                                
                return region;
                */
                const rect = e.getBoundingClientRect();
                let r = new GraphTableSVG.Rectangle(rect.left, rect.top, rect.width, rect.height);
                return r;
            }
            else {
                const rect = e.getBoundingClientRect();
                let r = new GraphTableSVG.Rectangle(rect.left, rect.top, rect.width, rect.height);
                return r;
            }
        }
        SVG.getRegion2 = getRegion2;
        let ura = null;
        /*
        function getRelativeBoundingClientRect(e: SVGElement): Rectangle {
            let r = new Rectangle();
            const svgsvgHidden = isSVGSVGHidden(e);
            const svgHidden = isSVGHidden(e);
            if(svgHidden){
                return r;
            }else if(svgsvgHidden){
                if (ura == null) {
                    ura = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                }
                document.body.appendChild(ura);
                ura.innerHTML = e.outerHTML;
                const fst = ura.firstChild;
                if (fst instanceof SVGElement) {
                    
                    const rect = fst.getBoundingClientRect();
                    const parentRect = ura.getBoundingClientRect();
                    r.x = rect.left - parentRect.left;
                    r.y = rect.top - parentRect.top;
                    r.width = rect.width;
                    r.height = rect.height;

    
                    ura.removeChild(fst);
                    ura.remove();

                    return r;
                } else if (fst != null) {
                    ura.removeChild(fst);
                    ura.remove();
                    return r;
                } else {
                    ura.remove();
                    return r;
                }
            }else{
                const rect = e.getBoundingClientRect();
                const parentRect = e.parentElement!.getBoundingClientRect();
                r.x = rect.left - parentRect.left;
                r.y = rect.top - parentRect.top;
                r.width = rect.width;
                r.height = rect.height;

                return r;
            }

        }
        
        function getHiddenRelativeBoundingClientRect(e: SVGElement): Rectangle {
            let r = new Rectangle();
            if (ura == null) {
                ura = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            }
            document.body.appendChild(ura);
            ura.innerHTML = e.outerHTML;
            const fst = ura.firstChild;
            if (fst instanceof SVGElement) {
                
                const rect = fst.getBoundingClientRect();
                const parentRect = ura.getBoundingClientRect();
                r.x = rect.left - parentRect.left;
                r.y = rect.top - parentRect.top;
                r.width = rect.width;
                r.height = rect.height;


                ura.removeChild(fst);
                ura.remove();

                return r;
            } else if (fst != null) {
                ura.removeChild(fst);
                ura.remove();
                return r;
            } else {
                ura.remove();
                return r;
            }
        }
        
        function getRelativeBoundingClientRect2(e: SVGElement): Rectangle {
            let r = new Rectangle();
            const svgsvgHidden = isSVGSVGHidden(e);
            const svgHidden = isSVGHidden(e);
            if(svgHidden){
                return r;
            }else if(svgsvgHidden){
                return getHiddenRelativeBoundingClientRect(e);
            }else{
                return getHiddenRelativeBoundingClientRect(e);
            }
        }
        function getSVGSVGBoundingClientRect(e: SVGElement): Rectangle {
            const parent = getSVGSVG(e);
            let r = new Rectangle();
            const rect = e.getBoundingClientRect();
            const parentRect = parent.getBoundingClientRect();
            r.x = rect.left - parentRect.left;
            r.y = rect.top - parentRect.top;
            r.width = rect.width;
            r.height = rect.height;
            return r;
        }
        */
        function getSVGSVG(e) {
            if (e instanceof SVGSVGElement) {
                return e;
            }
            else {
                const parent = e.parentElement;
                if (parent instanceof SVGElement) {
                    return getSVGSVG(parent);
                }
                else {
                    throw Error("svgsvg");
                }
            }
        }
        SVG.getSVGSVG = getSVGSVG;
        function getLeastContainer(e) {
            const parent = e.parentElement;
            if (parent instanceof SVGSVGElement || parent instanceof SVGGElement) {
                return parent;
            }
            else if (parent == null) {
                return null;
            }
            else {
                if (parent instanceof SVGElement) {
                    return getLeastContainer(parent);
                }
                else {
                    return null;
                }
            }
        }
        SVG.getLeastContainer = getLeastContainer;
        function getAbsolutePosition(g) {
            if (g instanceof SVGSVGElement) {
                const rect = g.getBoundingClientRect();
                return { x: rect.left, y: rect.top };
            }
            else {
                const parent = getLeastContainer(g);
                if (parent instanceof SVGSVGElement) {
                    const rect = parent.getBoundingClientRect();
                    const x = rect.left + g.getX();
                    const y = rect.top + g.getY();
                    return { x: x, y: y };
                }
                else if (parent instanceof SVGGElement) {
                    const rect = getAbsolutePosition(parent);
                    const x = rect.x + g.getX();
                    const y = rect.y + g.getY();
                    return { x: x, y: y };
                }
                else {
                    throw Error("error");
                }
            }
        }
        SVG.getAbsolutePosition = getAbsolutePosition;
        function isSVGSVGHidden(e) {
            const svgsvg = getSVGSVG(e);
            return !HTMLFunctions.isShow(svgsvg);
        }
        SVG.isSVGSVGHidden = isSVGSVGHidden;
        function isSVGHidden(e) {
            if (e instanceof SVGSVGElement) {
                return false;
            }
            else {
                const p = getComputedStyle(e);
                const disp = p.display;
                const vis = p.visibility;
                if (disp == "none" || vis == "hidden") {
                    return true;
                }
                else {
                    const parent = e.parentElement;
                    if (parent instanceof SVGElement) {
                        return isSVGHidden(parent);
                    }
                    else {
                        throw Error("svg");
                    }
                }
            }
        }
        SVG.isSVGHidden = isSVGHidden;
    })(SVG = GraphTableSVG.SVG || (GraphTableSVG.SVG = {}));
})(GraphTableSVG || (GraphTableSVG = {}));
SVGGElement.prototype.getX = function () {
    const p = this;
    if (p.transform.baseVal.numberOfItems == 0) {
        p.setAttribute('transform', "matrix(1 0 0 1 0 0)");
    }
    return p.transform.baseVal.getItem(0).matrix.e;
};
SVGGElement.prototype.setX = function (value) {
    const p = this;
    if (p.transform.baseVal.numberOfItems == 0) {
        p.setAttribute('transform', "matrix(1 0 0 1 0 0)");
    }
    const a = this.transform.baseVal.getItem(0).matrix.a;
    const b = this.transform.baseVal.getItem(0).matrix.b;
    const c = this.transform.baseVal.getItem(0).matrix.c;
    const d = this.transform.baseVal.getItem(0).matrix.d;
    const e = value;
    const f = this.transform.baseVal.getItem(0).matrix.f;
    p.setAttribute('transform', `matrix(${a} ${b} ${c} ${d} ${e} ${f})`);
    //p.transform.baseVal.getItem(0).matrix.e = value;
};
SVGGElement.prototype.getY = function () {
    const p = this;
    if (p.transform.baseVal.numberOfItems == 0) {
        p.setAttribute('transform', "matrix(1 0 0 1 0 0)");
    }
    return this.transform.baseVal.getItem(0).matrix.f;
};
SVGGElement.prototype.setY = function (value) {
    const p = this;
    if (p.transform.baseVal.numberOfItems == 0) {
        p.setAttribute('transform', "matrix(1 0 0 1 0 0)");
    }
    const a = this.transform.baseVal.getItem(0).matrix.a;
    const b = this.transform.baseVal.getItem(0).matrix.b;
    const c = this.transform.baseVal.getItem(0).matrix.c;
    const d = this.transform.baseVal.getItem(0).matrix.d;
    const e = this.transform.baseVal.getItem(0).matrix.e;
    const f = value;
    p.setAttribute('transform', `matrix(${a} ${b} ${c} ${d} ${e} ${f})`);
    //this.transform.baseVal.getItem(0).matrix.f = value;
};
SVGElement.prototype.getPaddingTop = function () {
    const p = this;
    return p.getPropertyStyleNumberValue(GraphTableSVG.CustomAttributeNames.Style.paddingTop, 5);
};
SVGElement.prototype.getPaddingLeft = function () {
    const p = this;
    return p.getPropertyStyleNumberValue(GraphTableSVG.CustomAttributeNames.Style.paddingLeft, 5);
};
SVGElement.prototype.getPaddingRight = function () {
    const p = this;
    return p.getPropertyStyleNumberValue(GraphTableSVG.CustomAttributeNames.Style.paddingRight, 5);
};
SVGElement.prototype.getPaddingBottom = function () {
    const p = this;
    return p.getPropertyStyleNumberValue(GraphTableSVG.CustomAttributeNames.Style.paddingBottom, 5);
};
SVGElement.prototype.setPaddingLeft = function (value) {
    const p = this;
    p.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.paddingLeft, value.toString());
};
SVGElement.prototype.setPaddingTop = function (value) {
    const p = this;
    p.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.paddingTop, value.toString());
};
SVGElement.prototype.setPaddingRight = function (value) {
    const p = this;
    p.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.paddingRight, value.toString());
};
SVGElement.prototype.setPaddingBottom = function (value) {
    const p = this;
    p.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.paddingBottom, value.toString());
};
Element.prototype.hasStyleAttribute = function (name) {
    const p = this.getPropertyStyleValue(name);
    return p !== null;
};
Element.prototype.gtGetAttribute = function (name, defaultValue = null) {
    const item = this;
    const value = item.getAttribute(name);
    if (value != null) {
        return value;
    }
    else {
        return defaultValue;
    }
};
Element.prototype.gtGetAttributes = function () {
    const p = this;
    const r = [];
    for (let i = 0; i < p.attributes.length; i++) {
        const item = p.attributes.item(i);
        if (item != null) {
            r.push({ name: item.name, value: item.value });
        }
    }
    return r;
};
Element.prototype.getActiveStyle = function () {
    const p = this;
    const r = p.getAttribute("class");
    if (r == null) {
        return p.style;
    }
    else {
        return getComputedStyle(p);
    }
};
Element.prototype.gtGetAttributeNumber = function (name, defaultValue = null) {
    const item = this;
    const value = item.getAttribute(name);
    if (value != null) {
        return Number(value);
    }
    else {
        return defaultValue;
    }
};
Element.prototype.gtGetAttributeNumberWithUndefined = function (name) {
    const item = this;
    const value = item.getAttribute(name);
    if (value != null) {
        return Number(value);
    }
    else {
        return undefined;
    }
};
Element.prototype.gtGetAttributeStringWithUndefined = function (name) {
    const item = this;
    const value = item.getAttribute(name);
    if (value != null) {
        return value;
    }
    else {
        return undefined;
    }
};
Element.prototype.gtGetAttributeBooleanWithUndefined = function (name) {
    const item = this;
    const value = item.getAttribute(name);
    if (value != null) {
        return value == "true";
    }
    else {
        return undefined;
    }
};
Element.prototype.gtGetStyleBooleanWithUndefined = function (name) {
    const item = this;
    const value = item.getPropertyStyleValue(name);
    if (value != null) {
        return value == "true";
    }
    else {
        return undefined;
    }
};
Element.prototype.gtGetAttributeNumberWithoutNull = function (name, defaultValue = 0) {
    const item = this;
    const value = item.getAttribute(name);
    if (value != null) {
        return Number(value);
    }
    else {
        return defaultValue;
    }
};
Element.prototype.getPropertyStyleValueWithDefault = function (name, defaultValue) {
    const item = this;
    const p = item.getPropertyStyleValue(name);
    if (p == null) {
        return defaultValue;
    }
    else {
        return p;
    }
};
Element.prototype.getPropertyStyleValue = function (name) {
    const item = this;
    const p = item.style.getPropertyValue(name).trim();
    if (p.length == 0) {
        const r = item.getAttribute("class");
        if (r == null) {
            return null;
        }
        else {
            const css = getComputedStyle(item);
            //let css = GraphTableSVG.SVG.getStyleSheet(r);
            //if (css == null) css = getComputedStyle(item);
            const p2 = css.getPropertyValue(name).trim();
            if (p2.length == 0) {
                return null;
            }
            else {
                return p2;
            }
        }
    }
    else {
        return p;
    }
};
Element.prototype.getPropertyStyleNumberValue = function (name, defaultValue = null) {
    const item = this;
    const p = item.getPropertyStyleValue(name);
    if (p != null) {
        return GraphTableSVG.Common.toPX(p);
    }
    else {
        return defaultValue;
    }
};
Element.prototype.setPropertyStyleValue = function (name, value) {
    const item = this;
    item.style.setProperty(name, value);
};
SVGTextElement.prototype.gtSetXY = function (rect, vAnchor, hAnchor, isAutoSizeShapeToFitText) {
    const text = this;
    let x = rect.x;
    let y = rect.y;
    text.setAttribute('x', x.toString());
    text.setAttribute('y', y.toString());
    const b2 = GraphTableSVG.SVGTextBox.getSize(text, true);
    const dy = b2.y - y;
    const dx = b2.x - x;
    y -= dy;
    x -= dx;
    if (vAnchor == GraphTableSVG.VerticalAnchor.Middle) {
        y += (rect.height - b2.height) / 2;
    }
    else if (vAnchor == GraphTableSVG.VerticalAnchor.Bottom) {
        y += rect.height - b2.height;
    }
    if (hAnchor == GraphTableSVG.HorizontalAnchor.Center) {
        x += (rect.width - b2.width) / 2;
    }
    else if (hAnchor == GraphTableSVG.HorizontalAnchor.Right) {
        x += rect.width - b2.width;
    }
    text.setAttribute('y', y.toString());
    text.setAttribute('x', x.toString());
};
SVGTextElement.prototype.getMarginLeft = function () {
    const p = this;
    return p.getPropertyStyleNumberValue(GraphTableSVG.CustomAttributeNames.Style.marginLeft, 5);
};
SVGTextElement.prototype.setMarginLeft = function (value) {
    const p = this;
    p.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.marginLeft, value.toString());
};
SVGTextElement.prototype.getMarginTop = function () {
    const p = this;
    return p.getPropertyStyleNumberValue(GraphTableSVG.CustomAttributeNames.Style.marginTop, 5);
};
SVGTextElement.prototype.setMarginTop = function (value) {
    const p = this;
    p.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.marginTop, value.toString());
};
SVGTextElement.prototype.getMarginRight = function () {
    const p = this;
    return p.getPropertyStyleNumberValue(GraphTableSVG.CustomAttributeNames.Style.marginRight, 5);
};
SVGTextElement.prototype.setMarginRight = function (value) {
    const p = this;
    p.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.marginRight, value.toString());
};
SVGTextElement.prototype.getMarginBottom = function () {
    const p = this;
    return p.getPropertyStyleNumberValue(GraphTableSVG.CustomAttributeNames.Style.marginBottom, 5);
};
SVGTextElement.prototype.setMarginBottom = function (value) {
    const p = this;
    p.setPropertyStyleValue(GraphTableSVG.CustomAttributeNames.Style.marginBottom, value.toString());
};
SVGTextElement.prototype.setTextContent = function (text, isLatexMode = false) {
    GraphTableSVG.SVGTextBox.setTextToSVGText(this, text, isLatexMode);
};
SVGTextElement.prototype.getX = function () {
    const p = this;
    if (p.x.baseVal.numberOfItems == 0) {
        p.setAttribute('x', "0");
    }
    return p.x.baseVal.getItem(0).value;
};
SVGTextElement.prototype.setX = function (value) {
    const p = this;
    if (p.x.baseVal.numberOfItems == 0) {
        p.setAttribute('x', "0");
    }
    //p.setAttribute('x', value.toString());
    p.x.baseVal.getItem(0).value = value;
};
SVGTextElement.prototype.getY = function () {
    const p = this;
    if (p.y.baseVal.numberOfItems == 0) {
        p.setAttribute('y', "0");
    }
    return p.y.baseVal.getItem(0).value;
};
SVGTextElement.prototype.setY = function (value) {
    const p = this;
    if (p.y.baseVal.numberOfItems == 0) {
        p.setAttribute('y', "0");
    }
    p.y.baseVal.getItem(0).value = value;
};
var GraphTableSVG;
(function (GraphTableSVG) {
    let SVGTextBox;
    (function (SVGTextBox) {
        /**
         * 入力テキストをLatex表記でパースした結果をSVGTSpanElement配列で返します。
         * @param text Latex表記のテキスト
         * @param className 生成したSVGTSpanElementのクラス属性名
         * @param fontsize 生成したSVGTSpanElementのフォントサイズ
         * @param dxOfFirstElement 生成した最初のSVGTSpanElementのdx
         * @param dyOfFirstElement 生成した最初のSVGTSpanElementのdy
         * @returns 入力テキストをLatex表記でパースした結果をSVGTSpanElement配列
         */
        function createTextSpans(text, className = null, fontsize = 12, dxOfFirstElement = null, dyOfFirstElement = null) {
            let r = [];
            text += "_";
            //const p: SVGTextElement = this;
            //p.textContent = "";
            //const h = parseInt(p.getPropertyStyleValueWithDefault("font-size", "12"));
            let isFst = true;
            let mode = "";
            let tmp = "";
            const char_dy = (1 * fontsize) / 3;
            let lastMode = "none";
            const smallFontSize = (2 * fontsize) / 3;
            for (let i = 0; i < text.length; i++) {
                const c = text[i];
                if (c == "_" || c == "{" || c == "^" || c == "}") {
                    mode += c;
                    if (mode == "_{}") {
                        const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                        tspan.textContent = tmp;
                        tspan.setAttribute("dy", `${char_dy}`);
                        tspan.setAttribute("data-script", "subscript");
                        tspan.style.fontSize = `${smallFontSize}pt`;
                        r.push(tspan);
                        lastMode = "down";
                        mode = "";
                        tmp = "";
                    }
                    else if (mode == "^{}") {
                        const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                        tspan.textContent = tmp;
                        tspan.setAttribute("dy", `-${char_dy}`);
                        tspan.style.fontSize = `${smallFontSize}pt`;
                        tspan.setAttribute("data-script", "superscript");
                        r.push(tspan);
                        lastMode = "up";
                        mode = "";
                        tmp = "";
                    }
                    else if (mode == "_" || mode == "^") {
                        const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                        tspan.textContent = tmp;
                        const normaldy = lastMode == "up" ? char_dy : lastMode == "down" ? -char_dy : 0;
                        if (isFst) {
                            if (dxOfFirstElement != null)
                                tspan.setAttribute("dx", `${dxOfFirstElement}`);
                            if (dyOfFirstElement != null)
                                tspan.setAttribute("dy", `${dyOfFirstElement}`);
                        }
                        else {
                            tspan.setAttribute("dy", `${normaldy}`);
                        }
                        r.push(tspan);
                        lastMode = "none";
                        tmp = "";
                        isFst = false;
                    }
                }
                else {
                    tmp += c;
                }
            }
            return r;
        }
        /**
         * SVGTextElementにテキストをセットします。
         * @param svgText テキストをセットされるSVG要素
         * @param text SVG要素に適用するテキスト
         * @param isLatexMode Latex表記を使用するかどうか
         */
        function setTextToSVGText(svgText, text, isLatexMode) {
            svgText.textContent = "";
            const fontSize = svgText.getPropertyStyleValueWithDefault("font-size", "12");
            const fs = parseInt(fontSize);
            let dx = 0;
            text.split("\n").forEach((lineText) => {
                let dy = fs;
                let width = 0;
                if (isLatexMode) {
                    createTextSpans(lineText, null, fs, dx, dy).forEach((v) => {
                        svgText.appendChild(v);
                        const tLen = v.getComputedTextLength();
                        dx = 0;
                        dy = 0;
                        width += tLen;
                    });
                    dy += fs;
                }
                else {
                    svgText.appendChild(createSingleTextSpan(lineText, null));
                }
                dx = -width;
            });
        }
        SVGTextBox.setTextToSVGText = setTextToSVGText;
        /**
 * SVGTextPathElementにテキストをセットします。
 * @param path テキストをセットされるパス
 * @param text パスに適用するテキスト
 * @param isLatexMode Latex表記を使用するかどうか
 */
        function setTextToTextPath(path, text, isLatexMode) {
            path.textContent = "";
            const fontSize = path.getPropertyStyleValueWithDefault("font-size", "12");
            if (isLatexMode) {
                createTextSpans(text, null, parseInt(fontSize)).forEach((v) => path.appendChild(v));
            }
            else {
                path.appendChild(createSingleTextSpan(text, null));
            }
        }
        SVGTextBox.setTextToTextPath = setTextToTextPath;
        /**
         * 入力テキストからSVGTSpanElementを生成します。
         * @param text SVGTSpanElementのテキスト
         * @param className SVGTSpanElementのクラス属性名
         * @returns 生成されるSVGTSpanElement
         */
        function createSingleTextSpan(text, className = null) {
            const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
            tspan.textContent = text;
            if (className != null) {
                tspan.setAttribute("class", className);
            }
            return tspan;
        }
        function copy(e, target) {
            for (let i = 0; i < e.attributes.length; i++) {
                const attr = e.attributes.item(i);
                if (attr != null) {
                    const name = attr.name;
                    const value = attr.value;
                    target.setAttribute(name, value);
                }
            }
        }
        function getLines(svgText) {
            const spans = HTMLFunctions.getChildren(svgText).filter((v) => v.nodeName == "tspan");
            let r = [];
            if (spans.length == 0) {
                return [];
            }
            else {
                r.push([]);
                let y = 0;
                spans.forEach((v, i) => {
                    if (v.getAttribute("newline") == "true") {
                        r.push([v]);
                        y++;
                    }
                    else {
                        r[y].push(v);
                    }
                });
                return r;
            }
        }
        function alignTextByHorizontalAnchor(svgText, hAnchor) {
            const lineSpans = getLines(svgText);
            let dx = 0;
            if (hAnchor == GraphTableSVG.HorizontalAnchor.Center) {
                const tl = getComputedTextLengthsOfTSpans(svgText, true);
                let p = 0;
                let maxWidth = 0;
                const widths = lineSpans.map((v) => {
                    let width = 0;
                    v.forEach((w) => {
                        width += tl[p++].width;
                    });
                    return width;
                });
                p = 0;
                widths.forEach((v) => {
                    if (v > maxWidth)
                        maxWidth = v;
                });
                dx = 0;
                if (widths.length > 0) {
                    for (let y = 0; y < lineSpans.length; y++) {
                        const offset = (maxWidth - widths[y]) / 2;
                        let width = offset;
                        for (let x = 0; x < lineSpans[y].length; x++) {
                            const v = lineSpans[y][x];
                            //const tLen = v.getComputedTextLength();
                            const tLen = tl[p++].width;
                            if (x == 0 && y != 0) {
                                v.setAttribute("dx", (dx + offset).toString());
                            }
                            width += tLen;
                        }
                        dx = -width;
                    }
                }
            }
            else if (hAnchor == GraphTableSVG.HorizontalAnchor.Right) {
            }
        }
        function alignTextAsText(svgText, showChecked) {
            const lineSpans = getLines(svgText);
            const fontSize = svgText.getPropertyStyleValueWithDefault("font-size", "24");
            const fs = parseInt(fontSize);
            let dx = 0;
            let dy = fs;
            let c = 0;
            const lengths = getComputedTextLengthsOfTSpans(svgText, showChecked);
            for (let y = 0; y < lineSpans.length; y++) {
                let width = 0;
                let heightMax = fs;
                let fstObj = null;
                for (let x = 0; x < lineSpans[y].length; x++) {
                    const v = lineSpans[y][x];
                    //const tLen = v.getComputedTextLength();
                    const size = lengths[c++];
                    if (size.height > heightMax)
                        heightMax = size.height;
                    if (x == 0)
                        v.setAttribute("dx", dx.toString());
                    if (x == 0)
                        fstObj = v;
                    width += size.width;
                }
                if (y != 0 && fstObj != null)
                    fstObj.setAttribute("dy", heightMax.toString());
                dx -= width;
                //dy += fs;
            }
        }
        /**
         * SVGTextElement
         * @param svgText
         * @param hAnchor
         */
        function sortText(svgText, hAnchor, showChecked) {
            alignTextAsText(svgText, showChecked);
            alignTextByHorizontalAnchor(svgText, hAnchor);
        }
        SVGTextBox.sortText = sortText;
        function constructSVGTextByHTMLElements(svgText, text, isLatexMode) {
            svgText.textContent = "";
            const spans = text.map((v, i) => {
                const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                tspan.innerHTML = v.innerHTML;
                copy(v, tspan);
                return tspan;
            });
            let dy = 0;
            spans.forEach((v, i) => {
                svgText.appendChild(v);
            });
        }
        SVGTextBox.constructSVGTextByHTMLElements = constructSVGTextByHTMLElements;
        let ura = null;
        function getSize(svgText, showChecked = false) {
            let r = new GraphTableSVG.Rectangle();
            /*
            try{
                const rect = svgText.getBBox();
                r.x = rect.x;
                r.y = rect.y;
                r.width = rect.width;
                r.height = rect.height;
                return r;
            }catch(e){
                return new Rectangle();
            }
            */
            const b = showChecked ? true : HTMLFunctions.isShow(svgText);
            if (b) {
                const rect = svgText.getBBox();
                r.x = rect.x;
                r.y = rect.y;
                r.width = rect.width;
                r.height = rect.height;
                return r;
            }
            else {
                return new GraphTableSVG.Rectangle();
                /*
                if(ura == null){
                    ura = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                }
                document.body.appendChild(ura);
                ura.innerHTML = svgText.outerHTML;
                const fst = ura.firstChild;
                if(fst instanceof SVGTextElement){

                    const rect = fst.getBBox();
                    r.x = rect.x;
                    r.y = rect.y;
                    r.width = rect.width;
                    r.height = rect.height;
    
                    ura.removeChild(fst);
                    ura.remove();
                    return r;
                }else if(fst != null){
                    ura.removeChild(fst);
                    ura.remove();
                    return r;
                }else{
                    ura.remove();
                    return r;
                }
                */
            }
        }
        SVGTextBox.getSize = getSize;
        function getComputedTextLengthsOfTSpans(svgText, showChecked) {
            const b = showChecked ? true : HTMLFunctions.isShow(svgText);
            if (b) {
                const tspans = HTMLFunctions.getChildren(svgText).filter((v) => v.nodeName == "tspan");
                const r = tspans.map((v) => {
                    const w = v.getComputedTextLength();
                    //const h = v.getBoundingClientRect().height;
                    const fontSize = v.getPropertyStyleValueWithDefault("font-size", "24");
                    const fs = GraphTableSVG.Common.toPX(fontSize);
                    return new GraphTableSVG.Size(w, fs);
                });
                return r;
            }
            else {
                const tspans = HTMLFunctions.getChildren(svgText).filter((v) => v.nodeName == "tspan");
                const r = tspans.map((v) => {
                    return new GraphTableSVG.Size(0, 0);
                });
                return r;
                //return [];
                /*
                if(ura == null){
                    ura = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                }
                document.body.appendChild(ura);
                ura.innerHTML = svgText.outerHTML;
                const fst = ura.firstChild;
                if(fst instanceof SVGTextElement){

                    const tspans = <SVGTSpanElement[]>HTMLFunctions.getChildren(fst).filter((v)=>v.nodeName=="tspan");
                    const r = tspans.map((v)=> {
                        const w = v.getComputedTextLength();
                    const fontSize = svgText.getPropertyStyleValueWithDefault("font-size", "24");
                    const fs = Common.toPX(fontSize);
                        return new Size(w, fs);
                    })
                    ura.removeChild(fst);
                    ura.remove();
                    return r;
                }else if(fst != null){
                    ura.removeChild(fst);
                    ura.remove();
                    return [];
                }else{
                    ura.remove();
                    return [];
                }
                */
            }
        }
        SVGTextBox.getComputedTextLengthsOfTSpans = getComputedTextLengthsOfTSpans;
        /*
        export function getComputedTSpanLength(svgText:SVGTSpanElement) : number {
            if(HTMLFunctions.isShow(svgText)){
                return svgText.getComputedTextLength();
            }else{
                if(ura == null){
                    ura = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                }
                document.body.appendChild(ura);
                ura.innerHTML = svgText.outerHTML;
                const fst = ura.firstChild;
                if(fst instanceof SVGTextElement){

                    const tspans = <SVGTSpanElement[]>HTMLFunctions.getChildren(fst).filter((v)=>v.nodeName=="tspan");
                    const r = tspans.map((v)=>v.getComputedTextLength());
                    ura.removeChild(fst);
                    ura.remove();
                    return r;
                }else if(fst != null){
                    ura.removeChild(fst);
                    ura.remove();
                    return [];
                }else{
                    ura.remove();
                    return [];
                }
            }
        }
        */
    })(SVGTextBox = GraphTableSVG.SVGTextBox || (GraphTableSVG.SVGTextBox = {}));
})(GraphTableSVG || (GraphTableSVG = {}));
// tslint:disable-next-line: no-namespace
var GraphTableSVG;
(function (GraphTableSVG) {
    class TableDictionary {
        // columnValues: Map<string, (string|undefined)[]>= new Map();
        // itemCount : number = 0;
        constructor() {
            this.columnMapper = new Map();
            this.rows = new Array();
            this.objects = new Array();
            this.columnMapper.set(TableDictionary.IndexName, 0);
            // this.columnValues.set("index", []);
        }
        construct(item) {
            if (item instanceof Array) {
                item.forEach((v) => {
                    this.add(v);
                });
            }
            else {
                this.add(item);
            }
        }
        addValue(i, key, value) {
            const column = this.columnMapper.get(key);
            if (column === undefined) {
                this.columnMapper.set(key, this.columnMapper.size);
            }
            this.rows[i].set(key, value);
        }
        add(item) {
            this.rows.push(new Map());
            this.objects.push(item);
            const x = this.rows.length - 1;
            this.addValue(x, TableDictionary.IndexName, x.toString());
            if (item instanceof Array) {
                for (let i = 0; i < item.length; i++) {
                    const cell = item[i];
                    if (cell != undefined) {
                        this.addValue(x, i.toString(), cell);
                    }
                }
            }
            else {
                if (typeof item === "string" || typeof item === "number" || typeof item === "boolean") {
                    this.addValue(x, TableDictionary.ValueName, item.toString());
                }
                else if (typeof item === "object") {
                    Object.keys(item).forEach((key) => {
                        const value = item[key];
                        this.addValue(x, key.toString(), value);
                    });
                }
            }
        }
        toLogicTable() {
            const table = new GraphTableSVG.LogicTable({ columnCount: this.columnMapper.size, rowCount: this.rows.length + 1 });
            this.columnMapper.forEach((value, key) => {
                table.cells[0][value].textClass = GraphTableSVG.CustomAttributeNames.StyleValue.defaultConsoleColumnTitleCellTextClass;
                table.cells[0][value].backgroundClass = GraphTableSVG.CustomAttributeNames.StyleValue.defaultConsoleColumnTitleCellBackgroundClass;
                if (key == GraphTableSVG.TableDictionary.IndexName) {
                    table.cells[0][value].text = "(index)";
                }
                else if (key == TableDictionary.ValueName) {
                    table.cells[0][value].text = "(value)";
                }
                else {
                    table.cells[0][value].text = key;
                }
            });
            this.rows.forEach((map, index) => {
                const tableIndex = index + 1;
                for (let i = 0; i < this.columnMapper.size; i++) {
                    table.cells[tableIndex][i].text = "undefined";
                    table.cells[tableIndex][i].textClass = GraphTableSVG.CustomAttributeNames.StyleValue.defaultConsoleColumnTitleCellUndefinedTextClass;
                }
                map.forEach((value, key) => {
                    const columnIndex = this.columnMapper.get(key);
                    if (columnIndex != undefined) {
                        const cell = this.rows[index].get(key);
                        if (cell == null) {
                            table.cells[tableIndex][columnIndex].text = "null";
                        }
                        else if (cell != undefined) {
                            table.cells[tableIndex][columnIndex].text = cell.toString();
                            table.cells[tableIndex][columnIndex].textClass = GraphTableSVG.CustomAttributeNames.StyleValue.defaultTextClass;
                        }
                    }
                });
            });
            return table;
        }
        createNode(item, graph, dic) {
            if (typeof item === "object") {
                let node = dic.get(item);
                if (node !== undefined) {
                    return node;
                }
                else {
                    node = graph.addNode();
                    if (item !== undefined && item != null) {
                        dic.set(item, node);
                        Object.keys(item).forEach((key) => {
                            const value = item[key];
                            const child = this.createNode(value, graph, dic);
                            const edge = graph.createEdge();
                            edge.endNodeIndex = graph.getIndex(child);
                            edge.text = key.toString();
                            node.addEdge(edge);
                        });
                    }
                    else {
                        node.text = "null";
                    }
                    return node;
                }
            }
            else {
                const node = graph.addNode();
                if (typeof item === "undefined") {
                    node.text = "undefined";
                }
                else {
                    node.text = item.toString();
                }
                return node;
            }
        }
        toLogicGraph() {
            const dic = new Map();
            const graph = new GraphTableSVG.LogicGraph();
            this.rows.forEach((v, i) => {
                const obj = this.objects[i];
                this.createNode(obj, graph, dic);
            });
            return graph;
        }
    }
    TableDictionary.IndexName = "___GraphTableSVG_Console_Index";
    TableDictionary.ValueName = "___GraphTableSVG_Console_Value";
    GraphTableSVG.TableDictionary = TableDictionary;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    let CustomAttributeNames;
    (function (CustomAttributeNames) {
        let Style;
        (function (Style) {
            Style.autoSizeShapeToFitText = "--autosize-shape-to-fit-text";
            Style.beginConnectorType = "--begin-connector-type";
            Style.endConnectorType = "--end-connector-type";
            //export const defaultLineClass: string = "--default-line-class";
            Style.markerStart = "--marker-start";
            Style.markerEnd = "--marker-end";
            //export const defaultVertexClass: string = "--default-vertex-class";
            //export const defaultEdgeClass: string = "--default-edge-class";
            Style.vertexXInterval = "--vertex-x-interval";
            Style.vertexYInterval = "--vertex-y-interval";
            Style.defaultRadius = "--default-radius";
            Style.defaultWidth = "--default-width";
            Style.defaultHeight = "--default-height";
            //export const defaultTextClass: string = "--default-text-class";
            //export const defaultPathClass: string = "--default-path-class";
            //export const defaulSurfaceClass: string = "--default-surface-class";
            Style.defaultSurfaceType = "--default-surface-type";
            //export const defaultCellClass: string = "--default-cell-class";
            //export const defaultBorderClass: string = "--default-border-class";
            Style.paddingTop = "--padding-top";
            Style.paddingLeft = "--padding-left";
            Style.paddingRight = "--padding-right";
            Style.paddingBottom = "--padding-bottom";
            Style.marginTop = "--margin-top";
            Style.marginLeft = "--margin-left";
            Style.marginRight = "--margin-right";
            Style.marginBottom = "--margin-bottom";
            Style.VerticalAnchor = "--vertical-anchor";
            Style.HorizontalAnchor = "--horizontal-anchor";
            Style.PathTextAlignment = "--path-text-alignment";
            Style.msoDashStyleName = "--stroke-style";
            Style.relocateName = "--relocate";
            Style.prohibitionOutOfRange = "--prohibition-out-of-range";
            //export const defaultCellBackgroundClass: string = "--default-background-class";
        })(Style = CustomAttributeNames.Style || (CustomAttributeNames.Style = {}));
        let StyleValue;
        (function (StyleValue) {
            StyleValue.defaultTextClass = "___text-default";
            StyleValue.defaultCellClass = "___cell-default";
            StyleValue.defaultSurfaceClass = "___surface-default";
            StyleValue.defaultPathSurfaceClass = "___path-surface-default";
            StyleValue.defaultEdgePathClass = "___default-edge-path";
            StyleValue.defaultTextboxPathClass = "___default-textbox-path";
            StyleValue.defaultCellBackgroungClass = "___cell-background-default";
            StyleValue.defaultCellBorderClass = "___cell-border-default";
            StyleValue.defaultRectButtonSurfaceClass = "___rect-button-surface-default";
            StyleValue.defaultRectButtonClass = "___rect-button-surface-default";
            StyleValue.defaultEdgeClass = "__default-edge";
            StyleValue.defaultVertexClass = "__default-vertex";
            StyleValue.defaultConsoleColumnTitleCellClass = "___column_title_cell";
            StyleValue.defaultConsoleColumnTitleCellTextClass = "___column_title_text_cell";
            StyleValue.defaultConsoleColumnTitleCellUndefinedTextClass = "___column_title_undefined_text_cell";
            StyleValue.defaultConsoleColumnTitleCellBackgroundClass = "___column_title_background_cell";
        })(StyleValue = CustomAttributeNames.StyleValue || (CustomAttributeNames.StyleValue = {}));
        CustomAttributeNames.beginNodeName = "data-begin-node";
        CustomAttributeNames.endNodeName = "data-end-node";
        CustomAttributeNames.isAppropriatelyReverseTextMode = "data-appropriately-reverse-text";
        CustomAttributeNames.controlPointName = "data-control-point";
        CustomAttributeNames.connectPositionChangedEventName = "connect_position_changed";
        CustomAttributeNames.resizeName = "resized";
        CustomAttributeNames.vertexCreatedEventName = "vertex_created";
        CustomAttributeNames.objectCreatedEventName = "object_created";
        CustomAttributeNames.GroupAttribute = "data-type";
        CustomAttributeNames.objectIDName = "data-objectID";
        CustomAttributeNames.customElement = "data-custom";
        //export const elementTypeName = "data-element-type";
        CustomAttributeNames.defaultCircleRadius = 15;
    })(CustomAttributeNames = GraphTableSVG.CustomAttributeNames || (GraphTableSVG.CustomAttributeNames = {}));
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    /*
    export class HTMLLogicCell{
        public text: string | null = null;
        public cellClass: string | null = null;
        public connectedColumnCount: number = 1;
        public connectedRowCount: number = 1;
        public item: any;
    }
    */
    class LogicCell {
        constructor() {
            this.text = null;
            this.cellClass = GraphTableSVG.Cell.defaultCellClass;
            this.textClass = null;
            this.backgroundClass = null;
            this.topBorderClass = null;
            this.leftBorderClass = null;
            this.rightBorderClass = null;
            this.bottomBorderClass = null;
            this.svgText = null;
            this.connectedColumnCount = 1;
            this.connectedRowCount = 1;
            this.tTexts = null;
            this.isLatexMode = false;
        }
        set(text = undefined, isLatexMode = false, cellClass = undefined, backgroundClass = undefined, textClass = undefined, topBorderClass = undefined, leftBorderClass = undefined, rightBorderClass = undefined, bottomBorderClass = undefined) {
            if (text !== undefined)
                this.text = text;
            if (cellClass !== undefined)
                this.cellClass = cellClass;
            if (textClass !== undefined)
                this.textClass = textClass;
            if (backgroundClass !== undefined)
                this.backgroundClass = backgroundClass;
            if (topBorderClass !== undefined)
                this.topBorderClass = topBorderClass;
            if (leftBorderClass !== undefined)
                this.leftBorderClass = leftBorderClass;
            if (rightBorderClass !== undefined)
                this.rightBorderClass = rightBorderClass;
            if (bottomBorderClass !== undefined)
                this.bottomBorderClass = bottomBorderClass;
            this.isLatexMode = isLatexMode;
        }
        createTextElement(svgText) {
            if (this.tTexts != null) {
                GraphTableSVG.SVGTextBox.constructSVGTextByHTMLElements(svgText, this.tTexts, this.isLatexMode);
            }
            else if (this.text != null) {
                svgText.setTextContent(this.text, this.isLatexMode);
            }
        }
    }
    GraphTableSVG.LogicCell = LogicCell;
    /**
     * 表を表現するクラスです。
     */
    class LogicTable {
        constructor(option = {}) {
            this.tableClassName = null;
            this.x = null;
            this.y = null;
            if (option.columnCount == undefined)
                option.columnCount = 3;
            if (option.rowCount == undefined)
                option.rowCount = 3;
            if (option.x == undefined)
                option.x = 0;
            if (option.y == undefined)
                option.y = 0;
            [this.x, this.y] = [option.x, option.y];
            //if(option.tableClassName == undefined) option.tableClassName = null;
            this.tableClassName = option.tableClassName == undefined ? null : option.tableClassName;
            this.cells = new Array(option.rowCount);
            for (let y = 0; y < option.rowCount; y++) {
                this.cells[y] = new Array(option.columnCount);
                for (let x = 0; x < option.columnCount; x++) {
                    this.cells[y][x] = new LogicCell();
                }
            }
            this.rowHeights = new Array(option.rowCount);
            for (let y = 0; y < option.rowCount; y++) {
                this.rowHeights[y] = null;
            }
            this.columnWidths = new Array(option.columnCount);
            for (let x = 0; x < option.columnCount; x++) {
                this.columnWidths[x] = null;
            }
        }
        get rowCount() {
            return this.rowHeights.length;
        }
        get columnCount() {
            return this.columnWidths.length;
        }
        get cellArray() {
            const r = new Array();
            for (let y = 0; y < this.rowHeights.length; y++) {
                for (let x = 0; x < this.columnWidths.length; x++) {
                    r.push(this.cells[y][x]);
                }
            }
            return r;
        }
        getColumn(i) {
            const r = new Array();
            for (let y = 0; y < this.rowHeights.length; y++) {
                r.push(this.cells[y][i]);
            }
            return r;
        }
        getRow(i) {
            const r = new Array();
            for (let x = 0; x < this.columnWidths.length; x++) {
                r.push(this.cells[i][x]);
            }
            return r;
        }
        /*
        public checkTable(): boolean {

        }
        */
        static parse(str, delimiter) {
            const lines = str.split("\n");
            const r = new Array(lines.length);
            for (let y = 0; y < lines.length; y++) {
                const line = lines[y].split(delimiter);
                r[y] = new Array(line.length);
                for (let x = 0; x < line.length; x++) {
                    r[y][x] = line[x];
                }
                if (y > 0) {
                    if (r[y].length != r[y - 1].length) {
                        alert("Parse Error");
                        throw Error("Parse Error");
                    }
                }
            }
            return r;
        }
        static create(str, tableClassName = null) {
            const table = new LogicTable({ columnCount: str[0].length, rowCount: str.length, tableClassName: tableClassName == null ? undefined : tableClassName });
            for (let y = 0; y < str.length; y++) {
                for (let x = 0; x < str[y].length; x++) {
                    const p = str[y][x].split("%%%");
                    table.cells[y][x].text = p[0];
                    if (p.length == 3) {
                        table.cells[y][x].connectedColumnCount = Number(p[1]);
                        table.cells[y][x].connectedRowCount = Number(p[2]);
                    }
                }
            }
            return table;
        }
        static constructLogicTable(e) {
            const rows = HTMLFunctions.getChildren(e).filter((v) => v.getAttribute(GraphTableSVG.CustomAttributeNames.customElement) == "row").map((v) => v);
            const widthsStr = e.getPropertyStyleValue("--widths");
            if (rows.length == 0)
                return null;
            const cells = new Array(rows.length);
            let columnSize = 0;
            rows.forEach((v, i) => {
                const cellArray = HTMLFunctions.getChildren(v).filter((v) => v.getAttribute(GraphTableSVG.CustomAttributeNames.customElement) == "cell");
                cellArray.forEach((v) => v.removeAttribute(GraphTableSVG.CustomAttributeNames.customElement));
                cells[i] = cellArray;
                if (columnSize < cellArray.length)
                    columnSize = cellArray.length;
            });
            const logicTable = new LogicTable({ rowCount: rows.length, columnCount: columnSize });
            ;
            //output.table = new LogicTable({ rowCount: rows.length, columnCount: columnSize });
            if (widthsStr != null) {
                const widths = JSON.parse(widthsStr);
                widths.forEach((v, i) => logicTable.columnWidths[i] = v);
            }
            for (let y = 0; y < cells.length; y++) {
                const h = rows[y].getPropertyStyleNumberValue("--height", null);
                logicTable.rowHeights[y] = h;
                for (let x = 0; x < cells[y].length; x++) {
                    logicTable.cells[y][x].text = cells[y][x].innerHTML;
                    if (cells[y][x].hasAttribute("w")) {
                        const w = Number(cells[y][x].getAttribute("w"));
                        logicTable.cells[y][x].connectedColumnCount = w;
                    }
                    if (cells[y][x].hasAttribute("h")) {
                        const h = Number(cells[y][x].getAttribute("h"));
                        logicTable.cells[y][x].connectedRowCount = h;
                    }
                    const tNodes = GraphTableSVG.openSVGFunctions.getTNodes(cells[y][x]);
                    if (tNodes != null)
                        logicTable.cells[y][x].tTexts = tNodes;
                }
            }
            return logicTable;
        }
        static constructHTMLLogicTable(e) {
            const rows = HTMLFunctions.getChildren(e).filter((v) => v.getAttribute(GraphTableSVG.CustomAttributeNames.customElement) == "row").map((v) => v);
            const widthsStr = e.getPropertyStyleValue("--widths");
            if (rows.length == 0)
                return null;
            const cells = new Array(rows.length);
            let columnSize = 0;
            rows.forEach((v, i) => {
                const cellArray = HTMLFunctions.getChildren(v).filter((v) => v.getAttribute(GraphTableSVG.CustomAttributeNames.customElement) == "cell");
                cellArray.forEach((v) => v.removeAttribute(GraphTableSVG.CustomAttributeNames.customElement));
                cells[i] = cellArray;
                if (columnSize < cellArray.length)
                    columnSize = cellArray.length;
            });
            const logicTable = new LogicTable({ rowCount: rows.length, columnCount: columnSize });
            ;
            if (widthsStr != null) {
                const widths = JSON.parse(widthsStr);
                widths.forEach((v, i) => logicTable.columnWidths[i] = v);
            }
            for (let y = 0; y < cells.length; y++) {
                const h = rows[y].getPropertyStyleNumberValue("--height", null);
                logicTable.rowHeights[y] = h;
                for (let x = 0; x < cells[y].length; x++) {
                    logicTable.cells[y][x].text = cells[y][x].innerHTML;
                    if (cells[y][x].hasAttribute("w")) {
                        const w = Number(cells[y][x].getAttribute("w"));
                        logicTable.cells[y][x].connectedColumnCount = w;
                    }
                    if (cells[y][x].hasAttribute("h")) {
                        const h = Number(cells[y][x].getAttribute("h"));
                        logicTable.cells[y][x].connectedRowCount = h;
                    }
                    //const tNodes = openSVGFunctions.getTNodes(cells[y][x]);
                    logicTable.cells[y][x].text = cells[y][x].innerHTML;
                }
            }
            return logicTable;
        }
        view() {
            GraphTableSVG.Console.table(this);
        }
    }
    GraphTableSVG.LogicTable = LogicTable;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    /*
    export class BaseLogicTree {
        public edgeLabel: string | null = null;
        public nodeText: string | null = null;
    }
    */
    class LogicGraphEdge {
        constructor() {
            this.text = null;
            this.endNodeIndex = -1;
        }
    }
    GraphTableSVG.LogicGraphEdge = LogicGraphEdge;
    class LogicGraphNode {
        constructor() {
            this.text = null;
            this.outputEdges = [];
        }
        addEdge(e) {
            this.outputEdges.push(e);
        }
    }
    GraphTableSVG.LogicGraphNode = LogicGraphNode;
    class LogicGraph {
        constructor() {
            this.nodes = [];
            this.edges = [];
        }
        construct(iten) {
        }
        addNode() {
            const node = new LogicGraphNode();
            this.nodes.push(node);
            return node;
        }
        createEdge() {
            const edge = new LogicGraphEdge();
            this.edges.push(edge);
            return edge;
        }
        getIndex(node) {
            return this.nodes.indexOf(node);
        }
    }
    GraphTableSVG.LogicGraph = LogicGraph;
    /**
     * 木構造を表現するクラスです。
     */
    class LogicTree {
        constructor(option = {}) {
            this.vertexText = null;
            this.parentEdgeText = null;
            this.vertexClass = null;
            this.parentEdgeClass = null;
            this.children = [];
            this.item = null;
            if (option.item != undefined)
                this.item = option.item;
            if (option.vertexText != undefined)
                this.vertexText = option.vertexText;
            if (option.parentEdgeText != undefined)
                this.parentEdgeText = option.parentEdgeText;
            if (option.children != undefined)
                this.children = option.children;
        }
        getOrderedNodes(order) {
            const r = [];
            const edges = this.children;
            if (order == GraphTableSVG.VertexOrder.Preorder) {
                r.push(this);
                edges.forEach((v) => {
                    if (v != null) {
                        v.getOrderedNodes(order).forEach((w) => {
                            r.push(w);
                        });
                    }
                });
            }
            else if (order == GraphTableSVG.VertexOrder.Postorder) {
                edges.forEach((v) => {
                    if (v != null) {
                        v.getOrderedNodes(order).forEach((w) => {
                            r.push(w);
                        });
                    }
                });
                r.push(this);
            }
            return r;
        }
        view() {
            GraphTableSVG.Console.graph(this);
        }
    }
    GraphTableSVG.LogicTree = LogicTree;
    /**
     * 二分木を表現するクラスです。
     */
    class BinaryLogicTree extends LogicTree {
        constructor(item = null, left = null, right = null, nodeText = null, edgeLabel = null) {
            super({ item: item == null ? undefined : item, children: [left, right], vertexText: nodeText == null ? undefined : nodeText, parentEdgeText: edgeLabel == null ? undefined : edgeLabel });
            this.item = item;
        }
        get left() {
            const left = this.children[0];
            if (left == null) {
                return null;
            }
            else {
                return left;
            }
        }
        set left(value) {
            this.children[0] = value;
        }
        get right() {
            const right = this.children[1];
            if (right == null) {
                return null;
            }
            else {
                return right;
            }
        }
        set right(value) {
            this.children[1] = value;
        }
    }
    GraphTableSVG.BinaryLogicTree = BinaryLogicTree;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    let openSVGFunctions;
    (function (openSVGFunctions) {
        function getTNodes(e) {
            const tNodes = HTMLFunctions.getChildren(e).filter((v) => v.getAttribute(GraphTableSVG.CustomAttributeNames.customElement) == "t");
            if (tNodes.length > 0) {
                tNodes.forEach((v, i) => {
                    v.removeAttribute(GraphTableSVG.CustomAttributeNames.customElement);
                    if (i > 0 && !v.hasAttribute("newline"))
                        v.setAttribute("newline", "true");
                });
                return tNodes;
            }
            else {
                return null;
            }
        }
        openSVGFunctions.getTNodes = getTNodes;
    })(openSVGFunctions = GraphTableSVG.openSVGFunctions || (GraphTableSVG.openSVGFunctions = {}));
    function isGCustomElement(element) {
        const gObjectTypeAttr = element.getAttribute(GraphTableSVG.CustomAttributeNames.customElement);
        if (gObjectTypeAttr != null) {
            const gObjectType = GraphTableSVG.ShapeObjectType.toShapeObjectType(gObjectTypeAttr);
            return gObjectType != null;
        }
        else {
            return false;
        }
    }
    function openCustomElement(id) {
        if (typeof id == "string") {
            const item = document.getElementById(id);
            if (item instanceof SVGElement) {
                return GraphTableSVG.openCustomElement(item);
            }
            else {
                return null;
            }
        }
        else {
            const element = id;
            //const shapeType = GraphTableSVG.ShapeObjectType.toShapeObjectType(element.nodeName);
            const gObjectTypeAttr = element.getAttribute(GraphTableSVG.CustomAttributeNames.customElement);
            if (gObjectTypeAttr != null) {
                const gObjectType = GraphTableSVG.ShapeObjectType.toShapeObjectType(gObjectTypeAttr);
                if (gObjectType != null) {
                    return createCustomElement(element, gObjectType);
                }
                else {
                    return null;
                }
            }
            else {
                const type = GraphTableSVG.ShapeObjectType.toShapeObjectType(element.nodeName);
                if (type != null) {
                    return createCustomElement(element, type);
                }
                else {
                    return null;
                }
            }
        }
    }
    GraphTableSVG.openCustomElement = openCustomElement;
    function createCustomElement(e, type) {
        const parent = e.parentElement;
        if (parent instanceof SVGElement) {
            let r;
            e.removeAttribute(GraphTableSVG.CustomAttributeNames.customElement);
            if (type == GraphTableSVG.ShapeObjectType.Callout) {
                const option = GraphTableSVG.GCallout.constructAttributes(e, true);
                r = new GraphTableSVG.GCallout(parent, option);
            }
            else if (type == GraphTableSVG.ShapeObjectType.ArrowCallout) {
                const option = GraphTableSVG.GArrowCallout.constructAttributes(e, true);
                r = new GraphTableSVG.GArrowCallout(parent, option);
            }
            else if (type == GraphTableSVG.ShapeObjectType.Ellipse) {
                const option = GraphTableSVG.GTextBox.constructAttributes(e, true);
                r = new GraphTableSVG.GEllipse(parent, option);
            }
            else if (type == GraphTableSVG.ShapeObjectType.Rect) {
                const option = GraphTableSVG.GTextBox.constructAttributes(e, true);
                r = new GraphTableSVG.GRect(parent, option);
                //throw Error("error");
            }
            else if (type == GraphTableSVG.ShapeObjectType.Edge) {
                const option = GraphTableSVG.GEdge.constructAttributes(e, true);
                r = new GraphTableSVG.GEdge(parent, option);
            }
            else if (type == GraphTableSVG.ShapeObjectType.Graph) {
                const option = GraphTableSVG.GTextBox.constructAttributes(e, true);
                r = new GraphTableSVG.GGraph(parent, option);
                //(<GGraph>r).relocate();
            }
            else if (type == GraphTableSVG.ShapeObjectType.Table) {
                const option = GraphTableSVG.GTable.constructAttributes(e, true);
                r = new GraphTableSVG.GTable(parent, option);
            }
            else if (type == GraphTableSVG.ShapeObjectType.RectButton) {
                const option = GraphTableSVG.GTextBox.constructAttributes(e, true);
                r = new GraphTableSVG.GRectButton(parent, option);
            }
            else {
                return null;
            }
            //属性の移動と元オブジェクトの削除
            const attrs = e.gtGetAttributes();
            HTMLFunctions.getChildren(e).forEach((v) => r.svgGroup.appendChild(v));
            e.remove();
            attrs.forEach((v) => {
                var items = v.name.split(":");
                if (items.length == 2 && items[0] == "surface") {
                    if (r.svgSurface != null) {
                        r.svgSurface.setAttribute(items[1], v.value);
                    }
                }
                else {
                    r.svgGroup.setAttribute(v.name, v.value);
                }
            });
            if (r instanceof GraphTableSVG.GGraph) {
                r.relocate();
            }
            return r;
        }
        else {
            throw Error("error!");
        }
    }
    let timerInterval = 100;
    function lazyOpenSVG() {
        const p = document.getElementsByTagName("svg");
        const svgElements = [];
        for (let i = 0; i < p.length; i++) {
            const svgNode = p.item(i);
            if (svgNode instanceof SVGSVGElement)
                svgElements.push(svgNode);
        }
        svgElements.forEach((svgsvg) => lazyElementDic.push(svgsvg));
        if (lazyElementDic.length > 0)
            setTimeout(observelazyElementTimer, timerInterval);
    }
    GraphTableSVG.lazyOpenSVG = lazyOpenSVG;
    let lazyElementDic = [];
    function observelazyElementTimer() {
        for (let i = 0; i < lazyElementDic.length; i++) {
            const element = lazyElementDic[i];
            if (HTMLFunctions.isInsideElement(element)) {
                openSVG(element);
                lazyElementDic.splice(i, 1);
                i = -1;
            }
        }
        if (lazyElementDic.length > 0)
            setTimeout(observelazyElementTimer, timerInterval);
    }
    function openSVG(inputItem = null, output = []) {
        if (typeof inputItem == "string") {
            const item = document.getElementById(inputItem);
            if (item != null && item instanceof SVGSVGElement) {
                return GraphTableSVG.openSVG(item, output);
            }
            else {
                return [];
            }
        }
        else if (inputItem === null) {
            const p = document.getElementsByTagName("svg");
            const svgElements = [];
            for (let i = 0; i < p.length; i++) {
                const svgNode = p.item(i);
                if (svgNode instanceof SVGSVGElement)
                    svgElements.push(svgNode);
            }
            svgElements.forEach((svgsvg) => openSVG(svgsvg, output));
            return output;
        }
        else if (inputItem instanceof SVGSVGElement) {
            const svgsvg = inputItem;
            HTMLFunctions.getDescendants(svgsvg).forEach(v => {
                const shapeType = GraphTableSVG.ShapeObjectType.toShapeObjectType(v.nodeName);
                if (shapeType != null) {
                    toSVGUnknownElement(v);
                }
            });
            const startTime = performance.now();
            HTMLFunctions.getDescendantsByPostorder(svgsvg).forEach((v) => {
                if (v instanceof SVGElement) {
                    if (isGCustomElement(v)) {
                        const p = GraphTableSVG.openCustomElement(v);
                        if (p != null) {
                            output.push(p);
                        }
                    }
                }
            });
            const endTime = performance.now();
            const time = endTime - startTime;
            //console.log("create " + svgsvg.id + " : " + time + "ms");
            GraphTableSVG.GUI.observeSVGSVG(svgsvg);
        }
        else {
            throw Error("errror");
        }
        return output;
    }
    GraphTableSVG.openSVG = openSVG;
    function createShape(parent, type, option = {}) {
        let _parent;
        if (parent instanceof GraphTableSVG.GObject) {
            _parent = parent.svgGroup;
        }
        else if (parent instanceof SVGElement) {
            _parent = parent;
        }
        else {
            _parent = document.getElementById(parent);
        }
        switch (type) {
            case GraphTableSVG.ShapeObjectType.Callout: return new GraphTableSVG.GCallout(_parent, option);
            case GraphTableSVG.ShapeObjectType.ArrowCallout: return new GraphTableSVG.GArrowCallout(_parent, option);
            case GraphTableSVG.ShapeObjectType.Ellipse: return new GraphTableSVG.GEllipse(_parent, option);
            case GraphTableSVG.ShapeObjectType.Rect: return new GraphTableSVG.GRect(_parent, option);
            case GraphTableSVG.ShapeObjectType.Edge: return new GraphTableSVG.GEdge(_parent, option);
            case GraphTableSVG.ShapeObjectType.Graph: return new GraphTableSVG.GGraph(_parent, option);
            case GraphTableSVG.ShapeObjectType.Table: return new GraphTableSVG.GTable(_parent, option);
            case GraphTableSVG.ShapeObjectType.RectButton: return new GraphTableSVG.GRectButton(_parent, option);
        }
        throw Error("error");
    }
    GraphTableSVG.createShape = createShape;
    function createVertex(parent, option = {}) {
        let _parent = parent.svgGroup;
        if (option.class == undefined)
            option.class = GraphTableSVG.CustomAttributeNames.StyleValue.defaultVertexClass;
        const type = option.class == undefined ? null : parent.getStyleValue(option.class, GraphTableSVG.CustomAttributeNames.Style.defaultSurfaceType);
        if (type != null) {
            switch (type) {
                case GraphTableSVG.ShapeObjectType.Callout: return new GraphTableSVG.GCallout(_parent, option);
                case GraphTableSVG.ShapeObjectType.ArrowCallout: return new GraphTableSVG.GArrowCallout(_parent, option);
                case GraphTableSVG.ShapeObjectType.Ellipse: return new GraphTableSVG.GEllipse(_parent, option);
                case GraphTableSVG.ShapeObjectType.Rect: return new GraphTableSVG.GRect(_parent, option);
            }
        }
        return new GraphTableSVG.GEllipse(_parent, option);
    }
    GraphTableSVG.createVertex = createVertex;
    function toSVGUnknownElement(e) {
        const type = GraphTableSVG.ShapeObjectType.toShapeObjectTypeOrCustomTag(e.nodeName);
        if (type == null) {
        }
        else {
            const ns = document.createElementNS('http://www.w3.org/2000/svg', "g");
            ns.setAttribute(GraphTableSVG.CustomAttributeNames.customElement, e.nodeName);
            for (let i = 0; i < e.attributes.length; i++) {
                const attr = e.attributes.item(i);
                ns.setAttribute(attr.name, attr.value);
            }
            ns.innerHTML = e.innerHTML;
            //HTMLFunctions.getChildren(e).forEach((v)=>ns.appendChild(v));
            const p = e.parentElement;
            if (p != null) {
                p.insertBefore(ns, e);
                e.remove();
            }
            const children = HTMLFunctions.getChildren(ns);
            children.forEach((v) => toSVGUnknownElement(v));
        }
    }
    GraphTableSVG.toSVGUnknownElement = toSVGUnknownElement;
    function toDivElement(e) {
        //const type = e.nodeName == "G-TABLE" ? "g-table" : e.nodeName == "ROW" ? "row" : e.nodeName == "CELL" ? "cell" : e.nodeName == "T" ? "t" : null;
        const type = e.nodeName == "G-TABLE" ? "g-table" : e.nodeName == "ROW" ? "row" : e.nodeName == "CELL" ? "cell" : null;
        if (type == null) {
            return null;
        }
        else {
            const ns = document.createElement("div");
            ns.setAttribute(GraphTableSVG.CustomAttributeNames.customElement, type);
            for (let i = 0; i < e.attributes.length; i++) {
                const attr = e.attributes.item(i);
                ns.setAttribute(attr.name, attr.value);
            }
            ns.innerHTML = e.innerHTML;
            //HTMLFunctions.getChildren(e).forEach((v)=>ns.appendChild(v));
            const p = e.parentElement;
            if (p != null) {
                p.insertBefore(ns, e);
                e.remove();
            }
            const children = HTMLFunctions.getChildren(ns);
            children.forEach((v) => toDivElement(v));
            return ns;
        }
    }
    GraphTableSVG.toDivElement = toDivElement;
    function isSVGElement(e) {
        if (e.parentElement == null) {
            return false;
        }
        else {
            if (e.parentElement instanceof SVGSVGElement) {
                return true;
            }
            else {
                return isSVGElement(e.parentElement);
            }
        }
    }
    function openHTML(id = null) {
        if (id == null) {
            const p = document.getElementsByTagName("g-table");
            const svgElements = [];
            for (let i = 0; i < p.length; i++) {
                const svgNode = p.item(i);
                if (svgNode != null) {
                    if (!isSVGElement(svgNode) && svgNode instanceof HTMLElement)
                        svgElements.push(svgNode);
                }
            }
            svgElements.forEach((e) => openHTML(e));
        }
        else if (typeof (id) == "string") {
            const e = document.getElementById(id);
            if (e instanceof HTMLElement) {
                openHTML(e);
            }
        }
        else {
            const newE = toDivElement(id);
            if (newE != null) {
                const table = HTMLFunctions.createHTMLTable(newE);
                newE.insertAdjacentElement('beforebegin', table);
                newE.remove();
            }
        }
    }
    GraphTableSVG.openHTML = openHTML;
})(GraphTableSVG || (GraphTableSVG = {}));
var GraphTableSVG;
(function (GraphTableSVG) {
    let GraphManager;
    (function (GraphManager) {
        function createRandomObject(size) {
            const adjacencyMatrix = new Array(size);
            const nodes = new Array(size);
            for (let y = 0; y < size; y++) {
                nodes[y] = {};
                adjacencyMatrix[y] = new Array(size);
                for (let x = 0; x < size; x++) {
                    if (x == y) {
                        adjacencyMatrix[y][x] = false;
                    }
                    else {
                        const random = Math.floor(Math.random() * 2);
                        adjacencyMatrix[y][x] = random == 1;
                    }
                }
            }
            for (let y = 0; y < size; y++) {
                for (let x = 0; x < size; x++) {
                    if (adjacencyMatrix[y][x]) {
                        nodes[y][x] = nodes[x];
                    }
                }
            }
            return nodes;
        }
        GraphManager.createRandomObject = createRandomObject;
    })(GraphManager = GraphTableSVG.GraphManager || (GraphTableSVG.GraphManager = {}));
})(GraphTableSVG || (GraphTableSVG = {}));
//# sourceMappingURL=graph_table_svg.js.map