import {Image} from "./Image";
import {Position2d} from "./Position2d";

export class Sprite{
    private pos: Position2d;
    private img;
    constructor(x: number, y: number, img: Image) {
        this.pos={x,y};
        this.img=img;
    }
    getPos(): Position2d{
        return this.pos;
    }
    getImg(): CanvasImageSource{
        return this.img.getImg();
    }
}
