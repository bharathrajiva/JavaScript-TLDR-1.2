let name = 'Boris';
let age = 25;
let isApproved = false;
let firstName = undefined;
let selectedColor = null;
let borisCool;
console.log(typeof "Hello World", isApproved);
let person = {name: 'Boris', age: 25};
person.name='John';
console.log(person.name);
console.log(person);
let selectedColors = ['red', 'blue'];
console.log(typeof selectedColors[0]);
function Boris(){
    //document.write("HEllo World");
}
function greet(name, lastName){
    //document.write("Hello " + name + " " + lastName);
}
greet("Boris", "K");
function square(number){
    return number * number;
}
//document.write(" "+square(2));
console.log(square(2));
let array = new Array(1,23,4,5,6,7,8,9,0);
// let a = [1,2,3,4,5,6,7,8,9,0];
// console.log(typeof array[0], typeof a);
const interestRate = 0.3;
console.log(interestRate);
console.log(2 ** 4);
var x =10;

console.log(--x);
let points = 1100;
let type = points > 100 ? 'gold-digger' : 'silver';
console.log(type);
console.log(null |  "Hello Boris");
let readpermission=4;
let writepermission=2;
let executepermission=1;
let mypermission=0;
mypermission=readpermission | writepermission;
let message=(mypermission & readpermission) ? 'yes' : 'no';
console.log(message);
let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;
console.log(a);
console.log();
for(let i=0; i<5; i++){
    if(i%2!==0) console.log(i);
}
let i =0;
// while(i<=5){
//     console.log(i);

// }
const k ={
    name: 'Boris',
    age: 25
};
for(let key in k){
    console.log(key, k[key]);
}
const colors = ['red', 'green', 'blue'];
for(let index in colors){
    console.log(index, colors[index]);
}
for (let color of colors){
    console.log(color);
}
// let j =0;
// while(j<=5){
//     if(j%2===0) {
//         console.log(j);
//     j++;
    
//     }
//     console.log(j);
// }
function landscape(width,height)
{
    return (width > height) ? "LandScape : True" : "LandScape : False" ;
}
console.log(landscape(10,20));
const output = fizzbuzz("3adf");
console.log(output)
function fizzbuzz(input){
    if(typeof input != 'number') return "Not a Number"
    if(input%3===0 && input%5===0)console.log("FizzBuzz");
     if(input%3==0)console.log("Fizz");
     if(input%5 ===0)console.log("Buzz");
     return input;
}

function checkspeed(input){
    let points=0;
    if(input<75)return "Ok";
    if(input>70){
        let k = input-70;
        points = Math.floor(k /5);
        if(points>12)return "License \nSuspended";
        return points
}}
function Intiate(input){
    let usestate =1;
    for(let k in a){
        console.log("ABysss");
        
    }

}
console.log(checkspeed(74));

console.log(showNumbers(10));
function showNumbers(input){
    for(let i =0;i<input+1;i++){
    //     if(i%2===0)console.log(i +" Even")
    //     else console.log(i +" Odd")
    // }
    const message=(i%2===0) ? ' EVEN' : ' ODD';
    console.log(i,message);
}
}

function countTruthy(array){
    let numberofTruthyValues = 0,numberofFalsyValues = 0;
    for(let i in array){
        const tracker = array[i] ? numberofTruthyValues +=1: numberofFalsyValues +=1;
    }
    console.log("Number Of Truthy Values : ", numberofTruthyValues,"\nNUmber Of Falsy Values : ",numberofFalsyValues);


}
let a1 = new Array('Boris',undefined,null,NaN,1,"f24234",123213);
countTruthy(a1)
const movie = {
    title :"",
    boxoffice:123123,
    author:'',
    director:''
}
function showProperties(obj,type){
    for(let i in obj){
        if(typeof obj[i] === type){
        console.log(i,obj[i]);
    }}
}
showProperties(movie,'number');
console.log(sum(15))
function sum(input){
    let totalSum=0;

    for(let i =3;i<=input;i++)
        if(i%3===0 || (i%5===0)) totalSum += i;
    return totalSum;
}
const marks = [80,80,50];
function calcualteGrade(marks){
    let GRADE ="F";
    let average = 0;
    let total =0;

    for(i of marks){
    total +=i;}

    average = total/(marks.length)
    console.log(total,average)
    if(average>89) return GRADE = "A";
    if(average>79) return GRADE = "B";
    if(average>69) return GRADE = "C";
    if(average>59) return GRADE = "D";
    return GRADE ;

}
console.log(calcualteGrade(marks));

showStars(5);

function showStars(input){
    let pattern =''
    for(let i =0; i<input;i++){
        pattern += '*'
        console.log(pattern)
    }
}

// showPrimes(20);

// function showPrimes(input){
//   for(let number=2 ;number<=input;number++){
//       let isPrime = true;
//       for(let factor=2;factor<number;factor++){
//           if(number%factor===0){
//               isPrime = false;
//               break;
//           }
//       }
//       if(isPrime)console.log(number);
//   }
     
// }
function showPrimes(input){
    let isPrime = new Array(input+1).fill(true);
    isPrim[0],isPrime[1]=false;
    for(let i=4;i<=input;i+=2){
        isPrime[i]=false;
    }
    for(let i=3;i<=Math.sqrt(input);i+=2){
        if(isPrime[i]){
            for(let j=i*i;j<=input;j+=i){
                isPrime[j]=false;
            }
        }
    }
    for (let i = 0; i < isPrime.length; i++) {
        if(isPrime[i])console.log(i);
        k
    }}