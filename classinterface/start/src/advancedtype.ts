type Combineable = string | number;
type Numeric = number | boolean;


//combine 2 different types
type Universal = Combineable & Numeric 

//overloading
function Add(a: number, b: number): number
function Add(a: string, b: string): string
function Add(a: string, b: number): string
function Add(a: number, b: string): string


function Add(a: Combineable, b: Combineable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b; 
}

const result = Add('Daffa', 'Abdhy')
result.split(" "); 

interface Fetch {
    id: number;
    name: string;
    jobs: object
}

const fetchedUser = {
    id: 1,
    name: 'daffa',
    jobs: {
        title: 'cto'
    }
}

// optional chaining
console.log(fetchedUser?.jobs?.title)

/// if undefined, storeData will be default
const inp = ''

//nullish coalescing
const storedData = inp ?? 'Default';

console.log(storedData)


type Employee = {
    name: string;
    startDate: Date;
}

type Admin = {
    name: string;
    privileges: string[];
}

type ElevatedEmployee = Employee & Admin

const e1: ElevatedEmployee = {
    name: 'Daffa',
    privileges: ['Create Server'],
    startDate: new Date()
}

type UnknownEmployee = Employee | Admin

function printEmployee(emp: UnknownEmployee){
    console.log(emp.name)
    if('privileges' in emp){
        console.log(emp.privileges)
    }
    if('startDate' in emp){
        console.log(emp.startDate)
    }
}

printEmployee(e1)


class Car {

    drive(){
        console.log('Driving ...')
    }
}

class Truck {
    drive(){
        console.log('Driving ...')
    }
    loadCargo(amount: number){
        console.log('Load Cargo ...' + amount)
    }
}

type Vehicle = Car | Truck

const v1 = new Car();
const v2 = new Truck();

/// vehicle is constructor class
function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    // if('loadCargo' in vehicle){
    //     vehicle.loadCargo(10000)
    // }

    //checking class
    if(vehicle instanceof Truck){
        vehicle.loadCargo(10000)
    }
}

// useVehicle(v2)

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    groundSpeed: number;
}

type Animal = Horse | Bird

//discriminated union
function useAnimal(animal: Animal){
    let speed;
    switch (animal.type){
        case 'horse':
            speed = animal.groundSpeed
            break;
        case 'bird':
            //groundSpeed doesn't exist in type Bird
            speed = animal.flyingSpeed
            break;
    }
    console.log('Moving at speed', speed)
}


useAnimal({type: 'horse', groundSpeed: 200})


let userInput = document.getElementById('user-input')! as HTMLInputElement

// userInput.value = 'Daffa'
if(userInput){
    (userInput as HTMLInputElement).value = 'daffa'
}


//index properties
interface ErrorContainer {
    [prop: string]: string;
}


const err: ErrorContainer = {
    email: 'Email must be a valid email address',
    userName: 'Username Must be a valid username'
}