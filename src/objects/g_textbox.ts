/// <reference path="g_object.ts"/>
import * as SVG from "../interfaces/svg"
import * as CSS from "../html/css"
import { VBATranslateFunctions } from "../common/vba_functions"

import * as AttributeNames from "../common/attribute_names"
import * as StyleNames from "../common/style_names"
import * as DefaultClassNames from "../common/default_class_names"
import { ShapeObjectType, msoDashStyle, HorizontalAnchor, VerticalAnchor } from "../common/enums";
import { Rectangle, PositionType } from "../common/vline"
import * as HTMLFunctions from "../html/html_functions"
import * as SVGTextBox from "../interfaces/svg_textbox"
import { GObject } from "./g_object"
import { GVertex } from "./g_vertex"

import * as GOptions from "./g_options"
import { AutoSizeShapeToFitText } from "../common/enums"
import { setComputedDashArray } from "../html/enum_extension";

import * as ElementExtension from "../interfaces/element_extension"
import * as SVGElementExtension from "../interfaces/svg_element_extension"
import * as SVGTextExtension from "../interfaces/svg_text_extension"
import { UndefinedError } from "../common/exceptions"

//namespace GraphTableSVG {




export class GTextBox extends GVertex {
    private _svgText: SVGTextElement;
    //private isFixTextSize: boolean = false;
    protected surfaceAttributes: string[] = [];
    private _textObserver: MutationObserver;
    private static updateTextAttributes = ["style"]

    //protected _isSpecialTextBox: boolean = false;

    protected _minimumWidth: number = 10;
    protected _minimumHeight: number = 10;

    public constructor(svgbox: SVGElement | string) {
        super(svgbox)

        this._svgText = GTextBox.createSVGText(undefined, undefined);
        this.svgGroup.appendChild(this.svgText);
        this._textObserver = new MutationObserver(this.textObserverFunc);
        const option2: MutationObserverInit = { childList: true, attributes: true, subtree: true };
        this._textObserver.observe(this.svgText, option2);


        if (this.type == ShapeObjectType.Object) this.firstFunctionAfterInitialized();
        this.svgText!.onclick = (e) => {
            const textRect = this.getVirtualRegion();
            console.log(this.ExtraRegion)
            //console.log(this.textRegion)
            console.log(`${this.leftExtraLength}/${this.rightExtraLength}/${this.topExtraLength}/${this.bottomExtraLength}`)

            this.svgText!.style.border = "black"

        }
    }
    protected setBasicOption(option: GOptions.GTextBoxAttributes) {
        super.setBasicOption(option)
        const textClass = CSS.createCSSClass(option.textClass);
        const styleClass = CSS.createCSSClass(option.textStyle);
        GOptions.setClassAndStyle(this.svgText, textClass, styleClass);

        if (typeof option.text == "string") {
            SVGTextExtension.setTextContent(this.svgText, option.text);
        } else if (Array.isArray(option.text)) {
            SVGTextBox.constructSVGTextByHTMLElements(this.svgText, option.text, false);
            SVGTextBox.sortText(this.svgText, this.horizontalAnchor, false);


        } else {

        }

        const b = ElementExtension.getPropertyStyleValue(this.svgGroup, StyleNames.autoSizeShapeToFitText);
        if (b === undefined && typeof (option.style) == "object") {
            const style: GOptions.GTextBoxCSS = option.style;
            if (style.autoSizeShapeToFitText !== undefined) {
                this.isAutoSizeShapeToFitText = style.autoSizeShapeToFitText;
            }
        }

    }

    public setOption(option: GOptions.GTextBoxAttributes) {
        super.setOption(option);
        //this.setBasicOption(option);
    }
    initializeOption(option: GOptions.GObjectAttributes): GOptions.GObjectAttributes {
        let b = false;
        if (option.width !== undefined || option.height !== undefined) {
            b = true;
        }

        const _option: GOptions.GTextBoxAttributes = <GOptions.GTextBoxAttributes>super.initializeOption(option);
        /*
        if(_option.class === undefined){
            _option.class = { isAutoSizeShapeToFitText : true, verticalAnchor : VerticalAnchor.Middle, horizontalAnchor : HorizontalAnchor.Center }
        }
        if(typeof(_option.class) == "object" ){
            if(_option.class.isAutoSizeShapeToFitText === undefined) _option.class.isAutoSizeShapeToFitText = true;
            if(_option.class.verticalAnchor === undefined) _option.class.verticalAnchor = VerticalAnchor.Middle;
            if(_option.class.horizontalAnchor === undefined) _option.class.horizontalAnchor = HorizontalAnchor.Center;
        } 
        */
        //if (b && _option.isAutoSizeShapeToFitText === undefined) _option.isAutoSizeShapeToFitText = false;
        //if (_option.isAutoSizeShapeToFitText === undefined) _option.isAutoSizeShapeToFitText = true;
        //if (_option.verticalAnchor === undefined) _option.verticalAnchor = VerticalAnchor.Middle;
        //if (_option.horizontalAnchor === undefined) _option.horizontalAnchor = HorizontalAnchor.Center;
        if (_option.textClass === undefined) _option.textClass = DefaultClassNames.defaultTextClass;


        return _option;
    }
    /**
    * SVGTextElementを生成します。
    * @param className 生成するSVG要素のクラス属性名
    * @returns 生成されたSVGTextElement
    */
    private static createSVGText(className: string | undefined | null, style: string | undefined): SVGTextElement {
        const _svgText: SVGTextElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');

        _svgText.setAttribute(AttributeNames.objectIDName, (SVG.getNewID()).toString());
        if (style !== undefined) {
            _svgText.setAttribute("style", style);
        }

        //_svgText.style.textAnchor = "middle";
        if(className === undefined){
            _svgText.setAttribute("class", DefaultClassNames.defaultTextClass);
        }
        else if (className == null) {

            /*
            if (_svgText.style.fill == null || _svgText.style.fill == "") _svgText.style.fill = "black";
            if (_svgText.style.fontSize == null || _svgText.style.fontSize == "") _svgText.style.fontSize = "14px";
            if (_svgText.style.fontWeight == null || _svgText.style.fontWeight == "") _svgText.style.fontWeight = "bold";
            if (_svgText.style.fontFamily == null || _svgText.style.fontFamily == "") _svgText.style.fontFamily = 'Times New Roman';
            if (_svgText.style.getPropertyValue(StyleNames.marginLeft) == "") SVGTextExtension.setMarginLeft(_svgText, 10);
            if (_svgText.style.getPropertyValue(StyleNames.marginRight) == "") SVGTextExtension.setMarginRight(_svgText, 10);
            if (_svgText.style.getPropertyValue(StyleNames.marginTop) == "") SVGTextExtension.setMarginTop(_svgText, 10);
            if (_svgText.style.getPropertyValue(StyleNames.marginBottom) == "") SVGTextExtension.setMarginBottom(_svgText, 10);
            */
        } else {
            _svgText.setAttribute("class", className);

            //_svgText.className = className;
        }
        return _svgText;
    }

    static constructAttributes(e: Element,
        removeAttributes: boolean = false, output: GOptions.GTextBoxAttributes = {}): GOptions.GTextBoxAttributes {

        GObject.constructAttributes(e, removeAttributes, output);
        //output.isAutoSizeShapeToFitText = e.gtGetStyleBooleanWithUndefined(AttributeNames.Style.autoSizeShapeToFitText);
        const textChild = HTMLFunctions.getChildByNodeName(e, "text");
        output.textClass = ElementExtension.gtGetAttributeStringWithUndefined(e, "text:class");
        output.textStyle = ElementExtension.gtGetAttributeStringWithUndefined(e, "text:style");

        if (e.hasAttribute("text")) {
            output.text = <string>e.getAttribute("text");
        } else if (e.children.length > 0) {
            const tNodes = HTMLFunctions.getTNodes(e);
            if (tNodes != null) {
                tNodes.forEach((v) => v.remove())
                output.text = tNodes;
            }
        }
        else if (textChild != null) {

        } else if (e.innerHTML.length > 0) {
            output.text = e.innerHTML;
        }


        if (removeAttributes) {
            e.removeAttribute("text");
            e.removeAttribute("text:class");
            e.removeAttribute("text:style");

            (<any>e).style.removeProperty(StyleNames.autoSizeShapeToFitText);
        }
        return output;
    }
    public get svgText(): SVGTextElement {
        return this._svgText;
    }




    protected textObserverFunc: MutationCallback = (x: MutationRecord[]) => {
        if (!this.isLocated) return;
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
        if (b) this.update();

    };







    get horizontalAnchor(): HorizontalAnchor {
        const b = ElementExtension.getPropertyStyleValueWithDefault(this.svgGroup, StyleNames.HorizontalAnchor, "center");
        return HorizontalAnchor.toHorizontalAnchor(b);
    }
    /**
    テキストの水平方向の配置設定を設定します。
    */
    set horizontalAnchor(value: HorizontalAnchor) {
        if (this.horizontalAnchor != value) ElementExtension.setPropertyStyleValue(this.svgGroup, StyleNames.HorizontalAnchor, value);
    }
    /**
    テキストの垂直方向の配置設定を返します。
    */
    get verticalAnchor(): VerticalAnchor {
        const b = ElementExtension.getPropertyStyleValueWithDefault(this.svgGroup, StyleNames.VerticalAnchor, "middle");
        return VerticalAnchor.toVerticalAnchor(b);
    }
    /**
    テキストの垂直方向の配置設定を設定します。
    */
    set verticalAnchor(value: VerticalAnchor) {
        if (this.verticalAnchor != value) ElementExtension.setPropertyStyleValue(this.svgGroup, StyleNames.VerticalAnchor, value);
    }

    /**
     * このVertexがテキストに合わせてサイズを変える場合Trueを返します。
     */
    get isAutoSizeShapeToFitText(): AutoSizeShapeToFitText {
        const b = ElementExtension.getPropertyStyleValueWithDefault(this.svgGroup, StyleNames.autoSizeShapeToFitText, "semi-auto");
        if (b == "auto") {
            return "auto";
        } else if (b == "semi-auto") {
            return "semi-auto";
        } else {
            return "none";
        }
        /*
        if (b == undefined) {
            return false;
        } else {
            return b;
        }
        */
    }
    set isAutoSizeShapeToFitText(value: AutoSizeShapeToFitText) {
        ElementExtension.setPropertyStyleValue(this.svgGroup, StyleNames.autoSizeShapeToFitText, value);
        //this.svgGroup.setPropertyStyleValue(AttributeNames.Style.autoSizeShapeToFitText, value ? "true" : "false");
    }
    protected updateStyle(){
        this.hasConnectedObserverFunction = false;
        const dashStyle = this.msoDashStyle;
        if (dashStyle != null && this.svgSurface != null) {
            setComputedDashArray(this.svgSurface);
        }
        //this._observer.observe(this.svgGroup, this._observerOption);
        this.hasConnectedObserverFunction = true;
    }
    protected updateSurfaceSize(){
        const region = this.getVirtualRegion();
        this.width = region.width;
        this.height = region.height;        
    }
    protected updateTextLocation(){
        //const textRect = this.textLocationRegion;
        //console.log(this.verticalAnchor + "/" + this.horizontalAnchor)
        SVGTextExtension.gtSetXY(this.svgText, this.textLocationRegion, this.verticalAnchor, this.horizontalAnchor, this.isAutoSizeShapeToFitText);
    }
    protected updateSurfaceLocation(){

    }
    public update() {
        super.update();
        this._isUpdating = true;
        if (!this.isShow) return;
        //this._observer.disconnect();
        this.hasConnectedObserverFunction = false;

        if (this.svgText == null) {
            throw new TypeError("svgText is null");
        }
        this.updateStyle();
        this.updateSurfaceSize();
        this.updateTextLocation();
        this.updateSurfaceLocation();
        this._isUpdating = false;
        //this._observer.observe(this.svgGroup, this.groupObserverOption);
        this.hasConnectedObserverFunction = true;



        //SVGTextBox.sortText(this.svgText, this.horizontalAnchor, false);
        /*
        if (this.isAutoSizeShapeToFitText == AutoSizeShapeToFitText.Auto) {
            this.updateToFitText(true);
            this.updateToFitText(false);

        } else if (this.isAutoSizeShapeToFitText == AutoSizeShapeToFitText.SemiAuto) {
            const textRect = SVGTextExtension.getSize(this.svgText);
            const width = textRect.width + this.marginPaddingLeft + this.marginPaddingRight;
            const height = textRect.height + this.marginPaddingTop + this.marginPaddingBottom;

            if (this.width < width) {
                this.updateToFitText(true);
            }
            if (this.height < height) {
                this.updateToFitText(false);
            }
            //this.innerRectangle
        }
        */
        //this.updateSurface();

        /*
        if (this.fixedX != null && Math.abs(this.x - this.fixedX) > 20) {
            this.x = this.fixedX;
        }
        if (this.fixedY != null && Math.abs(this.y - this.fixedY) > 20) {
            this.y = this.fixedY;
        }
        */

        /*
        if(this.fixedY != null){
            this.y = this.fixedY;
        }
        */

        //if (!this._isSpecialTextBox) {

        // }

        //Graph.setXY(this.svgText, this.innerRectangle, vAnchor, hAnchor);

    }
    /*
    protected updateToFitText(isWidth: boolean) {
        //this.isFixTextSize = true;
        //const box = this.svgText.getBBox();
        const textRect = SVGTextExtension.getSize(this.svgText);

        const textWidth = textRect.width < this._minimumWidth ? this._minimumWidth : textRect.width;
        const textHeight = textRect.height < this._minimumHeight ? this._minimumHeight : textRect.height;

        if (isWidth) {
            this.width = textWidth + this.marginPaddingLeft + this.marginPaddingRight;
        } else {
            this.height = textHeight + this.marginPaddingTop + this.marginPaddingBottom;
        }
    }
    */
    get marginPaddingTop() {
        return SVGTextExtension.getMarginTop(this.svgText) + SVGElementExtension.getPaddingTop(this.svgGroup);
    }
    get marginPaddingLeft() {
        return SVGTextExtension.getMarginLeft(this.svgText) + SVGElementExtension.getPaddingLeft(this.svgGroup);
    }
    get marginPaddingRight() {
        return SVGTextExtension.getMarginRight(this.svgText) + SVGElementExtension.getPaddingRight(this.svgGroup);
    }
    get marginPaddingBottom() {
        return SVGTextExtension.getMarginBottom(this.svgText) + SVGElementExtension.getPaddingBottom(this.svgGroup);
    }

    get paddingTop(): number {
        return SVGElementExtension.getPaddingTop(this.svgGroup);
    }
    set paddingTop(value: number) {
        SVGElementExtension.setPaddingTop(this.svgGroup, value);
    }
    get paddingLeft(): number {
        return SVGElementExtension.getPaddingLeft(this.svgGroup);
    }
    set paddingLeft(value: number) {
        SVGElementExtension.setPaddingLeft(this.svgGroup, value);
    }
    get paddingRight(): number {
        return SVGElementExtension.getPaddingRight(this.svgGroup);
    }
    set paddingRight(value: number) {
        SVGElementExtension.setPaddingRight(this.svgGroup, value);
    }
    get paddingBottom(): number {
        return SVGElementExtension.getPaddingBottom(this.svgGroup);
    }
    set paddingBottom(value: number) {
        SVGElementExtension.setPaddingBottom(this.svgGroup, value);
    }

    get marginTop(): number {
        return SVGTextExtension.getMarginTop(this.svgText);
    }
    set marginTop(value: number) {
        SVGTextExtension.setMarginTop(this.svgText, value);
    }

    get marginLeft(): number {
        return SVGTextExtension.getMarginLeft(this.svgText);
    }
    set marginLeft(value: number) {
        SVGTextExtension.setMarginLeft(this.svgText, value);
    }
    get marginRight(): number {
        return SVGTextExtension.getMarginRight(this.svgText);
    }
    set marginRight(value: number) {
        SVGTextExtension.setMarginRight(this.svgText, value);
    }
    get marginBottom(): number {
        return SVGTextExtension.getMarginBottom(this.svgText);
    }
    set marginBottom(value: number) {
        SVGTextExtension.setMarginBottom(this.svgText, value);
    }




    /*
    private get innerRectangleWithoutMargin(): Rectangle {
        const rect = this.innerRectangle;
        rect.width = rect.width - this.marginPaddingLeft - this.marginPaddingRight;
        rect.height = rect.height - this.marginPaddingTop - this.marginPaddingBottom;
        rect.x = rect.x + this.marginPaddingLeft;
        rect.y = rect.y + this.marginPaddingTop;
        return rect;
    }
    */

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
    public get svgElements(): SVGElement[] {
        const r: SVGElement[] = [];
        r.push(this.svgGroup);
        r.push(this.svgText);
        return r;
    }
    public hasDescendant(obj: SVGElement): boolean {
        const ids = this.svgElements.map((v) => v.getAttribute(AttributeNames.objectIDName)).filter((v) => v != null);
        const id = obj.getAttribute(AttributeNames.objectIDName);
        return ids.some((v) => v == id);
    }

    public get hasSize(): boolean {
        return true;
    }

    public get msoDashStyle(): msoDashStyle | null {
        if (this.svgSurface != null) {
            const dashStyle = ElementExtension.getPropertyStyleValue(this.svgSurface, StyleNames.msoDashStyleName);
            if (dashStyle != null) {
                return msoDashStyle.toMSODashStyle(dashStyle);
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
    public set msoDashStyle(value: msoDashStyle | null) {
        if (this.svgSurface != null) {
            if (msoDashStyle == null) {
                this.svgSurface.style.removeProperty(StyleNames.msoDashStyleName);
            } else {
                ElementExtension.setPropertyStyleValue(this.svgSurface, StyleNames.msoDashStyleName, value);
            }
        }
    }
    public createVBACode(id: number): string[] {
        const lines: string[] = [];

        const backColor = VBATranslateFunctions.colorToVBA(ElementExtension.getPropertyStyleValueWithDefault(this.svgSurface!, "fill", "gray"));
        const visible = ElementExtension.getPropertyStyleValueWithDefault(this.svgSurface!, "visibility", "visible") == "visible" ? "msoTrue" : "msoFalse";

        const vAnchor = VBATranslateFunctions.ToVerticalAnchor(this.verticalAnchor);
        const hAnchor = VBATranslateFunctions.ToHorizontalAnchor(this.horizontalAnchor);


        lines.push(`Sub create${id}(createdSlide As slide)`);
        lines.push(` Dim shapes_ As Shapes : Set shapes_ = createdSlide.Shapes`);
        lines.push(` Dim obj As Shape`);
        lines.push(` Set obj = shapes_.AddShape(${this.shape}, ${this.x}, ${this.y}, ${this.width}, ${this.height})`);
        lines.push(` Call EditTextFrame(obj.TextFrame, ${this.marginPaddingTop}, ${this.marginPaddingBottom}, ${this.marginPaddingLeft}, ${this.marginPaddingRight}, false, ppAutoSizeNone)`);
        lines.push(` Call EditAnchor(obj.TextFrame, ${vAnchor}, ${hAnchor})`);

        VBATranslateFunctions.TranslateSVGTextElement2(this.svgText, `obj.TextFrame.TextRange`).forEach((v) => lines.push(v));
        lines.push(this.getVBAEditLine());

        lines.push(` Call EditCallOut(obj, "${this.objectID}", ${visible}, ${backColor})`)
        this.VBAAdjustments.forEach((v, i) => {
            lines.push(` obj.Adjustments.Item(${i + 1}) = ${v}`);
        })
        lines.push(`End Sub`);

        return lines;
    }

    public getVirtualWidth(): number {
        return this.getVirtualRegion().width;
    }
    public getVirtualHeight(): number {
        return this.getVirtualRegion().height;
    }
    
    get ExtraRegion(): Rectangle {
        const textRect = SVGTextExtension.getVirtualRegion(this.svgText);
        const w = textRect.width + this.leftExtraLength + this.rightExtraLength;
        const h = textRect.height + this.topExtraLength + this.bottomExtraLength;
        const x = -w/2;
        const y = -h/2;
        return new Rectangle(x, y, w, h);
    }
    get textLocationRegion(): Rectangle {
        const rect = this.getVirtualRegion();
        rect.x += this.leftExtraLength;
        rect.y += this.topExtraLength;
        rect.width -= this.leftExtraLength + this.rightExtraLength;
        rect.height -= this.topExtraLength + this.bottomExtraLength;
        return rect;
        /*
        const rect = this.ExtraRegion;
        const w = rect.width - this.leftExtraLength - this.rightExtraLength;
        const h = rect.height - this.topExtraLength - this.bottomExtraLength;
        const x =rect.x + this.leftExtraLength;
        const y = rect.y + this.topExtraLength;
        return new Rectangle(x, y, w, h);
        */
    }

    public getVirtualRegion(): Rectangle {
        if(this.svgText === undefined){
            throw new UndefinedError();
            //return new Rectangle(this.cx, this.cy, 0, 0);
        }
        const marginRect = this.ExtraRegion;

        if (this.isAutoSizeShapeToFitText == AutoSizeShapeToFitText.Auto) {
            return marginRect;
        } else if (this.isAutoSizeShapeToFitText == AutoSizeShapeToFitText.SemiAuto) {
            let [x, y] = [0,0]
            let [newWidth, newHeight] = [0,0]

            if(this.width < marginRect.width){
                newWidth = marginRect.width;
                x = marginRect.x;
            }else{
                const surface_x = this.svgSurface != null ? SVGElementExtension.getX(this.svgSurface) : 0;
                newWidth = this.width;
                x = -this.width/2;
            }
            if(this.height < marginRect.height){
                
                newHeight =marginRect.height;
                y = marginRect.y;
            }else{
                const surface_y = this.svgSurface != null ? SVGElementExtension.getY(this.svgSurface) : 0;
                newHeight = this.height;
                y = -this.height/2;
            }
            //const newWidth = this.width < width ? width : this.width;
            //const newHeigth = this.height < height ? height : this.height;
            return new Rectangle(x, y, newWidth, newHeight);
        } else {
            return new Rectangle(- (this.width / 2), - (this.height / 2), this.width, this.height);
            //return new Rectangle(this.x, this.y, this.width, this.height);
        }
    }

    get topExtraLength(): number {
        return this.marginPaddingTop;
    }
    get leftExtraLength(): number {
        return this.marginPaddingLeft;
    }
    get rightExtraLength(): number {
        return this.marginPaddingRight;
    }
    get bottomExtraLength(): number {
        return this.marginPaddingBottom;
    }
    /*
    public get upperHeight() : number{
        return this.topExtraLength - this.textRegion.y;
    }
    public get leftWidth() : number{
        return this.leftExtraLength - this.textRegion.x;
    }
    */

    

}


//}