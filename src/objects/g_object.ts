//namespace GraphTableSVG {
import * as CommonFunctions from "../common/common_functions"
import * as GUIObserver from "../html/gui_observer"
import { Rectangle, PositionType } from "../common/vline"
import { CoodinateType } from "../common/enums"

import * as SVG from "../interfaces/svg"
import * as HTMLFunctions from "../html/html_functions"
import * as CSS from "../html/css"
import { DraggableObjectFunctions } from "../html/draggable_object"
import * as AttributeNames from "../common/attribute_names"
import * as StyleNames from "../common/style_names"
import * as DefaultClassNames from "../common/default_class_names"
import { ShapeObjectType } from "../common/enums";
import * as  GOptions from "./g_options";
import * as ElementExtension from "../interfaces/element_extension"
import * as SVGGExtension from "../interfaces/svg_g_extension"



export type GObjectMaps = {
    groupAttributes?: Map<string, string>;
    surfaceAttributes?: Map<string, string>;
    textAttributes?: Map<string, string>;
}
export class GObject {

    protected _svgSurface: SVGElement | null = null;
    protected _tag: any;
    private _svgGroup: SVGGElement;
    protected _observer: MutationObserver;
    private _observerOption: MutationObserverInit;


    public constructor(svgbox: SVGElement | string, option: GOptions.GObjectAttributes = {}) {
        CSS.setGraphTableCSS();
        let parentElement: SVGElement = svgbox instanceof SVGElement ? svgbox : <any>document.getElementById(svgbox);
        if (parentElement instanceof SVGSVGElement && !GUIObserver.isObserved(parentElement)) {
            GUIObserver.observeSVGSVG(parentElement);
        }
        this._svgGroup = SVG.createGroup(parentElement);

        /*
        GOptions.setClassAndStyle(this._svgGroup, option.class, option.style);
        if(option.attributes !== undefined){
            Object.keys(option.attributes).forEach((v) =>{
                const value : string = option.attributes![v];
                this._svgGroup.setAttribute(v, value);
            })
        }
        */

        GObject.setObjectFromObjectID(this);

        (this.svgGroup as any).operator = this;



        this.svgGroup.setAttribute(AttributeNames.GroupAttribute, this.type);
        const _option = this.initializeOption(option);
        this.createSurface(parentElement, option);

        this._observer = new MutationObserver(this.observerFunc);
        this._observerOption = { attributes: true, childList: true, subtree: true };
        this.hasConnectedObserverFunction = true;

        this.dispatchObjectCreatedEvent();
        this.addResizeEvent();


        const __svg = <any>this.svgGroup
        __svg.operator = this;
        this.setOptionInGObject(option);

        /*
        if (_option.x !== undefined) this.fixedX = _option.x;
        if (_option.y !== undefined) this.fixedY = _option.y;
        */
        if (this.type == ShapeObjectType.Object) this.firstFunctionAfterInitialized();

    }
    protected setOptionInGObject(option: GOptions.GObjectAttributes) : void{
        GOptions.setClassAndStyle(this._svgGroup, option.class, option.style);
        if(option.attributes !== undefined){
            Object.keys(option.attributes).forEach((v) =>{
                const value : string = option.attributes![v];
                this._svgGroup.setAttribute(v, value);
            })
        }
        if (typeof option.id !== "undefined") this.svgGroup.id = option.id;
        //if(_option.surfaceClass !== undefined && this.svgSurface !== null) this.svgSurface.setAttribute("class", _option.surfaceClass);

        this.width = option.width !== undefined ? option.width : 25;
        this.height = option.height !== undefined ? option.height : 25;

        if(option.position !== undefined){
            if(option.position.type == "center"){
                this.positionType = PositionType.Center;
                this.cx = option.position.x;
                this.cy = option.position.y;
            }else{
                /*
                this.positionType = PositionType.UpperLeft;
                this.x = option.position.x;
                this.y = option.position.y;
                */
            }
        }else{
            this.positionType = PositionType.Center;
            this.__cx = 0;
            this.__cy = 0;
    
        }

        /*
        this.__x = option.x;
        this.__y = option.y;
        this.__cx = option.cx !== undefined ? option.cx : 0;
        this.__cy = option.cy !== undefined ? option.cy : 0;
        */
    }
    public setOption(option: GOptions.GObjectAttributes, superFlag : boolean = true){
        this.setOptionInGObject(option);
    }
    initializeOption(option: GOptions.GObjectAttributes): GOptions.GObjectAttributes {
        const _option = { ...option };
        if (this.svgSurface != null && this.svgSurface.className != null) {
            const width = ElementExtension.getPropertyStyleNumberValue(this.svgSurface, StyleNames.defaultWidth, null);
            const height = ElementExtension.getPropertyStyleNumberValue(this.svgSurface, StyleNames.defaultHeight, null);
            if (width != null) _option.width = width;
            if (height != null) _option.height = height;
        }
        if (_option.width === undefined) _option.width = 25;
        if (_option.height === undefined) _option.height = 25;
        /*
        if (_option.cx === undefined) _option.cx = 0;
        if (_option.cy === undefined) _option.cy = 0;
        */
        if (_option.surfaceClass === undefined) _option.surfaceClass = DefaultClassNames.defaultSurfaceClass;
        
        return _option;
    }
    /*
    public get shape() : ShapeObjectType {
        return ShapeObjectType.Object;
    }
    */
    private _isInitialized = false;
    private __x: number | undefined;
    private __y: number | undefined;
    private __cx: number | undefined;
    private __cy: number | undefined;

    protected disconnectObserverFunction() {
        this._observer.disconnect();
    }
    protected connectObserverFunction() {
        this._observer.observe(this.svgGroup, this._observerOption);
    }
    private _hasConnectedObserverFunction: boolean = false;
    protected get hasConnectedObserverFunction(): boolean {
        return this._hasConnectedObserverFunction;
    }
    protected set hasConnectedObserverFunction(b: boolean) {
        if (this._hasConnectedObserverFunction != b) {
            if (b) {
                this.connectObserverFunction();
            } else {
                this.disconnectObserverFunction();
            }
            this._hasConnectedObserverFunction = b;
        }
    }

    public get coordinateType() : CoodinateType {
        return "object-center"
    }

    public get defaultClassName(): string | undefined {
        return undefined;
    }
    protected get isInitialized(): boolean {
        return this._isInitialized
    }
    protected firstFunctionAfterInitialized() {
        if (this._isInitialized) {
            throw new Error("This function is already called");
        }
        this._isInitialized = true;

        this.update();
        if (this.__cx !== undefined) this.cx = this.__cx;
        if (this.__cy !== undefined) this.cy = this.__cy;

        if (this.__x !== undefined) this.x = this.__x;
        if (this.__y !== undefined) this.y = this.__y;
    }

    protected groupObserverOption: MutationObserverInit = { attributes: true, childList: true, subtree: true };

    private removeResizeEvent() {
        this.svgGroup.removeEventListener(AttributeNames.resizeName, this.pUpdateFunc);
    }
    private addResizeEvent() {
        this.svgGroup.addEventListener(AttributeNames.resizeName, this.pUpdateFunc);
    }
    private pUpdateFunc = () => {
        this.resizeUpdate();
    }
    /*
    private addOnLoadEvent() {
        this.svgGroup.onload = this.onLoadFunction;
        //this.svgGroup.addEventListener("load", this.onLoadFunction);
    }

    private removeOnLoadEvent() {
        
        this.svgGroup.removeEventListener("load", this.onLoadFunction);
    }
    protected onLoadFunction = () => {
    }
    */

    protected firstResizeUpdate() {

    }
    /*
    protected _isLoaded = false;
    public get isLoaded(){
        return this._isLoaded;
    }
    */

    protected resizeUpdate() {
        this.update();
    }
    
    static constructAttributes(e: Element,
        removeAttributes: boolean = false, output: GOptions.GObjectAttributes = {}): GOptions.GObjectAttributes {
        output.class = ElementExtension.gtGetAttributeStringWithUndefined(e, "class");
        if (output.class === undefined) ElementExtension.gtGetAttributeStringWithUndefined(e, "group:class");
        output.surfaceClass = ElementExtension.gtGetAttributeStringWithUndefined(e, "surface:class");
        output.style = ElementExtension.gtGetAttributeStringWithUndefined(e, "group:style");
        if (e.hasAttribute("style")) output.style = ElementExtension.gtGetAttributeStringWithUndefined(e, "style");
        output.surfaceStyle = ElementExtension.gtGetAttributeStringWithUndefined(e, "surface:style");

        const cx = ElementExtension.gtGetAttributeNumberWithUndefined(e, "cx");
        const cy = ElementExtension.gtGetAttributeNumberWithUndefined(e, "cy");
        const x = ElementExtension.gtGetAttributeNumberWithUndefined(e, "x");
        const y = ElementExtension.gtGetAttributeNumberWithUndefined(e, "y");
        if(cx !== undefined || cy !== undefined){
            output.position = { type : "center", x : cx !== undefined ? cx : 0, y : cy !== undefined ? cy : 0}
        }else if(x !== undefined || y !== undefined){
            output.position = { type : "upper-left", x : x !== undefined ? x : 0, y : y !== undefined ? y : 0}
        }else{
            output.position = { type : "center", x : 0, y : 0}
        }
        //const cx = 
        output.width = ElementExtension.gtGetAttributeNumberWithUndefined(e, "width");
        output.height = ElementExtension.gtGetAttributeNumberWithUndefined(e, "height");


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
    public get tag() {
        return this._tag;
    }
    public set tag(v: any) {
        this._tag = v;
    }
    public get isShow() {
        return HTMLFunctions.isShow(this.svgGroup);
    }

    /**
    セルを表しているSVGGElementを返します。
    */
    public get svgGroup(): SVGGElement {
        return this._svgGroup;
    }



    get isLocated(): boolean {
        return CommonFunctions.IsDescendantOfBody(this.svgGroup);
    }
    public get svgSurface(): SVGElement | null {
        return this._svgSurface;
    }

    /**
このVertexのX座標を返します。
*/
    public get cx(): number {
        if (this.isCenterBased) {
            return SVGGExtension.getX(this.svgGroup);
        } else {
            return SVGGExtension.getX(this.svgGroup) + (this.width / 2);
        }
    }
    public set cx(value: number) {
        if(this.coordinateType == CoodinateType.Group00){
            //throw Error("This object does not support set cx!" + this.type);
        }
        else{
            if (this.isCenterBased) {
                if (SVGGExtension.getX(this.svgGroup) != value) {
                    SVGGExtension.setX(this.svgGroup,value);
                }
            } else {
                SVGGExtension.setX(this.svgGroup,value - (this.width / 2));
            }
    
        }


    }
    /**
    このVertexのY座標を返します。
    */
    public get cy(): number {

        if (this.isCenterBased) {
            return SVGGExtension.getY(this.svgGroup);
        } else {
            return SVGGExtension.getY(this.svgGroup) + (this.height / 2);
        }
    }
    public set cy(value: number) {
        if(this.coordinateType == CoodinateType.Group00){
            //throw Error("This object does not support set cy!");
        }else{
            if (this.isCenterBased) {
                if (SVGGExtension.getY(this.svgGroup) != value) {
                    SVGGExtension.setY(this.svgGroup,value);
                }
            } else {
                SVGGExtension.setY(this.svgGroup,value - (this.height / 2));
            }    
        }

    }
    public get upperHeight() : number{
        return (this.height /2);
    }
    public get leftWidth() : number{
        return (this.width /2);
    }

    public get x(): number {
        if (this.isCenterBased) {
            return SVGGExtension.getX(this.svgGroup) + this.getVirtualRegion().x;
        } else {
            return SVGGExtension.getX(this.svgGroup);
        }
    }
    public get y(): number {
        if (this.isCenterBased) {
            return SVGGExtension.getY(this.svgGroup) + this.getVirtualRegion().y;
        } else {
            return SVGGExtension.getY(this.svgGroup);
        }
    }
    public set x(v: number) {
        if(this.coordinateType == CoodinateType.Group00){
            throw Error("This object does not support set x!");
        }else{
            if (this.isCenterBased) {
                SVGGExtension.setX(this.svgGroup, v  - this.getVirtualRegion().x);
            } else {
                SVGGExtension.setX(this.svgGroup, v);
            }    
        }

    }
    public set virtualX(v: number) {
        if(this.coordinateType == CoodinateType.Group00){
            throw Error("This object does not support set x!");
        }else{
            if (this.isCenterBased) {
                SVGGExtension.setX(this.svgGroup,v - this.getVirtualRegion().y );
            } else {
                SVGGExtension.setX(this.svgGroup, v);
            }    
        }

    }

    public set y(v: number) {
        if(this.coordinateType == CoodinateType.Group00){
            throw Error("This object does not support set y!");
        }else{
            if (this.isCenterBased) {
                SVGGExtension.setY(this.svgGroup, v + (this.height / 2));
            } else {
                SVGGExtension.setY(this.svgGroup, v);
            }    
        }
    }
    public set virtualY(v: number) {
        if(this.coordinateType == CoodinateType.Group00){
            throw Error("This object does not support set y!");
        }else{
            if (this.isCenterBased) {
                SVGGExtension.setY(this.svgGroup, v + (this.getVirtualHeight() / 2));
            } else {
                SVGGExtension.setY(this.svgGroup, v);
            }    
        }

    }

    /**
    頂点の幅を返します。
    */
    get width(): number {
        if (this.hasSize) {
            return <number>ElementExtension.gtGetAttributeNumber(this.svgGroup, "data-width", 0);
        } else {
            return 0;
        }
    }
    set width(value: number) {
        if (this.hasSize) {
            if (this.width != value && value != null) this.svgGroup.setAttribute("data-width", value.toString());
        }
    }
    /**
    頂点の高さを返します。
    */
    get height(): number {
        if (this.hasSize) {
            return <number>ElementExtension.gtGetAttributeNumber(this.svgGroup, "data-height", 0);
        } else {
            return 0;
        }
    }
    set height(value: number) {
        if (this.hasSize) {
            if (this.height != value && value != null) this.svgGroup.setAttribute("data-height", value.toString());
        }
    }
    public get fixedX(): number | null {
        return ElementExtension.gtGetAttributeNumber(this.svgGroup, "data-fixedX", null);
    }
    public set fixedX(v: number | null) {
        if (v == null) {
            this.svgGroup.removeAttribute("data-fixedX");
        } else {
            this.svgGroup.setAttribute("data-fixedX", v.toString());
        }
    }
    public get fixedY(): number | null {
        return ElementExtension.gtGetAttributeNumber(this.svgGroup, "data-fixedY", null);
    }
    public set fixedY(v: number | null) {
        if (v == null) {
            this.svgGroup.removeAttribute("data-fixedY");
        } else {
            this.svgGroup.setAttribute("data-fixedY", v.toString());
        }
    }
    public get isCenterBased() {
        return true;
    }
    public get positionType() : PositionType {
        const str = this.svgGroup.getAttribute("data-position-type");
        if(str !== undefined){
            if(str == PositionType.Center){
                return PositionType.Center;
            }else{
                return PositionType.UpperLeft;
            }
        }else{
            return PositionType.Center;
        }
    }
    public set positionType(value : PositionType) {
        this.svgGroup.setAttribute("data-position-type", value);
    }


    public get isProhibitionOutOfRange(): boolean {
        const p = ElementExtension.getPropertyStyleValueWithDefault(this.svgGroup, StyleNames.prohibitionOutOfRange, "true");
        return p == "true";
    }
    public set isProhibitionOutOfRange(v: boolean) {
        ElementExtension.setPropertyStyleValue(this.svgGroup,StyleNames.prohibitionOutOfRange, v.toString());

    }
    public moveInCanvas() {
        this.x = (this.width / 2) + 10;
        this.y = (this.height / 2) + 10;
    }



    public get type(): ShapeObjectType {
        return ShapeObjectType.Object;
    }
    protected createSurface(svgbox: SVGElement, option: GOptions.GObjectAttributes = {}): void {

    }

    protected setClassNameOfSVGGroup() {

    }
    private observerFunc: MutationCallback = (x: MutationRecord[]) => {
        this.observerFunction(x);
    };

    protected observerFunction(x: MutationRecord[]) {
        //throw Error("error1");

        let b = false;
        if (!this.isLocated) return;

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

        if (b) this.update();

    }


    /**
     * この頂点を廃棄します。廃棄された頂点はグラフから取り除かれます。
     */
    public dispose() {
    }
    /**
    この頂点が廃棄されていたらTrueを返します。
    */
    get isDisposed(): boolean {
        return false;
        //return this.graph == null;
    }
    /**
    このVertexのObjectIDを返します。
    */
    public get objectID(): string {
        const r = this.svgGroup.getAttribute(AttributeNames.objectIDName);
        if (r == null) {
            throw new Error();
        } else {
            return r;
        }
    }

    public createVBACode(id: number): string[] {
        const lines: string[] = [];
        lines.push(`Sub create${id}(createdSlide As slide)`);
        lines.push(`End Sub`);
        return lines;
    }
    public get VBAObjectNum(): number {
        return 1;
    }

    protected dispatchObjectCreatedEvent(): void {
        var event = document.createEvent("HTMLEvents");
        event.initEvent(AttributeNames.objectCreatedEventName, true, true);
        this.svgGroup.dispatchEvent(event);

    }
    protected _isUpdating: boolean = false;
    public update() {
        if (!this._isInitialized) {
            //throw new Error("This instance have not been initialized!");
        } else {
            this._isUpdating = true;
            this._isUpdating = false;
        }
    }
    protected updateAttributes = ["style", "transform", "data-speaker-x", "data-speaker-y",
        "data-width", "data-height", "data-arrow-neck-width", "data-arrow-neck-height",
        "data-arrow-head-width", "data-arrow-head-height"]
    protected dispatchConnectPositionChangedEvent(): void {
        if (this.svgSurface != null) {
            var event = document.createEvent("HTMLEvents");
            event.initEvent(AttributeNames.connectPositionChangedEventName, false, true)
            this.svgGroup.dispatchEvent(event);
        }
    }
    public get hasSize(): boolean {
        return false;
    }

    private static objectDic: { [key: string]: GObject; } = {};
    public static getObjectFromObjectID(id: string | SVGElement): GObject | null {
        if (id instanceof SVGElement) {
            if (id.hasAttribute(AttributeNames.objectIDName)) {
                const _id = id.getAttribute(AttributeNames.objectIDName)!;
                return GObject.getObjectFromObjectID(_id);
            } else {
                return null;
            }
        } else {
            if (id in this.objectDic) {
                return this.objectDic[id];
            } else {
                return null;
            }
        }
    }
    public static setObjectFromObjectID(obj: GObject) {
        const id = obj.objectID;
        this.objectDic[id] = obj;
    }
    public static getObjectFromID(id: string): GObject | null {
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
    public getRegion(): Rectangle {
        let rect = new Rectangle();
        rect.x = this.x;
        rect.y = this.y;
        rect.width = this.width;
        rect.height = this.height;
        return rect;
    }
    public getVirtualWidth() : number{
        return 0;
    }
    public getVirtualHeight() : number{
        return 0;
    }

    public getVirtualRegion(): Rectangle {
        let rect = new Rectangle();
        rect.x = this.x;
        rect.y = this.y;
        rect.width = this.width;
        rect.height = this.height;
        return rect;
    }

    public movable(): void {

        DraggableObjectFunctions.appendDragFunctionsToDocument();
        DraggableObjectFunctions.draggable(this.svgSurface!, this.svgGroup);
    }
}
//}