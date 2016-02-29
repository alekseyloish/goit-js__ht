(function(){
    
    var listOfNames = [];
    var enterOk = false;

    for (var i = 0; i < 5; i++) {
        listOfNames[i] = prompt('Заполните массив именами:');
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
