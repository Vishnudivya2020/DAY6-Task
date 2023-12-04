//a.print odd number in on array.

let array=[3,4,5,8,2,12,15,17,20];

function odd(){
    
    let odd=array.filter(array=>(array%2==1))
    console.log(odd);
}
odd()

//OUTPUT:3 5 15 17


//b.convert all the strings to title caps in a string array

const str = 'i have learned something new today';

//split the above string into an array of strings 
//whenever a blank space is encountered

const arr = str.split(" ");

//loop through each element of the array and capitalize the first letter.
function caps(){

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ");
console.log(str2);
}caps()

//OUTPUT:I Have Learned Something New Today.

//c.sum of all number in an array.

let ar = [4, 8, 7, 13, 12]

//creating variable to store the sum.

function sum(){
    let sum = 0;

    //Running the for loop.

    for (let i=0;i<ar.length;i++){
        sum +=ar[i];
    }

    console.log("sum is"+sum)
    }
   sum()
   //OUTPUT: 44

   //Return all the prime number in an array.

   let count =0
   function prime(){
    let i,j
    for(j=2;j<=50;j++){
    for (i=1;i<=j;i++){
        if(j%i==0)
        count++
    }
    if(count==2)
    console.log(j)
    count=0

    }
    }
   prime()
   //OUTPUT: 2 3 5 7 11 13 17 19 23 29 31 37  41 43 47

   //e.Return all the palindromes in an array.

   function ispalindrome(){
    var myArray = ['did','madam','honda','malayalam'];
    var arr = myArray.filter(function(c,d){
        var palindrome=c.split('').reverse().join('');
        if(c==palindrome){
            console.log(myArray[d]);

        }
    })
   }
   ispalindrome()