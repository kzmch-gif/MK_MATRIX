let button_submit = document.getElementById("fsubmit");

function someFunc() {
    let firstName = document.getElementById("firstName").value;
    let dataBirth = document.getElementById("dataBirth").value;
    let maleId = document.getElementById("maleId").value;
    let languageId = document.getElementById("languageId").value;
    
    function trim_date() {
        //получаем первый символ
        let a = dataBirth[0];
        let b = dataBirth[1];

        //преобразование типов в число
        var a_number = Number(a);
        var b_number = Number(b);
        var day; 

        //проверка на число больше 22 и 0 перед цифрой
        if (a_number == 0 || dataBirth > 22){
            day = a_number + b_number;
            alert(day);
        }
    }
    
    trim_date();
}

button_submit.onclick = someFunc;

