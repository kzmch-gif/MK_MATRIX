//выводим данные с прошлой стр
let day = Number(localStorage.getItem("day"));
let month = Number(localStorage.getItem("month"));
let year = Number(localStorage.getItem("year"));


//зона рождения
let chL_1 = document.getElementById("chL_1");
chL_1 = day;
document.getElementById("chL_1").innerHTML = day;


//зона талантов
let tT_1 = document.getElementById("tT_1");
tT_1 = month;
document.getElementById("tT_1").innerHTML = month;


//зона фин блока
let moneyR_1 = document.getElementById("moneyR_1");

moneyR_1 = year;
document.getElementById("moneyR_1").innerHTML = year;



//зона кармы
let karmaB1 = document.getElementById("karmaB1");
karmaB1 = day + month + year;
karmaB1_str = String(karmaB1);
karmaB1_strA = karmaB1_str[0];
karmaB1_strB = karmaB1_str[1];

//ПРОВЕРКА на число > 22
if (karmaB1 > 22) {
    let karmaB1_A_new = Number(karmaB1_strA);
    let karmaB1_B_new = Number(karmaB1_strB);
    karmaB1 = karmaB1_A_new + karmaB1_B_new;
} else {
    document.getElementById("karmaB1").innerHTML = karmaB1;
}
let karmaB1_res = karmaB1;

//выводим на стр
document.getElementById("karmaB1").innerHTML = karmaB1_res;



//зона комфорта
let comfort = document.getElementById("comfort");
comfort = day + month + year + karmaB1_res;

comfort_str = String(comfort);
comfort_strA = comfort_str[0];
comfort_strB = comfort_str[1];

//ПРОВЕРКА на число > 22
if (comfort > 22) {
    let comfort_A_new = Number(comfort_strA);
    let comfort_B_new = Number(comfort_strB);
    comfort = comfort_A_new + comfort_B_new;
} else {
    document.getElementById("comfort").innerHTML = comfort;
}
let comfort_res = comfort;

//выводим на стр
document.getElementById("comfort").innerHTML = comfort_res;



//зона мамы 
let wR_1 = document.getElementById("wR_1");
wR_1 = tT_1 + moneyR_1;

wR_1_str = String(wR_1);
wR_1_strA = wR_1_str[0];
wR_1_strB = wR_1_str[1];

//ПРОВЕРКА на число > 22
if (wR_1 > 22) {
    let wR_1_A_new = Number(wR_1_strA);
    let wR_1_B_new = Number(wR_1_strB);
    wR_1 = wR_1_A_new + wR_1_B_new;
} else {
    document.getElementById("wR_1").innerHTML = wR_1;
}
let wR_1_res = wR_1;

//выводим на стр
document.getElementById("wR_1").innerHTML = wR_1_res;




//ЗОНА ПАПЫ
let mT_1 = document.getElementById("mT_1");
mT_1 = day + month;

mT_1_str = String(mT_1);
mT_1_strA = mT_1_str[0];
mT_1_strB = mT_1_str[1];

//ПРОВЕРКА на число > 22
if (mT_1 > 22) {
    let mT_1_A_new = Number(mT_1_strA);
    let mT_1_B_new = Number(mT_1_strB);
    mT_1 = mT_1_A_new + mT_1_B_new;
} else {
    document.getElementById("mT_1").innerHTML = mT_1;
}
let mT_1_res = mT_1;

//выводим на стр
document.getElementById("mT_1").innerHTML = mT_1_res;



let mT_3 = document.getElementById("mT_3");
mT_3 = mT_1 + comfort;

mT_3_str = String(mT_3);
mT_3_strA = mT_3_str[0];
mT_3_strB = mT_3_str[1];
debugger
//ПРОВЕРКА на число > 22
if (mT_3 > 22) {
    let mT_3_A_new = Number(mT_3_strA);
    let mT_3_B_new = Number(mT_3_strB);
    mT_3 = mT_3_A_new + mT_3_B_new;
} else {
    document.getElementById("mT_3").innerHTML = mT_3;
}
let mT_3_res = mT_3;

//выводим на стр
document.getElementById("mT_3").innerHTML = mT_3_res;
