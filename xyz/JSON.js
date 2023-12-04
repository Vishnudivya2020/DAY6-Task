//JSON iterate over all for loops.

json='{"name":"Divya","age":27,"education":"Msc"}'


let person=(JSON.parse(json));
console.log(person);

console.log(Object.entries(person).length);

//for loop.

for(let index=0;index<Object.entries(person).length;index++){
    console.log(Object.entries(person)[index]);
}

//for of loop for keys.
for(let key of Object.keys(person)){
    console.log(person[key]);
}
//for in loop for entries.
for(let item of Object.entries(person)){
    console.log(item[0],item[1]);
}
//for in loop.
for(let index in person){
    console.log(person[index]);
}
//forEach loop.
Object.entries(person).forEach((value)=>{
    console.log(value);
});
