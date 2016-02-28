(function() {
    
    var x, n, res;
    
    do {
        
        x = prompt("Введите число:", "");
        n = prompt("Введите степень в которую хотите возвести число " + x + ":", "");
        
        var checkInp = function(inputVal) {            
            if (inputVal == null) {
                return false;
            } else {
                return true;
            }
        }
        
        var pow = function(base, n) {
            var result = base;
            
            if ( !isNaN(base) && !isNaN(n) ) {
                for (var i = 1; i < n; i++) {
                    result *= base;
                }
            } else return false;
            
            return result;
        }
        
        if ( checkInp(x) && checkInp(n) ) {
            res = pow(x, n);
            console.log("Число " + x + " в степени " + n + " = " + res );
        } else {
            break;
        }
        
        var repeat = confirm('Посчитать еще раз?');
    } while (repeat);
    
    console.log('Выполнение программы завершено...')
    
}());



