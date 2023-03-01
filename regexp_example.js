//////////////////CHECK FIRST LETTER UPPERCASE ////////////////////////

function firstLetter(name){
    if(name.charAt(0).toUpperCase()){
        return true
    } else {
        return false
    }
}

let name = 'RattleSnake'
let res = firstLetter(name)
console.log(res)

/////////////////////////////////

function uppercase(str){
    
    regexp = /^[A-Z]/
    if(regexp.test(str)){
        return true
    }else{
        return false
    }
}

console.log(uppercase("aRJUN"))

////////////// EMAIL  CHECKING WITH REGEXP//////////////////////////

function mailformat(str){
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(mailformat.test(str)){
        return true
    }else{
        return false
    }
}

console.log(mailformat("arjun@gmail.com"))


////////////////////////////////

function Trim(str){
    var  res;
    if(typeof str ===  'string'){
        res = str.replace(/^\s+|\s+$/g, '');
        return res;
    }else{
        return false
    }
}

console.log(Trim(' india '))
