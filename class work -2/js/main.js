let result = prompt('Put some number?')

function answer (a) {
    if( a > 0 && a < 15){
        return 'first part of time'
    }else if( a >= 15 && a < 30){
        return 'second part of time'
    }else if (a >=30 && a < 45){
        return 'third part of time'
    }else if (a >= 45 && a < 60){
        return 'fourth part of time'
    } else {
        return 'Wrong part of time'
    }
}
 alert(answer(result));