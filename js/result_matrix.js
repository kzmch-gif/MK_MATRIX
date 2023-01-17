//выводим данные с прошлой стр
let day = Number(localStorage.getItem("day"));
let month = Number(localStorage.getItem("month"));
let year = Number(localStorage.getItem("year"));

debugger
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
debugger
moneyR_1 = year;
document.getElementById("moneyR_1").innerHTML = year;


//зона кармы
let karmaB1 = document.getElementById("karmaB1");
karmaB1 = day + month + year;
karmaB1_str = String(karmaB1);
karmaB1_strA = karmaB1_str[0];
karmaB1_strB = karmaB1_str[1];

if (karmaB1 > 22) {
    let karmaB1_A_new = Number(karmaB1_strA);
    let karmaB1_B_new = Number(karmaB1_strB);
    karmaB1 = karmaB1_A_new + karmaB1_B_new;
} else {
    document.getElementById("karmaB1").innerHTML = karmaB1;
}
let karmaB1_res = karmaB1;

document.getElementById("karmaB1").innerHTML = karmaB1_res;


//зона папы
let mt_1 = document.getElementById("mt_1");
mt_1 = day + month;

document.getElementById("mt_1").innerHTML = mt_1;
