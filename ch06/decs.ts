function firstDecorator(constructor: Function) {
	console.log("firstDecorator called");
}
function secondDecorator(constructor: Function) {
	console.log("secondDecorator called");
}
@firstDecorator
@secondDecorator
class classWithFirstDecorator {
}
// decorators are colled in reverse order they appare in our code 

console.log("---------------------");

function classDecorator(
    constructor: Function
) {}
function propertyDecorator(
    target: any, 
    propertyKey: string
) {}
function methodDecorator(
    target: any,
    methodName: string,
    descriptor?: PropertyDescriptor
) {}
function parameterDecorator(
    target: any, 
    methodName: string, 
    parameterIndex: number
) {}
@classDecorator
class WithAllTypesOfDecorators {
	@propertyDecorator
	id: number = 1;
	@methodDecorator
	print(): void {}
	setId(@parameterDecorator id: number) {
		this.id = id;
	}
}

console.log("---------------------");

// decorator factories
function decoratorFactory(text: string) {
	return (constructor: Function) => {
		console.log(text);
	};
}
@decoratorFactory("factory")
class WithDecoratorFactory {
}

console.log("---------------------");

function modifyClassProperty(constructor: Function) {
	constructor.prototype.wow = "woooow";
}
@modifyClassProperty
class WithModifiedProperty {
}
let withprop = new WithModifiedProperty();
console.log((<any>withprop).wow);

console.log("---------------------");

function propertyDec(target: any, propertyName: string) {
	if (typeof (target) == "function") {
		console.log(`class xame: ${target.name}`);
	} else {
		console.log(`class yame: ${target.constructor.name}`);
	}
    console.log(`propertyName : ${propertyName}`);
}
class WithPropertyDec {
	@propertyDec
	someProperty: string | undefined;
	@propertyDec
	static staticProperty: string;
}

console.log("---------------------");

function methodDec(target: any, methodName: string, descriptor?: PropertyDescriptor) {
	console.log(`target: ${target}`);
    console.log(`methodName : ${methodName}`);
    console.log(`descriptor : ${JSON.stringify(descriptor)}`);
    console.log(`target[methodName] : ${target[methodName]}`);
}
class WithMethodDec {
	@methodDec
	print(out: string): void {
		console.log(`WithMethodDec.print (${out}) called`);
	}
}

console.log("---------------------");

function auditLogDec(target: any, methodName: string, descriptor?: PropertyDescriptor) {
	let originalFn = target[methodName];
	let auditFunction = function (this: any) {
		console.log(`1. autditLogDec : override of ${methodName} called`);
		for (let i = 0; i < arguments.length; i++) {
			console.log(`2. arg: ${i} = ${arguments[i]}`);
		}
		console.log(typeof (originalFn));
		originalFn.apply(this, arguments);
	}
	target[methodName] = auditFunction;
	return target;
}
class ClassWithAuditDec {
    @auditLogDec
    print(arg1: string, arg2: string) {
        console.log(`3. ClassWithMethodDec.print (${arg1}, ${arg2}) called.`);
    }
}
let auditClass = new ClassWithAuditDec();
console.log('here');
auditClass.print("test1", "test2");

let auditClas = new ClassWithAuditDec();
console.log('here here');
auditClas.print("test1", "test2");

console.log("---------------------");

function paramDec(target: any, methodName: string, parameterIndex: number) {
	console.log(`target: ${target}`);
    console.log(`methodName : ${methodName}`);
    console.log(`parameterIndex : ${parameterIndex}`);
}
class WithParamDec {
	print(@paramDec value: string) {

	}
}

console.log("---------------------");

import "reflect-metadata";
function reflectParameterDec(target: any,
    methodName: string,
    parameterIndex: number) 
{
    let designType = Reflect.getMetadata("design:type", target, methodName);
    console.log(`design type: ${designType.name}`)
    let designParamTypes = Reflect.getMetadata("design:paramtypes", target, methodName);
    for (let paramType of designParamTypes) {
        console.log(`param type : ${paramType.name}`);
    }
    let designReturnType = Reflect.getMetadata("design:returntype", target, methodName);
    console.log(`return types : ${designReturnType.name}`);
}
class ClassWithReflectMetaData {
    print(@reflectParameterDec id: number, name: string): number {
        return 1000;
    }
}
