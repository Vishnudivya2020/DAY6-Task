let object1={name:"person1",age:5};
console.log(JSON.stringify(object1));

let object2={age:5,name:"person1"};
console.log(JSON.stringify(object2));

let obj1=JSON.parse(JSON.stringify(object1));
console.log(obj1);
let obj2=JSON.parse(JSON.stringify(object2));
console.log(obj2);
if(obj1==obj2){
    console.log("It's Equal");
}else{
  console.log("It's UnEqual"); 
}





