import {Sprite} from "./Sprite";

export class Painter{
    private readonly htmlCanvas: HTMLCanvasElement;
    private drawContext;
    constructor(canvasID: string) {
         this.htmlCanvas = document.getElementById(canvasID) as HTMLCanvasElement;
         this.drawContext = this.htmlCanvas.getContext("2d");
    }
    draw(sprite: Sprite){
        if(this.drawContext!==null) {
            const pos = sprite.getPos();
            this.drawContext.drawImage(sprite.getImg(), pos.x, pos.y);
        }
    }
}