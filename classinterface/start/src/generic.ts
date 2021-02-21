const arr: Array<string> = ['Daffa', 'Abdhy'] // string[]

// console.log(arr)

// promise generic
const promise: Promise<any> = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('This is done')
    }, 2000)
})

// promise.then((data) =>
// console.log(data)
// )

// generic
 const merge = <A extends object, Q>(objA: A, objB: Q) => {
    return Object.assign(objA, objB);
 }

 // behind the scenes
 let Merged = merge<{name: string, hobbies: string[]}, {age: number}>({ name: "daffa", hobbies: ['Code']},{age: 21})

//  console.log(Merged) 

interface Lengthy {
    length: number;
}

// generic with tuple
function countAndPrint<T extends Lengthy>(element: T): [T, string]{
let describe = 'Got no value';
if(element.length === 1){
    describe = 'Got 1 element'
} else if(element.length > 1){
    describe = 'Got ' + element.length + ' element';
}
return [element, describe];
}


// console.log(countAndPrint(['Daffa',2]))

///keyof constraint
const extractAndConvert = <T extends object,U extends keyof T>(obj: T, key:U) =>{
    return obj[key]
}

// console.log(extractAndConvert({name: 'daffa', age: 30}, 'age')) 
// 30


class DataStorage<T extends string | number | boolean >{
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item)
    }

    removeItem(item: T){
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1)
    }

    printArray(){
        return this.data
    }
}

let newData = new DataStorage<string>()

newData.addItem('Daffa')
newData.addItem('Abdhy')
newData.removeItem('Abdhy')


console.log(newData.printArray())


// let objStorage = new DataStorage<object>()

// objStorage.addItem({name: 'Daffa'})
// objStorage.addItem({name: 'Udin'})

// objStorage.removeItem({name: 'Daffa'})

// console.log(objStorage.printArray())


/// Generic Utility
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

//partial
function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal; 
}

// readonly properties
const names: Readonly<string[]> = ['Daffa', 'Abdhy'];
// names.push('Muzhaffar')