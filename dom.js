/* DOM is all about accessing the whole html and css via js and making changes to it. Basically dynamic changes
To access DOM script should be in body not in head ,bcs if its in head it wll get loaded before the document. */

console.log(window.document);// To get the whole HTML
console.dir(window.document);// To show the properties of doc.


let ele=document.querySelector("p");//gets the first para in html
console.log(ele);
//Tag name
ele.tagName;//gives the type of the ele.

//children nodes
let firstdiv=document.querySelector("div");
console.log(firstdiv.children); // shows all the children of the ele.


console.log("div1 first child ",firstdiv.firstChild);//first child  -->h1
console.log("div1 last child",firstdiv.lastChild);//last child   -->h2
console.log("div1 [1] child",firstdiv.children[1]);// particular child -->p

let second_div=document.querySelectorAll("div")[1];
console.log(second_div);

console.log("div2 first child ",second_div.firstChild);//first child  -->h1
console.log("div1 last child ",second_div.lastChild);//last child   -->h2
console.log("div1 [1] child ",second_div.children[1]);// particular child -->p

//inner text
console.log("Inner text of div1 -->",firstdiv.innerText);

//inner HTML
console.log("Inner HTML of div1 -->",firstdiv.innerHTML);






