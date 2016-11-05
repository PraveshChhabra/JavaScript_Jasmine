/*
Sum Mutiple number
*/
function Sum(){
    var i;
    var answer=0;
    for (i = 0; i < arguments.length; i++) {  
            if(isNumber(arguments[i]))
                answer = parseInt(answer) + parseInt(arguments[i]);  
            else
                return 0;
    }
    return answer;
}

/*
Minus Mutiple number
*/
function Minus(){
    var i;
    var answer=0;
    for (i = 0; i < arguments.length; i++) {  
            if(isNumber(arguments[i]))
                {
                    if(i===0)
                        answer = arguments[i]
                    else
                        answer = answer - arguments[i];  
                }
            else
                return 0;
    }
    return answer;
}

/*
Multiply Mutiple number
*/
function Multiple(){
    var i;
    var answer=0;
    for (i = 0; i < arguments.length; i++) {  
            if(isNumber(arguments[i]))
                {
                    if(i===0)
                        answer = arguments[i]
                    else
                        answer = answer * arguments[i];  
                }
            else
                return 0;
    }
    return answer;
}

/*
Divide Mutiple number
*/
function Divide(){
   var i;
    var answer=0;
    for (i = 0; i < arguments.length; i++) {  
            if(isNumber(arguments[i]))
                {
                    if(i===0)
                        answer = arguments[i]
                    else
                        answer = answer / arguments[i];  
                }
            else
                return 0;
    }
    return answer;
}

/*
Check whether the argument in number or not
*/
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

