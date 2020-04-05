//namespace GraphTableSVG {

import * as AttributeNames from "../common/attribute_names"
import * as StyleNames from "../common/style_names"
import * as DefaultClassNames from "../common/default_class_names"

//import {GEdgeAttributes, GObjectAttributes} from "../options/attributes_option"
import * as SVG from "../interfaces/svg"
import { ShapeObjectType, PathTextAlighnment, ConnectorPosition, msoDashStyle, CoodinateType } from "../common/enums";
import * as CommonFunctions from "../common/common_functions"
import { VBATranslateFunctions } from "../common/vba_functions"
import * as SVGTextBox from "../interfaces/svg_textbox";
import {getLineType, setComputedDashArray} from "../html/enum_extension";

import { GEdgeTextBox } from "./g_edge_textbox"
import { GVertex } from "./g_vertex"
import { GObject } from "./g_object"
import * as CSS from "../html/css"
import * as GOptions  from "./g_options"
import * as ElementExtension from "../interfaces/element_extension"
import * as Extensions from "../interfaces/extensions"
import * as SVGTextExtensions from "../interfaces/svg_text_extension"
import { HTML } from "..";

import * as HTMLFunctions from "../html/html_functions";
import { unwatchFile } from "fs";

/**
 * 辺をSVGで表現するためのクラスです。
 */
export class GEdge extends GEdgeTextBox {

    constructor(svgbox: SVGElement | string) {
        super(svgbox);
        this._isSpecialTextBox = true;
        this.updateAttributes.push(AttributeNames.beginNodeName);
        this.updateAttributes.push(AttributeNames.endNodeName);

        const pathClass = this.svgSurface!.getAttribute("class");
        if (pathClass == DefaultClassNames.defaultSurfaceClass) {
            this.svgSurface!.setAttribute("class", DefaultClassNames.defaultPathSurfaceClass);
        }
        this.svgText.textContent = "";

        this._svgTextPath = SVG.createTextPath2(DefaultClassNames.defaultTextClass);
        this.svgPath.id = `path-${this.objectID}`;

        this.svgText.appendChild(this._svgTextPath);
        this._svgTextPath.href.baseVal = `#${this.svgPath.id}`
        

        if (this.type == ShapeObjectType.Edge) this.firstFunctionAfterInitialized();

        //this.setAppropriateText();
    }

    protected setBasicOption(option: GOptions.GEdgeAttributes) {
        super.setBasicOption(option)
        //this._svgGroup = SVG.createGroup(svgbox);
        //const _option = <GOptions.GEdgeAttributes>this.initializeOption(option);
        //const textClass = this.svgGroup.getPropertyStyleValue(AttributeNames.Style.defaultTextClass);
        if (option.textClass === undefined) option.textClass = DefaultClassNames.defaultTextClass;
        
        let textClass : string | undefined;
        if(typeof option.textClass == "string"){
            textClass = option.textClass;
        }else if(typeof option.textClass == "object"){
            textClass = CSS.getOrCreateClassName(option.textClass);
        }


        if (typeof option.text == "string") {
            Extensions.setTextContent(this.svgTextPath, option.text);
        } else if (Array.isArray(option.text)) {

        } else {

        }

        const edgeColor = ElementExtension.getPropertyStyleValue(this.svgPath, "stroke");
        const edgeColor2 = edgeColor == null ? undefined : edgeColor;
        const strokeWidth = ElementExtension.getPropertyStyleValue(this.svgPath, "stroke-width");
        const strokeWidth2 = strokeWidth == null ? undefined : strokeWidth;

        if (option.startMarker !== undefined) this.markerStart = GEdge.createStartMarker({ color: edgeColor2, strokeWidth: strokeWidth2 });
        if (option.endMarker !== undefined) this.markerEnd = GEdge.createEndMarker({ color: edgeColor2, strokeWidth: strokeWidth2 });

        this.pathPoints = [[option.x1!, option.y1!], [option.x2!, option.y2!]];


        if(typeof option.beginVertex == "object"){
            if (option.beginVertex instanceof GVertex) this.beginVertex = option.beginVertex;
        }else if(typeof option.beginVertex == "string"){
            this.beginVertexID = option.beginVertex;
        }

        if(typeof option.endVertex == "object"){
            if (option.endVertex instanceof GVertex) this.endVertex = option.endVertex;
        }else if(typeof option.endVertex == "string"){
            this.endVertexID = option.endVertex;
        }


        if (option.x3 !== undefined && option.y3 !== undefined) {
            this.controlPoint = [[option.x3, option.y3]];
        }
        
    }

    public getLocation(type: ConnectorPosition, x: number, y: number): [number, number] {
        throw Error("Error!")
    }
    public get coordinateType() : CoodinateType {
        return "group00"
    }

    /*
    protected createObjects(svgbox: SVGElement, option: GObjectAttributes = {}): void {

    }
    */
    static constructAttributes(e: Element, removeAttributes: boolean = false, output: GOptions.GEdgeAttributes = {}): GOptions.GEdgeAttributes {
        const _output = <GOptions.GEdgeAttributes>GEdgeTextBox.constructAttributes(e, removeAttributes, output);
        _output.x1 = ElementExtension.gtGetAttributeNumberWithoutNull(e, "x1", 0);
        _output.x2 = ElementExtension.gtGetAttributeNumberWithoutNull(e, "x2", 300);
        _output.y1 = ElementExtension.gtGetAttributeNumberWithoutNull(e, "y1", 0);
        _output.y2 = ElementExtension.gtGetAttributeNumberWithoutNull(e, "y2", 300);
        if (e.hasAttribute("x3")) {
            _output.x3 = ElementExtension.gtGetAttributeNumberWithoutNull(e, "x3", 0);
        }
        if (e.hasAttribute("y3")) {
            _output.y3 = ElementExtension.gtGetAttributeNumberWithoutNull(e, "y3", 0);
        }

        _output.beginVertex = ElementExtension.gtGetAttributeStringWithUndefined(e, "begin-vertex");
        _output.endVertex = ElementExtension.gtGetAttributeStringWithUndefined(e, "end-vertex");
        const bct = ElementExtension.getPropertyStyleValue(e, StyleNames.beginConnectorType);

        if (bct != null && typeof(_output.style) == "object" ){
            _output.style.beginConnectorType = ConnectorPosition.ToConnectorPosition(bct);
        } 
        const ect = ElementExtension.getPropertyStyleValue(e, StyleNames.endConnectorType);
        if (ect != null && typeof(_output.style) == "object" ){
            _output.style.endConnectorType = ConnectorPosition.ToConnectorPosition(ect);
        }

        //if (ect != null) _output.endConnectorType = ConnectorPosition.ToConnectorPosition(ect);

        _output.startMarker = ElementExtension.gtGetStyleBooleanWithUndefined(e, StyleNames.markerStart);
        _output.endMarker = ElementExtension.gtGetAttributeBooleanWithUndefined(e, StyleNames.markerEnd);

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
    /*
    initializeOption(option: GOptions.GObjectAttributes): GOptions.GObjectAttributes {
        const _option = <GOptions.GEdgeAttributes>super.initializeOption(option);


        const markerStartName = ElementExtension.getPropertyStyleValue(this.svgGroup, StyleNames.markerStart);
        const markerEndName = ElementExtension.getPropertyStyleValue(this.svgGroup, StyleNames.markerEnd);
        if (typeof _option.startMarker === "undefined" && markerStartName != null) _option.startMarker = markerStartName == "true";
        if (typeof _option.endMarker === "undefined" && markerEndName != null) _option.endMarker = markerEndName == "true";


        if (typeof _option.x1 === "undefined") _option.x1 = 0;
        if (typeof _option.y1 === "undefined") _option.y1 = 0;
        if (typeof _option.x2 === "undefined") _option.x2 = 300;
        if (typeof _option.y2 === "undefined") _option.y2 = 300;

        if (typeof _option.beginVertex === "string") {
            const obj = GEdgeTextBox.getObjectFromID(_option.beginVertex);
            if (obj instanceof GVertex) {
                _option.beginVertex = obj;
            }
        }
        if (typeof _option.endVertex === "string") {
            const obj = GEdgeTextBox.getObjectFromID(_option.endVertex);
            if (obj instanceof GVertex) {
                _option.endVertex = obj;
            }
        }



        return _option;

    }
    */
    public isDrawnText() : boolean{
        const text = this.svgTextPath.textContent;
        if(text == null || text.length == 0){
            return true;
        }else{
            const len = this.svgTextPath.getComputedTextLength();
            return len != 0;
        }
    }

    private static connectedBeginVertexDic: { [key: string]: string; } = {};
    private static connectedEndVertexDic: { [key: string]: string; } = {};
    public static getConnectedVertexFromDic(edge: GEdge, isBegin: boolean): GVertex | null {
        const dic = isBegin ? GEdge.connectedBeginVertexDic : GEdge.connectedEndVertexDic;
        if (edge.objectID in dic) {
            const id = dic[edge.objectID];
            const obj = GObject.getObjectFromObjectID(id);
            if (obj instanceof GVertex) {
                return obj;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
    public static setConnectedVertexFromDic(edge: GEdge, isBegin: boolean): void {
        const dic = isBegin ? GEdge.connectedBeginVertexDic : GEdge.connectedEndVertexDic;
        const id = isBegin ? edge.beginVertexID : edge.endVertexID;
        if (id == null) {
            if (edge.objectID in dic) {
                delete dic[edge.objectID];
            }
        } else {
            dic[edge.objectID] = id;
        }
    }

    /*
    protected setClassNameOfSVGGroup() {
        const parent = this.svgGroup.parentElement;
        if (parent instanceof SVGElement) {
            const className = AttributeNames.StyleValue.defaultEdgeClass;
            if (className != null) {
                this.svgGroup.setAttribute("class", className);
            }
        }
    }
    */
    public get degree(): number {
        const rad = Math.atan2(this.y2 - this.y1, this.x2 - this.x1);
        const degree = (180 * rad) / Math.PI;
        return degree;
    }
    public get defaultClassName(): string | undefined {
        return DefaultClassNames.defaultEdgeClass;
    }

    //private _svgPath: SVGPathElement | null;
    public get svgPath(): SVGPathElement {
        return <SVGPathElement>this.svgSurface;
    }
    protected _svgTextPath: SVGTextPathElement;
    public get svgTextPath(): SVGTextPathElement {
        return this._svgTextPath;
    }
    protected createSurface(svgbox: SVGElement, option: GOptions.GObjectAttributes = {}): void {
        if (option.surfaceClass === undefined) option.surfaceClass = DefaultClassNames.defaultEdgePathClass;
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
    private static createPath(parent: SVGElement | HTMLElement, x: number, y: number, x2: number, y2: number,
        className: string | GOptions.surfaceClassCSS , style: string | undefined | GOptions.surfaceClassCSS): SVGPathElement {
        const path = <SVGPathElement>document.createElementNS('http://www.w3.org/2000/svg', 'path');
        parent.appendChild(path);
        path.setAttribute("d", `M ${x} ${y} L ${x2} ${y2}`);

        
        GOptions.setClassAndStyle(path, className, style);
        /*
        if(style !== undefined){
            if(typeof(style) == "string"){
                path.setAttribute("style", style);
            }else{
                path.setAttribute("style", CSS.buildClassNameFromSurfaceClassCSS(style));
            }

        }

        if(typeof(className) == "string"){
            path.setAttribute("class", className);
        }else{
            path.setAttribute("class", CSS.buildClassNameFromSurfaceClassCSS(className));
        }
        */
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
    public get type(): ShapeObjectType {
        return "g-edge";
    }
    /*
    public get surface() : SVGElement {
        return this.svgPath;
    }
    */
    public tag: any;
    /**
     * 辺の制御点を返します。
     */
    public get controlPoint(): [number, number][] {
        const r = this.pathPoints
        r.shift()
        r.pop();
        return r;
    }
    public set controlPoint(value: [number, number][]) {
        const fst: [number, number] = [this.x1, this.y1];
        const lst: [number, number] = [this.x2, this.y2];
        value.unshift(fst);
        value.push(lst);
        this.pathPoints = value;
    }
    /**
    開始接点の接続位置を返します。
    */
    get beginConnectorType(): ConnectorPosition {
        const p = ElementExtension.getPropertyStyleValue(this.svgGroup, StyleNames.beginConnectorType);
        return ConnectorPosition.ToConnectorPosition(p);
    }
    /**
    開始接点の接続位置を設定します。
    */
    set beginConnectorType(value: ConnectorPosition) {
        ElementExtension.setPropertyStyleValue(this.svgGroup, StyleNames.beginConnectorType, value)
        //this.svgGroup.setAttribute(Edge.beginConnectorTypeName, ToStrFromConnectorPosition(value));
    }
    /**
    終了接点の接続位置を返します。
    */
    get endConnectorType(): ConnectorPosition {
        const p = ElementExtension.getPropertyStyleValue(this.svgGroup, StyleNames.endConnectorType);
        return ConnectorPosition.ToConnectorPosition(p);
    }
    /**
    終了接点の接続位置を設定します。
    */
    set endConnectorType(value: ConnectorPosition) {
        ElementExtension.setPropertyStyleValue(this.svgGroup, StyleNames.endConnectorType, value)
    }

    private get beginVertexID(): string | null {
        return this.svgGroup.getAttribute(AttributeNames.beginNodeName);
    }
    private set beginVertexID(v: string | null) {
        if (v == null) {
            this.svgGroup.removeAttribute(AttributeNames.beginNodeName);
        } else {
            this.svgGroup.setAttribute(AttributeNames.beginNodeName, v);
        }
    }

    private get endVertexID(): string | null {
        return this.svgGroup.getAttribute(AttributeNames.endNodeName);
    }
    private set endVertexID(v: string | null) {
        if (v == null) {
            this.svgGroup.removeAttribute(AttributeNames.endNodeName);
        } else {
            this.svgGroup.setAttribute(AttributeNames.endNodeName, v);
        }
    }

    public get isAppropriatelyReverseMode(): boolean {

        const p = this.svgGroup.getAttribute(AttributeNames.isAppropriatelyReverseTextMode);
        if (p == null) {
            return false;
        } else {
            return p == "true";
        }


        //return this.svgGroup.getAttribute(AttributeNames.appropriateEdgeText);
    }
    public set isAppropriatelyReverseMode(v: boolean) {
        this.svgGroup.setAttribute(AttributeNames.isAppropriatelyReverseTextMode, v.toString());

    }

    public get side(): string | null {
        return this.svgTextPath.getAttribute("side");
    }
    public set side(v: string | null) {
        if (v == null) {
            this.svgTextPath.removeAttribute("side");
        } else {
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
    public get markerStart(): SVGMarkerElement | null {
        if (this.svgPath != null) {
            var p = this.svgPath.getAttribute("marker-start");
            if (p != null) {
                const str = p.substring(5, p.length - 1);
                const ele = <SVGMarkerElement><any>document.getElementById(str);
                return ele;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
    /**
     * 開始位置の矢印オブジェクトを設定します。
     * @param value 代入するSVGMarkerElementもしくはNull
     */
    public set markerStart(value: SVGMarkerElement | null) {
        if (this.svgPath != null) {
            if (value == null) {
                this.svgPath.removeAttribute("marker-start");
            } else {

                this.svgGroup.appendChild(value);
                this.svgPath.setAttribute("marker-start", `url(#${value.id})`);
            }
        }
    }
    /**
     * 終了位置の矢印オブジェクトを返します。
     */
    public get markerEnd(): SVGMarkerElement | null {
        if (this.svgPath != null) {
            var p = this.svgPath.getAttribute("marker-end");
            if (p != null) {
                const str = p.substring(5, p.length - 1);
                const ele = <SVGMarkerElement><any>document.getElementById(str);
                return ele;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
    public set markerEnd(value: SVGMarkerElement | null) {
        if (this.svgPath != null) {
            if (value == null) {
                this.svgPath.removeAttribute("marker-end");
            } else {
                this.svgGroup.appendChild(value);
                this.svgPath.setAttribute("marker-end", `url(#${value.id})`);
            }
        }
    }
    private removeVertexEvent(vertex: GVertex) {
        vertex.svgGroup.removeEventListener(AttributeNames.connectPositionChangedEventName, this.connectPositionChangedFunc);
    }
    private addVertexEvent(vertex: GVertex) {
        vertex.svgGroup.addEventListener(AttributeNames.connectPositionChangedEventName, this.connectPositionChangedFunc);
    }
    private connectPositionChangedFunc = () => {
        this.update();
    }

    /**
    開始接点を返します。
    */
    get beginVertex(): GVertex | null {
        if (this.beginVertexID == null) {
            return null;
        } else {
            return <GVertex>GEdgeTextBox.getObjectFromObjectID(this.beginVertexID);
        }
    }
    /**
    開始接点を設定します。
    */
    set beginVertex(value: GVertex | null) {
        if (value == null) {
            this.beginVertexID = null;
        } else {
            this.beginVertexID = value.objectID;
        }

        this.update();

    }
    /**
    終了接点を返します。
    */
    get endVertex(): GVertex | null {
        if (this.endVertexID == null) {
            return null;
        } else {
            return <GVertex>GEdgeTextBox.getObjectFromObjectID(this.endVertexID);
        }
    }
    /**
    終了接点を設定します。
    */
    set endVertex(value: GVertex | null) {
        if (value == null) {
            this.endVertexID = null;
        } else {
            this.endVertexID = value.objectID;
        }


        this.update();

    }
    /**
     * この辺を廃棄します。廃棄した辺はグラフから取り除かれます。
     */
    public dispose() {
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
    public get x1(): number {
        return this.pathPoints[0][0];
    }
    public set x1(value: number) {
        const p = this.pathPoints;
        p[0][0] = value;
        this.pathPoints = p;
    }
    /**
    開始位置のY座標を返します。
    */
    public get y1(): number {
        return this.pathPoints[0][1];
    }
    public set y1(value: number) {
        const p = this.pathPoints;
        p[0][1] = value;
        this.pathPoints = p;
    }

    /**
    終了位置のX座標を返します。
    */
    public get x2(): number {
        const d = this.pathPoints;
        return d[d.length - 1][0];
    }
    public set x2(value: number) {
        const p = this.pathPoints;
        p[p.length - 1][0] = value;
        this.pathPoints = p;
    }

    /**
    終了位置のY座標を返します。
    */
    public get y2(): number {
        const d = this.pathPoints;
        return d[d.length - 1][1];
    }
    public set y2(value: number) {
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
    public get lineColor(): string | null {
        if (this.svgPath != null) {
            return ElementExtension.getPropertyStyleValueWithDefault(this.svgPath, "stroke", "black");
        } else {
            return null;
        }
    }

    private removeTextLengthAttribute(): void {
        if (this.svgText.hasAttribute("textLength")) this.svgText.removeAttribute("textLength");
        if (this.svgTextPath.hasAttribute("textLength")) this.svgTextPath.removeAttribute("textLength");
        if (this.svgText.hasAttribute("letter-spacing")) this.svgText.removeAttribute("letter-spacing");
    }
    private setRegularInterval(value: number): void {
        this.removeTextLengthAttribute();

        const textRect = SVGTextExtensions.getSize(this.svgText);
        //const box = this.svgText.getBBox();
        const diff = value - textRect.width;
        const number = this.svgText.textContent != null ? this.svgText.textContent.length : 0;
        if (number >= 2) {
            const w = diff / (number - 1)
            this.svgText.setAttribute("letter-spacing", `${w}`);
        }
        this.svgText.setAttribute("textLength", `${value}`);
        this.svgTextPath.setAttribute("textLength", `${value}`);

    }
    private get pathPoints(): [number, number][] {
        const dAttr = this.svgPath.getAttribute("d");
        if (dAttr == null) throw Error("error");
        const d = dAttr.split(" ");
        let i = 0;
        const r: [number, number][] = [];

        while (i < d.length) {
            if (d[i] == "M") {
                r.push([Number(d[i + 1]), Number(d[i + 2])]);
                i += 3;
            } else if (d[i] == "L") {
                r.push([Number(d[i + 1]), Number(d[i + 2])]);
                i += 3;
            } else if (d[i] == "Q") {
                r.push([Number(d[i + 1]), Number(d[i + 2])]);
                r.push([Number(d[i + 3]), Number(d[i + 4])]);
                i += 5;
            } else {

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
    private set pathPoints(points: [number, number][]) {
        let path = "";
        if (points.length == 2) {
            const [x1, y1] = points[0];
            const [x2, y2] = points[1];

            path = `M ${x1} ${y1} L ${x2} ${y2}`
        } else if (points.length == 3) {
            const [x1, y1] = points[0];
            const [x2, y2] = points[2];
            const [cx1, cy1] = points[1];
            path = `M ${x1} ${y1} Q ${cx1} ${cy1} ${x2} ${y2}`
        } else if (points.length == 1) {
            throw Error("path points ivnalid error");
        }
        else {
            path = `M ${0} ${0} L ${0} ${0}`
        }

        const prevPath = this.svgPath.getAttribute("d");
        if (prevPath == null || path != prevPath) {
            this.svgPath.setAttribute("d", path);
        }
    }
    private updateConnectorInfo() {
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
    private revTextForApp() {
        if (this.side == "left" || this.side == null) {
            this.side = "right";
        } else {
            this.side = "left";
        }
        const tspans: SVGTSpanElement[] = new Array(0);
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
        })

    }
    public get isShown() : boolean {
        const b1 = super.isShown;
        //const b2 = HTMLFunctions.isShow(this.svgTextPath);
        const b2 = true;
        const b3 = HTMLFunctions.isShow(this.svgText);

        return b1 && b2 && b3;

    }
    private updateTextPath(){
        //if(this.svgTextPath.textContent!.length == 0) return;
        
        if(!HTMLFunctions.isShow(this.svgTextPath)){
            throw new Error();
        }
        const strWidth = SVGTextExtensions.getVirtualTextLineLength(this.svgTextPath); 
        const pathLen = this.svgPath.getTotalLength();
            

        if (this.pathTextAlignment == PathTextAlighnment.regularInterval) {
            //const pathLen = this.svgPath.getTotalLength();
            const strLen = this.svgTextPath.textContent == null ? 0 : this.svgTextPath.textContent.length;
            if (strWidth > 0) {
                const paddingWidth = pathLen - strWidth;
                const paddingUnit = paddingWidth / (strLen + 1);
                //const startPos = pathLen / (strLen + 1);
                let textPathLen = pathLen - (paddingUnit * 2);
                if (textPathLen <= 0) textPathLen = 5;
                this.svgTextPath.setAttribute("startOffset", `${paddingUnit }`);
                this.setRegularInterval(textPathLen);
            }

        }
        else if (this.pathTextAlignment == PathTextAlighnment.end) {
            this.svgTextPath.setAttribute("startOffset", `${0}`);
            this.removeTextLengthAttribute();
            //const textRect = SVGTextBox.getSize(this.svgText);
            //const strWidth = SVGTextExtensions.getVirtualTextLineLength(this.svgTextPath); 
            //const strWidth = SVGTextExtensions.getWidth(this.svgText);

            //const box = this.svgText.getBBox();
            //const pathLen = this.svgPath.getTotalLength();
            //this.svgTextPath.setAttribute("startOffset", `${0}`);
            //this.svgTextPath.setAttribute("startOffset", `${pathLen - strWidth}`);
            if (this.side == "right") {
                this.svgTextPath.setAttribute("startOffset", `${0}`);
            } else {
                this.svgTextPath.setAttribute("startOffset", `${pathLen - strWidth}`);
            }

        }
        else if (this.pathTextAlignment == PathTextAlighnment.center) {
            this.removeTextLengthAttribute();
            
            //const strWidth = SVGTextExtensions.getWidth(this.svgText);
            //const strWidth = SVGTextExtensions.getVirtualTextLineLength(this.svgTextPath); 

            //const pathLen = this.svgPath.getTotalLength();
            const offset = (pathLen / 2) - (strWidth / 2);

            if (this.side == "right") {
                this.svgTextPath.setAttribute("startOffset", `${offset}`);
            } else {
                this.svgTextPath.setAttribute("startOffset", `${offset}`);
            }
            //こっちだとEdgeではおかしくなる
            //this.svgTextPath.startOffset.baseVal.value = (pathLen - box.width)/2;                    

        }
        else {
            //const strWidth = SVGTextExtensions.getWidth(this.svgText);
            if (this.side == "right") {
                this.svgTextPath.setAttribute("startOffset", `${pathLen - strWidth}`);
            } else {
                this.svgTextPath.setAttribute("startOffset", `${0}`);
            }

            //this.svgTextPath.setAttribute("startOffset", `${0}`);
            this.removeTextLengthAttribute();
            //this.svgText.textLength.baseVal.value = 0;
        }
    }
    private updateLocation(){
        const [cx1, cy1] = this.beginVertex != null ? [this.beginVertex.cx, this.beginVertex.cy] : [this.x1, this.y1];
        const [cx2, cy2] = this.endVertex != null ? [this.endVertex.cx, this.endVertex.cy] : [this.x2, this.y2];

        const [x1, y1] = this.beginVertex != null ? this.beginVertex.getLocation(this.beginConnectorType, cx2, cy2) : [cx1, cy1];
        const [x2, y2] = this.endVertex != null ? this.endVertex.getLocation(this.endConnectorType, cx1, cy1) : [cx2, cy2];
        const points: [number, number][] = this.pathPoints;

        points[0] = [x1, y1];
        points[points.length - 1] = [x2, y2];
        this.pathPoints = points;

    }
    private get pathIsShown() : boolean{
        return this.svgText.textContent!.length == 0 || HTMLFunctions.isShow(this.svgTextPath)
    }
    /**
     * 再描画します。
     */
    public update(): boolean {
        //const b = HTMLFunctions.isShow(this.svgTextPath);

        super.update();

        this.updateConnectorInfo();

        this.hasConnectedObserverFunction = false;
        //this._observer.disconnect();
        const dashStyle = this.msoDashStyle;
        if (dashStyle != null) {
            setComputedDashArray(this.svgPath);
        }
        //this._observer.observe(this.svgGroup, this._observerOption);
        this.hasConnectedObserverFunction = true;

        this.updateLocation();

        //if(this.x != 0) throw Error("error!");
        /*
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        */

        if (this.isAppropriatelyReverseMode) {

            const degree = this.degree;
            if (degree < -90 || degree > 90) {
                //Rev
                if (this.side == "left" || this.side == null) {
                    this.revTextForApp();
                }
            } else {
                if (this.side == "right") {
                    this.revTextForApp();
                }
            }
        }




        if (this.markerStart != null) {
            var node = <SVGPolygonElement>this.markerStart.firstChild;
            if (this.lineColor != null) {
                node.setAttribute("fill", this.lineColor);
            }
        }
        if (this.markerEnd != null) {
            var node = <SVGPolygonElement>this.markerEnd.firstChild;
            if (this.lineColor != null) {
                node.setAttribute("fill", this.lineColor);
            }
        }
        const strokeWidth = ElementExtension.getPropertyStyleValue(this.svgPath, "stroke-width");
        if (strokeWidth != null) {
            const diffy = CommonFunctions.toPX(strokeWidth) + 3;
            this.svgText.setAttribute("dy", `-${diffy}`);
        } else {
            this.svgText.setAttribute("dy", "0");
        }
        this.updateTextPath();




        return false;
    }

    private static getRevString(text: string): string {
        let s = "";
        for (let i = text.length - 1; i >= 0; i--) {
            s += text[i];
        }
        return s;
    }
    /**
     * この辺のテキストがパスに沿って均等に描画される状態ならばTrueを返します。
     */
    public get pathTextAlignment(): PathTextAlighnment {
        const value = ElementExtension.getPropertyStyleValueWithDefault(this.svgGroup, StyleNames.PathTextAlignment, "center");
        return PathTextAlighnment.toPathTextAlighnment(value);
    }
    public set pathTextAlignment(value: PathTextAlighnment) {
        ElementExtension.setPropertyStyleValue(this.svgGroup, StyleNames.PathTextAlignment, value);
    }

    public save() {
    }
    public setIndexDictionaryForVBA(vertexDic: { [key: string]: number; }, edgeDic: { [key: string]: number; }) {
        if (this.controlPoint.length == 0) {
            edgeDic[this.objectID] = Object.keys(edgeDic).length;
        } else if (this.controlPoint.length > 0) {
            //edgeDic[this.objectID] = Object.keys(edgeDic).length;
            for (let i = 0; i < this.VBAConnectorNumber; i++) {
                vertexDic[`${this.objectID}_${i}`] = Object.keys(vertexDic).length;
            }
            for (let i = 0; i <= this.VBAConnectorNumber; i++) {
                edgeDic[`${this.objectID}_${i}`] = Object.keys(edgeDic).length;
            }

        }

    }
    public VBAConnectorNumber = 1;


    private static markerCounter: number = 0;
    /**
     * 矢印オブジェクトを作成します。
     */
    private static createMark(option: { className?: string, strokeWidth?: string, color?: string, isEnd?: boolean } = {}): SVGMarkerElement {
        var [marker, path] = SVG.createMarker(option);
        if (option.isEnd != undefined && option.isEnd) {
            path.setAttribute("transform", "rotate(180,5,5)");
            marker.setAttribute("refX", "0");
        }
        marker.id = `marker-${GEdge.markerCounter++}`;
        return marker;
    }
    public static createStartMarker(option: { className?: string, strokeWidth?: string, color?: string } = {}): SVGMarkerElement {
        const option2 = { className: option.className, strokeWidth: option.strokeWidth, color: option.color, isEnd: true };
        return this.createMark(option2);

    }
    public static createEndMarker(option: { className?: string, strokeWidth?: string, color?: string } = {}): SVGMarkerElement {
        return this.createMark(option);
    }

    /*
    public setStyleForPNG() {
        SVG.setStyleForPNG(this.svgPath);
        SVG.setStyleForPNG(this.svgText);
        SVG.setStyleForPNG(this.svgTextPath);

    }
    */

    public get shape(): string {
        return "msoConnectorStraight";
    }
    public createVBACode(id: number): string[] {
        const lineArr: number[] = [];
        const r: string[] = [];
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

                const begType: number = ConnectorPosition.ToVBAConnectorPosition2(this.beginVertex.shape, this.beginVertex.getConnectorType(this.beginConnectorType, this.endVertex.x, this.endVertex.y));
                const endType: number = ConnectorPosition.ToVBAConnectorPosition2(this.endVertex.shape, this.endVertex.getConnectorType(this.endConnectorType, this.beginVertex.x, this.beginVertex.y));
                r.push(` Call EditConnector(obj.ConnectorFormat, shapes_("${this.beginVertex.objectID}"), shapes_("${this.endVertex.objectID}"), ${begType}, ${endType})`)
                const lineType = getLineType(this.svgPath);
                const lineColor = VBATranslateFunctions.colorToVBA(ElementExtension.getPropertyStyleValueWithDefault(this.svgPath, "stroke", "gray"));
                const strokeWidth = parseInt(ElementExtension.getPropertyStyleValueWithDefault(this.svgPath, "stroke-width", "4"));
                const visible = ElementExtension.getPropertyStyleValueWithDefault(this.svgPath, "visibility", "visible") == "visible" ? "msoTrue" : "msoFalse";
                r.push(` Call EditLine(obj.Line, ${lineColor}, ${lineType}, ${0}, ${strokeWidth}, ${visible})`);

            }
        } else if (this.controlPoint.length > 0 && this.beginVertex != null && this.endVertex != null) {

            //subline.push(` Set obj = shapes_.AddConnector(msoConnectorStraight, 0, 0, 0, 0)`);
            //lineArr.push(i);
            r.push(` Dim nodes(${this.VBAConnectorNumber}) As Shape`);

            for (let j = 0; j < this.VBAConnectorNumber; j++) {
                const t = (j + 1) / (this.VBAConnectorNumber + 1);
                const centerPoint = CommonFunctions.bezierLocation([this.x1, this.y1], this.controlPoint[0], [this.x2, this.y2], t);
                r.push(`shapes_.AddShape(msoShapeOval, ${centerPoint[0]}, ${centerPoint[1]}, 0, 0).name = "${this.objectID}_node_${j}"`);
            }

            for (let j = 0; j <= this.VBAConnectorNumber; j++) {
                //const centerPoint = Common.bezierLocation([this.x1, this.y1], this.controlPoint[0], [this.x2, this.y2], 0.5);
                const edgeID = `${this.objectID}_edge_${j}`;
                const beg = j == 0 ? this.beginVertex.objectID : `${this.objectID}_node_${j - 1}`;
                const end = j == this.VBAConnectorNumber ? this.endVertex.objectID : `${this.objectID}_node_${j}`;

                r.push(` shapes_.AddConnector(msoConnectorStraight, 0, 0, 0, 0).name = "${this.objectID}_edge_${j}"`);
                const lineType = getLineType(this.svgPath);
                const lineColor = VBATranslateFunctions.colorToVBA(ElementExtension.getPropertyStyleValueWithDefault(this.svgPath, "stroke", "gray"));
                const strokeWidth = parseInt(ElementExtension.getPropertyStyleValueWithDefault(this.svgPath, "stroke-width", "4"));
                const visible = ElementExtension.getPropertyStyleValueWithDefault(this.svgPath, "visibility", "visible") == "visible" ? "msoTrue" : "msoFalse";
                r.push(` Call EditLine(shapes_("${edgeID}").Line, ${lineColor}, ${lineType}, ${0}, ${strokeWidth}, ${visible})`);

                const begType: number = j == 0 ? ConnectorPosition.ToVBAConnectorPosition2(this.beginVertex.shape, this.beginVertex.getConnectorType(this.beginConnectorType, this.endVertex.x, this.endVertex.y)) : 1;
                const endType: number = j == this.VBAConnectorNumber ? ConnectorPosition.ToVBAConnectorPosition2(this.endVertex.shape, this.endVertex.getConnectorType(this.endConnectorType, this.beginVertex.x, this.beginVertex.y)) : 1;
                r.push(` Call EditConnector(shapes_("${edgeID}").ConnectorFormat, shapes_("${beg}"), shapes_("${end}"), ${begType}, ${endType})`)

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
            const lineType = getLineType(this.svgPath);
            const lineColor = VBATranslateFunctions.colorToVBA(ElementExtension.getPropertyStyleValueWithDefault(this.svgPath, "stroke", "gray"));
            const strokeWidth = parseInt(ElementExtension.getPropertyStyleValueWithDefault(this.svgPath, "stroke-width", "4"));
            const visible = ElementExtension.getPropertyStyleValueWithDefault(this.svgPath, "visibility", "visible") == "visible" ? "msoTrue" : "msoFalse";
            r.push(` Call EditLine(edges(${v}).Line, ${lineColor}, ${lineType}, ${0}, ${strokeWidth}, ${visible})`);
        });




        //subline.forEach((v) => sub.push([v]));

        const textCodes = this.createVBACodeOfText(id);
        textCodes.forEach((v, i) => r.push(`Call create${id}_label_${i}(shapes_)`));

        r.push(`End Sub`);
        textCodes.forEach((v) => v.forEach((w) => r.push(w)));
        return r;
    }

    public get hasSize(): boolean {
        return false;
    }
    /**
     * VBAコードを作成します。
     * @param shapes 
     * @param result 
     */
    public createVBACodeOfText(id: number): string[][] {
        const r: string[][] = [];
        const fontSize = parseInt(ElementExtension.getPropertyStyleValueWithDefault(this.svgTextPath, "font-size", "12"));
        const fontFamily = VBATranslateFunctions.ToVBAFont(ElementExtension.getPropertyStyleValueWithDefault(this.svgTextPath, "font-family", "MS PGothic"));
        const fontBold = VBATranslateFunctions.ToFontBold(ElementExtension.getPropertyStyleValueWithDefault(this.svgTextPath, "font-weight", "none"));

        if (this.svgTextPath.textContent != null) {
            for (let i = 0; i < this.svgTextPath.textContent.length; i++) {
                const s: string[] = new Array(0);
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

//}