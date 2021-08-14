// tsc main.js ===> this will generate a corresponding js file
// tsc --target ES6 "filename"

function log(message){
	console.log(message)
}

var message = "hello world";

log(message)

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false]

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red, Green, Blue}; // Red=0, Green=1, Blue=2
let backgroundColor = Color.Red;


let messagee = 'abc';
let endsWithCC = messagee.endsWith('c');

// or 
let messageee; // any type
messageee = 'abc';
let endsWithC = (<string>messageee).endsWith('c');
let alternativeWay = (messageee as string).endsWith('c');

export class Point{
	constructor(private _x?: number, private _y?: number){}
	draw(){console.log('x is '+this.x+", y is: "+ this._y)}
	get x(){return this._x}
	set x(value){
		if(value<0)
			throw new Error('value cannot be less than 0.');
		this._x = value
	}
}

//let drawPoint = (point:{x:number, y: number})=>{ // inline annotation
//
//}


let point = new Point(1, 2)

point.x = 1000;
console.log(point.x)
point.draw();
 
