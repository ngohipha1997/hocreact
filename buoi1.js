

// 3 : object
// mutable , inmutable 
//const t = {
   // name :"Nguyen Van Teo",
   // age : 10

const { count } = require("node:console")

//}
//console.log(t.name)
//console.log(t['name'])

// 4 : Array 
//cach duyet du lieu theo index , Object duyệt theo key
//const arrNames = ["abc","gbd"]
//console.log(arrNames[0]∂

//5 : Toan tu  
//let a = 5 
//let b = 10 
//let c = a++ - b-- - --a - --b + --b - --a + a-- + b--  // bieu thuc 
//console.log(a)

//6 function 
//function showName(name){
  //  console.log(name)
//}
//function tinhTong(a,b){
//    return a +b 
//}

//console.log(showName("T"))
//let a 
//const KetQua = tinhTong(5,a)
//console.log(KetQua)

// 7 : object method
//const t = {
  //  name: "nguyen van teo",
   // age : 10,
    //showInfo : function (){
      //  console.log("Ten : " + this.name + ", Tuoi : " + this.age)
    //}
//}
//t.showInfo()

// 8 : Phep so sanh 
let a = 5 
let b = 5
// 6 gia tri bang false  : false , null , '' , NaN  , undefinded, 0
//bieuthuc ? true : false
//if (a < b ){
   // console.log(-1)
    
//}elseif (a == b ){
    //console.log(0)
//}else{ 
    //   console.log(1) 
//}

// a > b ? console.log("A lon hon b ") : console.log("a be hon hoac bang b ")

 //9 vong lap 
    const arrNames = ["Teo" , "Ti","Tun","Tuan"]
    for (let i = 0 ; i < arrNames.length ; i++ ){
       console.log(arrNames[i])
   }

   // viet phuong thuc kiem tra so nguyen to
   //so input la so nguyen to , so inpt khong la so nguyen to 

    function kiemtraSoNguyenTo(number){
        if(number <2 ){
        console.log("khong phai so nguyen to ")
        return
        }
        for(let i = 2 ; i <= number ; i++  ){
            if(number % i == 0){
                count++
            }
        }
        if (count == 1){
            console.log("La so nguyen to ")

        }else{
            console.log("khong phai la so nguyen to ")
        }
    }