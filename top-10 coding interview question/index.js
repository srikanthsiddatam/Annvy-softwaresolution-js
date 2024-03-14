console.log("these is top 10 interview question")

// reverse a string 
// there are 2 ways to reverse the string 

// by using the for loop to reverse the string

// eg:are =====>era

function reverseString(str) {
    let reversed=""

    for (let i=str.length-1;i>=0;i--){
        reversed += str[i]
    }
    console.log( reversed);


}
reverseString("srikanth")



// second way it is a shortcut by using the 

// by using split("") and join ("")




