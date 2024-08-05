//can have mutiple data types also in specific order

let user1:[string, number, boolean]
user1=["umar",23,"ddjfn"]// Not allowed
user1=["umar",23,true]  //Allowed


let rgb:[number,number,number]
rgb=[233,44,true]   //not allowed
rgb=[233,244,344]   //Alowed

//can also be used with types
type User2=[number,string]
const newAccount:User2=[12,"umar"]

newAccount[1]="farooq"  //editing is also possible using the index no.



