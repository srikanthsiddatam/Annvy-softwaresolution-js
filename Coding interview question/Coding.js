//  define the class with method and property
 
//  class car {

//     constructor(model,name){
//         this.model=model
//         this.name=name
//     }
//     start(){
//         console.log(`Name car is the car ${this.name}`)
//         console.log(`my car model is ${this.model}`)
//     }
//     Stop(){
//         console.log(`Name car is the car ${this.name}`)
//         console.log(`my car model is ${this.model}`)

//     }
    
// }
// bmw=new car(620,"sports")
// bmw.start()
// volvo=new car(400,"volvo")
// volvo.Stop()


// How to implement class inheretance in javascript

// class Car {
//     constructor(model,name){
//         this.model=model
//         this.name=name
//     }
//     start(){
//         console.log(this.model)
//     }
//     End(){
//         console.log("carstop")
//     }

// }
// class ElectricCar extends Car{
//     dasboard(){
//         console.log("child method")
//     }
//     start(){
//         super.start()
//         super.End()
//         this.dasboard()
//     }
// }

// evcar=new ElectricCar("tesla","320")
// evcar.start()



// 3 Question
// find dupilicate element in an array

// const numbers=[1,2,3,4,1,4,6,7]

// const duplicate=numbers.filter((ele,index,arr)=>{
//     return arr.indexOf(ele)!==index

// })
// console.log(duplicate)

// 4 Question
// How to find the count duplicate in a array

// const months=["may","feb","feb","june","april","june"]
// const countofduplicates = months.reduce((obj,month)=>{
//     if(obj[month] == undefined){
//         obj[month]=1
//         return obj
//     }
//     else {
//         obj[month]++
//         return obj
//     }
// },{}) 
// console.log(countofduplicates)


// Qusetion-5

// How to check if a given number is an integer

// const validateValue=1

// console.log(!isNaN(validateValue))

// 6-Question


// explain the difference between object.freeze() vs const

// Const ====> Const is applied to binding("varibles") . it creates an immutable binding i.e you cannot assign a new value to the binding

// Object.freeze =====>works on value , and more specifically ,object values .it makes an object immutable.i.e,you cannot change its properties

// const month="july"

// month="june"
// console.log(month)

// example of Object

// let person ={
//     name:"arc tutorial"
// }
// Object.freeze(person)
// person.name="hello world"

// console.log(person)

// 7-Question
// how to sort a nummber Array

// To sort an array we will have to use a comparision method inside thne sort


// with out giving the sort parmeters it will check first number
// const unsorted=[1,3,5,8,24,1,23,3]
// const sortedarray=unsorted.sort((a,b)=>{
//     return a-b
// })

// console.log(sortedarray)

// 8-Question

// sort the given Array

// const stringnamesort=["chaha","app","sring","baba"]
// const sort=stringnamesort.sort()
// console.log(sort)


// 9-Question

// how to find unique value in an array

// To find unique value in an array we are going to use Array Filter method and check if the value is present using the indexOf method


// const numbers = [1,2,34,76,8,98,1,2]

// const unique=numbers.filter((ele,index,arr)=>{
//     return arr.indexOf(ele)==index
// })
// console.log(unique)


// How to find unique value from an array in sorted order











