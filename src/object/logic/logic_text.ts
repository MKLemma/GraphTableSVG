import { textClassCSS } from "../g_options";
import * as CSS from "../../basic/html/css";


export class LogicTSpan{
    public textContent : string = "";
    public class? : string | textClassCSS
    public style? : string | textClassCSS
    public isLatexMode : boolean = false;

    public createTSpan() : SVGTSpanElement {

        const tspan: SVGTSpanElement = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
        tspan.textContent = this.textContent;
        CSS.setCSSClass(tspan, this.class);
        CSS.setCSSStyle(tspan, this.style);
        return tspan;
    }
}
export class LogicText{
    public textContent : string | LogicTSpan[] = "";
    public class? : string | textClassCSS
    public style? : string | textClassCSS
    public isLatexMode : boolean = false;

    constructor(_text : string | LogicTSpan[] | null = null, _class? : string | textClassCSS, _style? : string | textClassCSS ){
        if(_text == null){
            this.textContent = "";
        }else{
            this.textContent = _text;
        }
        this.class = _class;
        this.style = _style;
    }

    public setTextElement(svgText: SVGTextElement) {
        CSS.setCSSClass(svgText, this.class);
        CSS.setCSSStyle(svgText, this.style);

        if(typeof this.textContent == "string"){
            svgText.setTextContent(this.textContent, this.isLatexMode);
        }else{
            svgText.textContent = "";
            this.textContent.map((v) => v.createTSpan()).forEach((v)=>{
                svgText.appendChild(v);
            })
        }
        
    }
}