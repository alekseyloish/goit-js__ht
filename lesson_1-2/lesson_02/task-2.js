(function(){
    
    var listOfNames = [];
    var enterOk = false;
    var regName = /^[а-яА-ЯёЁa-zA-Z]+$/;


    function checkName(val) {
        if (regName.test(val)) {
            return true;
        } else {
            alert('Введите имя корректно!')
            return false;
        }
    }

    var i = 0;
    while (i < 5) {
        var currentName = prompt('Заполните массив именами:');

        if ( currentName !== '' ) {
            if ( checkName(currentName) ) {
                listOfNames[i] = currentName;
                i++;
            }
        }
    }

    console.log(listOfNames);

    var userName = prompt('Введите имя пользователя:');
    for (var i = 0; i < listOfNames.length; i++) {

        if (userName == listOfNames[i]) {
            enterOk = true;
            alert(userName + ', вы успешно вошли');
        }

    }

    if (!enterOk) {
        alert('Такого пользователя нет в базе');
    }

}());
