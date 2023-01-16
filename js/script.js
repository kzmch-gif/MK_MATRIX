let button_submit = document.getElementById("fsubmit");

function someFunc() {
    let firstName = document.getElementById("firstName").value;
    let dataBirth = document.getElementById("dataBirth").value;
    let male = document.querySelector('input[name="male"]:checked').value;

    debugger;
    //получаем первый символ день
    let a = Number(dataBirth[0]);
    let b = Number(dataBirth[1]);
    let day_all_str = dataBirth[0] + dataBirth[1];
    let day_all = Number(day_all_str);
    let day;

    //проверка на число больше 22 и 0 перед цифрой
    if (a == 0 || day_all > 22) {
        day = a + b;
    } else {
        return alert("Помилка вводу дня");
    }


    //получаем месяц
    let month_1 = dataBirth[3];
    let month_2 = dataBirth[4];

    let month_str = month_1 + month_2;
    let month = Number(month_str);


    //Проверка месяц есть такой 
    if (month > 12 || month == 0) {
        alert('Ви ввели недійсний місяць')
        return 0;
    }
    //получаем год
    let year_1 = Number(dataBirth[6]);
    let year_2 = Number(dataBirth[7]);
    let year_3 = Number(dataBirth[8]);
    let year_4 = Number(dataBirth[9]);

    let year = year_1 + year_2 + year_3 + year_4;
    debugger;
    alert(day);
    alert(month);
    alert(year);

    alert(firstName);
    alert(male);


}
button_submit.onclick = someFunc;

// var form = document.getElementById("myForm");
// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm);