// // map "Quan Ly Tap Trung "

// //  vd Map
// function namesOnly(arr) {

//     const newArr = arr.map(function(person){
//         return person.name
//     })
//     console.log(newArr)

// }

// namesOnly([
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },
//   {
//     name: "Eric Jones",
//     age: 2
//   },
//   {
//     name: "Paris Hilton",
//     age: 5
//   },
//   {
//     name: "Kayne West",
//     age: 16
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100
//   }
// ])
// // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 15 : HAM FILTER 
// const arrNames = ["Taa","Bac","ccc","Taae" ,"DASC"]

// const newArrNames = arrNames.filter(function(name){
//  if(name.length <= 3 ){
//      return true
//  } 
//  return false
// })

// console.log(newArrNames)


// const arrPersom = [
//     {id : 1 , name : "Teo" , age : 20, },
//     {id : 2, name : "Te0" , age : 25, },
//     {id : 3 , name : "Teoo" , age : 22, },
//     {id : 4 , name : "Tuan" , age : 21, },
//     {id : 5 , name : "Lan" , age : 26, },
// ]
// // Yeu cau in ra mang person duoi 25t
// const filterArrPerson = arrPersom.filter(function(person){
//     if(person.age < 25){
//         return true ;
//     }
//     return false;

// }).map(function(object){
//     return object.name
// })
// console.log(filterArrPerson)

//phuong thuc find ??


//16 ham reduce
//  const arrNums =[1,2,3,4,5]

//  const newArrNums = arrNums.reduce(function(accumulator,currentValuve){
//      // lan 1 : accumulator : 0 bang gia tri duoi (value)
//      // currentValue : 1 vao phan tu dau tien 
//      //return ve 5 
//      // lan 2:
//      // accumuLartor : 5 
//      // currentvalue : 2 
//      //return 7
//      // accumuLartor : 7 
//      // currentvalue : 3 
//         return accumulator +currentValuve
//  },0)

//  console.log(newArrNums)

// const arrPersom = [
//     {id : 1 , name : "Teo" , age : 20, },
//     {id : 2, name : "Te0" , age : 25, },
//     {id : 3 , name : "Teoo" , age : 22, },
//     {id : 4 , name : "Tuan" , age : 21, },
//     {id : 5 , name : "Lan" , age : 26, },
// ]
// // conts newArr = arrPersom.reduce(function(accumulator ,currentValue){
//     if (currentValue.age < 25){
//         accumulator.push(currentValue.name);
//     }
//     return accumulator
// },[])
// console.log(newArr)

// function countOccurrences(arr){
//  const object = arr.reduce(function(accumuLator,currentValue){
//         if(currentValue in accumuLator){
//             accumuLator[currentValue]++
//         }else{
//             accumuLator[currentValue] =1 
//         }

//  },{})
//  console.log(object)
// }
// countOccurrences(["a","b","c","b","a","a"]);
// //{a:3 , b:2 , c:1}
//16 ham sort java
// const arrNums = [1,10,2,20,14,5,6]


// console.log(arrNums.sort(function(a,b){
//     return b - a 
// }))
// const arrChar =["a" ,"A" ,"B" ,"c","d","D"]

// console.log(arrchar.sort())


//18 function scope {}
// let a = 5
// function setValue (){
//     let a = 10
//     console.log(a)
// }
// setValue()
// console.log(a)

// 19 arrow function
const arrNums = [1,2,3,4,5];
const newArr = arrNums.map(function(number){
    return number *2 
})
const newArr2 = arrNums.map((number) => {
    return number * 2
})
console.log(newArr2)