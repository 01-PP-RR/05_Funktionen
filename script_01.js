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
ausgabeName();

function ausgabeName() 
{
    // what happens in VEGAS ...
   let firstName = " Sven";
console.log("Hallo" + firstName + "!");
}


console.log(firstName); // Fehler: Scope!