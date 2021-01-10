enum level {ADMIN, READONLY, AUTHOR}

type Tup = number | string; //union
type Descriptor = 'as-number' | 'as-string'
// const person : {
//     name: string;
//     age: number;
//     arr: string[];
//     tups: [number, string];
//     level: any;
//     union: Tup
// }= {
   
const person = {
    name: 'Daffa',
    age: 22,
    arr: ['Daffa', 'Sedang', 'Belajar', 'TS'],
    tups: [10, "Tupple"], // tuple
    role: level.ADMIN
}


// if(person.role === level.ADMIN){
//     console.log("You are admin :)")
// } else if (person.role === level.AUTHOR){
//     console.log("You are the author")
// }

function Combine(n1 : number, n2 : number, cb: (num: number)=> void){
let result = n1 + n2;
cb(result);
}




// let someVal: (a: number, b: number)=> number;

// someVal = Combine: void;

//Void nad Anonymous Function
console.log(Combine(1,2, (result)=>{
console.log(result)
}));
// console.log(level.ADMIN)


// for (let item of person.arr){
//     console.log(item)
// }



