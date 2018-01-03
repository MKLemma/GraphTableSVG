﻿
namespace GraphTableSVG {
    export class SVGToVBA {
        public static create(items: (Graph | Table)[]): string {
            //var id = 0;
            var s: string[] = new Array(0);

            s.push(`Sub create()`);
            s.push(` Dim createdSlide As slide`);
            s.push(` Set createdSlide = ActivePresentation.Slides.Add(1, ppLayoutBlank)`);
            for (var i = 0; i < items.length; i++) {
                s.push(`Call create${i}(createdSlide)`);
            }
            s.push(`MsgBox "created"`);

            s.push(`End Sub`);

            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item instanceof Table) {
                    var lines = item.createVBACode(i, "createdSlide");
                    lines.forEach((v) => s.push(v));
                } else {
                    var lines = item.createVBACode(i);
                    lines.forEach((v) => s.push(v));
                }
            }
            s.push(SVGToVBA.cellFunctionCode);
            var r = VBATranslateFunctions.joinLines(s);
            return r;
        }
        


        public static cellFunctionCode: string = `
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

Sub EditTextRange(range_ As TextRange, text As String, subBeg As Integer, subLen As Integer, color As Variant)
    range_.text = text
    range_.Font.color.RGB = RGB(CInt(color(0)), CInt(color(1)), CInt(color(2)))
    If subLen > 0 Then
    range_.Characters(subBeg, subLen).Font.Subscript = True
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


`
    }

    export function parseInteger(value: string): number {
        if (value == "") {
            return 1;
        } else {
            return parseInt(value);
        }
    }
    export function visible(value: string): number {
        if (value == "hidden") {
            return 1.0;
        } else {
            return 0;
        }
    }

    export class VBATranslateFunctions {
        public static grouping80(codes: string[][]): string[] {
            var r: string[] = [];
            var result: string[] = [];
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
        public static splitCode(codes: string[][], subArg : string, callArg : string, id: number): [string, string] {
            var functions: string[] = [];

            var p = VBATranslateFunctions.grouping80(codes);
            p.forEach(function (x, i, arr) {
                functions.push(`Call SubFunction${id}_${i}(${callArg})`);
                var begin = `Sub SubFunction${id}_${i}(${subArg})`;
                var end = `End Sub`;
                p[i] = VBATranslateFunctions.joinLines([begin, x, end]);
            });
            return [VBATranslateFunctions.joinLines(functions), VBATranslateFunctions.joinLines(p)];
        }

        public static ToFontBold(bold : string) : string {
            if (bold == "bold") {
                return "msotrue";
            } else {
                return "msofalse";
            }
        }
        public static ToVerticalAnchor(value: string): string {
            switch (value) {
                case "top": return "msoAnchorTop";
                case "middle": return "msoAnchorMiddle";
                case "bottom": return "msoAnchorBottom";
                default: return "msoAnchorTop";
            }
        }
        public static ToHorizontalAnchor(value: string): string {
            switch (value) {
                case "left": return "ppAlignLeft";
                case "center": return "ppAlignCenter";
                case "right": return "ppAlignRight";
                default: return "ppAlignLeft";
            }
        }

        static createStringFunction(item: string) {
            return item.length == 0 ? `""` : `"` + item + `"`;
        }

        static createArrayFunction(items: any[]) {
            var s = ``;

            for (var i = 0; i < items.length; i++) {
                s += items[i];
                if (i + 1 != items.length) {
                    s += `, `;
                }
            }
            return `Array(${s})`;
        }
        static createStringArrayFunction(items: string[]) {
            var s = ``;
            for (var i = 0; i < items.length; i++) {
                s += `"${items[i]}"`;
                if (i + 1 != items.length) {
                    s += `, `;
                }
            }
            return `Array(${s})`;
        }
        static createJagArrayFunction(items: any[][]) {
            var s = ``;
            for (var i = 0; i < items.length; i++) {
                s += VBATranslateFunctions.createArrayFunction(items[i]);
                if (i + 1 != items.length) s += `, `;
            }
            return `Array(${s})`;
        }
        static joinLines(lines: string[]) {
            var s = ``;
            for (var i = 0; i < lines.length; i++) {
                s += lines[i];
                if (i + 1 != lines.length) s += `\n`;
            }
            return s;
        }

        public static colorToVBA(color: string): string {
            color = Color.translateRGBCodeFromColorName(color);
            if (color.indexOf("rgb") != -1) {
                return color.replace("rgb", "Array");
            } else {
                return "Array(0, 0, 0)";
            }

        }
        public static ToVBAFont(font: string): string {
            font = font.replace(/"/g, "");
            font = font.replace(/'/g, "");
            return font;
        }
        public static TranslateSVGTextElement(sub: string[][], item: SVGTextElement, range: string): void {

            var text = item.textContent == null ? "" : item.textContent;
            var color = Color.translateRGBCodeFromColorName2(item.getPropertyStyleValueWithDefault("fill", "gray"));

            sub.push([`${range}.text = "${item.textContent}"`]);
            sub.push([`${range}.Font.color.RGB = RGB(CInt(${color.r}), CInt(${color.g}), CInt(${color.b}))`])
            if (item.children.length > 0) {
                var pos = 1;
                for (var i = 0; i < item.children.length; i++) {
                    var child = item.children.item(i);
                    if (child.textContent != null && child.textContent.length > 0) {
                        var len = child.textContent.length;

                        var f = child.getAttribute("data-script");
                        if (f != null) {
                            if (f == "superscript") {
                                sub.push([`${range}.Characters(${pos}, ${len}).Font.Superscript = True`])
                            } else if (f == "subscript") {
                                sub.push([`${range}.Characters(${pos}, ${len}).Font.Subscript = True`])
                            }
                        }
                        pos += len;
                    }
                    
                }
            }
        }

        /*
        public static shapeToVBA(shape: ShapeStyle, item: string) {
            return ` Call EditNodeLine(${item}, ${VBATranslateFunctions.colorToVBA(shape.lineColor)}, ${shape.dashStyleCode}, ${shape.transparency}, ${shape.weight})`;
        }
        */
    }
}