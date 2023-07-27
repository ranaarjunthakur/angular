///////////////////////////Syntax//////////////////////////


 let regEx = /Arjun/;                         // using regular Experssion literal
 let regex2 = /Arjun/g;                      //using  regular Experssion literal with Flag
 let regex3 = new RegExp('Arjun')            // using Constructor
 let regex4 = new RegExp('Arjun',[g])       // using Constructor with Flag



///////////////// character set[xyz]////////////////////////////

let regex = /[ar]/ig

let string1 = 'Arjun My Name Is Arjun Arjun';
console.log(regex.test('ar'));  //true


/////////////////Negated character set[^xyz]////////////////////////////

let regex1 = /[^ar]/ig

let string = 'Arjun My Name Is Arjun Arjun';
console.log(regex1.test('ar'));  //false


/////////////Ranges Set [a-z][0-9][A-Z]///////////

let regex2 = /[a-z]ear/
console.log(regex2.test('fear'))   //true
console.log(regex2.test('@$../,ear'))   //false


////////////////Dot(.) Qunatifier////////agar phela  or last ka letter pta ho then use it////////////

let regex3 = /a...n/
console.log(regex3.test('arjun'))   //true
console.log(regex3.test('arun'))    //false


///////////////////Caret(^) Qunatifier////// starting me agar same string mil jye give true //////

let regex4 = /^3456789/
console.log(regex4.test(345))


///////////////////Dollar($) Qunatifier/////   agar last me same string mil jaye then true///////

let regex5 = /3456345$/
console.log(regex5.test('1231345'))

 
 /////////////optional(?) Qunatifier/////////  jha bhi  ? lge wo letter optoional ho jata h chye ho ya na ho /////
 
 let regex6 = /goo?d/gi
 console.log(regex6.test('god'))
console.log(regex6.test('good'))
console.log(regex6.test('goood'))

//////////////min&max {x,y} Qunatifier/////////  ye match krta h ki kya wo word lagatar utne time  h k nhi {2,3} aa , aaa ////////

let regex7 = /a{2,3}/gi
console.log(regex7.test('amaan ne kamaaaal kr diyaa'))


//////////////////OR (a|b) Qunatifier///////// a  ya b me se kuch bhi ho true dega//////////


let regex8 = /a|b/
console.log(regex8.test('abe chal'))  //true
console.log(regex8.test('htt c'))    //false


///////////////////{n}Qunatifiers////////////// kam se kam itne hi hone chaiye{2} to 2 hi  hone chaiye {aa} ////////////

let regex9 =  /ap{2}le/
console.log(regex9.test('appple'))
console.log(regex9.test('aple'))
console.log(regex9.test('apple'))


///////////////////{n,}Qunatifiers///////////// kitne  bhi ho skte h same word a{2,}  {aaaaaaaaaaaaa}/////////////

let regex10 =  /ap{2,}le/
console.log(regex9.test('appple'))
console.log(regex9.test('aple'))
console.log(regex9.test('apple'))




///////////////////(*)Qunatifiers///////////// kitne bhi ho skte h  /////////////


let regex11= /Hi*Ai*/
console.log(regex11.test('HiiiiiiiiiiiiiiiAiiiiiiii'))  //true
console.log(regex11.test('H'))                       //false



///////////////////(+)Qunatifiers//////////////////////////


let regex12= /Hi+/
console.log(regex12.test('Hiiiiiiiiiiiiiii'))   //true
console.log(regex12.test('H'))                 //false


///////////////////bakslash (\)Qunatifiers//////////////////////////


const regex13 = /\./;
console.log(regex13.test("Hello.world")); // true
console.log(regex13.test("Hello@world")); // false
