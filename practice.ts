function add(num:number){ //restricts the funtion to take only number
    console.log(num+2);

}
add(10);

function signup(name:string,id:number,isPaid:boolean){} //restricts all the parameters of function
signup("Umar",2,true);


let logInUser = (name:string):boolean=>{ // restricts function to return only boolean value.
    return true;
}

const paymentStatuses=["accepted", "rejected", "in process"]  
paymentStatuses.map(paymentStatuses=>{                              //here the Ts will autmatically assigned the map return type to be whatever is ther in array.As of now it is string if it is changed to number ,Ts will automatically asigned the return fucntion of the map to be number, this way we dont have ti define what type of data map has to return.
    return `This is the satus"${paymentStatuses}`
})

//we can explicitly tel which type to return
paymentStatuses.map((paymentStatuses):string=>{                              
    return `This is the satus"${paymentStatuses}`
    // return 2         //not valid bcs map type is restricted to string here.
})

let newerror=(err:string):void =>{ //use of "void", err mssg functions dont return anything.
    console.log(err)
}

let fail=(err:string):never=>{// we can also use "never" bcs fail type of error mssgs dont return anything, just throws exception or stop exectuing.
    throw new Error(err);
}



export{}