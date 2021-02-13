//namespace GraphTableSVG {
import { Rectangle } from "../common/vline";
import { GGraph } from "../objects/g_graph"
import { GTable } from "../objects/g_table"
import { GObject } from "../objects/g_object"
import { ShapeObjectType } from "../common/enums";
//    import {VBAObjectType} from "./svg_to_vba"

export type VBAObjectType = SVGPathElement | SVGTextElement | GObject | SVGRectElement | SVGCircleElement | SVGEllipseElement;

function collectVBAObjectTypesSub(svg: SVGElement, output: VBAObjectType[]): void {
    const dataVBA = svg.getAttribute("data-vba");
    if (dataVBA == "false") {
        return;
    }

    if (svg instanceof SVGGElement) {
        const dataType = svg.getAttribute("data-type");

        if (dataType == null) {
            for (let i = 0; i < svg.children.length; i++) {
                const item = svg.children.item(i);
                if (item != null && item instanceof SVGElement) {
                    collectVBAObjectTypesSub(item, output);
                }
            }
        } else {
            const type = ShapeObjectType.toShapeObjectType(dataType);
            if (type != null) {
                const gObject: VBAObjectType = (<any>svg).operator;
                output.push(gObject);
            }
        }

    } else if (isVBAObject(svg)) {
        output.push(<VBAObjectType>svg);
    } else {

    }
}
export function countVBSObjectNum(items: VBAObjectType[] | VBAObjectType): number {
    //const id = 0;
    if (items instanceof Array) {
        let c = 0;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item instanceof GTable) {
                c++;
            } else if (item instanceof GGraph) {
                c += item.VBAObjectNum;
            } else if (item instanceof GObject) {
                c += item.VBAObjectNum;
            } else{
                c ++;
            }
        }
        return c;
    } else {
        return countVBSObjectNum([items]);
    }
}

export function collectVBAObjectTypes(svgsvg: SVGSVGElement): VBAObjectType[] {
    const r: VBAObjectType[] = new Array();
    for (let i = 0; i < svgsvg.children.length; i++) {
        const item = svgsvg.children.item(i);
        if (item != null && item instanceof SVGElement) {
            collectVBAObjectTypesSub(item, r);
        }
    }
    return r;
}


export function isVBAObject(svg: SVGElement): boolean {
    if (svg instanceof SVGGElement) {
        const dataType = svg.getAttribute("data-type");

        if (dataType == null) {
            return false;
        } else {
            const type = ShapeObjectType.toShapeObjectType(dataType);
            if (type != null) {
                return true;
            }
        }

    } else if (svg instanceof SVGPathElement || svg instanceof SVGTextElement || svg instanceof SVGRectElement || svg instanceof SVGCircleElement || svg instanceof SVGEllipseElement) {
        return true;

    }
    return false;
}
//export namespace VBAObject{
/**
 * 領域を取得します。
 * @param items 
 */
export function getRegion(items: VBAObjectType[]): Rectangle {
    const rects = items.map((v) => {
        if (v instanceof GObject) {
            return v.getRegion();
        } else if (v instanceof SVGPathElement || v instanceof SVGTextElement) {
            const rect = v.getBBox();
            return new Rectangle(rect.x, rect.y, rect.width, rect.height);
        } else {
            return new Rectangle();
        }
    });
    if (rects.length > 0) {
        return Rectangle.merge(rects);
    } else {
        return new Rectangle();
    }
}
/**
 * グラフや表を消去します。
 * @param svg 
 * @param items 
 */
export function clearGraphTables(svg: SVGElement, items: (GGraph | GTable)[]) {
    for (let i = 0; i < items.length; i++) {
        var item = items[i];
        if (item instanceof GGraph) {
            item.removeGraph(svg);
        } else if (item instanceof GTable) {
            item.removeTable(svg);
        }
    }

}

    //}
