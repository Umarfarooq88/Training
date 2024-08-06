class User {
  protected _courseCOunt = 1; //"protected"  can only be accessed in class and child class. If "private" can only be accessed in self class.  
  readonly city: string = "Bangalore";

  constructor(public email: string, public name: string) {}

  //getter
  get getAppleMail(): string {
    return `The Apple maid id is ${this.email}`;
  }
  get getCourseCount(): number {
    return this._courseCOunt;
  }
  //setter
  set setCourseCount(noOfCourse) {
    this._courseCOunt = noOfCourse;
  }
}

class SubUser extends User{
    isPaid:boolean=true
    changeCourseCount(){
        this._courseCOunt=2
    }
}

