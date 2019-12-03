//namespace GraphTableSVG {
    import {GRect} from "./g_rect"
    import {GTextBoxAttributes, GObjectAttributes} from "../options/attributes_option"
    import { CustomAttributeNames } from "../common/custtome_attributes"
    import { ShapeObjectType } from "../common/enums";

    export class GRectButton extends GRect {
        public constructor(svgbox: SVGElement | string, option: GTextBoxAttributes = {}) {
            super(svgbox, option);


            //this.update();
            if(this.type == ShapeObjectType.RectButton) this.firstFunctionAfterInitialized();
        }
        initializeOption(option: GObjectAttributes): GObjectAttributes {
            let b = false;
            if (option.width !== undefined || option.height !== undefined) {
                b = true;
            }
            
            
            if(option.surfaceClass === undefined){
                option.surfaceClass = CustomAttributeNames.StyleValue.defaultRectButtonSurfaceClass;
            }
            
            

            const _option = <GTextBoxAttributes>super.initializeOption(option);
            

            return _option;
        }
        
        public get defaultClassName() : string | undefined {
            return undefined;
            //return GraphTableSVG.CustomAttributeNames.StyleValue.defaultRectButtonClass;
        }
        public get type(): ShapeObjectType {
            return ShapeObjectType.RectButton;
        }
    }
//}