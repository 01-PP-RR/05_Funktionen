"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf  (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{

   console.log("Hallo Karsten");
}
/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN
// ausgabeName();

function ausgabeName() 
{
    // what happens in VEGAS ...
   let firstName = " Sven";
console.log("Hallo" + firstName + "!");
}


// console.log(firstName); // Fehler: Scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamenParam("Asad"); // call + Argement (Daten für Parameter)
ausgabeNamenParam("Roxana");
ausgabeNamenParam("Sven");
// call + Argement Parameter)
function ausgabeNamenParam(firstName) { // Parameter
    console.log("Hallo" + firstName + "!");

}

