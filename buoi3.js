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


const arrPersom = [
    {id : 1 , name : "Teo" , age : 20, },
    {id : 2, name : "Te0" , age : 25, },
    {id : 3 , name : "Teoo" , age : 22, },
    {id : 4 , name : "Tuan" , age : 21, },
    {id : 5 , name : "Lan" , age : 26, },
]
// Yeu cau in ra mang person duoi 25t
const filterArrPerson = arrPersom.filter(function(person){
    if(person.age < 25){
        return true ;
    }
    return false;

}).map(function(object){
    return object.name
})
console.log(filterArrPerson)