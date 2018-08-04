namespace GraphTableSVG {
    
    export class CallOut extends PPPathTextBox implements PPTextboxShape {

        public constructor(svgbox: HTMLElement, option: { className?: string, cx?: number, cy?: number, text?: string, isAutoSizeShapeToFitText?: boolean } = {}) {
            super(svgbox, option);

            this.speakerX = this.cx;
            this.speakerY = this.cy;
            

        }
        protected update() {
            super.update();
            const x1 = - (this.width / 2);
            const y1 = - (this.height / 2);
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
        
        get speakerX(): number {
            return this.svgGroup.getAttributeNumber("data-speaker-x", 0);
        }
        set speakerX(value: number) {
            if (this.speakerX != value) this.svgGroup.setAttribute("data-speaker-x", value.toString());
        }
        get speakerY(): number {
            return this.svgGroup.getAttributeNumber("data-speaker-y", 0);
        }
        set speakerY(value: number) {
            if (this.speakerY != value) this.svgGroup.setAttribute("data-speaker-y", value.toString());
        }




        public get speakerPosition(): SpeakerPosition {
            const speakerDiffX = this.speakerX - this.cx;
            const speakerDiffY = this.speakerY - this.cy;

            const x1 = - (this.width / 2);
            const y1 = - (this.height / 2);
            const x2 = (this.width / 2);
            const y2 = (this.height / 2);
            if (x1 <= speakerDiffX && speakerDiffX <= x2 && y1 <= speakerDiffY && speakerDiffY <= y2) {
                return "inner";
            }

            if (this.speakerX > this.cx) {
                if (this.speakerY > this.cy) {
                    const line = new VLine(0, 0, this.width, this.height);
                    if (line.contains(speakerDiffX, speakerDiffY)) {
                        return "rightdown";
                    } else {
                        return "downright";
                    }
                } else {
                    const line = new VLine(0, 0, this.width, -this.height);
                    if (line.contains(speakerDiffX, speakerDiffY)) {
                        return "upright"
                    } else {
                        return "rightup"
                    }
                }
            } else {
                if (this.speakerY > this.cy) {
                    const line = new VLine(0, 0, this.width, -this.height);
                    if (line.contains(speakerDiffX, speakerDiffY)) {
                        return "leftdown";
                    } else {
                        return "downleft";
                    }

                } else {
                    const line = new VLine(0, 0, this.width, this.height);
                    if (line.contains(speakerDiffX, speakerDiffY)) {
                        return "upleft";

                    } else {
                        return "leftup";

                    }
                }
            }

        }
        protected get shape() : string{
            return "msoShapeRectangularCallout";
        }

        protected get VBAAdjustments() : number[] {
            const y1 = this.speakerY - this.cy;
            const py = y1 / this.height;
            const x1 = this.speakerX - this.cx;
            const px = x1 / this.width;
            return [px,py];
        }

    }
    
    export class ShapeArrow extends PPPathTextBox {

        public constructor(svgbox: HTMLElement, option: { className?: string, cx?: number, cy?: number, text?: string, isAutoSizeShapeToFitText?: boolean } = {}) {
            super(svgbox, option);
            this.height = 100;
            this.width = 100;
            this.arrowHeadWidth = 20;
            this.arrowHeadHeight = 20;
            this.arrowNeckWidth = 10;
            this.arrowNeckHeight = 10;
            this.svgGroup.setAttribute("data-direction", "down");

            this.updateAttributes.push("data-direction");
        }
        get arrowNeckWidth(): number {
            return this.svgGroup.getAttributeNumber("data-arrow-neck-width", 0);
        }
        set arrowNeckWidth(value: number) {
            if (this.arrowNeckWidth != value) this.svgGroup.setAttribute("data-arrow-neck-width", value.toString());

        }
        get arrowNeckHeight(): number {
            return this.svgGroup.getAttributeNumber("data-arrow-neck-height", 0);
        }
        set arrowNeckHeight(value: number) {
            if (this.arrowNeckHeight != value) this.svgGroup.setAttribute("data-arrow-neck-height", value.toString());

        }
        get arrowHeadWidth(): number {
            return this.svgGroup.getAttributeNumber("data-arrow-head-width", 0);
        }
        set arrowHeadWidth(value: number) {
            if (this.arrowHeadWidth != value) this.svgGroup.setAttribute("data-arrow-head-width", value.toString());

        }
        get arrowHeadHeight(): number {
            return this.svgGroup.getAttributeNumber("data-arrow-head-height", 0);
        }
        set arrowHeadHeight(value: number) {
            if (this.arrowHeadHeight != value) this.svgGroup.setAttribute("data-arrow-head-height", value.toString());

        }
        get direction(): Direction {
            const r = this.svgGroup.getAttribute("data-direction");
            if(r == "up"){
                return "up";
            }else if(r == "left"){
                return "left";
            }else if(r == "right"){
                return "right";
            }else{
                return "down";
            }
        }
        set direction(value: Direction) {
            if(this.direction != value){
               this.svgGroup.setAttribute("data-direction", value.toString());
            }
        }
        get innerRectangle(): Rectangle {
            const rect = new Rectangle();
            if (this.isAutoSizeShapeToFitText) {
                const b = this.svgText.getBBox();
                rect.width = b.width;
                rect.height = b.height;
                rect.x = (-this.width / 2) + this.marginPaddingLeft;
                rect.y = (-this.height / 2) + this.marginPaddingTop;
            } else {
                rect.width = this.boxWidth - this.marginPaddingLeft;
                rect.height = this.boxHeight - this.marginPaddingTop;
                rect.x = (-this.width / 2) + this.marginPaddingLeft;
                rect.y = (-this.height / 2) + this.marginPaddingTop;
            }
            if(this.direction == "up") rect.y += this.arrowNeckHeight + this.arrowHeadHeight;
            if(this.direction == "left") rect.x += this.arrowNeckHeight + this.arrowHeadHeight;
            return rect;
        }
        /**
         * 矢印部分を除いた図形の高さを表します。
         */
        protected get boxHeight(){
            if(this.direction == "up" || this.direction == "down"){
                return this.height - this.arrowNeckHeight - this.arrowHeadWidth;
            }else{
                return this.height;
            }
        }
        protected get boxWidth(){
            if(this.direction == "up" || this.direction == "down"){
                return this.width;
            }else{
                return this.width - this.arrowNeckHeight - this.arrowHeadWidth;
            }
        }

        protected updateToFitText(){
            
            const box = this.svgText.getBBox();
            if(this.direction == "up" || this.direction == "down"){
                this.width = box.width + this.marginPaddingLeft + this.marginPaddingRight;
                this.height = box.height + this.marginPaddingTop + this.marginPaddingBottom + this.arrowNeckHeight + this.arrowHeadHeight;    
            }else{
                this.width = box.width + this.marginPaddingLeft + this.marginPaddingRight  + this.arrowNeckHeight + this.arrowHeadHeight;
                this.height = box.height + this.marginPaddingTop + this.marginPaddingBottom;    
            }
        }
        protected update() {
            super.update();
            
            
            if(this.direction == "up"){
                const x1 = - (this.width / 2);
                const y1 = - (this.height / 2);
                const x2 = (this.width / 2);
                const y2 = (this.height / 2);

                const bx1 = x1;
                const by1 = y1 + this.arrowHeadHeight + this.arrowNeckHeight;
                const bx2 = x2;
                const by2 = y2;


                let nx1 = - (this.arrowNeckWidth/2)
                let nx2 = (this.arrowNeckWidth/2)
                let ny = by1 - this.arrowNeckHeight;
                let cx = 0;
                
                let hx1 = - (this.arrowHeadWidth/2)
                let hx2 = (this.arrowHeadWidth/2)
                let hy = y1;

                const mes = `H ${nx1} V ${ny} H ${hx1} L ${cx} ${hy} L ${hx2} ${ny} H ${nx2} V ${by1}`;
                const top = `M ${bx1} ${by1} ${mes} H ${bx2}`;

                const right = `V ${by2}`;
                const bottom = `H ${bx1}`;
                const left = `V ${by1}`
                this.svgPath.setAttribute("d", `${top} ${right} ${bottom} ${left} z`);

            }else if(this.direction == "left"){

                const x1 = - (this.width / 2);
                const y1 = - (this.height / 2);
                const x2 = (this.width / 2);
                const y2 = (this.height / 2);

                const bx1 = x1 + this.arrowHeadHeight + this.arrowNeckHeight;
                const by1 = y1;
                const bx2 = x2;
                const by2 = y2;


                let ny1 = 0 + (this.arrowNeckWidth/2)
                let ny2 = 0 - (this.arrowNeckWidth/2)
                let nx = bx1 - this.arrowNeckHeight;
                let cy = 0;
                
                let hy1 = 0 + (this.arrowHeadWidth/2)
                let hy2 = 0 - (this.arrowHeadWidth/2)
                let hx = x1;

                const top = `M ${bx1} ${by1} H ${bx2}`;
                const right = `V ${by2}`;
                const bottom = `H ${bx1}`;
                const left = `V ${ny1} H ${nx} V ${hy1} L ${hx} ${cy} L ${nx} ${hy2} V ${ny2} H ${bx1} V ${by1}`
                this.svgPath.setAttribute("d", `${top} ${right} ${bottom} ${left} z`);


            }else if(this.direction == "right"){
                const x1 = - (this.width / 2);
                const y1 = - (this.height / 2);
                const x2 = (this.width / 2);
                const y2 = (this.height / 2);

                const bx1 = x1;
                const by1 = y1;
                const bx2 = x2 - this.arrowHeadHeight - this.arrowNeckHeight;
                const by2 = y2;


                let ny1 = 0 - (this.arrowNeckWidth/2)
                let ny2 = 0 + (this.arrowNeckWidth/2)
                let nx = bx2 + this.arrowNeckHeight;
                let cy = 0;
                
                let hy1 = 0 - (this.arrowHeadWidth/2)
                let hy2 = 0 + (this.arrowHeadWidth/2)
                let hx = x2;

                const top = `M ${bx1} ${by1} H ${bx2}`;
                const right = `V ${ny1} H ${nx} V ${hy1} L ${hx} ${cy} L ${nx} ${hy2} V ${ny2} H ${bx2} V ${by2}`;
                const bottom = `H ${bx1}`;
                const left = `V ${by1}`;
                this.svgPath.setAttribute("d", `${top} ${right} ${bottom} ${left} z`);


            }else{
                
                const x1 = - (this.width / 2);
                const y1 = - (this.height / 2);
                const x2 = (this.width / 2);
                const y2 = (this.height / 2);

                const bx1 = x1;
                const by1 = y1;
                const bx2 = x2;
                const by2 = y2 - this.arrowHeadHeight - this.arrowNeckHeight;

                //const by = boxHeight + dy;

                let nx1 = - (this.arrowNeckWidth/2)
                let nx2 = (this.arrowNeckWidth/2)
                let ny = by2 + this.arrowNeckHeight;
                let cx = 0;
                
                let hx1 = - (this.arrowHeadWidth/2)
                let hx2 = (this.arrowHeadWidth/2)
                let hy = y2;
                const top = `M ${bx1} ${by1} H ${bx2}`;
                const right = `V ${by2}`;
                const bottom = `H ${nx2} V ${ny} H ${hx2} L ${cx} ${hy} L ${hx1} ${ny} H ${nx1} V ${by2} H ${bx1}`;
                const left = `V ${by1}`
                this.svgPath.setAttribute("d", `${top} ${right} ${bottom} ${left} z`);
            }
        }
    }
    
}