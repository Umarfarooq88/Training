// similar to inheritance , to use the property or function obj into another obj.

const genral_employee={
    calcTax(){
        console.log("Tax rate 10%");
    }
}

const Varun={

    salary:50000,
    calcTax(){
        console.log("Tax is 5%.")
    }
};

Varun.__proto__=genral_employee;//calcTax can now be used using varun.

Varun.calcTax();//Tax rate is 5%