// "readonly" is used to make the part to not get modified

type myObj={
    readonly id: number,
    name: string,
}

let newRegisteration: myObj={
    id:122,
    name:"umar"
}

newRegisteration.name="farooq"
newRegisteration.id=43546 //not allowed bcs id is readonly.

//"optional" "?" if any field is not compulsorily required we cn use it.

type checking={
    id:number,
    name:string,
    email?:string
}

let checkingnow:checking={
    id:1222,
    name:"umar"
}         //////this works without "email" evn though the type is "checking"

let checkingnow2:checking={
    id:77474,
    name:"umar",
    email:"abc@xyz.com"
}      //this also works.

//Combining multiple types to one type

type cardNumber={
    cardnumber:number
}

type cardName={
    cardname:string
}

type cardDetails=cardNumber & cardName //thi will hv combination of both cardNumber and cardname
//ex:
let card:cardDetails={
    cardnumber:2345678,
    cardname:"hdfc"
}

//if we want we can add also to the existing

type cardDetails2=cardNumber & cardName &{
    cvv:number                                    //cvv is added 
}

//ex:
let card2:cardDetails2={
    cardnumber:2345678,
    cardname:"hdfc",
    cvv:234
}

