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