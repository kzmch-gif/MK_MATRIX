$(document).ready(function () {
    $(dataBirth).inputmask("99.99.9999");  //static mask
});
//сделать проверку на валидацию

var form = document.querySelector('.formValidate')
let button_submit = document.getElementById("fsubmit");


function validation(day_all, month, year, dataBirth, firstName) {
    let result = true;

    if (day_all == 0) {
        alert('Ви ввели недійсний день')
        result = false;
    }


    //Проверка месяц есть такой 
    if (month > 12 || month == 0) {
        alert('Ви ввели недійсний місяць')
        result = false;
    }

    if (year == 0) {
        alert('Ви ввели недійсний рік');
        result = false;
    }

    if(dataBirth[6] == " " || dataBirth[7] == " " || dataBirth[8] == " " || dataBirth[9] == " "){
        alert('Введіть будь ласка повний рік')
        result = false;
    }
debugger
    if (firstName == ''){
        alert('Заповніть будь-ласка імʼя')
        result = false;
    }


    return result;
}


form.addEventListener('submit', function (event) {
    event.preventDefault()

    let firstName = document.getElementById("firstName").value;
    let dataBirth = document.getElementById("dataBirth").value;
    let res_male;
    let male = document.querySelector('input[name="male"]:checked').value;
    debugger
    if (male == 'Чоловік' || male == 'Жінка'){
      res_male = male;
    } else {
        alert('Оберіть стать')
    }


    //получаем первый символ день
    let a = Number(dataBirth[0]);
    let b = Number(dataBirth[1]);
    let day_all_str = dataBirth[0] + dataBirth[1];
    let day_all = Number(day_all_str);

    //проверка на число больше 22 и 0 перед цифрой
    if (a == 0 || day_all > 22) {
        day_all = a + b;
    }



    //получаем месяц
    let month_1 = dataBirth[3];
    let month_2 = dataBirth[4];

    let month_str = month_1 + month_2;
    let month = Number(month_str);



    //получаем год
    let year_1 = Number(dataBirth[6]);
    let year_2 = Number(dataBirth[7]);
    let year_3 = Number(dataBirth[8]);
    let year_4 = Number(dataBirth[9]);


    let year = year_1 + year_2 + year_3 + year_4;
    let year_str = String(year);
    let a_year_str = year_str[0];
    let b_year_str = year_str[1];
    //проверка на число больше 22 
    if (year > 22) {
        //получаем первый и второй символ года
        let a_year_str_new = Number(a_year_str);
        let b_year_str_new = Number(b_year_str);
        year = a_year_str_new + b_year_str_new;
    }


    if (validation(day_all, month, year, dataBirth, firstName) == true) {

        //засовываем данные на след стр
        localStorage.setItem("day", day_all);
        localStorage.setItem("month", month);
        localStorage.setItem("year", year);
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("male", res_male);

        window.location.href = './calculation_result.html';

    } else {
        window.location.reload();
    }


});

// var form = document.getElementById("myForm");
// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm);



//SLICK SLIDER
$('.alltypes-matrix-h1-soon').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 900,
  });