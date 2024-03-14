console.log("these is the coding round ")

// Print the 1-10 even numbers

console.log("To print the 1-10 even numbers")

const even = () => {
    for(let i=0;i<=20 ; i++){
        if(i%2==0){
            console.log(i)
        }
    }

}
even()


//print a table containing  multication table 


// Table input

// let num = prompt("enter a number")

// // print logic

// for(let i=1;i<=10;i++){
//     console.log(`${num} * ${i} = ${num*i}`)
// }

// length converter


// sum of array

const array=[2,1]
let sum=0
array.forEach((n)=>{
   sum += n
   console.log(sum)
})


// reverse an array in function
let source=[1,2,3,4,5,6]

// modifing the source array

// let reverse=source.reverse()
// console.log(reverse)


// by using the function map function

source.map((i)=>{
   an=source[source.length-i-0]
console.log(an)
})


// sorting the array

lowesttohighest=[34,64,1,3,2,94]
console.log(lowesttohighest.sort())

// filter negitive values


let numbers=[12,-34,45,-89,56,-0]
number=numbers.filter((x)=>{return x >-0})
console.log(number)

// remove the space between the string we can use trim method

let name="             sri          "
console.log(name.trim())


// return a Boolean if a number is divisible by 10

let nums=prompt("enter the number")

if(nums%10===0 != nums===""){
    console.log(" the Boolean value is true")

}
else{
    console.log("the Boolean value is false")
}
