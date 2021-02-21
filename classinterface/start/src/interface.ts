// type fc = (a: number, b: number) => number;

interface fc {
    (a: number, b: number): number
}

let add: fc;

add = (n1: number, n2: number) => {
    return n1 + n2
}


interface Named {
    //optional properties
    name?: string;
}

// interface just same with Type
// extending interface
interface Person extends Named {
    // no public/private, just readonly
    age: number;

    greeting(phrase: string): void
}

//class with interface
class Person implements Person {
    name: string;
    age = 30;

    constructor(n: string){
        this.name = n
    }

    greeting(phrase: string){
        console.log(phrase + " " + this.name)
    }
}

let User: Person;

User = new Person('Daffa Abdhy Muzhaffar')

// User = {
//     name: 'John',
//     age: 36,
//     greeting(phrase: string){
//         console.log(phrase + " " + this.name)
//     }
// }

User.greeting('Hi My Name Is')
console.log(User)