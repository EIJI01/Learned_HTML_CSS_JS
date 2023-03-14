/*
let name0 = document.getElementById("name"); //? get ผ่าน id
let name1 = document.querySelector("#name2");//? get ผ่าน id
let text1 = document.querySelector(".text1"); //? get ผ่าน class
console.log(name0);
console.log(name1);
console.log(text1.innerHTML); //? เป็นการ log ด้านใน tag ออกมาดู
//* การอ้างอิง elements ในหน้า HTML ===============================

name0.innerText = "Suphachai"; //? แทนที่ด้วย text
const changeData = () =>{
    let x = 10, y = 50;
    name0.innerHTML = `<i>เหนื่อยว่ะ ${x+y}</i>`; //? innerHTML สามารถมี <tag></tag> ได้
    name1.innerHTML = "<strong>เหนื่อยว่ะ</strong>";
}
function changeDatas(){
    text1.innerText = "<strong>เหนื่อยว่ะ</strong>"; //? เป็น string ทั่วไป
}
//* การเปลี่ยนข้อความในหน้า HTML ==================================
//*============================================================
// let tag = document.querySelector("div"); //? get ผ่าน tag ถ้ามี tag ซ้ำกันหลาย tag จะเลือกแค่ tag แรก
// console.log(tag);
let Alltag = document.querySelectorAll("div"); //? get ผ่าน tag ทั้งหมด
console.log(Alltag);
for(let i = 0; i<Alltag.length;i++){ //? เข้าถึงสมาชิก <div></div> ทั้งหมด 
    Alltag[i].style.margin = "2px"; //? การเปลี่ยน style ใน Js
    Alltag[i].style.padding = "5px";
    Alltag[i].style.border = "5px solid red";
}
let AlltagButton = document.querySelectorAll("button");
console.log(AlltagButton); //? ดู button ทั้งหมด
for(let i = 0; i<AlltagButton.length; i++){ //? เข้าถึงสมาชิก <button></button> ทั้งหมด 
    AlltagButton[i].style.color = "white";
    AlltagButton[i].style.margin = "2px";
    AlltagButton[i].style.backgroundColor = "black";
}
//* การเปลี่ยน style Element HTML ===============================
//*============================================================
const changeNameClass = () => {
    Alltag[2].setAttribute("class", "yai"); //? การเปลี่ยนชื่อ class ใน Js
}
const  changeBackground = document.querySelector("html");
console.log(changeBackground);
const changeThemeDark = () =>{
    changeBackground.setAttribute("class", "dark")
}
const changeThemeWhite = () =>{
    changeBackground.setAttribute("class", "white")
}
//* การเปลี่ยน ชื่อ class =========================================
//*============================================================

const menu = document.getElementById("menu");
let count1 = 1; 
const addItem = () => {
    const item = document.createElement("li"); //? สร้าง element ใหม่
    item.innerText = count1++;
    menu.appendChild(item); //? การเพิ่ม node ลูกเข้าไปใน node แม่
}
//* การเพิ่ม Node DOM ===========================================
//*============================================================

const menu1 = document.getElementById("menu");
const item1 = document.getElementById("item3");
const removeItem = () => {
    menu1.removeChild(item1); //? remove not ลูก
}
//* การลบ Node DOM ===========================================
//*============================================================

const menu2 = document.getElementById("menu");
const item2 = document.getElementById("item2");
const newItem = document.createElement("li");
newItem.innerText = "item5";

const insteadItem = () => {
    menu2.replaceChild(newItem, item2); //? การแทนที่ node ลูก
} 
//* การแทนที่ Node DOM ===========================================
//*=============================================================

const box = document.getElementById("box");
let status;
const addStyle = () => {
    box.classList.add("darkMode"); //? เพิ่ม style ใน CSS
}
const deleteStyle = () => {
    box.classList.remove("darkMode"); //? ลบ style ใน CSS
}
const switchStyle = () => {
    box.classList.toggle("darkMode"); //? คลิกปุ่มเพิ่อสลับ style
    status = box.classList.contains("darkMode"); //? การเช็คว่ามี style ชื่อ darkMode หรือไม่
    console.log(status);
    if(status == false){
        box.classList.add("blueMode");
    }
}
//* Class list Add  ใน DOM =====================================
//*=============================================================

const welcome = () => {
    alert("Welcome My Web Page");
}
const hightLight = (obj) => {
    obj.style.backgroundColor = "yellow";
}
const unHightLight = (obj) => {
    obj.style.backgroundColor = "white";
}
const getMenu = () => {
    const menu = document.getElementById("menu0");
    const display = document.getElementById("display");
    console.log(menu.value);
    display.innerHTML = `<strong> ${menu.value.toUpperCase()} </strong>`;
}

//* Event ใน DOM ===============================================
//*=============================================================

const menu3 = document.getElementById("menu0");
const getMenu1 = () => {
    console.log(menu3.value);
}
menu2.addEventListener("change", getMenu1);

const btn = document.getElementById("btn");

const showWelcome = () => {
    alert("welcome to my web page");
}
btn.addEventListener("click", showWelcome);
*/
//* Event listener ใน DOM ===============================================
//*=============================================================

