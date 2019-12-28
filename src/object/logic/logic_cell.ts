import * as SVGTextBox from "../../basic/interface/svg_textbox"
import {defaultCellClass} from "../../basic/common/attribute_names"

//import { Cell } from "../object/table_helpers/cell"
import * as GOptions from "../g_options"
import { LogicTSpan, LogicText } from "./logic_text";

export class LogicCell {

    public text: LogicText = new LogicText();
    //public textClass?: string | GOptions.textClassCSS;
    //public textStyle?: string | GOptions.textClassCSS;

    public cellClass?: string | GOptions.GTextBoxCSS = defaultCellClass;
    public cellStyle?: string | GOptions.GTextBoxCSS;
    


    public backgroundClass?: string | GOptions.backgroundCSS;
    public topBorderClass: string | null = null;
    public leftBorderClass: string | null = null;
    public rightBorderClass: string | null = null;
    public bottomBorderClass: string | null = null;
    //public svgText: SVGTextElement | null = null;
    public connectedColumnCount: number = 1;
    public connectedRowCount: number = 1;
    public tTexts: HTMLElement[] | null = null;
    

    public item: any;

    //public isLatexMode: boolean = false;
    constructor() {
    }
    
    public copy(cell : LogicCell){
        this.text = cell.text;
        this.cellClass = cell.cellClass;
        this.cellStyle = cell.cellStyle;
        this.backgroundClass = cell.backgroundClass;
        this.topBorderClass = cell.topBorderClass;
        this.leftBorderClass = cell.topBorderClass;
        this.rightBorderClass = cell.rightBorderClass;
        this.connectedColumnCount = cell.connectedColumnCount;
        this.connectedRowCount = cell.connectedRowCount;
        this.item = cell.item;
    }
    
    public set(text: LogicText | undefined = undefined, isLatexMode: boolean = false, cellClass: string | undefined = undefined, backgroundClass: string | undefined = undefined,
        topBorderClass: string | undefined = undefined, leftBorderClass: string | undefined = undefined, rightBorderClass: string | undefined = undefined, bottomBorderClass: string | undefined = undefined) {
        if (text !== undefined) this.text = text;
        if (cellClass !== undefined) this.cellClass = cellClass;
        //if (textClass !== undefined) this.textClass = textClass;
        if (backgroundClass !== undefined) this.backgroundClass = backgroundClass;
        if (topBorderClass !== undefined) this.topBorderClass = topBorderClass;
        if (leftBorderClass !== undefined) this.leftBorderClass = leftBorderClass;
        if (rightBorderClass !== undefined) this.rightBorderClass = rightBorderClass;
        if (bottomBorderClass !== undefined) this.bottomBorderClass = bottomBorderClass;
        //this.isLatexMode = isLatexMode;
    }
    public createTextElement(svgText: SVGTextElement) {
        if (this.tTexts != null) {
            SVGTextBox.constructSVGTextByHTMLElements(svgText, this.tTexts, true);
        } else if (this.text instanceof LogicText) {
            this.text.setTextElement(svgText);
        }
    }
    /*
    public set(text: string | null = null, isLatexMode: boolean = false, cellClass: string | null = null, backgroundClass: string | null = null, textClass: string | null = null
        , topBorderClass: string | null = null, leftBorderClass: string | null = null, rightBorderClass: string | null = null, bottomBorderClass: string | null = null) {
        if (text != null) this.text = text;
        if (cellClass != null) this.cellClass = cellClass;
        if (textClass != null) this.textClass = textClass;
        if (backgroundClass != null) this.backgroundClass = backgroundClass;
        if (topBorderClass != null) this.topBorderClass = topBorderClass;
        if (leftBorderClass != null) this.leftBorderClass = leftBorderClass;
        if (rightBorderClass != null) this.rightBorderClass = rightBorderClass;
        if (bottomBorderClass != null) this.bottomBorderClass = bottomBorderClass;
        this.isLatexMode = isLatexMode;
    }
    */
    /*
    public checkCell(): boolean {
        if (this.masterCell != null) {

        } else {

        }
    }
    */
}