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


if(person.role === level.ADMIN){
    console.log("You are admin :)")
} else if (person.role === level.AUTHOR){
    console.log("You are the author")
}

function Combine(n1 : number, n2 : string){
return n1 + n2
}

// console.log(level.ADMIN)


// for (let item of person.arr){
//     console.log(item)
// }

