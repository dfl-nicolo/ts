interface IIdName {
	id: number;
	name: string;
	lastName?: string;
}
let iidname: IIdName = {
	id: 4,
	name: "wow",
};
console.log(iidname);


interface IWeakType {
	id?: number;
	name?: string;
}
let w: IWeakType = {
	id: 2,
	// Err: description: "bla",
};


interface IIdDesc {
	id: number;
	desc: string;
}
interface IIdName {
	id: number;
	name: string;
}
function printDiff(i: IIdDesc | IIdName): void {
	console.log(i.id);
	if ('name' in i) {
		console.log(i.id);
	}
	if ('desc' in i) {
		console.log(i.desc);
	}
}
printDiff({id: 4, name: "name"});
printDiff({id: 14, desc: "desc"});


type IdOrName = keyof IIdName;
function getProperty(key: IdOrName, obj: IIdName) {
	console.log(`${key} = ${obj[key]}`)
}
getProperty("id", {id: 4, name: "name"});
getProperty("name", {id: 4, name: "name"});
// Err: getProperty("wow", {id: 4, name: "name"});

namespace Space {
	export interface IPrint {
		print(): void;
	}
	export class AIPrint implements IPrint {
		readonly id: number; 
		private _sex: string;
		public name: string;
		protected date: string;
		private static val: number = 0;
		constructor(
			id: number, 
			readonly kk: number,
			sex: string = "feamle", 
			name: string = "teddy",
			date: string = "0000",
			private bs: string = "bs"
		) {
			this.id = id;
			this.kk = kk;
			this.name = name;
			this.date = date;
			this._sex = sex;
		}
		public print(): void {
			console.log(this);
		}
		public updatePrint() {
			console.log(AIPrint.val++);
		}
		get sex(): string {
			return this._sex;
		}
		set sex(s: string) {
			this._sex = s;
		}
	};
	export function classPrinter(p: IPrint): void {
		p.print();
	}

	class Orbit extends AIPrint {
		constructor(id: number, readonly kk: number) {
			super(id, kk);
		}
	}
};
let ai0 = new Space.AIPrint(6, 4);
let ai1 = new Space.AIPrint(6, 4);
ai0.sex = "ssss";
ai0.updatePrint();
ai0.updatePrint();
ai1.updatePrint();
ai1.updatePrint();
console.log(ai0.kk);
Space.classPrinter(ai0);
Space.classPrinter(ai1);


interface IBase {
	id: number | string;
}
interface IWide extends IBase {
	name: string;
}
interface INarrow extends IWide {
	id: number;
}
interface IOtherBase {
	lastName: string;
}
interface IMultiple extends IWide, IOtherBase {
	city: string;
	addr?: string;
} 
class BaseClass implements IBase {
	id: number | string = 0;
}
class Derived extends BaseClass implements IWide {
	name = "derived name";
}
class BaseClassCtor {
	constructor(private id: number) {}
}
class DerivedClassCtor extends BaseClassCtor {
	constructor(id: number, public name: string) {
		super(id);
	}
}


abstract class EmployeeBase {
	abstract doWork(): void;
	constructor(protected id: number, public name: string) {}
}
class OfficeWorker extends EmployeeBase { 
	doWork(): void {
		console.log(this);
	}
}
class OfficeManager extends OfficeWorker {
	public employees: EmployeeBase[] = [];
	manage() {
		super.doWork();
		for (let e of this.employees) {
			e.doWork();
		}
	}
}
let jack = new OfficeWorker(1, "jack");
let dave = new OfficeWorker(2, "dave");
let mary = new OfficeManager(3, "mary");
mary.employees.push(jack);
mary.employees.push(dave);
mary.manage();
mary.employees[0].name = "steve";
jack.doWork(); // push uses pointer to object


class A { }
class BfromA extends A { }
class CfromA extends A { }
class DfromC extends CfromA { }
console.log(`A instance of A : ${new A() instanceof A}`);
console.log(`BfromA instance of A : ${new BfromA() instanceof A}`);
console.log(`BfromA instance of BfromA : ${new BfromA() instanceof BfromA}`);
console.log(`DfromC instance of A : ${new DfromC() instanceof A}`);



