//can combine multiple data types together  (|)

let score: number | string;
score = 12;
score = "5"; //both number and string is allowed

//now lets combine types which will have (OR) condition , in combining types(readonlyandoptional file) it was (&)
type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

//if we are not sure wat variable can be we can use OR
let umar: User | Admin = {
  name: "Umar",
  id: 23,
}; //here umar is behaving as user

//umar can also behave as admin
let umar1: User | Admin = {
  username: "umarfarooq",
  id: 234,
};

//suppose we make a function which can can accept two types of value in future but dk which type

function getDBid(id: number | string) {
  console.log(`the DB is is ${id}`); // it is assuming the id can be number or string
  id.toUpperCase; //not allowed bcs id can be number also and this finction canot be applied to number.

  if (typeof id === "string") {
    //here can handle the sitation if id is string thn only change to upper case.
    id.toUpperCase;
  }
}

//if we want some variable to accept only certain input
let seatAllotment: "aisle" | "window" | "middle";
seatAllotment = "window"; //Allowed
seatAllotment = "pilotseat"; //not allowed

//to keep multiple data types in array

const data: (number | string | boolean)[] = [1, "hi", true];


