//Interface is similar to other languages interface, here we can have var and methods which must be applied when using the interface

interface User {
  readonly id: number;
  name: string;
  email?: string;
  start(): string; // this mean sthe function should always be implemented when using interface and it should return "string" type
  mid(name: string): number; //this means the arg shld be of string type and shld return number.
  end(name: string, vlaue: number): number; //this means fnctn should have name and value as arg and should return a number.
}

const umar: User = {
  id: 234,
  name: "umar",
  start: () => {
    return "start function returned";
  },
  mid(given: "hi") {
    //   mid: (given: "hi") => {
    return 3;
  },
  end: (given: "hi", take: 34) => {
    return 234;
  },
};
