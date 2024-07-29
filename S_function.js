function add(num1,num2){
    result=num1+num2;
    console.log(result);
}

add(7,5);
add(20000,1223);

///Vowel func
let count=0;
function vowel(str){
    for(const val of str){
        console.log(val);
        if(val==="a"||val==="e"||val==="i"||val==="o"||val==="u"){
            count++;
        }
    }
    console.log(count);
    count=0;
}
vowel("apple");//2

