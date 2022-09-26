// don't use `any` type 


var item: any = { id: 1, name: "wow" };
item = { id: 1 };


var item1 = <any>{ id: 1, name: "wow" };
item1 = { id: 1 };


var item2 = { id: 1, name: "wow" } as any;
item2 = { id: 1 };


var i: number = 0;
if (i == 0) {
	var i: number = 2;
	console.log(`index = ${i}`);
}
console.log(`index = ${i}`);


let i1: number = 0;
if (i1 == 0) {
	let i1: number = 2;
	console.log(`index = ${i1}`);
}
console.log(`index = ${i1}`);


const constant = "this is const"


function printObject(obj: string | number) {
	console.log(`obj = ${obj}`)
}
printObject(2);
printObject("string value");


function addWithTypeGuard(
	a: string | number,
	b: string | number,
) {
	if (typeof a === "number" && typeof b === "number") {
		console.log(`both are numbers`);
		return a + b;
	}
	if (typeof a === "string") {
		console.log("a is string");
		return a + b;
	}
	console.log(`defualt return threat both as strings`);
	return a.toString() + b.toString();
}
console.log(` "1", "2" = ${addWithTypeGuard("1", "2")}`);
console.log(` 1 , 2 = ${addWithTypeGuard(1, 2)}`);
console.log(` 1 , "2" = ${addWithTypeGuard(1, "2")}`);


type StringOrNumber = string | number;

function addWithTypeAlias(
	a: StringOrNumber,
	b: StringOrNumber,
) {
	return a.toString() + b.toString();
}


enum DoorState {
	Open, 
	Closed
}

function checkDoorState(state: DoorState) {
	console.log(`enum value is : ${state}`);
	switch (state) {
		case DoorState.Open:
			console.log(`Door is open`);
			break;
		case DoorState.Closed:
			console.log(`Door is Closed`);
			break;
	}
}
checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);


const enum DoorStateConstString {
	Open = "open",
	Closed = "closed",
	Unspecified = "unspecified"
}
console.log(`const closed = ${DoorStateConstString.Open}`);
console.log(`const closed = ${DoorStateConstString.Closed}`);
console.log(`const closed = ${DoorStateConstString.Unspecified}`);


let arr = ["1", "12", "123"];
delete arr[0];
for (let i = 0; i  < arr.length; i ++) {
	const element = arr[i];
	console.log(`arr[${i}] = ${element}`);
}


function printValues(a: number | null) {
	console.log(`a = ${a}`);
}
printValues(1);
printValues(null);


const val: number = 10;
const msg: string = val > 10 ? "value is greater" : "value is smaller";
console.log(msg);


function printNestedOptionalChain(o: any) {
	if (o?.nestedProperty?.name) {
		console.log(`name = ${o.nestedProperty.name}`);
	} else {
		console.log(`name not found or undefined`);
	}
}
printNestedOptionalChain({
	nestedProperty: {
		name: "nestedProperty's name"
	}	
});
printNestedOptionalChain({
	nestedProperty: 5
});


function nullishCheck(a: number | undefined | null) {
	console.log(`a: ${a ?? `undefined or null`}`);
}
nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);


var definitive!: string;
assignDefinitive("wow");
console.log(definitive!);
function assignDefinitive(val: string) {
	definitive = val;
}


let structObj: object = {
	name: "myobj",
	properties: {
		id: 1,
		type: "any"
	}
}
function printObjectType(o: object) {
	console.log(`o: ${JSON.stringify(o)}`);
}
printObjectType(structObj);


let u: unknown = "an unknown";
console.log(typeof u);
u = 1;
console.log(typeof u);
let nnum: number;
nnum = <number>u;
console.log(typeof u, typeof nnum);


function alwaysThrows(): never {
	throw new Error("this will always throw");
	// return -1;
}


enum AnEnum {
	First,
	Second,
}
function getEnumValue(ae: AnEnum): string {
	switch (ae) {
		case AnEnum.First: return "first case";
		case AnEnum.Second: return "second case";
	}
	return <never>ae;
}


let o1: object = { id: 7, name: "o1's name" };
let o2: object = { id: 1 };
let o3: object = { ...o1, ...o2 };
console.log(o1, o2, o3);


let arr0: Array<number> = [1, 2, 3];
let arr1 = [3, 4, 5];
let arr2 = [...arr0, ...arr1];
console.log(arr0, arr1, arr2);

let t0: [string, boolean] = ["wow", true];
let x = t0[0];
let y = t0[1];
let [a, b] = t0;
console.log(t0, x, y, a, b);


// NOTE: required element cannot follow opetional elemnt
let t1: [string, boolean?] = ["wow", true];
t1 = ["bla", false];
t1 = ["foo"];
console.log(t1, t1[0], t1[1]);


let trest: [number, string, ...string[]];
trest = [1, "wow"];
trest = [2, "bbb", "foo", "aaa"];
trest[89] = 'a';
console.log(trest);


let copj = {
	anum: 1,
	bstr: "bbb",
	bboo: true,
}
// destructure and change name
let { anum: an, bstr: bn, bboo: cn} = copj;
an = 2;
console.log(an, bn, cn, copj);


function concatWithOptDefault(a: string, b?: string, c: string = "default") {
	console.log(`a + b + c = ${a + b + c}`);
}
concatWithOptDefault("aaa", "bbb", "ccc");
concatWithOptDefault("aaa", "bbb");
concatWithOptDefault("aaa");


function variadic(...args: string[] | number[]) {
	for (let i in args) {
		console.log(`args[${i}] = ${args[i]}`);
	}
}
variadic(1, 2, 3);
variadic("a", "b", "c", "d");


function myCallback(text: string): void {
	console.log(`callback called with ${text}`);
}
function withCallback(
	message: string, 
	callback: (text: string) => void
): void {
	console.log(`withCallback called with ${message}`);
	callback(message);
}
withCallback("wow", myCallback);


function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
	return a + b;
}
console.log(
	add("first", "second"), 
	add(1, 3),
);


type allowedStrings = "one" | "two" | "three";
type allowedNumbers = 1 | 2 | 3;
function withLiterals(input: allowedNumbers | allowedStrings): void { 
	console.log(input);
}
withLiterals(1);
withLiterals(2);
withLiterals("one");
withLiterals("two");
withLiterals("three");









