/*
document.write("<h1>KUYYAI.com</h1>");
document.write("<p>jdfkgnjdkfnghjwefsdnjfnew</p>");
alert("หำใหญ่มาก");
console.log("ฝึกต่อไป");
console.error("virus");
console.warn("not found");
const fname = "Chanyut"; //สร้างตัวแปลไม่มีการกำหนดค่า
let $age = "21", lname = "Dongthana";
lname = "KLFJFLK"

console.log(fname);
document.write(lname);
document.write("<br>อายุ: " + $age);*/
//*ใช้คำสั่งแสดงผลต่างๆ ===========================================
//*============================================================

/*let money = 500;
var price = 99.033;
let massage = "chanyut";
let value = "20.15";
let checkname = false;
checkname = true;
console.log(typeof(money));
console.log(typeof(price));
console.log(typeof(massage));
console.log(typeof(value));
console.log(typeof(checkname));*/
//*เช็ค type ของชนิดข้อมูล =======================================
//*============================================================

/*let prices = parseFloat(price); //parsInt(); 
console.log(typeof(prices));
console.log("(value)string to number: "+typeof(parseInt(value)));

let moneys = money+""; //number to string
console.log(typeof(moneys)); 
console.log(typeof(prices.toString()));*/ 
//*แปลงชนิดข้อมูล ===============================================
//*============================================================

/*let number0 = new Array(); //ประกาศวิธี 1
number0[0] = 10;
number0[1] = "20";
number0[2] = 30;
number0[3] = number0[2].toString();
console.log(number0);
for(let i=0;i<number0.length;i++){
    console.log(number0[i]);
    console.log(typeof(number0[i]));
}

let number1 = new Array(10,"20",30); //ประกาศวิธี 2
console.log(number1);
console.log(typeof(number1));

let number2 = [10,20,30]; //ประกาศวิธีที่ 3
let number3 = [];
number3[0] = 10; 
number3[1] = 20; 
number3[2] = 30; 
console.log("number2: "+number2);
console.log("number3: "+number3);*/
//*ชนิดตัวแปล Array=============================================
//*============================================================

/*console.log("บวก: ",5+10);
console.log("ลบ: ",5-10);
console.log("คูณ: ",5*10);
console.log("หาร: ",5/10);
console.log("หารเอาเศษ: ",5%10);
console.log("ยกกำลัง: ",5**2);*/
//*Operator และ Operand========================================
//*============================================================
/*
let a = 5, b = 10;
let checks = true;
//let check = (a == b);
// console.log(check);
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log("การเปลี่ยนจาก true เป็น false: ",!checks);*/
//*Operator เปรียบเทียบ =========================================
//*============================================================
/*
let score = 70;//โปรแกรมตัดเกรด &&, ||, !
if(score >= 80){
    console.log("A");
}
else if(score < 80 && score >= 75){
    console.log("B+");
}
else if(score < 75 && score >= 70){
    console.log("B");
}
else if(score < 70 && score >= 65){
    console.log("C+");
}
else if(score < 65 && score >= 60){
    console.log("C");
}
else if(score < 60 && score >= 55){
    console.log("D+");
}
else if(score < 55 && score >= 50){
    console.log("D");
}
else{
    console.log("F");
}*/
//*Operator ทางตรรกศาสตร์=======================================
//*============================================================
/*
let a = 10, b = 10, c = 10, d = 10;
console.log("ค่าปัจจุบัน a: ",a);
console.log("ค่าบวก Prefix ++a: ",++a);
console.log("ค่าปัจจุบัน b: ",b)
console.log("ค่าบวก Postfix b++: ",b++);

console.log("ค่าปัจจุบัน c: ",c);
console.log("ค่าลบ Prefix --c: ",--c);
console.log("ค่าปัจจุบัน d: ",d)
console.log("ค่าลบ Postfix d--: ",d--);*/
//*Operator ++a, a++, --a, a-- ================================
//*============================================================
/*
let x = 10;
 
for(let i=1; i<5; i++){
    x += i;
    console.log("ค่า += , x["+i+"]= ",x);
}
console.log("");
x = 10;
for(let i=1; i<5; i++){
    x -= i;
    console.log("ค่า -= , x["+i+"]= ",x);
}
console.log("");
x = 10;
for(let i=1; i<5; i++){
    x *= i;
    console.log("ค่า *= , x["+i+"]= ",x);
}
console.log("");
x = 10;
for(let i=1; i<5; i++){
    x /= i;
    console.log("ค่า /= , x["+i+"]= ",x);
}
console.log("");
x = 10;
for(let i=1; i<5; i++){
    x %= i;
    console.log("ค่า %= , x["+i+"]= ",x);
}*/
//*Compound Assignment +=,-= ==================================
//*============================================================
/*let score = 40;
let pass;

// if(score>50){
//     pass = "pass";
// }else{
//     pass = "not pass"
// }
// console.log(pass); //รูปแบบทั่วไป

pass = score > 50 ? "pass" : "not pass"; //ลดรูป
console.log(pass);*/
//*if...else แบบลดรูป ==========================================
//*=============================================================
/*
let status = 40 //? 0 ปิดไฟ // 1 เปิดไฟ
let light;

switch(status){
    case 40 : light = "เปิดไฟ";
        break;
    case 1 : light = "ปิดไฟ";
        break;
    default : light = "ไม่พบข้อมูล";
}
console.log(light);*/
//*Switch Case รูปแบบ ==========================================
//*=============================================================
/*
let x = 10;
let i = 0;
while(i < x){
    console.log("1");
    if(i == 5){
        break; //? คำสั่ง break
    }
    i++;
}
//! =============== While loop
for(let i = 0; i<x; i++){
    console.log(i);
    if(i==5){
        continue; //? คำสั่ง continue 
    }
    console.log("chanyut");
}*/
//! =============== for loop
/*
let count = 5;
let n = 0;
do{
    console.log("Show");
    n++;
}while(n<count); //todo อีกกรณี

do{
    console.log("Show");
    n++;
}while(n>count);*/
//! =============== Do...while loop
//*Loop  =======================================================
//*=============================================================
/*
let a;
console.log(a); //? Undefined

let b = null;
console.log(typeof(b));

if(!b){ //? null
    console.log("b is null: ",b);
}else{
    console.log("b is not null: ",b);
}

let x = 10-"a"; //? NaN
console.log(x);*/
//*Null, Undefined, NaN ========================================
//*=============================================================
/*
function showName(){
    console.log("chanyut");
    document.write("chanyut");
}
function alertName(){
    alert("chanyut");
    document.write("<h1>Dongthana</h1>");
}
//! function ไม่มีการรับค่า
function plusNumber(x,y){
    document.write(x+y);
}
//! function มีการรับค่า
function getIP(){
    return "127.186.16.4"
}
let ipAdress = getIP();
console.log(ipAdress);
//! function มีการ return ค่า
function setSalary(salary){
    let bonus = 1000;
    return salary + bonus;
}
let total = setSalary(15000);
console.log(total);
//! function มีการรับค่า และ return ค่า
function definedDefault(salary, name = "chanyut"){
    return name+" "+salary;
}
console.log(definedDefault(15000));
//! function มีการกำหนดค่าเริ่มต้น และ return ค่า*/
//*Function ========================================
//*=============================================================
/*
let gVariable = 100; //? global variable

function someThing(){
    let a = 10; //? Local variable
}*/
//*local, global variable ขอบเขต ===============================
//*=============================================================
/*
function display(name){
    console.log(`Myname ${name}`); //? ``
 }
 display("chanyut")*/
//*การแดงผลโดยใช้ ${parameter} ===============================
//*=============================================================
/*
function display(name){ //? แบบทั่วไป
    return name;
}
const display2 = (name) => name //? เขียนแบบสั้น
console.log(display2("chanyut"));

let name2 = display2("chanyut");
console.log(name2);
name2 = 11;
console.log(name2);*/
//*การเขียน function แบบสั้น ===============================
//*=============================================================
/*
const introducer = (name, shirt, product) => {
    const person = { //?  การเขียน object
        name: name,
        shirt: shirt,
        product: product,
        displayProduct:function(){
            return `product that me bought is ${this.product}`; 
        }
    }

    const intro = `Hi my name is ${person.name} and the color of my shirt is ${person.shirt} and ${person.displayProduct()}`; //? รูปแบบ string

    return intro;
}
console.log(introducer("chanyut", "red", "game"));
*/
//*การเขียน object ===============================
//*=============================================================
/*
let colors = ["red", "write", "blue", "yellow"];
let number = [20,300,50,40,60];
console.log(colors.sort()); //? เรียงไปหน้า
console.log(number.sort()); //? sort ไม่ได้
console.log(colors.reverse()); //? เรียงกลับหลัง 
*/
//*การเรียงลำดับ sort ============================================
//*=============================================================
/*
let colors = ["red", "green", "blue", "yellow"];
console.log(colors[0]); //? สมาชิกตัวแรก
console.log(colors[colors.length-1]) //? สมาชิกตัวสุดท้าย
*/
//*การหาสมาชิกตัวสุดท้าย ==========================================
//*=============================================================
/*
let colors = ["red", "green", "blue", "yellow"];
colors.push("write","sky blue"); //? การเพิ่มค่าใส่ Array
console.log(colors); 
*/
//*การ push ใส่  Array ==========================================
//*=============================================================
/*
let numbers = [10,20,30,40,50,60];
console.log(numbers);
for(let i = 0; i<numbers.length;i++){ //? For loop
    console.log(numbers[i] = "red");
}
console.log(numbers);

const myData = (item) => {
    console.log("color = ",item);
}
numbers.forEach(myData);

let x = ["red","green"];
x.forEach(getColors); //? การใช้ ForEach
function getColors(item){
    console.log(item);
}*/
//*การเข้าถึงสมาชิกใน Array =======================================
//*=============================================================
/*
let colors = ["red", "green", "blue", "yellow"];
console.log(typeof(colors));
console.log(colors);
console.log(colors.toString()); //? แปลง Array เป็น string
let changed = colors.toString();
console.log(changed);

let mark = colors.join(" "); //? เปลี่ยนเครื่องหมายการแบ่งสมาชิกใน Array
console.log(mark);

console.log(colors.pop()); //? หยิบสมาชิกตัวท้ายออกมา
console.log(colors.pop());
console.log(colors);*/
//*การแปลง Array to string =====================================
//*=============================================================
/*
let fruits = ["ส้ม", "องุ่น"];
let vegetables = ["คะน้า", "ผักชี", "ผักกาด", "สลัด"];
let hardware = ["เม้าส์", "คีบอร์ด"];

let carts = fruits.concat(vegetables,hardware);
console.log(carts);

let carts1 = vegetables.concat(fruits,hardware);
console.log(carts1)*/
//*การรวม Array =====================================
//*=============================================================
/*
let points = [20,-5,-2,40,100,-500,150];
console.log(points);
points.sort(function(a,b){ //? เรียงลำดับตัวเลขจากน้อยไปมาก
    return a-b;
});
console.log(points);

points.reverse(function(a,b){ //? เรียงลำดับตัวเลขจากมากไปน้อย
    return a-b;
});
console.log(points);*/
//*การเรียงลำดับตัวเลขใน Array ====================================
//*=============================================================
/*
const deleteData = () =>{
    let result = confirm("ต้องการลบข้อมูลหรือไม่");
    console.log(result);
    if (result == true){
        console.log("deleted");
    }else{
        console.log("cancel delete");
    }
}*/
//*การยืนยัน confirm() ==========================================
//*=============================================================

