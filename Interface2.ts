//If we want to include more fields to existing interface we can reopen interface ,it is called reopening of interface

interface product {
  name: string;
  color: string;
}

//if we want to add company to it

interface product {
  brand: string;
}

const apple: product = {
  name: "apple",
  color: "red",
  brand: "kashmiri",
};

//Exteding the interfaces
interface exporter extends product {
  exporterName: string;
}

//ex:
let cashew: exporter = {
  name: "cashew",
  color: "red",
  brand: "kashmiri",
  exporterName: "DHL",
}; //here we used "expoerter" interface but also used proprty of "product" interface.
