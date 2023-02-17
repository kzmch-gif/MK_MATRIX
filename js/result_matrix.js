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







// ВЫЧИСЛЕНИЯ АРКАНОВ ГОДА

//До 10 лет
let y5 = document.getElementById("y5");
y5 = mT_1 + chL_1;

y5_str = String(y5);
y5_strA = y5_str[0];
y5_strB = y5_str[1];

//ПРОВЕРКА на число > 22
if (y5 > 22) {
    let y5_A_new = Number(y5_strA);
    let y5_B_new = Number(y5_strB);
    y5 = y5_A_new + y5_B_new;
} else {
    document.getElementById("y5").innerHTML = y5;
}
let y5_res = y5;

//выводим на стр
document.getElementById("y5").innerHTML = y5_res;



let y2_5 = document.getElementById("y2_5");
y2_5 = y5 + day;

y2_5_str = String(y2_5);
y2_5_strA = y2_5_str[0];
y2_5_strB = y2_5_str[1];

//ПРОВЕРКА на число > 22
if (y2_5 > 22) {
    let y2_5_A_new = Number(y2_5_strA);
    let y2_5_B_new = Number(y2_5_strB);
    y2_5 = y2_5_A_new + y2_5_B_new;
} else {
    document.getElementById("y2_5").innerHTML = y2_5;
}
let y2_5_res = y2_5;

//выводим на стр
document.getElementById("y2_5").innerHTML = y2_5_res;


let y1 = document.getElementById("y1");
y1 = y2_5 + day;

y1_str = String(y1);
y1_strA = y1_str[0];
y1_strB = y1_str[1];

//ПРОВЕРКА на число > 22
if (y1 > 22) {
    let y1_A_new = Number(y1_strA);
    let y1_B_new = Number(y1_strB);
    y1 = y1_A_new + y1_B_new;
} else {
    document.getElementById("y1").innerHTML = y1;
}
let y1_res = y1;

//выводим на стр
document.getElementById("y1").innerHTML = y1_res;


let y3_5 = document.getElementById("y3_5");
y3_5 = y2_5 + y5;

y3_5_str = String(y3_5);
y3_5_strA = y3_5_str[0];
y3_5_strB = y3_5_str[1];

//ПРОВЕРКА на число > 22
if (y3_5 > 22) {
    let y3_5_A_new = Number(y3_5_strA);
    let y3_5_B_new = Number(y3_5_strB);
    y3_5 = y3_5_A_new + y3_5_B_new;
} else {
    document.getElementById("y3_5").innerHTML = y3_5;
}
let y3_5_res = y3_5;

//выводим на стр
document.getElementById("y3_5").innerHTML = y3_5_res;


let y7_5 = document.getElementById("y7_5");
y7_5 = mT_1 + y5;

y7_5_str = String(y7_5);
y7_5_strA = y7_5_str[0];
y7_5_strB = y7_5_str[1];

//ПРОВЕРКА на число > 22
if (y7_5 > 22) {
    let y7_5_A_new = Number(y7_5_strA);
    let y7_5_B_new = Number(y7_5_strB);
    y7_5 = y7_5_A_new + y7_5_B_new;
} else {
    document.getElementById("y7_5").innerHTML = y7_5;
}
let y7_5_res = y7_5;

//выводим на стр
document.getElementById("y7_5").innerHTML = y7_5_res;


let y6 = document.getElementById("y6");
y6 = y7_5 + y5;

y6_str = String(y6);
y6_strA = y6_str[0];
y6_strB = y6_str[1];

//ПРОВЕРКА на число > 22
if (y6 > 22) {
    let y6_A_new = Number(y6_strA);
    let y6_B_new = Number(y6_strB);
    y6 = y6_A_new + y6_B_new;
} else {
    document.getElementById("y6").innerHTML = y6;
}
let y6_res = y6;

//выводим на стр
document.getElementById("y6").innerHTML = y6_res;



let y8_5 = document.getElementById("y8_5");
y8_5 = y7_5 + mT_1;

y8_5_str = String(y8_5);
y8_5_strA = y8_5_str[0];
y8_5_strB = y8_5_str[1];

//ПРОВЕРКА на число > 22
if (y8_5 > 22) {
    let y8_5_A_new = Number(y8_5_strA);
    let y8_5_B_new = Number(y8_5_strB);
    y8_5 = y8_5_A_new + y8_5_B_new;
} else {
    document.getElementById("y8_5").innerHTML = y8_5;
}
let y8_5_res = y8_5;

//выводим на стр
document.getElementById("y8_5").innerHTML = y8_5_res;



//До 20 лет
let y15 = document.getElementById("y15");
y15 = tT_1 + mT_1;

y15_str = String(y15);
y15_strA = y15_str[0];
y15_strB = y15_str[1];

//ПРОВЕРКА на число > 22
if (y15 > 22) {
    let y15_A_new = Number(y15_strA);
    let y15_B_new = Number(y15_strB);
    y15 = y15_A_new + y15_B_new;
} else {
    document.getElementById("y15").innerHTML = y15;
}
let y15_res = y15;

//выводим на стр
document.getElementById("y15").innerHTML = y15_res;


let y12_5 = document.getElementById("y12_5");
y12_5 = y15 + mT_1;

y12_5_str = String(y12_5);
y12_5_strA = y12_5_str[0];
y12_5_strB = y12_5_str[1];

//ПРОВЕРКА на число > 22
if (y12_5 > 22) {
    let y12_5_A_new = Number(y12_5_strA);
    let y12_5_B_new = Number(y12_5_strB);
    y12_5 = y12_5_A_new + y12_5_B_new;
} else {
    document.getElementById("y12_5").innerHTML = y12_5;
}
let y12_5_res = y12_5;

//выводим на стр
document.getElementById("y12_5").innerHTML = y12_5_res;


let y11 = document.getElementById("y11");
y11 = y12_5 + mT_1;

y11_str = String(y11);
y11_strA = y11_str[0];
y11_strB = y11_str[1];

//ПРОВЕРКА на число > 22
if (y11 > 22) {
    let y11_A_new = Number(y11_strA);
    let y11_B_new = Number(y11_strB);
    y11 = y11_A_new + y11_B_new;
} else {
    document.getElementById("y11").innerHTML = y11;
}
let y11_res = y11;

//выводим на стр
document.getElementById("y11").innerHTML = y11_res;


let y13_5 = document.getElementById("y13_5");
y13_5 = y12_5 + y15;

y13_5_str = String(y13_5);
y13_5_strA = y13_5_str[0];
y13_5_strB = y13_5_str[1];

//ПРОВЕРКА на число > 22
if (y13_5 > 22) {
    let y13_5_A_new = Number(y13_5_strA);
    let y13_5_B_new = Number(y13_5_strB);
    y13_5 = y13_5_A_new + y13_5_B_new;
} else {
    document.getElementById("y13_5").innerHTML = y13_5;
}
let y13_5_res = y13_5;

//выводим на стр
document.getElementById("y13_5").innerHTML = y13_5_res;


let y17_5 = document.getElementById("y17_5");
y17_5 = tT_1 + y15;

y17_5_str = String(y17_5);
y17_5_strA = y17_5_str[0];
y17_5_strB = y17_5_str[1];

//ПРОВЕРКА на число > 22
if (y17_5 > 22) {
    let y17_5_A_new = Number(y17_5_strA);
    let y17_5_B_new = Number(y17_5_strB);
    y17_5 = y17_5_A_new + y17_5_B_new;
} else {
    document.getElementById("y17_5").innerHTML = y17_5;
}
let y17_5_res = y17_5;

//выводим на стр
document.getElementById("y17_5").innerHTML = y17_5_res;


let y16 = document.getElementById("y16");
y16 = y17_5 + y15;

y16_str = String(y16);
y16_strA = y16_str[0];
y16_strB = y16_str[1];

//ПРОВЕРКА на число > 22
if (y16 > 22) {
    let y16_A_new = Number(y16_strA);
    let y16_B_new = Number(y16_strB);
    y16 = y16_A_new + y16_B_new;
} else {
    document.getElementById("y16").innerHTML = y16;
}
let y16_res = y16;

//выводим на стр
document.getElementById("y16").innerHTML = y16_res;


let y18_5 = document.getElementById("y18_5");
y18_5 = tT_1 + y17_5;

y18_5_str = String(y18_5);
y18_5_strA = y18_5_str[0];
y18_5_strB = y18_5_str[1];

//ПРОВЕРКА на число > 22
if (y18_5 > 22) {
    let y18_5_A_new = Number(y18_5_strA);
    let y18_5_B_new = Number(y18_5_strB);
    y18_5 = y18_5_A_new + y18_5_B_new;
} else {
    document.getElementById("y18_5").innerHTML = y18_5;
}
let y18_5_res = y18_5;

//выводим на стр
document.getElementById("y18_5").innerHTML = y18_5_res;



//До 30 лет
let y25 = document.getElementById("y25");
y25 = tT_1 + wR_1;

y25_str = String(y25);
y25_strA = y25_str[0];
y25_strB = y25_str[1];

//ПРОВЕРКА на число > 22
if (y25 > 22) {
    let y25_A_new = Number(y25_strA);
    let y25_B_new = Number(y25_strB);
    y25 = y25_A_new + y25_B_new;
} else {
    document.getElementById("y25").innerHTML = y25;
}
let y25_res = y25;

//выводим на стр
document.getElementById("y25").innerHTML = y25_res;


let y22_5 = document.getElementById("y22_5");
y22_5 = tT_1 + y25;

y22_5_str = String(y22_5);
y22_5_strA = y22_5_str[0];
y22_5_strB = y22_5_str[1];

//ПРОВЕРКА на число > 22
if (y22_5 > 22) {
    let y22_5_A_new = Number(y22_5_strA);
    let y22_5_B_new = Number(y22_5_strB);
    y22_5 = y22_5_A_new + y22_5_B_new;
} else {
    document.getElementById("y22_5").innerHTML = y22_5;
}
let y22_5_res = y22_5;

//выводим на стр
document.getElementById("y22_5").innerHTML = y22_5_res;


let y21 = document.getElementById("y21");
y21 = tT_1 + y22_5;

y21_str = String(y21);
y21_strA = y21_str[0];
y21_strB = y21_str[1];

//ПРОВЕРКА на число > 22
if (y21 > 22) {
    let y21_A_new = Number(y21_strA);
    let y21_B_new = Number(y21_strB);
    y21 = y21_A_new + y21_B_new;
} else {
    document.getElementById("y21").innerHTML = y21;
}
let y21_res = y21;

//выводим на стр
document.getElementById("y21").innerHTML = y21_res;


let y23_5 = document.getElementById("y23_5");
y23_5 = y25 + y22_5;

y23_5_str = String(y23_5);
y23_5_strA = y23_5_str[0];
y23_5_strB = y23_5_str[1];

//ПРОВЕРКА на число > 22
if (y23_5 > 22) {
    let y23_5_A_new = Number(y23_5_strA);
    let y23_5_B_new = Number(y23_5_strB);
    y23_5 = y23_5_A_new + y23_5_B_new;
} else {
    document.getElementById("y23_5").innerHTML = y23_5;
}
let y23_5_res = y23_5;

//выводим на стр
document.getElementById("y23_5").innerHTML = y23_5_res;


let y27_5 = document.getElementById("y27_5");
y27_5 = y25 + wR_1;

y27_5_str = String(y27_5);
y27_5_strA = y27_5_str[0];
y27_5_strB = y27_5_str[1];

//ПРОВЕРКА на число > 22
if (y27_5 > 22) {
    let y27_5_A_new = Number(y27_5_strA);
    let y27_5_B_new = Number(y27_5_strB);
    y27_5 = y27_5_A_new + y27_5_B_new;
} else {
    document.getElementById("y27_5").innerHTML = y27_5;
}
let y27_5_res = y27_5;

//выводим на стр
document.getElementById("y27_5").innerHTML = y27_5_res;


let y26 = document.getElementById("y26");
y26 = y25 + y27_5;

y26_str = String(y26);
y26_strA = y26_str[0];
y26_strB = y26_str[1];

//ПРОВЕРКА на число > 22
if (y26 > 22) {
    let y26_A_new = Number(y26_strA);
    let y26_B_new = Number(y26_strB);
    y26 = y26_A_new + y26_B_new;
} else {
    document.getElementById("y26").innerHTML = y26;
}
let y26_res = y26;

//выводим на стр
document.getElementById("y26").innerHTML = y26_res;


let y28_5 = document.getElementById("y27_5");
y28_5 = y27_5 + wR_1;

y28_5_str = String(y28_5);
y28_5_strA = y28_5_str[0];
y28_5_strB = y28_5_str[1];

//ПРОВЕРКА на число > 22
if (y28_5 > 22) {
    let y28_5_A_new = Number(y28_5_strA);
    let y28_5_B_new = Number(y28_5_strB);
    y28_5 = y28_5_A_new + y28_5_B_new;
} else {
    document.getElementById("y28_5").innerHTML = y28_5;
}
let y28_5_res = y28_5;

//выводим на стр
document.getElementById("y28_5").innerHTML = y28_5_res;



//До 40 лет
let y35 = document.getElementById("y35");
y35 = moneyR_1 + wR_1;

y35_str = String(y35);
y35_strA = y35_str[0];
y35_strB = y35_str[1];

//ПРОВЕРКА на число > 22
if (y35 > 22) {
    let y35_A_new = Number(y35_strA);
    let y35_B_new = Number(y35_strB);
    y35 = y35_A_new + y35_B_new;
} else {
    document.getElementById("y35").innerHTML = y35;
}
let y35_res = y35;

//выводим на стр
document.getElementById("y35").innerHTML = y35_res;


let y32_5 = document.getElementById("y32_5");
y32_5 = y35 + wR_1;

y32_5_str = String(y32_5);
y32_5_strA = y32_5_str[0];
y32_5_strB = y32_5_str[1];

//ПРОВЕРКА на число > 22
if (y32_5 > 22) {
    let y32_5_A_new = Number(y32_5_strA);
    let y32_5_B_new = Number(y32_5_strB);
    y32_5 = y32_5_A_new + y32_5_B_new;
} else {
    document.getElementById("y32_5").innerHTML = y32_5;
}
let y32_5_res = y32_5;

//выводим на стр
document.getElementById("y32_5").innerHTML = y32_5_res;


let y31 = document.getElementById("y31");
y31 = y32_5 + wR_1;

y31_str = String(y31);
y31_strA = y31_str[0];
y31_strB = y31_str[1];

//ПРОВЕРКА на число > 22
if (y31 > 22) {
    let y31_A_new = Number(y31_strA);
    let y31_B_new = Number(y31_strB);
    y31 = y31_A_new + y31_B_new;
} else {
    document.getElementById("y31").innerHTML = y31;
}
let y31_res = y31;

//выводим на стр
document.getElementById("y31").innerHTML = y31_res;


let y33_5 = document.getElementById("y33_5");
y33_5 = y35 + y32_5;

y33_5_str = String(y33_5);
y33_5_strA = y33_5_str[0];
y33_5_strB = y33_5_str[1];

//ПРОВЕРКА на число > 22
if (y33_5 > 22) {
    let y33_5_A_new = Number(y33_5_strA);
    let y33_5_B_new = Number(y33_5_strB);
    y33_5 = y33_5_A_new + y33_5_B_new;
} else {
    document.getElementById("y33_5").innerHTML = y33_5;
}
let y33_5_res = y33_5;

//выводим на стр
document.getElementById("y33_5").innerHTML = y33_5_res;


let y37_5 = document.getElementById("y37_5");
y37_5 = y35 + moneyR_1;

y37_5_str = String(y37_5);
y37_5_strA = y37_5_str[0];
y37_5_strB = y37_5_str[1];

//ПРОВЕРКА на число > 22
if (y37_5 > 22) {
    let y37_5_A_new = Number(y37_5_strA);
    let y37_5_B_new = Number(y37_5_strB);
    y37_5 = y37_5_A_new + y37_5_B_new;
} else {
    document.getElementById("y37_5").innerHTML = y37_5;
}
let y37_5_res = y37_5;

//выводим на стр
document.getElementById("y37_5").innerHTML = y37_5_res;


let y36 = document.getElementById("y36");
y36 = y37_5 + y35;

y36_str = String(y36);
y36_strA = y36_str[0];
y36_strB = y36_str[1];

//ПРОВЕРКА на число > 22
if (y36 > 22) {
    let y36_A_new = Number(y36_strA);
    let y36_B_new = Number(y36_strB);
    y36 = y36_A_new + y36_B_new;
} else {
    document.getElementById("y36").innerHTML = y36;
}
let y36_res = y36;

//выводим на стр
document.getElementById("y36").innerHTML = y36_res;


let y38_5 = document.getElementById("y38_5");
y38_5 = y37_5 + moneyR_1;

y38_5_str = String(y38_5);
y38_5_strA = y38_5_str[0];
y38_5_strB = y38_5_str[1];

//ПРОВЕРКА на число > 22
if (y38_5 > 22) {
    let y38_5_A_new = Number(y38_5_strA);
    let y38_5_B_new = Number(y38_5_strB);
    y38_5 = y38_5_A_new + y38_5_B_new;
} else {
    document.getElementById("y38_5").innerHTML = y38_5;
}
let y38_5_res = y38_5;

//выводим на стр
document.getElementById("y38_5").innerHTML = y38_5_res;



//До 50 лет
let y45 = document.getElementById("y45");
y45 = moneyR_1 + mB_1;

y45_str = String(y45);
y45_strA = y45_str[0];
y45_strB = y45_str[1];

//ПРОВЕРКА на число > 22
if (y45 > 22) {
    let y45_A_new = Number(y45_strA);
    let y45_B_new = Number(y45_strB);
    y45 = y45_A_new + y45_B_new;
} else {
    document.getElementById("y45").innerHTML = y45;
}
let y45_res = y45;

//выводим на стр
document.getElementById("y45").innerHTML = y45_res;


let y42_5 = document.getElementById("y42_5");
y42_5 = moneyR_1 + y45;

y42_5_str = String(y42_5);
y42_5_strA = y42_5_str[0];
y42_5_strB = y42_5_str[1];

//ПРОВЕРКА на число > 22
if (y42_5 > 22) {
    let y42_5_A_new = Number(y42_5_strA);
    let y42_5_B_new = Number(y42_5_strB);
    y42_5 = y42_5_A_new + y42_5_B_new;
} else {
    document.getElementById("y42_5").innerHTML = y42_5;
}
let y42_5_res = y42_5;

//выводим на стр
document.getElementById("y42_5").innerHTML = y42_5_res;


let y41 = document.getElementById("y41");
y41 = moneyR_1 + y42_5;

y41_str = String(y41);
y41_strA = y41_str[0];
y41_strB = y41_str[1];

//ПРОВЕРКА на число > 22
if (y41 > 22) {
    let y41_A_new = Number(y41_strA);
    let y41_B_new = Number(y41_strB);
    y41 = y41_A_new + y41_B_new;
} else {
    document.getElementById("y41").innerHTML = y41;
}
let y41_res = y41;

//выводим на стр
document.getElementById("y41").innerHTML = y41_res;


let y43_5 = document.getElementById("y43_5");
y43_5 = y42_5 + y45;

y43_5_str = String(y43_5);
y43_5_strA = y43_5_str[0];
y43_5_strB = y43_5_str[1];

//ПРОВЕРКА на число > 22
if (y43_5 > 22) {
    let y43_5_A_new = Number(y43_5_strA);
    let y43_5_B_new = Number(y43_5_strB);
    y43_5 = y43_5_A_new + y43_5_B_new;
} else {
    document.getElementById("y43_5").innerHTML = y43_5;
}
let y43_5_res = y43_5;

//выводим на стр
document.getElementById("y43_5").innerHTML = y43_5_res;


let y47_5 = document.getElementById("y47_5");
y47_5 = mB_1 + y45;

y47_5_str = String(y47_5);
y47_5_strA = y47_5_str[0];
y47_5_strB = y47_5_str[1];

//ПРОВЕРКА на число > 22
if (y47_5 > 22) {
    let y47_5_A_new = Number(y47_5_strA);
    let y47_5_B_new = Number(y47_5_strB);
    y47_5 = y47_5_A_new + y47_5_B_new;
} else {
    document.getElementById("y47_5").innerHTML = y47_5;
}
let y47_5_res = y47_5;

//выводим на стр
document.getElementById("y47_5").innerHTML = y47_5_res;


let y46 = document.getElementById("y46");
y46 = y45 + y47_5;

y46_str = String(y46);
y46_strA = y46_str[0];
y46_strB = y46_str[1];

//ПРОВЕРКА на число > 22
if (y46 > 22) {
    let y46_A_new = Number(y46_strA);
    let y46_B_new = Number(y46_strB);
    y46 = y46_A_new + y46_B_new;
} else {
    document.getElementById("y46").innerHTML = y46;
}
let y46_res = y46;

//выводим на стр
document.getElementById("y46").innerHTML = y46_res;


let y48_5 = document.getElementById("y48_5");
y48_5 = mB_1 + y47_5;

y48_5_str = String(y48_5);
y48_5_strA = y48_5_str[0];
y48_5_strB = y48_5_str[1];

//ПРОВЕРКА на число > 22
if (y48_5 > 22) {
    let y48_5_A_new = Number(y48_5_strA);
    let y48_5_B_new = Number(y48_5_strB);
    y48_5 = y48_5_A_new + y48_5_B_new;
} else {
    document.getElementById("y48_5").innerHTML = y48_5;
}
let y48_5_res = y48_5;

//выводим на стр
document.getElementById("y48_5").innerHTML = y48_5_res;



//До 60 лет
let y55 = document.getElementById("y55");
y55 = karmaB1 + mB_1;

y55_str = String(y55);
y55_strA = y55_str[0];
y55_strB = y55_str[1];

//ПРОВЕРКА на число > 22
if (y55 > 22) {
    let y55_A_new = Number(y55_strA);
    let y55_B_new = Number(y55_strB);
    y55 = y55_A_new + y55_B_new;
} else {
    document.getElementById("y55").innerHTML = y55;
}
let y55_res = y55;

//выводим на стр
document.getElementById("y55").innerHTML = y55_res;


let y52_5 = document.getElementById("y52_5");
y52_5 = y55 + mB_1;

y52_5_str = String(y52_5);
y52_5_strA = y52_5_str[0];
y52_5_strB = y52_5_str[1];

//ПРОВЕРКА на число > 22
if (y52_5 > 22) {
    let y52_5_A_new = Number(y52_5_strA);
    let y52_5_B_new = Number(y52_5_strB);
    y52_5 = y52_5_A_new + y52_5_B_new;
} else {
    document.getElementById("y52_5").innerHTML = y52_5;
}
let y52_5_res = y52_5;

//выводим на стр
document.getElementById("y52_5").innerHTML = y52_5_res;


let y51 = document.getElementById("y51");
y51 = y52_5 + mB_1;

y51_str = String(y51);
y51_strA = y51_str[0];
y51_strB = y51_str[1];

//ПРОВЕРКА на число > 22
if (y51 > 22) {
    let y51_A_new = Number(y51_strA);
    let y51_B_new = Number(y51_strB);
    y51 = y51_A_new + y51_B_new;
} else {
    document.getElementById("y51").innerHTML = y51;
}
let y51_res = y51;

//выводим на стр
document.getElementById("y51").innerHTML = y51_res;


let y53_5 = document.getElementById("y53_5");
y53_5 = y55 + y52_5;

y53_5_str = String(y53_5);
y53_5_strA = y53_5_str[0];
y53_5_strB = y53_5_str[1];

//ПРОВЕРКА на число > 22
if (y53_5 > 22) {
    let y53_5_A_new = Number(y53_5_strA);
    let y53_5_B_new = Number(y53_5_strB);
    y53_5 = y53_5_A_new + y53_5_B_new;
} else {
    document.getElementById("y53_5").innerHTML = y53_5;
}
let y53_5_res = y53_5;

//выводим на стр
document.getElementById("y53_5").innerHTML = y53_5_res;


let y57_5 = document.getElementById("y57_5");
y57_5 = y55 + karmaB1;

y57_5_str = String(y57_5);
y57_5_strA = y57_5_str[0];
y57_5_strB = y57_5_str[1];

//ПРОВЕРКА на число > 22
if (y57_5 > 22) {
    let y57_5_A_new = Number(y57_5_strA);
    let y57_5_B_new = Number(y57_5_strB);
    y57_5 = y57_5_A_new + y57_5_B_new;
} else {
    document.getElementById("y57_5").innerHTML = y57_5;
}
let y57_5_res = y57_5;

//выводим на стр
document.getElementById("y57_5").innerHTML = y57_5_res;


let y56 = document.getElementById("y56");
y56 = y55 + y57_5;

y56_str = String(y56);
y56_strA = y56_str[0];
y56_strB = y56_str[1];

//ПРОВЕРКА на число > 22
if (y56 > 22) {
    let y56_A_new = Number(y56_strA);
    let y56_B_new = Number(y56_strB);
    y56 = y56_A_new + y56_B_new;
} else {
    document.getElementById("y56").innerHTML = y56;
}
let y56_res = y56;

//выводим на стр
document.getElementById("y56").innerHTML = y56_res;


let y58_5 = document.getElementById("y58_5");
y58_5 = y57_5 + karmaB1;

y58_5_str = String(y58_5);
y58_5_strA = y58_5_str[0];
y58_5_strB = y58_5_str[1];

//ПРОВЕРКА на число > 22
if (y58_5 > 22) {
    let y58_5_A_new = Number(y58_5_strA);
    let y58_5_B_new = Number(y58_5_strB);
    y58_5 = y58_5_A_new + y58_5_B_new;
} else {
    document.getElementById("y58_5").innerHTML = y58_5;
}
let y58_5_res = y58_5;

//выводим на стр
document.getElementById("y58_5").innerHTML = y58_5_res;


let y65 = document.getElementById("y65");
y65 = wB_1 + karmaB1;

y65_str = String(y65);
y65_strA = y65_str[0];
y65_strB = y65_str[1];

//ПРОВЕРКА на число > 22
if (y65 > 22) {
    let y65_A_new = Number(y65_strA);
    let y65_B_new = Number(y65_strB);
    y65 = y65_A_new + y65_B_new;
} else {
    document.getElementById("y65").innerHTML = y65;
}
let y65_res = y65;

//выводим на стр
document.getElementById("y65").innerHTML = y65_res;



let y62_5 = document.getElementById("y62_5");
y62_5 = y65 + karmaB1;

y62_5_str = String(y62_5);
y62_5_strA = y62_5_str[0];
y62_5_strB = y62_5_str[1];

//ПРОВЕРКА на число > 22
if (y62_5 > 22) {
    let y62_5_A_new = Number(y62_5_strA);
    let y62_5_B_new = Number(y62_5_strB);
    y62_5 = y62_5_A_new + y62_5_B_new;
} else {
    document.getElementById("y62_5").innerHTML = y62_5;
}
let y62_5_res = y62_5;

//выводим на стр
document.getElementById("y62_5").innerHTML = y62_5_res;


let y61 = document.getElementById("y61");
y61 = y62_5 + karmaB1;

y61_str = String(y61);
y61_strA = y61_str[0];
y61_strB = y61_str[1];

//ПРОВЕРКА на число > 22
if (y61 > 22) {
    let y61_A_new = Number(y61_strA);
    let y61_B_new = Number(y61_strB);
    y61 = y61_A_new + y61_B_new;
} else {
    document.getElementById("y61").innerHTML = y61;
}
let y61_res = y61;

//выводим на стр
document.getElementById("y61").innerHTML = y61_res;


let y63_5 = document.getElementById("y63_5");
y63_5 = y65 + y62_5;

y63_5_str = String(y63_5);
y63_5_strA = y63_5_str[0];
y63_5_strB = y63_5_str[1];

//ПРОВЕРКА на число > 22
if (y63_5 > 22) {
    let y63_5_A_new = Number(y63_5_strA);
    let y63_5_B_new = Number(y63_5_strB);
    y63_5 = y63_5_A_new + y63_5_B_new;
} else {
    document.getElementById("y63_5").innerHTML = y63_5;
}
let y63_5_res = y63_5;

//выводим на стр
document.getElementById("y63_5").innerHTML = y63_5_res;


let y67_5 = document.getElementById("y67_5");
y67_5 = y65 + wB_1;

y67_5_str = String(y67_5);
y67_5_strA = y67_5_str[0];
y67_5_strB = y67_5_str[1];

//ПРОВЕРКА на число > 22
if (y67_5 > 22) {
    let y67_5_A_new = Number(y67_5_strA);
    let y67_5_B_new = Number(y67_5_strB);
    y67_5 = y67_5_A_new + y67_5_B_new;
} else {
    document.getElementById("y67_5").innerHTML = y67_5;
}
let y67_5_res = y67_5;

//выводим на стр
document.getElementById("y67_5").innerHTML = y67_5_res;


let y66 = document.getElementById("y66");
y66 = y67_5 + y65;

y66_str = String(y66);
y66_strA = y66_str[0];
y66_strB = y66_str[1];

//ПРОВЕРКА на число > 22
if (y66 > 22) {
    let y66_A_new = Number(y66_strA);
    let y66_B_new = Number(y66_strB);
    y66 = y66_A_new + y66_B_new;
} else {
    document.getElementById("y66").innerHTML = y66;
}
let y66_res = y66;

//выводим на стр
document.getElementById("y66").innerHTML = y66_res;


let y68_5 = document.getElementById("y68_5");
y68_5 = y67_5 + wB_1;

y68_5_str = String(y68_5);
y68_5_strA = y68_5_str[0];
y68_5_strB = y68_5_str[1];

//ПРОВЕРКА на число > 22
if (y68_5 > 22) {
    let y68_5_A_new = Number(y68_5_strA);
    let y68_5_B_new = Number(y68_5_strB);
    y68_5 = y68_5_A_new + y68_5_B_new;
} else {
    document.getElementById("y68_5").innerHTML = y68_5;
}
let y68_5_res = y68_5;

//выводим на стр
document.getElementById("y68_5").innerHTML = y68_5_res;




//До 80 років

let y75 = document.getElementById("y75");
y75 = wB_1 + chL_1;

y75_str = String(y75);
y75_strA = y75_str[0];
y75_strB = y75_str[1];

//ПРОВЕРКА на число > 22
if (y75 > 22) {
    let y75_A_new = Number(y75_strA);
    let y75_B_new = Number(y75_strB);
    y75 = y75_A_new + y75_B_new;
} else {
    document.getElementById("y75").innerHTML = y75;
}
let y75_res = y75;

//выводим на стр
document.getElementById("y75").innerHTML = y75_res;


let y72_5 = document.getElementById("y72_5");
y72_5 = y75 + wB_1;

y72_5_str = String(y72_5);
y72_5_strA = y72_5_str[0];
y72_5_strB = y72_5_str[1];

//ПРОВЕРКА на число > 22
if (y72_5 > 22) {
    let y72_5_A_new = Number(y72_5_strA);
    let y72_5_B_new = Number(y72_5_strB);
    y72_5 = y72_5_A_new + y72_5_B_new;
} else {
    document.getElementById("y72_5").innerHTML = y72_5;
}
let y72_5_res = y72_5;

//выводим на стр
document.getElementById("y72_5").innerHTML = y72_5_res;


let y71 = document.getElementById("y71");
y71 = wB_1 + y72_5;

y71_str = String(y71);
y71_strA = y71_str[0];
y71_strB = y71_str[1];

//ПРОВЕРКА на число > 22
if (y71 > 22) {
    let y71_A_new = Number(y71_strA);
    let y71_B_new = Number(y71_strB);
    y71 = y71_A_new + y71_B_new;
} else {
    document.getElementById("y71").innerHTML = y71;
}
let y71_res = y71;

//выводим на стр
document.getElementById("y71").innerHTML = y71_res;


let y73_5 = document.getElementById("y73_5");
y73_5 = y75 + y72_5;

y73_5_str = String(y73_5);
y73_5_strA = y73_5_str[0];
y73_5_strB = y73_5_str[1];

//ПРОВЕРКА на число > 22
if (y73_5 > 22) {
    let y73_5_A_new = Number(y73_5_strA);
    let y73_5_B_new = Number(y73_5_strB);
    y73_5 = y73_5_A_new + y73_5_B_new;
} else {
    document.getElementById("y73_5").innerHTML = y73_5;
}
let y73_5_res = y73_5;

//выводим на стр
document.getElementById("y73_5").innerHTML = y73_5_res;


let y77_5 = document.getElementById("y77_5");
y77_5 = y75 + chL_1;

y77_5_str = String(y77_5);
y77_5_strA = y77_5_str[0];
y77_5_strB = y77_5_str[1];

//ПРОВЕРКА на число > 22
if (y77_5 > 22) {
    let y77_5_A_new = Number(y77_5_strA);
    let y77_5_B_new = Number(y77_5_strB);
    y77_5 = y77_5_A_new + y77_5_B_new;
} else {
    document.getElementById("y77_5").innerHTML = y77_5;
}
let y77_5_res = y77_5;

//выводим на стр
document.getElementById("y77_5").innerHTML = y77_5_res;


let y76 = document.getElementById("y76");
y76 = y77_5 + y75;

y76_str = String(y76);
y76_strA = y76_str[0];
y76_strB = y76_str[1];

//ПРОВЕРКА на число > 22
if (y76 > 22) {
    let y76_A_new = Number(y76_strA);
    let y76_B_new = Number(y76_strB);
    y76 = y76_A_new + y76_B_new;
} else {
    document.getElementById("y76").innerHTML = y76;
}
let y76_res = y76;

//выводим на стр
document.getElementById("y76").innerHTML = y76_res;


let y78_5 = document.getElementById("y78_5");
y78_5 = y77_5 + chL_1;

y78_5_str = String(y78_5);
y78_5_strA = y78_5_str[0];
y78_5_strB = y78_5_str[1];

//ПРОВЕРКА на число > 22
if (y78_5 > 22) {
    let y78_5_A_new = Number(y78_5_strA);
    let y78_5_B_new = Number(y78_5_strB);
    y78_5 = y78_5_A_new + y78_5_B_new;
} else {
    document.getElementById("y78_5").innerHTML = y78_5;
}
let y78_5_res = y78_5;

//выводим на стр
document.getElementById("y78_5").innerHTML = y78_5_res;






//Карта здоровья

// 1 Сахасрара
let phisics_1 = document.getElementById("phisics_1");
let ph_1_res;
ph_1_res = chL_1;

document.getElementById("phisics_1").innerHTML = ph_1_res;


let energy_1 = document.getElementById("energy_1");
let en_1_res;
en_1_res = tT_1;

document.getElementById("energy_1").innerHTML = en_1_res;


let emotion_1 = document.getElementById("emotion_1");
let all_1_res;
all_1_res = ph_1_res + en_1_res;

all_1_res_str = String(all_1_res);
all_1_res_strA = all_1_res_str[0];
all_1_res_strB = all_1_res_str[1];

//ПРОВЕРКА на число > 22
if (all_1_res > 22) {
    let all_1_res_A_new = Number(all_1_res_strA);
    let all_1_res_B_new = Number(all_1_res_strB);
    all_1_res = all_1_res_A_new + all_1_res_B_new;
} else {
    document.getElementById("emotion_1").innerHTML = all_1_res;
}
let all_1_res_if = all_1_res;

//выводим на стр
document.getElementById("emotion_1").innerHTML = all_1_res_if;



// 2 Аджна
let phisics_2 = document.getElementById("phisics_2");
let ph_2_res;
ph_2_res = chL_2;

document.getElementById("phisics_2").innerHTML = ph_2_res;


let energy_2 = document.getElementById("energy_2");
let en_2_res;
en_2_res = tT_2;

document.getElementById("energy_2").innerHTML = en_2_res;


let emotion_2 = document.getElementById("emotion_2");
let all_2_res;
all_2_res = ph_2_res + en_2_res;

all_2_res_str = String(all_2_res);
all_2_res_strA = all_2_res_str[0];
all_2_res_strB = all_2_res_str[1];

//ПРОВЕРКА на число > 22
if (all_2_res > 22) {
    let all_2_res_A_new = Number(all_2_res_strA);
    let all_2_res_B_new = Number(all_2_res_strB);
    all_2_res = all_2_res_A_new + all_2_res_B_new;
} else {
    document.getElementById("emotion_2").innerHTML = all_2_res;
}
let all_2_res_if = all_2_res;

//выводим на стр
document.getElementById("emotion_2").innerHTML = all_2_res_if;



// 3 Вішудхa
let phisics_3 = document.getElementById("phisics_3");
let ph_3_res;
ph_3_res = chL_3;

document.getElementById("phisics_3").innerHTML = ph_3_res;


let energy_3 = document.getElementById("energy_3");
let en_3_res;
en_3_res = tT_3;

document.getElementById("energy_3").innerHTML = en_3_res;


let emotion_3 = document.getElementById("emotion_3");
let all_3_res;
all_3_res = ph_3_res + en_3_res;

all_3_res_str = String(all_3_res);
all_3_res_strA = all_3_res_str[0];
all_3_res_strB = all_3_res_str[1];

//ПРОВЕРКА на число > 22
if (all_3_res > 22) {
    let all_3_res_A_new = Number(all_3_res_strA);
    let all_3_res_B_new = Number(all_3_res_strB);
    all_3_res = all_3_res_A_new + all_3_res_B_new;
} else {
    document.getElementById("emotion_3").innerHTML = all_3_res;
}
let all_3_res_if = all_3_res;

//выводим на стр
document.getElementById("emotion_3").innerHTML = all_3_res_if;



// 4 Анахата
let phisics_4 = document.getElementById("phisics_4");
let ph_4_res;
ph_4_res = green_left;
document.getElementById("phisics_4").innerHTML = ph_4_res;


let energy_4 = document.getElementById("energy_4");
let en_4_res;
en_4_res = green_top;

document.getElementById("energy_4").innerHTML = en_4_res;


let emotion_4 = document.getElementById("emotion_4");
let all_4_res;
all_4_res = ph_4_res + en_4_res;

all_4_res_str = String(all_4_res);
all_4_res_strA = all_4_res_str[0];
all_4_res_strB = all_4_res_str[1];

//ПРОВЕРКА на число > 22
if (all_4_res > 22) {
    let all_4_res_A_new = Number(all_4_res_strA);
    let all_4_res_B_new = Number(all_4_res_strB);
    all_4_res = all_4_res_A_new + all_4_res_B_new;
} else {
    document.getElementById("emotion_4").innerHTML = all_4_res;
}
let all_4_res_if = all_4_res;

//выводим на стр
document.getElementById("emotion_4").innerHTML = all_4_res_if;



// 5 Маніпура
let phisics_5 = document.getElementById("phisics_5");
let ph_5_res;
ph_5_res = comfort;
document.getElementById("phisics_5").innerHTML = ph_5_res;


let energy_5 = document.getElementById("energy_5");
let en_5_res;
en_5_res = comfort;

document.getElementById("energy_5").innerHTML = en_5_res;


let emotion_5 = document.getElementById("emotion_5");
let all_5_res;
all_5_res = ph_5_res + en_5_res;

all_5_res_str = String(all_5_res);
all_5_res_strA = all_5_res_str[0];
all_5_res_strB = all_5_res_str[1];

//ПРОВЕРКА на число > 22
if (all_5_res > 22) {
    let all_5_res_A_new = Number(all_5_res_strA);
    let all_5_res_B_new = Number(all_5_res_strB);
    all_5_res = all_5_res_A_new + all_5_res_B_new;
} else {
    document.getElementById("emotion_5").innerHTML = all_5_res;
}
let all_5_res_if = all_5_res;

//выводим на стр
document.getElementById("emotion_5").innerHTML = all_5_res_if;



// 6 Свадхістана
let phisics_6 = document.getElementById("phisics_6");
let ph_6_res;
ph_6_res = moneyR_3;
document.getElementById("phisics_6").innerHTML = ph_6_res;


let energy_6 = document.getElementById("energy_6");
let en_6_res;
en_6_res = karmaB3;

document.getElementById("energy_6").innerHTML = en_6_res;


let emotion_6 = document.getElementById("emotion_6");
let all_6_res;
all_6_res = ph_6_res + en_6_res;

all_6_res_str = String(all_6_res);
all_6_res_strA = all_6_res_str[0];
all_6_res_strB = all_6_res_str[1];

//ПРОВЕРКА на число > 22
if (all_6_res > 22) {
    let all_6_res_A_new = Number(all_6_res_strA);
    let all_6_res_B_new = Number(all_6_res_strB);
    all_6_res = all_6_res_A_new + all_6_res_B_new;
} else {
    document.getElementById("emotion_6").innerHTML = all_6_res;
}
let all_6_res_if = all_6_res;

//выводим на стр
document.getElementById("emotion_6").innerHTML = all_6_res_if;



// 7 Муладхара
let phisics_7 = document.getElementById("phisics_7");
let ph_7_res;
ph_7_res = moneyR_1;
document.getElementById("phisics_7").innerHTML = ph_7_res;


let energy_7 = document.getElementById("energy_7");
let en_7_res;
en_7_res = karmaB1;

document.getElementById("energy_7").innerHTML = en_7_res;


let emotion_7 = document.getElementById("emotion_7");
let all_7_res;
all_7_res = ph_7_res + en_7_res;

all_7_res_str = String(all_7_res);
all_7_res_strA = all_7_res_str[0];
all_7_res_strB = all_7_res_str[1];

//ПРОВЕРКА на число > 22
if (all_7_res > 22) {
    let all_7_res_A_new = Number(all_7_res_strA);
    let all_7_res_B_new = Number(all_7_res_strB);
    all_7_res = all_7_res_A_new + all_7_res_B_new;
} else {
    document.getElementById("emotion_7").innerHTML = all_7_res;
}
let all_7_res_if = all_7_res;

//выводим на стр
document.getElementById("emotion_7").innerHTML = all_7_res_if;



// 0 Итог
let phisics_0 = document.getElementById("phisics_0");
let ph_0_res;
ph_0_res = ph_1_res + ph_2_res + ph_3_res + ph_4_res + ph_5_res + ph_6_res + ph_7_res;
ph_0_res_str = String(ph_0_res);
ph_0_res_strA = ph_0_res_str[0];
ph_0_res_strB = ph_0_res_str[1];

//ПРОВЕРКА на число > 22
if (ph_0_res > 22) {
    let ph_0_res_A_new = Number(ph_0_res_strA);
    let ph_0_res_B_new = Number(ph_0_res_strB);
    ph_0_res = ph_0_res_A_new + ph_0_res_B_new;
} else {
    document.getElementById("phisics_0").innerHTML = ph_0_res;
}
let ph_0_res_if = ph_0_res;

//выводим на стр
document.getElementById("phisics_0").innerHTML = ph_0_res_if;


let energy_0 = document.getElementById("energy_0");
let en_0_res;
en_0_res = en_1_res + en_2_res + en_3_res + en_4_res + en_5_res + en_6_res + en_7_res;
en_0_res_str = String(en_0_res);
en_0_res_strA = en_0_res_str[0];
en_0_res_strB = en_0_res_str[1];

//ПРОВЕРКА на число > 22
if (en_0_res > 22) {
    let en_0_res_A_new = Number(en_0_res_strA);
    let en_0_res_B_new = Number(en_0_res_strB);
    en_0_res = en_0_res_A_new + en_0_res_B_new;
} else {
    document.getElementById("energy_0").innerHTML = en_0_res;
}
let en_0_res_if = en_0_res;

//выводим на стр
document.getElementById("energy_0").innerHTML = en_0_res_if;


let emotions_0 = document.getElementById("emotion_0");
let em_0_res;
em_0_res = all_1_res + all_2_res + all_3_res + all_4_res + all_5_res + all_6_res + all_7_res;
em_0_res_str = String(em_0_res);
em_0_res_strA = em_0_res_str[0];
em_0_res_strB = em_0_res_str[1];

//ПРОВЕРКА на число > 22
if (em_0_res > 22) {
    let em_0_res_A_new = Number(em_0_res_strA);
    let em_0_res_B_new = Number(em_0_res_strB);
    em_0_res = em_0_res_A_new + em_0_res_B_new;
} else {
    document.getElementById("emotion_0").innerHTML = em_0_res;
}
let em_0_res_if = em_0_res;

//выводим на стр
document.getElementById("emotion_0").innerHTML = em_0_res_if;



//Программы родовые

let man_pr1 = document.getElementById("man_pr1");
let man_pr1_res;
man_pr1_res = mT_1;
document.getElementById("man_pr1").innerHTML = man_pr1_res;

let man_pr2 = document.getElementById("man_pr2");
let man_pr2_res;
man_pr2_res = mB_1;
document.getElementById("man_pr2").innerHTML = man_pr2_res;

let man_pr3 = document.getElementById("man_pr3");
let man_pr3_res;
man_pr3_res = comfort;
document.getElementById("man_pr3").innerHTML = man_pr3_res;


//Женщина
let woman_pr1 = document.getElementById("woman_pr1");
let woman_pr1_res;
woman_pr1_res = wR_1;
document.getElementById("woman_pr1").innerHTML = woman_pr1_res;

let woman_pr2 = document.getElementById("woman_pr2");
let woman_pr2_res;
woman_pr2_res = wB_1;
document.getElementById("woman_pr2").innerHTML = woman_pr2_res;

let woman_pr3 = document.getElementById("woman_pr3");
let woman_pr3_res;
woman_pr3_res = comfort;
document.getElementById("woman_pr3").innerHTML = woman_pr3_res;