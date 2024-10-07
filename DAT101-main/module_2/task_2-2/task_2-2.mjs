 "use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let a = 2 + 3 * 2 - 4 * 6 ;
let a2 = 2 + 3 * (2 - 4) * 6 ; 

printOut(a + "") ; // the result is NOT -34 it is -16
printOut(a2 + "") ;  // the result IS -34

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let b = 25 * 1000 ;
let c = 34 * 10 ;
const Inch = (b + c) / 25.4 ;


printOut(Inch.toFixed(2) + "");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let day = 3 * 24 * 60 ;
let hour = 12 * 60 ;
let min = 14 ;
let sec = 45 / 60 ;


printOut( day + hour + min + sec + "");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let day2 = 6322.52 / (24 * 60) ;
let hour2 = 6322.52 / 60 ;
let min2 = 6322.52 ;
let sec2 = 6322.52 * 60 ;

let part4 = day2 + hour2 + min2 + sec2 ;
printOut( part4.toFixed(2) + "" );
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const exchange_rate_to_Nok = 76 / 8.6 ;
const Usd = 54 ;
let Nok = Usd * exchange_rate_to_Nok ;

let part5 =  Nok + Usd ;
printOut( part5.toFixed(2) + "");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let Heaven = "There is much between heaven and earth that we do not understand" ;
let result = Heaven.slice(35, 35 + 8) ;

printOut(Heaven.length + "" );
printOut(Heaven.charAt(18) + "");
printOut(result + "");
printOut(Heaven.indexOf("earth").toString());
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let task1 = Boolean (5 > 3) ;
let task2 = Boolean (7 >= 7) ;
let task3 = Boolean ("a" > "b") ; 
let task4 = Boolean (1 < "a") ;
let task5 = Boolean (2500 < "abcd") ;
let task6 = Boolean ("arne" != "thomas") ;
let task7 = Boolean (2 == 5) ;

if ( task7 == true ) {
    const t7 = "this statement is true"
} else {
    const t7 = "this statement is false"
} 

let task8 = Boolean ("abcd" == "bcd") ;

if ( task8 == false ) {
    const t8 = "this statement is false"
} else {
    const t8 = "this statement is true"
} 

printOut( task1 + "") ;
printOut( task2 + "") ;
printOut( task3 + "") ;
printOut( task4 + "") ;
printOut( task5 + "") ;
printOut( task6 + "") ;
printOut( task7 + "") ;
printOut( task8 + "") ;
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const text = "254"
const number = Number(text) ;
const text2 = "57.23" 
const number2 = Number(text2) ;
const text3 = "25 kroner"
const number3 = Number(text3) ;


printOut( text + "") ;
printOut( text2 + "") ;
printOut( text3 + "") ;
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor(Math.random() * 360) + 1 ;

printOut(r + "") ;                                                                                                                                            
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let index = 7 ;
let arraylength = 131 ;
let cyclicIndex = index % arraylength ;

printOut(cyclicIndex + "") ;
printOut(newLine);


printOut("--- Collaboraative part ---------------------------------------------------------------------------------");