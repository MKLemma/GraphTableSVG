﻿interface SVGGElement {
    getX(): number;
    setX(value: number): void;
    getY(): number;
    setY(value: number): void;
}
SVGGElement.prototype.getX = function () {
    var p: SVGGElement = this;
    if (p.transform.baseVal.numberOfItems == 0) {
        p.setAttribute('transform', "translate(0,0)");
    }
    return p.transform.baseVal.getItem(0).matrix.e;
};
SVGGElement.prototype.setX = function (value: number) {
    var p: SVGGElement = this;
    if (p.transform.baseVal.numberOfItems == 0) {
        p.setAttribute('transform', "translate(0,0)");
    }

    return this.transform.baseVal.getItem(0).matrix.e = value;
};
SVGGElement.prototype.getY = function () {
    var p: SVGGElement = this;
    if (p.transform.baseVal.numberOfItems == 0) {
        p.setAttribute('transform', "translate(0,0)");
    }

    return this.transform.baseVal.getItem(0).matrix.f;
};
SVGGElement.prototype.setY = function (value: number) {
    var p: SVGGElement = this;
    if (p.transform.baseVal.numberOfItems == 0) {
        p.setAttribute('transform', "translate(0,0)");
    }

    return this.transform.baseVal.getItem(0).matrix.f = value;
};

interface CSSStyleDeclaration {
    //getHorizontalAnchor(): GraphTableSVG.HorizontalAnchor | null;
    //setHorizontalAnchor(value: GraphTableSVG.HorizontalAnchor | null): void;
    //getVerticalAnchor(): GraphTableSVG.VerticalAnchor | null;
    //setVerticalAnchor(value: GraphTableSVG.VerticalAnchor | null): void;
    tryGetPropertyValue(name: string): string | null;
}
CSSStyleDeclaration.prototype.tryGetPropertyValue = function (name: string) {
    var p: CSSStyleDeclaration = this;
    var r = p.getPropertyValue(name).trim();
    if (r.length == 0) {
        return null;
    } else {
        return r;
    }
}
interface SVGElement {
    getActiveStyle(): CSSStyleDeclaration;
    getPropertyStyleValue(name: string): string | null;
    setPropertyStyleValue(name: string, value: string | null) : void;
}
SVGElement.prototype.getActiveStyle = function () {
    var p: SVGElement = this;
    var r = p.getAttribute("class");
    if (r == null) {
        return p.style;
    } else {
        return getComputedStyle(p);
    }
}
SVGElement.prototype.getPropertyStyleValue = function(name: string): string | null {
    var item: SVGElement = this;

    var p = item.style.getPropertyValue(name).trim();
    if (p.length == 0) {
        var r = item.getAttribute("class");
        if (r == null) {
            return null;
        } else {
            var p2 = getComputedStyle(item).getPropertyValue(name).trim();
            if (p2.length == 0) {
                return null;
            } else {
                return p2;
            }
        }
    } else {
        return p;
    }
}
SVGElement.prototype.setPropertyStyleValue = function (name: string, value: string | null) {
    var item: SVGElement = this;

    item.style.setProperty(name, value);
}

interface SVGTextElement {
    getX(): number;
    setX(value: number): void;
    getY(): number;
    setY(value: number): void;
}
SVGTextElement.prototype.getX = function () {
    var p: SVGTextElement = this;
    if (p.x.baseVal.numberOfItems == 0) {
        p.setAttribute('x', "0");
    }
    return p.x.baseVal.getItem(0).value;
};
SVGTextElement.prototype.setX = function (value: number) {
    var p: SVGTextElement = this;
    if (p.x.baseVal.numberOfItems == 0) {
        p.setAttribute('x', "0");
    }
    return p.x.baseVal.getItem(0).value = value;
};
SVGTextElement.prototype.getY = function () {
    var p: SVGTextElement = this;
    if (p.y.baseVal.numberOfItems == 0) {
        p.setAttribute('y', "0");
    }
    return p.y.baseVal.getItem(0).value;
};
SVGTextElement.prototype.setY = function (value: number) {
    var p: SVGTextElement = this;
    if (p.y.baseVal.numberOfItems == 0) {
        p.setAttribute('y', "0");
    }
    return p.y.baseVal.getItem(0).value = value;
};

function IsDescendantOfBody(node: Node): boolean {
    var parent = node.parentNode;
    if (parent == null) {
        return false;
    }
    else if (parent == document.body) {
        return true;
    } else {
        return IsDescendantOfBody(parent);
    }
}

function setXY(text: SVGTextElement, rect: GraphTableSVG.Rectangle, vAnchor: string | null, hAnchor: string | null) {

    var x = rect.x;
    var y = rect.y;
    text.setAttribute('x', x.toString());
    text.setAttribute('y', y.toString());

    var b2 = text.getBBox();

    var dy = b2.y - y;
    var dx = b2.x - x;

    y -= dy;

    if (vAnchor == GraphTableSVG.VerticalAnchorEnum.Middle) {
        y += (rect.height - b2.height) / 2
    } else if (vAnchor == GraphTableSVG.VerticalAnchorEnum.Bottom) {
        y += rect.height - b2.height;
    }
    
    x -= dx;
    if (hAnchor == GraphTableSVG.HorizontalAnchorEnum.Center) {
        x += (rect.width - b2.width) / 2;
    } else if (hAnchor == GraphTableSVG.HorizontalAnchorEnum.Right) {
        x += rect.width - b2.width;
    }
    

    text.setAttribute('y', y.toString());
    text.setAttribute('x', x.toString());
}