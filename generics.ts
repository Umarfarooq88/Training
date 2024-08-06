const score: Array<number> = []
const names:Array<string> = []

function identityOne(val: boolean | number): boolean | number{      //Return num or bool
    return val
}

function identityTwo(val: any):any{             //take any type and can return anytype
    return val
}

function identityThree<Type>(val: Type): Type {     //returns the same type as type taken(Generics)
    return val
}

// identityThree(true)

function identityFour<T>(val: T): T {           //short form of writing it
    return val
}

interface Bootle{
    brand: string,
    type: number
}

// identityFour<Bootle>({})


//using in frunction and retuirning the value of same type
//used array as input , so the output should also be in the array.
//ex:
function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]                    //Returning in from of array.
}


const getMoreSearchProducts = <T,>(products: T[]): T => {           //<T,> "," is used to show its not JSx instead as generic.
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}



//If we want the value to be of any type and also another value to be specific type 
interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {            //Here "U" should have connection,username and password as input 
    return{
        valOne,
        valTwo
    }
}


//making a generic class 
class Sellable<T>{
    public cart: T[] = []               //Intialize the array with empty array

    addToCart(product: T){                  //this finction will give prod of same type
        this.cart.push(product)             //Keep adding them to array.
    }
}
