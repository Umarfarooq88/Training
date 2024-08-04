//if we want to make an object return an object always 
// syntax : fucntion returningAnewObject=():{//this braces means it will return an object}{
//                   return{name:"Ts", price:99}

const User={
    name:"umar",
    email:"u@mail.com",
    isActive:true
}

//function declearation to take object as arg
function createUser({name:string,isPaid:boolean}){}   //{} inside the () means this function needs an object as arg.

createUser({name:"umar",isPaid:true}) // now we can see here this function is accepting object as arg. In this case we can only pass the value name and isPaid, if we want to pass other values to this function it is not acceptable directly but there is other way we can do it.

//  createUser({name:"xyz",isPaid:false, email:xyz@User.com}) //it wont accept here directly.


//The other way is i can make an object and then pass to this function

let newUser={
    name:"abc",
    isPaid:true,
    email:"abc@.com"
}

createUser(newUser)// now m able to pass email.

/*function returning an object
 syntax :    function nameofFunction(arg):{return type as object and what it should return} {function def}
                 return{}  */
                 
function createTicket():{}{
    return{}
}

function createTicket2():{name:string, price:boolean}{
    return {name:"umar",price:true}
}

//If we want dont want to write sepearte parametrs of particular type but make a default keyword which will always be associated with those parameters

type Users={
    name:string,
    email:string
}

function createNewUser(user:Users){}//by default watever is passed to this function should have name n email.

//now if we try to use this function we need to pass name and email of same type as obj.
createNewUser({name:"umar", email:"jkl@.com"})

//if we want some fnctn to use "Users" but also return of type "Users" or any other specified way.
function createNewUser2(user:Users):Users{
    return {name:"",email:""}
}
