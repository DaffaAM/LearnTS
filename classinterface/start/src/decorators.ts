// class decorator
function Logger(logString: string){
    // decorator factory
    //run first
    console.log("Logger Factory")
    return (constructor: Function)=> {
        console.log(logString)
        console.log(constructor)
    }
}

// decorator
const withTemplate =<T extends string, A extends string>(template: T, hookId: A) =>{
    console.log("Template Factory")
    return (constructor: any)=>{
        console.log('Rendering Template')
        const hookEl = document.getElementById(hookId);
        let p = new constructor()
        if(hookEl){
            hookEl.innerHTML = p.name
        }
    }
}


/// find Logger first   
//multiple decorator
@Logger('Logging - Person')
//run first
@withTemplate('<h1>My Person Object</h1>', 'app')
class Decors {
    name = 'Max';

    constructor(){
        console.log('Creating object Person')
    }
}

//automatically create object from class
let Pers = new Decors();

// console.log(Pers)

function Log(target: any, propertyName: string | Symbol ){
    console.log("Property Decorator")
    console.log(target,propertyName)
}

function Log2(target: any, name: string, description: PropertyDescriptor){
    console.log('Accessor Decorator')
    console.log(target);
    console.log(name);
    console.log(description)
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(value: number) {
        if(value > 0){
            this._price = value
        } else {
            throw new Error("Price should be positive")
        }
    }

    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }

    getPriceWithTax(tax: number): number{
        return this._price * (1 + tax)
    }
}