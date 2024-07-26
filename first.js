console.log("Just trying");

//------> object
const company={
    name: "Fin",
    employee: "Umar farooq",
    Id: 733713
}

console.log(company); /// to print whole object
console.log(company["employee"]);// to print value of particular key in object
console.log(company.employee);

//Practice prod tile

const product_Tile={
    name: "Parker jotter",
    Rating: 4.5,
    Price: 20,
    offer: 5
}

//Comparison
/*ex:*/ let a= 5;
    let b="5"

      console.log(a==b); //true , but one is string and other is number , internally the string got converted to number , to avoid this we use !==
      console.log(a!=b); // false

      console.log(a===b); // false ------ checks if equal , also checks type 
      console.log(a!==b) // true ------
      
      
//Ternary
let age=22;
let result= age>18?"can vote":"can't vote";
console.log(result);


//Alert
alert("You just witnessed an alert message");

//Popup--> give prompt also takes input
let name= prompt("Enter number");
console.log(name);

if(name%5==0){
    console.log("Multiple of 5");
}else{
    console.log("Not multiple of 5");
} 


//Array
// -----> Splice method
let food=["apple","banana","litchi","rice","daal"];
console.log(food.slice(0,3));//To get a part of arr---> ['apple', 'banana', 'litchi']
console.log(food.splice(1,2,"n","w"));//TO delete and add at particular index----> ['apple', 'n', 'w', 'rice', 'daal']
console.log(food.splice(1,2)) //To delete----> ['apple', 'rice', 'daal']
console.log(food.splice(1,0,"n","w"))//To add -----> ['apple', 'n', 'w', 'banana', 'litchi', 'rice', 'daal']
console.log(food.splice(1,1,"new ele"));//To replace -----> ['apple', 'new ele', 'litchi', 'rice', 'daal']
console.log(food.splice(2));//Delete all after the index ---->['apple', 'banana']








