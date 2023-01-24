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





//ЗОНА КАРМЫ
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



//ЗОНА КОМФОРТА
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


//таланты голубой
let tT_3 = document.getElementById("tT_3");
tT_3 = comfort + month;
tT_3_str = String(tT_3);
tT_3_strA = tT_3_str[0];
tT_3_strB = tT_3_str[1];

//ПРОВЕРКА на число > 22
if (tT_3 > 22) {
    let tT_3_A_new = Number(tT_3_strA);
    let tT_3_B_new = Number(tT_3_strB);
    tT_3 = tT_3_A_new + tT_3_B_new;
} else {
    document.getElementById("tT_3").innerHTML = tT_3;
}
let tT_3_res = tT_3;
//выводим на стр
document.getElementById("tT_3").innerHTML = tT_3_res;



//таланты синий
let tT_2 = document.getElementById("tT_2");
tT_2 = month + tT_3;
tT_2_str = String(tT_2);
tT_2_strA = tT_2_str[0];
tT_2_strB = tT_2_str[1];

//ПРОВЕРКА на число > 22
if (tT_2 > 22) {
    let tT_2_A_new = Number(tT_2_strA);
    let tT_2_B_new = Number(tT_2_strB);
    tT_2 = tT_2_A_new + tT_2_B_new;
} else {
    document.getElementById("tT_2").innerHTML = tT_2;
}
let tT_2_res = tT_2;
//выводим на стр
document.getElementById("tT_2").innerHTML = tT_2_res;



//Финансы оранжевый
let moneyR_3 = document.getElementById("moneyR_3");
moneyR_3 = comfort + moneyR_1;
moneyR_3_str = String(moneyR_3);
moneyR_3_strA = moneyR_3_str[0];
moneyR_3_strB = moneyR_3_str[1];

//ПРОВЕРКА на число > 22
if (moneyR_3 > 22) {
    let moneyR_3_A_new = Number(moneyR_3_strA);
    let moneyR_3_B_new = Number(moneyR_3_strB);
    moneyR_3 = moneyR_3_A_new + moneyR_3_B_new;
} else {
    document.getElementById("moneyR_3").innerHTML = moneyR_3;
}
let moneyR_3_res = moneyR_3;
//выводим на стр
document.getElementById("moneyR_3").innerHTML = moneyR_3_res;


//Финансы блок среднее
let moneyR_2 = document.getElementById("moneyR_2");
moneyR_2 = moneyR_3 + moneyR_1;
moneyR_2_str = String(moneyR_2);
moneyR_2_strA = moneyR_2_str[0];
moneyR_2_strB = moneyR_2_str[1];

//ПРОВЕРКА на число > 22
if (moneyR_2 > 22) {
    let moneyR_2_A_new = Number(moneyR_2_strA);
    let moneyR_2_B_new = Number(moneyR_2_strB);
    moneyR_2 = moneyR_2_A_new + moneyR_2_B_new;
} else {
    document.getElementById("moneyR_2").innerHTML = moneyR_2;
}
let moneyR_2_res = moneyR_2;
//выводим на стр
document.getElementById("moneyR_2").innerHTML = moneyR_2_res;



//Карма оранжевый
let karmaB3 = document.getElementById("karmaB3");
karmaB3 = karmaB1 + comfort;
karmaB3_str = String(karmaB3);
karmaB3_strA = karmaB3_str[0];
karmaB3_strB = karmaB3_str[1];

//ПРОВЕРКА на число > 22
if (karmaB3 > 22) {
    let karmaB3_A_new = Number(karmaB3_strA);
    let karmaB3_B_new = Number(karmaB3_strB);
    karmaB3 = karmaB3_A_new + karmaB3_B_new;
} else {
    document.getElementById("karmaB3").innerHTML = karmaB3;
}
let karmaB3_res = karmaB3;

//выводим на стр
document.getElementById("karmaB3").innerHTML = karmaB3_res;



//Карма белый
let karmaB2 = document.getElementById("karmaB2");
karmaB2 = karmaB1 + karmaB3;
karmaB2_str = String(karmaB2);
karmaB2_strA = karmaB2_str[0];
karmaB2_strB = karmaB2_str[1];

//ПРОВЕРКА на число > 22
if (karmaB2 > 22) {
    let karmaB2_A_new = Number(karmaB2_strA);
    let karmaB2_B_new = Number(karmaB2_strB);
    karmaB2 = karmaB2_A_new + karmaB2_B_new;
} else {
    document.getElementById("karmaB2").innerHTML = karmaB2;
}
let karmaB2_res = karmaB2;

//выводим на стр
document.getElementById("karmaB2").innerHTML = karmaB2_res;



//Детство голубой
let chL_3 = document.getElementById("chL_3");
chL_3 = day + comfort;
chL_3_str = String(chL_3);
chL_3_strA = chL_3_str[0];
chL_3_strB = chL_3_str[1];

//ПРОВЕРКА на число > 22
if (chL_3 > 22) {
    let chL_3_A_new = Number(chL_3_strA);
    let chL_3_B_new = Number(chL_3_strB);
    chL_3 = chL_3_A_new + chL_3_B_new;
} else {
    document.getElementById("chL_3").innerHTML = chL_3;
}
let chL_3_res = chL_3;

//выводим на стр
document.getElementById("chL_3").innerHTML = chL_3_res;



//Детство синий
let chL_2 = document.getElementById("chL_2");
chL_2 = day + chL_3;
chL_2_str = String(chL_2);
chL_2_strA = chL_2_str[0];
chL_2_strB = chL_2_str[1];

//ПРОВЕРКА на число > 22
if (chL_2 > 22) {
    let chL_2_A_new = Number(chL_2_strA);
    let chL_2_B_new = Number(chL_2_strB);
    chL_2 = chL_2_A_new + chL_2_B_new;
} else {
    document.getElementById("chL_2").innerHTML = chL_2;
}
let chL_2_res = chL_2;

//выводим на стр
document.getElementById("chL_2").innerHTML = chL_2_res;



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



let mB_1 = document.getElementById("mB_1");
mB_1 = moneyR_1 + karmaB1;

mB_1_str = String(mB_1);
mB_1_strA = mB_1_str[0];
mB_1_strB = mB_1_str[1];

//ПРОВЕРКА на число > 22
if (mB_1 > 22) {
    let mB_1_A_new = Number(mB_1_strA);
    let mB_1_B_new = Number(mB_1_strB);
    mB_1 = mB_1_A_new + mB_1_B_new;
} else {
    document.getElementById("mB_1").innerHTML = mB_1;
}
let mB_1_res = mB_1;

//выводим на стр
document.getElementById("mB_1").innerHTML = mB_1_res;



//Зеленый лево
let green_left = document.getElementById("green_left");
green_left = chL_3 + comfort;

green_left_str = String(green_left);
green_left_strA = green_left_str[0];
green_left_strB = green_left_str[1];

//ПРОВЕРКА на число > 22
if (green_left > 22) {
    let green_left_A_new = Number(green_left_strA);
    let green_left_B_new = Number(green_left_strB);
    green_left = green_left_A_new + green_left_B_new;
} else {
    document.getElementById("green_left").innerHTML = green_left;
}
let green_left_res = green_left;

//выводим на стр
document.getElementById("green_left").innerHTML = green_left_res;



//Зеленый вверху
let green_top = document.getElementById("green_top");
green_top = tT_3 + comfort;

green_top_str = String(green_top);
green_top_strA = green_top_str[0];
green_top_strB = green_top_str[1];

//ПРОВЕРКА на число > 22
if (green_top > 22) {
    let green_top_A_new = Number(green_top_strA);
    let green_top_B_new = Number(green_top_strB);
    green_top = green_top_A_new + green_top_B_new;
} else {
    document.getElementById("green_top").innerHTML = green_top;
}
let green_top_res = green_top;

//выводим на стр
document.getElementById("green_top").innerHTML = green_top_res;



//Зона баланса
let balance = document.getElementById("balance");
balance = karmaB3 + moneyR_3;

balance_str = String(balance);
balance_strA = balance_str[0];
balance_strB = balance_str[1];

//ПРОВЕРКА на число > 22
if (balance > 22) {
    let balance_A_new = Number(balance_strA);
    let balance_B_new = Number(balance_strB);
    balance = balance_A_new + balance_B_new;
} else {
    document.getElementById("balance").innerHTML = balance;
}
let balance_res = balance;

//выводим на стр
document.getElementById("balance").innerHTML = balance_res;



//Зона любви
let best_love = document.getElementById("best_love");
best_love = karmaB3 + balance;

best_love_str = String(best_love);
best_love_strA = best_love_str[0];
best_love_strB = best_love_str[1];

//ПРОВЕРКА на число > 22
if (best_love > 22) {
    let best_love_A_new = Number(best_love_strA);
    let best_love_B_new = Number(best_love_strB);
    best_love = best_love_A_new + best_love_B_new;
} else {
    document.getElementById("best_love").innerHTML = best_love;
}
let best_love_res = best_love;

//выводим на стр
document.getElementById("best_love").innerHTML = best_love_res;



//Зона денег
let best_money = document.getElementById("best_money");
best_money = moneyR_3 + balance;

best_money_str = String(best_money);
best_money_strA = best_money_str[0];
best_money_strB = best_money_str[1];

//ПРОВЕРКА на число > 22
if (best_money > 22) {
    let best_money_A_new = Number(best_money_strA);
    let best_money_B_new = Number(best_money_strB);
    best_money = best_money_A_new + best_money_B_new;
} else {
    document.getElementById("best_money").innerHTML = best_money;
}
let best_money_res = best_money;

//выводим на стр
document.getElementById("best_money").innerHTML = best_money_res;




//Мама снизу первое
let wB_1 = document.getElementById("wB_1");
wB_1 = chL_1 + karmaB1;

wB_1_str = String(wB_1);
wB_1_strA = wB_1_str[0];
wB_1_strB = wB_1_str[1];

//ПРОВЕРКА на число > 22
if (wB_1 > 22) {
    let wB_1_A_new = Number(wB_1_strA);
    let wB_1_B_new = Number(wB_1_strB);
    wB_1 = wB_1_A_new + wB_1_B_new;
} else {
    document.getElementById("wB_1").innerHTML = wB_1;
}
let wB_1_res = wB_1;

//выводим на стр
document.getElementById("wB_1").innerHTML = wB_1_res;




//ЗОНА МАМЫ 
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




//Зона комфорта второе
let comfort2 = document.getElementById("comfort2");
comfort2 = mT_1 + wR_1 + + mB_1 + wB_1;

comfort2_str = String(comfort2);
comfort2_strA = comfort2_str[0];
comfort2_strB = comfort2_str[1];

//ПРОВЕРКА на число > 22
if (comfort2 > 22) {
    let comfort2_A_new = Number(comfort2_strA);
    let comfort2_B_new = Number(comfort2_strB);
    comfort2 = comfort2_A_new + comfort2_B_new;
} else {
    document.getElementById("comfort2").innerHTML = comfort2;
}
let comfort2_res = comfort2;

//выводим на стр
document.getElementById("comfort2").innerHTML = comfort2_res;



//Зона комфорта третье
let comfort3 = document.getElementById("comfort3");
comfort3 = comfort + comfort2;

comfort3_str = String(comfort3);
comfort3_strA = comfort3_str[0];
comfort3_strB = comfort3_str[1];

//ПРОВЕРКА на число > 22
if (comfort3 > 22) {
    let comfort3_A_new = Number(comfort3_strA);
    let comfort3_B_new = Number(comfort3_strB);
    comfort3 = comfort3_A_new + comfort3_B_new;
} else {
    document.getElementById("comfort3").innerHTML = comfort3;
}
let comfort3_res = comfort3;

//выводим на стр
document.getElementById("comfort3").innerHTML = comfort3_res;





//РОДОВОЙ КВАДРАТ

//Зона папы 3
let mT_3 = document.getElementById("mT_3");
mT_3 = mT_1 + comfort2;

mT_3_str = String(mT_3);
mT_3_strA = mT_3_str[0];
mT_3_strB = mT_3_str[1];

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


//Зона папы 3
let mT_2 = document.getElementById("mT_2");
mT_2 = mT_3 + mT_1;

mT_2_str = String(mT_2);
mT_2_strA = mT_2_str[0];
mT_2_strB = mT_2_str[1];

//ПРОВЕРКА на число > 22
if (mT_2 > 22) {
    let mT_2_A_new = Number(mT_2_strA);
    let mT_2_B_new = Number(mT_2_strB);
    mT_2 = mT_2_A_new + mT_2_B_new;
} else {
    document.getElementById("mT_2").innerHTML = mT_2;
}
let mT_2_res = mT_2;

//выводим на стр
document.getElementById("mT_2").innerHTML = mT_2_res;


//Мама справа третье
let wR_3 = document.getElementById("wR_3");
wR_3 = comfort2 + wR_1;

wR_3_str = String(wR_3);
wR_3_strA = wR_3_str[0];
wR_3_strB = wR_3_str[1];

//ПРОВЕРКА на число > 22
if (wR_3 > 22) {
    let wR_3_A_new = Number(wR_3_strA);
    let wR_3_B_new = Number(wR_3_strB);
    wR_3 = wR_3_A_new + wR_3_B_new;
} else {
    document.getElementById("wR_3").innerHTML = wR_3;
}
let wR_3_res = wR_3;

//выводим на стр
document.getElementById("wR_3").innerHTML = wR_3_res;


//Мама справа среденее
let wR_2 = document.getElementById("wR_2");
wR_2 = wR_3 + wR_1;

wR_2_str = String(wR_2);
wR_2_strA = wR_2_str[0];
wR_2_strB = wR_2_str[1];

//ПРОВЕРКА на число > 22
if (wR_2 > 22) {
    let wR_2_A_new = Number(wR_2_strA);
    let wR_2_B_new = Number(wR_2_strB);
    wR_2 = wR_2_A_new + wR_2_B_new;
} else {
    document.getElementById("wR_2").innerHTML = wR_2;
}
let wR_2_res = wR_2;

//выводим на стр
document.getElementById("wR_2").innerHTML = wR_2_res;

//Мама снизу третье
let wB_3 = document.getElementById("wB_3");
wB_3 = wB_1 + comfort2;

wB_3_str = String(wB_3);
wB_3_strA = wB_3_str[0];
wB_3_strB = wB_3_str[1];

//ПРОВЕРКА на число > 22
if (wB_3 > 22) {
    let wB_3_A_new = Number(wB_3_strA);
    let wB_3_B_new = Number(wB_3_strB);
    wB_3 = wB_3_A_new + wB_3_B_new;
} else {
    document.getElementById("wB_3").innerHTML = wB_3;
}
let wB_3_res = wB_3;

//выводим на стр
document.getElementById("wB_3").innerHTML = wB_3_res;



//Мама снизу второе
let wB_2 = document.getElementById("wB_2");
wB_2 = wB_3 + wB_1;

wB_2_str = String(wB_2);
wB_2_strA = wB_2_str[0];
wB_2_strB = wB_2_str[1];

//ПРОВЕРКА на число > 22
if (wB_2 > 22) {
    let wB_2_A_new = Number(wB_2_strA);
    let wB_2_B_new = Number(wB_2_strB);
    wB_2 = wB_2_A_new + wB_2_B_new;
} else {
    document.getElementById("wB_2").innerHTML = wB_2;
}
let wB_2_res = wB_2;

//выводим на стр
document.getElementById("wB_2").innerHTML = wB_2_res;



//Зона папы низ третий
let mB_3 = document.getElementById("mB_3");
mB_3 = comfort2 + mB_1;

mB_3_str = String(mB_3);
mB_3_strA = mB_3_str[0];
mB_3_strB = mB_3_str[1];

//ПРОВЕРКА на число > 22
if (mB_3 > 22) {
    let mB_3_A_new = Number(mB_3_strA);
    let mB_3_B_new = Number(mB_3_strB);
    mB_3 = mB_3_A_new + mB_3_B_new;
} else {
    document.getElementById("mB_3").innerHTML = mB_3;
}
let mB_3_res = mB_3;

//выводим на стр
document.getElementById("mB_3").innerHTML = mB_3_res;



//Зона папы низ среднее
let mB_2 = document.getElementById("mB_2");
mB_2 = mB_1 + mB_3;

mB_2_str = String(mB_2);
mB_2_strA = mB_2_str[0];
mB_2_strB = mB_2_str[1];

//ПРОВЕРКА на число > 22
if (mB_2 > 22) {
    let mB_2_A_new = Number(mB_2_strA);
    let mB_2_B_new = Number(mB_2_strB);
    mB_2 = mB_2_A_new + mB_2_B_new;
} else {
    document.getElementById("mB_2").innerHTML = mB_2;
}
let mB_2_res = mB_2;

//выводим на стр
document.getElementById("mB_2").innerHTML = mB_2_res;