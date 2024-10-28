// creating an array using array literal notation
// const numbers = [1,2,3,4,5,6,7,8]
// console.log(numbers);

// const fruits = ["apple","banana","guava","papaya"];
// console.log(fruits);
// // we can craete an array of mixed data type as well
// const mixed = ["diya tripathi" , 20 , true , {name : "sarthak tripathi"}];
// console.log(mixed);


// we can also create an array using array constructor
//  const numbers = new Array(1,2,3,4,5,6);
//  console.log(numbers)
//  const fruits= new Array ("banana", "papaya","guava","mango");
//  console.log(fruits);
//  const emptArr = new Array();
//  console.log(emptArr);

// accessing elements from an array
// const fruits= new Array ("banana", "papaya","guava","mango");
// console.log(fruits[0]);
// // accessing last element from an array
// console.log(fruits[fruits.length-1]);
// console.log(fruits.length);
// console.log(fruits[7]);

// let i;
// for(i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// insertion of an elemnt in an array for this we use push method which inserts element the end
// (fruits.push("kiwi"));
// (fruits.push("grapes"));
// console.log(fruits);
// unshift method is used to insert element at starting of an array
// fruits.unshift("tomato");
// fruits.unshift("grapes");
// console.log(fruits);
// console.log(fruits.length);

// insertion of an elemnt at a random index for this we use splice method
// the splice methods adds or remove elemnts from an array at a specified index
// const fruits = ["banana","papaya"]
//  fruits.splice(1,0,"mango");
//  console.log(fruits);
// fruits.splice(0,1,"kiwi","leechi");
// console.log(fruits);

// flter in js

// const numbers =[1,2,3,5,-5,7,-8,-90,-45];
// const postiveNumber = numbers.filter((number)=>{
//     return number>0;
// });
// const negativeNumber = numbers.filter((number)=>{
//     return number<0;
// })
// const evenNumber = numbers.filter((value)=>{
//     return value%2==0;
// })
// console.log(numbers);
// console.log(postiveNumber);
// console.log(negativeNumber);
// console.log(evenNumber);

// filter method on array of objets
// const products = [
//     {
//         id:1,
//         name:"Bournvita",
//         price:90
//     },
//     {
//         id:2,
//         name:"product 2",
//         price:10
//     },
//     {
//         id:3,
//         name:"product 3",
//         price:30
//     },

// ];
// const expensiveProduct = products.filter((product)=>{
//    return product.price>15;
// })
// console.log(expensiveProduct);

// indexof()method in js
// let primary = ["red","yellow","blue"];
// let secondary = ["violet","orange","pink","brown","white","black"];
// console.log(primary.indexOf("red"));
// console.log(secondary.indexOf("pink"));

// // includes() method gives boolean value it will return true or false
// console.log(primary.includes("green"));
// console.log(primary.includes("red"));

// // concate()method in js
// let colors = primary.concat(secondary);
// console.log(colors);
// console.log(primary);
// console.log(secondary);

// // reverse method in js
// console.log(primary.reverse());
// console.log(primary);

// let output = secondary.filter((color)=>{
//     return color.length<5;
// })
// console.log(output);

//  slice()method is used to copy a portion of array 
// slice method do not make any chnages in original array instead it returns a copy of an array

let colors = ["red","green","yellow","blue","orange","pink","white"];
// console.log(colors.slice(2,6));
// console.log(colors.slice(-2));
// console.log(colors.slice());

// splice()this method is used to remove/replaces/add elements in place
// spice method makes changes in original array 
// syntax(startingindex,deleteCount,item1,item2...);
// if we give only sarting index and do not pass any other para then it act as slice method
// console.log(colors.splice(3));
// console.log(colors);
// console.log(colors.splice(1,1,"pink","white"));
// console.log(colors);
// console.log(colors.splice(1,3));
// console.log(colors);
// console.log(colors.splice(1,2,"yellow"))
// console.log(colors);

// sort()method in array 
// this is easily used in string or char type array here it return ans in alphabetically order
// but sort method in no. dosent give the feasible ans that we want instead of that it converts the no. in string and than give ans acc
// let cars = ["toyota","bmw","xuv","gwagon","audi"];
// console.log(cars.sort());
// let chars = ['a','e','w','f','b'];
// console.log(chars.sort());

// let nums = [100,30,40,25,78,90,45];
// console.log(nums.sort());

// pracice qs
let month = ["januaray","july","march","august"];
// month.shift();
// month.shift();
// // console.log(month);
// month.unshift("june");
// month.unshift("july");
// console.log(month);

// using splice method
// month.splice(0,2,"july","june");
// console.log(month);

// let language = ['c','c++','html','javascript','python','java','c#','sql'];
// console.log("index of javascript before reverse of an array: " , language.indexOf("javascript"));
// console.log(language.reverse());
// console.log(language);
// console.log("index of javascript after reverse of an array: " , language.indexOf("javascript"));
// console.log(language.reverse().indexOf("javascript"));
 
// game
// let game = [['X',null,'O'],[null,'X',null],['O',null,'X']];
// // console.log(game);
// game[0][1]='O';
// console.log(game);

// assignment ques
// wap to get first n elements from an array
// let nums = [7,8,9,4,-3,6,8,0,2,-78];
// // let n = 6;
// // let output = nums.splice(0,n);
// // console.log(output);
// let n=6;
// let output = nums.slice(nums.length-n);
// console.log(output);

// string is blank or not
// let str = "  ";
// let output = str.trim().length;
// if(output==0){
//     console.log("string is empty");
// }
// else{
//     console.log("string is not empty");
// }
// to check string in lower case or not
// let str = "ApnaCollege";
// let idx = 5;
// if(str[idx]==str[idx].toLowerCase()){
//     console.log("string is in lower case");
// }
// else{
//     console.log("string is not in lower case");
// }
// let str = "    hello welcome to my show    ";
// console.log(str);
// console.log(str.trim());

// program to check whether a string is exist in array or not
// const cars = ["audi","bugati","gwagon","toyota"];
// console.log(cars.includes("thar"));

// let colors = ["green","blue","white","yellow"];
// function reverseArray(colors){
//     return colors.reverse();
//   }
//   let output = reverseArray(colors);
//   console.log(output);

