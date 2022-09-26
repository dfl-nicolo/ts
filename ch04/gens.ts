class Concatenaor<T extends Array<string> | Array<number>> {
	public concatArray(items: T): string {
		let result: string = "";
		for (let i = 0; i < items.length; i++) {
			result += items[i].toString() + " ";
		}
		return result;
	}
	public static concatArray<T extends Array<string> | Array<number>>(items: T): string {
		let result: string = "";
		for (let i = 0; i < items.length; i++) {
			result += items[i].toString() + " ";
		}
		return result;
	}
}
console.log(Concatenaor.concatArray([1, 3, 4]));
console.log(new Concatenaor().concatArray([1, 3, 4]));
console.log(Concatenaor.concatArray(["wow", "bar", "foo"]));
console.log(new Concatenaor().concatArray(["wow", "bar", "foo"]));


function setProperty<T, K extends keyof T, V extends T[K]>(object: T, key: K, value: V) {
	object[key] = value;
}
setProperty({a: 1, b: "bla"}, 'a', 2);
setProperty({a: 1, b: "bla"}, 'b', "wow");


class ClassA { }
function createClassInstance<T>(arg1: { new(): T}): T {
    return new arg1(); 
}
let classAInstance = createClassInstance(ClassA);


interface Iab {
	a: number;
	b: string;
}
let ab: Iab = {
	a: 1,
	b: "wow",
};
type WeakIab<T> = { [K in keyof T]?: T[K] };
let allOptional: WeakIab<Iab> = {};
console.log(allOptional);


type NumOrStr<T> = T extends number ? number : string;
function printNumOrStr<T>(input: NumOrStr<T>): void {
	console.log(input);
}
printNumOrStr<number>(1);
printNumOrStr<string>("wow");

function printale<T, U = NumOrStr<T>>(input: U): void {
	console.log(input);
}
printale(1);
printale("wow");


type NumOrStrOrDate<T> =
	T extends Date ? Date :
	T extends number ? Date | number :
	T extends string ? Date | number | string :
	never;
function compareValues<T extends Date | number | string | boolean>(input: T, compareTo: NumOrStrOrDate<T>): boolean {
	let is = input.toString();
	let cs = compareTo.toString();
	console.log(is, cs);
	return is === cs;
}
console.log(compareValues(new Date(), new Date()));
console.log(compareValues(1, new Date()));
console.log(compareValues(1, 2));
console.log(compareValues("test", new Date()));
console.log(compareValues("test", 1));
console.log(compareValues("test", "test"));


type Infered<T> = T extends { id: infer U} ? U : never;
function testInfered<T>(arg: Infered<T>) {}
// functions argument `arg` is generic and must
// be equal to object's property `id's` value's type
testInfered<{id: string}>("test");
testInfered<{id: number}>(10);


type InferedFunc<T> = T extends (a: infer U) => void ? U : never;
function testInferedFunc<T>(arg: InferedFunc<T>) {}
// fucntions argument `arg` is generic and must
// be equal to type functions' argument's type
testInferedFunc<(a: string) => void>("");
testInferedFunc<(a: number) => void>(78);


type InferedArray<T> = T extends (infer U)[] ? U : never;
function testInferedArray<T>(arg: InferedArray<T>) {}
testInferedArray<string[]>("wow");
testInferedArray<number[]>(345);


type NotNullOrUndefined = NonNullable<number | null | undefined>;
let num: NotNullOrUndefined = 34;


type Excluder = Exclude<number | string | null, string | null>
let ex: Excluder = 34;


type Extractor = Extract<
	string | number | boolean | null | never | undefined, 
	string | number | boolean>;
let sr: Extractor = 4;
let ar: Extractor = "4";
let br: Extractor = true;
