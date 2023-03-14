/*
var x = 10;
if (x===10){ //? เช็คทั้งชนิดข้อมูลและค่า
    var y = 500;
    console.log("y = ",y);
}
console.log("y = ", y); //? var ยังแสดงได้เลยไม่ใช้ var
*/
//* var มีข้อผิดพลาดเพราะมันข้ามขอบเขต =============================
//*=============================================================
/*
const x = 50;
//x = 100;
console.log(x);
*/
//* const เปลี่ยนค่าไม่ได้ =========================================
//*=============================================================
/*
fullName = (fname, lname) => fname+" " + lname;
console.log(fullName("chanyut", "dongthana"));
setAge = (age) => `อายุ = ${age}`;
console.log(setAge(10));*/
//* Arrow function =============================================
//*=============================================================
/*
const username = "chanyut";
const age = 20;
const address = "อุดรธานี";
const user = {
    username: "chanyut",
    age: 25,
    address: "อุดรธานี"  
}
console.log(user.username);

const users = {
    username: username,
    age: age,
    address: address  
}
console.log(users.username);

const users1 = {
    username,
    age,
    address  
}
console.log(users1.username);
*/
//* object =====================================================
//*=============================================================
/*
let users = "dgdfgd";
const address = `chanyut dongt //? การใช้สัญลักษณ์ลูกน้ำ MultiLine
hana ${users}` //? การใช้ Interpolation 
console.log(address);
*/
//* MultiLine String Interpolation =============================
//*=============================================================
/*
const newArray = [200, 300];
const data = [...newArray, 10, 20,...newArray]; //? การนำ Array มาต่อกัน
let x = [20,40,80]; 
data.push(...x); //? ต้องการให้ต่อกันใน list เดียว
data.push(60,70,80); 
console.log(data);
*/
//* Spread Operator ============================================
//*=============================================================
/*
// sumtation = (x, y) => {
//     return x+y;
// }
// sumtation = (x, y, z) => {
//     return x+y+z;
// }
// console.log(sumtation(50,100)); //? ทำให้ค่าเป็น NaN จึงต้องระบุให้ครบ
// console.log(sumtation(50,100,100));

summation = (...number) => { //? ...parameter เป็น Array อยู่แล้ว
    let total = 0;
    for(let i of number) total += i;
    return total;
}
console.log(summation(10.20,14.30))
*/
//* Rest Parameter =============================================
//*=============================================================
/*
//todo Array
const colors = ["เขียว", "แดง", "เหลือง"];
// const [green, red, yellow] = colors;
const [,,yellow] = colors; //? ต้องงการแค่สีเหลืองให้อ้างอิงลำดับ
// console.log(green, red, yellow);
console.log(yellow);

//todo object 
const product ={
    productName: "computer",
    price: 3000,
    stock: 10
}
const {productName:pro, price:pri, stock:sto} = product;
console.log(pro,sto); //? สามารถแสดงผลโดยไม่ต้องอ้างอิงตำแหน่งเหมือน Array
// const {productName, price, stock} = product; //? ถ้าตัวแปลชือเหมือนกันให้ตั้งอันเดียวได้เลย
// console.log(productName, price, stock);
*/
//* Destructuring(การสลายโตรงสร้าง) =============================
//*=============================================================
/*
getDataCustomer = (customerName, customerAddress = "Bangkok") => {
    const address = `Customer name : ${customerName}
Address : ${customerAddress}`;
    return address;
}
console.log(getDataCustomer("chanyut"));
*/
//* Default Parameter ==========================================
//*=============================================================
/*
const data = [100,200,300];
const result = data.join(); //? join คือการทำให้เปลี่ยนเป็น String
//? สามารถใช้สัญลักษณ์ใน join("*"); เพื่อขั้นระหว่าง Array ได้
console.log(typeof(data));
const result0 = data.join("***");
const result1 = data.toString();
console.log(typeof(data));
console.log(result);
console.log(result0);
console.log(result1);
console.log(data); //? ยังเป็น object อยู่

const newData = [400,500];
const allData = data.concat(newData);
console.log(allData);
*/
//* function ภายใน Array ======================================
//*=============================================================
/*
const data = [10,20,30]
data.push(500) //? push คือการต่อท้าย data
console.log(data)
data.push(1000)
console.log(data)
data.push(...[100,200,3000,400])//? ...คือการกระจาย data ต่อท้ายโดยที่ไม่อยู่ในรูป Array
console.log(data)
*/
/*
const data1 = [10,20,30]
data1.pop()
console.log(data1.pop()) //? คือการเลือก data1 ตัวสุดท้ายออก
console.log(data1)
*/
/*
const data2 = [10,20,30,40]
data2.shift() //? คือการเลือก data1 ตัวแรกออก
console.log(data2)
data2.unshift(100) //? การเพิ่มสมาชิกเข้าตัวแรก
console.log(data2)
*/
//* push, pop, shift, unshift ==================================
//*=============================================================
/*
const data = [10,20,30,40,50]
const newData = data.splice(1,3) //? คือการเลือก data เรากำหนด
console.log(newData)
console.log(data)
//! แทรกข้อมูลเข้าได้อีกด้วย
const data1 = [10,20,30,40,50]
console.log(data1)
data1.splice(2,2,999) //? ตัวที่ 3 คือการแทรกข้อมูลแทนที่ตัวที่ถูกลบ
console.log(data1)
*/
/*
const data = [10,20,30,40,50]
console.log(data)
const newData = data.slice(1,3) //? การดึง data ออกมาโดยที่ตัวสุดท้ายต้องระบุ -1
console.log(newData)
*/
//* Array Splice & slice =======================================
//*=============================================================
/*
const data = [10,20,30,40,50]
//todo .forEach
let sum = 0;
data.forEach(i => { //? คือการดึง data แต่ละออกมาใช้ break, continue ไม่ได้
    sum += i;
    console.log(`${sum}`)
})
//todo .for of
for(const i of data){
    console.log(i)
}
*/
//* ForEach, for of ============================================
//*=============================================================
/*
//todo indexOf()
const data = [10,20,30,40,50,60]
const a = data.indexOf(40) //? ค้นหาเลข index ข้อมูลที่เราต้องการค้นหา
console.log(a)

//todo find()
const b = data.find(i => i<50)
console.log(b)
//todo findIndex()
const c = data.findIndex(i => i === 60)
console.log(c)
*/
//* ค้นหาข้อมูล Array ============================================
//*=============================================================
/*
const data = [10,20,30,40,50,60]
const x = data.map((Element,i) => {return Element+i})
console.log(x) //? สามารถนำ index มาใช้ได้
const a = data.map(Element => Element*2) //? การ map สร้าง Array ก้อนใหม่
console.log(a)

// const b = []
// for(let i = 0; i<data.length; i++){
//     b[i] = data[i]*2
// }
// console.log(b)

const data1 = [
    {
    day: "01/06/2564",
    weather: "hot",
    temp: 27
    },
    {
    day: "02/06/2564",
    weather: "clown",
    temp: 15
    },
    {
    day: "03/06/2564",
    weather: "rain",
    temp: 19
    },
]
const result = data1.map(element => element.weather)
console.log(result)
*/
//* Array Map ==================================================
//*=============================================================
/*
const data = [10,20,30,40,50]
const data1 = data.filter(e => e > 20)
console.log(data1)

const data2 = [
    {name: "Chanyut", lastName: "Dongthana", Age: 21},
    {name: "Chanyut1", lastName: "Dongthana1", Age: 22},
    {name: "Chanyut2", lastName: "Dongthana2", Age: 23}
]

const newData = data2.filter(e => e.Age > 21).filter(e => e.name==="Chanyut1")

console.log(newData)
*/
//* Array Filter ===============================================
//*=============================================================
/*
const data = [10,20,30,40,50]
const mapData = data.map(e=>100)
console.log(mapData)
const filterData = data.filter(e=> e>20)
console.log(filterData)

const summation = data.reduce((value, e) => {
    const total = e + value
    return total
}, 0)//? กำหนดค่า้ริ่มต้น

console.log(summation)

const cart = [
    {name: "กระเป๋า", price: 500},
    {name: "หนังสือ", price: 200},
    {name: "กล้อง", price: 1500}
]
const values = cart.reduce((value, e) =>{
    const total = e.price+value
    return total
}, 0)
console.log(values)
*/
//* Array Reduce ===============================================
//*=============================================================












